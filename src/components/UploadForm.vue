<template>
  <form>
    <label>
      <input type="file" @change="handleChange">
      <span>Upload Image</span>
    </label>
  </form>
</template>

<script>
export default {

}
</script>

<style>
  form{
    margin: 30px auto 10px;
    text-align: center;
  }
  label input{
    height: 0;
    width: 0;
    opacity: 0;
  }
  label{
    display: block;
    width: 150px;
    height: 30px;
    border: 1px solid var(--primary);
    border-radius: 6px;
    margin: 10px auto;
    line-height: 30px;
    color: var(--primary);
    font-weight: bold;
    cursor: pointer;
  }
  label:hover{
    background: var(--primary);
    color: white;
  }
</style>