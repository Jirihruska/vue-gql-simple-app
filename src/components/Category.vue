<template>
  <div
    class="font-bold text-md text-white cursor-pointer hover:text-black hover:contrast-200 py-1 px-4 rounded-xl hover:text-sky-400 select-none"
  >
    {{ category.name }}
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
