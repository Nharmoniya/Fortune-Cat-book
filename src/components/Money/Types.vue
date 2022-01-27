<template>
  <!--支出收入-->
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected'"
          @click="selectType('-')">支出
      </li>
      <li :class="type === '+' && 'selected'"
          @click="selectType('+')">收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
@Component
export default class Types extends Vue {
  type = '-'; // '-'表示支出，'+'表示收入
  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.type = type;
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