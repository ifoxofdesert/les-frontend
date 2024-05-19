<template>
  <NuxtLink :to="url" v-if="type === 'internal'" class="button" :class="`button__${mod || ''}`">
    <slot />
  </NuxtLink>
  <a :href="url" :target="target" v-else-if="type === 'external'" class="button" :class="`button__${mod || ''}`">
    <slot />
  </a>

  <button v-else-if="type === 'button'" type="button" class="button" :class="`button__${mod || ''}`">
    <slot />
  </button>
</template>

<script setup lang="ts">
  const { mod, url, target, type } = defineProps({
    mod: {
      type: String as () =>
        | 'green'
        | 'white'
        | 'gray'
        | 'white br'
        | 'text'
        | 'text link'
        | 'text_green'
        | 'angles'
        | 'navigation',
      default: '',
    },

    url: {
      type: String,
      default: '',
    },

    target: {
      type: String,
      default: '',
    },

    type: {
      type: String as () => 'internal' | 'external' | 'button',
      default: 'internal',
    },
  });
</script>

<style lang="scss" scoped>
  .button {
    padding: 20px 40px 20px 40px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    outline: none;
    border: none;
    font-size: 25px;
    font-weight: 400;
    line-height: 110%;
    font-family: 'Manrope';
    text-decoration: none;
    outline: solid 1px transparent;

    @media (max-width: 650px) {
      padding: 15px 30px;
    }

    @media (max-width: 550px) {
      font-size: 18px;
    }

    @media (max-width: 400px) {
      font-size: 16px;
    }

    &__white {
      background-color: $whitesmoke;
      color: $black;
      transition: all ease 0.2s;

      &.br {
        border: 1px solid $gray;
      }

      &:hover {
        color: $whitesmoke;
        background-color: $green;
        border-color: $green;

        svg {
          path {
            fill: $whitesmoke;
          }
        }
      }

      &.router-link-active {
        background-color: $green;
        color: $whitesmoke;
        border-color: $green;
      }
    }

    &__gray {
      background-color: $gray;
      color: $whitesmoke;
      font-size: 20px;
      transition: all ease 0.2s;

      @media (max-width: 550px) {
        font-size: 18px;
      }

      @media (max-width: 400px) {
        font-size: 16px;
      }

      &:deep() {
        svg {
          path {
            transition: all ease 0.2s;
            fill: $whitesmoke;
          }
        }
      }

      &:not([disabled]) {
        &:deep() {
          &:hover {
            svg {
              path {
                fill: $black;
              }
            }
          }
        }

        &:hover {
          color: $black;
          background-color: $whitesmoke;
          outline-color: $black;

          &:deep() {
            svg {
              path {
                fill: $black;
              }
            }
          }
        }
      }
    }

    &__green {
      background-color: $green;
      color: $whitesmoke;
      font-size: 20px;
      transition: all ease 0.2s;

      @media (max-width: 550px) {
        font-size: 18px;
      }

      @media (max-width: 400px) {
        font-size: 16px;
      }

      &:deep() {
        svg {
          path {
            transition: all ease 0.2s;
            fill: $whitesmoke;
          }
        }
        &:hover {
          svg {
            path {
              fill: $black;
            }
          }
        }
      }

      &:hover {
        color: $black;
        background-color: $whitesmoke;
        outline-color: $black;

        &:deep() {
          svg {
            path {
              fill: $black;
            }
          }
        }
      }
    }

    &__text {
      padding: 0;
      border-radius: 0px;
      color: $black;
      background-color: transparent;
      justify-content: flex-start;
      transition: all ease 0.2s;

      &:hover {
        color: $green;
      }

      &.link {
        &.router-link-active {
          color: $green;
        }
      }

      &_green {
        padding: 0;
        border-radius: 0px;
        color: $green;
        background-color: transparent;
        justify-content: flex-start;
        transition: all ease 0.2s;
      }
    }

    &__angles {
      border-radius: 0px;
    }

    &__navigation {
      border-radius: 0;
      background-color: transparent;
      transition: all ease 0.2s;
      justify-content: flex-start;
      color: $gray;
      padding: 0;
      outline: none;
      gap: 0px;

      &::before {
        content: '';
        mask-image: url('~/assets/images/icons/arrow_right.svg');
        mask-repeat: no-repeat;
        mask-position: center;
        background-color: $gray;
        width: 0px;
        height: 13px;
        transition: all ease 0.2s;
        margin: 0;
      }

      &:hover {
        color: $green;

        &::before {
          margin: 0 10px 0 0;

          background-color: $green;
          width: 60px;
        }
      }

      &.active {
        color: $green;

        &::before {
          margin: 0 10px 0 0;
          background-color: $green;
          width: 60px;
        }
      }
    }

    @media (max-width: 550px) {
      &:deep() {
        svg {
          max-width: 40px;
        }
      }
    }
  }
</style>

<style lang="scss">
  .button {
    &__white {
      svg {
        path {
          transition: all ease 0.2s;
        }
      }

      &:hover {
        svg {
          path {
            fill: $whitesmoke;
          }
        }
      }
    }
  }
</style>
