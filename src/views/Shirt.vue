<template>
  <div class="outContent">
    <div class="content">
        <div class="img"
             :style="{ 'background-image': 'url(' + require('../assets/img/teeshirt/' + img) + ')' }">
        </div>
        {{ text }} - {{ price }}
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import db from '../../db.json'

  @Component
  export default class Shirt extends Vue {
    img: string = ''
    text: string = ''
    price: string = ''

    mounted () {
      for (let i = 0; i < db.shirts.length; i++) {
        if (i == this.$route.params.id) {
          this.img = db.shirts[i].image
          this.text = db.shirts[i].text
          this.price = db.shirts[i].price
        }
      }
    }
  }
</script>
