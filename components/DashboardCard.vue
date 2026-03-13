<template>
  <div class="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition">

    <div class="flex items-center gap-4 mb-3">

      <!-- Icon -->
      <div :class="['w-11 h-11 flex items-center justify-center rounded-full', color]">
        <slot name="icon"></slot>
      </div>

      <!-- Title -->
      <h3 class="text-sm text-gray-500 font-medium">
        {{ title }}
      </h3>

    </div>

    <!-- Value -->
    <p class="text-2xl font-bold text-gray-800">
      {{ value }}
    </p>

    <!-- Link -->
    <p class="text-sm text-gray-400 mt-2 hover:text-orange-500 cursor-pointer">
      {{ link }}
    </p>

  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: String,
  link: String,
  color: String
})
</script>