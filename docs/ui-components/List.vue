<template>
  <docs-content title='List'>
    <div slot='Overview' v-html='overviewContent'></div>
    <div slot='Variants'>
      <docs-code-block title='Default List'>
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
              <ou-list-action-item><i class="ms-Icon ms-Icon--Mail"></i></ou-list-action-item>
              <ou-list-action-item><i class="ms-Icon ms-Icon--Delete"></i></ou-list-action-item>
              <ou-list-action-item><i class="ms-Icon ms-Icon--Flag"></i></ou-list-action-item>
              <ou-list-action-item><i class="ms-Icon ms-Icon--Pinned"></i></ou-list-action-item>
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
              <ou-list-action-item><i class="ms-Icon ms-Icon--Mail"></i></ou-list-action-item>
              <ou-list-action-item><i class="ms-Icon ms-Icon--Delete"></i></ou-list-action-item>
              <ou-list-action-item><i class="ms-Icon ms-Icon--Flag"></i></ou-list-action-item>
              <ou-list-action-item><i class="ms-Icon ms-Icon--Pinned"></i></ou-list-action-item>
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
              <ou-list-action-item><i class="ms-Icon ms-Icon--Mail"></i></ou-list-action-item>
              <ou-list-action-item><i class="ms-Icon ms-Icon--Delete"></i></ou-list-action-item>
              <ou-list-action-item><i class="ms-Icon ms-Icon--Flag"></i></ou-list-action-item>
              <ou-list-action-item><i class="ms-Icon ms-Icon--Pinned"></i></ou-list-action-item>
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
              <ou-list-action-item><i class="ms-Icon ms-Icon--Mail"></i></ou-list-action-item>
              <ou-list-action-item><i class="ms-Icon ms-Icon--Delete"></i></ou-list-action-item>
              <ou-list-action-item><i class="ms-Icon ms-Icon--Flag"></i></ou-list-action-item>
              <ou-list-action-item><i class="ms-Icon ms-Icon--Pinned"></i></ou-list-action-item>
            </ou-list-actions>
          </ou-list-item>
  
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
        item1Checked: false,
        item2Checked: false,
        item3Checked: false,
        item4Checked: false,
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
