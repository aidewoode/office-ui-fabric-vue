<template>
  <li class='ms-ListItem'
    ref='listItem'
    :class='listItemClass'
    @click='clickEvent'>
    <img v-if="type == 'image'" class='ms-ListItem-image' :src='imageSrc' />
    <span v-if='primaryText' class='ms-ListItem-primaryText'>{{ primaryText }}</span>
    <span v-if='secondaryText' class='ms-ListItem-secondaryText'>{{ secondaryText }}</span>
    <span v-if='tertiaryText' class='ms-ListItem-tertiaryText'>{{ tertiaryText }}</span>
    <span v-if='metaText' class='ms-ListItem-metaText'>{{ metaText }}</span>
    <div v-if='isSelectable' @click.stop='toggle' class='ms-ListItem-selectionTarget'></div>
    <slot />
  </li>
</template>
<script>
  import type from '../../mixins/props/type';

  export default {
    name: 'ou-list-item',

    mixins: [type('image', 'document')],

    props: {
      isUnread: Boolean,
      isSelectable: Boolean,
      isUnseen: Boolean,
      value: Boolean,

      imageSrc: String,
      primaryText: String,
      secondaryText: String,
      tertiaryText: String,
      metaText: String
    },

    computed: {
      listItemClass() {
        return {
          [`ms-ListItem--${this.type}`]: !!this.type,
          'is-selectable': this.isSelectable,
          'is-selected': this.value,
          'is-unread': this.isUnread,
          'is-unseen': this.isUnseen
        };
      }
    },

    methods: {
      toggle() {
        if (this.isSelectable) {
          this.$emit('input', !this.value);
        }
      },

      clickEvent() {
        this.$emit('click');
      }
    }
  };
</script>
