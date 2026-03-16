<template>
  <div class="min-h-screen bg-gray-50 p-4 font-sans">
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
      <div v-for="card in stats" :key="card.title" class="flex items-center p-4 bg-white rounded-xl shadow hover:shadow-md transition">
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

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">

      <div class="col-span-2 bg-white rounded-xl shadow p-5">
        <div class="flex justify-between items-center mb-6">
          <h3 class="font-bold text-gray-800">Attendance Trends</h3>
          <div class="flex gap-1 bg-gray-50 p-1 rounded-lg">
            <button v-for="t in ['1D','7D','1M','1Y']" :key="t" 
              :class="['px-3 py-1 text-[10px] rounded-md font-bold transition', t==='1Y'?'bg-gray-900 text-white shadow-sm':'text-gray-400 hover:text-gray-600']">
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

      <div class="bg-gray-900 text-white rounded-xl p-5 shadow-xl flex flex-col">
        <div class="flex justify-between items-start mb-6">
          <h3 class="font-bold text-lg">Attendance Status</h3>
          <button class="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          </button>
        </div>
        
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

        <ul class="space-y-4 flex-1">
          <li v-for="stat in sidebarStats" :key="stat.label" class="flex justify-between items-center group cursor-pointer">
            <span class="flex items-center gap-3 text-gray-400 group-hover:text-white transition">
              <span :class="['w-2.5 h-2.5 rounded-full ring-4 ring-opacity-10', stat.color.replace('bg-', 'ring-'), stat.color]"></span>
              <span class="text-xs font-bold uppercase tracking-wider">{{ stat.label }}</span>
            </span>
            <span class="font-mono font-bold text-sm">{{ stat.value }}</span>
          </li>
        </ul>
      </div>

      <div class="col-span-1 lg:col-span-2 bg-white rounded-xl shadow p-5">
        <div class="flex justify-between items-center mb-10">
          <h3 class="font-bold text-gray-800">Office Vs Remote</h3>
          <div class="flex items-center gap-6">
            <div class="flex items-center gap-4 text-[10px] font-bold uppercase text-gray-400">
              <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-orange-400"></span> Office</span>
              <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-teal-600"></span> Remote</span>
            </div>
            <button class="text-[10px] font-bold border px-2 py-1 rounded bg-gray-50 text-gray-500">WEEKLY</button>
          </div>
        </div>

        <svg viewBox="0 0 800 200" class="w-full h-48 overflow-visible">
          <line v-for="i in 5" :key="i" x1="0" :y1="(i-1)*50" x2="800" :y2="(i-1)*50" stroke="#f9fafb" stroke-width="1" />
          <circle v-for="i in 15" :key="'o'+i" :cx="30 + (i*50)" :cy="100 + Math.sin(i)*50" r="5" fill="#fb923c" />
          <circle v-for="i in 12" :key="'r'+i" :cx="60 + (i*55)" :cy="60 + Math.cos(i)*40" r="5" fill="#0d9488" />
          
          <text v-for="(day, i) in ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']" 
            :key="day" :x="50 + (i * 115)" y="225" text-anchor="middle" 
            class="fill-gray-400 font-bold text-[10px] uppercase">{{ day }}</text>
        </svg>
      </div>

      <div class="bg-white rounded-xl shadow p-5 flex flex-col justify-between border-l-4 border-orange-500">
        <div>
          <h3 class="font-bold text-gray-800 mb-6">Attendance Summary</h3>
          <div class="mb-2 flex justify-between items-end">
            <span class="text-[9px] font-black text-gray-400 uppercase tracking-widest">Avg Working Hours</span>
            <span class="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full leading-none">↓ 3.2%</span>
          </div>
          <svg width="100%" height="8" class="mb-2">
            <rect width="100%" height="8" rx="4" fill="#f3f4f6" />
            <rect width="85%" height="8" rx="4" fill="#1f2937" />
          </svg>
          <p class="text-[10px] text-gray-400 italic mb-8">Compared to yesterday</p>
        </div>

        <div class="grid grid-cols-3 pt-6 border-t border-gray-100">
          <div v-for="item in summaryItems" :key="item.label" class="text-center">
            <div class="text-lg font-black text-gray-900 leading-none">{{ item.val }}</div>
            <div class="text-[9px] font-bold text-gray-400 uppercase mt-1">{{ item.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <hr class="my-12 border-dashed border-gray-300" />


    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1600px] mx-auto">
      <div class="lg:col-span-8 space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
            <div class="flex justify-between items-start mb-4 relative z-10">
              <h4 class="font-bold text-gray-800">Frequent Late Arrivals</h4>
              <button class="bg-white border rounded-lg px-2 py-1 flex items-center gap-1 text-[10px] font-bold text-gray-500">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line></svg>
                Today
              </button>
            </div>
            <div class="relative z-10">
              <p class="text-[10px] text-gray-400 font-bold uppercase">No of Employees</p>
              <div class="flex items-center gap-2 mb-6">
                <span class="text-3xl font-black text-slate-800">22</span>
                <span class="text-[10px] bg-purple-100 text-purple-600 px-2 py-0.5 rounded font-bold uppercase">Warnings</span>
              </div>
              <div class="flex justify-between items-center">
                <div class="flex -space-x-2">
                  <div v-for="i in 4" :key="i" class="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                    <svg viewBox="0 0 24 24" fill="#94a3b8" width="16"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                  </div>
                  <div class="w-8 h-8 rounded-full bg-slate-50 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">+9</div>
                </div>
                <div class="flex items-center gap-1 text-red-500 font-bold text-xs bg-red-50 px-2 py-1 rounded-full">
                  <span>+15.5%</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M7 7l10 10M17 7v10H7"/></svg>
                </div>
              </div>
            </div>
            <svg class="absolute right-0 bottom-0 opacity-5" width="150" height="150" viewBox="0 0 100 100"><circle cx="100" cy="100" r="80" fill="gray"/></svg>
          </div>

          <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
            <div class="flex justify-between items-start mb-4">
              <h4 class="font-bold text-gray-800">Missing Punches</h4>
              <button class="bg-white border rounded-lg px-2 py-1 flex items-center gap-1 text-[10px] font-bold text-gray-500">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect></svg>
                Today
              </button>
            </div>
            <p class="text-[10px] text-gray-400 font-bold uppercase">Total Number of Missing Punches</p>
            <div class="flex items-center gap-2 mb-6">
              <span class="text-3xl font-black text-slate-800">09</span>
              <span class="text-[10px] bg-red-100 text-red-500 px-2 py-0.5 rounded font-bold uppercase">Critical</span>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex -space-x-2">
                <div v-for="i in 3" :key="i" class="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                  <svg viewBox="0 0 24 24" fill="#94a3b8" width="16"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
                <div class="w-8 h-8 rounded-full bg-slate-50 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">+6</div>
              </div>
              <div class="flex items-center gap-1 text-emerald-500 font-bold text-xs bg-emerald-50 px-2 py-1 rounded-full">
                <span>+18.5%</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div class="flex justify-between items-start mb-4">
              <h4 class="font-bold text-gray-800">Violations Statistics</h4>
              <button class="text-gray-400"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect></svg></button>
            </div>
            <div class="space-y-1 mb-4">
               <div class="flex items-center gap-2 text-[9px] font-black text-gray-400 uppercase tracking-tighter">
                 <span class="w-2 h-0.5 bg-orange-500"></span> Late Arrivals
               </div>
               <div class="flex items-center gap-2 text-[9px] font-black text-gray-400 uppercase tracking-tighter">
                 <span class="w-2 h-0.5 bg-teal-600"></span> Missing Punches
               </div>
            </div>
            <div class="flex items-end justify-between h-20 gap-3 px-1">
              <div class="flex-1 bg-orange-500 rounded-t-md relative" style="height: 90%"><span class="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] font-bold">90%</span></div>
              <div class="flex-1 bg-[#0c2e36] rounded-t-md relative" style="height: 50%"><span class="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] font-bold">50%</span></div>
              <div class="flex-1 bg-[#5ea38e] rounded-t-md relative" style="height: 75%"><span class="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] font-bold">75%</span></div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
          <div class="flex justify-between items-center mb-8">
            <h3 class="font-bold text-slate-800 text-lg">Late Arrivals & Alerts</h3>
            <button class="text-xs font-bold text-slate-400 border px-3 py-1.5 rounded-lg flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line></svg>
              Today
            </button>
          </div>
          <div class="space-y-4">
            <div v-for="person in lateEmployees" :key="person.name" class="flex items-center justify-between p-5 border border-slate-50 rounded-2xl group hover:bg-slate-50 transition-all">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-100">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
                <div>
                  <h4 class="font-bold text-slate-800 text-sm">{{ person.name }}</h4>
                  <p class="text-[11px] text-slate-400 font-medium">{{ person.role }}</p>
                </div>
              </div>
              <div class="flex items-center gap-16">
                <div class="text-right sm:text-left">
                  <p class="text-[9px] font-bold text-slate-400 uppercase">Check-in:</p>
                  <p class="text-sm font-black text-slate-700">{{ person.checkIn }}</p>
                </div>
                <div class="flex gap-1">
                  <div v-for="i in 10" :key="i" :class="['w-1 h-8 rounded-full', i <= person.severity ? 'bg-orange-500' : 'bg-gray-100']"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-4 flex flex-col gap-6">
        <div class="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col h-[550px]">
          <div class="bg-[#1a1c1e] p-6 flex items-center justify-between">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1c1e" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <div>
                <h4 class="text-white font-bold text-sm">AI Assistant</h4>
                <p class="text-slate-400 text-[10px]">Always here to help</p>
              </div>
            </div>
            <div class="bg-emerald-500/10 px-2 py-1 rounded-full flex items-center gap-1.5 border border-emerald-500/20">
              <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              <span class="text-[9px] text-emerald-500 font-black uppercase">Online</span>
            </div>
          </div>
          <div class="p-8 flex flex-col flex-1">
            <div class="flex gap-3 mb-8">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="3" class="mt-1"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              <div>
                <p class="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">AI Assistant</p>
                <p class="text-xs text-slate-500 font-semibold leading-relaxed">Hello! I'm your AI Assistant. I can help analyze attendance patterns. How can I assist you today?</p>
              </div>
            </div>
            <div class="space-y-3 mb-8">
              <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Suggested Questions</p>
              <button v-for="q in ['Show me today\'s summary', 'Why is attendance low on Fridays?']" :key="q" 
                class="w-full text-left p-4 text-[12px] font-bold text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-2xl border border-slate-100 transition-all">
                {{ q }}
              </button>
            </div>
            <div class="mt-auto relative">
              <input type="text" placeholder="Ask me anything..." class="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 px-6 pr-14 text-sm outline-none focus:border-orange-500 transition-all" />
              <button class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0c2e36] text-white rounded-xl flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/* --- YOUR ORIGINAL DATA (UNCHANGED) --- */
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
  { label: 'Avg Time', val: '9:12 AM' }
];

/* --- NEW TEMPLATE DATA --- */
const lateEmployees = [
  { name: 'Michael Johnson', role: 'Administration Head', checkIn: '09:45 AM', severity: 7 },
  { name: 'Emily Davis', role: 'Frontend Developer', checkIn: '09:30 AM', severity: 5 },
  { name: 'Robert Martinez', role: 'Finance Manager', checkIn: '09:25 AM', severity: 4 },
  { name: 'Megan Walker', role: 'SEO Analyst', checkIn: '09:10 AM', severity: 3 }
];
</script>