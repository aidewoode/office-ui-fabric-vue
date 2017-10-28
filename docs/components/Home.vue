<template>
  <div class='container'>
    <h1 class='title ms-fontColor-neutralPrimaryAlt'>Office UI Fabric Vue</h1>
    <p class='sub_title ms-fontColor-neutralPrimaryAlt'>Office UI Fabric implementation for Vue.js</p>
    <router-link class='button ms-bgColor-green' to='/GetStarted'>Get Started</router-link>
  </div>
</template>
<style scoped>
  .container {
    text-align: center;
    padding: 70px 50px;
  }

  .title {
    font-size: 72px;
    font-weight: 100;
    margin-bottom: 8px;
  }

  .sub_title {
    font-size: 17px;
    font-weight: 300;
    margin: 0;
    margin-bottom: 50px;
  }

  .button {
    border-radius: 3px;
    padding: 8px 20px 10px 20px;
    color: #fff;
    text-decoration: none;
    font-size: 17px;
  }

  .button:hover {
    opacity: .8;
  }
</style>
