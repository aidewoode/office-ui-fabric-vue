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
export default {
  props: {
    type: {
      type: String,
      default: '',
      validator(value) {
        return ['', 'fixed'].includes(value);
      }
    },

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
