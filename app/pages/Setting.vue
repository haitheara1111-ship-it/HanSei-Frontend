<template>
<div class="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen w-full transition">

<h1 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
  Settings
</h1>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6">

<!-- LEFT MENU -->
<div class="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
  <ul class="space-y-2">
    <li
      v-for="tab in tabs"
      :key="tab"
      @click="activeTab = tab"
      class="p-2 rounded-lg cursor-pointer text-sm font-medium transition"
      :class="activeTab === tab 
        ? 'bg-orange-100 text-orange-600 dark:bg-orange-500 dark:text-white' 
        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'"
    >
      {{ tab }}
    </li>
  </ul>
</div>

<!-- RIGHT CONTENT -->
<div class="md:col-span-2 space-y-6">

<!-- PROFILE -->
<div v-if="activeTab === 'Profile'" class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">

<h2 class="font-semibold mb-4 text-gray-800 dark:text-white">Profile Settings</h2>

<div class="flex items-center gap-4 mb-4">
  <img :src="profile.avatar" class="w-16 h-16 rounded-full"/>
  <input type="file" class="text-sm text-gray-600 dark:text-gray-300"/>
</div>

<div class="grid grid-cols-2 gap-4">

<input v-model="profile.name" placeholder="Name"
class="border dark:border-gray-700 dark:bg-gray-700 dark:text-white p-2 rounded"/>

<input v-model="profile.email" placeholder="Email"
class="border dark:border-gray-700 dark:bg-gray-700 dark:text-white p-2 rounded"/>

<input v-model="profile.phone" placeholder="Phone"
class="border dark:border-gray-700 dark:bg-gray-700 dark:text-white p-2 rounded"/>

<select v-model="profile.role"
class="border dark:border-gray-700 dark:bg-gray-700 dark:text-white p-2 rounded">
<option>Admin</option>
<option>Manager</option>
<option>Employee</option>
</select>

</div>

<button class="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
Save Changes
</button>

</div>

<!-- SYSTEM -->
<div v-if="activeTab === 'System'" class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">

<h2 class="font-semibold mb-4 text-gray-800 dark:text-white">
System Preferences
</h2>

<div class="space-y-4">

<!-- DARK MODE SWITCH -->
<div class="flex justify-between items-center">

<span class="text-gray-700 dark:text-gray-300">
Dark Mode
</span>

<button
@click="system.darkMode = !system.darkMode"
class="w-12 h-6 flex items-center rounded-full p-1 transition"
:class="system.darkMode ? 'bg-orange-500' : 'bg-gray-300'"
>

<div
class="bg-white w-4 h-4 rounded-full shadow-md transform transition"
:class="system.darkMode ? 'translate-x-6' : ''"
></div>

</button>

</div>

<!-- LANGUAGE -->
<div class="flex justify-between items-center">
<span class="text-gray-700 dark:text-gray-300">Language</span>

<select v-model="system.language"
class="border dark:border-gray-700 dark:bg-gray-700 dark:text-white p-1 rounded">
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
import { ref, watch, onMounted } from "vue"

const tabs = ["Profile", "Password", "Security", "Notifications", "Company", "System"]
const activeTab = ref("Profile")

const profile = ref({
  name: "Adrian",
  email: "adrian@email.com",
  phone: "012345678",
  role: "Admin",
  avatar: "https://i.pravatar.cc/100"
})

const system = ref({
  darkMode: false,
  language: "English"
})

/* Load saved theme */
onMounted(() => {
  const saved = localStorage.getItem("darkMode")

  if (saved === "true") {
    system.value.darkMode = true
    document.documentElement.classList.add("dark")
  }
})

/* Watch toggle */
watch(() => system.value.darkMode, (val) => {

  if (val) {
    document.documentElement.classList.add("dark")
    localStorage.setItem("darkMode", "true")
  } else {
    document.documentElement.classList.remove("dark")
    localStorage.setItem("darkMode", "false")
  }

})
</script>