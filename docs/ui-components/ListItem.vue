<template>
  <docs-content title='ListItem'>
    <div slot='Overview' v-html='overviewContent'></div>
    <div slot='Variants'>
      <docs-code-block title='Default List' :code='defaultCode'>
        <ou-list-item
          primaryText='Alton Lafferty'
          secondaryText='Meeting notes'
          tertiaryText='Today we discussed the importance of a, b, and c in regards to d.'
          metaText='2:42p'>
          <ou-list-actions>
            <ou-list-action-item icon='Mail'></ou-list-action-item>
            <ou-list-action-item icon='Delete'></ou-list-action-item>
            <ou-list-action-item icon='Flag'></ou-list-action-item>
            <ou-list-action-item icon='Pinned'></ou-list-action-item>
          </ou-list-actions>
        </ou-list-item>
      </docs-code-block>

      <docs-code-block title='Image ListItem' :code='imageCode'>
        <ou-list-item
          type='image'
          imageSrc='docs/assets/img/avatar.png'
          primaryText='Alton Lafferty'
          secondaryText='Meeting notes'
          tertiaryText='Today we discussed the importance of a, b, and c in regards to d.'
          metaText='2:42p'>
          <ou-list-actions>
            <ou-list-action-item icon='Mail'></ou-list-action-item>
            <ou-list-action-item icon='Delete'></ou-list-action-item>
            <ou-list-action-item icon='Flag'></ou-list-action-item>
            <ou-list-action-item icon='Pinned'></ou-list-action-item>
          </ou-list-actions>
        </ou-list-item>
      </docs-code-block>

      <docs-code-block title='Document ListItem' :code='documentCode'>
        <ou-list-item
          type='document'
          primaryText='Alton Lafferty'
          secondaryText='Meeting notes'
          metaText='2:42p'>
          <ou-list-actions>
            <ou-list-action-item icon='Mail'></ou-list-action-item>
            <ou-list-action-item icon='Delete'></ou-list-action-item>
            <ou-list-action-item icon='Flag'></ou-list-action-item>
            <ou-list-action-item icon='Pinned'></ou-list-action-item>
          </ou-list-actions>
        </ou-list-item>
      </docs-code-block>

      <docs-code-block title='Selectable ListItem' :code='selectableCode'>
        <ou-list-item
          is-selectable
          primaryText='Alton Lafferty'
          secondaryText='Meeting notes'
          tertiaryText='Today we discussed the importance of a, b, and c in regards to d.'
          metaText='2:42p'>
          <ou-list-actions>
            <ou-list-action-item icon='Mail'></ou-list-action-item>
            <ou-list-action-item icon='Delete'></ou-list-action-item>
            <ou-list-action-item icon='Flag'></ou-list-action-item>
            <ou-list-action-item icon='Pinned'></ou-list-action-item>
          </ou-list-actions>
        </ou-list-item>
      </docs-code-block>

      <docs-code-block title='Selected ListItem' :code='selectedCode'>
        <ou-list-item
          is-selectable
          primaryText='Alton Lafferty'
          secondaryText='Meeting notes'
          tertiaryText='Today we discussed the importance of a, b, and c in regards to d.'
          metaText='2:42p'
          v-model='checked'>
          <ou-list-actions>
            <ou-list-action-item icon='Mail'></ou-list-action-item>
            <ou-list-action-item icon='Delete'></ou-list-action-item>
            <ou-list-action-item icon='Flag'></ou-list-action-item>
            <ou-list-action-item icon='Pinned'></ou-list-action-item>
          </ou-list-actions>
        </ou-list-item>
      </docs-code-block>

      <docs-code-block title='Unseen ListItem' :code='unseenCode'>
        <ou-list-item
          is-unseen
          primaryText='Alton Lafferty'
          secondaryText='Meeting notes'
          tertiaryText='Today we discussed the importance of a, b, and c in regards to d.'
          metaText='2:42p'>
          <ou-list-actions>
            <ou-list-action-item icon='Mail'></ou-list-action-item>
            <ou-list-action-item icon='Delete'></ou-list-action-item>
            <ou-list-action-item icon='Flag'></ou-list-action-item>
            <ou-list-action-item icon='Pinned'></ou-list-action-item>
          </ou-list-actions>
        </ou-list-item>
      </docs-code-block>

      <docs-code-block title='Unread ListItem' :code='unreadCode'>
        <ou-list-item
          is-unread
          primaryText='Alton Lafferty'
          secondaryText='Meeting notes'
          tertiaryText='Today we discussed the importance of a, b, and c in regards to d.'
          metaText='2:42p'>
          <ou-list-actions>
            <ou-list-action-item icon='Mail'></ou-list-action-item>
            <ou-list-action-item icon='Delete'></ou-list-action-item>
            <ou-list-action-item icon='Flag'></ou-list-action-item>
            <ou-list-action-item icon='Pinned'></ou-list-action-item>
          </ou-list-actions>
        </ou-list-item>
      </docs-code-block>
    </div>
    <div slot='Implementation'>
      <docs-table type='props' :data='listItemProps' name='ListItem' />
      <docs-table type='events' :data='listItemEvents' name='ListItem' />
      <docs-table type='props' :data='listActionItemProps' name='ListActionItem' />
      <docs-table type='events' :data='listActionItemEvents' name='ListActionItem' />
    </div>
  </docs-content>
</template>
<script>
  import overviewContent from '../markdown/list_item/overview.md';
  import defaultCode from '../markdown/list_item/defaultCode.md';
  import imageCode from '../markdown/list_item/imageCode.md';
  import documentCode from '../markdown/list_item/documentCode.md';
  import selectableCode from '../markdown/list_item/selectableCode.md';
  import selectedCode from '../markdown/list_item/selectedCode.md';
  import unreadCode from '../markdown/list_item/unreadCode.md';
  import unseenCode from '../markdown/list_item/unseenCode.md';

  export default {
    data() {
      return {
        checked: true,
        overviewContent,
        defaultCode,
        imageCode,
        documentCode,
        selectableCode,
        selectedCode,
        unreadCode,
        unseenCode,
        listItemProps: [
          { name: 'type', type: 'String', required: 'false', acceptedValue: 'image, document', description: 'the type of the list item' },
          { name: 'isUnread', type: 'Boolean', required: 'false', description: 'if the list item is unread' },
          { name: 'isUnseen', type: 'Boolean', required: 'false', description: 'if the list item is unseen' },
          { name: 'isSelectable', type: 'Boolean', required: 'false', description: 'if the list item is selectable' },
          { name: 'v-model', type: 'Boolean', required: 'false', description: 'bind Boolean value to the selectable list item' },
          { name: 'imageSrc', type: 'String', required: 'false', description: 'the image resource address of the list item when the type is image' },
          { name: 'primaryText', type: 'String', required: 'false', description: 'the primary text of the list item' },
          { name: 'secondaryText', type: 'String', required: 'false', description: 'the secondary text of the list item' },
          { name: 'tertiaryText', type: 'String', required: 'false', description: 'the tertiary text of the list item' },
          { name: 'metaText', type: 'String', required: 'false', description: 'the meta text of the list item' },
        ],

        listItemEvents: [
          { name: 'click', description: 'the callback function when clicked the list item' }
        ],

        listActionItemProps: [
          { name: 'icon', type: 'String', required: 'false', description: 'the icon for the list action item' }
        ],

        listActionItemEvents: [
          { name: 'click', description: 'the callback function when clicked the list action item' }
        ]
      };
    }
  };
</script>
