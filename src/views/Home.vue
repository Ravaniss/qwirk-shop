<template>
  <div class="home">
    <vue-topprogress ref="topProgress"></vue-topprogress>
    <div class="locale-changer">
      <select v-model="$i18n.locale">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
      </select>
    </div>

    <h1>{{ $t("message") }}</h1>
    Home page
    <BaseButton type="submit" buttonClass="fill-gradient">Submit</BaseButton>
    <BaseButton @click="test()" buttonClass="fill-gray">Vendre</BaseButton>

    <BaseMediaBox>
      <h2 slot="heading">Heading</h2>
      <p slot="paragraph">Paragraph</p>
    </BaseMediaBox>

    <BaseInput
      label="Title"
      v-model="title"
      type="text"
      placeholder="Your title here !"
    ></BaseInput>

    <BaseInput
      label="Description"
      v-model="desc"
      type="text"
      placeholder="Your description here !"
    ></BaseInput>

    <h1>{{ userName }}</h1>

    <input type="number" v-model.number="incrementBy">
    <button @click="incrementCount">+</button>
    <p>{{ count }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
import Vuex from 'vuex'
import { vueTopprogress } from 'vue-top-progress'

@Component({
  methods: {
    ...Vuex.mapActions([
      'updateCount'
    ])
  },
  computed: {
    ...Vuex.mapGetters([
      'userName',
      'count'
    ])
  },
  components: {
    vueTopprogress
  }
})
export default class Home extends Vue {
  langs = ['fr', 'en']
  incrementBy: number = 0
  title: string = ''
  desc: string = ''

  mounted () {
    this.$refs.topProgress.start()

    axios
      .get('http://localhost:4000/events')
      .then(response => {
        this.$refs.topProgress.done()
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  incrementCount () {
    this.$store.dispatch('updateCount', this.incrementBy)
  }

  test() {
    console.log('clicked!')
  }
}
</script>
