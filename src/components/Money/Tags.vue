<template>
  <!--标签-->
  <div class="tag">
    <!--现在所拥有的标签-->
    <ul class="current">
      <li>
        衣
        <Icon name="clothe"/>
      </li>
      <li>
        食
        <Icon name="food"/>
      </li>
      <li>
        住
        <Icon name="house"/>
      </li>
      <li>
        行
        <Icon name="bicycle"/>
      </li>
    </ul>
    <!--新增标签-->
    <div class="new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Tags'
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

//第一部分
.tag {
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;

  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      background: #d9d9d9;
      $h:24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;

    }
  }

  > .new {
    padding-top: 16px;
    margin-bottom: 6px;

    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}

</style>