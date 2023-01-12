<script setup lang="ts">
import { RouterView } from "vue-router";
import Blurb from "./components/Blurb.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />
      <Blurb msg="Morgan Haworth" />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.wrapper {
  border: 2px solid green;
  display: block;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  border: 2px solid orange;
  display: block;
  margin: 2rem auto 2rem;
}

@media (min-width: 1024px) {
  header {
    width: 40%;
    max-width: 800px;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 auto;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
