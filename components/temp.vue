<template>
  <v-layout>
    <!-- <v-navigation-drawer
      v-model="drawer"
      temporary
      app
    >
      <v-list class="pt-0" dense>
        <v-list-tile v-for="item in items" :key="item.title" @click="">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      app
      fixed
      class="white"
    >
      <v-toolbar-title v-text="title" class="red--text text-lighten-3 logo-font"></v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items v-for="item in listSection" :key="item.key" class="hidden-sm-and-down" v-scroll="onScroll">
        <v-btn
          flat
          @click="$vuetify.goTo(`#${item.href}`, options)"
          :class="{'red--text text-lighten-3': item.href == activeIndex}"
          >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <v-toolbar-items v-if="!loggedIn" v-for="item in listLink" :key="item.key" class="hidden-sm-and-down">
        <v-btn
          flat
          >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <v-toolbar-items class="hidden-md-and-up">
        <v-btn @click.stop="drawer = !drawer" icon>
          <v-icon>menu</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar> -->
  </v-layout>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        default: () => ([])
      },

      title: {
        type: String
      },

      loggedIn: {
        type: Boolean,
        default: false
      },

      options: {
        type: Object,
        default: () => {
          return {
            duration: 300,
            offset: -64,
            easing: 'easeInOutCubic'
          }
        }
      },

      defaultIndex: {
        type: String,
        default: () => ('Home')
      }
    },

    data: () => ({
      currentOffset: 0,
      isBooted: false,
      listSection: [],
      listLink: [],
      drawer: false
    }),

    watch: {
      isBooted () {
        this.genList()
        this.currentOffset = window.pageYOffset || document.documentElement.offsetTop
      }
    },

    computed: {
      activeIndex () {
        let list = this.listSection.slice().reverse()
        let index = list.findIndex(item => item.offsetTop - 110 < this.currentOffset)
        let atBottom = (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight

        return index > -1 ? (atBottom ? list[0].href : list[index].href) : this.defaultIndex
      }
    },

    mounted () {
      setTimeout(() => {
        this.isBooted = true
      }, 200)
    },

    methods: {
      genList () {
        let list = []

        for (let item of this.items) {
          item = Object.assign({}, item)

          let target = item.target || document.getElementById(item.href)

          if (target) {
            item.offsetTop = target.offsetTop
            item.target = target
            list.push(item)
          } else {
            this.listLink.push(item)
          }
        }

        this.listSection = list
      },

      onScroll () {
        this.currentOffset = window.pageYOffset || document.documentElement.offsetTop
      }
    }
  }
</script>