<template>
  <button
    class="bass-button"
    :class="classes"
    :disabled="disabled"
    @click="onClick"
  >
    <span class="bass-loading_indicator" v-show="loading"></span>
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    theme: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: 'normal',
    },
    level: {
      type: String,
      default: 'normal',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  setup(props, context) {
    const { theme, size, level, loading, disabled } = props;
    const classes = computed(() => ({
      [`bass-theme-${theme}`]: theme,
      [`bass-size-${size}`]: size,
      [`bass-level-${level}`]: level,
      [`bass-loading`]: loading,
    }));

    const onClick = (event: MouseEvent) => {
      if (disabled || loading) {
        return;
      }
      context.emit('click', event);
    };
    return {
      classes,
      onClick,
    };
  },
});
</script>
<style lang="scss">
$h: 36px;
$border-color: #a4b0be;
$color: #2f3542;
$orange: #ffa502;
$danger-color: #ff4757;
$radius: 5px;
$radius-top-right: $h/2 + 6px;
$disabled-color: #a4b0be;
$disabled-bg-color: #f1f2f6;
.bass-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 20px 0 16px;
  cursor: default;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  font-size: 16px;
  border: 1px solid $border-color;
  border-radius: $radius;
  border-top-right-radius: $radius-top-right;
  box-shadow: 0 1px 0 fade-out(#2f3542, 0.95);
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $orange;
    border-color: $orange;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.bass-theme-button {
    border-color: $border-color;
    background-color: white;
    box-shadow: 0 1px 0 fade-out(#2f3542, 0.95);
    color: $color;
    &:hover,
    &:focus {
      color: $orange;
      border-color: $orange;
    }
    &.bass-level-primary {
      border-color: $orange;
      background-color: $orange;
      box-shadow: none;
      color: #fff;
      &:hover,
      &:focus {
        background-color: lighten($orange, 10%);
      }
    }
    &.bass-level-danger {
      border-color: $danger-color;
      background-color: $danger-color;
      box-shadow: none;
      color: #fff;
      &:hover,
      &:focus {
        background-color: lighten($danger-color, 10%);
      }
    }
  }

  &.bass-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $orange;
    &:hover,
    &:focus {
      color: lighten($orange, 10%);
    }
  }

  &.bass-theme-dashed {
    border-style: dashed;
    border-color: $border-color;
    background-color: white;
    box-shadow: 0 1px 0 fade-out(#2f3542, 0.95);
    color: $color;
    &:hover,
    &:focus {
      color: $orange;
      border-color: $orange;
    }
  }
  &.bass-size-small {
    height: $h - 10px;
    padding: 0 8px 0 6px;
    font-size: 14px;
    border-radius: $radius - 2px;
    border-top-right-radius: ($h - 10px) / 2 + 3px;
  }
  &.bass-size-large {
    height: $h + 10px;
    padding: 0 24px 0 22px;
    font-size: 18px;
    border-radius: $radius + 2px;
    border-top-right-radius: ($h + 10px) / 2 + 9px;
  }

  &.bass-theme-button {
    &[disabled] {
      cursor: not-allowed;
      border-color: $disabled-color;
      color: $disabled-color;
      background-color: $disabled-bg-color;
      &.bass-level-primary,
      &.bass-level-danger {
        &:hover,
        &:focus {
          background-color: $disabled-bg-color;
        }
      }
    }
  }

  &.bass-theme-dashed {
    &[disabled] {
      cursor: not-allowed;
      border-color: $disabled-color;
      color: $disabled-color;
      background-color: $disabled-bg-color;
    }
  }

  &.bass-theme-link {
    &[disabled] {
      cursor: not-allowed;
      color: $disabled-color;
    }
  }
  > .bass-loading_indicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-style: solid;
    border-width: 1px;
    animation: bass-spin 1s infinite linear;
  }
  &.bass-theme-button {
    &.bass-loading {
      &:hover,
      &:focus {
        color: $color;
        border-color: $border-color;
        cursor: default;
      }
      > .bass-loading_indicator {
        border-color: $color $color $color transparent;
      }
      &.bass-level-primary {
        &:hover,
        &:focus {
          color: #fff;
          border-color: $orange;
          background-color: $orange;
          cursor: default;
        }
        > .bass-loading_indicator {
          border-color: #fff #fff #fff transparent;
        }
      }
      &.bass-level-danger {
        &:hover,
        &:focus {
          color: #fff;
          border-color: $danger-color;
          background-color: $danger-color;
          cursor: default;
        }
        > .bass-loading_indicator {
          border-color: #fff #fff #fff transparent;
        }
      }
    }
  }
  &.bass-theme-dashed {
    &.bass-loading {
      &:hover,
      &:focus {
        color: $color;
        border-color: $border-color;
        cursor: default;
      }
      > .bass-loading_indicator {
        border-color: $color $color $color transparent;
      }
    }
  }
  &.bass-theme-link {
    &.bass-loading {
      &:hover,
      &:focus {
        color: $orange;
        border-color: transparent;
        cursor: default;
      }
      > .bass-loading_indicator {
        border-color: $orange $orange $orange transparent;
      }
    }
  }
}
@keyframes bass-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
