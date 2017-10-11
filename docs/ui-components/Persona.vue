<template>
  <docs-content title='Persona'>
    <div slot='Overview' v-html='overviewContent'></div>
    <div slot='Variants'>
      <docs-code-block title='Tiny Persona' :code='tinyCode'>
        <ou-persona type='available' size='tiny' src='docs/assets/img/avatar.png' primaryText='Aide Woode' />
      </docs-code-block>
      <docs-code-block title='Extra Small Persona' :code='extraSmallCode'>
        <ou-persona size='xs' src='docs/assets/img/avatar.png' primaryText='Aide Woode' />
      </docs-code-block>
      <docs-code-block title='Small Persona' :code='smallCode'>
        <ou-persona size='sm' src='docs/assets/img/avatar.png' primaryText='Aide Woode' secondaryText='Accountant' />
      </docs-code-block>
      <docs-code-block title='Default Persona' :code='defaultCode'>
        <ou-persona src='docs/assets/img/avatar.png' primaryText='Aide Woode' secondaryText='Accountant' />
      </docs-code-block>
      <docs-code-block title='Large Persona' :code='largeCode'>
        <ou-persona size='lg' src='docs/assets/img/avatar.png' primaryText='Aide Woode' secondaryText='Accountant' tertiaryText='In a meeting' />
      </docs-code-block>
      <docs-code-block title='Extra Large Persona' :code='extraLargeCode'>
        <ou-persona size='xl' src='docs/assets/img/avatar.png' primaryText='Aide Woode' secondaryText='Accountant' tertiaryText='In a meeting' optionalText='Available at 4:00pm' />
      </docs-code-block>
      <docs-code-block title='initials Persona' :code='initialsCode'>
        <ou-persona initials='AD' primaryText='Aide Woode' />
      </docs-code-block>
      <docs-code-block title='Available Persona' :code='availableCode'>
        <ou-persona type='available' src='docs/assets/img/avatar.png' primaryText='Aide Woode' secondaryText='Accountant' />
      </docs-code-block>
      <docs-code-block title='Away Persona' :code='awayCode'>
        <ou-persona type='away' src='docs/assets/img/avatar.png' primaryText='Aide Woode' secondaryText='Accountant' />
      </docs-code-block>
      <docs-code-block title='Blocked Persona' :code='blockedCode'>
        <ou-persona type='blocked' src='docs/assets/img/avatar.png' primaryText='Aide Woode' secondaryText='Accountant' />
      </docs-code-block>
      <docs-code-block title='Busy Persona' :code='busyCode'>
        <ou-persona type='busy' src='docs/assets/img/avatar.png' primaryText='Aide Woode' secondaryText='Accountant' />
      </docs-code-block>
      <docs-code-block title='DND Persona' :code='dndCode'>
        <ou-persona type='dnd' src='docs/assets/img/avatar.png' primaryText='Aide Woode' secondaryText='Accountant' />
      </docs-code-block>
      <docs-code-block title='Offline Persona' :code='offlineCode'>
        <ou-persona type='offline' src='docs/assets/img/avatar.png' primaryText='Aide Woode' secondaryText='Accountant' />
      </docs-code-block>
    </div>
    <div slot='Implementation'>
      <docs-table type='props' :data='personaProps' name='Persona' />
    </div>
  </docs-content>
</template>
<script>
  import overviewContent from '../markdown/persona/overview.md';
  import tinyCode from '../markdown/persona/tinyCode.md';
  import extraSmallCode from '../markdown/persona/extraSmallCode.md';
  import smallCode from '../markdown/persona/smallCode.md';
  import defaultCode from '../markdown/persona/defaultCode.md';
  import largeCode from '../markdown/persona/largeCode.md';
  import extraLargeCode from '../markdown/persona/extraLargeCode.md';
  import initialsCode from '../markdown/persona/initialsCode.md';
  import availableCode from '../markdown/persona/availableCode.md';
  import awayCode from '../markdown/persona/awayCode.md';
  import blockedCode from '../markdown/persona/blockedCode.md';
  import busyCode from '../markdown/persona/busyCode.md';
  import dndCode from '../markdown/persona/dndCode.md';
  import offlineCode from '../markdown/persona/offlineCode.md';

  export default {
    data() {
      return {
        overviewContent,
        tinyCode,
        extraSmallCode,
        smallCode,
        defaultCode,
        largeCode,
        extraLargeCode,
        initialsCode,
        availableCode,
        awayCode,
        blockedCode,
        busyCode,
        dndCode,
        offlineCode,
        personaProps: [
          { name: 'size', type: 'String', required: 'false', acceptedValue: 'tiny, xs, sm, lg, xl', description: 'the size of the persona' },
          { name: 'type', type: 'String', required: 'false', acceptedValue: 'available, away, blocked, busy, dnd, offline', description: 'the type of the persona' },
          { name: 'src', type: 'String', required: 'false', description: 'the image resource address of the persona' },
          { name: 'initials', type: 'String', required: 'false', description: 'the initials letters of the persona' },
          { name: 'primaryText', type: 'String', required: 'false', description: 'the primary text of the persona' },
          { name: 'secondaryText', type: 'String', required: 'false', description: 'the secondary text of the persona' },
          { name: 'tertiaryText', type: 'String', required: 'false', description: 'the tertiary text of the persona' },
          { name: 'optionalText', type: 'String', required: 'false', description: 'the optional text of the persona' }
        ]
      };
    }
  };
</script>
