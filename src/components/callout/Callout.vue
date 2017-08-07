<template>
<div>
  <div class='ms-Callout is-hidden' :class='calloutClass' ref='callout'>
    <div class='ms-Callout-main'>
      <button class='ms-Callout-close' v-if='showClose'>
        <i class='ms-Icon ms-Icon--Clear'></i>
      </button>
      <div class='ms-Callout-header'>
        <p class='ms-Callout-title'>{{ title }}</p>
      </div>
      <div class='ms-Callout-inner'>
        <div class='ms-Callout-content'>
          <p class='ms-Callout-subText' v-if='content'>{{ content }}</p>
          <slot name='content' v-else />
        </div>
        <div class='ms-Callout-actions'>
          <slot name='actions' />
        </div>
      </div>
    </div>
  </div>
  <span ref='calloutTrigger'>
    <slot ref='calloutTrigger'/>
  </span>
</div>
</template>
<script>
import type from '../../mixins/props/type';

export default {
  mixins: [type('actionText', 'OOBE', 'peek')],

  props: {
    position: {
      type: String,
      default: 'right',
      validator(value) {
        return ['right', 'left', 'top', 'bottom'].includes(value);
      }
    },

    showClose: {
      type: Boolean,
      default: false
    },

    title: String,
    content: String
  },

  computed: {
    calloutClass() {
      return {
        [`ms-Callout--${this.type}`]: !!this.type,
        'ms-Callout--close': this.showClose
      };
    }
  },

  mounted() {
    new fabric.Callout(
      this.$refs.callout,
      this.$refs.calloutTrigger,
      this.position
    );
  }
};
</script>
