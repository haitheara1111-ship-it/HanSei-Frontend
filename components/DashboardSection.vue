<template>
  <section class="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

    <DashboardCard2
      v-for="card in cards"
      :key="card.title"
      :title="card.title"
      :action="card.action"
    >
      <component :is="card.component" v-bind="card.props" />
    </DashboardCard2>

  </section>
</template>

<script setup>

defineProps({
  cards: Array
})

</script>