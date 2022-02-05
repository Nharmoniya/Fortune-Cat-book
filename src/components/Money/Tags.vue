<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
<!--v-for循环把tag从datasource中取出；class绑定selected；click绑定一个事件toggle（开关）-->
      <li v-for="tag in dataSource" :key="tag"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{tag}}
      </li>
    </ul>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
@Component
export default class Tags extends Vue {
  //prop接受一个外部数据，dataSource，字符串类型或者undefined
  @Prop() readonly dataSource: string[] | undefined;
  selectedTags: string[] = [];
  //声明一个方法名为toggle（开关），接受tag参数为string
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
  }
  //create方法，新增标签
  create(){
    const name = window.prompt('请输入标签名');
    if(name===''){
      window.alert('标签名不能为空')
    }
    else if(this.dataSource){
      //emit通知money进行更改，'update：dataSource'为函数名，[..this.dataSource,name],就是把前面展开，把name放在dataSource后面
      this.$emit('update:dataSource',[...this.dataSource,name]);
    }

  }

  // create() {
  //   //声明一个变量用来存储弹窗输入的标签名
  //   const name = window.prompt('请输入标签名');
  //   //如果名字为空则报错，标签名不能为空
  //   if (name === '') {
  //     window.alert('标签名不能为空');
  //     //否则的话，dataSource传参数，update=name
  //   } else if (this.dataSource) {
  //     this.$emit('update:dataSource',
  //         [...this.dataSource, name]);
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;

  > .current {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    > li {
      $bg: #d9d9d9;
      background: $bg;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-left: 12px;
      margin-top: 6px;
      margin-right: -2px;
      &.selected {
        background: darken($bg, 50%);
        color: white;
      }
    }
  }

  > .new {
    padding-top: 16px;
    button {
      font-size: 18px;
      background: transparent;
      border: none;
      color: #409EFF;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }

}
</style>