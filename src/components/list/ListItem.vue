<template>
  <li class='ms-ListItem' ref='listItem' 
    :class="listItemClass" 
    tabIndex='0'>
    <div v-show='isSelectable' @click='toggle' class='ms-ListItem-selectionTarget'></div>
    <slot />
  </li>
</template>
<script>
  export default {
    name: 'ou-list-item',

    props: {
      isSelectable: Boolean,
      value: Boolean,
    },

    computed: {
      listItemClass() {
        return {
          'is-selectable': this.isSelectable,
          'is-selected': this.value,
        };
      }
    },

    mounted() {
      new this.$fabric.ListItem(this.$refs.listItem);
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
