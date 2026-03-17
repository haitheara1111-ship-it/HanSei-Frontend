<template>
  <div class="bg-white rounded-xl shadow p-6">

    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-lg font-semibold">Job Applicants</h2>

      <NuxtLink to="/JobsListing"><button class="border text-sm px-3 py-1 rounded-md hover:bg-gray-100">
        View All
      </button></NuxtLink>
    </div>

    <!-- Applicants List -->
    <div class="space-y-4">

      <div
        v-for="applicant in applicants"
        :key="applicant.id"
        class="flex items-center justify-between border-b pb-3"
      >

        <!-- Left -->
        <div class="flex items-center gap-3">
          <img
            :src="applicant.avatar"
            class="w-10 h-10 rounded-full object-cover"
          />

          <div>
            <p class="font-medium text-gray-800">
              {{ applicant.name }}
            </p>

            <p class="text-sm text-gray-500">
              {{ applicant.position }}
            </p>
          </div>
        </div>

        <!-- Status -->
        <span
          class="text-xs px-3 py-1 rounded-full font-medium"
          :class="statusColor(applicant.status)"
        >
          {{ applicant.status }}
        </span>

      </div>

    </div>

  </div>
</template>

<script setup>

const applicants = [
  {
    id: 1,
    name: "Daniel Esbella",
    position: "UI/UX Designer",
    status: "Interview",
    avatar: "https://i.pravatar.cc/40?img=5"
  },
  {
    id: 2,
    name: "Anna Smith",
    position: "Frontend Developer",
    status: "Pending",
    avatar: "https://i.pravatar.cc/40?img=8"
  },
  {
    id: 3,
    name: "Michael Lee",
    position: "Backend Developer",
    status: "Hired",
    avatar: "https://i.pravatar.cc/40?img=12"
  },
  {
    id: 4,
    name: "Sophia Brown",
    position: "Project Manager",
    status: "Interview",
    avatar: "https://i.pravatar.cc/40?img=15"
  }
]

const statusColor = (status) => {
  if (status === "Interview")
    return "bg-yellow-100 text-yellow-600"

  if (status === "Pending")
    return "bg-blue-100 text-blue-600"

  if (status === "Hired")
    return "bg-green-100 text-green-600"

  return "bg-gray-100 text-gray-600"
}

</script>