<template>
  <div
    class="flex flex-wrap justify-center text-center"
    v-if="data && data.categories"
  >
    <div
      class="flex justify-center"
      v-for="category in data.categories.items"
      :key="category.id"
    >
      <Category v-if="!!category.image" :category="category" />
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { categoriesQuery } from "./services/queries";
import { api } from "./services/api";
import "./style.css";

const data = ref();
onBeforeMount(async () => {
  data.value = await api(categoriesQuery);
});
</script>

<script>
import Category from "./components/Category.vue";
export default {
  components: { Category },
};
</script>
