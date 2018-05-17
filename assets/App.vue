<template>
  <v-app>
    <toolbar :items="toolbarItems" :title="title">
    </toolbar>

    <v-content>
      <section id="home">
        <v-parallax src="static/zen_garden.jpg" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
            wrap
          >

            <h1 class="white--text mb-2 display-2 logo-font">The Wise Way Counseling</h1>
            <h1 class="white--text mb-2 display-1">Call {{ contactNumber }} to schedule an appointment!</h1>
          </v-layout>
        </v-parallax>
      </section>

      <section id="about">
        <v-layout
          column
          wrap
          class="my-3"
          align-center
        >
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md10 offset-md1>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div class="text-xs-center display-1 section-header">About Us</div>
                    </v-card-title>

                    <v-card-text class="text-xs-center pb-0">
                      <img src="static/logo.jpg" alt="The Wise Way Counseling" :height="logoSize">
                    </v-card-text>

                    <v-card-text>
                      <h1>Our Mission</h1>
                      <div class="subheading">
                        It is the mission of The Wise Way Counseling to improve the lives of those in Oklahoma by providing complete mental health services designed 
                        to enrich and improve the lives of children, youth, adults and families.
                      </div>

                      <div class="subheading mt-3">
                        The Wise Way Counseling was established in 2017 to provide evidence based, high quality, professional services throughout the Oklahoma City 
                        metro area. The Wise Way Counseling is home to a team of highly respected and trained mental health professionals.
                      </div>

                      <div class="subheading mt-3">
                        Our team of professionals each have unique skill sets that are used to help meet the needs of each individual by offering a variety of therapeutic 
                        services for all ages on an individual, couple, family, and group basis. Through counseling, individuals can enhance understanding of their own 
                        emotions and feelings and how they react to those emotions and feelings. Individuals can also learn skills to cope with uncomfortable feelings, 
                        as well as gain a better understanding of how to problem solve more effectively.
                      </div>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section id="services">
        <v-layout
          column
          wrap
          class="my-3 grey lighten-2"
          align-center
        >
          <v-flex xs12 sm4 class="my-3 pt-4">
            <div class="text-xs-center">
              <h2 class="display-1 section-header">Services Offered</h2>
            </div>
          </v-flex>

          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 sm6>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large color="red lighten-2">fa-user</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Individual Counseling</div>
                    </v-card-title>
                    <v-card-text class="card-services">
                      <p>
                        Individual Counseling is provided to consumers 3 years of age or older to address needs in multiple domains such as anxiety, 
                        anger, behavior, trauma, depression, stress, divorce, abuse, death, grief, as well as much more. Individuals will gain a 
                        better understanding of how to cope with a variety of emotions and feelings relating to these areas. Individual therapy is 
                        offered 1-2 times per week, based on a needs assessment.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12 md6>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large color="red lighten-2">fa-users</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Family Counseling</div>
                    </v-card-title>
                    <v-card-text class="card-services">
                      <p>
                        Family Counseling is provided to consumers of all ages in need of constructing a more functional family system and to address 
                        a multitude of needs relating to various family dynamics. Consumers participating in family counseling will gain a better 
                        understanding of how working together can help improve everyday living, enhancing the quality of life. This service is offered 
                        1-2 times per week, based on a needs assessment.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12 md6>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large color="red lighten-2">fa-heart</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Marriage Counseling</div>
                    </v-card-title>
                    <v-card-text class="card-services">
                      <p>
                        Marriage Counseling is provided to consumers experiencing difficulties or concerns within their marriage, affecting various areas 
                        of life. Services will help couples recognize and resolve conflicts, improving their relationships. Pre-marital counseling services 
                        are also provided to consumers at The Wise Way Counseling.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12 md6>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large color="red lighten-2">fa-hands</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Group Psychotherapy</div>
                    </v-card-title>
                    <v-card-text class="card-services">
                      <p>
                        Group psychotherapy is a special form of therapy in which a small number of people meet together under the guidance of a profession-ally 
                        trained therapist to help them-selves and one another. Group therapy helps people learn about them-selves and improve their interpersonal 
                        relationships. It addresses feelings of isolation, depression or anxiety. And it helps people make significant changes so they feel better 
                        about the quality of their lives. Additionally, group therapists can apply the principles of group to other set-tings and situations such 
                        as businesses, schools and community organizations.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>


          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="display-1 section-header">Additional Services Offered</h2>
              <span class="subheading">
                In addition to services described above, we also offer:
              </span>
            </div>
          </v-flex>

          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 sm3>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large color="red lighten-2">fa-eye</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">EMDR<br><br></div>
                    </v-card-title>
                  </v-card>
                </v-flex>

                <v-flex xs12 sm3>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large color="red lighten-2">fa-clipboard-list</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Psychiatric Evaluations</div>
                    </v-card-title>
                  </v-card>
                </v-flex>

                <v-flex xs12 sm3>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large color="red lighten-2">fa-sticky-note</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Psychological Evaluations</div>
                    </v-card-title>
                  </v-card>
                </v-flex>

                <v-flex xs12 sm3>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large color="red lighten-2">fa-band-aid</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Trauma Assessments</div>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section id="providers">
        <v-layout
          column
          wrap
          class="my-3"
          align-center
        >
          <v-flex xs12>
            <v-container grid-list-xl class="pt-1">
              <v-layout row wrap align-center>
                <v-flex xs12 md10 offset-md1>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div class="text-xs-center display-1 section-header">Our Providers</div>
                    </v-card-title>

                    <v-card-text>
                      <div class="subheading">
                        At the Wise Way Counseling, we have many therapists with a variety of specialties, degrees, licenses, and experience. We provide 
                        services to consumers in the OKC Metro as well as surrounding areas. Our team currently provides services in English and Spanish 
                        at this time.   
                      </div>

                      <div class="subheading mt-3">
                        The Wise Way Counseling is always seeking licensed mental health professionals, as well as candidates, to join our team. We have 
                        Board Approved LPC Supervisors on site to provide supervision for candidates. If interested in a career with The Wise Way Counseling, 
                        please contact Emily at <span class="blue--text">{{ contactNumber }}</span>. 
                      </div>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section id="contact">
        <v-footer height="auto">
          <v-card flat tile class="flex">
            <v-card-title class="red lighten-2 white--text">
              <strong class="subheading">Get connected with us on social media!</strong>

              <v-spacer></v-spacer>

              <v-btn
                v-for="icon in icons"
                :key="icon.key"
                icon
                dark
                class="mx-3"
                :href="icon.url"
                target="_blank"
              >
                <v-icon size="24px">{{ icon.icon }}</v-icon>
              </v-btn>
            </v-card-title>

            <v-card-text class="grey lighten-3">
              <v-layout wrap>
                <v-flex xs12 sm4 class="my-3">
                  <v-flex layout column>
                    <span class="body-2">CONTACT</span>

                    <div>
                      <v-icon size="18px" class="mr-3" color="red lighten-2">fas fa-envelope</v-icon>
                      emily@thewisewaycounseling.com
                    </div>
                    <div>
                      <v-icon size="18px" class="mr-3" color="red lighten-2">fas fa-phone</v-icon>
                      {{ contactNumber }}
                    </div>
                    <div>
                      <v-icon size="18px" class="mr-3" color="grey lighten-3">fas fa-phone</v-icon>
                      Call to schedule an appointment.
                    </div>
                  </v-flex>
                </v-flex>

                <v-flex xs12 sm4 class="my-3">
                  <v-flex layout column>
                    <span class="body-2">ADDRESS</span>

                    <div>
                      <v-icon size="18px" class="mr-3" color="red lighten-2">fas fa-map-marker-alt</v-icon>
                      6801 South Western Avenue
                    </div>
                    <div>
                      <v-icon size="18px" class="mr-3" color="grey lighten-3">fas fa-map-marker-alt</v-icon>
                      Suite 203 & 205
                    </div>
                    <div>
                      <v-icon size="18px" class="mr-3" color="grey lighten-3">fas fa-map-marker-alt</v-icon>
                      Oklahoma City, Oklahoma 73139
                    </div>
                  </v-flex>
                </v-flex>

                <v-flex xs12 mt-2>
                  <iframe id="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1367.6874301262965!2d-97.53190458987032!3d35.3976766274836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b213f36751c3bd%3A0x16ebd0c5507ca43e!2s6801+S+Western+Ave%2C+Oklahoma+City%2C+OK+73139!5e0!3m2!1sen!2sus!4v1525307246546" frameborder="0" style="border:0" allowfullscreen></iframe>
                </v-flex>
              </v-layout>
            </v-card-text>

            <v-card-actions class="red lighten-2 justify-center">
              &copy;2018 — <strong>{{ title }}</strong>
            </v-card-actions>
          </v-card>
        </v-footer>
      </section>

    </v-content>
  </v-app>
</template>

<script>
  import Meta from 'mixins/meta'

  import Toolbar from 'components/Toolbar'

  export default {
    mixins: [Meta],

    components: {
      Toolbar
    },

    data () {
      return {
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'The Wise Way Counseling',
        contactNumber: '405-821-6447',
        icons: [ { key: 1, icon: 'fab fa-facebook', url: 'http://www.facebook.com' } ],
        toolbarItems: [
          { key: 1, href: 'home', title: 'Home' },
          { key: 2, href: 'about', title: 'About' },
          { key: 3, href: 'services', title: 'Services Offered' },
          { key: 4, href: 'providers', title: 'Our Providers' },
          { key: 5, href: 'contact', title: 'Contact' },
          { key: 6, href: null, title: 'Therapist Login' }
        ]
      }
    },

    computed: {
      logoSize() {
        if (!this.$vuetify.breakpoint.xsOnly) {
          return 300
        }

          return 175
      }
    },

    methods: {

    }
  }
</script>

<style>
  #google-map {
    height: 400px;
    width: 100%;
  }

  .card-services {
    min-height: 200px;
  }

  .logo-font {
    font-family: 'Courgette', cursive;
  }

  .section-header {
    font-family: 'Changa One', cursive;
  }
</style>
