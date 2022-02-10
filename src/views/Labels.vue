<template>
  <Layout>
    <div class="tags">
     <router-link
         class="tag"
         v-for="tag in tags" :key="tag.id"
         :to="`/labels/edit/${tag.id}`">
       <span>{{tag.name}}</span>
       <Icon name="right"/>
     </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag"
              @click="createTag">
        新建标签
      </Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {taglistmodel} from '@/models/taglistmodel';

taglistmodel.fetch();

@Component({})
export default class Labels extends Vue {
  tags = taglistmodel.data;

  createTag() {
    const name = window.prompt('请输入标签名');
    if (name) {
      const message = taglistmodel.create(name);
      if (message === 'duplicated') {
        window.alert('标签名重复了');
      } else if (message === 'success') {
        window.alert('添加成功');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags{
  background: #F2F6FC;
  font-size: 16px;
  padding-left: 16px;

  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;

    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}

.createTag {
  background: #409EFF;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;

  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>