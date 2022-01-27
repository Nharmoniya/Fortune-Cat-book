<template>
  <div>
    <layout>
      <!--标签-->
      <div class="tag">
        <!--现在所拥有的标签-->
        <ul class="current">
          <li>
            <Icon name="clothe"/>
          </li>
          <li>
            <Icon name="food"/>
          </li>
          <li>
            <Icon name="house"/>
          </li>
          <li>
            <Icon name="bicycle"/>
          </li>
        </ul>
        <!--新增标签-->
        <div class="new">
          <button>新增标签</button>
        </div>
      </div>
      <!--备注-->
      <div class="notes">
        <label class="notes-label">
          <span class="name">备注</span>
          <input type="text">
        </label>
      </div>
      <!--支出收入-->
      <div class="type">
        <ul class="types">
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>
      <!--数字板-->
      <div class="pad">
        <div class="sumpad">100</div>
        <div class="numberpad">
          <buttton>1</buttton>
          <buttton>2</buttton>
          <buttton>3</buttton>
          <buttton>删除</buttton>
          <buttton>4</buttton>
          <buttton>5</buttton>
          <buttton>6</buttton>
          <buttton>清空</buttton>
          <buttton>7</buttton>
          <buttton>8</buttton>
          <buttton>9</buttton>
          <buttton>OK</buttton>
          <buttton>.</buttton>
          <buttton>%</buttton>
        </div>
      </div>
    </layout>
  </div>
</template>

<script>
export default {
  name: 'Money',
};
</script>

