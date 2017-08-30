<template>
<docs-content title='Button'>
  <div slot='Overview' v-html='overviewContent'></div>
  <div slot='Variants'>
    <docs-code-block title='Normal Button' :code='normalButtonCode'>
      <ou-button>Create Account</ou-button>
    </docs-code-block>
    <docs-code-block title='Primary Button' :code='primaryButtonCode'>
      <ou-button type='primary'>Create Account</ou-button>
    </docs-code-block>
    <docs-code-block title='Hero Button' :code='heroButtonCode'>
      <ou-button type='hero' icon='Add'>Create Account</ou-button>
    </docs-code-block>
    <docs-code-block title='Compound Button' :code='compoundButtonCode'>
      <ou-button type='compound' description='Description of this action this button takes'>Create Account</ou-button>
    </docs-code-block>
    <docs-code-block title='Small Button' :code='smallButtonCode'>
      <ou-button type='small'>Create</ou-button>
    </docs-code-block>
  </div>
  <div slot='Implementation'>
    <docs-table type='props' :data='buttonProps' name='Button' />
    <docs-table type='events' :data='buttonEvents' name='Button' />
  </div>
</docs-content>
</template>
<script>
import overviewContent from '../markdown/button/overview.md';

export default {
  data() {
    return {
      overviewContent,
      normalButtonCode: '<ou-button>Create Account</ou-button>',
      primaryButtonCode: "<ou-button type='primary'>Create Account</ou-button>",
      heroButtonCode: "<ou-button type='hero' icon='Add'>Create Account</ou-button>",
      compoundButtonCode: "<ou-button type='compound' description='Description of this action this button takes'>Create Account</ou-button>",
      smallButtonCode: "<ou-button type='small'>Create</ou-button>",
      buttonProps: [
        { name: 'type', type: 'String', required: 'false', acceptedValue: 'primary, hero, compound, small', description: 'the type of the button' },
        { name: 'disabled', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'if the button is disabled' },
        { name: 'icon', type: 'String', required: 'false', description: 'the icon for the hero button' },
        { name: 'description', type: 'String', required: 'false', description: 'the description for the compound button' }
      ],
      buttonEvents: [
        { name: 'click', description: 'the callback function when clicked' }
      ]
    };
  }
};
</script>
