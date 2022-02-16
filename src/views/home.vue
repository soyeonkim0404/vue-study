<template>
  <div class="main">
    <h1 class="title">
      <span class="logo"><em>S</em></span
      >2021
    </h1>
    <div class="info">
      <span>KIM SO YEON <br />vue.js</span>
      <span>KIM SO YEON <br />javascript</span>
      <span>KIM SO YEON <br />studying</span>
      <span>KIM SO YEON <br />help me</span>
    </div>
    <ul class="main-list">
      <router-link to="/todo-list" tag="li">TodoList-App</router-link>
      <router-link to="/calculator" tag="li">Calculator</router-link>
      <router-link to="/address-api" tag="li">Address-api</router-link>
      <router-link to="/array" tag="li">Array methods</router-link>
      <router-link to="/form-page" tag="li">form page</router-link>
      <router-link to="/join-clone" tag="li">join clone coding</router-link>
      <router-link to="/quiz" tag="li">quiz</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style scoped lang="scss">
.main {
  display: flex;
  /*justify-content: center;*/
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: #212529;
  padding: 0 0 100px 0;
  .title {
    display: flex;
    width: 100%;
    padding: 20px;
    justify-content: right;
    align-items: center;
    font-size: 10rem;
    color: #f8f9fa;
    font-family: 'Cantata One', serif !important;
    .logo {
      margin-top: -143px;
      em {
        width: 85px;
        height: 85px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 3.5rem;
        border: 4px solid;
        border-radius: 100%;
        font-family: 'Cantata One', serif !important;
      }
    }
  }
  .info {
    width: 100%;
    padding: 20px 0;
    border-top: 1px solid #f8f9fa;
    display: flex;
    box-sizing: border-box;
    color: #f8f9fa;
    span {
      font-size: 16px;
      flex: 1;
      padding-left: 20px;
      line-height: 1.5;
      font-family: 'Cantata One', serif !important;
    }
  }
  .main-list {
    margin-top: 100px;
    padding-bottom: 100px;
    li {
      cursor: pointer;
      font-size: 4rem;
      text-align: center;
      color: #f8f9fa;
      font-family: 'Cantata One', serif !important;
      letter-spacing: 4px;
      &:hover {
        opacity: 0.4;
      }
      & + li {
        margin-top: 10px;
      }
    }
  }
}
</style>
