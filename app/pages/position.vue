<template>
<div class="p-8 bg-gray-50 w-full">

<h1 class="text-2xl font-semibold mb-6">Position</h1>

<!-- Top Controls -->
<div class="flex justify-between items-center bg-white p-4 rounded-lg shadow mb-4">

<div class="flex items-center gap-2 text-sm">
<span>Row Per Page</span>

<select v-model="perPage" class="border rounded px-2 py-1">
<option :value="5">5</option>
<option :value="10">10</option>
<option :value="20">20</option>
</select>

<span>Entries</span>
</div>

<input
v-model="search"
placeholder="Search job..."
class="border rounded px-3 py-1"
/>

</div>

<!-- Table -->
<div class="bg-white rounded-lg shadow overflow-hidden">

<table class="w-full text-sm">

<thead class="bg-gray-100 text-gray-600">
<tr>

<th class="p-3">
<input type="checkbox" @change="toggleAll">
</th>

<th class="p-3 text-left">Job ID</th>
<th class="p-3 text-left">Job Title</th>
<th class="p-3 text-left">Category</th>
<th class="p-3 text-left">Location</th>
<th class="p-3 text-left">Salary Range</th>
<th class="p-3 text-left">Posted Date</th>
<th class="p-3 text-center">Action</th>

</tr>
</thead>

<tbody>

<tr
v-for="job in paginatedJobs"
:key="job.id"
class="border-t hover:bg-gray-50"
>

<td class="p-3">
<input type="checkbox" v-model="selected" :value="job.id">
</td>

<td class="p-3">{{ job.jobId }}</td>

<td class="p-3">

<div v-if="editId !== job.id">
<p class="font-medium">{{ job.title }}</p>
<p class="text-xs text-gray-400">{{ job.applicants }} Applicants</p>
</div>

<input
v-else
v-model="editJob.title"
class="border rounded px-2 py-1 w-full"
/>

</td>

<td class="p-3">
<span v-if="editId !== job.id">{{ job.category }}</span>

<input
v-else
v-model="editJob.category"
class="border rounded px-2 py-1 w-full"
/>
</td>

<td class="p-3">
<span v-if="editId !== job.id">{{ job.location }}</span>

<input
v-else
v-model="editJob.location"
class="border rounded px-2 py-1 w-full"
/>
</td>

<td class="p-3">
<span v-if="editId !== job.id">{{ job.salary }}</span>

<input
v-else
v-model="editJob.salary"
class="border rounded px-2 py-1 w-full"
/>
</td>

<td class="p-3">{{ job.posted }}</td>

<td class="p-3 flex justify-center gap-3">

<!-- Edit -->
<button
v-if="editId !== job.id"
@click="startEdit(job)"
class="text-blue-500 hover:text-blue-700"
>
<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
d="M11 5h2M12 20h9M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4 12.5-12.5z"/>
</svg>
</button>

<!-- Save -->
<button
v-if="editId === job.id"
@click="saveEdit(job)"
class="text-green-600 hover:text-green-800"
>
<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
d="M5 13l4 4L19 7"/>
</svg>
</button>

<!-- Delete -->
<button
@click="deleteJob(job.id)"
class="text-red-500 hover:text-red-700"
>
<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3m-9 0h12"/>
</svg>
</button>

</td>

</tr>

</tbody>

</table>

</div>

<!-- Pagination -->
<div class="flex justify-end items-center gap-3 mt-4">

<button
@click="prevPage"
:disabled="page === 1"
class="px-3 py-1 border rounded disabled:opacity-40"
>
Prev
</button>

<span class="text-sm">
Page {{ page }} of {{ totalPages }}
</span>

<button
@click="nextPage"
:disabled="page === totalPages"
class="px-3 py-1 border rounded disabled:opacity-40"
>
Next
</button>

</div>

</div>
</template>

<script setup>
import { ref, computed, watch } from "vue"

const search = ref("")
const page = ref(1)
const perPage = ref(5)

const selected = ref([])
const editId = ref(null)
const editJob = ref({})

const jobs = ref([
{
id:1,
jobId:"Job-001",
title:"Senior IOS Developer",
category:"Software",
location:"New York, USA",
salary:"30,000 - 35,000",
posted:"12 Sep 2024",
applicants:25
},
{
id:2,
jobId:"Job-002",
title:"Junior PHP Developer",
category:"Software",
location:"Los Angeles",
salary:"20,000 - 25,000",
posted:"24 Oct 2024",
applicants:20
},
{
id:3,
jobId:"Job-003",
title:"Junior React Developer",
category:"Software",
location:"Bristol, UK",
salary:"30,000 - 35,000",
posted:"18 Feb 2024",
applicants:35
}
])

const filteredJobs = computed(() => {
return jobs.value.filter(job =>
job.title.toLowerCase().includes(search.value.toLowerCase())
)
})

const totalPages = computed(() => {
return Math.max(1, Math.ceil(filteredJobs.value.length / perPage.value))
})

const paginatedJobs = computed(() => {

const start = (page.value - 1) * perPage.value
return filteredJobs.value.slice(start, start + perPage.value)

})

watch(search, () => {
page.value = 1
})

const toggleAll = (e) => {

if (e.target.checked) {
selected.value = jobs.value.map(j => j.id)
} else {
selected.value = []
}

}

const deleteJob = (id) => {

jobs.value = jobs.value.filter(j => j.id !== id)

}

const startEdit = (job) => {

editId.value = job.id
editJob.value = { ...job }

}

const saveEdit = (job) => {

Object.assign(job, editJob.value)
editId.value = null

}

const prevPage = () => {
if (page.value > 1) page.value--
}

const nextPage = () => {
if (page.value < totalPages.value) page.value++
}
</script>