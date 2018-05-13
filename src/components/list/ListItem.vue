<template>
  <li class='ms-ListItem'
    ref='listItem'
    tabIndex='0'
    :class="listItemClass">
    <div v-show='isSelectable' @click='toggle' class='ms-ListItem-selectionTarget'></div>
    <span v-if='primaryText' class="ms-ListItem-primaryText">{{ primaryText }}</span> 
    <span v-if='secondaryText' class="ms-ListItem-secondaryText">{{ secondaryText }}</span> 
    <span v-if='tertiaryText' class="ms-ListItem-tertiaryText">{{ tertiaryText }}</span> 
    <span v-if='metaText' class="ms-ListItem-metaText">{{ metaText }}</span> 
    <slot />
  </li>
</template>
<script>
  export default {
    name: 'ou-list-item',

    props: {
      isSelectable: Boolean,
      metaText: String,
      primaryText: String,
      secondaryText: String,
      tertiaryText: String,
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
