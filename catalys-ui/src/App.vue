<script setup lang="ts">
import AppContainer from './components/AppContainer.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <AppContainer />
    </div>
  </header>
</template>

<style scoped>
body #app header {
  margin: 0;
  padding: 0;
}
header{
  height: 100vh;
  width: 120vh;
  display:flex;
  align-items:center;
  justify-content:center;
}
.wrapper{
  padding-left: 30px;
}
</style>
