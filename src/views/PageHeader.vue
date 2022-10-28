<template>
  <div
    class="flex flex-col bg-slate-800 text-white font-bold p-8 align-center"
    v-if="data && data.categories"
  >
    <div class="" v-for="category in data.categories.items" :key="category.id">
      <Category v-if="category" :category="category" />
    </div>
  </div>
</template>
<script setup>
import { onBeforeMount, ref } from "vue";
import { categoriesQuery } from "../services/queries";
import { api } from "../services/api";

const data = ref();
onBeforeMount(async () => {
  data.value = await api(categoriesQuery);
  console.log(data);
});
</script>
<script>
import Category from "../components/Category.vue";
export default { name: "PageHeader", components: { Category } };
</script>
