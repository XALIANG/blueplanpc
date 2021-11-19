<template>
  <a-layout>
    <Draggable v-model="list" tag="div" ghostClass="dr-placeholder" handle=".dr-mover" :list="list" @add="addCommand" group="site" animation="300">
      <template>
        <div class="content">{{ list }}</div>
      </template>
    </Draggable>
  </a-layout>
</template>
<script>
import Draggable from 'vuedraggable';
export default {
  name: "container",
  props: {
    selector: Object,
    list: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      data: []
    };
  },
  watch: {

  },
  name: 'container',
  components: {
    Draggable
  },
  methods: {
    addCommand(e) {
      console.log("fanssssssssssssg", e)
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  height: 300px;
  border: 1px solid red;
}
</style>
