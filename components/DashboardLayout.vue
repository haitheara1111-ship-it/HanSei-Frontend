<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Right side: Header + Content -->
    <div class="flex-1 flex flex-col">


      <!-- Main content area -->
      <main class="p-6 overflow-y-auto bg-gray-100 flex-1">
        <slot /> <!-- Your page content will go here -->
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./Sidebar.vue";

</script>