<template>
  <div class="backdrop" @click="handleClick">
    <transition name="image" appear>
      <img :src="imgUrl" />
    </transition>
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

  /* modal transitions */
  .image-enter-from {
    bottom: -200%;
  }
  .image-enter-to {
    bottom: 0;
  }
  .image-enter-active{
    transition: all ease-in-out 0.5s;
  }
</style>