<template>
  <div class="bg-white rounded-xl shadow p-6">

    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-lg font-semibold">Todo</h2>
    </div>

    <!-- Add Task -->
    <div class="flex gap-2 mb-4">
      <input
        v-model="newTask"
        @keyup.enter="addTask"
        placeholder="Add new task..."
        class="flex-1 border rounded-md px-3 py-2 text-sm"
      />

      <button
        @click="addTask"
        class="bg-orange-500 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-600"
      >
        Add
      </button>
    </div>

    <!-- Task List -->
    <div class="space-y-3">

      <div
        v-for="task in tasks"
        :key="task.id"
        class="flex items-center justify-between border-b pb-2"
      >

        <div class="flex items-center gap-3 flex-1">

          <input
            type="checkbox"
            v-model="task.done"
            class="w-4 h-4"
          />

          <!-- Normal Text -->
          <span
            v-if="editingId !== task.id"
            :class="task.done ? 'line-through text-gray-400' : 'text-gray-700'"
          >
            {{ task.text }}
          </span>

          <!-- Edit Input -->
          <input
            v-else
            v-model="editText"
            class="border rounded px-2 py-1 text-sm w-full"
          />

        </div>

        <!-- Buttons -->
        <div class="flex gap-2 text-sm">

          <button
            v-if="editingId !== task.id"
            @click="startEdit(task)"
            class="text-blue-500 hover:underline"
          >
            Edit
          </button>

          <button
            v-if="editingId === task.id"
            @click="saveEdit(task)"
            class="text-green-600 hover:underline"
          >
            Save
          </button>

          <button
            v-if="editingId === task.id"
            @click="cancelEdit"
            class="text-gray-500 hover:underline"
          >
            Cancel
          </button>

          <button
            @click="removeTask(task.id)"
            class="text-red-500 hover:underline"
          >
            Delete
          </button>

        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from "vue"

const newTask = ref("")
const editingId = ref(null)
const editText = ref("")

const tasks = ref([
  { id: 1, text: "Review employee reports", done: false },
  { id: 2, text: "Schedule interviews", done: true },
  { id: 3, text: "Update HR policy document", done: false }
])

const addTask = () => {
  if (!newTask.value.trim()) return

  tasks.value.push({
    id: Date.now(),
    text: newTask.value,
    done: false
  })

  newTask.value = ""
}

const removeTask = (id) => {
  tasks.value = tasks.value.filter(task => task.id !== id)
}

const startEdit = (task) => {
  editingId.value = task.id
  editText.value = task.text
}

const saveEdit = (task) => {
  task.text = editText.value
  editingId.value = null
}

const cancelEdit = () => {
  editingId.value = null
}
</script>