<template>
  <div class='inline-block'>
    <span class='inline-block' ref='contextualMenuTrigger'>
      <slot />
    </span>
    <ul class='ms-ContextualMenu is-hidden' :class='contextualMenuClass' ref='contextualMenu'>
      <slot name='list' />
    </ul>
  </div>
</template>
<style scoped>
  .inline-block {
    display: inline-block;
  }
</style>
<script>
  import type from '../../mixins/props/type';

  export default {
    mixins: [type('multiselect')],

    props: {
      value: Array
    },

    computed: {
      contextualMenuClass() {
        return {
          [`ms-ContextualMenu--${this.type}`]: !!this.type
        };
      }
    },

    watch: {
      value() {
        this.setChildrenValue();
      }
    },

    mounted() {
      this.setChildrenValue();

      new this.$fabric.ContextualMenu(
        this.$refs.contextualMenu,
        this.$refs.contextualMenuTrigger
      );
    },

    methods: {
      setChildrenValue() {
        if (this.type == 'multiselect' && this.value) {
          this.$children.forEach((child) => {
            if (this.value.includes(child.value)) {
              child.setSelected();
            }
          });
        }
      },

      updateValue(value) {
        let newValue;

        if (this.value.includes(value)) {
          newValue = this.value.filter((item) => {
            return item !== value;
          });
        } else {
          newValue = this.value.concat(value);
        }

        this.$emit('input', newValue);
      }
    }
  };
</script>
