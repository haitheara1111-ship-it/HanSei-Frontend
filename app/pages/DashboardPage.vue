<template>
  <DashboardLayout>
    <div class="p-8 bg-gray-100 min-h-screen font-sans text-slate-700">
      <div class="max-w-7xl mx-auto grid grid-cols-12 gap-6">

        <!-- Left Column -->
        <div class="col-span-12 lg:col-span-4 space-y-6">

          <!-- Employee Status -->
          <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div class="flex justify-between items-center mb-6">
              <h3 class="font-bold text-lg">Employee Status & Type</h3>
              <button class="text-xs bg-gray-100 px-3 py-1 rounded hover:bg-gray-200">
                View All
              </button>
            </div>

            <div class="flex h-12 w-full gap-0.5 mb-6">
              <div class="h-full bg-orange-500 rounded-l" style="width:60%"></div>
              <div class="h-full bg-teal-800" style="width:30%"></div>
              <div class="h-full bg-gray-200 rounded-r" style="width:10%"></div>
            </div>

            <div class="grid grid-cols-3 gap-2">
              <div>
                <p class="text-2xl font-bold">1054</p>
                <p class="text-xs text-gray-500 flex items-center">
                  <span class="w-1 h-3 bg-orange-500 mr-2"></span>
                  Full-Time
                </p>
              </div>

              <div>
                <p class="text-2xl font-bold">568</p>
                <p class="text-xs text-gray-500 flex items-center">
                  <span class="w-1 h-3 bg-teal-800 mr-2"></span>
                  Contract
                </p>
              </div>

              <div>
                <p class="text-2xl font-bold">80</p>
                <p class="text-xs text-gray-500 flex items-center">
                  <span class="w-1 h-3 bg-gray-200 mr-2"></span>
                  Probation
                </p>
              </div>
            </div>
          </div>

          <!-- Leave Distribution -->
          <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div class="flex justify-between items-center mb-4">
              <h3 class="font-bold text-lg">Leave Type Distribution</h3>
              <button class="text-xs border px-2 py-1 rounded">Monthly</button>
            </div>

            <div class="flex items-center justify-between">

              <!-- Simple Half Chart -->
              <div class="w-24 h-12 border-t-8 border-r-8 border-l-8 border-orange-400 rounded-t-full"></div>

              <ul class="space-y-2 text-sm">
                <li class="flex justify-between gap-8">
                  <span class="flex items-center">
                    <span class="w-2 h-2 rounded-full bg-orange-400 mr-2"></span>
                    Sick Leave
                  </span>
                  <span class="font-bold">45</span>
                </li>

                <li class="flex justify-between gap-8">
                  <span class="flex items-center">
                    <span class="w-2 h-2 rounded-full bg-orange-300 mr-2"></span>
                    Casual Leave
                  </span>
                  <span class="font-bold">68</span>
                </li>

                <li class="flex justify-between gap-8">
                  <span class="flex items-center">
                    <span class="w-2 h-2 rounded-full bg-orange-100 mr-2"></span>
                    Unpaid
                  </span>
                  <span class="font-bold">12</span>
                </li>
              </ul>

            </div>
          </div>

        </div>

        <!-- Right Column -->
        <div class="col-span-12 lg:col-span-8 space-y-6">

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <!-- Total Employees -->
            <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div class="flex items-center gap-3 mb-3">

                <div class="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                       fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 14c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 
                    1.79-4 4 1.79 4 4 4zm-8 0c2.21 0 4-1.79 
                    4-4S10.21 6 8 6 4 7.79 4 10s1.79 
                    4 4 4zm0 2c-2.67 0-8 1.34-8 
                    4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>

                <h3 class="text-lg font-bold text-[#5F6D7E]">
                  Total Employees
                </h3>

              </div>

              <div class="flex items-end justify-between">
                <p class="text-3xl font-extrabold text-[#1A2D42]">1,848</p>
                <span class="text-green-600 font-semibold text-sm">+18%</span>
              </div>

              <p class="text-sm text-gray-500">
                Headcount Overview
              </p>
            </div>


            <!-- New Joinees -->
            <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div class="flex items-center gap-3 mb-3">

                <div class="w-10 h-10 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                       fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 
                    1.79-4 4 1.79 4 4 4zM9 12c2.21 
                    0 4-1.79 4-4S11.21 4 9 4 
                    5 5.79 5 8s1.79 4 4 
                    4zm6 2c-2.67 0-8 1.34-8 
                    4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>

                <h3 class="text-lg font-bold text-[#5F6D7E]">
                  New Joinees
                </h3>

              </div>

              <div class="flex items-end justify-between">
                <p class="text-3xl font-extrabold text-[#1A2D42]">1,248</p>
                <span class="text-green-600 font-semibold text-sm">+22%</span>
              </div>

              <p class="text-sm text-gray-500">
                All Department
              </p>
            </div>


            <!-- Late Arrivals -->
            <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div class="flex items-center gap-3 mb-3">

                <div class="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                       fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 100 20 
                    10 10 0 000-20zm1 11h4v-2h-3V7h-2v6z"/>
                  </svg>
                </div>

                <h3 class="text-lg font-bold text-[#5F6D7E]">
                  Late Arrivals
                </h3>

              </div>

              <div class="flex items-end justify-between">
                <p class="text-3xl font-extrabold text-[#1A2D42]">12</p>
                <span class="text-red-500 font-semibold text-sm">-16%</span>
              </div>

              <p class="text-sm text-gray-500">
                Delayed Logins Today
              </p>
            </div>


            <!-- Payroll -->
            <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div class="flex items-center gap-3 mb-3">

                <div class="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                       fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1v22M17 5H9.5a3.5 
                    3.5 0 000 7h5a3.5 3.5 
                    0 010 7H7"/>
                  </svg>
                </div>

                <h3 class="text-lg font-bold text-[#5F6D7E]">
                  Total Payroll
                </h3>

              </div>

              <div class="flex items-end justify-between">
                <p class="text-3xl font-extrabold text-[#1A2D42]">$2.4M</p>
                <span class="text-green-600 font-semibold text-sm">+16%</span>
              </div>

              <p class="text-sm text-gray-500">
                Payroll Outflow
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
   
  </DashboardLayout>
</template>

<script setup>
import DashboardLayout from "../components/DashboardLayout.vue"

</script>