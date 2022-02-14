<template>

  <Layout classPrefix="layout">
<!--        {{ recordList }}-->
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Tabs :data-source="recordtypelist"
          :value.sync="record.type"/>

    <div class="notes">
      <Formitem field-name="备注"
                placeholder="在这里输入备注"
                @update:value="onUpdateNotes"
      />
    </div>
    <Tags/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';

import Formitem from '@/components/Money/Formitem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Money/Tabs.vue';
import recordtypelist from '@/constants/recordtypelist';
@Component({
  components: {Tabs, Tags, Formitem, NumberPad},
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  recordtypelist = recordtypelist;

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
.notes {
  padding: 12px 0;
}
</style>

