<template>
  <docs-content title='OrgChart'>
    <div slot='Overview' v-html='overviewContent'></div>
    <div slot='Variants'>
      <docs-code-block title='Default OrgChart' :code='defaultCode'>
        <ou-org-chart>
          <ou-org-chart-group>
            <ou-org-chart-group-item>
              <ou-persona src='docs/assets/img/avatar.png' primaryText='Russel Miller' secondaryText='Sales' />
            </ou-org-chart-group-item>
            <ou-org-chart-group-item>
              <ou-persona src='docs/assets/img/avatar.png' primaryText='Douglas Fielder' secondaryText='Public Relations' />
            </ou-org-chart-group-item>
          </ou-org-chart-group>
          <ou-org-chart-group title='Manager'>
            <ou-org-chart-group-item>
              <ou-persona src='docs/assets/img/avatar.png' primaryText='Grant Steel' secondaryText='Sales' />
            </ou-org-chart-group-item>
          </ou-org-chart-group>
          <ou-org-chart-group title='Staff'>
            <ou-org-chart-group-item>
              <ou-persona src='docs/assets/img/avatar.png' primaryText='Harvey Wallin' secondaryText='Public Relations' />
            </ou-org-chart-group-item>
          </ou-org-chart-group>
        </ou-org-chart>
      </docs-code-block>
    </div>
    <div slot='Implementation'>
      <docs-table type='props' :data='orgChartGroupProps' name='OrgChartGroup' />
      <docs-table type='events' :data='orgChartGroupItemEvents' name='OrgChartGroupItem' />
    </div>
  </docs-content>
</template>
<script>
  import overviewContent from '../markdown/org_chart/overview.md';
  import defaultCode from '../markdown/org_chart/defaultCode.md';

  export default {
    data() {
      return {
        overviewContent,
        defaultCode,
        orgChartGroupProps: [
          { name: 'title', type: 'String', required: 'false', description: 'the title of the org chart group' }
        ],
        orgChartGroupItemEvents: [
          { name: 'click', description: 'the callback function when clicked the org chart group item' }
        ]
      };
    }
  };
</script>
