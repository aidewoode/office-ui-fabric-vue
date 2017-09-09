<template>
  <div class='ms-TextField' ref='textField' :class='textFieldClass'>
    <label class='ms-Label'>{{ label }}</label>
    <textarea
      v-if="type == 'multiline'"
      class='ms-TextField-field'
      type='text'
      :value='value'
      @input='updateValue'
      :disabled='disabled'></textarea>
    <input
      v-else
      class='ms-TextField-field'
      type='text'
      :value='value'
      @input='updateValue'
      :disabled='disabled' />
  </div>
</template>
<script>
  import type from '../../mixins/props/type';
  import disabled from '../../mixins/props/disabled';

  export default {
    mixins: [type('multiline', 'underlined', 'placeholder'), disabled],

    props: {
      value: String,
      label: String
    },

    computed: {
      textFieldClass() {
        return {
          [`ms-TextField--${this.type}`]: !!this.type,
          'is-disabled': this.disabled
        };
      }
    },

    mounted() {
      new fabric.TextField(this.$refs.textField);
    },

    methods: {
      updateValue(event) {
        this.$emit('input', event.target.value);
      }
    }
  };
</script>
