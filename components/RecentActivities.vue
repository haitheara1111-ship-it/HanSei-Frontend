<template>
<div class="bg-white rounded-xl shadow p-6">

<div class="flex justify-between items-center mb-6">
<h2 class="font-semibold text-lg">Recent Activities</h2>
<button class="text-sm border px-3 py-1 rounded">View All</button>
</div>

<div class="space-y-5">

<div
v-for="activity in activities"
:key="activity.id"
class="flex items-center justify-between"
>

<div class="flex items-center gap-3">

<img
:src="activity.avatar"
class="w-10 h-10 rounded-full"
/>

<div>
<p class="font-medium">
{{ activity.name }}
</p>

<p class="text-sm text-gray-500">
{{ activity.text }}
</p>
</div>

</div>

<span class="text-sm text-gray-400">
{{ activity.time }}
</span>

</div>

</div>

</div>
</template>

<script setup>
const activities = [
{
id:1,
name:"Matt Morgan",
text:"Added New Project HRMS Dashboard",
time:"05:30 PM",
avatar:"https://i.pravatar.cc/40?img=10"
},
{
id:2,
name:"Jay Ze",
text:"Commented on Uploaded Document",
time:"05:00 PM",
avatar:"https://i.pravatar.cc/40?img=11"
},
{
id:3,
name:"Mary Donald",
text:"Approved Task Projects",
time:"05:30 PM",
avatar:"https://i.pravatar.cc/40?img=12"
}
]
</script>