<template>
<docs-content title='ChoiceFieldGroup'>
  <div slot='Overview' v-html='overviewContent'></div>
  <div slot='Variants'>
    <docs-code-block title='Default ChoiceFieldGroup' :code='defaultChoiceFieldGroupCode'>
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
    <docs-props-table :data='choiceFieldGroupProps' name='ChoiceFieldGroup' />
    <docs-props-table :data='choiceFieldProps' name='ChoiceField' />
    <docs-slot-table :data='choiceFieldGroupSlot' name='ChoiceFieldGroup' />
  </div>
</docs-content>
</template>
<script>
import overviewContent from '../markdown/choice_field_group/overview.md';

export default {
  data() {
    return {
      overviewContent,
      choiceField: 2,
      defaultChoiceFieldGroupCode: `
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
        <\/script>
      `,

      choiceFieldGroupProps: [
        { name: 'v-model', type: 'String, Number', required: 'false', acceptedValue: '--', defaultValue: '--', description: 'bind value to the ChoiceFieldGroup' }
      ],

      choiceFieldProps: [
        { name: 'value', type: 'String, Number', required: 'false', acceptedValue: '--', defaultValue: '--', description: 'the value for the ChoiceField' },
        { name: 'disabled', type: 'Boolean', required: 'false', acceptedValue: '--', defaultValue: 'false', description: 'if the ChoiceField is disabled' }
      ],

      choiceFieldGroupSlot: [
        { name: 'title', description: 'the title for the ChoiceFieldGroup' },
      ]
    };
  }
};
</script>
