<template>
  <div id="app">
    <div class="outContent">
      <div class="content">
        <div id="nav">
          <router-link :to="{ name: 'home' }" tag="div" class="logo"></router-link>
          <router-link :to="{ name: 'auth' }" tag="div" id="loginImg"></router-link>
          <router-link :to="{ name: 'cart' }" tag="div" id="cartImg"></router-link>
          <div class="locale-changer">
            <select v-model="$i18n.locale">
              <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
  require('./assets/styles/style.scss')
  import { Component, Vue } from 'vue-property-decorator'
  export default class Home extends Vue {
    langs = ['fr', 'en']
  }
</script>

<style lang="scss">
  div#nav {
    display: flex;
    align-items: center;

    div {
      margin-right: 30px;
    }

    .settings {
      display: flex;
    }

    div.logo {
      height: 30px;
      width: 30px;
      border: solid grey 1px;
    }

    div#loginImg {
      background-image: url('./assets/login.svg');
      height: 25px;
      width: 25px;
      background-size: 25px;
      background-repeat: no-repeat;
    }

    div#cartImg {
      background-image: url('./assets/cart.svg');
      height: 25px;
      width: 30px;
      background-size: 30px;
      background-repeat: no-repeat;
    }
  }


</style>
