```
<template>
  <ou-choice-field-group v-model='choiceField'>
    <ou-label required slot='title'>Unselected</ou-label>
    <ou-choice-field :value='1'>Option 1</ou-choice-field>
    <ou-choice-field :value='2'>Option 2</ou-choice-field>
    <ou-choice-field :value='3' disabled>Option 3</ou-choice-field>
    <ou-choice-field :value='4'>Option 4</ou-choice-field>
  </ou-choice-field-group>
</template>
<script>
  export default {
    data() {
      return {
        choiceField: 2
      };
    }
  };
</script>

```
