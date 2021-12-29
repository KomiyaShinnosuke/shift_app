<template>
  <div class="login-page">
    <section class="logo-area">
      <div class="logo-wrapper">
        <img alt="logo" src="src/assets/logo.png" />
        <span class="name">OFUN</span>
      </div>
    </section>
    <section class="input-area">
      <InputWithLabel label="メールアドレス" width="396px" @input="handleInput($event, 'email')" />
      <InputWithLabel
        class="password-input"
        label="パスワード"
        type="password"
        width="396px"
        @input="handleInput($event, 'password')"
      />
      <PrimaryButton class="button" :block="true" @click="onClick()">ログイン</PrimaryButton>
      <div class="caution">パスワードをお忘れの方</div>
    </section>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent, ref } from 'vue';
import { InputWithLabel } from '../../atoms/Input'
import { PrimaryButton } from '../../atoms/Button'

export default defineComponent({
  components: { InputWithLabel, PrimaryButton },
  setup() {
    const email = ref<string>('');
    const password = ref<string>('');
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
    const onClick = () => {
      console.log(email.value, password.value)
    }
    return {
      handleInput,
      onClick,
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
</style>
