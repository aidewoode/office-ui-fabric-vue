<template>
  <div class='ms-SearchBox' :class='searchBoxClass' ref='searchBox'>
    <input
      class='ms-SearchBox-field'
      ref='searchBoxInput'
      type='text'
      :value='value'
      @input='updateValue' />
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
      }
    },

    data() {
      return {
        hasValue: !!this.value,
        searchBoxInstance: null
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
      this.searchBoxInstance = new this.$fabric.SearchBox(this.$refs.searchBox);

      // Overwrite the default blur event on searchBoxField
      // to prevent lose content when searchBox blur.
      // You can see here https://github.com/OfficeDev/office-ui-fabric-js/issues/301
      this.searchBoxInstance._searchBoxField.removeEventListener('blur', this.searchBoxInstance._boundHandleBlur, true);
      this.searchBoxInstance._searchBoxField.addEventListener('blur', this.blurEvent, true);
    },

    methods: {
      updateValue(event) {
        this.$emit('input', event.target.value);
      },

      clearValue() {
        this.$emit('input', '');
      },

      blurEvent() {
        const self = this.searchBoxInstance;

        if (!self._clearOnly) {
          self._searchBox.removeEventListener('keyup', self._boundEnableClose);
          setTimeout(() => {
            if (!self._searchBox.contains(document.activeElement) && self._searchBoxField.value == '') {
              self._clearSearchBox();
              self._collapseSearchBox();
              self.setCollapsedListeners();
            }
          }, 10);
        } else {
          self._searchBoxField.focus();
        }

        self._clearOnly = false;
      }
    }
  };
</script>
