<template>
  <div class="bg-gray-100 rounded-2xl shadow-xl flex w-[900px] overflow-hidden">
    <div class="w-1/2 relative">
      <img
        src="https://i.pinimg.com/736x/a5/07/78/a5077813dd34a5e7f73d9e74d1e86fea.jpg"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="w-1/2 p-10 text-black">
      <h1 class="text-3xl font-bold mb-2">Login</h1>

      <p class="text-gray-500 mb-6">
        Don't have an account?
        <NuxtLink to="/signup" class="text-orange-500 cursor-pointer">
          Sign up
        </NuxtLink>
      </p>
      <div class="mb-5">
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email ID"
          v-model="email"
          class="w-full px-4 py-3 rounded bg-white border border-gray-200 outline-none"
        />
      </div>
      <div class="mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          v-model="password"
          class="w-full px-4 py-3 rounded bg-white border border-gray-200 outline-none"
        />
      </div>
      <div class="flex justify-end mb-6 text-sm">
        <span class="text-gray-600 hover:text-orange-500 cursor-pointer">
          Forgot Password?
        </span>
      </div>
      <button
        class="w-full text-white bg-orange-500 hover:bg-orange-600 p-3 rounded font-semibold"
      >
        Login
      </button>
      <div class="flex items-center my-6">
        <div class="flex-1 h-px bg-gray-600"></div>
        <span class="px-3 text-gray-600 text-sm">Or login with</span>
        <div class="flex-1 h-px bg-gray-600"></div>
      </div>
      <div class="flex gap-4">
        <button
          class="w-1/2 border border-gray-200 bg-white p-2 rounded hover:bg-gray-200 flex items-center justify-center gap-2"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            class="w-5 h-5"
          />
          Google
        </button>

        <button
          class="w-1/2 border border-gray-200 bg-white p-2 rounded hover:bg-gray-200 flex items-center justify-center gap-2"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/0/747.png"
            class="w-5 h-5"
          />
          Apple
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleLogin = () => {
  console.log({
    email: email.value,
    password: password.value
  })
}
</script>