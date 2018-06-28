<template>
  <docs-content title='SearchBox'>
    <div slot='Overview' v-html='overviewContent'></div>
    <div slot='Variants'>
      <docs-code-block title='Default SearchBox' :code='defaultCode'>
        <ou-search-box placeholder='Search' v-model='defaultSearch'/>
      </docs-code-block>
      <docs-code-block title='Collapsed SearchBox' :code='collapsedCode'>
        <ou-search-box type='commandBar' collapsed v-model='collapsedSearch'/>
      </docs-code-block>
      <docs-code-block title='CommandBar SearchBox' :code='commandBarCode'>
        <ou-search-box type='commandBar' placeholder='Search' v-model='commandBarSearch'/>
      </docs-code-block>
    </div>
    <div slot='Implementation'>
      <docs-table type='props' :data='searchBoxProps' name='SearchBox' />
    </div>
  </docs-content>
</template>
<script>
  import overviewContent from '../markdown/search_box/overview.md';
  import defaultCode from '../markdown/search_box/defaultCode.md';
  import collapsedCode from '../markdown/search_box/collapsedCode.md';
  import commandBarCode from '../markdown/search_box/commandBarCode.md';

  export default {
    data() {
      return {
        overviewContent,
        defaultCode,
        collapsedCode,
        commandBarCode,
        defaultSearch: '',
        collapsedSearch: '',
        commandBarSearch: '',
        searchBoxProps: [
          { name: 'v-model', type: 'String', required: 'false', description: 'bind value to the search box' },
          { name: 'type', type: 'String', required: 'false', acceptedValue: 'commandBar', description: 'the type of the search box' },
          { name: 'placeholder', type: 'String', required: 'false', description: 'the placeholder of the search box, if the search box was collapsed, the placeholder will hide' },
          { name: 'collapsed', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'if the button is collapsed, only the commandBar search box can be collapsed' },
          { name: 'clear-on-blur', type: 'Boolean', required: 'false', defaultValue: 'true', description: 'clear the input value on blur' },
        ]
      };
    }
  };
</script>
