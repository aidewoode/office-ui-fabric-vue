<template>
<docs-content title='Breadcrumb'>
  <div slot='Overview' v-html='overviewContent'></div>
  <div slot='Variants'>
    <docs-code-block title='Default Breadcrumb' :code='defaultBreadcrumbCode'>
      <ou-breadcrumb>
        <ou-breadcrumb-item>Folder1</ou-breadcrumb-item>
        <ou-breadcrumb-item>Folder2</ou-breadcrumb-item>
        <ou-breadcrumb-item>Folder3</ou-breadcrumb-item>
        <ou-breadcrumb-item>Folder4</ou-breadcrumb-item>
        <ou-breadcrumb-item>Folder5</ou-breadcrumb-item>
        <ou-breadcrumb-item>Folder6</ou-breadcrumb-item>
      </ou-breadcrumb>
    </docs-code-block>
  </div>
  <div slot='Implementation'>
    <docs-table type='props' :data='breadcrumbItemProps' name='Breadcrumb Item' />
  </div>
</docs-content>
</template>
<script>
import overviewContent from '../markdown/breadcrumb/overview.md';

export default {
  data() {
    return {
      overviewContent,
      defaultBreadcrumbCode: `
        <ou-breadcrumb>
          <ou-breadcrumb-item>Folder1</ou-breadcrumb-item>
          <ou-breadcrumb-item>Folder2</ou-breadcrumb-item>
          <ou-breadcrumb-item>Folder3</ou-breadcrumb-item>
          <ou-breadcrumb-item>Folder4</ou-breadcrumb-item>
          <ou-breadcrumb-item>Folder5</ou-breadcrumb-item>
          <ou-breadcrumb-item>Folder6</ou-breadcrumb-item>
        </ou-breadcrumb>
      `,

      breadcrumbItemProps: [
        { name: 'href', type: 'String', required: 'false', description: 'the url for the breadcrumb item' }
      ]
    };
  }
};
</script>
