<template>
  <div class=" w-full bg-gray-100 flex">
    <main class="flex-1 p-8 max-w-7xl mx-auto">
      <header class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-800">Employee Dashboard</h1>
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
