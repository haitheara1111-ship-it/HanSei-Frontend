<template>
  <div class="bg-white rounded-xl shadow p-6 w-full">

    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-lg font-semibold">Employees By Department</h2>

      <button
        class="border text-sm px-3 py-1 rounded-md hover:bg-gray-100"
      >
        This Week
      </button>
    </div>

    <!-- Departments -->
    <div class="space-y-5">

      <div v-for="dept in departments" :key="dept.name">
        <div class="flex justify-between text-sm mb-1">
          <span class="text-gray-600">{{ dept.name }}</span>
          <span class="text-gray-400">{{ dept.value }}</span>
        </div>

        <!-- Progress Bar -->
        <div class="w-full bg-gray-200 h-2 rounded-full">
          <div
            class="bg-orange-500 h-2 rounded-full"
            :style="{ width: dept.value + '%' }"
          ></div>
        </div>
      </div>

    </div>

    <!-- Footer -->
    <p class="text-xs text-gray-500 mt-6">
      <span class="text-orange-500">●</span>
      No of Employees increased
      <span class="text-green-500 font-semibold">+20%</span>
      from last Week
    </p>

  </div>
</template>

<script setup>
const departments = [
  { name: "UI/UX", value: 70 },
  { name: "Development", value: 100 },
  { name: "Management", value: 80 },
  { name: "HR", value: 25 },
  { name: "Testing", value: 60 },
  { name: "Marketing", value: 100 }
]
</script>