<template>
  <div class="p-6 bg-gray-100 min-h-screen">

    <div class="flex justify-between items-center mb-6">
      <div>
        <h1 class="text-2xl font-bold">Leave Management</h1>
        <p class="text-gray-500">Request, Approve & Manage Employee Leave</p>
      </div>

      <button class="bg-orange-500 text-white px-4 py-2 rounded-lg">
        + New Leave Request
      </button>
    </div>

    <LeaveStats />

 
    <div class="grid grid-cols-3 gap-6 mt-6">

      <LeaveRequestForm />

      <div class="col-span-2">
        <LeaveTable />
      </div>

    </div>

  </div>
</template>

<script setup>
import LeaveRequestForm from '../../components/LeaveRequestForm.vue'
import LeaveStats from '../../components/LeaveStats.vue'
import LeaveTable from '../../components/LeaveTable.vue'
</script>