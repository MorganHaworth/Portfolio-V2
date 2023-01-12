<script setup lang="ts">
  import ExperienceBlob from "../components/ExperienceBlob.vue";
  import experience from '../assets/json/industry.json';

  function getUrl(file: string) {
      return require('../assets/images/' + file)
  }

</script>

<template>
  <main>
    <ExperienceBlob v-for="item in experience.fullTime">
      <template #icon>
        <img :src="`../assets/images/${item.src}.png`" :alt="`${item.company} logo`">
      </template>
      <template #heading>{{item.company}}</template>

      Test
    </ExperienceBlob>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
