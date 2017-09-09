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

  export default {
    mixins: [disabled],

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
        this.setSelectItem();
      }
    },

    mounted() {
      new fabric.Dropdown(this.$refs.dropdown);

      this.setDropdownTitle(this.placeholder);
      this.setSelectItem();
    },

    methods: {
      setDropdownTitle(title) {
        this.$refs.dropdown.querySelector('.ms-Dropdown-title').textContent = title;
      },

      // Because the office ui js dropdown component don't have selected class to set
      // selected dropdown item, So write some hack code to set dropdown item selected.
      // Maybe next version of office ui js will fix this problem, So this code sould be
      // rewrite.
      setSelectItem() {
        this.$children.forEach((child) => {
          if (child.value === this.value) {
            const childText = child.$slots.default[0].text;

            this.$refs.dropdown.querySelectorAll('.ms-Dropdown-item').forEach((item) => {
              if (item.textContent == childText) {
                item.classList.add('is-selected');
                this.setDropdownTitle(childText);
              }
            });
          }
        });
      },

      getCurrentSelected() {
        const selectedIndex = this.$refs.dropdownSelect.selectedIndex;
        this.$emit('input', this.$children[selectedIndex].value);
      }
    }
  };
</script>
