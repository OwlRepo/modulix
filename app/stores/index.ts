// Export all stores for easy importing
export { useCounterStore } from './counter'
export { useAuthStore } from './auth'

// You can also create a composable that provides all stores
export const useStores = () => {
  return {
    counter: useCounterStore(),
    auth: useAuthStore()
  }
}
