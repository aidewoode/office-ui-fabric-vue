<template>
<docs-content title='ContextualMenu'>
  <div slot='Overview' v-html='overviewContent'></div>
  <div slot='Variants'>
    <docs-code-block title='Default ContextualMenu' :code='test'>
      <ou-contextual-menu>
        <ou-button type='primary'>Open Example</ou-button>
        <div slot='list'>
          <ou-contextual-menu-item name='Animals' />
          <ou-contextual-menu-item name='Books' />
          <ou-contextual-menu-item name='Education' />
          <ou-contextual-menu-item name='Music' />
          <ou-contextual-menu-item name='Sports' disabled />
        </div>
      </ou-contextual-menu>
    </docs-code-block>
    <docs-code-block title='Multiselect ContextualMenu' :code='test'>
      <ou-contextual-menu type='multiselect'>
        <ou-button type='primary'>Open Example</ou-button>
        <div slot='list'>
          <ou-contextual-menu-item type='header' name='Sort by' />
          <ou-contextual-menu-item name='Date' />
          <ou-contextual-menu-item name='Sender' />
          <ou-contextual-menu-item type='divider' />
          <ou-contextual-menu-item type='header' name='Order' />
          <ou-contextual-menu-item name='Newest on top' />
          <ou-contextual-menu-item name='Oldest on top' />
          <ou-contextual-menu-item type='divider' />
          <ou-contextual-menu-item type='header' name='conversations' />
          <ou-contextual-menu-item name='On' />
          <ou-contextual-menu-item name='Off' />
        </div>
      </ou-contextual-menu>
    </docs-code-block>
    <docs-code-block title='Submenu ContextualMenu' :code='test'>
      <ou-contextual-menu>
        <ou-button type='primary'>Open Example</ou-button>
        <div slot='list'>
          <ou-contextual-menu-item name='Animals' />
          <ou-contextual-menu-item name='Books' type='hasMenu'>
            <ou-contextual-menu-item name='Fiction' />
            <ou-contextual-menu-item name='Humor' />
            <ou-contextual-menu-item name='Magazines' />
            <ou-contextual-menu-item name='Non-fiction' />
            <ou-contextual-menu-item name='Textbooks' />
          </ou-contextual-menu-item>
          <ou-contextual-menu-item name='Education' />
          <ou-contextual-menu-item name='Music' />
          <ou-contextual-menu-item name='Sports' disabled />
        </div>
      </ou-contextual-menu>
    </docs-code-block>
    <docs-code-block title='Dividers ContextualMenu' :code='test'>
      <ou-contextual-menu>
        <ou-button type='primary'>Open Example</ou-button>
        <div slot='list'>
          <ou-contextual-menu-item name='Delete' />
          <ou-contextual-menu-item name='Flag' />
          <ou-contextual-menu-item type='divider' />
          <ou-contextual-menu-item name='Important' />
          <ou-contextual-menu-item name='Move' />
          <ou-contextual-menu-item name='Move' type='hasMenu'>
            <ou-contextual-menu-item name='Fiction' />
            <ou-contextual-menu-item name='Humor' />
            <ou-contextual-menu-item name='Magazines' />
            <ou-contextual-menu-item name='Non-fiction' />
            <ou-contextual-menu-item name='Textbooks' />
          </ou-contextual-menu-item>
          <ou-contextual-menu-item name='Create Rule...' />
          <ou-contextual-menu-item name='Verdana' />
        </div>
      </ou-contextual-menu>
    </docs-code-block>
  </div>
  <div slot='Implementation'>
    <docs-props-table :data='contextualMenuProps' name='ContextualMenu' />
    <docs-slot-table :data='contextualMenuSlot' name='ContextualMenu' />
    <docs-props-table :data='contextualMenuItemProps' name='ContextualMenuItem' />
    <docs-events-table :data='contextualMenuItemEvents' name='ContextualMenuItem' />
  </div>
</docs-content>
</template>
<script>
import overviewContent from '../markdown/contextual_menu/overview.md';

export default {
  data() {
    return {
      overviewContent,
      test: '',
      contextualMenuProps: [
        { name: 'v-model', type: 'Array', required: 'false', acceptedValue: '--', defaultValue: '--', description: 'bind selecting status when set value prop on contextual menu item' },
        { name: 'type', type: 'String', required: 'false', acceptedValue: 'multiselect', defaultValue: '--', description: 'the type of the contextual menu' }
      ],
      contextualMenuSlot: [
        { name: 'list', description: 'set contextual menu item in the slot' }
      ],
      contextualMenuItemProps: [
        { name: 'type', type: 'String', required: 'false', acceptedValue: 'divider, header, hasMenu', defaultValue: '--', description: 'the type of the contextual menu item' },
        { name: 'disabled', type: 'Boolean', required: 'false', acceptedValue: '--', defaultValue: 'false', description: 'if the contextual menu item is disabled' },
        { name: 'name', type: 'String', required: 'false', acceptedValue: '--', defaultValue: '--', description: 'the name of the contextual menu item' },
        { name: 'value', type: 'String, Number', required: 'false', acceptedValue: '--', defaultValue: '--', description: 'the value of the contextual menu item to bind v-model when the type of contextual menu is multiselect' },
      ],
      contextualMenuItemEvents: [
        { name: 'click', params: '--', description: 'the callback function when clicked' },
      ]
    };
  }
};
</script>
