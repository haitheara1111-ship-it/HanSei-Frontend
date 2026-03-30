<template>
  <aside class="fixed top-0 left-0 w-80 h-screen bg-white flex flex-col border-r border-gray-100 z-40">
    
    <!-- Logo -->
    <div class="flex items-center justify-center h-16 border-b flex-shrink-0">
      <img src="https://i.ibb.co/gBgkSKR/Chat-GPT-Image-Mar-16-2026-04-05-52-PM.png" class="h-8 object-contain">
    </div>

    <!-- Sidebar -->

    <nav class="flex-1 overflow-y-auto mt-4 px-2 space-y-2">
      <div v-for="(menu, index) in menus" :key="index">

        <!-- Parent -->
        <div
          @click="toggleMenu(index)"
          class="flex items-center justify-between py-2.5 px-3 rounded-lg cursor-pointer transition-all duration-200"
          :class="menu.open ? 'bg-orange-50 text-orange-600' : 'hover:bg-orange-50 hover:text-orange-600'"
        >
          <div class="flex items-center gap-2" >
            <span class="font-semibold text-sm">{{ menu.name }}</span>

            <span
              v-if="menu.label"
              class="text-[10px] bg-red-500 text-white px-1.5 py-0.5 rounded font-bold uppercase"
            >
              {{ menu.label }}
            </span>
          </div>

          <svg
            v-if="menu.submenu"
            class="w-4 h-4 transition-transform duration-300"
            :class="menu.open ? 'rotate-180 text-orange-600' : 'text-gray-400'"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <!-- Submenu -->
        <div
          class="overflow-hidden transition-all duration-300"
          :class="menu.open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
        >
          <div class="pl-4 mt-1 space-y-1">
            <NuxtLink
              v-for="(sub, subIndex) in menu.submenu"
              :key="subIndex"
              :to="sub.path"
              class="flex items-center justify-between px-4 py-2 text-sm rounded-md transition-all"
              :class="[
                isActive(sub.path)
                  ? 'bg-orange-50 text-orange-600 font-semibold'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-orange-500'
              ]"
            >
              <span>{{ sub.name }}</span>

              <span
                v-if="sub.label"
                class="text-[9px] bg-red-500 text-white px-1.5 py-0.5 rounded"
              >
                {{ sub.label }}
              </span>
            </NuxtLink>
          </div>
        </div>

      </div>

    </nav>
  </aside>

  <div class="hidden lg:block w-80"></div>
</template>
<script setup>
import { reactive, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
const role = 'admin ';

const route = useRoute();

/**
 * 🔐 USER ROLE (replace with backend later)
 */
const user = reactive({
  role: "employee", // change to "admin"
});

/**
 * 📊 MENU DATA
 */
const rawMenus = reactive([
  {
    name: "Main",
    open: true,
    submenu: [
      { name: "Dashboard", path: "/dashboard", role: "admin" },
      { name: "Employee Dashboard", path: "/Employee-Dashboard", role: "employee" },
      { name: "Attendance", path: "/HR-page", role: "employee" },
      { name: "Roster", path: "/Roster", role: "employee" },
      { name: "My Leave", path: "/Leave", role: "employee" },

      { name: "Manage Attendance", path: "/HR-page", role: "admin" },
      { name: "Manage Roster", path: "/Roster", role: "admin" },
      { name: "Positions", path: "/position", role: "admin" },
      { name: "Leave Management", path: "/Leave", role: "admin" },
      { name: "Employees", path: "/employees", role: "admin" },
    ],
  },
]);

onMounted (()=>{
})

/**
 * 🧠 Detect current page based on REAL routes
 */
const currentPage = computed(() => {
  if (route.path.startsWith("/dashboard")) return "admin";
  if (route.path.startsWith("/Employee-Dashboard")) return "employee";
  return "unknown";
});

/**
 * 🎯 FILTER MENU (FIXED)
 */
const menus = computed(() => {
  return rawMenus.map(menu => {
    const filtered = menu.submenu.filter(sub => {
      return sub.role === user.role;
    });

    return { ...menu, submenu: filtered };
  }).filter(menu => menu.submenu.length > 0);
});

/**
 * 🔁 TOGGLE MENU
 */
const toggleMenu = (index) => {
  rawMenus[index].open = !rawMenus[index].open;
};

/**
 * 🎯 ACTIVE LINK
 */
const isActive = (path) => {
  return route.path.startsWith(path);
};
</script>