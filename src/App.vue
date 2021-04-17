<template>
  <div class="App">
    <Title />
    <ImageGrid />
  </div>
</template>

<script>
import ImageGrid from './components/ImageGrid.vue'
import Title from './components/Title.vue'

export default {
  name: 'App',
  components: {
    ImageGrid,
    Title
  }
}
</script>