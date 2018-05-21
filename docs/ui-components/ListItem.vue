<template>
  <docs-content title='ListItem'>
    <div slot='Overview' v-html='overviewContent'></div>
    <div slot='Variants'>
      <docs-code-block title='Default List' :code='defaultCode'>
        <ou-list-item
          primaryText='Alton Lafferty'
          secondaryText='Meeting notes'
          tertiaryText='Today we discussed the importance of a, b, and c in regards to d.'
          metaText='2:42p'>
          <ou-list-actions>
            <ou-list-action-item><i class="ms-Icon ms-Icon--Mail"></i></ou-list-action-item>
            <ou-list-action-item><i class="ms-Icon ms-Icon--Delete"></i></ou-list-action-item>
            <ou-list-action-item><i class="ms-Icon ms-Icon--Flag"></i></ou-list-action-item>
            <ou-list-action-item><i class="ms-Icon ms-Icon--Pinned"></i></ou-list-action-item>
          </ou-list-actions>
        </ou-list-item>
      </docs-code-block>

      <docs-code-block title='Selectable ListItem' :code='selectableCode'>
        <ou-list-item
          is-selectable
          primaryText='Alton Lafferty'
          secondaryText='Meeting notes'
          tertiaryText='Today we discussed the importance of a, b, and c in regards to d.'
          metaText='2:42p'>
          <ou-list-actions>
            <ou-list-action-item><i class="ms-Icon ms-Icon--Mail"></i></ou-list-action-item>
            <ou-list-action-item><i class="ms-Icon ms-Icon--Delete"></i></ou-list-action-item>
            <ou-list-action-item><i class="ms-Icon ms-Icon--Flag"></i></ou-list-action-item>
            <ou-list-action-item><i class="ms-Icon ms-Icon--Pinned"></i></ou-list-action-item>
          </ou-list-actions>
        </ou-list-item>
      </docs-code-block>

      <docs-code-block title='Selected ListItem' :code='selectedCode'>
        <ou-list-item
          is-selectable
          primaryText='Alton Lafferty'
          secondaryText='Meeting notes'
          tertiaryText='Today we discussed the importance of a, b, and c in regards to d.'
          metaText='2:42p'
          v-model='checked'>
          <ou-list-actions>
            <ou-list-action-item><i class="ms-Icon ms-Icon--Mail"></i></ou-list-action-item>
            <ou-list-action-item><i class="ms-Icon ms-Icon--Delete"></i></ou-list-action-item>
            <ou-list-action-item><i class="ms-Icon ms-Icon--Flag"></i></ou-list-action-item>
            <ou-list-action-item><i class="ms-Icon ms-Icon--Pinned"></i></ou-list-action-item>
          </ou-list-actions>
        </ou-list-item>
      </docs-code-block>

      <docs-code-block title='Unseen ListItem' :code='unseenCode'>
        <ou-list-item
          is-unseen
          primaryText='Alton Lafferty'
          secondaryText='Meeting notes'
          tertiaryText='Today we discussed the importance of a, b, and c in regards to d.'
          metaText='2:42p'>
          <ou-list-actions>
            <ou-list-action-item><i class="ms-Icon ms-Icon--Mail"></i></ou-list-action-item>
            <ou-list-action-item><i class="ms-Icon ms-Icon--Delete"></i></ou-list-action-item>
            <ou-list-action-item><i class="ms-Icon ms-Icon--Flag"></i></ou-list-action-item>
            <ou-list-action-item><i class="ms-Icon ms-Icon--Pinned"></i></ou-list-action-item>
          </ou-list-actions>
        </ou-list-item>
      </docs-code-block>

      <docs-code-block title='Unread ListItem' :code='unreadCode'>
        <ou-list-item
          is-unread
          primaryText='Alton Lafferty'
          secondaryText='Meeting notes'
          tertiaryText='Today we discussed the importance of a, b, and c in regards to d.'
          metaText='2:42p'>
          <ou-list-actions>
            <ou-list-action-item><i class="ms-Icon ms-Icon--Mail"></i></ou-list-action-item>
            <ou-list-action-item><i class="ms-Icon ms-Icon--Delete"></i></ou-list-action-item>
            <ou-list-action-item><i class="ms-Icon ms-Icon--Flag"></i></ou-list-action-item>
            <ou-list-action-item><i class="ms-Icon ms-Icon--Pinned"></i></ou-list-action-item>
          </ou-list-actions>
        </ou-list-item>
      </docs-code-block>

    </div>
  </docs-content>
</template>
<script>
  import overviewContent from '../markdown/listitem/overview.md';
  import defaultCode from '../markdown/listitem/defaultCode.md';
  import selectableCode from '../markdown/listitem/selectableCode.md';
  import selectedCode from '../markdown/listitem/selectedCode.md';
  import unreadCode from '../markdown/listitem/unreadCode.md';
  import unseenCode from '../markdown/listitem/unseenCode.md';

  export default {
    data() {
      return {
        overviewContent,
        checked: true,
        defaultCode,
        selectableCode,
        selectedCode,
        unreadCode,
        unseenCode,
      };
    }
  };
</script>
