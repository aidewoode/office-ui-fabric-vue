<template>
  <div class='ms-Dropdown' ref='dropdown' :class="{ 'is-disabled': disabled }">
    <label class='ms-Label' v-if='label'>{{ label }}</label>
    <i class='ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown'></i>
    <select class='ms-Dropdown-select' ref='dropdownSelect' @change='getCurrentSelected'>
      <slot />
    </select>
  </div>
</template>
<script>
  import disabled from '../../mixins/props/disabled';
  import eventHub from '../../mixins/eventHub';

  export default {
    name: 'ou-dropdown',

    mixins: [disabled, eventHub],

    props: {
      label: String,
      value: [String, Number],

      placeholder: {
        type: String,
        default: 'Please select'
      }
    },

    watch: {
      value() {
        this.setSelectedItem();
      }
    },

    created() {
      this.eventHub.$on('setSelectedStatus', this.setSelectedStatus);
    },

    beforeDestroy() {
      this.eventHub.$off('setSelectedStatus', this.setSelectedStatus);
    },

    mounted() {
      new this.$fabric.Dropdown(this.$refs.dropdown);

      this.setDropdownTitle(this.placeholder);
      this.setSelectedItem();
    },

    methods: {
      setDropdownTitle(title) {
        this.$refs.dropdown.querySelector('.ms-Dropdown-title').textContent = title;
      },

      // Because the office ui js dropdown component don't have selected class to set
      // selected dropdown item, So write some hack code to set dropdown item selected.
      // Maybe next version of office ui js will fix this problem, So this code sould be
      // rewrite.
      setSelectedItem() {
        this.eventHub.$emit('setSelectedItem', this.value);
      },

      setSelectedStatus(content) {
        this.$refs.dropdown.querySelectorAll('.ms-Dropdown-item').forEach((item) => {
          if (item.textContent.trim() == content.trim()) {
            item.classList.add('is-selected');
            this.setDropdownTitle(content);
          } else {
            item.classList.remove('is-selected');
          }
        });
      },

      getCurrentSelected() {
        const dropdownSelect = this.$refs.dropdownSelect;
        this.$emit('input', dropdownSelect.options[dropdownSelect.selectedIndex].value);
      }
    }
  };
</script>
