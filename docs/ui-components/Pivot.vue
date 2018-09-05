<template>
  <docs-content title='Pivot'>
    <div slot='Overview' v-html='overviewContent'></div>
    <div slot='Variants'>
      <docs-code-block title='Default Pivot' :code='defaultCode'>
        <ou-pivot>
          <ou-pivot-item label='My files'>This is the my files tab.</ou-pivot-item>
          <ou-pivot-item label='Recent'>This is the recent tab.</ou-pivot-item>
          <ou-pivot-item label='Shared with me'>This is the shared with me tab.</ou-pivot-item>
        </ou-pivot>
      </docs-code-block>
      <docs-code-block title='Large Pivot' :code='largeCode'>
        <ou-pivot size='large'>
          <ou-pivot-item label='My files'>This is the my files tab.</ou-pivot-item>
          <ou-pivot-item label='Recent'>This is the recent tab.</ou-pivot-item>
          <ou-pivot-item label='Shared with me'>This is the shared with me tab.</ou-pivot-item>
        </ou-pivot>
      </docs-code-block>
      <docs-code-block title='Tabs Pivot' :code='tabsCode'>
        <ou-pivot type='tabs'>
          <ou-pivot-item label='My files'>This is the my files tab.</ou-pivot-item>
          <ou-pivot-item label='Recent'>This is the recent tab.</ou-pivot-item>
          <ou-pivot-item label='Shared with me'>This is the shared with me tab.</ou-pivot-item>
        </ou-pivot>
      </docs-code-block>
      <docs-code-block title='Large Tabs Pivot' :code='largeTabsCode'>
        <ou-pivot type='tabs' size='large'>
          <ou-pivot-item label='My files'>This is the my files tab.</ou-pivot-item>
          <ou-pivot-item label='Recent'>This is the recent tab.</ou-pivot-item>
          <ou-pivot-item label='Shared with me'>This is the shared with me tab.</ou-pivot-item>
        </ou-pivot>
      </docs-code-block>
    </div>
    <div slot='Implementation'>
      <docs-table type='props' :data='pivotProps' name='Pivot' />
      <docs-table type='events' :data='pivotEvents' name='Pivot' />
      <docs-table type='props' :data='pivotItemProps' name='Pivot Item' />
    </div>
  </docs-content>
</template>
<script>
  import overviewContent from '../markdown/pivot/overview.md';
  import defaultCode from '../markdown/pivot/defaultCode.md';
  import largeCode from '../markdown/pivot/largeCode.md';
  import tabsCode from '../markdown/pivot/tabsCode.md';
  import largeTabsCode from '../markdown/pivot/largeTabsCode.md';

  export default {
    data() {
      return {
        overviewContent,
        defaultCode,
        largeCode,
        tabsCode,
        largeTabsCode,
        pivotProps: [
          { name: 'size', type: 'String', required: 'false', acceptedValue: 'large', description: 'the size of the pivot' },
          { name: 'type', type: 'String', required: 'false', acceptedValue: 'tabs', description: 'the type of the pivot' }
        ],

        pivotEvents: [
          { name: 'click', description: 'the callback function when clicked the pivot item', params: 'click event' }
        ],

        pivotItemProps: [
          { name: 'label', type: 'String', required: 'true', description: 'the label of the pivot item' }
        ]
      };
    }
  };
</script>
