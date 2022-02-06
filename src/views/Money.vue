<template>

  <Layout classPrefix="layout">
    {{record}}
    <NumberPad @update:value="OnUpdateAmount"/>
    <Types @update:value="OnUpdateTypes"/>
    <!--    声明一个updatexxx事件让types里面的值传出去-->
    <Notes @update:value="OnUpdateNotes"/>
    <!--    声明一个updatexxx事件让notes里面的值传出去-->
    <!--声明一个data-source存储tag，.sync接受$emit的指令，并把接受传回来的值。-->
    <Tags :data-source.sync="tags" @update:selected="OnUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';

//声明一个类型，里面记录tags，notes，type，amount的类型;注意string[]是字符串数组的意思
type Record = {
  tags: string[],
  notes: string,
  type: string,
  amount: number
}


@Component({
  components: {Tags, Notes, Types, NumberPad}
})
export default class Money extends Vue {
  //将列表存储在tags数组中
  tags = ['服饰', '食物', '居住', '出行', '网费', '彩票'];
  record: Record = {tags: [], notes: '', type: '', amount: 0};

  //声明一个方法，接受zzz（为string的字符串）
  OnUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  OnUpdateNotes(value: string) {
    this.record.notes=value;
  }

  OnUpdateTypes(value: string) {
    this.record.type=value;
  }

  OnUpdateAmount(value: string) {
    //parseFloat可以把字符串转换成float的number类型
    this.record.amount=parseFloat(value);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

