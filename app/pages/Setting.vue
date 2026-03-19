<template>
  <div class="p-8 bg-gray-50 w-full">

    <h1 class="text-2xl font-bold mb-6">Settings</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

      <!-- LEFT MENU -->
      <div class="bg-white rounded-xl shadow p-4">
        <ul class="space-y-2">
          <li
            v-for="tab in tabs"
            :key="tab"
            @click="activeTab = tab"
            class="p-2 rounded-lg cursor-pointer text-sm font-medium"
            :class="activeTab === tab ? 'bg-orange-100 text-orange-600' : 'hover:bg-gray-100'"
          >
            {{ tab }}
          </li>
        </ul>
      </div>

      <!-- RIGHT CONTENT -->
      <div class="md:col-span-2 space-y-6">

        <!-- PROFILE -->
        <div v-if="activeTab === 'Profile'" class="bg-white p-6 rounded-xl shadow">

          <h2 class="font-semibold mb-4">Profile Settings</h2>

          <div class="flex items-center gap-4 mb-4">
            <img :src="profile.avatar" class="w-16 h-16 rounded-full"/>
            <input type="file" class="text-sm"/>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <input v-model="profile.name" placeholder="Name" class="border p-2 rounded"/>
            <input v-model="profile.email" placeholder="Email" class="border p-2 rounded"/>
            <input v-model="profile.phone" placeholder="Phone" class="border p-2 rounded"/>
            <select v-model="profile.role" class="border p-2 rounded">
              <option>Admin</option>
              <option>Manager</option>
              <option>Employee</option>
            </select>
          </div>

          <button class="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
            Save Changes
          </button>
        </div>

        <!-- PASSWORD -->
        <div v-if="activeTab === 'Password'" class="bg-white p-6 rounded-xl shadow">

          <h2 class="font-semibold mb-4">Change Password</h2>

          <div class="space-y-3">
            <input type="password" placeholder="Current Password" class="border p-2 rounded w-full"/>
            <input type="password" placeholder="New Password" class="border p-2 rounded w-full"/>
            <input type="password" placeholder="Confirm Password" class="border p-2 rounded w-full"/>
          </div>

          <button class="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
            Update Password
          </button>
        </div>

        <!-- SECURITY -->
        <div v-if="activeTab === 'Security'" class="bg-white p-6 rounded-xl shadow">

          <h2 class="font-semibold mb-4">Security Settings</h2>

          <div class="space-y-4">

            <!-- 2FA -->
            <div class="flex justify-between items-center">
              <span>Enable 2FA Authentication</span>
              <input type="checkbox" v-model="security.twoFA" class="toggle"/>
            </div>

            <!-- Last Login -->
            <div class="text-sm text-gray-500">
              Last Login: {{ security.lastLogin }}
            </div>

          </div>

          <button class="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
            Save Security Settings
          </button>
        </div>

        <!-- NOTIFICATIONS -->
        <div v-if="activeTab === 'Notifications'" class="bg-white p-6 rounded-xl shadow">

          <h2 class="font-semibold mb-4">Notifications</h2>

          <div class="space-y-3">

            <div class="flex justify-between">
              <span>Email Notifications</span>
              <input type="checkbox" v-model="notifications.email"/>
            </div>

            <div class="flex justify-between">
              <span>SMS Notifications</span>
              <input type="checkbox" v-model="notifications.sms"/>
            </div>

            <div class="flex justify-between">
              <span>Leave Request Alerts</span>
              <input type="checkbox" v-model="notifications.leave"/>
            </div>

          </div>

          <button class="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
            Save Preferences
          </button>
        </div>

        <!-- COMPANY -->
        <div v-if="activeTab === 'Company'" class="bg-white p-6 rounded-xl shadow">

          <h2 class="font-semibold mb-4">Company Settings</h2>

          <div class="grid grid-cols-2 gap-4">
            <input v-model="company.name" placeholder="Company Name" class="border p-2 rounded"/>
            <input v-model="company.location" placeholder="Location" class="border p-2 rounded"/>
            <input v-model="company.timezone" placeholder="Timezone" class="border p-2 rounded"/>
            <input v-model="company.currency" placeholder="Currency" class="border p-2 rounded"/>
          </div>

          <button class="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
            Save Company Info
          </button>
        </div>

        <!-- SYSTEM -->
        <div v-if="activeTab === 'System'" class="bg-white p-6 rounded-xl shadow">

          <h2 class="font-semibold mb-4">System Preferences</h2>

          <div class="space-y-4">

            <div class="flex justify-between">
              <span>Dark Mode</span>
              <input type="checkbox" v-model="system.darkMode"/>
            </div>

            <div class="flex justify-between">
              <span>Language</span>
              <select v-model="system.language" class="border p-1 rounded">
                <option>English</option>
                <option>Khmer</option>
              </select>
            </div>

          </div>

          <button class="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
            Save Preferences
          </button>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const tabs = ["Profile", "Password", "Security", "Notifications", "Company", "System"]
const activeTab = ref("Profile")

const profile = ref({
  name: "Adrian",
  email: "adrian@email.com",
  phone: "012345678",
  role: "Admin",
  avatar: "https://i.pravatar.cc/100"
})

const security = ref({
  twoFA: false,
  lastLogin: "18 March 2026"
})

const notifications = ref({
  email: true,
  sms: false,
  leave: true
})

const company = ref({
  name: "Rocket Ideas",
  location: "South Korea",
  timezone: "GMT+7",
  currency: "USD"
})

const system = ref({
  darkMode: false,
  language: "English"
})
</script>