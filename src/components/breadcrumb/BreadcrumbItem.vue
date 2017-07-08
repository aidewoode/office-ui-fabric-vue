<template>
  <li class='ms-Breadcrumb-listItem'>
    <a :href='href' class='ms-Breadcrumb-itemLink'>
      <slot />
    </a>
    <i class='ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight'></i>
  </li>
</template>
<script>
export default {
  props: {
    href: String
  }
};
</script>
