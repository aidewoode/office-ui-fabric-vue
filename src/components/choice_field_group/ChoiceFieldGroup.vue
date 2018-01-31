<template>
  <div class='ms-ChoiceFieldGroup' id='choicefieldgroup' role='radiogroup' ref='choiceFieldGroup'>
    <div class='ms-ChoiceFieldGroup-title'>
      <slot name='title' />
    </div>
    <ul class='ms-ChoiceFieldGroup-list'>
      <slot />
    </ul>
  </div>
</template>
<script>
  import eventHub from '../../mixins/eventHub';

  export default {
    name: 'ou-choice-field-group',

    mixins: [eventHub],

    props: {
      value: [String, Number]
    },

    watch: {
      value() {
        this.setChoiceFields();
      }
    },

    created() {
      this.eventHub.$on('updateValue', this.updateValue);
    },

    beforeDestroy() {
      this.eventHub.$off('updateValue', this.updateValue);
    },

    mounted() {
      if (typeof this.value != 'undefined') { this.setChoiceFields(); }
      new this.$fabric.ChoiceFieldGroup(this.$refs.choiceFieldGroup);
    },

    methods: {
      updateValue(value) {
        this.$emit('input', value);
      },

      setChoiceFields() {
        this.eventHub.$emit('setChoiceField', this.value);
      }
    }
  };
</script>
