<template>

  <Layout classPrefix="layout">
    <NumberPad/>
    <Types/>
    <Notes/>
<!--声明一个data-source存储tag，.sync接受$emit的指令，并把接受传回来的值。-->
    <Tags :data-source.sync ="tags"/>
  </Layout>
</template>

<script >
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
export default {
  name: 'Money',
  components: {Tags, Notes, Types, NumberPad},
  data(){
    return{
      //将列表存储在tags数组中
      tags:['服饰','食物','居住','出行','网费','彩票']
    }
  }
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

