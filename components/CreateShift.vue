<template>
<div class="bg-white p-6 rounded-xl shadow mb-6">

<h2 class="text-lg font-semibold mb-4">
Assign Employee Shift
</h2>

<div class="grid grid-cols-4 gap-4">

<!-- Employee -->
<select v-model="form.employee" class="border p-2 rounded">
<option disabled value="">Select Employee</option>
<option
v-for="emp in employees"
:key="emp.id"
:value="emp.name"
>
{{ emp.name }}
</option>
</select>

<!-- Shift -->
<select v-model="form.shift" class="border p-2 rounded">
<option>Morning</option>
<option>Evening</option>
<option>Night</option>
</select>

<!-- Date -->
<input
type="date"
v-model="form.date"
class="border p-2 rounded"
/>

<!-- Add -->
<button
@click="addShift"
class="bg-orange-500 text-white px-4 py-2 rounded"
>
Assign
</button>

</div>

</div>
</template>

<script setup>
import { ref } from "vue"

const employees = [
{ id: 1, name: "John Doe" },
{ id: 2, name: "Anna Smith" },
{ id: 3, name: "Michael Lee" }
]

const form = ref({
employee: "",
shift: "Morning",
date: ""
})

const emit = defineEmits(["addShift"])

const addShift = () => {

if (!form.value.employee || !form.value.date) return

emit("addShift", { ...form.value })

form.value.employee = ""
form.value.date = ""

}
</script>