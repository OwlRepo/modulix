export default defineEventHandler(async () => {
  const users = await $fetch("https://jsonplaceholder.typicode.com/posts");
  return users;
});
