<template>
  <div
    class="flex text-black flex-col items-center justify-center min-h-screen p-8 space-y-8 bg-white"
  >
    <!-- Auth Store Demo -->
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <p class="text-lg">Welcome, {{ auth.userName }}!</p>
      <div class="space-y-4">
        <div v-if="!auth.isAuthenticated" class="space-y-2">
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="w-full px-3 py-2 border rounded"
          >
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="w-full px-3 py-2 border rounded"
          >
          <button
            class="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
            :disabled="auth.loading"
            @click="handleLogin"
          >
            {{ auth.loading ? "Logging in..." : "Login" }}
          </button>
        </div>

        <div v-else>
          <p class="text-sm">Email: {{ auth.userEmail }}</p>
          <button
            class="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
            :disabled="auth.loading"
            @click="handleLogout"
          >
            {{ auth.loading ? "Logging out..." : "Logout" }}
          </button>
        </div>
      </div>
    </div>

    <div v-if="data">
      <div v-for="post in data" :key="post.id">
        <h3>{{ post.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import stores
import { useAuthStore } from "~/stores";

const auth = useAuthStore();

const { data } = await useFetch("/api/user/auth");

// Reactive data for login form
const email = ref("");
const password = ref("");

// Actions
async function handleLogin() {
  const result = await auth.login(email.value, password.value);
  if (result.success) {
    email.value = "";
    password.value = "";
  }
}

async function handleLogout() {
  await auth.logout();
}

useHead({
  title: "Pinia Store Demo",
  meta: [{ name: "description", content: "Pinia store demonstration page" }],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
  ],
});
</script>
