<template>
  <div class="setting-page">
    <section class="navigation-area">
      <div>
        <div class="top-bar">全般</div>
        <div class="sub-bars">
          <p class="sub-bar">店舗情報の設定</p>
          <p class="sub-bar">自動調整の設定</p>
          <p class="sub-bar">詳細設定</p>
        </div>
      </div>
      <div>
        <div class="top-bar">メンバーの設定</div>
        <div class="sub-bars">
          <p class="sub-bar">メンバーの検索</p>
          <p class="sub-bar">メンバーの新規追加</p>
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
      <div class="content">
        <p class="title">店舗情報の設定</p>
        <p>店舗名←【】いらないのでは</p>
        <p>住所</p>
        <p>電話番号</p>
      </div>
      <div class="content">
        <p class="title">シフト自動調整機能の設定</p>
        <p>店舗名</p>
        <p>住所</p>
        <p>電話番号</p>
      </div>
       <div class="content">
        <p class="title">クラス設定</p>
        <p>店舗名</p>
        <p>住所</p>
        <p>電話番号</p>
      </div>
      <h1 class="subject">メンバーの設定</h1>
      <div class="content">
        <p class="title">メンバーの新規追加</p>
        中身のUIどうします？
      </div>
      <div class="content">
        <p class="title">メンバー1</p>
        <p>名前</p>
        <p>メールアドレス</p>
        <p>クラス</p>
        <p>時給</p>
        <p>カラー</p>
        <p>有効</p>
      </div>
       <div class="content" id="メンバー2">
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
import { InputWithLabel } from '@/components/atoms/Input'
import { PrimaryButton } from '@/components/atoms/Button'
import client from '~/core/api'

export default defineComponent({
  // components: { InputWithLabel, PrimaryButton },
  // setup() {
  //   const email = ref<string>('');
  //   const password = ref<string>('');
  //   const handleInput = (data: string, type: string) => {
  //     switch(type) {
  //       case 'email': {
  //         email.value = data
  //         break
  //       }
  //       case 'password': {
  //         password.value = data
  //         break
  //       }
  //       default:
  //         return
  //     }
  //   };
  //   const onClick = () => {
  //     const params = new URLSearchParams();
  //     params.append('username', 'test@example.com');
  //     params.append('password', 'test');
  //     client.post('http://0.0.0.0:8000/token', params)
  //       .then(res => console.log(res))
  //   }
  //   return {
  //     handleInput,
  //     onClick,
  //   };
  // },
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
