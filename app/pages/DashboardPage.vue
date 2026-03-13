<template>
  <DashboardLayout>
    <!-- Example content cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white p-4 rounded shadow">
        <h3 class="font-semibold text-gray-700">Total Employees</h3>
        <p class="text-3xl font-bold">1,243</p>
      </div>

      <div class="bg-white p-4 rounded shadow">
        <h3 class="font-semibold text-gray-700">Absent Today</h3>
        <p class="text-3xl font-bold text-red-500">37</p>
      </div>

      <div class="bg-white p-4 rounded shadow">
        <h3 class="font-semibold text-gray-700">Leaves Pending</h3>
        <p class="text-3xl font-bold text-yellow-500">12</p>
      </div>
    </div>

    <!-- Example chart placeholder -->
    <div class="mt-8 bg-white p-6 rounded shadow h-64 flex items-center justify-center text-gray-400">
      Chart Placeholder
    </div>
  </DashboardLayout>
</template>

<script setup>
import DashboardLayout from "@/components/DashboardLayout.vue";
</script>