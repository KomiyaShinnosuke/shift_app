<template>
  <div class="setting-page">
    <section class="navigation-area">
      <div>
        <div class="top-bar">全般</div>
        <div class="sub-bars">
          <p class="sub-bar" @click="handleScrollWindow('section1')">店舗情報の設定</p>
          <p class="sub-bar" @click="handleScrollWindow('section2')">自動調整機能の設定</p>
          <p class="sub-bar" @click="handleScrollWindow('section3')">シフトパターンの設定</p>
          <p class="sub-bar" @click="handleScrollWindow('section4')">シフト人数の設定</p>
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
        <!-- <InputWithLabel2 label="【店舗名】" width="320px" :value="myCompany.name" @input="handleInput($event, 'email')" /> -->
        <InputWithLabel2 label="【住所】" width="320px" value="aaa" @input="handleInput($event, 'email')" />
        <InputWithLabel2 label="【電話番号】" width="320px" value="aaa" @input="handleInput($event, 'email')" />
        <InputWithLabel2 label="【営業時間】" width="320px" value="aaa" @input="handleInput($event, 'email')" />
        <p class="row">【ライセンス数】</p>
        <p class="row">【有効化アカウント】</p>
      </div>
      <div id="section2" class="content">
        <p class="title">自動調整の設定</p>
        <Checkbox label="hoge" />
        <Checkbox label="hoge" />
        <Checkbox label="hoge" />
      </div>
      <div id="section3" class="content">
        <p class="title">シフトパターンの設定</p>
        <p class="row"><TextWithIcon icon="mdi-plus" text="シフトパターンの新規作成" /></p>
        シフトパターンの編集って押したらどうなる？
        <p class="row">作成済みシフトパターン</p>
      </div>
      <div id="section4" class="content">
        <p class="title">シフト人数の設定</p>
        <Table :items="weekDays" />
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
import { defineComponent, computed, onMounted } from 'vue';
import { Checkbox } from '@/components/atoms/Checkbox'
import { InputWithLabel2 } from '@/components/atoms/Input'
import { Table } from '@/components/atoms/Table'
import { TextWithIcon }  from '@/components/molecules/TextWithIcon'
import { useCompaniesStore } from '~/store/companies'
import { DAY_OF_WEEK_STR } from '~/static/calendar'

export default defineComponent({
  components: { Checkbox, InputWithLabel2, Table, TextWithIcon },
  setup() {
    const companiesStore = useCompaniesStore();
    const handleInput = (data: string, type: string) => {
      console.log(777);
    };
    const handleScrollWindow = (elem: string) => {
      const element = document.getElementById(elem);
      const rect = element.getBoundingClientRect();
      const headerHeight = 70;
      const elemtop = rect.top + window.pageYOffset - headerHeight;
      document.documentElement.scrollTop = elemtop;
    };
    const weekDays = [
      {
        label: '',
        shifts: [
          DAY_OF_WEEK_STR[0],
          DAY_OF_WEEK_STR[1],
          DAY_OF_WEEK_STR[2],
          DAY_OF_WEEK_STR[3],
          DAY_OF_WEEK_STR[4],
          DAY_OF_WEEK_STR[5],
          DAY_OF_WEEK_STR[6],
        ]
      },
      {
        label: "ホール",
        shifts: [2, 2, 3, 2, 2, 3, 1]
      },
    ];
    const myCompany = computed(() => {
      return companiesStore.companies[0];
    })
    onMounted(() => {
      companiesStore.getCompany();
    });
    return {
      handleInput,
      handleScrollWindow,
      weekDays,
      myCompany,
    };
  },
})
</script>

<style lang="scss">
.setting-page {
  display: flex;
  padding: 20px;
  .navigation-area {
    position: fixed;
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
        font-size: 12px;
        margin-top: 12px;
        padding: 4px;
        cursor: pointer;
        width: 160px;
      }
    }
  }
  .contents-area {
    padding: 0 40px 0 250px;
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
      text-align: left;
      .title {
        font-size: 18px;
        font-weight: bold;
      }
      .basic-form {
        justify-content: space-between;
        margin-top: 12px;
        width: 500px;
      }
      .row {
        margin-top: 12px;
      }
      .checkbox {
        height: 40px;
      }
    }
  }
}
</style>
