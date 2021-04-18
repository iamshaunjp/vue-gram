<template>
  <div class="progress-bar">uploading</div>
</template>

<script>
import { watchEffect } from 'vue'
import useStorage from '../composables/useStorage'

export default {
  props: ['file'],
  setup(props, context) {
    const { progress } = useStorage(props.file) 

    watchEffect(() => {
      if (progress.value >= 100) {
        context.emit('complete')
      }
    })
  }
}
</script>

<style>

</style>