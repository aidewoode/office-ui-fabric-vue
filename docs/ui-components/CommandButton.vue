<template>
  <docs-content title='CommandButton'>
    <div slot='Overview' v-html='overviewContent'></div>
    <div slot='Variants'>
      <docs-code-block title='Default CommandButton' :code='defaultCode'>
        <ou-command-button icon='CircleRing'>Command</ou-command-button>
      </docs-code-block>
      <docs-code-block title='No Label CommandButton' :code='noLabelCode'>
        <ou-command-button icon='CircleRing' type='noLabel'></ou-command-button>
      </docs-code-block>
      <docs-code-block title='Disabled CommandButton' :code='disabledCode'>
        <ou-command-button icon='CircleRing' disabled>Command</ou-command-button>
      </docs-code-block>
      <docs-code-block title='Dropdown CommandButton' :code='dropdownCode'>
        <ou-contextual-menu>
          <ou-command-button icon='CircleRing' type='dropdown'>New</ou-command-button>
          <div slot='list'>
            <ou-contextual-menu-item name='Animals' />
            <ou-contextual-menu-item name='Books' />
            <ou-contextual-menu-item name='Education' />
            <ou-contextual-menu-item name='Music' />
            <ou-contextual-menu-item name='Sports' disabled />
          </div>
        </ou-contextual-menu>
      </docs-code-block>
      <docs-code-block title='Inline CommandButton' :code='inlineCode'>
        <ou-command-button icon='CircleRing' type='inline'>Command</ou-command-button>
      </docs-code-block>
      <docs-code-block title='Text Only CommandButton' :code='textOnlyCode'>
        <ou-command-button>Command</ou-command-button>
      </docs-code-block>
    </div>
    <div slot='Implementation'>
      <docs-table type='props' :data='commandButtonProps' name='CommandButton' />
      <docs-table type='events' :data='commandButtonEvents' name='CommandButton' />
    </div>
  </docs-content>
</template>
<script>
  import overviewContent from '../markdown/command_button/overview.md';
  import defaultCode from '../markdown/command_button/defaultCode.md';
  import noLabelCode from '../markdown/command_button/noLabelCode.md';
  import disabledCode from '../markdown/command_button/disabledCode.md';
  import dropdownCode from '../markdown/command_button/dropdownCode.md';
  import inlineCode from '../markdown/command_button/inlineCode.md';
  import textOnlyCode from '../markdown/command_button/textOnlyCode.md';

  export default {
    data() {
      return {
        overviewContent,
        defaultCode,
        noLabelCode,
        disabledCode,
        dropdownCode,
        inlineCode,
        textOnlyCode,
        commandButtonProps: [
          { name: 'type', type: 'String', required: 'false', acceptedValue: 'noLabel, inline, dropdown', description: 'the type of the command button' },
          { name: 'disabled', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'if the command button is disabled' },
          { name: 'icon', type: 'String', required: 'false', description: 'the icon for the command button' }
        ],
        commandButtonEvents: [
          { name: 'click', description: 'the callback function when clicked' }
        ]
      };
    }
  };
</script>
