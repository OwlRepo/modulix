# Pinia Store Setup for Nuxt 4

This document explains the Pinia store setup in this Nuxt 4 project.

## Installation

Pinia has been installed and configured with:

```bash
bun add @pinia/nuxt pinia
```

## Configuration

The `@pinia/nuxt` module has been added to `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: [
    // ... other modules
    '@pinia/nuxt'
  ]
})
```

## Store Structure

Stores are located in the `app/stores/` directory following Nuxt 4's directory structure:

```
app/stores/
├── index.ts        # Export all stores
├── counter.ts      # Example counter store
└── auth.ts         # Example authentication store
```

## Store Examples

### Counter Store (`app/stores/counter.ts`)

A simple counter store demonstrating:
- State management with `ref()`
- Computed properties with `computed()`
- Actions for state mutations
- TypeScript support

```typescript
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  
  function increment() {
    count.value++
  }
  
  return { count, doubleCount, increment }
})
```

### Auth Store (`app/stores/auth.ts`)

An authentication store demonstrating:
- Complex state with interfaces
- Async actions
- Loading states
- Readonly state exposure

```typescript
export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isAuthenticated = ref(false)
  
  async function login(email: string, password: string) {
    // Login logic
  }
  
  return {
    user: readonly(user),
    isAuthenticated: readonly(isAuthenticated),
    login
  }
})
```

## Usage in Components

Import and use stores in your Vue components:

```vue
<script setup lang="ts">
import { useCounterStore, useAuthStore } from '~/stores'

const counter = useCounterStore()
const auth = useAuthStore()

// Use store state and actions
counter.increment()
await auth.login('user@example.com', 'password')
</script>

<template>
  <div>
    <p>Count: {{ counter.count }}</p>
    <p>User: {{ auth.userName }}</p>
  </div>
</template>
```

## Store Features

### Composition API Style
All stores use the Composition API style with `defineStore()` and return objects containing state, getters, and actions.

### TypeScript Support
Full TypeScript support with proper type inference and interface definitions.

### Auto-imports
Pinia composables are auto-imported in Nuxt, so you don't need to import `defineStore`, `ref`, `computed`, etc.

### SSR Support
Stores work seamlessly with Nuxt's SSR capabilities.

## Demo

The home page (`app/pages/index.vue`) demonstrates both stores with interactive examples:
- Counter with increment/decrement buttons
- Auth system with login/logout functionality

## Best Practices

1. **Use Composition API**: Leverage Vue 3's Composition API for better TypeScript support
2. **Readonly State**: Expose state as readonly when needed to prevent direct mutations
3. **Async Actions**: Handle loading states properly in async actions
4. **Type Interfaces**: Define proper TypeScript interfaces for complex state
5. **Store Organization**: Keep related functionality in the same store
6. **Export Pattern**: Use the index.ts file to centralize store exports

## Next Steps

- Add persistence with `@pinia/plugin-persistedstate` if needed
- Implement more complex stores for your application needs
- Add unit tests for your stores
- Consider store composition for complex applications
