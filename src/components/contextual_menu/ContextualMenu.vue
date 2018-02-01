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
  import eventHub from '../../mixins/eventHub';

  export default {
    name: 'ou-contextual-menu',

    mixins: [type('multiselect'), eventHub],

    props: {
      value: {
        type: Array,
        default() {
          return [];
        }
      }
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

    created() {
      this.eventHub.$on('updateValue', this.updateValue);
    },

    mounted() {
      this.setChildrenValue();

      new this.$fabric.ContextualMenu(
        this.$refs.contextualMenu,
        this.$refs.contextualMenuTrigger
      );
    },

    beforeDestroy() {
      this.eventHub.$off('updateValue', this.updateValue);
    },

    methods: {
      setChildrenValue() {
        if (this.type == 'multiselect') {
          this.eventHub.$emit('setSelected', this.value);
        }
      },

      updateValue(value) {
        if (this.type != 'multiselect') { return; }

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
