<template>
  <div class="bg-white rounded-xl shadow p-6">

    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-lg font-semibold">Projects</h2>
      <button class="text-sm text-orange-500">View All</button>
    </div>

    <!-- Project List -->
    <div class="space-y-4">

      <div
        v-for="project in projects"
        :key="project.id"
        class="border rounded-lg p-4"
      >
        <div class="flex justify-between mb-2">
          <h3 class="font-medium">{{ project.name }}</h3>
          <span class="text-sm text-gray-500">
            {{ project.deadline }}
          </span>
        </div>

        <!-- Progress -->
        <div class="w-full bg-gray-200 h-2 rounded-full">
          <div
            class="bg-purple-500 h-2 rounded-full"
            :style="{ width: project.progress + '%' }"
          ></div>
        </div>

        <p class="text-xs text-gray-500 mt-1">
          {{ project.progress }}% completed
        </p>

      </div>

    </div>

  </div>
</template>

<script setup>
const projects = [
  {
    id: 1,
    name: "HR Management System",
    progress: 75,
    deadline: "Apr 15"
  },
  {
    id: 2,
    name: "Employee Portal",
    progress: 45,
    deadline: "Apr 30"
  },
  {
    id: 3,
    name: "Payroll Integration",
    progress: 60,
    deadline: "May 10"
  }
]
</script>