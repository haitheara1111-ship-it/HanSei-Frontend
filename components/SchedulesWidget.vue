<template>
<div class="bg-white rounded-xl shadow p-6">

<div class="flex justify-between items-center mb-6">
<h2 class="font-semibold text-lg">Schedules</h2>
<button class="text-sm border px-3 py-1 rounded">View All</button>
</div>

<div class="space-y-4">

<div
v-for="schedule in schedules"
:key="schedule.id"
class="bg-gray-50 p-4 rounded-lg"
>

<span class="text-xs bg-green-500 text-white px-2 py-1 rounded">
{{ schedule.role }}
</span>

<h3 class="font-medium mt-2">
{{ schedule.title }}
</h3>

<p class="text-sm text-gray-500">
{{ schedule.date }} • {{ schedule.time }}
</p>

<div class="flex justify-between items-center mt-4">

<div class="flex -space-x-2">
<img
v-for="member in schedule.members"
:key="member"
:src="member"
class="w-7 h-7 rounded-full border"
/>
</div>

<button class="border px-3 py-1 rounded text-sm">
Join Meeting
</button>

</div>

</div>

</div>

</div>
</template>

<script setup>
const schedules = [
{
id:1,
role:"UI/UX Designer",
title:"Interview Candidates - UI/UX Designer",
date:"Thu, 15 Feb 2025",
time:"01:00 PM - 02:20 PM",
members:[
"https://i.pravatar.cc/40?img=1",
"https://i.pravatar.cc/40?img=2",
"https://i.pravatar.cc/40?img=3"
]
},
{
id:2,
role:"IOS Developer",
title:"Interview Candidates - IOS Developer",
date:"Thu, 15 Feb 2025",
time:"02:00 PM - 04:20 PM",
members:[
"https://i.pravatar.cc/40?img=4",
"https://i.pravatar.cc/40?img=5"
]
}
]
</script>