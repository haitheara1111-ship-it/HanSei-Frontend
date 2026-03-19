
<template>
  
    <div class="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      
      <div class="px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <h2 class="text-xl font-bold text-slate-800">Leave Request History</h2>
        
        <div class="relative">
          <select class="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Status</option>
            <option>Approved</option>
            <option>Pending</option>
            <option>Rejected</option>
          </select>
          <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-slate-50 text-slate-500 text-sm font-bold uppercase tracking-wider">
              <th class="px-6 py-4">#</th>
              <th class="px-6 py-4">Employee</th>
              <th class="px-6 py-4">Type</th>
              <th class="px-6 py-4">Start Date</th>
              <th class="px-6 py-4">End Date</th>
              <th class="px-6 py-4">Status</th>
              <th class="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-for="(req, index) in requests" :key="req.id" class="hover:bg-slate-50/50 transition-colors">
              <td class="px-6 py-4 text-slate-600">{{ index + 1 }}</td>
              <td class="px-6 py-4 font-bold text-slate-800">{{ req.name }}</td>
              <td class="px-6 py-4 text-slate-600">{{ req.type }}</td>
              <td class="px-6 py-4 text-slate-600">{{ req.start }}</td>
              <td class="px-6 py-4 text-slate-600">{{ req.end }}</td>
              <td class="px-6 py-4">
                <span :class="getStatusClass(req.status)" class="px-3 py-1 rounded-full text-xs font-bold">
                  {{ req.status }}
                </span>
              </td>
              <td class="px-6 py-4">
                <div class="flex justify-center gap-2">
                  <template v-if="req.status === 'Pending'">
                    <button class="p-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
                    </button>
                    <button class="p-1.5 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </template>
                  <template v-else>
                    <button class="px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-bold rounded-md hover:bg-blue-100 transition-colors">
                      View
                    </button>
                  </template>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
    
</template>

<script setup>
import { ref } from 'vue'

const requests = ref([
  { id: 1, name: 'Nita', type: 'Sick Leave', start: '2025-05-10', end: '2025-05-12', status: 'Pending' },
  { id: 2, name: 'Sokha', type: 'Vacation', start: '2025-05-05', end: '2025-05-07', status: 'Approved' },
  { id: 3, name: 'Darith', type: 'Personal', start: '2025-05-01', end: '2025-05-02', status: 'Rejected' },
  { id: 4, name: 'Chanly', type: 'Sick Leave', start: '2025-04-28', end: '2025-04-30', status: 'Approved' },
  { id: 5, name: 'Pheaktra', type: 'Vacation', start: '2025-05-15', end: '2025-05-18', status: 'Pending' },
])


const getStatusClass = (status) => {
  switch (status) {
    case 'Approved': return 'bg-emerald-100 text-emerald-600'
    case 'Pending': return 'bg-orange-100 text-orange-600'
    case 'Rejected': return 'bg-rose-100 text-rose-600'
    default: return 'bg-gray-100 text-gray-600'
  }
}

</script>