<template>
  <div class="logo">
      sdsad
    <!-- <router-link :to="{name:'dashboard'}">
      <h1 v-if="showTitle">{{ title }}</h1>
    </router-link> -->
  </div>
</template>

<script>


export default {
  name: 'Logo',
  props: {
    title: {
      type: String,
      default: 'BLUE PLAN',
      required: false
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    }
  }
}
</script>
