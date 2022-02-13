<template>

  <Layout classPrefix="layout">
<!--    {{ recordlist }}-->
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Formitem field-name="备注"
           placeholder="在这里输入备注"
           @update:value="OnUpdateNotes"
    />
    <Tags/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Formitem from '@/components/Money/Formitem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';



@Component({
  components: {Tags, Formitem, Types, NumberPad}
})
export default class Money extends Vue {

  get recordList() {
    return this.$store.state.recordList;
  }
  // eslint-disable-next-line no-undef
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };
  created() {
    this.$store.commit('fetchRecords');
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    this.$store.commit('createRecord', this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

