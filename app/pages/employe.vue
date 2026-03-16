<template>


  <div class="w-full gap-10 bg-gray-100">
<h1 class="mt-10">BACK</h1>

<div class=" bg-gray-100 mt-5 ">
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      
      <div class="bg-white p-5 rounded-lg border border-gray-100 flex items-center justify-between shadow-sm">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </div>
          <div>
            <p class="text-sm text-gray-500">Total Employee</p>
            <h3 class="text-2xl font-bold">1007</h3>
          </div>
        </div>
        <span class="bg-purple-100 text-purple-600 px-2 py-1 rounded text-xs font-medium">+19.01%</span>
      </div>

      <div class="bg-white p-5 rounded-lg border border-gray-100 flex items-center justify-between shadow-sm">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          </div>
          <div>
            <p class="text-sm text-gray-500">Active</p>
            <h3 class="text-2xl font-bold">1007</h3>
          </div>
        </div>
        <span class="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs font-medium">+19.01%</span>
      </div>

      <div class="bg-white p-5 rounded-lg border border-gray-100 flex items-center justify-between shadow-sm">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
          </div>
          <div>
            <p class="text-sm text-gray-500">InActive</p>
            <h3 class="text-2xl font-bold">1007</h3>
          </div>
        </div>
        <span class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">+19.01%</span>
      </div>

      <div class="bg-white p-5 rounded-lg border border-gray-100 flex items-center justify-between shadow-sm">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
          </div>
          <div>
            <p class="text-sm text-gray-500">New Joiners</p>
            <h3 class="text-2xl font-bold">67</h3>
          </div>
        </div>
        <span class="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium">+19.01%</span>
      </div>

    </div>
  </div>





  <div class="bg-gray-100 w-full p-6">







    
    <h2 class="text-xl font-bold mb-4">Employee List</h2>

    <!-- Filters -->
    <div class="flex gap-3 mb-4">
      <input
        v-model="search"
        placeholder="Search employee"
        class="border p-2 rounded"
      />
    </div>

    <!-- Table -->
    <table class="w-full border">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-2 w-10">
            <input
              type="checkbox"
              v-model="selectAll"
              @change="toggleSelectAll"
              class="w-4 h-4 cursor-pointer"
            />
          </th>
          <th class=" p-2">ID</th>
          <th class=" p-2">Name</th>
          <th class="p-2">Email</th>
          <th class="p-2">Phone</th>
          <th class="p-2">Designation</th>
          <th class="p-2">Joining Date</th>
          <th class="p-2">Status</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="emp in filteredEmployees" :key="emp.id">
          <td class="p-2 text-center">
            <input
              type="checkbox"
              v-model="selectedEmployees"
              :value="emp.id"
              class="w-4 h-4 cursor-pointer"
            />
          </td>
          <td class=" p-2">{{ emp.id }}</td>
          <td class=" p-2">{{ emp.name }}</td>
          <td class="p-2">{{ emp.email }}</td>
          <td class="p-2">{{ emp.phone }}</td>

          <td class="p-2">
            <select v-model="emp.designation" class="border p-1 rounded">
              <option>Finance</option>
              <option>Developer</option>
              <option>Executive</option>
              <option>Manager</option>
            </select>
          </td>

          <td class="p-2">
            {{ emp.joiningDate }}
          </td>

          <td class="p-2">
            <span
              :class="
                emp.status === 'Active'
                  ? 'bg-green-500 text-white px-2 py-1 rounded'
                  : 'bg-red-500 text-white px-2 py-1 rounded'
              "
            >
              {{ emp.status }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const startDate = ref("");
const endDate = ref("");
const search = ref("");
const selectedEmployees = ref([]);
const selectAll = ref(false);

const employees = ref([
  {
    id: "ID-001",
    name: "Anthony Lewis",
    email: "anthony@example.com",
    phone: "123 456 789",
    designation: "Finance",
    joiningDate: "2024-09-12",
    status: "Active",
  },
  {
    id: "ID-002",
    name: "Brian Villalobos",
    email: "brian@example.com",
    phone: "179 738 282",
    designation: "Developer",
    joiningDate: "2024-10-24",
    status: "Active",
  },
  {
    id: "ID-003",
    name: "Rebecca Smith",
    email: "smith@example.com",
    phone: "162 892 071",
    designation: "Executive",
    joiningDate: "2024-02-22",
    status: "Inactive",
  },
  {
    id: "ID-004",
    name: "nha jo",
    email: "nhakach@gmail.com",
    phone: "068 098 678",
    designation: "Executive",
    joiningDate: "1970-02-22",
    status: "Active",
  },
  {
    id: "ID-006",
    name: "Nita niyey derm ke",
    email: "nitajo@gmail.com",
    phone: "000 000 000",
    designation: "Executive",
    joiningDate: "2000-02-22",
    status: "Inactive",
  },
  {
    id: "ID-007",
    name: "Chai kmeng laor",
    email: "nitajo@gmail.com",
    phone: "000 000 000",
    designation: "Developer",
    joiningDate: "2000-02-22",
    status: "Active",
  },
  {
    id: "ID-008",
    name: "Anthony Lewis",
    email: "anthony@example.com",
    phone: "123 456 789",
    designation: "Finance",
    joiningDate: "2024-09-12",
    status: "Active",
  },
  {
    id: "ID-009",
    name: "Brian Villalobos",
    email: "brian@example.com",
    phone: "179 738 282",
    designation: "Developer",
    joiningDate: "2024-10-24",
    status: "Active",
  },
  {
    id: "ID-010",
    name: "Rebecca Smith",
    email: "smith@example.com",
    phone: "162 892 071",
    designation: "Executive",
    joiningDate: "2024-02-22",
    status: "Inactive",
  },
  {
    id: "ID-011",
    name: "nha jo",
    email: "nhakach@gmail.com",
    phone: "068 098 678",
    designation: "Executive",
    joiningDate: "1970-02-22",
    status: "Active",
  },
  {
    id: "ID-012",
    name: "Nita niyey derm ke",
    email: "nitajo@gmail.com",
    phone: "000 000 000",
    designation: "Executive",
    joiningDate: "2000-02-22",
    status: "Inactive",
  },
  {
    id: "ID-013",
    name: "Chai kmeng laor",
    email: "nitajo@gmail.com",
    phone: "000 000 000",
    designation: "Developer",
    joiningDate: "2000-02-22",
    status: "Active",
  },
  {
    id: "ID-014",
    name: "Anthony Lewis",
    email: "anthony@example.com",
    phone: "123 456 789",
    designation: "Finance",
    joiningDate: "2024-09-12",
    status: "Active",
  },
]);

const filteredEmployees = computed(() => {
  return employees.value.filter((emp) => {
    const empDate = new Date(emp.joiningDate);

    const start = startDate.value ? new Date(startDate.value) : null;
    const end = endDate.value ? new Date(endDate.value) : null;

    const matchDate = (!start || empDate >= start) && (!end || empDate <= end);

    const matchSearch = emp.name
      .toLowerCase()
      .includes(search.value.toLowerCase());

    return matchDate && matchSearch;
  });
});

// Toggle all checkboxes
const toggleSelectAll = () => {
  if (selectAll.value) {
    selectedEmployees.value = filteredEmployees.value.map((emp) => emp.id);
  } else {
    selectedEmployees.value = [];
  }
};

// Update "select all" checkbox state when individual checkboxes change
watch(selectedEmployees, (newVal) => {
  const allIds = filteredEmployees.value.map((emp) => emp.id);
  selectAll.value =
    newVal.length > 0 && newVal.length === allIds.length;
});
</script>