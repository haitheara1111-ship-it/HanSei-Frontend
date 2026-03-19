<template>
  <div class="bg-white rounded-xl shadow p-6">

    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-lg font-semibold">Attendance Overview</h2>

      <Nuxtlink to="/ Attendence" class="border px-3 py-1 rounded-md text-sm hover:bg-gray-100">
        Today
      </Nuxtlink>
    </div>

    <!-- Chart -->
    <div class="flex justify-center">
      <canvas ref="chartRef" class="w-60 h-60"></canvas>
    </div>

  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import Chart from "chart.js/auto"

const chartRef = ref(null)

onMounted(() => {
  new Chart(chartRef.value, {
    type: "doughnut",
    data: {
      labels: ["Present", "Late", "Absent", "Leave"],
      datasets: [
        {
          data: [110, 15, 10, 19],
          backgroundColor: [
            "#16a34a",
            "#facc15",
            "#ef4444",
            "#0ea5e9"
          ],
          borderWidth: 0
        }
      ]
    },
    options: {
      cutout: "70%",
      plugins: {
        legend: {
          position: "bottom"
        }
      }
    }
  })
})
</script>