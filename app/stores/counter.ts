export const useCounterStore = defineStore('counter', () => {
  // State
  const count = ref(0)
  const name = ref('Counter Store')

  // Getters
  const doubleCount = computed(() => count.value * 2)
  const isEven = computed(() => count.value % 2 === 0)

  // Actions
  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  function reset() {
    count.value = 0
  }

  function setCount(value: number) {
    count.value = value
  }

  return {
    // State
    count,
    name,
    // Getters
    doubleCount,
    isEven,
    // Actions
    increment,
    decrement,
    reset,
    setCount
  }
})
