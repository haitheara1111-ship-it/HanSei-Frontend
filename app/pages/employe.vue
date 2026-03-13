<template>
  <div class="ml-[20%] p-6">
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