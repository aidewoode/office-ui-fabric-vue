```
<template>
  <ou-list>
    <ou-list-item
      isSelectable
      isUnread
      primaryText='Alton Lafferty'
      secondaryText='Meeting notes'
      tertiaryText='Today we discussed the importance of a, b, and c in regards to d.'
      metaText='2:42p'
      v-model='item1Checked'>
      <ou-list-actions>
        <ou-list-action-item icon='Mail'></ou-list-action-item>
        <ou-list-action-item icon='Delete'></ou-list-action-item>
        <ou-list-action-item icon='Flag'></ou-list-action-item>
        <ou-list-action-item icon='Pinned'></ou-list-action-item>
      </ou-list-actions>
    </ou-list-item>

    <ou-list-item
      isSelectable
      isUnread
      primaryText='Alton Lafferty'
      secondaryText='Meeting notes'
      tertiaryText='Today we discussed the importance of a, b, and c in regards to d.'
      metaText='2:42p'
      v-model='item2Checked'>
      <ou-list-actions>
        <ou-list-action-item icon='Mail'></ou-list-action-item>
        <ou-list-action-item icon='Delete'></ou-list-action-item>
        <ou-list-action-item icon='Flag'></ou-list-action-item>
        <ou-list-action-item icon='Pinned'></ou-list-action-item>
      </ou-list-actions>
    </ou-list-item>

    <ou-list-item
      isSelectable
      primaryText='Alton Lafferty'
      secondaryText='Meeting notes'
      tertiaryText='Today we discussed the importance of a, b, and c in regards to d.'
      metaText='2:42p'
      v-model='item3Checked'>
      <ou-list-actions>
        <ou-list-action-item icon='Mail'></ou-list-action-item>
        <ou-list-action-item icon='Delete'></ou-list-action-item>
        <ou-list-action-item icon='Flag'></ou-list-action-item>
        <ou-list-action-item icon='Pinned'></ou-list-action-item>
      </ou-list-actions>
    </ou-list-item>

    <ou-list-item
      isSelectable
      primaryText='Alton Lafferty'
      secondaryText='Meeting notes'
      tertiaryText='Today we discussed the importance of a, b, and c in regards to d.'
      metaText='2:42p'
      v-model='item4Checked'>
      <ou-list-actions>
        <ou-list-action-item icon='Mail'></ou-list-action-item>
        <ou-list-action-item icon='Delete'></ou-list-action-item>
        <ou-list-action-item icon='Flag'></ou-list-action-item>
        <ou-list-action-item icon='Pinned'></ou-list-action-item>
      </ou-list-actions>
    </ou-list-item>
  </ou-list>
</template>
<script>
  export default {
    data() {
      return {
        item1Checked: false,
        item2Checked: false,
        item3Checked: false,
        item4Checked: false
      };
    }
  };
</script>
```
