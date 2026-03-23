// composables/useAuth.js
import { ref } from "vue"
import { useRouter } from "vue-router"

const user = ref(null)

export function useAuth() {
  const router = useRouter()

  const login = (email, password) => {
    if (email === "admin@test.com" && password === "123") {
      user.value = { name: "Admin" }
      localStorage.setItem("auth", "true")
      router.push("/dashboard")
    } else {
      throw new Error("Invalid login")
    }
  }

  const logout = () => {
    user.value = null
    localStorage.removeItem("auth")
    router.push("/login")
  }

  const isAuthenticated = () => {
    return localStorage.getItem("auth") === "true"
  }

  return { user, login, logout, isAuthenticated }
}