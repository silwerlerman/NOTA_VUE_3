<template>
  <ElButton
    :class="{
      blueButton: buttonColor === 'blue',
      darkBlueButton:
        buttonColor.length > 0 && buttonColor.toLowerCase() == 'darkblue',
      transparentButton: buttonColor === 'transparent',
      whiteButton: buttonColor === 'white',
      'shadow-lvl-1': buttonColor === 'white',
      big: buttonSize === 'big',
      medium: buttonSize === 'medium',
      small: buttonSize === 'small',
      'without-text': (iconSrc || iconName) && !buttonText,
      noPointer,
      fullWidth
    }"
    :disabled="disabled || loading"
    @click="click"
  >
    <div
      class="button-content"
      :class="[!buttonText ? 'button-content--empty' : '']"
    >
      <Picture
        v-if="iconSrc && hasLeftIcon"
        :url="iconSrc"
        :class="contentColorClass"
        class="content-icon"
      />
      <Icon
        v-else-if="hasLeftIcon"
        :icon-name="iconName"
        :icon-color="contentColor"
      />
      <a
        v-if="link && buttonText"
        :href="link"
        :style="{ color: contentColor }"
        class="content-text"
      >
        {{ buttonText }}
      </a>
      <p
        v-if="buttonText && !link"
        class="content-text"
        :style="{ color: contentColor }"
      >
        {{ buttonText }}
      </p>
      <Picture
        v-if="iconSrc && hasRightIcon"
        :url="iconSrc"
        :class="contentColorClass"
        class="content-icon"
      />

      <Icon
        v-else-if="hasRightIcon"
        :icon-name="iconName"
        :icon-color="contentColor"
      /></div
  ></ElButton>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus';
import Picture from '@components/Picture/Picture.vue';
import Icon from '@components/Icon/Icon.vue';
import { computed } from 'vue';

type Props = {
  buttonSize?: 'big' | 'medium' | 'small';
  buttonColor?: 'blue' | 'darkBlue' | 'transparent' | 'white';
  buttonText?: string;
  disabled?: boolean;
  iconColor?: string;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  iconName?: string;
  loading?: boolean;
  link?: string;
  iconSrc?: string;
  target?: string;
  noPointer?: boolean;
  fullWidth?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  buttonSize: 'medium',
  buttonColor: 'blue',
  loading: false,
  target: '_self'
});

const emit = defineEmits<{
  click: [e: MouseEvent];
}>();

const contentColorClass = computed((): string => {
  if (props.buttonColor === 'darkBlue') {
    return props.disabled ? 'icon--disabled' : 'icon-dark--blue';
  } else if (props.buttonColor === 'blue') {
    return props.disabled ? 'icon--disabled' : 'icon--blue';
  } else if (props.buttonColor === 'transparent') {
    return props.disabled ? 'icon--transparent-disabled' : 'icon--transparent';
  } else if (props.buttonColor === 'white') {
    return props.disabled ? 'icon--disabled' : 'icon--white';
  } else return '';
});

const contentColor = computed((): string => {
  if (props.iconColor) return props.iconColor;

  if (props.buttonColor === 'darkBlue') {
    return props.disabled ? '#788694' : '#FFFFFF';
  } else if (props.buttonColor === 'blue') {
    return props.disabled ? '#788694' : '#0075DB';
  } else if (props.buttonColor === 'transparent') {
    return props.disabled ? '#62717E' : '#0075DB';
  } else if (props.buttonColor === 'white') {
    return props.disabled ? '#788694' : '#62717E';
  } else return '#FFFFFF';
});

function click(e: MouseEvent) {
  if (props.disabled) {
    return;
  }

  if (props.link && props.target == '_self') {
    location.replace(props.link);
    return;
  }

  if (props.link && props.target == '_blank') {
    window.open(props.link);
    return;
  }

  emit('click', e);
}
</script>

<style lang="scss" scoped>
.el-button {
  display: inline-block;
  font-family: 'Roboto Medium';
  vertical-align: middle;
  border-radius: 4px;
  border: none;
  position: relative;
  padding: 0;
  margin: 0;

  & :v-deep(.content-icon) {
    min-width: 24px;
  }

  & + .el-button {
    margin-left: 0;
  }

  &.big {
    padding: 8px 0;

    &:not(.without-text) :v-deep(.button-content) {
      margin: 0 16px;
    }
  }

  &.without-text {
    & :v-deep(.button-content) {
      margin: 0 12px;
    }
  }

  &.medium {
    padding: 4px 0;

    & :v-deep(.button-content) {
      margin: 0 12px;
    }
  }

  &.small {
    padding: 0;

    & :v-deep(.button-content) {
      margin: 0 8px;
    }
  }

  &.is-round {
    padding: 0 !important;
  }

  & > span {
    display: inline-block;
  }

  &.noPointer * {
    pointer-events: none;
  }

  &.fullWidth {
    width: 100%;
  }

  &.is-disabled {
    opacity: 1;

    * {
      cursor: not-allowed;
    }
  }

  & :v-deep(svg) {
    margin: 0 !important;
  }
}

.blueButton {
  background-color: $blue8;

  & :v-deep(.content-text) {
    color: $blue64;
  }

  & :v-deep(.content-icon) {
    filter: $bluePicture;
  }

  &:hover {
    background-color: $blue12;
  }

  &:active {
    background-color: $blue24;
  }

  &:focus {
    background-color: $blue8;
    outline: 2px solid $blue80;
  }

  &:disabled {
    background-color: $grey12;

    &:hover {
      background-color: $grey12;
    }

    & :v-deep(.content-text) {
      color: $grey40 !important;
    }
  }
}

.darkBlueButton {
  background-color: $blue40;
  color: $white;

  & :v-deep(.content-text) {
    color: $white;
  }

  & :v-deep(.content-icon) {
    filter: $whitePicture;
  }

  &:hover {
    background-color: $blue64;
  }

  &:active {
    background-color: $blue72;
  }

  &:focus {
    background-color: $blue40;
    outline: 2px solid $blue80;
  }

  &:disabled {
    background-color: $grey12;
    color: $grey40;

    & :v-deep(.content-text) {
      color: $grey40 !important;
    }
  }
}

.transparentButton {
  background-color: transparent !important;

  & :v-deep(.content-text) {
    color: $blue64;
  }

  & :v-deep(.content-icon) {
    filter: $bluePicture;
  }

  &:active :v-deep(.content-text) {
    color: $blue80 !important;
  }

  &:hover {
    & :v-deep(.content) {
      .content-text,
      .content-icon {
        color: $blue72 !important;
      }
    }
  }

  &:focus {
    outline: 2px solid $blue80;
  }

  &:disabled {
    background-color: transparent !important;

    & :v-deep(.content-text) {
      color: $grey64 !important;
    }
  }
}

.whiteButton {
  background-color: $white !important;

  & :v-deep(.content-text) {
    color: $grey64;
  }

  & :v-deep(.content-icon) {
    filter: $greyPicture;
  }

  &:hover {
    outline: 1px solid $blue40;
  }

  &:active {
    outline: 1px solid $blue64;
  }

  &:focus {
    outline: 2px solid $blue80;
  }

  &:disabled {
    background-color: $grey12 !important;
    border: none;

    & :v-deep(.content-text) {
      color: $grey40;
    }
  }
}

.button-content {
  display: flex;
  gap: 4px;
  flex-direction: row;
  justify-content: center;
  height: 24px;

  & .img {
    width: 24px;
    height: 24px;
  }

  &-icon {
    padding-bottom: 2px;
  }
}

.icon {
  &--dark-blue {
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(22deg)
      brightness(112%) contrast(103%);
  }

  &--transparent,
  &--blue {
    filter: invert(30%) sepia(100%) saturate(1203%) hue-rotate(186deg)
      brightness(95%) contrast(109%);
  }

  &--transparent {
    &-disabled {
      filter: invert(42%) sepia(29%) saturate(253%) hue-rotate(166deg)
        brightness(95%) contrast(87%);
    }
  }

  &--white {
    filter: invert(57%) sepia(10%) saturate(567%) hue-rotate(169deg)
      brightness(90%) contrast(85%);
  }

  &--disabled {
    filter: invert(52%) sepia(15%) saturate(382%) hue-rotate(169deg)
      brightness(97%) contrast(88%) !important;
  }
}

.content-text {
  align-self: center;
  -ms-grid-row-align: center;
  font-weight: 500;
  font-family: 'Roboto Medium';
  font-size: 16px;
  line-height: 24px;
}
</style>
<style>
.noPointer span {
  pointer-events: none;
  display: inline-block;
}
</style>
