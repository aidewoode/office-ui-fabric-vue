<template>
  <div>
    <div class='header ms-bgColor-green'>
      <div class='header__title ms-fontColor-white ms-fontWeight-light'>{{ title }}</div>
      <ul class='header__nav' v-if='hasNav'>
        <li v-for='navItem of navItems'>
          <a class='header__nav--item ms-fontColor-white ms-fontSize-l ms-fontWeight-semilight ms-fontWeight-semibold--hover'
            :data-title='navItem'
            v-scroll-to="{ el: '#' + navItem, offset: -100 }">
            {{ navItem }}
          </a>
        </li>
      </ul>
    </div>
    <div>
      <div class='content' v-if='!hasNav'>
        <slot></slot>
      </div>
      <div v-else>
        <div class='content' v-for='navItem of navItems'>
          <h2 :id='navItem' class='content__title ms-fontWeight-light'>{{ navItem }}</h2>
          <div :class="navItem.toLowerCase() + '_content'">
            <slot :name='navItem'></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .header {
    padding: 0 40px 15px;
  }

  .header__title {
    padding: 90px 0 40px 0;
    font-size: 72px;
    word-wrap: break-word;
  }

  .header__nav {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-left: 10px;
  }

  .header__nav li {
    display: flex;
  }

  .header__nav--item {
    display: inline-block;
    text-decoration: none;
    margin-right: 28px;
    cursor: pointer;
    text-align: center;
  }

  .header__nav--item:hover {
    font-weight: 600;
  }

  .header__nav--item:after {
    color: transparent;
    content: attr(data-title);
    display: block;
    height: 1px;
    font-weight: 900;
  }

  .content {
    padding: 50px;
  }

  .content:nth-child(even) {
    background: #fff;
  }

  .content__title {
    margin: 10px 0 24px;
    font-size: 36px;
  }

  @media (max-width: 479px) {
    .header {
      padding: 0 20px 15px;
    }

    .header__nav {
      margin-left: 3px;
    }

    .header__nav--item {
      font-size: 14px;
      margin-right: 17px;
    }

    .header__title {
      font-size: 28px;
      padding: 50px 0 20px 0;
    }

    .content {
      padding: 20px;
    }

    .content__title {
      font-size: 21px;
      margin-bottom: 10px;
    }
  }

  @media (min-width: 480px) and (max-width: 639px) {
    .header {
      padding: 0 25px 15px;
    }

    .header__nav {
      margin-left: 4px;
    }

    .header__nav--item {
      font-size: 14px;
      margin-right: 20px;
    }

    .header__title {
      font-size: 32px;
      padding: 60px 0 30px 0;
    }

    .content {
      padding: 25px;
    }

    .content__title {
      font-size: 21px;
      margin-bottom: 10px;
    }
  }

  @media (min-width: 640px) and (max-width: 1023px) {
    .header__title {
      font-size: 52px;
      padding-top: 70px;
    }
  }
</style>
<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },

      hasNav: {
        type: Boolean,
        default: true
      }
    },

    data() {
      return {
        navItems: ['Overview', 'Variants', 'Implementation']
      };
    }
  };
</script>
