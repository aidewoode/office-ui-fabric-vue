<template>
  <div class='container'>
    <div class='container__header' :class='{ isShowCode: isShowCode }'>
      <div class='container__header--title ms-font-l'>{{ title }}</div>
      <button class='container__header--button ms-fontWeight-semiboldo' :class='{ isShowCode: isShowCode }' @click='toggleBlock'>
        <i class='ms-Icon ms-Icon--Embed'></i>
        <span class='container__header--button-label'>{{ buttonTitle }}</span>
      </button>
    </div>
    <div class='container__code ms-bgColor-neutralDark' v-show='isShowCode' v-html='code'>
    </div>
    <div class='container__example'>
      <slot></slot>
    </div>
  </div>
</template>
<style>
  .container__code pre {
    line-height: 1.5;
    margin: 0;
    padding: 15px 20px;
    border: none;
    background: none;
    box-shadow: none;
    max-height: 450px;
    overflow: auto;
    color: #fff;
  }

  .container__code pre code {
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  }
</style>
<style scoped>
  .container {
    margin: 45px 5px;
  }

  .container__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #a6a6a6;
  }

  .container__header.isShowCode {
    border-color: #212121;
  }

  .container__header--title {
    margin-bottom: 8px;
  }

  .container__header--button {
    display: flex;
    align-items: center;
    padding: 6px 12px;
    background: none;
    outline: none;
    border: 1px solid #a6a6a6;
    border-bottom: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .container__header--button-label {
    margin-left: 10px;
  }

  .container__header--button:hover,
  .container__header--button.isShowCode {
    background: #212121;
    border-color: #212121;
    color: #fff;
  }

  .container__example {
    margin-top: 30px;
  }
</style>
<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },

      code: {
        type: String
      }
    },

    data() {
      return {
        isShowCode: false
      };
    },

    computed: {
      buttonTitle() {
        return this.isShowCode ? 'Hide code' : 'Show code';
      }
    },

    methods: {
      toggleBlock() {
        this.isShowCode = !this.isShowCode;
      }
    }
  };
</script>
