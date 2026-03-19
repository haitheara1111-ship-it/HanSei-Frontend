<template>
  <div class="flex min-h-screen bg-gray-100">

    <!-- Sidebar -->
    <div class="flex-1 p-10">
      <div class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-2xl font-bold text-orange-500">
            Leave Management
          </h1>
          <p class="text-gray-500">
            Request, Approve & Manage Employee Leave
          </p>
        </div>
      </div>

      <!-- Stats -->
      <LeaveStats />

      <!-- Content -->
      <div class="grid grid-cols-3 gap-6 mt-6">
        <LeaveRequestForm />

        <div class="col-span-2">
          <LeaveTable />
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import Sidebar from '../../components/Sidebar.vue'
import LeaveRequestForm from '../../components/LeaveRequestForm.vue'
import LeaveStats from '../../components/LeaveStats.vue'
import LeaveTable from '../../components/LeaveTable.vue'
</script>