<template>
  <div class="bg-gray-50/50 p-5 rounded-xl border border-gray-100 flex justify-between items-start">
    <div>
      <p class="text-sm text-gray-500 font-medium mb-2">{{ title }}</p>
      
      <div class="flex items-center gap-2">
        <span class="text-2xl font-bold text-slate-800">{{ total }}</span>
        
        <div 
          :class="[
            'text-white text-[10px] px-2 py-0.5 rounded-md flex items-center gap-1 font-bold',
            growthType === 'up' ? 'bg-green-500' : 'bg-red-600'
          ]"
        >
          <span>{{ growthType === 'up' ? '↑' : '↓' }}</span>
          {{ growth }}
        </div>

        <span class="text-[10px] text-gray-400 whitespace-nowrap">vs yesterday</span>
      </div>
    </div>

    <div :class="`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm ${bgColor}`">
      <slot name="icon" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Title'
  },
  total: {
    type: String,
    default: '0'
  },
  growth: {
    type: String,
    default: '0%'
  },
  growthType: {
    type: String,
    default: 'up' // Can be 'up' or 'down'
  },
  bgColor: {
    type: String,
    default: 'bg-orange-500'
  }
})
</script>