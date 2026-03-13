
<template>
  <div class="flex-center">
    <div class="flex-col center">
        <Header />
      <div class="flex">
        <DashboardLayout />
        <NuxtPage />
      </div>
    </div>
  </div>

</template>
<script setup>
import DashboardLayout from "../components/DashboardLayout.vue";
import Header from "../components/Header.vue"
</script>