<template>
  <div class='ms-CommandButton' :class='commandButtonClass' @click='clickEvent'>
    <button class='ms-CommandButton-button'>
      <span class='ms-CommandButton-icon ms-fontColor-themePrimary' v-if='icon'>
        <i class='ms-Icon' :class='iconClass'></i>
      </span>
      <span class='ms-CommandButton-label'><slot /></span>
      <span class='ms-CommandButton-dropdownIcon' v-if="type == 'dropdown'">
        <i class='ms-Icon ms-Icon--ChevronDown'></i>
      </span>
    </button>
  </div>
</template>
<script>
  import type from '../../mixins/props/type';
  import disabled from '../../mixins/props/disabled';
  import icon from '../../mixins/props/icon';

  export default {
    mixins: [
      type('noLabel', 'inline', 'dropdown'),
      disabled,
      icon
    ],

    computed: {
      commandButtonClass() {
        return {
          [`ms-CommandButton--${this.type}`]: !!this.type,
          'is-disabled': this.disabled
        };
      }
    },

    methods: {
      clickEvent() {
        this.$emit('click');
      }
    }
  };
</script>
