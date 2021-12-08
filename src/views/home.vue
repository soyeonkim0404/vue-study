<template>
  <div class="main">
    <ul class="main-list">
      <router-link to="/array" tag="li">array methods</router-link>
      <router-link to="/addressApi" tag="li">address-api</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.main-list {
}

.main-list li {
  cursor: pointer;
  font-size: 2.5rem;
}

.main-list li:hover {
  opacity: 0.4;
}

.main-list li + li {
  margin-top: 20px;
}
</style>
