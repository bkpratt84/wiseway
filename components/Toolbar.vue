<template>
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

    <v-toolbar-items v-for="item in listLink" :key="item.key" class="hidden-sm-and-down">
      <v-btn
        flat
        >
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items class="hidden-md-and-up">
      <v-btn icon>
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
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
      listLink: []
    }),

    watch: {
      isBooted () {
        this.genList()
        this.currentOffset = window.pageYOffset || document.documentElement.offsetTop
      }
    },

    computed: {
      activeIndex () {
        const list = this.listSection.slice().reverse()
        const index = list.findIndex(item => item.offsetTop - 100 < this.currentOffset)

        return index > -1
          ? list[index].href
          : this.defaultIndex
      }
    },

    mounted () {
      setTimeout(() => {
        this.isBooted = true
      }, 200)
    },

    methods: {
      genList () {
        const list = []

        for (let item of this.items) {
          item = Object.assign({}, item)

          const target = item.target || document.getElementById(item.href)

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