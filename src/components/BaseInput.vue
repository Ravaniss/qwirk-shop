<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input type="text" :value="value" @input="updateValue" v-bind="$attrs">
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component()
  export default class BaseInput extends Vue {
    @Prop({default: ''}) label: string
    @Prop() value: [String, Number]

    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
</script>
