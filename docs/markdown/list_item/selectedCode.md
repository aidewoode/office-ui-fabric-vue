```
<template>
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
</template>
<script>
  export default {
    data() {
      return {
        checked: true
      };
    }
  };
</script>
```
