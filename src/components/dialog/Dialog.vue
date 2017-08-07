<template>
<div class='ms-Dialog' ref='dialog' :class='dialogClass'>
  <button
    class='ms-Dialog-button ms-Dialog-buttonClose'
    v-if="type == 'close'"
    @click='closeDialog'>
    <i class='ms-Icon ms-Icon--Cancel'></i>
  </button>
  <div class='ms-Dialog-title'>{{ title }}</div>
  <div class='ms-Dialog-content'>
    <p class='ms-Dialog-subText'>{{ subText }}</p>
    <slot />
  </div>
  <div class='ms-Dialog-actions'>
    <slot name='actions' />
  </div>
</div>
</template>
<script>
import type from '../../mixins/props/type';

export default {
  mixins: [type('multiline', 'lgHeader', 'blocking', 'close')],

  props: {
    title: String,
    subText: String,

    value: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      dialogInstance: null
    };
  },

  computed: {
    dialogClass() {
      return {
        [`ms-Dialog--${this.type}`]: !!this.type
      };
    }
  },

  watch: {
    value(value) {
      this.setDialogVisibility(value);
    }
  },

  mounted() {
    this.dialogInstance = new fabric.Dialog(this.$refs.dialog);
    this.setDialogVisibility(this.value);
  },

  methods: {
    setDialogVisibility(value) {
      if (value) {
        this.dialogInstance.open();

        // Because the office ui fabric js don't support on_close or on_open event in dialog
        // component, So I have to write some hacking code to change the visible status when
        // click the overlay. Otherwise the visible status can't change, when click the overlay
        // to close the dialog.
        this.bindOverlayCloseEvent();
      } else if (this.isOpen()) {
        // Avoid to destroy overlay element twice, and get errors, so determine if the dialog
        // was opened before close it.
        this.dialogInstance.close();
      }
    },

    bindOverlayCloseEvent() {
      if (this.dialogInstance._overlay) {
        const overlayElement = this.dialogInstance._overlay.overlayElement;

        const closeOverlay = () => {
          overlayElement.removeEventListener('click', closeOverlay);
          this.$emit('input', false);
        };

        overlayElement.addEventListener('click', closeOverlay);
      }
    },

    isOpen() {
      // When the dialog is shown, the dialog element add a class name of 'is-open',
      // So use this to determine the dialog if was opened.
      return this.$refs.dialog.classList.contains('is-open');
    },

    closeDialog(event) {
      this.$emit('input', false);


      // Because the original close button element have the click event to close the dialog,
      // when I fire the click event, the original click event function will fire behind it,
      // So stop the original click event, when I fire the click event.
      event.stopImmediatePropagation();
    }
  }
};
</script>
