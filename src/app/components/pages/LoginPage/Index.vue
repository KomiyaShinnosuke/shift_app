<template>
  <div class="login-page">
    <section class="logo-area">
      <div class="logo-wrapper">
        <img alt="logo" src="src/assets/logo.png" />
        <span class="name">OFUN</span>
      </div>
    </section>
    <section class="input-area">
      <InputWithLabel label="メールアドレス" width="320px" @input="handleInput($event, 'email')" />
      <InputWithLabel
        class="password-input"
        label="パスワード"
        type="password"
        width="320px"
        @input="handleInput($event, 'password')"
      />
      <PrimaryButton class="button" :block="true" @click="onClick()">ログイン</PrimaryButton>
      <div class="caution">パスワードをお忘れの方</div>
    </section>
  </div>
  <div v-if="showError" class="caution-area">
    <span>入力された情報に基づくアカウントが見つかりませんでした。</span>
    <Icon icon="mdi-close" @click="handleClickError" />
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router'
import { Icon } from '@/components/atoms/Icon'
import { InputWithLabel } from '@/components/atoms/Input'
import { PrimaryButton } from '@/components/atoms/Button'
import client from '~/core/api'

export default defineComponent({
  components: { Icon, InputWithLabel, PrimaryButton },
  setup() {
    const router = useRouter()
    const email = ref<string>('');
    const password = ref<string>('');
    const showError = ref<boolean>(false);
    const handleInput = (data: string, type: string) => {
      switch(type) {
        case 'email': {
          email.value = data
          break
        }
        case 'password': {
          password.value = data
          break
        }
        default:
          return
      }
    };
    const initializeRouter = () => {
      router.push({ name: 'MonthlyCalendar' })
    }
    const onClick = () => {
      showError.value = false;
      const params = new URLSearchParams();
      params.append('username', email.value);
      params.append('password', password.value);
      client.post('http://0.0.0.0:8000/token', params)
        .then(_ => {
          initializeRouter()
        })
        .catch(_ => {
          showError.value = true;
        })
    }
    const handleClickError = () => {
      showError.value = false;
    }
    return {
      showError,
      handleInput,
      onClick,
      handleClickError,
    };
  },
})
</script>

<style lang="scss">
.login-page {
  display: inline-block;
  .logo-area {
    display: inline-block;
    .logo-wrapper {
      display: flex;
      .name {
        font-size: 24px;
        font-weight: bold;
        margin: auto 0;
      }
    }
  }
  .input-area {
    background-color: #f1eeee;
    border-radius: 22px;
    padding: 40px;
    width: 400px;
    .password-input {
      margin-top: 20px;
    }
    .button {
      margin-top: 36px;
    }
    .caution {
      margin-top: 36px;
    }
  }
}
.caution-area {
    border: 1px black solid;
    border-radius: 4px;
    border-left: 12px red solid;
    display: flex;
    margin: 60px 0 0 40px;
    padding: 4px;
    text-align: left;
    width: max-content;
}
</style>
