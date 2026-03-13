<template>
  
    <div class="p-8 bg-gray-50 min-h-screen">
      <div class="max-w-7xl mx-auto">
        
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h3 class="font-bold text-xl mb-8">Overview Statistics</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <HrCard title="Total Employees" total="2,847" growth="12%" growthType="up" bgColor="bg-orange-500">
              <template #icon><svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></template>
            </HrCard>
            <HrCard title="Present Today" total="2,458" growth="3.2%" growthType="down" bgColor="bg-teal-900">
              <template #icon><svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg></template>
            </HrCard>
            <HrCard title="Absent Today" total="124" growth="1.4%" growthType="up" bgColor="bg-amber-400">
              <template #icon><svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg></template>
            </HrCard>
            <HrCard title="Late Arrivals" total="89" growth="12%" growthType="up" bgColor="bg-blue-500">
              <template #icon><svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg></template>
            </HrCard>
            <HrCard title="Attendance Rate" total="86.3%" growth="2.5%" growthType="up" bgColor="bg-purple-500">
              <template #icon><svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg></template>
            </HrCard>
            <HrCard title="Pending Regularizations" total="42" growth="7%" growthType="down" bgColor="bg-red-600">
              <template #icon><svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg></template>
            </HrCard>
          </div>
        </div>

        <div class="grid grid-cols-12 gap-6 mt-6">
          
          <div class="col-span-12 lg:col-span-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div class="flex justify-between items-center mb-10">
              <h3 class="font-bold text-lg text-slate-800">Attendance Trends</h3>
              <div class="flex gap-1 bg-gray-100 p-1 rounded-lg">
                <button v-for="t in ['1D', '7D', '1M', '1Y']" :key="t" 
                  :class="['px-3 py-1 text-xs rounded-md font-medium transition-all', t === '1Y' ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-500 hover:text-indigo-600']">
                  {{ t }}
                </button>
              </div>
            </div>

            <div class="h-64 relative">
              <div class="absolute inset-0 flex flex-col justify-between text-[10px] text-gray-300 pointer-events-none">
                <div v-for="line in ['100%', '80%', '60%', '40%', '20%', '0%']" :key="line" class="flex items-center gap-4">
                  <span class="w-8 text-right">{{ line }}</span>
                  <div class="flex-1 border-b border-gray-100"></div>
                </div>
              </div>

              <div class="absolute bottom-0 left-12 right-0 top-0 flex items-end justify-between px-2">
                <div v-for="(val, month) in {Jan:40, Feb:22, Mar:53, Apr:25, May:56, Jun:90, Jul:43, Aug:25, Sep:68, Oct:80, Nov:35, Dec:20}" 
                  :key="month" class="relative flex flex-col items-center flex-1 h-full">
                  
                  <div class="absolute inset-0 flex justify-center py-1">
                    <div class="w-[1.5px] h-full bg-gray-50"></div>
                  </div>

                  <div v-if="month === 'Jun'" class="absolute -top-10 bg-indigo-900 text-white text-[10px] py-1 px-3 rounded-full font-bold shadow-lg z-20">
                    90%
                  </div>
                  
                  <div 
                    :class="['w-7 rounded-t-md transition-all duration-1000 relative z-10 mt-auto shadow-sm', month === 'Jun' ? 'bg-indigo-500' : 'bg-teal-400/30']" 
                    :style="{ height: val + '%' }"
                  ></div>

                  <span class="text-[10px] mt-3 text-gray-400 font-semibold relative z-10 uppercase tracking-wider">{{ month }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-span-12 lg:col-span-4 bg-[#0F172A] rounded-2xl p-8 text-white shadow-xl">
            <div class="flex justify-between items-start mb-6">
              <h3 class="font-bold text-lg text-indigo-100">Attendance Status</h3>
              <button class="bg-indigo-500/20 p-2 rounded-lg text-indigo-300"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><path d="M16 2v4M8 2v4M3 10h18"/></svg></button>
            </div>
            <div class="mb-5">
              <p class="text-indigo-300/60 text-xs uppercase tracking-widest font-bold">Total Working Days</p>
              <h2 class="text-5xl font-black mt-1">300</h2>
            </div>
            <div class="flex gap-1 h-3 mb-8 rounded-full overflow-hidden bg-indigo-950">
              <div class="h-full bg-indigo-500" style="width: 50%"></div>
              <div class="h-full bg-teal-400" style="width: 20%"></div>
              <div class="h-full bg-amber-400" style="width: 15%"></div>
              <div class="h-full bg-rose-500" style="width: 15%"></div>
            </div>
            <ul class="space-y-4">
              <li v-for="stat in [{l:'Present', v:2458, c:'bg-indigo-500'}, {l:'WFH', v:187, c:'bg-teal-400'}, {l:'Late', v:89, c:'bg-amber-400'}, {l:'Absent', v:124, c:'bg-rose-500'}]" :key="stat.l" class="flex justify-between items-center text-sm">
                <span class="flex items-center gap-3 text-indigo-200/70"><span :class="['w-2 h-2 rounded-full', stat.c]"></span>{{ stat.l }}</span>
                <span class="font-mono font-bold text-white">{{ stat.v }}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>

</template>

<script setup>
import DashboardLayout from "../components/DashboardLayout.vue";
import HrCard from "../components/HrCard.vue";
</script>