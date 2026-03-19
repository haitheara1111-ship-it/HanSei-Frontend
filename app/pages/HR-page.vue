<template>
  <div class="min-h-screen bg-gray-50 p-4 font-sans text-slate-900">
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
      <div v-for="card in stats" :key="card.title" class="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
        <div class="p-3 rounded-xl mr-3 text-white flex items-center justify-center" :class="card.bgColor">
          <span v-html="card.icon"></span>
        </div>
        <div class="flex-1">
          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-tight">{{ card.title }}</p>
          <div class="flex items-baseline gap-2">
            <h4 class="text-xl font-black text-gray-800">{{ card.total }}</h4>
            <span :class="['text-[10px] font-bold px-1.5 py-0.5 rounded', card.growthType==='up'?'bg-green-50 text-green-600':'bg-red-50 text-red-600']">
              {{ card.growthType==='up'?'↑':'↓' }} {{ card.growth }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <div class="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <div class="flex justify-between items-center mb-6">
          <h3 class="font-bold text-gray-800">Attendance Trends</h3>
          <div class="flex gap-1 bg-gray-50 p-1 rounded-lg">
            <button v-for="t in ['1D','7D','1M','1Y']" :key="t" 
              :class="['px-4 py-1.5 text-[10px] rounded-md font-bold transition', t==='1Y'?'bg-gray-900 text-white shadow-sm':'text-gray-400 hover:text-gray-600']">
              {{ t }}
            </button>
          </div>
        </div>
        <svg viewBox="0 0 800 220" class="w-full h-64 overflow-visible">
          <line v-for="i in 5" :key="i" x1="0" :y1="(i-1)*40" x2="800" :y2="(i-1)*40" stroke="#f9fafb" stroke-width="1" />
          <g v-for="(val, month, index) in chartData" :key="month">
            <rect :x="15 + (index * 66)" y="0" width="34" height="200" rx="4" fill="#fff7ed" />
            <rect :x="15 + (index * 66)" :y="200 - (val * 2)" width="34" :height="val * 2" rx="4" 
                  :fill="month === 'Jun' ? '#ea580c' : '#fdba74'" class="transition-all duration-500" />
            <text :x="32 + (index * 66)" y="220" text-anchor="middle" class="fill-gray-400 font-bold text-[11px] uppercase tracking-tighter">{{ month }}</text>
          </g>
        </svg>
      </div>

      <div class="bg-gray-900 text-white rounded-2xl p-6 shadow-xl flex flex-col">
        <h3 class="font-bold text-lg mb-6">Attendance Status</h3>
        <div class="mb-6">
          <p class="text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-1">Total Working Days</p>
          <h2 class="text-5xl font-black">300</h2>
        </div>
        <svg width="100%" height="12" class="mb-8 rounded-full">
          <rect x="0" width="50%" height="12" fill="#f97316" />
          <rect x="50%" width="20%" height="12" fill="#2dd4bf" />
          <rect x="70%" width="15%" height="12" fill="#fbbf24" />
          <rect x="85%" width="15%" height="12" fill="#f43f5e" />
        </svg>
        <ul class="space-y-5 flex-1">
          <li v-for="stat in sidebarStats" :key="stat.label" class="flex justify-between items-center group cursor-pointer">
            <span class="flex items-center gap-3 text-gray-400 group-hover:text-white transition">
              <span :class="['w-2.5 h-2.5 rounded-full ring-4 ring-opacity-10', stat.color.replace('bg-', 'ring-'), stat.color]"></span>
              <span class="text-xs font-bold uppercase tracking-wider">{{ stat.label }}</span>
            </span>
            <span class="font-mono font-bold text-sm">{{ stat.value }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col xl:flex-row items-center gap-10 border-l-8 border-l-orange-500 mb-6">
      <div class="flex-1 w-full">
        <div class="flex justify-between items-center mb-4">
           <h3 class="font-bold text-gray-800 text-xl">Attendance Summary</h3>
           <button class="text-[11px] font-bold bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition flex items-center gap-2">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
             DOWNLOAD REPORT
           </button>
        </div>
        <p class="text-sm text-gray-400 font-medium mb-6">Real-time overview of check-ins and operational hours.</p>
        <div class="space-y-2">
          <div class="flex justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest">
            <span>Productivity Intensity</span>
            <span class="text-orange-600">85% Capacity</span>
          </div>
          <div class="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
            <div class="bg-orange-500 h-full rounded-full" style="width: 85%"></div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap md:flex-nowrap gap-4 w-full xl:w-auto">
        <div v-for="item in summaryItems" :key="item.label" 
             class="flex-1 min-w-[150px] p-5 border border-gray-100 rounded-2xl bg-gray-50/50 hover:border-orange-200 transition-all">
          <div class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{{ item.label }}</div>
          <div class="text-2xl font-black text-gray-900">{{ item.val }}</div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-1 space-y-6">
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h4 class="font-bold text-gray-800 mb-4">Violations Overview</h4>
          <div class="flex items-end justify-between h-24 gap-4">
            <div class="flex-1 bg-orange-500 rounded-t-lg" style="height: 90%"></div>
            <div class="flex-1 bg-slate-800 rounded-t-lg" style="height: 50%"></div>
            <div class="flex-1 bg-teal-500 rounded-t-lg" style="height: 75%"></div>
          </div>
          <div class="flex justify-between mt-4 text-[10px] font-bold text-gray-400">
            <span>LATE</span><span>MISSED</span><span>LEAVE</span>
          </div>
        </div>
      </div>

      <div class="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <div class="flex justify-between items-center mb-6">
          <h3 class="font-bold text-slate-800 text-lg">Late Arrivals & Alerts</h3>
          <span class="text-[10px] bg-red-50 text-red-600 px-3 py-1 rounded-full font-bold uppercase">Live Updates</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="person in lateEmployees" :key="person.name" class="flex items-center justify-between p-4 border border-slate-50 rounded-xl hover:bg-slate-50 transition-all group">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {{ person.name.charAt(0) }}
              </div>
              <div>
                <h4 class="font-bold text-slate-800 text-sm">{{ person.name }}</h4>
                <p class="text-[11px] text-slate-400 font-medium">{{ person.role }}</p>
              </div>
            </div>
            <div class="text-right">
               <p class="text-[10px] font-bold text-slate-400 uppercase">Check In</p>
               <p class="text-sm font-black text-red-500">{{ person.checkIn }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { title:"Total Employees", total:"2,847", growth:"12%", growthType:"up", bgColor:"bg-orange-500", icon:`<svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`},
  { title:"Present Today", total:"2,458", growth:"3.2%", growthType:"down", bgColor:"bg-teal-900", icon:`<svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>`},
  { title:"Absent Today", total:"124", growth:"1.4%", growthType:"up", bgColor:"bg-amber-400", icon:`<svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 11.99 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>`},
  { title:"Late Arrivals", total:"89", growth:"12%", growthType:"up", bgColor:"bg-blue-500", icon:`<svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`},
  { title:"Attendance Rate", total:"86.3%", growth:"2.5%", growthType:"up", bgColor:"bg-purple-500", icon:`<svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>`},
  { title:"Pending Req.", total:"42", growth:"7%", growthType:"down", bgColor:"bg-red-600", icon:`<svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>`},
];

const chartData = { Jan:40, Feb:22, Mar:53, Apr:25, May:56, Jun:90, Jul:43, Aug:25, Sep:68, Oct:80, Nov:35, Dec:20 };

const sidebarStats = [
  { label:'Present', value:2458, color:'bg-orange-500' },
  { label:'WFH', value:187, color:'bg-teal-400' },
  { label:'Late', value:89, color:'bg-amber-400' },
  { label:'On Leave', value:78, color:'bg-rose-400' },
  { label:'Absent', value:124, color:'bg-red-500' }
];

const summaryItems = [
  { label: 'Check-in', val: '2,458' },
  { label: 'Check-out', val: '2,201' },
  { label: 'Avg In-Time', val: '9:13 AM' }
];

const lateEmployees = [
  { name: 'Michael Johnson', role: 'Administration Head', checkIn: '09:45 AM', severity: 7 },
  { name: 'Emily Davis', role: 'Frontend Developer', checkIn: '09:30 AM', severity: 5 },
  { name: 'Robert Martinez', role: 'Finance Manager', checkIn: '09:25 AM', severity: 4 },
  { name: 'Megan Walker', role: 'SEO Analyst', checkIn: '09:10 AM', severity: 3 }
];
</script>