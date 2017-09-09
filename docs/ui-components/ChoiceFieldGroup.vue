<template>
  <docs-content title='ChoiceFieldGroup'>
    <div slot='Overview' v-html='overviewContent'></div>
    <div slot='Variants'>
      <docs-code-block title='Default ChoiceFieldGroup' :code='defaultCode'>
        <ou-choice-field-group v-model='choiceField'>
          <ou-label required slot='title'>Unselected</ou-label>
          <ou-choice-field :value='1'>Option 1</ou-choice-field>
          <ou-choice-field :value='2'>Option 2</ou-choice-field>
          <ou-choice-field :value='3' disabled>Option 3</ou-choice-field>
          <ou-choice-field :value='4'>Option 4</ou-choice-field>
        </ou-choice-field-group>
      </docs-code-block>
    </div>
    <div slot='Implementation'>
      <docs-table type='props' :data='choiceFieldGroupProps' name='ChoiceFieldGroup' />
      <docs-table type='props' :data='choiceFieldProps' name='ChoiceField' />
      <docs-table type='slot' :data='choiceFieldGroupSlot' name='ChoiceFieldGroup' />
    </div>
  </docs-content>
</template>
<script>
  import overviewContent from '../markdown/choice_field_group/overview.md';
  import defaultCode from '../markdown/choice_field_group/defaultCode.md';

  export default {
    data() {
      return {
        overviewContent,
        choiceField: 2,
        defaultCode,
        choiceFieldGroupProps: [
          { name: 'v-model', type: 'String, Number', required: 'false', description: 'bind value to the ChoiceFieldGroup' }
        ],

        choiceFieldProps: [
          { name: 'value', type: 'String, Number', required: 'false', description: 'the value for the ChoiceField' },
          { name: 'disabled', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'if the ChoiceField is disabled' }
        ],

        choiceFieldGroupSlot: [
          { name: 'title', description: 'the title for the ChoiceFieldGroup' },
        ]
      };
    }
  };
</script>
