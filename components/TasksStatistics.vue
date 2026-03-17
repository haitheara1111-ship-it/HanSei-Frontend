<template>
  <div class="bg-white rounded-xl shadow p-6">

    <h2 class="text-lg font-semibold mb-6">
      Tasks Statistics
    </h2>

    <div class="space-y-5">

      <div v-for="task in stats" :key="task.name">

        <div class="flex justify-between text-sm mb-1">
          <span>{{ task.name }}</span>
          <span>{{ task.value }}%</span>
        </div>

        <div class="w-full bg-gray-200 h-2 rounded-full">
          <div
            class="bg-pink-500 h-2 rounded-full"
            :style="{ width: task.value + '%' }"
          ></div>
        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
const stats = [
  { name: "Completed Tasks", value: 70 },
  { name: "In Progress", value: 50 },
  { name: "Pending Tasks", value: 25 },
  { name: "Overdue Tasks", value: 10 }
]
</script>