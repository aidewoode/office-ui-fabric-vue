<template>
<div class='ms-Toggle' ref='toggle' :class='toggleClass'>
  <span class='ms-Toggle-description' v-if='description'>
    {{ description }}
  </span>
  <input type='checkbox' class='ms-Toggle-input'/>
  <span @click='toggle'>
    <label
      class='ms-Toggle-field'
      tabindex='0'
      ref='toggleLabel'
      :class="{ 'is-selected': value }">
      <span class='ms-Label ms-Label--off'>{{ offLabel }}</span>
      <span class='ms-Label ms-Label--on'>{{ onLabel }}</span>
    </label>
  </span>
</div>
</template>
<script>
export default {
  props: {
    value: Boolean,
    onLabel: String,
    offLabel: String,
    description: String,

    type: {
      type: String,
      default: '',
      validator(value) {
        return ['', 'textLeft'].includes(value);
      }
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    toggleClass() {
      return {
        [`ms-Toggle--${this.type}`]: !!this.type,
        'is-disabled': this.disabled
      };
    }
  },

  mounted() {
    new fabric.Toggle(this.$refs.toggle);
  },

  methods: {
    toggle() {
      if (!this.disabled) {
        this.$emit('input', !this.value);
      }
    }
  }
};
</script>
