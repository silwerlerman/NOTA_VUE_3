<template>
  <TextElement
    :name="name"
    :conditions="conditions"
    :rules="rules"
    :default="default"
    :disabled="disabled"
    :input-type="buttonType"
    :messages="messages"
    :placeholder="placeholder"
  >
    <template #addon-after>
      <Button
        tabindex="-1"
        buttonColor="transparent"
        hasLeftIcon
        :iconName="buttonIcon"
        :iconColor="iconColor"
        class="pass-button"
        @click="handleButtonType"
      ></Button>
    </template>
  </TextElement>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { TextElementProps } from './PasswordInputProps';
import Button from '@components/Button/Button.vue';

const props = withDefaults(defineProps<TextElementProps>(), {
  name: 'text-field'
});

const buttonType = ref('password');

const iconColor = computed(() => (props.disabled ? '#99A5B3' : '#62717E'));

const buttonIcon = computed(() =>
  buttonType.value === 'password' ? 'EyeCrossed' : 'EyeOpen'
);

const handleButtonType = () => {
  buttonType.value = buttonType.value === 'text' ? 'password' : 'text';
};
</script>

<style lang="scss" scoped>
.pass-button {
  &:focus {
    outline: none;
  }
}
</style>
