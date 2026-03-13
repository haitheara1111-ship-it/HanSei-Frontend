<template>
  <div class="bg-white rounded-xl shadow-sm border p-6 flex items-center justify-between">

    <!-- Left Side -->
    <div class="flex items-center gap-4">

      <!-- Avatar -->
      <img
        src="https://i.pravatar.cc/80"
        class="w-14 h-14 rounded-full object-cover"
      />

      <!-- Text -->
      <div>
        <h2 class="text-xl font-semibold text-gray-800">
          Welcome Back, Adrian
          <span class="text-gray-400 text-sm ml-1">✏️</span>
        </h2>

        <p class="text-gray-500 text-sm mt-1">
          You have
          <span class="text-orange-500 font-semibold">21</span>
          Pending Approvals &
          <span class="text-orange-500 font-semibold">14</span>
          Leave Requests
        </p>
      </div>

    </div>

    <!-- Right Buttons -->
    <div class="flex gap-3">

      <button
        class="border px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 text-sm font-medium"
      >
        📅 Add Schedule
      </button>

      <button
        class="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 text-sm font-medium"
      >
        ➕ Add Requests
      </button>

    </div>

  </div>
</template>