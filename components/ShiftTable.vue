<template>
<div class="bg-white rounded-xl shadow p-6">

<h2 class="text-lg font-semibold mb-4">
Shift Schedule
</h2>

<table class="w-full text-left">

<thead class="border-b text-sm text-gray-500">
<tr>
<th class="py-2">Employee</th>
<th>Date</th>
<th>Shift</th>
<th>Status</th>
</tr>
</thead>

<tbody>

<tr
v-for="shift in shifts"
:key="shift.id"
class="border-b"
>
<td class="py-2 font-medium">
{{ shift.employee }}
</td>

<td>{{ shift.date }}</td>

<td>{{ shift.shift }}</td>

<td>
<span class="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
Assigned
</span>
</td>

</tr>

</tbody>

</table>

</div>
</template>

<script setup>
defineProps(["shifts"])
</script>