<template>
    <Layout>
      <Tabs class-prefix="type" :data-source="recordtypelist" :value.sync="type"/>
      <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
      <div>
        type:{{type}}
        <br>
        interval:{{interval}}
      </div>
    </Layout>
</template>

<script lang="ts">
import Tabs from '@/components/Money/Tabs.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import intervalList from '@/constants/intervalList';
import recordtypelist from '@/constants/recordtypelist';

@Component({
  components: {Tabs},
})

export default class Statistics extends Vue {
  type = '-';
  interval ='day';
  intervalList=intervalList;
  recordtypelist=recordtypelist;
}
</script>

<style lang="scss" scoped>
//v-deep可以在当前页面修改组件的css，并且v-deep兼容性最强可以被scss认出来
  ::v-deep .type-tabs-item {
  background: white;

  &.selected {
    background: #E4E7ED;

    &::after {
      display: none;
    }
  }
}
</style>