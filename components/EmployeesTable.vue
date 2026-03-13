<template>
  <div class="bg-white rounded-xl shadow p-6">

    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-lg font-semibold">Employees</h2>

      <button class="bg-orange-500 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-600">
        View All
      </button>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="w-full text-left">

        <thead class="border-b text-sm text-gray-500">
          <tr>
            <th class="py-3">Employee</th>
            <th>Email</th>
            <th>Department</th>
            <th>Position</th>
            <th>Status</th>
            <th class="text-right">Action</th>
          </tr>
        </thead>

        <tbody>

          <tr
            v-for="employee in employees"
            :key="employee.id"
            class="border-b hover:bg-gray-50"
          >

            <!-- Employee -->
            <td class="py-3 ">
              <div class="flex items-center gap-3">
                <img
                  :src="employee.avatar"
                  class="w-10 h-10 rounded-full"
                />

                <span class="font-xs text-gray-800 ">
                  {{ employee.name }}
                </span>
              </div>
            </td>

            <td class="text-gray-600">
              {{ employee.email }}
            </td>

            <td>
              {{ employee.department }}
            </td>

            <td>
              {{ employee.position }}
            </td>

            <!-- Status -->
            <td>
              <span
                class="px-3 py-1 text-xs rounded-full font-medium"
                :class="statusColor(employee.status)"
              >
                {{ employee.status }}
              </span>
            </td>

            <!-- Actions -->
            <td class="text-right">
              <button class="text-blue-500 hover:underline text-sm mr-3">
                Edit
              </button>

              <button class="text-red-500 hover:underline text-sm">
                Delete
              </button>
            </td>

          </tr>

        </tbody>

      </table>
    </div>

  </div>
</template>

<script setup>

const employees = [
  {
    id: 1,
    name: "Daniel",
    email: "daniel@email.com",
    department: "UI/UX",
    position: "Designer",
    status: "Active",
    avatar: "https://i.pravatar.cc/40?img=3"
  },
  {
    id: 2,
    name: "Anna ",
    email: "anna@email.com",
    department: "Development",
    position: "Frontend Developer",
    status: "Active",
    avatar: "https://i.pravatar.cc/40?img=5"
  },
  {
    id: 3,
    name: "Michael",
    email: "michael@email.com",
    department: "HR",
    position: "HR Manager",
    status: "On Leave",
    avatar: "https://i.pravatar.cc/40?img=8"
  },
  {
    id: 4,
    name: "Sophia",
    email: "sophia@email.com",
    department: "Marketing",
    position: "Marketing Lead",
    status: "Active",
    avatar: "https://i.pravatar.cc/40?img=12"
  }
]

const statusColor = (status) => {
  if (status === "Active")
    return "bg-green-100 text-green-600"

  if (status === "On Leave")
    return "bg-yellow-100 text-yellow-600"

  return "bg-gray-100 text-gray-600"
}

</script>