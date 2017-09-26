<template>
  <div class='ms-Panel' :class='panelClass' ref='panel'>
    <button class='ms-Panel-closeButton ms-PanelAction-close' @click='closePanel'>
      <i class='ms-Panel-closeIcon ms-Icon ms-Icon--Cancel'></i>
    </button>
    <div class='ms-Panel-contentInner'>
      <p class='ms-Panel-headerText'>{{ title }}</p>
      <div class='ms-Panel-content'>
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      value: Boolean,
      title: String,

      size: {
        type: String,
        default: '',
        validator(value) {
          return ['', 'md', 'lg', 'xl', 'xxl'].includes(value);
        }
      },

      fixed: {
        type: Boolean,
        default: false
      },

      left: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        panelInstance: null
      };
    },

    watch: {
      value() {
        this.setPanelVisibility();
      }
    },

    computed: {
      panelClass() {
        return {
          [`ms-Panel--${this.size}`]: !!this.size,
          'ms-Panel--fixed': this.fixed,
          'ms-Panel--left': this.left
        };
      }
    },

    mounted() {
      this.setPanelVisibility();
    },

    methods: {
      setPanelVisibility() {
        if (this.value) {
          this.panelInstance = new fabric.Panel(this.$refs.panel);
          this.bindOverlayCloseEvent();
        } else if (this.panelInstance) {
          this.panelInstance.dismiss();
        }
      },

      // Because the office ui fabric js don't support on_close or on_open event in panel
      // component, So I have to write some hacking code to change the visible status when
      // click the overlay. Otherwise the visible status can't change, when click the overlay
      // to close the panel.
      bindOverlayCloseEvent() {
        const overlayElement = this.panelInstance.panelHost.overlay.overlayElement;
        overlayElement.addEventListener('click', this.closePanel);
      },

      closePanel() {
        this.$emit('input', false);

        // Because the panel overlay have event to fire dismiss method when click it to
        // close panel. To prevent fire the panel dismiss method again and raise some error,
        // so set the panelInstance to null
        this.panelInstance = null;
      }
    }
  };
</script>
