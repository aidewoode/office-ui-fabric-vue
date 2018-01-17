<template>
  <div class='ms-Pivot' :class='pivotClass' ref='pivot'>
    <ul class='ms-Pivot-links'>
      <li v-for='(child, index) of children'
        class='ms-Pivot-link'
        tabindex='1'
        :class="{ 'is-selected': index == 0 }"
        :data-content='child.label'
        :title='child.label'>
        {{ child.label }}
      </li>
    </ul>
    <slot />
  </div>
</template>
<script>
  import size from '../../mixins/props/size';
  import type from '../../mixins/props/type';

  export default {
    mixins: [
      size('large'),
      type('tabs')
    ],

    data() {
      return {
        children: this.$children
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

    mounted() {
      new this.$fabric.Pivot(this.$refs.pivot);
    }
  };
</script>
