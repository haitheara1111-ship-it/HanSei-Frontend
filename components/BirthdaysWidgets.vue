<template>
<div class="bg-white rounded-xl shadow p-6">

<div class="flex justify-between items-center mb-6">
<h2 class="font-semibold text-lg">Birthdays</h2>
<button class="text-sm border px-3 py-1 rounded">View All</button>
</div>

<div class="space-y-4">

<div
v-for="person in birthdays"
:key="person.id"
class="flex items-center justify-between p-3 rounded-lg border"
>

<div class="flex items-center gap-3">

<img
:src="person.avatar"
class="w-10 h-10 rounded-full"
/>

<div>
<p class="font-medium">
{{ person.name }}
</p>

<p class="text-sm text-gray-500">
{{ person.role }}
</p>
</div>

</div>

<button class="border px-3 py-1 rounded text-sm">
Send
</button>

</div>

</div>

</div>
</template>

<script setup>
const birthdays = [
{
id:1,
name:"Andrew Jermia",
role:"IOS Developer",
avatar:"https://i.pravatar.cc/40?img=15"
},
{
id:2,
name:"Mary Zeen",
role:"UI/UX Designer",
avatar:"https://i.pravatar.cc/40?img=16"
},
{
id:3,
name:"Antony Lewis",
role:"Android Developer",
avatar:"https://i.pravatar.cc/40?img=17"
}
]
</script>