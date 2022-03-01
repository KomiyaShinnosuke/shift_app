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
          <p class="sub-bar">todo...</p>
          <p class="sub-bar">todo...</p>
          <p class="sub-bar">todo...</p>
          <p class="sub-bar">todo...</p>
          <p class="sub-bar">todo...</p>
          <p class="sub-bar">todo...</p>
        </div>
      </div>
    </section>
    <section class="contents-area">
      <div>
        TODO
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
      // align-items: flex-end;
      // display: flex;
      // flex-direction: column;
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
}
</style>
