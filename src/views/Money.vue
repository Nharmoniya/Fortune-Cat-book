<template>

  <Layout classPrefix="layout">
<!--    {{ recordlist }}-->
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <!--    声明一个updatexxx事件让types里面的值传出去-->
    <Formitem field-name="备注"
           placeholder="在这里输入备注"
           @update:value="OnUpdateNotes"/>
    <!--    声明一个updatexxx事件让notes里面的值传出去-->
    <!--声明一个data-source存储tag，.sync接受$emit的指令，并把接受传回来的值。-->
    <Tags :data-source.sync="tags" @update:selected="OnUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Formitem from '@/components/Money/Formitem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';
import {recordlistmodel} from '@/models/recordlistmodel';
import {taglistmodel} from '@/models/taglistmodel';

//由于我们已经把recordlist存入了localstorage中，所以需要把他指向localstorage中，然后可能为空所以还要||'[]'
const recordlist= recordlistmodel.fetch();
const tagList = taglistmodel.fetch();

type RecordItem = {
  tags: string[],
  notes: string,
  type: string,
  amount: number,
  createdAt?: Date  // 类 / 构造函数
}




@Component({
  components: {Tags, Formitem, Types, NumberPad}
})
export default class Money extends Vue {
  //将列表存储在tags数组中
  tags = tagList;
  recordlist: RecordItem[] = recordlist;
  record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

  //声明一个方法，接受zzz（为string的字符串）
  OnUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  OnUpdateNotes(value: string) {
    this.record.notes = value;
  }


  OnUpdateAmount(value: string) {
    //parseFloat可以把字符串转换成float的number类型
    this.record.amount = value;
  }

  saveRecord() {
    // 声明一个deepclone
    const deepClone: RecordItem = recordlistmodel.clone(this.record)
    deepClone.createdAt=new Date();
    //把深拷贝的数据push进入recordlist
    this.recordlist.push(deepClone);
  }

  @Watch('recordlist')
  OnRecordListChange() {
    recordlistmodel.save(this.recordlist);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

