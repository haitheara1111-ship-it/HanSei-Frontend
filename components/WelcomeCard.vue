<template>
<div>

<!-- HEADER CARD -->
<div class="bg-white rounded-xl shadow-sm border p-6 flex items-center justify-between">

<div class="flex items-center gap-4">

<img
src="https://i.pravatar.cc/80"
class="w-14 h-14 rounded-full object-cover"
/>

<div>

<h2 class="text-xl font-semibold text-gray-800 flex items-center gap-2">
Welcome Back, {{ user.name }}

<!-- edit svg -->
<svg xmlns="http://www.w3.org/2000/svg"
class="w-4 h-4 text-gray-400"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor">

<path stroke-linecap="round"
stroke-linejoin="round"
stroke-width="2"
d="M11 5h2M12 20h9M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4 12.5-12.5z"/>
</svg>

</h2>

<p class="text-gray-500 text-sm mt-1">
You have
<span class="text-orange-500 font-semibold">{{ pendingApprovals }}</span>
Pending Approvals &
<span class="text-orange-500 font-semibold">{{ leaveRequests }}</span>
Leave Requests
</p>

</div>
</div>

<div class="flex gap-3">

<!-- schedule button -->
<button
@click="showScheduleForm=true"
class="border px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 text-sm flex items-center gap-2">

<svg xmlns="http://www.w3.org/2000/svg"
class="w-4 h-4"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor">

<path stroke-linecap="round"
stroke-linejoin="round"
stroke-width="2"
d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
</svg>

Add Schedule
</button>

<!-- request button -->
<button
@click="showRequestForm=true"
class="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 text-sm flex items-center gap-2">

<svg xmlns="http://www.w3.org/2000/svg"
class="w-4 h-4"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor">

<path stroke-linecap="round"
stroke-linejoin="round"
stroke-width="2"
d="M12 4v16m8-8H4"/>
</svg>

Add Request
</button>

</div>
</div>

<!-- SCHEDULE FORM -->
<div v-if="showScheduleForm" class="bg-white p-6 mt-6 rounded-xl border shadow">

<h3 class="font-semibold text-lg mb-4">Create Schedule</h3>

<div class="grid grid-cols-2 gap-4">

<input v-model="scheduleForm.title" placeholder="Schedule Title" class="border p-2 rounded">

<input v-model="scheduleForm.employee" placeholder="Employee Name" class="border p-2 rounded">

<input v-model="scheduleForm.department" placeholder="Department" class="border p-2 rounded">

<input type="date" v-model="scheduleForm.date" class="border p-2 rounded">

<input type="time" v-model="scheduleForm.startTime" class="border p-2 rounded">

<input type="time" v-model="scheduleForm.endTime" class="border p-2 rounded">

<input v-model="scheduleForm.location" placeholder="Location" class="border p-2 rounded">

<select v-model="scheduleForm.status" class="border p-2 rounded">
<option>Scheduled</option>
<option>Completed</option>
<option>Cancelled</option>
</select>

</div>

<div class="flex gap-3 mt-4">

<button
@click="createSchedule"
class="bg-green-500 text-white px-4 py-2 rounded">
Save
</button>

<button
@click="showScheduleForm=false"
class="border px-4 py-2 rounded">
Cancel
</button>

</div>

</div>

<!-- REQUEST FORM -->
<div v-if="showRequestForm" class="bg-white p-6 mt-6 rounded-xl border shadow">

<h3 class="font-semibold text-lg mb-4">Create Request</h3>

<div class="grid grid-cols-2 gap-4">

<input v-model="requestForm.employee" placeholder="Employee Name" class="border p-2 rounded">

<select v-model="requestForm.type" class="border p-2 rounded">
<option>Leave Request</option>
<option>Equipment Request</option>
<option>Schedule Change</option>
</select>

<textarea
v-model="requestForm.reason"
placeholder="Reason"
class="border p-2 rounded col-span-2">
</textarea>

<input type="date" v-model="requestForm.startDate" class="border p-2 rounded">

<input type="date" v-model="requestForm.endDate" class="border p-2 rounded">

</div>

<div class="flex gap-3 mt-4">

<button
@click="createRequest"
class="bg-green-500 text-white px-4 py-2 rounded">
Submit
</button>

<button
@click="showRequestForm=false"
class="border px-4 py-2 rounded">
Cancel
</button>

</div>

</div>

</div>
</template>

<script setup>
import { ref, computed } from "vue"

const user = ref({ name:"Adrian" })

const schedules = ref([])
const requests = ref([])

const showScheduleForm = ref(false)
const showRequestForm = ref(false)

const scheduleForm = ref({
title:"",
employee:"",
department:"",
date:"",
startTime:"",
endTime:"",
location:"",
status:"Scheduled"
})

const requestForm = ref({
employee:"",
type:"Leave Request",
reason:"",
startDate:"",
endDate:"",
status:"Pending"
})

const pendingApprovals = computed(()=>{
return requests.value.filter(r=>r.status==="Pending").length
})

const leaveRequests = computed(()=>{
return requests.value.filter(r=>r.type==="Leave Request").length
})

const createSchedule = ()=>{
schedules.value.push({
id:Date.now(),
...scheduleForm.value
})

showScheduleForm.value=false
}

const createRequest = ()=>{
requests.value.push({
id:Date.now(),
...requestForm.value
})

showRequestForm.value=false
}
</script>