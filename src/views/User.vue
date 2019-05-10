<template>
  <div class="user">
    <h1>This is {{ username }}'s page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component()
export default class User extends Vue {
  @Prop() !username: string
}
</script>
