<template>
  <div class="min-h-screen">

    <!-- HEADER (optional for all pages or control it too) -->
    <Header v-if="showHeader" />

    <div class="flex">

      <!-- SIDEBAR -->
      <DashboardLayout v-if="showSidebar" />

      <!-- MAIN CONTENT -->
      <div class="flex-1">
        <NuxtPage />
      </div>

    </div>

  </div>
</template>

<script setup>
import { useRoute } from "vue-router"
import { computed } from "vue"

import DashboardLayout from "../components/DashboardLayout.vue"
import Header from "../components/Header.vue"

const route = useRoute()

/* Pages WITHOUT sidebar */
const noSidebarPages = ["/", "/signup"]

const showSidebar = computed(() => {
  return !noSidebarPages.includes(route.path)
})

/* Optional: control header too */
const showHeader = computed(() => {
  return !noSidebarPages.includes(route.path)
})
</script>