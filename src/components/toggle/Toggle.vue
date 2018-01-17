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
  import type from '../../mixins/props/type';
  import disabled from '../../mixins/props/disabled';

  export default {
    mixins: [type('textLeft'), disabled],

    props: {
      value: Boolean,
      onLabel: String,
      offLabel: String,
      description: String
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
      new this.$fabric.Toggle(this.$refs.toggle);
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
