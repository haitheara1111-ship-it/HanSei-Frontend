<template>
  <div
    class="relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
  >
    <!-- Background decoration -->
    <div
      class="absolute -top-6 -right-6 w-24 h-24 opacity-10 rounded-full blur-2xl"
      :class="color"
    ></div>

    <div class="flex items-center justify-between mb-4">
      <!-- Icon with colorful background -->
      <div
        class="w-12 h-12 flex items-center justify-center rounded-xl text-white shadow-md"
        :class="color"
      >
        <!-- Example SVG icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <!-- Or use slot if you want dynamic icons -->
        <!-- <slot name="icon"></slot> -->
      </div>

      <!-- Trend badge -->
      <span
        v-if="trend"
        class="text-xs font-semibold px-2 py-1 rounded-full"
        :class="trendColor"
      >
        {{ trend }}
      </span>
    </div>

    <!-- Title -->
    <p class="text-sm text-gray-500 font-medium">
      {{ title }}
    </p>

    <!-- Value -->
    <h2 class="text-3xl font-bold text-gray-800 mt-1">
      {{ value }}
    </h2>

    <!-- Link -->
    <div
      class="flex items-center gap-1 text-sm text-gray-400 mt-3 hover:text-orange-500 cursor-pointer transition"
    >
      {{ link }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number],
  link: String,
  color: String,       // Tailwind background color class e.g., 'bg-orange-500'
  trend: String,
  trendColor: String   // Tailwind text/bg class e.g., 'bg-green-100 text-green-800'
})
</script>