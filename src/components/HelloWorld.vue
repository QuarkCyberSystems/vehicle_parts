<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="text-3xl font-bold underline text-blue-500">
    Hello Tailwind v4 + Vite + Vue!
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
