<template>
  <div class="backdrop" @click="handleClick">
    <img :src="imgUrl" />
  </div>
</template>

<script>
export default {
  props: ['imgUrl'],
  setup(props, context) {
    const handleClick = () => {
      context.emit('close', null)
    }

    return { handleClick }
  }
}
</script>

<style>
  .backdrop{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
  .backdrop img{
    display: block;
    max-width: 60%;
    max-height: 80%;
    margin: 60px auto;
    box-shadow: 3px 5px 7px rgba(0,0,0,0.5);
    position: relative;
  }
</style>