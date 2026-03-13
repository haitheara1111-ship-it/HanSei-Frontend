<template>
  <div class="bg-white rounded-xl shadow p-6 w-full">

    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-lg font-semibold">Employee Status</h2>

      <button class="border px-3 py-1 rounded-md text-sm hover:bg-gray-100">
        This Week
      </button>
    </div>

    <!-- Total Employees -->
    <div class="flex justify-between items-center mb-4">
      <p class="text-gray-500 text-sm">Total Employee</p>
      <p class="text-xl font-bold">{{ total }}</p>
    </div>

    <!-- Stacked Progress Bar -->
    <div class="flex h-3 rounded-full overflow-hidden mb-6">

      <div
        class="bg-yellow-400"
        :style="{ width: percent(fulltime) + '%' }"
      ></div>

      <div
        class="bg-teal-700"
        :style="{ width: percent(contract) + '%' }"
      ></div>

      <div
        class="bg-red-500"
        :style="{ width: percent(probation) + '%' }"
      ></div>

      <div
        class="bg-pink-500"
        :style="{ width: percent(wfh) + '%' }"
      ></div>

    </div>

    <!-- Status List -->
    <div class="grid grid-cols-2 gap-4 text-sm">

      <div class="flex items-center gap-2">
        <span class="w-3 h-3 bg-yellow-400 rounded-full"></span>
        Fulltime ({{ percent(fulltime) }}%)
      </div>

      <div class="flex items-center gap-2">
        <span class="w-3 h-3 bg-teal-700 rounded-full"></span>
        Contract ({{ percent(contract) }}%)
      </div>

      <div class="flex items-center gap-2">
        <span class="w-3 h-3 bg-red-500 rounded-full"></span>
        Probation ({{ percent(probation) }}%)
      </div>

      <div class="flex items-center gap-2">
        <span class="w-3 h-3 bg-pink-500 rounded-full"></span>
        WFH ({{ percent(wfh) }}%)
      </div>

    </div>

  </div>
</template>

<script setup>
const fulltime = 74
const contract = 30
const probation = 20
const wfh = 30

const total = fulltime + contract + probation + wfh

const percent = (value) => {
  return Math.round((value / total) * 100)
}
</script>