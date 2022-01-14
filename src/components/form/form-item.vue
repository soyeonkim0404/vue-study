<template>
  <div class="item">
    <div class="key">
      <slot name="label"></slot>
    </div>
    <div class="value">
      <slot name="val"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'form-item',
};
</script>

<style scoped lang="scss">
.item {
  display: flex;
  .key {
    flex: 0 0 130px;
    padding-top: 10px;
    font-size: 16px;
    color: #fff;
  }
  .value {
    flex: 1 1 auto;
  }
  & + .item {
    margin-top: 20px;
  }
}
</style>
