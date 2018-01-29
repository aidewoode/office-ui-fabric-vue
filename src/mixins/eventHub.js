import Vue from 'vue';

export default {
  data() {
    return {
      eventHub: new Vue()
    };
  },

  provide() {
    return {
      eventHub: this.eventHub
    };
  }
};
