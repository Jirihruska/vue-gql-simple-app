<template>
  <div class="pa-4 rounded-xl my-4 cursor-pointer" v-if="category.image">
    <div class="font-bold text-4xl text-cyan-600">{{ category.name }}</div>
    <img
      class="border-2 hover:border-cyan-700 border-cyan-400 rounded-xl hover:opacity-60"
      :src="category.image"
    />
  </div>
</template>
<script>
export default {
  name: "CategoryCard",
};
</script>
<script setup>
import { defineProps } from "vue";
defineProps({
  category: {
    type: Object,
  },
});
</script>
