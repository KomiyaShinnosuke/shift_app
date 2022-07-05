<template>
  <div class="setting-page">
    <section class="navigation-area">
      <div>
        <div class="top-bar">全般</div>
        <div class="sub-bars">
          <p class="sub-bar" @click="handleScrollWindow('section1')">店舗情報の設定</p>
          <p class="sub-bar" @click="handleScrollWindow('section2')">シフト自動調整機能の設定</p>
          <p class="sub-bar" @click="handleScrollWindow('section3')">シフト人数の設定</p>
          <p class="sub-bar" @click="handleScrollWindow('section4')">クラス設定</p>
        </div>
      </div>
      <div>
        <div class="top-bar" @click="handleScrollWindow('section5')">メンバーの設定</div>
        <div class="sub-bars">
          <p class="sub-bar">メンバーの検索</p>
          <p class="sub-bar" @click="handleScrollWindow('section6')">メンバーの新規追加</p>
          <p class="sub-bar">メンバー1</p>
          <p class="sub-bar">メンバー2</p>
          <p class="sub-bar">メンバー3</p>
          <p class="sub-bar">メンバー4</p>
          <p class="sub-bar">メンバー5</p>
          <p class="sub-bar">メンバー6</p>
        </div>
      </div>
    </section>
    <section class="contents-area">
      <h1 class="subject">全般</h1>
      <div id="section1" class="content">
        <p class="title">店舗情報の設定</p>
        <p>店舗名←【】いらないのでは</p>
        <p>住所</p>
        <p>電話番号</p>
      </div>
      <div id="section2" class="content">
        <p class="title">シフト自動調整機能の設定</p>
        <p>店舗名</p>
        <p>住所</p>
        <p>電話番号</p>
      </div>
      <div id="section3" class="content">
        <p class="title">シフト人数の設定</p>
        <p>店舗名</p>
        <p>住所</p>
        <p>電話番号</p>
      </div>
      <div id="section4" class="content">
        <p class="title">クラス設定</p>
        <p>店舗名</p>
        <p>住所</p>
        <p>電話番号</p>
      </div>
      <h1 class="subject">メンバーの設定</h1>
      <div id="section5" class="content">
        <p class="title">メンバーの新規追加</p>
        中身のUIどうします？
      </div>
      <div id="section6" class="content">
        <p class="title">メンバー1</p>
        <p>名前</p>
        <p>メールアドレス</p>
        <p>クラス</p>
        <p>時給</p>
        <p>カラー</p>
        <p>有効</p>
      </div>
       <div id="section7" class="content">
        <p class="title">メンバー2</p>
        <p>名前</p>
        <p>メールアドレス</p>
        <p>クラス</p>
        <p>時給</p>
        <p>カラー</p>
        <p>有効</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent, ref } from 'vue';
import client from '~/core/api'

export default defineComponent({
  setup() {
    const handleScrollWindow = (elem: string) => {
      const element = document.getElementById(elem);
      const rect = element.getBoundingClientRect();
      const headerHeight = 70;
      const elemtop = rect.top + window.pageYOffset - headerHeight;
      console.log(elemtop)
      document.documentElement.scrollTop = elemtop;
    };
    return {
      handleScrollWindow,
    };
  },
})
</script>

<style lang="scss">
.setting-page {
  display: flex;
  padding: 20px;
  .navigation-area {
    :not(:first-child) {
      margin-top: 16px;
    }
    .top-bar {
      background-color: #C4C4C4;
      border-radius: 8px;
      padding: 8px;
      text-align: left;
      width: 200px;
    }
    .sub-bars {
      direction: rtl; // flexじゃなくて文字の書体をアラビア語に変えた
      height: 180px;
      overflow: auto;
      .sub-bar {
        background-color: #C4C4C4;
        border-radius: 8px;
        margin-top: 12px;
        padding: 4px;
        width: 160px;
      }
    }
  }
  .contents-area {
    padding: 0 40px;
    text-align: center;
    width: 100%;
    .subject {
      font-size: 24px;
      font-weight: bold;
      margin-top: 40px;
    }
    .content {
      border-bottom: 1px solid #a9a9a9;
      margin-top: 40px;
      padding: 12px;
      .title {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
}
</style>
