<template>
  <layout>
    <div>
      <Icon name="left"/>
      <span>编辑标签</span>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {taglistmodel} from '@/models/taglistmodel';

@Component
export default class EditLabel extends Vue{
  created(){
    const id = this.$route.params.id
    taglistmodel.fetch();
    const tags = taglistmodel.data;
    const tag = tags.filter(t => t.id === id)[0]
    if (tag){
      console.log(tag);
    }else{
      this.$router.replace('/404');
    }
  }
}

</script>

<style lang="scss" scoped>

</style>