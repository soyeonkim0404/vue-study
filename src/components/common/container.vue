<template>
  <div class="wrap">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'container',
};
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
