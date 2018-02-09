<template>
  <div class='ms-Pivot' :class='pivotClass' ref='pivot'>
    <ul class='ms-Pivot-links'>
      <li v-for='(item, index) of pivotItems'
        class='ms-Pivot-link'
        tabindex='1'
        :class="{ 'is-selected': index == 0 }"
        :data-content='item'
        :title='item'>
        {{ item }}
      </li>
    </ul>
    <slot />
  </div>
</template>
<script>
  import size from '../../mixins/props/size';
  import type from '../../mixins/props/type';
  import eventHub from '../../mixins/eventHub';

  export default {
    name: 'ou-pivot',

    mixins: [
      size('large'),
      type('tabs'),
      eventHub
    ],

    data() {
      return {
        pivotItems: []
      };
    },

    computed: {
      pivotClass() {
        return {
          [`ms-Pivot--${this.size}`]: !!this.size,
          [`ms-Pivot--${this.type}`]: !!this.type
        };
      }
    },

    created() {
      this.eventHub.$on('addPivotItem', this.addPivotItem);
    },

    beforeDestroy() {
      this.eventHub.$off('addPivotItem', this.addPivotItem);
    },

    mounted() {
      new this.$fabric.Pivot(this.$refs.pivot);
    },

    methods: {
      addPivotItem(label) {
        this.pivotItems.push(label);
      }
    }
  };
</script>
