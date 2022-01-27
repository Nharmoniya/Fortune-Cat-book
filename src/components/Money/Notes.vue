<template>
  <!--备注-->
  <div class="notes">
    <label class="notes-label">
      <span class="name"><strong>备注:</strong></span>
      <input type="text" placeholder="在这里添加备注">
    </label>
  </div>
</template>

<script>
export default {
  name: 'Notes'
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";
//第二部分
.notes {
  font-size: 14px;
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}

</style>