<template>
<Card title="Employees" action="View All">

<div class="space-y-3">

<div
v-for="emp in employees"
:key="emp.name"
class="flex justify-between items-center p-2 rounded hover:bg-gray-50"
>

<div class="flex items-center gap-3">

<img
src="https://i.pravatar.cc/40"
class="w-8 h-8 rounded-full"
/>

<div>

<div class="text-sm font-medium">
{{ emp.name }}
</div>

<div class="text-xs text-gray-400">
{{ emp.role }}
</div>

</div>

</div>

</div>

</div>

</Card>
</template>

<script setup>
import Card from "@/components/Card.vue"

defineProps({
employees:Array
})
</script>