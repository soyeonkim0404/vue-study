<template>
  <div id="app" :class="{ dark: $route.meta.bg === 'dark' }">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss" />
