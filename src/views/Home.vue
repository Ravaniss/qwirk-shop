<template>
  <div class="home">
    <vue-topprogress ref="topProgress"></vue-topprogress>

    <!--<h1>{{ $t("message") }}</h1>
    <BaseButton type="submit" buttonClass="fill-gradient">Submit</BaseButton>
    <BaseButton @click="test()" buttonClass="fill-gray">Vendre</BaseButton>-->


  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
import Vuex from 'vuex'
import { vueTopprogress } from 'vue-top-progress'

@Component({
  components: {
    vueTopprogress
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
