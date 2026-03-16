<template>
  <div class="bg-white rounded-xl shadow p-6">

    <div class="flex justify-between items-center mb-6">
      <h2 class="text-lg font-semibold">Invoices</h2>
      <button class="text-sm text-orange-500">View All</button>
    </div>

    <div class="space-y-4">

      <div
        v-for="invoice in invoices"
        :key="invoice.id"
        class="flex justify-between border-b pb-2"
      >
        <div>
          <p class="font-medium">{{ invoice.client }}</p>
          <p class="text-sm text-gray-500">{{ invoice.date }}</p>
        </div>

        <div class="text-right">
          <p class="font-semibold">${{ invoice.amount }}</p>

          <span
            class="text-xs px-2 py-1 rounded"
            :class="statusColor(invoice.status)"
          >
            {{ invoice.status }}
          </span>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>

const invoices = [
  { id: 1, client: "Google Inc", amount: 950, status: "Paid", date: "12 Mar" },
  { id: 2, client: "Facebook", amount: 1200, status: "Pending", date: "10 Mar" },
  { id: 3, client: "Amazon", amount: 700, status: "Overdue", date: "8 Mar" }
]

const statusColor = (status) => {
  if (status === "Paid") return "bg-green-100 text-green-600"
  if (status === "Pending") return "bg-yellow-100 text-yellow-600"
  return "bg-red-100 text-red-600"
}

</script>