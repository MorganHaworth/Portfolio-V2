<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/experience">Experience</RouterLink>
        <RouterLink to="/instructor">Instructor</RouterLink>
      </nav>
    <h3>
      I am a software engineer with AWS cloud and frontend experience. 
      I've gained experience as an AWS engineer through recent roles and 
      have frontend experience through teaching, industry, and personal projects. 
      I have received a Bachelor of Science in Computer Science and 
      Cybersecurity minor from the University of Nebraska at Omaha.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  border: 2px solid skyblue;
}

h3 {
  border: 2px solid red;
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-top: 2rem;
  border: 2px solid gold;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


@media (min-width: 1024px) {
  .greetings h1 {
    text-align: center;
  }
  .greetings h3 {
    text-align: left;
  }

  nav {
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
