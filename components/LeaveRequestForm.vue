

<template>
  <div class="min-h-screen bg-gray-100  flex justify-center items-start">
    
    <div class="w-full  max-w-sm bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      


      <div class="p-6 space-y-5">
        
        <div class="relative">
          <label class="block text-sm font-bold text-gray-700 mb-2">Leave Type</label>
          <div class="relative">
            <button 
              @click="isOpen = !isOpen"
              class="w-full flex items-center justify-between bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            >
              <span>{{ form.type || 'Select Leave Type' }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div v-if="isOpen" class="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-xl py-1">
              <div 
                v-for="type in leaveTypes" 
                :key="type"
                @click="form.type = type; isOpen = false"
                class="px-4 py-2 cursor-pointer transition-colors"
                :class="type === 'Sick Leave' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50 text-gray-700'"
              >
                {{ type }}
              </div>
            </div>
          </div>
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Start Date</label>
          <div class="relative">
            <input type="date" class="w-full border p-2 rounded">

            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-500">
               <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2-2 0 002-2V7a2-2 0 00-2-2H5a2-2 0 00-2 2v12a2-2 0 002 2z" /></svg>
            </div>
          </div>
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">End Date</label>
          <div class="relative">
             <input type="date" class="w-full border p-2 rounded">

            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-500">
               <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2-2 0 002-2V7a2-2 0 00-2-2H5a2-2 0 00-2 2v12a2-2 0 002 2z" /></svg>
            </div>
          </div>
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Reason</label>
          <textarea 
            v-model="form.reason"
            rows="3"
            placeholder="Enter reason..."
            class="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400"
          ></textarea>
        </div>
          <button class="w-full  bg-orange-500 text-white py-2 rounded">
                  Submit Request
            </button>
      </div>
      
    </div>

  </div>
</template>
<script setup>
import { ref } from 'vue'

const leaveTypes = ['Sick Leave', 'Vacation Leave', 'Personal Leave', 'Other']

const form = ref({
  type: '',
  startDate: '2025-05-10',
  endDate: '2025-05-12',
  reason: ''
})
const isOpen = ref(true) 
</script>