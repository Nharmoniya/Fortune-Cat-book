<template>
  <!--备注-->
  <div class="notes">
    <label class="notes-label">
      <span class="name"><strong>{{this.fieldName}}</strong></span>
      <input type="text"
             :value="value"
             @input="OnValueChanged($event.target.value)"
             :placeholder="this.placeholder">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop,Watch} from 'vue-property-decorator';

@Component
export default class Formitem extends Vue {
  @Prop({default:''})readonly value!:string;//声明一个数据value
  @Prop({required:true})fieldName!:string;
  @Prop({default:''})placeholder!:string;
//使用watch监听value的变化，当value变化了就触发一个OnValueChanged方法，然后发送一个指令update：value
  @Watch('value')
  OnValueChanged(value: string) {
    this.$emit('update:value', value);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";
//第二部分
.notes {
  font-size: 14px;
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    width: 250px;
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}

</style>