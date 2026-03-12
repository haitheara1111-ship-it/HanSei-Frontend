<template>
  <aside class="w-64 h-screen bg-white shadow-lg flex flex-col">
    <!-- Logo -->
    <div class="flex items-center justify-center h-16 border-b">
      <img src="/logo.png" alt="Logo" class="h-10 w-10" />
      <span class="ml-2 font-bold text-lg">HanSei Electronics</span>
    </div>

    <!-- Menu -->
    <nav class="flex-1 overflow-y-auto mt-4">
      <ul>
        <li
          v-for="menu in menus"
          :key="menu.name"
          class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
        >
          <span>{{ menu.name }}</span>
          <span
            v-if="menu.label"
            class="text-xs text-white bg-red-500 rounded px-2"
          >
            {{ menu.label }}
          </span>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  menus: {
    type: Array,
    default: () => [
      { name: "Dashboard", label: "Hot" },
      { name: "Admin Dashboard", label: null },
      { name: "Employee Dashboard", label: null },
      { name: "Deals Dashboard", label: null },
      { name: "Leads Dashboard", label: null },
      { name: "HR Dashboard", label: "New" },
      { name: "Payroll Dashboard", label: "New" },
      { name: "Recruitment Dashboard", label: "New" },
      { name: "Attendance Dashboard", label: "New" },
      { name: "Finance Dashboard", label: "New" },
      { name: "IT Admin Dashboard", label: "New" },
      { name: "Asset Dashboard", label: "New" },
      { name: "Help Desk Dashboard", label: "New" },
    ],
  },
});
</script>

<style scoped>
aside {
  overflow-y: auto;
}
</style>