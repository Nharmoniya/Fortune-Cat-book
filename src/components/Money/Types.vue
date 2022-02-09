<template>
  <!--支出收入-->
  <div>
    <ul class="types">
      <li :class="value === '-' && 'selected'"
          @click="selectType('-')">支出
      </li>
      <li :class="value === '+' && 'selected'"
          @click="selectType('+')">收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
//TS的优点：
//1.自动提示更智能
//2.你不能随便写 .tostring()
//3.编译报错，无法变成JS更严谨
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  //prop一个外部数据type
  @Prop() readonly value!:string;
  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    //emit一个事件update:value
    this.$emit('update:value',type)
  }
}
</script>


<style lang="scss" scoped>
//第三部分
.types {
  background: #E4E7ED;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #78BBFF;
    }
  }
}
</style>