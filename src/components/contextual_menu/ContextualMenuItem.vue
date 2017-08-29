<template>
<li class='ms-ContextualMenu-item' :class='contextualMenuItemClass'>
  <span v-if="type == 'header'">{{ name }}</span>
  <a @click='clickEvent'
    class='ms-ContextualMenu-link'
    :class='contextualMenuLinkClass'
    v-if='hasLink'>
    {{ name }}
  </a>
  <i class='ms-ContextualMenu-subMenuIcon ms-Icon ms-Icon--ChevronRight' v-if='hasMenu'></i>
  <ul class='ms-ContextualMenu is-hidden' v-if='hasMenu'>
    <slot />
  </ul>
</li>
</template>
<script>
import type from '../../mixins/props/type';
import disabled from '../../mixins/props/disabled';

export default {
  mixins: [type('divider', 'header', 'hasMenu'), disabled],

  data() {
    return {
      selected: false
    };
  },

  props: {
    name: String,
    value: [String, Number]
  },

  computed: {
    hasLink() {
      return this.type == 'hasMenu' || this.type == '';
    },

    hasMenu() {
      return this.type == 'hasMenu';
    },

    contextualMenuItemClass() {
      return {
        [`ms-ContextualMenu-item--${this.type}`]: !!this.type
      };
    },

    contextualMenuLinkClass() {
      return {
        'is-disabled': this.disabled,
        'is-selected': this.selected
      };
    }
  },

  methods: {
    clickEvent() {
      if (this.$parent.type == 'multiselect' && this.value) {
        this.$parent.updateValue(this.value);
      } else {
        this.$emit('click');
      }
    },

    setSelected() {
      this.selected = true;
    }
  }
};
</script>
