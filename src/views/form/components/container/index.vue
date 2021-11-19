<template>
  <a-layout>
    <draggable tag="div" ghostClass="dr-placeholder" handle=".dr-mover" :list="data" group="viewer" animation="300">
      <template> </template>
    </draggable>
  </a-layout>
</template>
<script>
import draggable from 'vuedraggable';
export default {
  data() {
    return {
      data: []
    };
  },
  name: 'container',
  components: {
    draggable
  },
  methods: {}
};
</script>

<style lang="csss" scoped></style>
