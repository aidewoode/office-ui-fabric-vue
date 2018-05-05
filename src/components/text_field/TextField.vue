<template>
  <div class='ms-TextField' ref='textField' :class='textFieldClass'>
    <label class='ms-Label'>{{ label }}</label>
    <textarea
      v-if="type == 'multiline'"
      :placeholder='placeholder'
      class='ms-TextField-field'
      type='text'
      :value='value'
      @input='updateValue'
      :disabled='disabled'></textarea>
    <input
      v-else
      :placeholder='placeholder'
      class='ms-TextField-field'
      :type='inputType'
      :value='value'
      @input='updateValue'
      @change="handleChange"
      :disabled='disabled' />
  </div>
</template>
<script>
  import type from '../../mixins/props/type';
  import disabled from '../../mixins/props/disabled';

  export default {
    name: 'ou-text-field',

    mixins: [type('multiline', 'underlined'), disabled],

    props: {
      value: String,
      label: String,
      placeholder: String,
      inputType: {
        type: String,
        default: 'text',
        validator(value) {
          return ['text', 'password', 'file'].includes(value);
        }
      }
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
      new this.$fabric.TextField(this.$refs.textField);
    },

    methods: {
      updateValue(event) {
        this.$emit('input', event.target.value);
      },
      handleChange(event) {
        this.$emit('change', event.target.value);
      }
    }
  };
</script>
