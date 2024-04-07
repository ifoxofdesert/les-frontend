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
      type: String as () => 'green' | 'white' | 'text' | 'text_green',
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
    &__white {
      background-color: $whitesmoke;
      color: $black;
      transition: all ease 0.2s;

      &:hover {
        color: $whitesmoke;
        background-color: $green;

        svg {
          path {
            fill: $whitesmoke;
          }
        }
      }
    }

    &__green {
      background-color: $green;
      color: $whitesmoke;
      font-size: 20px;
      transition: all ease 0.2s;

      &:hover {
        color: $black;
        background-color: $whitesmoke;
        outline-color: $black;

        svg {
          path {
            fill: $black;
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

      &_green {
        padding: 0;
        border-radius: 0px;
        color: $green;
        background-color: transparent;
        justify-content: flex-start;
        transition: all ease 0.2s;
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

    &__green {
      svg {
        path {
          transition: all ease 0.2s;
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
  }
</style>
