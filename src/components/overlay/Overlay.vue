<template>
  <div class='ms-Overlay' :class='overlayClass' ref='overlay'></div>
</template>
<script>
  import type from '../../mixins/props/type';

  export default {
    name: 'ou-overlay',

    mixins: [type('dark')],

    props: {
      value: Boolean
    },

    data() {
      return {
        overlayInstance: null
      };
    },

    watch: {
      value() {
        this.setOverlayVisibility();
      }
    },

    computed: {
      overlayClass() {
        return {
          [`ms-Overlay--${this.type}`]: !!this.type
        };
      }
    },

    mounted() {
      this.overlayInstance = new this.$fabric.Overlay(this.$refs.overlay);

      this.setOverlayVisibility();
      this.bindOverlayCloseEvent();
    },

    methods: {
      setOverlayVisibility() {
        this.value ? this.overlayInstance.show() : this.overlayInstance.hide();
      },

      bindOverlayCloseEvent() {
        // Because the overlay component don't have callback when overlay closed,
        // So add a click event when click the overlay to set the value to false
        const overlayElement = this.$refs.overlay;
        const closeOverlay = () => {
          this.$emit('input', false);
        };

        overlayElement.addEventListener('click', closeOverlay);
      }
    }
  };
</script>
