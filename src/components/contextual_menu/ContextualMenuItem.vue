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
    name: 'ou-contextual-menu-item',

    mixins: [type('divider', 'header', 'hasMenu'), disabled],

    inject: ['eventHub'],

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

    created() {
      this.eventHub.$on('setSelected', this.setSelected);
    },

    beforeDestroy() {
      this.eventHub.$off('setSelected', this.setSelected);
    },

    methods: {
      clickEvent() {
        if (this.value) {
          this.eventHub.$emit('updateValue', this.value);
        } else if (!this.type && !this.disabled) {
          this.$emit('click');
        }
      },

      setSelected(values) {
        if (values.includes(this.value)) {
          this.selected = true;
        } else {
          this.selected = false;
        }
      }
    }
  };
</script>
