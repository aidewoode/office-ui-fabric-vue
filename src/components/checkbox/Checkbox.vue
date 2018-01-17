<template>
  <div class='ms-CheckBox' ref='checkbox'>
    <input tabindex='-1' type='checkbox' class='ms-CheckBox-input' @click='toggle'>
    <label
      role='checkbox'
      class='ms-CheckBox-field'
      tabindex='0'
      aria-checked='false'
      name='checkbox'
      :class="{ 'is-disabled': disabled }">
      <span class='ms-Label'><slot /></span>
    </label>
  </div>
</template>
<script>
  import disabled from '../../mixins/props/disabled';

  export default {
    mixins: [disabled],

    props: {
      value: Boolean
    },

    data() {
      return {
        checkboxInstance: null
      };
    },

    watch: {
      value() {
        this.setCheck();
      }
    },

    mounted() {
      this.checkboxInstance = new this.$fabric.CheckBox(this.$refs.checkbox);
      this.setCheck();
    },

    methods: {
      toggle() {
        this.$emit('input', this.checkboxInstance.getValue());
      },

      setCheck() {
        this.value && !this.disabled ?
          this.checkboxInstance.check() :
          this.checkboxInstance.unCheck();
      }
    }
  };
</script>
