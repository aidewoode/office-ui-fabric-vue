<template>
<docs-content title='Button'>
  <div slot='Overview'>
    <p>
      Buttons are best used to enable a user to commit a change or complete steps in a task. They are typically found inside forms, dialogs, panels or pages. An example of their usage is confirming the deletion of a file in a confirmation dialog.
    </p>
    <p>
      When considering their place in a layout, contemplate the order in which a user will flow through the UI. As an example, in a form, the individual will need to read and interact with the form fields before submiting the form. Therefore, as a general rule, the button should be placed at the bottom of the UI container (a dialog, panel, or page) which holds the related UI elements.
    </p>
    <p>
      While buttons can technically be used to navigate a user to another part of the experience, this is not recommended - unless that navigation is part of an action or their flow.
    </p>
  </div>
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
    <h3 class='ms-font-l'>Button Props</h3>
    <docs-props-table :data='buttonProps' />
    <h3 class='ms-font-l'>Button Events</h3>
    <docs-events-table :data='buttonEvents' />
  </div>
</docs-content>
</template>
<script>
import DocsContent from '../components/DocsContent.vue';
import DocsCodeBlock from '../components/DocsCodeBlock.vue';
import DocsPropsTable from '../components/DocsPropsTable.vue';
import DocsEventsTable from '../components/DocsEventsTable.vue';

export default {
  data() {
    return {
      normalButtonCode: '<ou-button>Create Account</ou-button>',
      primaryButtonCode: "<ou-button type='primary'>Create Account</ou-button>",
      heroButtonCode: "<ou-button type='hero' icon='Add'>Create Account</ou-button>",
      compoundButtonCode: "<ou-button type='compound' description='Description of this action this button takes'>Create Account</ou-button>",
      smallButtonCode: "<ou-button type='small'>Create</ou-button>",
      buttonProps: [
        { name: 'type', type: 'String', required: 'false', acceptedValue: 'primary, hero, compound, small', defaultValue: '--', description: 'the type of the button' },
        { name: 'disabled', type: 'Boolean', required: 'false', acceptedValue: '--', defaultValue: 'false', description: 'if the button is disabled' },
        { name: 'icon', type: 'String', required: 'false', acceptedValue: '--', defaultValue: '--', description: 'the icon for the hero button' },
        { name: 'description', type: 'String', required: 'false', acceptedValue: '--', defaultValue: '--', description: 'the description for the compound button' }
      ],
      buttonEvents: [
        { name: 'click', params: '--', description: 'the callback function when clicked' }
      ]
    };
  },

  components: {
    DocsContent,
    DocsCodeBlock,
    DocsPropsTable,
    DocsEventsTable
  }
};
</script>
