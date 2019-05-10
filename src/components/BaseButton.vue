<template>
  <button v-on="$listeners" class="button" :class="buttonClass">
    <slot />
  </button>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'

  @Component()
  export default class BaseButton extends Vue {
    @Prop() buttonClass: string
  }
</script>

<style lang="scss">
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    height: 52px;
    padding: 0 40px;
    background: transparent;
    border: none;
    border-radius: 4px;
    text-align: center;
    white-space: nowrap;
    transition: all 0.2s linear;
  }

  .button.fill-gradient {
    background: linear-gradient(to right, #16c0b0, #84cf6a);
    color: #FFF;
  }

  .button.fill-gray {
    background-color: rgba(0, 0, 0, 0.5);
    color: #FFF;
  }
</style>
