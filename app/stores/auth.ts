interface User {
  id: number
  name: string
  email: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
}

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref<User | null>(null)
  const isAuthenticated = ref(false)
  const loading = ref(false)

  // Getters
  const userName = computed(() => user.value?.name || 'Guest')
  const userEmail = computed(() => user.value?.email || '')

  // Actions
  async function login(email: string, password: string) {
    loading.value = true
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock user data
      user.value = {
        id: 1,
        name: 'John Doe',
        email: email
      }
      isAuthenticated.value = true
      
      return { success: true }
    } catch (error) {
      return { success: false, error: 'Login failed' }
    } finally {
      loading.value = false
    }
  }

  async function logout() {
    loading.value = true
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      
      user.value = null
      isAuthenticated.value = false
      
      return { success: true }
    } catch (error) {
      return { success: false, error: 'Logout failed' }
    } finally {
      loading.value = false
    }
  }

  function setUser(userData: User) {
    user.value = userData
    isAuthenticated.value = true
  }

  return {
    // State
    user: readonly(user),
    isAuthenticated: readonly(isAuthenticated),
    loading: readonly(loading),
    // Getters
    userName,
    userEmail,
    // Actions
    login,
    logout,
    setUser
  }
})
