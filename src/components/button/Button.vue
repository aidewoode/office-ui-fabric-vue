<template>
  <button class='ms-Button' :class='buttonClass' @click='clickEvent'>
    <span class='ms-Button-icon' v-if="icon && type == 'hero'">
      <i class='ms-Icon' :class='iconClass'></i>
    </span>
    <span class='ms-Button-label'><slot /></span>
    <span class='ms-Button-description' v-if="description && type == 'compound'">
      {{ description }}
    </span>
  </button>
</template>
<script>
  import type from '../../mixins/props/type';
  import disabled from '../../mixins/props/disabled';
  import icon from '../../mixins/props/icon';

  export default {
    mixins: [
      type('primary', 'hero', 'compound', 'small'),
      disabled,
      icon
    ],

    props: {
      description: String
    },

    computed: {
      buttonClass() {
        return {
          [`ms-Button--${this.type}`]: !!this.type,
          'is-disabled': this.disabled
        };
      }
    },

    methods: {
      clickEvent() {
        if (!this.disabled) { this.$emit('click'); }
      }
    }
  };
</script>
