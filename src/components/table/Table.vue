<template>
<table class='ms-Table' :class='tableClass'>
  <thead>
    <tr>
      <slot></slot>
    </tr>
  </thead>
  <tbody>
    <tr v-for='dataItem of data'>
      <td v-for='columnItem of tableColumnItems'>
        {{ dataItem[columnItem] }}
      </td>
    </tr>
  </tbody>
</table>
</template>
<script>
import type from '../../mixins/props/type';

export default {
  mixins: [type('fixed')],

  props: {
    data: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      tableColumnItems: []
    };
  },

  computed: {
    tableClass() {
      return {
        [`ms-Table--${this.type}`]: !!this.type
      };
    }
  }
};
</script>
