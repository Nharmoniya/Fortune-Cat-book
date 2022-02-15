<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordtypelist" :value.sync="type"/>
    <ol v-if="groupedList.length>0">
      <li v-for="(group, index) in groupedList" :key="index">
        <h3 class="title">{{beautify(group.title)}} <span>{{type}}￥{{group.total}}</span></h3>
        <ol>
          <li v-for="item in group.items" :key="item.id"
              class="record"
          >
            <span>{{tagString(item.tags)}}</span>
            <span class="notes">{{item.notes}}</span>
            <span>{{type}}￥{{item.amount}} </span>
          </li>
        </ol>
      </li>
    </ol>
    <div v-else class="noResult">
      目前没有相关记录
    </div>
  </Layout>
</template>

<script lang="ts">
import Tabs from '@/components/Money/Tabs.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import recordtypelist from '@/constants/recordtypelist';
import clone from '@/lib/clone';
import dayjs from 'dayjs';

@Component({
  components: {Tabs},
})

export default class Statistics extends Vue {
  // eslint-disable-next-line no-undef
  tagString(tags: Tag[]) {
    return tags.length === 0 ? '无' :
        tags.map(t=>t.name).join(',');
  }

  beautify(string: string) {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(now, 'day')) {
      return '今天';
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      console.log('hi');
      return '昨天';
    } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (day.isSame(now, 'year')) {
      return day.format('M月D日');
    } else {
      return day.format('YYYY年M月D日');
    }
  }

  get recordList() {
    // eslint-disable-next-line no-undef
    return (this.$store.state as RootState).recordList;
  }

  get groupedList() {
    const {recordList} = this;
    if (recordList.length === 0) {return [];}
    const newList = clone(recordList)
        .filter(r => r.type === this.type)
        .sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
    if (newList.length===0){return [];}
    // eslint-disable-next-line no-undef
    type Result = { title: string, total?: number, items: RecordItem[] }[]
    const result: Result = [{title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'), items: [newList[0]]}];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
        last.items.push(current);
      } else {
        result.push({title: dayjs(current.createdAt).format('YYYY-MM-DD'), items: [current]});
      }
    }
    result.map(group => {
      group.total = group.items.reduce((sum, item) => {
        return sum + item.amount;
      }, 0);
    });
    return result;
  }

  beforeCreate() {
    this.$store.commit('fetchRecords');
  }

  type = '-';
  recordtypelist = recordtypelist;
}
</script>

<style lang="scss" scoped>
.noResult {
  padding: 16px;
  text-align: center;
}
//v-deep可以在当前页面修改组件的css，并且v-deep兼容性最强可以被scss认出来
::v-deep {
  .type-tabs-item {
    background: white;

    &.selected {
      background: #E4E7ED;

      &::after {
        display: none;
      }
    }
  }

  .interval-tabs-item {
    height: 48px;
  }
}

%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.title {
  @extend %item;
}

.record {
  background: white;
  @extend %item;
}

.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}

</style>