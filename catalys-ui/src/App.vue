<script lang="ts" setup>
import ContentPlayer from './components/ContentPlayer.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <ContentPlayer />
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
  width: 150vh;
  display:flex;
  align-items:center;
  justify-content:center;
}
.wrapper{
  padding-left: 30px;
}
</style>
