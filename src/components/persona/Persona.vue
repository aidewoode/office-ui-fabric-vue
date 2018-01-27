<template>
  <div class='ms-Persona' :class='personaClass'>
    <div class='ms-Persona-imageArea'>
      <img class='ms-Persona-image' :src='src' v-if='!initials' />
      <div class='ms-Persona-initials' :class='initialsPersonaClass' v-else>{{ initials.toUpperCase() }}</div>
    </div>
    <div class='ms-Persona-presence' v-if='type'>
      <i class='ms-Persona-presenceIcon ms-Icon' :class='personaIconClass'></i>
    </div>
    <div class='ms-Persona-details'>
      <div class='ms-Persona-primaryText'>{{ primaryText }}</div>
      <div class='ms-Persona-secondaryText'>{{ secondaryText }}</div>
      <div class='ms-Persona-tertiaryText'>{{ tertiaryText }}</div>
      <div class='ms-Persona-optionalText'>{{ optionalText }}</div>
    </div>
  </div>
</template>
<script>
  // Note: The FacePile Persona haven't create
  import size from '../../mixins/props/size';
  import type from '../../mixins/props/type';

  export default {
    name: 'ou-persona',

    mixins: [
      size('tiny', 'xs', 'sm', 'lg', 'xl'),
      type('available', 'away', 'blocked', 'busy', 'dnd', 'offline')
    ],

    data() {
      if (this.initials) {
        const validateColor = [
          'blue',
          'blueLight',
          'blueDark',
          'teal',
          'greenLight',
          'green',
          'greenDark',
          'magentaLight',
          'magenta',
          'purpleLight',
          'purple',
          'black',
          'orange',
          'red',
          'redDark'
        ];

        const initialsLetter = this.initials[0].toUpperCase();
        const initialsIndex = initialsLetter.charCodeAt() - 65;

        // get radom color from validateColor
        return {
          initialsColor: validateColor[Math.round((validateColor.length / 26) * initialsIndex)]
        };
      }

      return { initialsColor: '' };
    },

    props: {
      src: String,
      initials: String,
      primaryText: String,
      secondaryText: String,
      tertiaryText: String,
      optionalText: String
    },

    computed: {
      personaClass() {
        return {
          [`ms-Persona--${this.size}`]: !!this.size,
          [`ms-Persona--${this.type}`]: !!this.type
        };
      },

      initialsPersonaClass() {
        return {
          [`ms-Persona-initials--${this.initialsColor}`]: !!this.initialsColor
        };
      },

      personaIconClass() {
        let icon = '';

        switch (this.type) {
          case 'available':
            icon = 'SkypeCheck';
            break;
          case 'away':
            icon = 'SkypeClock';
            break;
          case 'dnd':
            icon = 'SkypeMinus';
            break;
        }

        if (icon) {
          return `ms-Icon--${icon}`;
        }
      }
    }
  };
</script>
