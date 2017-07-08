<template>
<button class='ms-Button' :class='buttonClass' @click='clickEvent'>
  <span class='ms-Button-icon' v-if='icon'>
    <i class='ms-Icon' :class='iconClass'></i>
  </span>
  <span class='ms-Button-label'><slot /></span>
  <span class='ms-Button-description' v-if='description'>{{ description }}</span>
</button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
      validator(value) {
        return ['', 'primary', 'hero', 'compound', 'small'].includes(value);
      }
    },

    disabled: {
      type: Boolean,
      default: false
    },

    icon: String,
    description: String
  },

  computed: {
    buttonClass() {
      return {
        [`ms-Button--${this.type}`]: !!this.type,
        'is-disabled': this.disabled
      };
    },

    iconClass() {
      return {
        [`ms-Icon--${this.icon}`]: !!this.icon
      };
    }
  },

  methods: {
    clickEvent() {
      this.$emit('click');
    }
  }
};
</script>
