export default {
  props: {
    icon: String
  },

  computed: {
    iconClass() {
      return {
        [`ms-Icon--${this.icon}`]: !!this.icon
      };
    }
  }
};
