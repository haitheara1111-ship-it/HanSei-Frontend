<template>
  <aside class="fixed top-0 left-0 w-80 h-screen bg-white flex flex-col border-r border-gray-100 z-40">
    
    <div class="flex items-center justify-center h-16 border-b flex-shrink-0">
      <img src="https://i.ibb.co/gBgkSKR/Chat-GPT-Image-Mar-16-2026-04-05-52-PM.png" alt="Logo" class="h-8 object-contain">
    </div>

    <nav class="flex-1 overflow-y-auto mt-4 custom-scrollbar">
      <ul>
        <li v-for="(menu, index) in menus" :key="index" class="px-4 mb-2">
          
          <div
            class="flex items-center justify-between py-2.5 px-3 cursor-pointer hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-all group"
            :class="{ 'bg-orange-50 text-orange-600': menu.open }"
            @click="toggleMenu(index)"
          >
            <div class="flex items-center space-x-3">
              <span class="font-semibold text-sm">{{ menu.name }}</span>
              <span
                v-if="menu.label"
                class="text-[10px] text-white bg-red-500 rounded px-1.5 py-0.5 font-bold uppercase"
              >
                {{ menu.label }}
              </span>
            </div>

            <span v-if="menu.submenu">
              <svg
                :class="{ 'transform rotate-180': menu.open }"
                class="w-4 h-4 transition-transform text-gray-400 group-hover:text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>

          <transition name="slide">
            <ul v-if="menu.submenu && menu.open" class="pl-4 mt-1 space-y-1">
              <li
                v-for="(sub, subIndex) in menu.submenu"
                :key="subIndex"
                class="flex items-center justify-between rounded-md overflow-hidden"
              >
                <NuxtLink 
                  :to="sub.path" 
                  class="flex-1 py-2 px-4 text-sm text-gray-500 hover:text-orange-500 hover:bg-gray-50 transition-colors flex items-center justify-between"
                  active-class="text-orange-600 font-bold bg-orange-50"
                >
                  <span>{{ sub.name }}</span>
                  <span
                    v-if="sub.label"
                    class="text-[9px] text-white bg-red-500 rounded px-1.5 py-0.5"
                  >
                    {{ sub.label }}
                  </span>
                </NuxtLink>
              </li>
            </ul>
          </transition>

        </li>
      </ul>
    </nav>
  </aside>

  <div class="hidden lg:block w-80 flex-shrink-0"></div>
</template>

<script setup>
import { reactive } from "vue";

const menus = reactive([
  {
    name: "Dashboard",
    label: "Hot",
    open: true, // Default open for better UX
    submenu: [
      { name: "Admin Dashboard", path: "/" },
      { name: "Employee Dashboard", path: "/Employee-Dashboard" },
      { name: "HR Dashboard", path: "/HR-page", label: "New" },
      { name: "Roster Dashboard", path: "/Roster", label: "New" },
      { name: "Jobs", path: "/JobsListing", label: "" },
      


    ],
  },
]);

const toggleMenu = (index) => {
  menus[index].open = !menus[index].open;
};
</script>

<style scoped>
/* Smooth slide transition for submenus */
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
  max-height: 200px;
}
.slide-enter-from, .slide-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}

/* Custom scrollbar for a cleaner look */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #d1d5db;
}
</style>