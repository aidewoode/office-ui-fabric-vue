<template>
  <div class='ms-CommandBar' ref='commandBar'>
    <div class='ms-CommandBar-sideCommands'>
      <slot name='side' />
    </div>
    <div class='ms-CommandBar-mainArea'>
      <slot name='main' />
      <div class='ms-CommandButton ms-CommandBar-overflowButton ms-CommandButton--noLabel'>
        <button class='ms-CommandButton-button'>
          <span class='ms-CommandButton-icon'><i class='ms-Icon ms-Icon--More'></i></span>
          <span class='ms-CommandButton-label'></span>
        </button>
        <ul class='ms-ContextualMenu is-opened ms-ContextualMenu--hasIcons'>
          <li class='ms-ContextualMenu-item'>
            <a class='ms-ContextualMenu-link'></a>
            <i class='ms-Icon ms-Icon--folder'></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    mounted() {
      new fabric.CommandBar(this.$refs.commandBar);
    }
  };
</script>
