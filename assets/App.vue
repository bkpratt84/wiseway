<template>
  <v-app>
    <v-toolbar
      app
      fixed
      class="white"
    >
      <v-toolbar-title v-text="title" class="red--text"></v-toolbar-title>
      <!-- <img src="static/logo_transparent.png" alt="The Wise Way Counseling" height="48"> -->
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn @click="$vuetify.goTo('#home', options)" flat>Home</v-btn>
        <v-btn @click="$vuetify.goTo('#about', options)" flat>About Us</v-btn>
        <v-btn @click="$vuetify.goTo('#services', options)" flat>Services Offered</v-btn>
        <v-btn @click="$vuetify.goTo('#providers', options)" flat>Our Providers</v-btn>
        <v-btn @click="$vuetify.goTo('#contact', options)" flat>Contact Info</v-btn>
        <v-btn flat>Therapist Login</v-btn>
        </v-toolbar-items>

        <v-toolbar-items class="hidden-md-and-up">
          <v-btn icon>
            <v-icon>menu</v-icon>
          </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- <v-container>
      <v-layout row wrap>
        <v-flex xs12 md10 offset-md1> -->
          <v-content>
            <section id="home">
              <v-parallax src="static/hero.jpeg" height="600">
                <v-layout
                  column
                  align-center
                  justify-center
                  class="white--text"
                >
                  <h1 class="white--text mb-2 display-1 text-xs-center">Id nulla anim ex do pariatur. Cillum ut labore sunt deserunt sint sint ex qui exercitation. Fugiat minim magna eiusmod laboris incididunt incididunt do. Laborum dolor enim fugiat ad magna aute ad consectetur ea aute reprehenderit ut enim. Aute amet mollit officia aliquip officia.</h1>
                  <!-- <img src="static/logo.jpg" alt="The Wise Way Counseling" height="200"> -->
                </v-layout>
              </v-parallax>
            </section>

            <section id="about">
              <v-layout
                column
                wrap
                class="my-5"
                align-center
              >
                <v-flex xs12 sm4 class="my-3">
                  <div class="text-xs-center">
                    <h2 class="headline">About Us</h2>
                    <span class="subheading">
                      Cras facilisis mi vitae nunc 
                    </span>
                    <div style="height: 150px;"></div>
                  </div>
                </v-flex>
              </v-layout>
            </section>

            <section id="services">
              <v-layout
                column
                wrap
                class="my-5"
                align-center
              >
                <v-flex xs12 sm4 class="my-3">
                  <div class="text-xs-center">
                    <h2 class="headline">Services Offered</h2>
                    <span class="subheading">
                      Cras facilisis mi vitae nunc 
                    </span>
                    <div style="height: 150px;"></div>
                  </div>
                </v-flex>
              </v-layout>
            </section>

            <section id="providers">
              <v-layout
                column
                wrap
                class="my-5"
                align-center
              >
                <v-flex xs12 sm4 class="my-3">
                  <div class="text-xs-center">
                    <h2 class="headline">Our Providers</h2>
                    <span class="subheading">
                      Cras facilisis mi vitae nunc 
                    </span>
                    <div style="height: 150px;"></div>
                  </div>
                </v-flex>
              </v-layout>
            </section>

            <section id="contact">
              <v-layout
                column
                wrap
                class="my-5"
                align-center
              >
                <v-flex xs12 sm4 class="my-3">
                  <div class="text-xs-center">
                    <h2 class="headline">Contact Info</h2>
                    <span class="subheading">
                      Cras facilisis mi vitae nunc 
                    </span>
                    <div style="height: 150px;"></div>
                  </div>
                </v-flex>
              </v-layout>
            </section>
          </v-content>
        <!-- </v-flex>
      </v-layout>
    </v-container> -->
  </v-app>
</template>

<script>
  import Trianglify from 'trianglify'
  import Meta from 'mixins/meta'

  export default {
    mixins: [Meta],

    data () {
      return {
        options: {
          duration: 300,
          offset: -64,
          easing: 'easeInOutCubic'
        },
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'The Wise Way Counseling',
        bg1: true
      }
    },

    methods: {

    }
  }
</script>

<style>

</style>

