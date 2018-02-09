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
          {{ dataItem[columnItem] || defaultValue }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
  // Note: The Selectable Table haven't create
  import type from '../../mixins/props/type';
  import eventHub from '../../mixins/eventHub';

  export default {
    name: 'ou-table',

    mixins: [type('fixed'), eventHub],

    props: {
      data: {
        type: Array,
        required: true
      },

      defaultValue: {
        type: [String, Number],
        default: ''
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
    },

    created() {
      this.eventHub.$on('addTableColumnItems', this.addTableColumnItems);
    },

    beforeDestroy() {
      this.eventHub.$off('addTableColumnItems', this.tableColumnItems);
    },

    methods: {
      addTableColumnItems(value) {
        this.tableColumnItems.push(value);
      }
    }
  };
</script>
