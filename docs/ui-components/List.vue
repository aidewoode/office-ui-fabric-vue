<template>
  <docs-content title='List'>
    <div slot='Overview' v-html='overviewContent'></div>
    <div slot='Variants'>
      <docs-code-block title='Default List'>
        <ou-list>
          <ou-listitem class="is-unread is-selectable" tabindex="0">
            <span class="ms-ListItem-primaryText">Alton Lafferty</span> 
            <span class="ms-ListItem-secondaryText">Meeting notes</span> 
            <span class="ms-ListItem-tertiaryText">Today we discussed the importance of a, b, and c in regards to d.</span> 
            <span class="ms-ListItem-metaText">2:42p</span> 
            <div class="ms-ListItem-selectionTarget"></div>
            <div class="ms-ListItem-actions">
              <div class="ms-ListItem-action">
                <i class="ms-Icon ms-Icon--Mail"></i>
              </div>
              <div class="ms-ListItem-action">
                <i class="ms-Icon ms-Icon--Delete"></i>
              </div>
              <div class="ms-ListItem-action">
                <i class="ms-Icon ms-Icon--Flag"></i>
              </div>
              <div class="ms-ListItem-action">
                <i class="ms-Icon ms-Icon--Pinned"></i>
              </div>
            </div>
          </ou-listitem>
          <ou-listitem class="is-unread is-selectable" tabindex="0">
            <span class="ms-ListItem-primaryText">Alton Lafferty</span> 
            <span class="ms-ListItem-secondaryText">Meeting notes</span> 
            <span class="ms-ListItem-tertiaryText">Today we discussed the importance of a, b, and c in regards to d.</span> 
            <span class="ms-ListItem-metaText">2:42p</span> 
            <div class="ms-ListItem-selectionTarget"></div>
            <div class="ms-ListItem-actions">
              <div class="ms-ListItem-action">
                <i class="ms-Icon ms-Icon--Mail"></i>
              </div>
              <div class="ms-ListItem-action">
                <i class="ms-Icon ms-Icon--Delete"></i>
              </div>
              <div class="ms-ListItem-action">
                <i class="ms-Icon ms-Icon--Flag"></i>
              </div>
              <div class="ms-ListItem-action">
                <i class="ms-Icon ms-Icon--Pinned"></i>
              </div>
            </div>
          </ou-listitem>
        </ou-list>
      </docs-code-block>
    </div>
    <div slot='Implementation'>
      <docs-table type='props' :data='buttonProps' name='Button' />
      <docs-table type='events' :data='buttonEvents' name='Button' />
    </div>
  </docs-content>
</template>
<script>
  import overviewContent from '../markdown/list/overview.md';

  export default {
    data() {
      return {
        overviewContent,
        buttonProps: [
          { name: 'type', type: 'String', required: 'false', acceptedValue: 'primary, hero, compound, small', description: 'the type of the button' },
          { name: 'disabled', type: 'Boolean', required: 'false', defaultValue: 'false', description: 'if the button is disabled' },
          { name: 'icon', type: 'String', required: 'false', description: 'the icon for the hero button' },
          { name: 'description', type: 'String', required: 'false', description: 'the description for the compound button' }
        ],
        buttonEvents: [
          { name: 'click', description: 'the callback function when clicked' }
        ]
      };
    }
  };
</script>
