<template>
  <div class="login-page">
    <div class="login-panel">
      <Picture
        class="login-panel__image"
        src="src/assets/img/logo.png"
        width="240"
        height="32"
      />
      <div class="login-form">
        <p class="login-form__text--entry">Войти в систему</p>
        <Vueform
          class="login-form__fields"
          :sync="true"
          :loading="true"
          ref="form$"
        >
          <TextElement
            name="login"
            :attrs="{ autofocus: true }"
            placeholder="Логин"
            rules="required"
          ></TextElement>
          <PasswordInput
            name="password"
            placeholder="Пароль"
            rules="required"
          />
        </Vueform>
      </div>

      <div class="login-buttons">
        <Button
          class="card__buttons--enter"
          :fullWidth="true"
          buttonSize="big"
          buttonText="Войти"
          buttonColor="darkBlue"
          @click="handleSubmit"
        />
        <!-- <Button
          :fullWidth="true"
          buttonSize="big"
          buttonText="Забыли пароль?"
        /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Picture from '@components/Picture/Picture.vue';
import Button from '@components/Button/Button.vue';
import PasswordInput from '@components/Input/PasswordInput.vue';

import { ref } from 'vue';
import { VueformComponent } from '@vueform/vueform';

const form$ = ref<VueformComponent | null>(null);

const handleSubmit = () => {
  form$?.value?.validate();

  form$.value?.el$('login')?.messageBag.prepend(' ');

  form$.value
    ?.el$('password')
    ?.messageBag.prepend(
      'Срок лицензии истек. Для продления доступа напишите на почту sales@talentforce.ru'
    );
};
</script>

<style lang="scss" scoped>
.login {
  &-page,
  &-panel,
  &-form,
  &-buttons {
    display: flex;
  }

  &-page,
  &-panel {
    justify-content: center;
  }

  &-panel,
  &-form,
  &-buttons {
    flex-direction: column;
  }

  &-page {
    align-items: center;
    align-content: center;
    height: inherit;
  }

  &-panel {
    background-color: $white;
    border-radius: 4px;
    min-width: 400px;
    padding: 40px;

    &__image {
      align-self: center;
    }
  }

  &-form {
    margin-top: 40px;

    &__text {
      &--entry {
        font-size: 14px;
        color: $grey40;
        line-height: 20px;
      }
    }

    &__fields {
      margin-top: 16px;
    }

    &__error {
      color: $red;
      max-width: 283px;
      margin: 4px 16px 0 16px;
    }
  }

  &-buttons {
    margin-top: 32px;
    gap: 16px;
  }
}
</style>
