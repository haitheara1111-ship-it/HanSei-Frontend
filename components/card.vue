<template>
  <div class="bg-white rounded-xl shadow p-5">
    <div class="flex justify-between items-center mb-4">
      <h3 class="font-semibold text-gray-700">{{ title }}</h3>

      <button
        v-if="action"
        class="text-sm text-blue-500 hover:underline"
      >
        {{ action }}
      </button>
    </div>

    <slot/>
  </div>
</template>

<script setup>
defineProps({
  title:String,
  action:String
})
</script>