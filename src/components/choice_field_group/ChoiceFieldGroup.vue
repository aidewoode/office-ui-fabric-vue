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
  props: {
    value: [String, Number]
  },

  watch: {
    value() {
      this.setChildrenValue();
    }
  },

  mounted() {
    this.setChildrenValue();
    new fabric.ChoiceFieldGroup(this.$refs.choiceFieldGroup);
  },

  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },

    setChildrenValue() {
      this.$children.forEach((child) => {
        if (child.value === this.value) {
          child.checkRadio();
        }
      });
    }
  }
};
</script>
