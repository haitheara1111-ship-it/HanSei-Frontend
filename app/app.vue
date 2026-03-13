
<template>
  <div class="flex-center">
      <div class="flex-col">
  <Header />
  <NuxtPage />
  </div>
  <DashboardLayout />

  </div>

</template>
<script setup>
import DashboardLayout from "../components/DashboardLayout.vue";
import Header from "../components/Header.vue"
</script>