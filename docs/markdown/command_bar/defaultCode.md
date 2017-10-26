```
<ou-command-bar>
  <template slot='main'>
    <ou-search-box type='commandBar' placeholder='Search' />
    <ou-command-button icon='CircleRing'>Command</ou-command-button>
    <ou-contextual-menu>
      <ou-command-button icon='CircleRing' type='dropdown'>New</ou-command-button>
      <div slot='list'>
        <ou-contextual-menu-item name='Animals' />
        <ou-contextual-menu-item name='Books' />
        <ou-contextual-menu-item name='Education' />
        <ou-contextual-menu-item name='Music' />
        <ou-contextual-menu-item name='Sports' disabled />
      </div>
    </ou-contextual-menu>
    <ou-command-button icon='CircleRing'>Command</ou-command-button>
    <ou-command-button icon='CircleRing'>Command</ou-command-button>
    <ou-command-button icon='CircleRing'>Command</ou-command-button>
  </template>
  <template slot='side'>
    <ou-command-button icon='CircleRing' type='noLabel'></ou-command-button>
  </template>
</ou-command-bar>
```
