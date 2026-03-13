<template>
  <div class=" ml-[20%] min-h-screen bg-gray-50 flex">
    <main class="flex-1 p-8 max-w-7xl mx-auto">
      <header class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-800">Employee Overview</h1>
          <p class="text-gray-500">Managing {{ employees.length }} total team members</p>
        </div>
        <button class="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 shadow-sm transition-all font-medium">
          + Add Employee
        </button>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p class="text-gray-500 text-xs uppercase tracking-wider font-semibold">Total Employees</p>
          <p class="text-3xl font-bold text-gray-800">{{ employees.length }}</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p class="text-gray-500 text-xs uppercase tracking-wider font-semibold">Active Now</p>
          <p class="text-3xl font-bold text-green-600">{{ employees.filter(e => e.status === 'Active').length }}</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p class="text-gray-500 text-xs uppercase tracking-wider font-semibold">On Leave</p>
          <p class="text-3xl font-bold text-orange-500">{{ employees.filter(e => e.status === 'On Leave').length }}</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p class="text-gray-500 text-xs uppercase tracking-wider font-semibold">Remote</p>
          <p class="text-3xl font-bold text-purple-600">{{ employees.filter(e => e.status === 'Remote').length }}</p>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table class="w-full text-left border-collapse">
          <thead class="bg-gray-50 text-gray-600 uppercase text-xs font-bold">
            <tr>
              <th class="p-4">Employee</th>
              <th class="p-4">Role & Dept</th>
              <th class="p-4">Status</th>
              <th class="p-4">Join Date</th>
              <th class="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-for="employee in employees" :key="employee.id" class="hover:bg-gray-50 transition">
              <td class="p-4">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-blue-400 text-white flex items-center justify-center font-bold shadow-sm">
                    {{ employee.name.split(' ').map(n => n[0]).join('') }}
                  </div>
                  <div>
                    <div class="font-bold text-gray-800">{{ employee.name }}</div>
                    <div class="text-xs text-gray-400">{{ employee.email }}</div>
                  </div>
                </div>
              </td>
              <td class="p-4">
                <div class="text-sm text-gray-800 font-medium">{{ employee.role }}</div>
                <div class="text-xs text-gray-500">{{ employee.dept }}</div>
              </td>
              <td class="p-4">
                <span :class="statusBadge(employee.status)" class="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">
                  {{ employee.status }}
                </span>
              </td>
              <td class="p-4 text-sm text-gray-600">
                {{ employee.joined }}
              </td>
              <td class="p-4 text-right">
                <button class="text-gray-400 hover:text-blue-600 transition-colors px-2">
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>





<div class=" ml-[20%] min-h-screen bg-gray-50 flex gap-6 p-6">
  <div class="w-[420px] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-20">
    <div class="p-6 flex justify-between items-center border-b border-gray-50">
      <h2 class="text-xl font-bold text-slate-800">Team Members</h2>
      <button class="text-sm font-semibold text-slate-500 bg-gray-50 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition">
        View All
      </button>
    </div>

    <div class="p-4 space-y-2">
      <div 
        v-for="member in team" 
        :key="member.id" 
        class="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group"
      >
        <div class="flex items-center gap-4">
          <img 
            :src="member.image" 
            :alt="member.name"
            class="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div>
            <h3 class="font-bold text-slate-800 leading-tight">{{ member.name }}</h3>
            <p class="text-sm text-slate-400 font-medium">{{ member.role }}</p>
          </div>
        </div>

        <div class="flex gap-2">
          <button class="p-2 rounded-lg border border-gray-100 text-slate-400 hover:text-blue-600 hover:bg-white hover:shadow-sm transition">
            <span class="sr-only">Call</span>
            📞
          </button>
          <button class="p-2 rounded-lg border border-gray-100 text-slate-400 hover:text-blue-600 hover:bg-white hover:shadow-sm transition">
            <span class="sr-only">Email</span>
            ✉️
          </button>
          <button class="p-2 rounded-lg border border-gray-100 text-slate-400 hover:text-blue-600 hover:bg-white hover:shadow-sm transition">
            <span class="sr-only">Chat</span>
            💬
          </button>
        </div>
      </div>
    </div>
  </div>




<!-- meeting page -->
<div class="w-[420px] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-20">
  <div class="flex items-center justify-between p-5 border-b border-gray-50">
    <h2 class="text-lg font-bold text-slate-800">Meetings Schedule</h2>
    <button class="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-md text-sm font-medium text-slate-700 hover:bg-gray-50 transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      Today
    </button>
  </div>

  <div class="p-6 relative">
    <div class="absolute left-[5.45rem] top-8 bottom-12 border-l-2 border-dotted border-gray-200"></div>

    <div class="space-y-6">
      <div class="flex items-start gap-4">
        <div class="flex items-center gap-3 min-w-[85px]">
          <span class="text-sm font-medium text-slate-400">09:25 AM</span>
          <div class="w-2.5 h-2.5 rounded-full bg-orange-500 z-10"></div>
        </div>
        <div class="flex-1 bg-slate-50/50 p-4 rounded-lg">
          <h3 class="font-bold text-slate-800 text-[15px]">Marketing Strategy Presentation</h3>
          <p class="text-sm text-slate-400 mt-1">Marketing</p>
        </div>
      </div>

      <div class="flex items-start gap-4">
        <div class="flex items-center gap-3 min-w-[85px]">
          <span class="text-sm font-medium text-slate-400">09:20 AM</span>
          <div class="w-2.5 h-2.5 rounded-full bg-blue-900 z-10"></div>
        </div>
        <div class="flex-1 bg-slate-50/50 p-4 rounded-lg">
          <h3 class="font-bold text-slate-800 text-[15px]">Design Review Hospital, doctors Management Project</h3>
          <p class="text-sm text-slate-400 mt-1">Review</p>
        </div>
      </div>

      <div class="flex items-start gap-4">
        <div class="flex items-center gap-3 min-w-[85px]">
          <span class="text-sm font-medium text-slate-400">09:18 AM</span>
          <div class="w-2.5 h-2.5 rounded-full bg-yellow-400 z-10"></div>
        </div>
        <div class="flex-1 bg-slate-50/50 p-4 rounded-lg">
          <h3 class="font-bold text-slate-800 text-[15px]">Birthday Celebration of Employee</h3>
          <p class="text-sm text-slate-400 mt-1">Celebration</p>
        </div>
      </div>

      <div class="flex items-start gap-4">
        <div class="flex items-center gap-3 min-w-[85px]">
          <span class="text-sm font-medium text-slate-400">09:10 AM</span>
          <div class="w-2.5 h-2.5 rounded-full bg-emerald-500 z-10"></div>
        </div>
        <div class="flex-1 bg-slate-50/50 p-4 rounded-lg">
          <h3 class="font-bold text-slate-800 text-[15px]">Update of Project Flow</h3>
          <p class="text-sm text-slate-400 mt-1">Development</p>
        </div>
      </div>
    </div>
  </div>
</div>





<div class="w-[420px] bg-white rounded-xl shadow-sm border border-gray-100  mt-20">
  <div class="flex items-center justify-between p-5 border-b border-gray-50">
    <h2 class="text-lg font-bold text-slate-800">Notifications</h2>
    <button class="px-3 py-1.5 border border-gray-200 rounded-md text-sm font-medium text-slate-700 hover:bg-gray-50 transition-colors">
      View All
    </button>
  </div>

  <div class="p-5 space-y-8">
    
    <div class="flex gap-4">
      <img src="https://ui-avatars.com/api/?name=Lex+Murphy&background=0D8ABC&color=fff" class="w-12 h-12 rounded-full object-cover" alt="User">
      <div class="space-y-1">
        <h3 class="font-bold text-slate-800 text-[15px]">Lex Murphy requested access to UNIX</h3>
        <p class="text-sm text-slate-400">Today at 9:42 AM</p>
        
      </div>
    </div>

    <div class="flex gap-4">
      <img src="https://ui-avatars.com/api/?name=LM&background=f9a8d4&color=fff" class="w-12 h-12 rounded-full object-cover" alt="User">
      <div class="space-y-1">
        <h3 class="font-bold text-slate-800 text-[15px]">Lex Murphy requested access to UNIX</h3>
        <p class="text-sm text-slate-400">Today at 10:00 AM</p>
      </div>
    </div>

    <div class="flex gap-4">
      <img src="https://ui-avatars.com/api/?name=LM&background=2dd4bf&color=fff" class="w-12 h-12 rounded-full object-cover" alt="User">
      <div class="space-y-1">
        <h3 class="font-bold text-slate-800 text-[15px]">Lex Murphy requested access to UNIX</h3>
        <p class="text-sm text-slate-400">Today at 10:50 AM</p>
        <div class="flex gap-3 mt-4">
          <button class="px-5 py-2 bg-orange-500 text-white text-sm font-bold rounded-lg hover:bg-orange-600 transition-colors">
            Approve
          </button>
          <button class="px-5 py-2 border border-orange-500 text-orange-500 text-sm font-bold rounded-lg hover:bg-orange-50 transition-colors">
            Decline
          </button>
        </div>
      </div>
    </div>

    <div class="flex gap-4">
      <img src="https://ui-avatars.com/api/?name=LM&background=fb923c&color=fff" class="w-12 h-12 rounded-full object-cover" alt="User">
      <div class="space-y-1">
        <h3 class="font-bold text-slate-800 text-[15px]">Lex Murphy requested access to UNIX</h3>
        <p class="text-sm text-slate-400">Today at 12:00 PM</p>
      </div>
    </div>

    <div class="flex gap-4">
      <img src="https://ui-avatars.com/api/?name=LM&background=7c2d12&color=fff" class="w-12 h-12 rounded-full object-cover" alt="User">
      <div class="space-y-1">
        <h3 class="font-bold text-slate-800 text-[15px]">Lex Murphy requested access to UNIX</h3>
        <p class="text-sm text-slate-400">Today at 05:00 PM</p>
      </div>
    </div>

  </div>
</div>
</div>
  
</template>

<script setup>
const employees = ref([
  { id: 1, name: 'John Doe', email: 'john.d@company.com', dept: 'Engineering', role: 'Senior Frontend Dev', status: 'Active', joined: 'Jan 12, 2022' },
  { id: 2, name: 'Jane Smith', email: 'jane.s@company.com', dept: 'Design', role: 'UI/UX Designer', status: 'Active', joined: 'Mar 05, 2021' },
  { id: 3, name: 'Alex Johnson', email: 'a.johnson@company.com', dept: 'Marketing', role: 'SEO Specialist', status: 'On Leave', joined: 'Jun 15, 2023' },
  { id: 4, name: 'Michael Brown', email: 'm.brown@company.com', dept: 'Engineering', role: 'Backend Developer', status: 'Active', joined: 'Sep 20, 2020' },
  { id: 5, name: 'Sarah Wilson', email: 's.wilson@company.com', dept: 'Human Resources', role: 'HR Manager', status: 'Active', joined: 'Nov 10, 2019' },
  { id: 6, name: 'David Lee', email: 'd.lee@company.com', dept: 'Engineering', role: 'DevOps Engineer', status: 'Remote', joined: 'Feb 28, 2022' },
  { id: 7, name: 'Emily Davis', email: 'e.davis@company.com', dept: 'Design', role: 'Product Illustrator', status: 'Active', joined: 'May 14, 2023' },
  { id: 8, name: 'Chris Evans', email: 'c.evans@company.com', dept: 'Sales', role: 'Account Executive', status: 'On Leave', joined: 'Dec 02, 2022' },
  { id: 9, name: 'Jessica Alba', email: 'j.alba@company.com', dept: 'Support', role: 'Customer Success', status: 'Remote', joined: 'Aug 19, 2021' }
]);

// Helper function for status colors
const statusBadge = (status) => {
  switch (status) {
    case 'Active': return 'bg-green-100 text-green-700';
    case 'On Leave': return 'bg-orange-100 text-orange-700';
    case 'Remote': return 'bg-purple-100 text-purple-700';
    default: return 'bg-gray-100 text-gray-700';
  }
}





const team = ref([
  { id: 1, name: 'Alexander Jermai', role: 'UI/UX Designer', image: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'Doglas Martini', role: 'Product Designer', image: 'https://i.pravatar.cc/150?u=2' },
  { id: 3, name: 'Daniel Esbella', role: 'Project Manager', image: 'https://i.pravatar.cc/150?u=3' },
  { id: 4, name: 'Daniel Esbella', role: 'Team Lead', image: 'https://i.pravatar.cc/150?u=4' },
  { id: 5, name: 'Stephan Peralt', role: 'Team Lead', image: 'https://i.pravatar.cc/150?u=5' },
  { id: 6, name: 'Andrew Jermia', role: 'Project Lead', image: 'https://i.pravatar.cc/150?u=6' },
]);








//  meeting page


</script>
