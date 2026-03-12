<template>
  <div class="flex min-h-screen bg-gray-100">

    <!-- Empty Sidebar Space -->
    <div class="w-[20%] bg-transparent"></div>

    <!-- Main Content -->
    <div class="w-[80%]">

      <!-- Top Navbar -->
      <header class="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 class="text-xl font-bold">Dashboard</h1>

        <div class="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            class="border rounded-lg px-3 py-2 text-sm"
          />

          <img
            src="https://i.pravatar.cc/40"
            class="w-10 h-10 rounded-full"
          />
        </div>
      </header>

      <!-- Page Content -->
      <main class="p-6 space-y-6">

        <!-- Cards -->
        <div class="grid grid-cols-4 gap-6">

          <div class="bg-white p-6 rounded-xl shadow">
            <h3 class="text-gray-500 text-sm">Total Employees</h3>
            <p class="text-2xl font-bold mt-2">120</p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow">
            <h3 class="text-gray-500 text-sm">Departments</h3>
            <p class="text-2xl font-bold mt-2">8</p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow">
            <h3 class="text-gray-500 text-sm">Projects</h3>
            <p class="text-2xl font-bold mt-2">34</p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow">
            <h3 class="text-gray-500 text-sm">Attendance</h3>
            <p class="text-2xl font-bold mt-2">95%</p>
          </div>

        </div>

        <!-- Table Section -->
        <div class="bg-white rounded-xl shadow p-6">
          <h2 class="text-lg font-semibold mb-4">Employees</h2>

          <table class="w-full text-left">
            <thead>
              <tr class="border-b text-gray-500 text-sm">
                <th class="py-3">Name</th>
                <th>Position</th>
                <th>Department</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr class="border-b">
                <td class="py-3">John Doe</td>
                <td>Developer</td>
                <td>Engineering</td>
                <td>
                  <span class="text-green-600 font-medium">Active</span>
                </td>
              </tr>

              <tr class="border-b">
                <td class="py-3">Anna Smith</td>
                <td>Designer</td>
                <td>UI/UX</td>
                <td>
                  <span class="text-yellow-600 font-medium">On Leave</span>
                </td>
              </tr>
            </tbody>

          </table>
        </div>

      </main>
    </div>
  </div>
</template>