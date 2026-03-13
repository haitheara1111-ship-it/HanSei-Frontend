<template>
<div class="flex min-h-screen bg-gray-100 w-[100%]">


<div class="w-[100%] p-6 gap-6">

<CreateShift @addShift="createShift"/>

<ShiftTable :shifts="shifts"/>

</div>

</div>
</template>

<script setup>

import { ref } from "vue"
import ShiftTable from "../../components/ShiftTable.vue"
import CreateShift from "../../components/CreateShift.vue"

const shifts = ref([])

const createShift = (shift) => {

shifts.value.push({
id: Date.now(),
...shift
})

}

</script>