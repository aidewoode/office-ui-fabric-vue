```
<template>
  <ou-contextual-menu type='multiselect' v-model='select'>
    <ou-button type='primary'>Open Example</ou-button>
    <div slot='list'>
      <ou-contextual-menu-item type='header' name='Sort by' />
      <ou-contextual-menu-item name='Date' value='date' />
      <ou-contextual-menu-item name='Sender' value='sender' />
      <ou-contextual-menu-item type='divider' />
      <ou-contextual-menu-item type='header' name='Order' />
      <ou-contextual-menu-item name='Newest on top' value='new' />
      <ou-contextual-menu-item name='Oldest on top' value='old' />
      <ou-contextual-menu-item type='divider' />
      <ou-contextual-menu-item type='header' name='conversations' />
      <ou-contextual-menu-item name='On' value='on' />
      <ou-contextual-menu-item name='Off' value='off' />
    </div>
  </ou-contextual-menu>
</template>
<script>
  export default {
    data() {
      return {
        select: ['date', 'on']
      };
    }
  };
</script>
```
