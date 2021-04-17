<template>
  <div class="App">
    <Title />
    <UploadForm />
    <ImageGrid />
  </div>
</template>

<script>
import ImageGrid from './components/ImageGrid.vue'
import Title from './components/Title.vue'
import UploadForm from './components/UploadForm.vue'

export default {
  name: 'App',
  components: {
    ImageGrid,
    Title,
    UploadForm
  }
}
</script>,
    UploadForm