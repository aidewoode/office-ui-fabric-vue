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
import type from '../../mixins/props/type';
import icon from '../../mixins/props/icon';

export default {
  mixins: [
    type('success', 'error', 'blocked', 'warning', 'severeWarning'),
    icon
  ],

  computed: {
    messageBarClass() {
      return {
        [`ms-MessageBar--${this.type}`]: !!this.type
      };
    }
  }
};
</script>
