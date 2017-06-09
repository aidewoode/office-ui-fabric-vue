<template>
<div class='container'>
  <ul class='items'>
    <li class='item ms-fontWeight-semibold ms-fontSize-xl'>
      <router-link class='ms-fontColor-neutralPrimary ms-fontColor-neutralDark--hover' to='/'>Fabric Vue</router-link>
    </li>
    <li class='item ms-fontSize-l ms-fontWeight-light'>
      <router-link class='ms-fontColor-neutralSecondary ms-fontColor-neutralDark--hover nav_link' to='/GetStarted'>Get Started</router-link>
    </li>
    <li class='item ms-fontSize-l ms-fontWeight-light'>
      <router-link class='ms-fontColor-neutralSecondary ms-fontColor-neutralDark--hover nav_link' to='/components'>
        <span @click.prevent.stop='toggleSubNav'>Components</span>
      </router-link>
      <ul class='items items__submenu' v-if='subNavIsOpen'>
        <li class='item ms-fontSize-m ms-fontWeight-regular' v-for='componentName of allComponentsName'>
          <router-link class='ms-fontColor-neutralSecondary ms-fontColor-neutralPrimary--hover nav_link--sub' :to="'/components/' + componentName">{{ componentName }}</router-link>
        </li>
      </ul>
    </li>
  </ul>
</div>
</template>
<style scoped>
.container {
  padding: 20px 12px 20px 36px;
}

.items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item {
  margin-bottom: 20px;
}

.item a {
  text-decoration: none;
}

.items__submenu {
  margin-left: 8px;
  margin-top: 20px;
}

.nav_link {
  display: flex;
  align-items: center;
}

.nav_link.router-link-active {
  color: #212121;
}

.nav_link.router-link-active:before {
  content: '';
  position: absolute;
  left: 20px;
  width: 2px;
  height: 20px;
  background: #107c10;
}

.nav_link--sub.router-link-active {
  color: #333;
}
</style>
<script>
import AllUIComponents from '../ui-components';

export default {
  data() {
    const allComponentsName = Object.keys(AllUIComponents);
    const subNavIsOpen = this.$route.path.split('/').includes('components');

    return {
      allComponentsName,
      subNavIsOpen
    };
  },

  methods: {
    toggleSubNav() {
      this.subNavIsOpen = !this.subNavIsOpen;
    }
  }
};
</script>
