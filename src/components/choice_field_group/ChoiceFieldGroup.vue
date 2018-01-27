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
  export default {
    name: 'ou-choice-field-group',

    props: {
      value: [String, Number]
    },

    watch: {
      value() {
        this.setChoiceFields();
      }
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
        const choiceFields = this.$children.filter((child) => {
          return child.$options.name == 'ou-choice-field';
        });

        choiceFields.forEach((child) => {
          if (child.value === this.value) {
            child.checkRadio();
          } else {
            child.unCheckRadio();
          }
        });
      }
    }
  };
</script>
