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

    inject: ['eventHub'],

    props: {
      value: [String, Number]
    },

    created() {
      this.eventHub.$on('setChoiceField', this.setChoiceField);
    },

    methods: {
      updateParentValue() {
        if (!this.disabled) {
          this.eventHub.$emit('updateValue', this.value);
        }
      },

      setChoiceField(value) {
        if (this.disabled) { return; }

        if (this.value == value) {
          this.$refs.radioLabel.classList.add('is-checked');
        } else {
          this.$refs.radioLabel.classList.remove('is-checked');
        }
      }
    }
  };
</script>
