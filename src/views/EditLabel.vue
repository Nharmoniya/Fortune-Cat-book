<template>
  <layout>
    <div>
      <Icon name="left"/>
      <span>编辑标签</span>
    </div>
    <Formitem field-name="标签名" placeholder="请输入标签名"/>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {taglistmodel} from '@/models/taglistmodel';
import Formitem from '@/components/Money/Formitem.vue';

@Component({
  components: {Formitem}
})
export default class EditLabel extends Vue {
  created() {
    const id = this.$route.params.id;
    taglistmodel.fetch();
    const tags = taglistmodel.data;
    const tag = tags.filter(t => t.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace('/404');
    }
  }
}

</script>

<style lang="scss" scoped>

</style>