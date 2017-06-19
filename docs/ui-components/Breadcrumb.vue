<template>
<docs-content title='Breadcrumb'>
  <div slot='Overview'>
    <p>
      Breadcrumbs should be used as a navigational aid in your app or site.
      They indicate the current page’s location within a hierarchy and help
      the user understand where they are in relation to the rest of that
      hierarchy. They also afford one-click access to higher levels of that
      hierarchy.
    </p>
    <p>
      Breadcrumbs are typically placed, in horizontal form,
      under the masthead or navigation of an experience,
      above the primary content area.
    </p>
  </div>
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
    <h3 class='ms-font-l'>Breadcrumb Item Props</h3>
    <docs-props-table :data='breadcrumbItemProps' />
  </div>
</docs-content>
</template>
<script>
import DocsContent from '../components/DocsContent.vue';
import DocsCodeBlock from '../components/DocsCodeBlock.vue';
import DocsPropsTable from '../components/DocsPropsTable.vue';

export default {
  data() {
    return {
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
        { name: 'href', type: 'String', required: 'false', acceptedValue: '--', defaultValue: '--', description: 'the url for the breadcrumb item' }
      ]
    };
  },

  components: {
    DocsContent,
    DocsCodeBlock,
    DocsPropsTable
  }
};
</script>
