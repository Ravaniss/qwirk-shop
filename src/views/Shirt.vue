<template>
  <div class="outContent">
    <div class="content row">
      <div class="img one"
           :style="{ 'background-image': 'url(' + require('../assets/img/teeshirt/' + img) + ')' }">
      </div>
      <div class="infos">
        <h1>{{ text }}</h1>
        <span>{{ price }}</span>
      </div>
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

<style lang="scss">
  .img.one {
    background-size: 1000px;
    background-repeat: no-repeat;
    background-position: center;
    height: 630px;
    width: 560px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    background-color: #eeeeee;
  }

  .infos {
    flex: 1;
  }
</style>
