```
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
```
