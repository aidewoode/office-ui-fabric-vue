<template>
  <docs-content title='Get started' :hasNav='false'>
    <div class='overview_content' v-html='getStartedDoc'></div>
  </docs-content>
</template>
<script>
  import DocsContent from './DocsContent.vue';
  import getStartedDoc from '../../README.md';

  export default {
    data() {
      return {
        getStartedDoc
      };
    },

    components: {
      DocsContent
    }
  };
</script>
