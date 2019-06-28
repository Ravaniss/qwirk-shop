<template>
  <div>
    Hello world !
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import db from '../../db.json'

  @Component
  export default class Shirt extends Vue {
    mounted () {
      for (let i = 0; i < db.shirts.length; i++) {
        if (i == this.$route.params.id) {
          console.log(db.shirts[i].id, db.shirts[i].image, db.shirts[i].text)
        }
      }
    }
  }
</script>
