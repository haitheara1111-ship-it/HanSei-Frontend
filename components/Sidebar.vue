<template>
  <aside class="w-80 h-screen bg-white flex flex-col">
    <!-- Title -->
    <div class="flex items-center justify-center h-16 border-b">
      <span class="font-bold text-lg">HanSei Electronics</span>
    </div>

    <!-- Menu -->
    <nav class="flex-1 overflow-y-auto mt-4">
      <ul>
        <li v-for="(menu, index) in menus" :key="index" class="px-4">
          
          <!-- Main menu item -->
          <div
            class="flex items-center justify-between py-2 cursor-pointer hover:bg-gray-100 rounded"
            @click="toggleMenu(index)"
          >
            <div class="flex items-center space-x-2">
              <span>{{ menu.name }}</span>
              <span
                v-if="menu.label"
                class="text-xs text-white bg-red-500 rounded px-2"
              >
                {{ menu.label }}
              </span>
            </div>

            <span>
              <svg
                v-if="menu.submenu"
                :class="{ 'transform rotate-180': menu.open }"
                class="w-4 h-4 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>

          <!-- Submenu -->
          <ul v-if="menu.submenu && menu.open" class="pl-6 mt-1">
            <li
              v-for="(sub, subIndex) in menu.submenu"
              :key="subIndex"
              class="py-1 flex items-center justify-between cursor-pointer hover:text-orange-500"
            >
              <!-- Use NuxtLink for navigation -->
              <NuxtLink :to="sub.path" class="flex-1">
                {{ sub.name }}
              </NuxtLink>

              <span
                v-if="sub.label"
                class="text-xs text-white bg-red-500 rounded px-2"
              >
                {{ sub.label }}
              </span>
            </li>
          </ul>

        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { reactive } from "vue";

const menus = reactive([
  {
    name: "Dashboard",
    label: "Hot",
    open: false,
    submenu: [
      { name: "Admin Dashboard", path: "/" },
      { name: "Employee Dashboard", path: "/Employee-Dashboard" },
      { name: "HR Dashboard", path: "/HR-page", label: "New" },
      { name: "Roster Dashboard", path: "/Roster", label: "New" },
    ],
  },
]);

const toggleMenu = (index) => {
  menus[index].open = !menus[index].open;
};
</script>

<style scoped>
aside {
  overflow-y: auto;
}
</style>