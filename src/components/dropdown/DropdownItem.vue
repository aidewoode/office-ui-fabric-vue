<template>
  <option :value='value'><slot /></option>
</template>
<script>
  export default {
    name: 'ou-dropdown-item',

    inject: ['eventHub'],

    props: {
      value: [String, Number]
    },

    created() {
      this.eventHub.$on('setSelectedItem', this.setSelectedItem);
    },

    beforeDestroy() {
      this.eventHub.$off('setSelectedItem', this.setSelectedItem);
    },

    methods: {
      setSelectedItem(value) {
        if (value === this.value) {
          this.eventHub.$emit('setSelectedStatus', this.$slots.default[0].text);
        }
      }
    }
  };
</script>
