<template>
  <div class="bg-gray-100 rounded-2xl shadow-xl flex w-[900px] overflow-hidden">

    <!-- LEFT IMAGE -->
    <div class="w-1/2">
      <img
        src="https://i.pinimg.com/736x/a5/07/78/a5077813dd34a5e7f73d9e74d1e86fea.jpg"
        class="h-full w-full object-cover"
      />
    </div>

    <!-- RIGHT FORM -->
    <div class="w-1/2 p-10 text-black">

      <h1 class="text-3xl font-bold mb-2">Login</h1>

      <p class="text-gray-500 mb-6">
        Don't have an account?
        <NuxtLink to="/signup" class="text-orange-500">
          Sign up
        </NuxtLink>
      </p>

      <!-- EMAIL -->
      <div class="mb-5">
        <label>Email</label>
        <input
          type="email"
          v-model="email"
          placeholder="Email"
          class="w-full px-4 py-3 rounded border"
        />
      </div>

      <!-- PASSWORD -->
      <div class="mb-3">
        <label>Password</label>
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          class="w-full px-4 py-3 rounded border"
        />
      </div>

      <!-- ERROR -->
      <p v-if="error" class="text-red-500 text-sm mb-3">
        {{ error }}
      </p>

      <!-- LOGIN BUTTON -->
      <button
        @click="login"
        class="w-full text-white bg-orange-500 hover:bg-orange-600 p-3 rounded font-semibold"
      >
        Login
      </button>

    </div>

  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const email = ref("")
const password = ref("")
const error = ref("")

const login = () => {

  // ADMIN
  if (email.value === "dariyatum412@gmail.com" && password.value === "123") {

    localStorage.setItem("auth", "true")
    localStorage.setItem("role", "admin")

    router.push("/dashboard")

  }

  // EMPLOYEE
  else if (email.value === "samisokbuntha@gmail.com" && password.value === "123") {

    localStorage.setItem("auth", "true")
    localStorage.setItem("role", "employee")

    router.push("/employee-dashboard")

  }

  // ERROR
  else {
    error.value = "Invalid email or password"
  }
}
</script>