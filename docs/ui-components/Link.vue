<template>
<docs-content title='Link'>
  <div slot='Overview'>
    <p>
      With a Link, users can navigate to another page, window, or Help topic; display a definition; initiate a command; or choose an option. A Link indicates that it can be clicked, typically by being displayed using the visited or unvisited link system colors. Traditionally, Links are underlined as well, but that approach is often unnecessary and falling out of favor to reduce visual clutter.
    </p>
    <p>
      A Link is the lightest weight clickable control, and is often used to reduce the visual complexity of a design.
    </p>
  </div>
  <div slot='Variants'>
    <docs-code-block title='Default Link' :code='defaultLinkCode'>
      <ou-link href='#' title='More info about Example Link'>Example Link</ou-link>
    </docs-code-block>
  </div>
  <div slot='Implementation'>
    <docs-props-table :data='linkProps' name='Link' />
    <docs-events-table :data='linkEvents' name='Link' />
  </div>
</docs-content>
</template>
<script>
export default {
  data() {
    return {
      defaultLinkCode: "<ou-link href='#' title='More info about Example Link'>Example Link</ou-link>",
      linkProps: [
        { name: 'href', type: 'String', required: 'false', acceptedValue: '--', defaultValue: '--', description: 'the url of the link' },
        { name: 'title', type: 'String', required: 'false', acceptedValue: '--', defaultValue: '--', description: 'the title of the link' }
      ],
      linkEvents: [
        { name: 'click', params: '--', description: 'the callback function when clicked' }
      ]
    };
  }
};
</script>
