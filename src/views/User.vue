<template>
  <div class="user">
    <h1>This is {{ username }}'s page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class User extends Vue {
  @Prop() !username: string
}
</script>
