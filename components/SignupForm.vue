<template>
  <div class="bg-gray-100 rounded-2xl shadow-xl flex w-[900px] overflow-hidden">
    <div class="w-1/2 relative">
      <img
        src="https://i.pinimg.com/736x/a5/07/78/a5077813dd34a5e7f73d9e74d1e86fea.jpg"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="w-1/2 p-10 text-black">
      <h1 class="text-3xl font-bold mb-2">Create an account</h1>

      <p class="text-gray-500 mb-6">
        Already have an account?
        <NuxtLink to="/"class="text-orange-500 cursor-pointer">Log in </NuxtLink>
      </p>

      <div class="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="First name"
          v-model="firstName"
          class="w-1/2 p-3 rounded bg-white outline-none border border-gray-200"
        />
        <input
          type="text"
          placeholder="Last name"
          v-model="lastName"
          class="w-1/2 p-3 rounded bg-white outline-none border border-gray-200"
        />
      </div>

      <div class="mb-5">
        <label for="email" class="text-black">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email ID"
          v-model="email"
          class="w-full px-4 py-3 rounded bg-white border border-gray-200 placeholder-gray-700 outline-none"
        />
      </div>

      <div class="mb-5">
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          v-model="password"
          class="w-full px-4 py-3 rounded bg-white border border-gray-200 placeholder-gray-700 outline-none"
        />
      </div>

      <div class="flex items-center gap-2 mb-6 text-sm">
        <input type="checkbox" v-model="forgotPassword" />
        <span class="hover:text-orange-500 text-gray-700 cursor-pointer">Forgot Password?</span>
      </div>

      <NuxtLink to="/dashboard"
        @click="handleSubmit"
        class="w-full text-white bg-orange-500 hover:bg-orange-600 p-3 rounded font-semibold"
      >
        Create account
      </NuxtLink>

      <div class="flex items-center my-6">
        <div class="flex-1 h-px bg-gray-600"></div>
        <span class="px-3 text-gray-600 text-sm">Or register with</span>
        <div class="flex-1 h-px bg-gray-600"></div>
      </div>

      <div class="flex gap-4">
          <button
            class="w-1/2 border border-gray-200 bg-white p-2 rounded  hover:bg-gray-200  flex items-center justify-center gap-2"
          >
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" 
              class="w-5 h-5"
            />
            Google
          </button>
          <button
            class="w-1/2 border border-gray-200 bg-white p-2 rounded hover:bg-gray-200  flex items-center justify-center gap-2"
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
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const forgotPassword = ref(false);

</script>