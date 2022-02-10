<template>
  <layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
    <Formitem :value="tag.name"
              field-name="标签名"
              placeholder="请输入标签名"/>
    </div>
    <div class="button-wrapper">
    <Button @click="remove">删除</Button>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {taglistmodel} from '@/models/taglistmodel';
import Formitem from '@/components/Money/Formitem.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, Formitem}
})
export default class EditLabel extends Vue {
  tag?:{id:string,name:string}=undefined
  created() {
    const id = this.$route.params.id;
    taglistmodel.fetch();
    const tags = taglistmodel.data;
    const tag = tags.filter(t => t.id === id)[0];
    if (tag) {
      this.tag = tag;
    } else {
      this.$router.replace('/404');
    }
  }
  remove(){

    if (this.tag) {
      if (taglistmodel.remove(this.tag.id)) {
        this.$router.back();
      } else {
        window.alert('删除失败');
      }
    }
  }
  goBack(){
    this.$router.back();
  }
}

</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .title {
  }
  > .leftIcon {
    width: 24px;
    height: 24px;
  }
  > .rightIcon {
    width: 24px;
    height: 24px;
  }
}
.form-wrapper {
  background: white;
  margin-top: 8px;
}
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>