<template>
  <div class="flex flex-row h-screen bg-slate-900">
    <PageHeader />
  </div>
</template>

<script>
import PageHeader from "./views/PageHeader.vue";
import "./style.css";
export default {
  components: { PageHeader },
};
</script>
