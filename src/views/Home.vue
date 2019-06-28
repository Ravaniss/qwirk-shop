<template>
  <div class="home">
    <vue-topprogress ref="topProgress"></vue-topprogress>
    <!--<h1>{{ $t("message") }}</h1>
    <BaseButton type="submit" buttonClass="fill-gradient">Submit</BaseButton>
    <BaseButton @click="test()" buttonClass="fill-gray">Vendre</BaseButton>-->

    <div class="outContent">
      <div class="content">
        <div class="shirts">
          <div v-for="(shirt, i) in shirts" id="vfor">
            <router-link :to="{ name: 'shirt', params: { id: i } }">
              <div class="img"
                   :style="{ 'background-image': 'url(' + require('../assets/img/teeshirt/' + shirt.image) + ')' }">
              </div>
              <div class="infos">
                <h1>{{ shirt.text }}</h1>
                <span>{{ shirt.price }}</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import db from '../../db.json'
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
import { vueTopprogress } from 'vue-top-progress'

@Component({
  components: {
    vueTopprogress
  },
  computed: {
    shirts() {
      return db.shirts
    }
  }
})
export default class Home extends Vue {
  langs = ['fr', 'en']

  mounted () {
    this.$refs.topProgress.start()

    axios
      .get('http://localhost:4000/events')
      .then(response => {
        this.$refs.topProgress.done()
        console.log(response.data)
      })
      .catch(error => {
        this.$refs.topProgress.fail()
        console.log(error)
      })
  }

  test() {
    console.log('clicked!')
  }
}
</script>

<style lang="scss">
  div.shirts {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  div.img {
    background-size: 590px;
    background-repeat: no-repeat;
    background-position: center;
    height: 340px;
    width: 460px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    background-color: rgba(238, 238, 238, 1);
  }

  div.infos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 35px;

    h1 {
      font-size: 1.2em;
      color: rgba(96, 103, 110, 1);
      letter-spacing: 1px;
    }

    span {
      color: rgba(114, 137, 218, 1);
      letter-spacing: 0.5px;
    }
  }
</style>
