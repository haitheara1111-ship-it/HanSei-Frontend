<template>
  <div class="bg-white rounded-xl shadow p-6">

    <div class="flex justify-between items-center mb-6">
      <h2 class="text-lg font-semibold">Sales Overview</h2>
      <button class="text-sm border px-3 py-1 rounded-md">
        This Month
      </button>
    </div>

    <div class="space-y-4">

      <div v-for="sale in sales" :key="sale.month">

        <div class="flex justify-between text-sm mb-1">
          <span>{{ sale.month }}</span>
          <span>${{ sale.amount }}</span>
        </div>

        <div class="w-full bg-gray-200 h-2 rounded-full">
          <div
            class="bg-orange-500 h-2 rounded-full"
            :style="{ width: sale.percent + '%' }"
          ></div>
        </div>

      </div>

    </div>

  </div>
</template>

<script setup>

const sales = [
  { month: "Jan", amount: 1200, percent: 40 },
  { month: "Feb", amount: 1800, percent: 60 },
  { month: "Mar", amount: 2500, percent: 80 },
  { month: "Apr", amount: 3000, percent: 95 }
]

</script>