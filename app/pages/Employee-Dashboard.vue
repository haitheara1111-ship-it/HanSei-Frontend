<template>
  <div class="w-full bg-gray-100">
    <main class="flex-1 p-8 max-w-7xl mx-auto">
      <header class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-800">Employee Dashboard</h1>
          <p class="text-gray-500">
            Managing {{ employees.length }} total team members
          </p>
        </div>
        <NuxtLink
          to="/List-Employee"
          class="bg-orange-600 text-white px-5 py-2.5 rounded-lg hover:bg-orange-700 shadow-sm transition-all font-medium inline-block"
        >
          + Add Employee
        </NuxtLink>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p
            class="text-gray-500 text-xs uppercase tracking-wider font-semibold"
          >
            Total Employees
          </p>
          <p class="text-3xl font-bold text-gray-800">{{ employees.length }}</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p
            class="text-gray-500 text-xs uppercase tracking-wider font-semibold"
          >
            Active Now
          </p>
          <p class="text-3xl font-bold text-green-600">
            {{ employees.filter((e) => e.status === "Active").length }}
          </p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p
            class="text-gray-500 text-xs uppercase tracking-wider font-semibold"
          >
            On Leave
          </p>
          <p class="text-3xl font-bold text-orange-500">
            {{ employees.filter((e) => e.status === "On Leave").length }}
          </p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p
            class="text-gray-500 text-xs uppercase tracking-wider font-semibold"
          >
            Remote
          </p>
          <p class="text-3xl font-bold text-purple-600">
            {{ employees.filter((e) => e.status === "Remote").length }}
          </p>
        </div>
      </div>
    </main>

    <div class="p-8 bg-gray-100">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Attendance -->
        <div class="bg-white rounded-lg shadow p-5 flex items-center gap-4">
          <div class="bg-orange-500 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
            </svg>
          </div>

          <div>
            <p class="text-gray-500 text-sm">Attendance Overview</p>
            <p class="text-xl font-bold">120/154</p>
            <p class="text-blue-500 text-sm mt-1 cursor-pointer">
              View Details
            </p>
          </div>
        </div>

        <!-- Projects -->
        <div class="bg-white rounded-lg shadow p-5 flex items-center gap-4">
          <div class="bg-teal-700 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M16 3h-8v4h8z" />
            </svg>
          </div>

          <div>
            <p class="text-gray-500 text-sm">Total No of Projects</p>
            <p class="text-xl font-bold">90/125</p>
            <p class="text-blue-500 text-sm mt-1 cursor-pointer">View All</p>
          </div>
        </div>

        <!-- Clients -->
        <div class="bg-white rounded-lg shadow p-5 flex items-center gap-4">
          <div class="bg-blue-500 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <circle cx="9" cy="7" r="4" />
              <path d="M17 11c2 0 4 2 4 4v3H3v-3c0-2 2-4 4-4" />
            </svg>
          </div>

          <div>
            <p class="text-gray-500 text-sm">Total No of Clients</p>
            <p class="text-xl font-bold">69/86</p>
            <p class="text-blue-500 text-sm mt-1 cursor-pointer">View All</p>
          </div>
        </div>

        <!-- Tasks -->
        <div class="bg-white rounded-lg shadow p-5 flex items-center gap-4">
          <div class="bg-pink-500 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 11l3 3L22 4" />
              <path
                d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
              />
            </svg>
          </div>

          <div>
            <p class="text-gray-500 text-sm">Total No of Tasks</p>
            <p class="text-xl font-bold">96/100</p>
            <p class="text-blue-500 text-sm mt-1 cursor-pointer">View All</p>
          </div>
        </div>

        <!-- Earnings -->
        <div class="bg-white rounded-lg shadow p-5 flex items-center gap-4">
          <div class="bg-purple-500 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M6 20c0-3 3-5 6-5s6 2 6 5" />
            </svg>
          </div>

          <div>
            <p class="text-gray-500 text-sm">Earnings</p>
            <p class="text-xl font-bold">$21,445</p>
            <p class="text-blue-500 text-sm mt-1 cursor-pointer">View All</p>
          </div>
        </div>

        <!-- Profit -->
        <div class="bg-white rounded-lg shadow p-5 flex items-center gap-4">
          <div class="bg-red-500 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 17l6-6 4 4 8-8" />
              <path d="M14 7h7v7" />
            </svg>
          </div>

          <div>
            <p class="text-gray-500 text-sm">Profit This Week</p>
            <p class="text-xl font-bold">$5,544</p>
            <p class="text-blue-500 text-sm mt-1 cursor-pointer">View All</p>
          </div>
        </div>

        <!-- Applicants -->
        <div class="bg-white rounded-lg shadow p-5 flex items-center gap-4">
          <div class="bg-green-500 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <circle cx="9" cy="7" r="4" />
              <circle cx="17" cy="7" r="4" />
              <path d="M3 21c0-3 3-5 6-5" />
              <path d="M15 16c3 0 6 2 6 5" />
            </svg>
          </div>

          <div>
            <p class="text-gray-500 text-sm">Job Applicants</p>
            <p class="text-xl font-bold">98</p>
            <p class="text-blue-500 text-sm mt-1 cursor-pointer">View All</p>
          </div>
        </div>

        <!-- New Hire -->
        <div class="bg-white rounded-lg shadow p-5 flex items-center gap-4">
          <div class="bg-gray-800 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="7" r="4" />
              <path d="M5 21c0-3 3-5 7-5s7 2 7 5" />
            </svg>
          </div>

          <div>
            <p class="text-gray-500 text-sm">New Hire</p>
            <p class="text-xl font-bold">45/48</p>
            <p class="text-blue-500 text-sm mt-1 cursor-pointer">View All</p>
          </div>
        </div>
      </div>
    </div>

    <div class="p-6 bg-gray-100">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Team Members -->
        <div class="bg-white rounded-lg shadow">
          <div class="flex justify-between items-center p-4 border-b">
            <h2 class="font-semibold text-gray-700">Team Members</h2>
            <button class="text-sm bg-gray-100 px-3 py-1 rounded">
              View All
            </button>
          </div>

          <div class="p-4 space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/40?img=1"
                  class="w-10 h-10 rounded-full"
                />
                <div>
                  <p class="font-medium">Alexander Jermai</p>
                  <p class="text-sm text-gray-500">UI/UX Designer</p>
                </div>
              </div>

              <div class="flex gap-2">
                <button class="p-2 bg-gray-100 rounded">
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M22 16.92V19a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012 4.18 2 2 0 014 2h2.09a2 2 0 012 1.72c.12.9.37 1.78.72 2.6a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.48-1.27a2 2 0 012.11-.45c.82.35 1.7.6 2.6.72A2 2 0 0122 16.92z"
                    />
                  </svg>
                </button>

                <button class="p-2 bg-gray-100 rounded">
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h16v16H4z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Repeat members -->
            <div class="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/40?img=5"
                class="w-10 h-10 rounded-full"
              />
              <div>
                <p class="font-medium">Daniel Esbella</p>
                <p class="text-sm text-gray-500">Project Manager</p>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/40?img=8"
                class="w-10 h-10 rounded-full"
              />
              <div>
                <p class="font-medium">Andrew Jermia</p>
                <p class="text-sm text-gray-500">Project Lead</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Notifications -->
        <div class="bg-white rounded-lg shadow">
          <div class="flex justify-between items-center p-4 border-b">
            <h2 class="font-semibold text-gray-700">Notifications</h2>
            <button class="text-sm bg-gray-100 px-3 py-1 rounded">
              View All
            </button>
          </div>

          <div class="p-4 space-y-4">
            <div class="flex gap-3">
              <img
                src="https://i.pravatar.cc/40?img=11"
                class="w-10 h-10 rounded-full"
              />
              <div>
                <p class="font-medium text-sm">
                  Lex Murphy requested access to UNIX
                </p>
                <p class="text-xs text-gray-500">Today at 9:42 AM</p>
              </div>
            </div>

            <div class="flex gap-3">
              <img
                src="https://i.pravatar.cc/40?img=12"
                class="w-10 h-10 rounded-full"
              />
              <div>
                <p class="font-medium text-sm">
                  Lex Murphy requested access to UNIX
                </p>
                <p class="text-xs text-gray-500">Today at 10:00 AM</p>
              </div>
            </div>

            <div class="flex gap-3">
              <img
                src="https://i.pravatar.cc/40?img=13"
                class="w-10 h-10 rounded-full"
              />
              <div>
                <p class="font-medium text-sm">
                  Lex Murphy requested access to UNIX
                </p>
                <p class="text-xs text-gray-500">Today at 12:00 PM</p>

                <div class="flex gap-2 mt-2">
                  <button
                    class="bg-orange-500 text-white px-3 py-1 text-xs rounded"
                  >
                    Approve
                  </button>
                  <button class="border px-3 py-1 text-xs rounded">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Meeting Schedule -->
        <div class="bg-white rounded-lg shadow">
          <div class="flex justify-between items-center p-4 border-b">
            <h2 class="font-semibold text-gray-700">Meetings Schedule</h2>
            <button class="text-sm bg-gray-100 px-3 py-1 rounded">Today</button>
          </div>

          <div class="p-4 space-y-4">
            <div class="flex gap-3">
              <span class="text-sm text-gray-500 w-20">09:25 AM</span>
              <div class="bg-gray-50 p-3 rounded w-full">
                <p class="font-medium text-sm">
                  Marketing Strategy Presentation
                </p>
                <p class="text-xs text-gray-500">Marketing</p>
              </div>
            </div>

            <div class="flex gap-3">
              <span class="text-sm text-gray-500 w-20">09:20 AM</span>
              <div class="bg-gray-50 p-3 rounded w-full">
                <p class="font-medium text-sm">
                  Design Review Hospital, doctors Management Project
                </p>
                <p class="text-xs text-gray-500">Review</p>
              </div>
            </div>

            <div class="flex gap-3">
              <span class="text-sm text-gray-500 w-20">09:18 AM</span>
              <div class="bg-gray-50 p-3 rounded w-full">
                <p class="font-medium text-sm">
                  Birthday Celebration of Employee
                </p>
                <p class="text-xs text-gray-500">Celebration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow mb-6">
      <!-- Header -->
      <div class="flex justify-between items-center p-4 border-b">
        <h2 class="font-semibold text-gray-700">My Skills</h2>

        <button
          class="flex items-center gap-2 text-sm bg-gray-100 px-3 py-1 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
          </svg>
          2026
        </button>
      </div>

      <!-- Skills -->
      <div class="p-4 space-y-4">
        <!-- Skill -->
        <div
          class="flex justify-between items-center bg-gray-50 p-4 rounded border border-dashed"
        >
          <div class="flex items-center gap-3">
            <div class="w-1 h-8 bg-orange-500 rounded"></div>

            <div>
              <p class="font-medium">Figma</p>
              <p class="text-sm text-gray-500">Updated : 15 May 2025</p>
            </div>
          </div>

          <!-- Progress Circle -->
          <div class="relative w-14 h-14">
            <svg class="w-14 h-14 rotate-[-90deg]" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="15"
                stroke="#e5e7eb"
                stroke-width="3"
                fill="none"
              />
              <circle
                cx="18"
                cy="18"
                r="15"
                stroke="#f97316"
                stroke-width="3"
                fill="none"
                stroke-dasharray="95, 100"
              />
            </svg>
            <span
              class="absolute inset-0 flex items-center justify-center text-xs font-semibold"
            >
              95%
            </span>
          </div>
        </div>

        <!-- HTML -->
        <div
          class="flex justify-between items-center bg-gray-50 p-4 rounded border border-dashed"
        >
          <div class="flex items-center gap-3">
            <div class="w-1 h-8 bg-green-500 rounded"></div>
            <div>
              <p class="font-medium">HTML</p>
              <p class="text-sm text-gray-500">Updated : 12 May 2025</p>
            </div>
          </div>

          <div class="relative w-14 h-14">
            <svg class="w-14 h-14 rotate-[-90deg]" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="15"
                stroke="#e5e7eb"
                stroke-width="3"
                fill="none"
              />
              <circle
                cx="18"
                cy="18"
                r="15"
                stroke="#22c55e"
                stroke-width="3"
                fill="none"
                stroke-dasharray="85,100"
              />
            </svg>
            <span
              class="absolute inset-0 flex items-center justify-center text-xs font-semibold"
              >85%</span
            >
          </div>
        </div>

        <!-- CSS -->
        <div
          class="flex justify-between items-center bg-gray-50 p-4 rounded border border-dashed"
        >
          <div class="flex items-center gap-3">
            <div class="w-1 h-8 bg-purple-500 rounded"></div>
            <div>
              <p class="font-medium">CSS</p>
              <p class="text-sm text-gray-500">Updated : 12 May 2025</p>
            </div>
          </div>

          <div class="relative w-14 h-14">
            <svg class="w-14 h-14 rotate-[-90deg]" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="15"
                stroke="#e5e7eb"
                stroke-width="3"
                fill="none"
              />
              <circle
                cx="18"
                cy="18"
                r="15"
                stroke="#a855f7"
                stroke-width="3"
                fill="none"
                stroke-dasharray="70,100"
              />
            </svg>
            <span
              class="absolute inset-0 flex items-center justify-center text-xs font-semibold"
              >70%</span
            >
          </div>
        </div>

        <!-- Wordpress -->
        <div
          class="flex justify-between items-center bg-gray-50 p-4 rounded border border-dashed"
        >
          <div class="flex items-center gap-3">
            <div class="w-1 h-8 bg-blue-500 rounded"></div>
            <div>
              <p class="font-medium">Wordpress</p>
              <p class="text-sm text-gray-500">Updated : 15 May 2025</p>
            </div>
          </div>

          <div class="relative w-14 h-14">
            <svg class="w-14 h-14 rotate-[-90deg]" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="15"
                stroke="#e5e7eb"
                stroke-width="3"
                fill="none"
              />
              <circle
                cx="18"
                cy="18"
                r="15"
                stroke="#3b82f6"
                stroke-width="3"
                fill="none"
                stroke-dasharray="61,100"
              />
            </svg>
            <span
              class="absolute inset-0 flex items-center justify-center text-xs font-semibold"
              >61%</span
            >
          </div>
        </div>

        <!-- Javascript -->
        <div
          class="flex justify-between items-center bg-gray-50 p-4 rounded border border-dashed"
        >
          <div class="flex items-center gap-3">
            <div class="w-1 h-8 bg-gray-700 rounded"></div>
            <div>
              <p class="font-medium">Javascript</p>
              <p class="text-sm text-gray-500">Updated : 13 May 2025</p>
            </div>
          </div>

          <div class="relative w-14 h-14">
            <svg class="w-14 h-14 rotate-[-90deg]" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="15"
                stroke="#e5e7eb"
                stroke-width="3"
                fill="none"
              />
              <circle
                cx="18"
                cy="18"
                r="15"
                stroke="#374151"
                stroke-width="3"
                fill="none"
                stroke-dasharray="58,100"
              />
            </svg>
            <span
              class="absolute inset-0 flex items-center justify-center text-xs font-semibold"
              >58%</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const employees = ref([
  {
    id: 1,
    name: "John Doe",
    email: "john.d@company.com",
    dept: "Engineering",
    role: "Senior Frontend Dev",
    status: "Active",
    joined: "Jan 12, 2022",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.s@company.com",
    dept: "Design",
    role: "UI/UX Designer",
    status: "Active",
    joined: "Mar 05, 2021",
  },
  {
    id: 3,
    name: "Alex Johnson",
    email: "a.johnson@company.com",
    dept: "Marketing",
    role: "SEO Specialist",
    status: "On Leave",
    joined: "Jun 15, 2023",
  },
  {
    id: 4,
    name: "Michael Brown",
    email: "m.brown@company.com",
    dept: "Engineering",
    role: "Backend Developer",
    status: "Active",
    joined: "Sep 20, 2020",
  },
  {
    id: 5,
    name: "Sarah Wilson",
    email: "s.wilson@company.com",
    dept: "Human Resources",
    role: "HR Manager",
    status: "Active",
    joined: "Nov 10, 2019",
  },
  {
    id: 6,
    name: "David Lee",
    email: "d.lee@company.com",
    dept: "Engineering",
    role: "DevOps Engineer",
    status: "Remote",
    joined: "Feb 28, 2022",
  },
  {
    id: 7,
    name: "Emily Davis",
    email: "e.davis@company.com",
    dept: "Design",
    role: "Product Illustrator",
    status: "Active",
    joined: "May 14, 2023",
  },
  {
    id: 8,
    name: "Chris Evans",
    email: "c.evans@company.com",
    dept: "Sales",
    role: "Account Executive",
    status: "On Leave",
    joined: "Dec 02, 2022",
  },
  {
    id: 9,
    name: "Jessica Alba",
    email: "j.alba@company.com",
    dept: "Support",
    role: "Customer Success",
    status: "Remote",
    joined: "Aug 19, 2021",
  },
]);

// Helper function for status colors
const statusBadge = (status) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-700";
    case "On Leave":
      return "bg-orange-100 text-orange-700";
    case "Remote":
      return "bg-purple-100 text-purple-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const team = ref([
  {
    id: 1,
    name: "Alexander Jermai",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?u=1",
  },
  {
    id: 2,
    name: "Doglas Martini",
    role: "Product Designer",
    image: "https://i.pravatar.cc/150?u=2",
  },
  {
    id: 3,
    name: "Daniel Esbella",
    role: "Project Manager",
    image: "https://i.pravatar.cc/150?u=3",
  },
  {
    id: 4,
    name: "Daniel Esbella",
    role: "Team Lead",
    image: "https://i.pravatar.cc/150?u=4",
  },
  {
    id: 5,
    name: "Stephan Peralt",
    role: "Team Lead",
    image: "https://i.pravatar.cc/150?u=5",
  },
  {
    id: 6,
    name: "Andrew Jermia",
    role: "Project Lead",
    image: "https://i.pravatar.cc/150?u=6",
  },
]);

//  meeting page
</script>
