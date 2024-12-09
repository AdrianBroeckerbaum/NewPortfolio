<template>
  <MainLayout>
    <router-view />
    <!-- Vue Router will inject your pages here -->
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from 'src/layouts/MainLayout.vue';

defineOptions({
  name: 'App',
});
</script>
