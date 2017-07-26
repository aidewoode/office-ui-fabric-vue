<template>
<div class='ms-MessageBar' :class='messageBarClass'>
  <div class='ms-MessageBar-content'>
    <div class='ms-MessageBar-icon' v-if='icon'>
      <i class='ms-Icon' :class='iconClass'></i>
    </div>
    <div class='ms-MessageBar-text'>
      <slot />
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    icon: String,

    type: {
      type: String,
      default: '',
      validator(value) {
        return ['', 'success', 'error', 'blocked', 'warning', 'severeWarning'].includes(value);
      }
    }
  },

  computed: {
    messageBarClass() {
      return {
        [`ms-MessageBar--${this.type}`]: !!this.type
      };
    },

    iconClass() {
      return {
        [`ms-Icon--${this.icon}`]: !!this.icon
      };
    }
  }
};
</script>
