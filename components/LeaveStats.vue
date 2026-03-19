
<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6  flex-grow">

    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
      <div>
        <p class="text-slate-500 text-sm mb-1">Total Leave Balance</p>
        <h3 class="text-3xl font-bold">{{ stats.balance }} Days</h3>
      </div>

      <div class="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center">
        <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2zM10 14l2 2 4-4"/>
        </svg>
      </div>
    </div>

   
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
      <div>
        <p class="text-slate-500 text-sm mb-1">Pending Requests</p>
        <h3 class="text-3xl font-bold">
          <span class="text-orange-500">{{ stats.pending }}</span> Requests
        </h3>
      </div>

      <div class="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center">
        <svg class="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
    </div>

    <!-- Chart -->
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between">

      <h4 class="text-lg font-bold mb-4 md:mb-0">Leave Overview</h4>

      <div class="flex items-center gap-6">

        <div class="relative w-24 h-24">
          <svg viewBox="0 0 36 36" class="w-full h-full transform -rotate-90">

            <circle cx="18" cy="18" r="16"
              fill="none"
              class="stroke-emerald-500"
              stroke-width="4"
              stroke-dasharray="100 100"/>

            <circle cx="18" cy="18" r="16"
              fill="none"
              class="stroke-amber-400"
              stroke-width="4"
              stroke-dasharray="25 100"
              stroke-dashoffset="-65"/>

            <circle cx="18" cy="18" r="16"
              fill="none"
              class="stroke-rose-500"
              stroke-width="4"
              stroke-dasharray="10 100"
              stroke-dashoffset="-90"/>

          </svg>

          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-14 h-14 bg-white rounded-full"></div>
          </div>
        </div>

        <ul class="space-y-1 text-xs font-semibold text-slate-600">
          <li class="flex items-center gap-2">
            <span class="w-2 h-2 bg-emerald-500 rounded-full"></span>
            Approved
          </li>

          <li class="flex items-center gap-2">
            <span class="w-2 h-2 bg-amber-400 rounded-full"></span>
            Pending
          </li>

          <li class="flex items-center gap-2">
            <span class="w-2 h-2 bg-rose-500 rounded-full"></span>
            Rejected
          </li>
        </ul>

      </div>
    </div>

  </div>
</template>
<script setup>
const stats = {
  balance: 12,
  pending: 3,
  chart: {
    approved: 12,
    pending: 5,
    rejected: 2
  }
}
</script>
