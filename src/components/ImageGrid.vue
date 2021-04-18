<template>
  image grid goes here
</template>

<script>
import useCollection from '../composables/useCollection'

export default {
  setup() {
    const { documents } = useCollection('images')

    return { documents }
  }
}
</script>

<style>

</style>