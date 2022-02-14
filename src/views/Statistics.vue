<template>
    <Layout>
      <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
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
import Types from '@/components/Money/Types.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component({
  components: {Tabs, Types},
})

export default class Statistics extends Vue {
  type = '-';
  interval ='day';
  intervalList=[
    {text:'按天',value:'day'},
    {text:'按周',value:'week'},
    {text:'按月',value:'month'},
  ];
  typeList=[
    {text:'支出',value:'-'},
    {text:'收入',value:'+'},
  ]
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