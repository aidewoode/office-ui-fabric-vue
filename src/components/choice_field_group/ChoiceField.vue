<template>
  <li class='ms-RadioButton'>
    <input tabindex='-1' type='radio' class='ms-RadioButton-input' />
    <label
      role='radio'
      class='ms-RadioButton-field'
      tabindex='0'
      aria-checked='false'
      name='choicefieldgroup'
      @click='updateParentValue'
      ref='radioLabel'
      :class="{ 'is-disabled': disabled }">
      <span class='ms-Label'><slot /></span>
    </label>
  </li>
</template>
<script>
  import disabled from '../../mixins/props/disabled';

  export default {
    name: 'ou-choice-field',

    mixins: [disabled],

    props: {
      value: [String, Number]
    },

    methods: {
      updateParentValue() {
        if (!this.disabled) {
          this.$parent.updateValue(this.value);
        }
      },

      checkRadio() {
        if (!this.disabled) {
          this.$refs.radioLabel.classList.add('is-checked');
        }
      },

      unCheckRadio() {
        if (!this.disabled) {
          this.$refs.radioLabel.classList.remove('is-checked');
        }
      }
    }
  };
</script>
