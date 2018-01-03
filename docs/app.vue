<template>
  <div class='ms-font-m'>
    <header class='header'>
      <div class='header__title'>
        <docs-panel-nav />
        <div class='header__title--content ms-fontColor-white ms-fontSize-xl ms-fontWeight-light'>Office UI Fabric Vue</div>
      </div>
      <a href='https://github.com/aidewoode/office-ui-fabric-vue' class='header__icon'>
        <img src='docs/assets/img/github-logo.svg' />
      </a>
    </header>
    <div class='wrapper'>
      <div class='ms-Grid'>
        <div class='ms-Grid-row'>
          <div class='ms-Grid-col ms-u-hiddenSm ms-u-md4 ms-u-lg3 wrapper__content'>
            <docs-nav />
          </div>
          <div class='ms-Grid-col ms-u-sm12 ms-u-md8 ms-u-lg9 ms-bgColor-neutralLighterAlt wrapper__content'>
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .overview_content {
    max-width: 45em;
  }

  .overview_content h1 {
    font-size: 36px;
    font-weight: 100;
  }

  .overview_content h2 {
    font-size: 21px;
    font-weight: 100;
    margin-bottom: 4px;
    margin-top: 48px;
  }

  .overview_content p {
    padding: 16px 0;
    margin: 0;
    line-height: 1.5;
  }

  .overview_content ul {
    padding-left: 18px;
  }

  .overview_content li {
    margin-bottom: 16px;
  }

  .overview_content pre {
    line-height: 1.5;
    margin: 0;
    margin-top: 25px;
    padding: 15px 20px;
    border: none;
    background: #212121;
    box-shadow: none;
    max-height: 450px;
    overflow: auto;
    color: #fff;
  }

  .overview_content a {
    color: #0078d7;
    text-decoration: none;
  }
</style>

<style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background: #000;
    padding: 0 15px;
    z-index: 10;
  }

  .header__title {
    display: flex;
    align-items: center;
  }

  .header__icon {
    display: flex;
  }

  .wrapper {
    margin: 0 auto;
    max-width: 1300px;
    padding-top: 50px;
  }

  .wrapper__content {
    padding: 0;
    overflow: hidden;
  }

  @media (max-width: 479px) {
    .header__title--content {
      font-size: 17px;
    }
  }
</style>
<script>
  import DocsNav from './components/DocsNav.vue';
  import DocsPanelNav from './components/DocsPanelNav.vue';

  export default {
    components: {
      DocsNav,
      DocsPanelNav
    }
  };
</script>
