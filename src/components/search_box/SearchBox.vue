<template>
  <div class='ms-SearchBox' :class='searchBoxClass' ref='searchBox'>
    <input
      class='ms-SearchBox-field'
      ref='searchBoxInput'
      type='text'
      :value='value'
      @input='updateValue'
      @blur='blur' />
    <label class='ms-SearchBox-label'>
      <i class='ms-SearchBox-icon ms-Icon ms-Icon--Search'></i>
      <span class='ms-SearchBox-text' v-if='!hasValue'>{{ placeholder }}</span>
    </label>
    <div class='ms-CommandButton ms-SearchBox-clear ms-CommandButton--noLabel' @mousedown='clearValue'>
      <button class='ms-CommandButton-button'>
        <span class='ms-CommandButton-icon'><i class='ms-Icon ms-Icon--Clear'></i></span>
        <span class='ms-CommandButton-label'></span>
      </button>
    </div>
  </div>
</template>
<script>
  import type from '../../mixins/props/type';

  export default {
    name: 'ou-search-box',

    mixins: [type('commandBar')],

    props: {
      value: String,
      placeholder: String,

      collapsed: {
        type: Boolean,
        default: false
      },

      clearOnBlur: {
        type: Boolean,
        default: true
      }
    },

    data() {
      return {
        hasValue: !!this.value
      };
    },

    computed: {
      searchBoxClass() {
        return {
          [`ms-SearchBox--${this.type}`]: !!this.type,
          'is-collapsed': this.collapsed
        };
      }
    },

    mounted() {
      new this.$fabric.SearchBox(this.$refs.searchBox);
    },

    methods: {
      blur() {
        if (this.clearOnBlur) {
          this.clearValue();
        }
      },

      updateValue(event) {
        this.$emit('input', event.target.value);
      },

      clearValue() {
        this.$emit('input', '');
      }
    }
  };
</script>
