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




              <v-list>
                <v-list-tile>
                  <v-list-tile-action>
                    <span class="body-2">CONTACT</span>
                  </v-list-tile-action>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon color="indigo">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>(650) 555-1234</v-list-tile-title>
                    <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-icon>chat</v-icon>
                  </v-list-tile-action>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-action></v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>(323) 555-6789</v-list-tile-title>
                    <v-list-tile-sub-title>Work</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-icon>chat</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>



            






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
                <v-flex xs12 sm6 class="my-3 blue">
                  <v-flex layout column>

                    <!-- <v-card flat tile class="flex">
                      <v-card-title class="grey lighten body-2">CONTACT</v-card-title>
                      <v-card-text>
                                              <v-icon size="18px" class="mr-3" color="red lighten-2">fas fa-envelope</v-icon>
                      <span>emily@thewisewaycounseling.com</span>
                      </v-card-text>
                    </v-card> -->


                    <span class="body-2">CONTACT</span>

                    <v-flex>
                      <v-icon size="18px" class="mr-3" color="red lighten-2">fas fa-envelope</v-icon>
                      <span>emily@thewisewaycounseling.com</span>
                    </v-flex>
                    <v-flex>
                      <v-icon size="18px" class="mr-3" color="red lighten-2">fas fa-phone</v-icon>
                      {{ contactNumber }}
                    </v-flex>
                    <v-flex>
                      <v-icon size="18px" class="mr-3" color="grey lighten-3">fas fa-phone</v-icon>
                      Call to schedule an appointment.
                    </v-flex>
                  </v-flex>

                  <v-flex xs12 sm10 md6 mt-2>
                    <v-layout row>
                      <v-flex sm12>
                          <v-text-field
                              id="email"
                              label="E-mail"
                              prepend-icon="account_box"

                          ></v-text-field>    
                      </v-flex>
                    </v-layout>
                  </v-flex>



                </v-flex>

                <v-flex xs12 sm6 class="my-3">
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

                  <v-flex xs12 mt-2>
                    <iframe id="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1367.6874301262965!2d-97.53190458987032!3d35.3976766274836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b213f36751c3bd%3A0x16ebd0c5507ca43e!2s6801+S+Western+Ave%2C+Oklahoma+City%2C+OK+73139!5e0!3m2!1sen!2sus!4v1525307246546" frameborder="0" style="border:0" allowfullscreen></iframe>
                  </v-flex>
                </v-flex>
              </v-layout>
            </v-card-text>

            <v-card-actions class="red lighten-2 justify-center">
              &copy;2018 — <strong>{{ title }}</strong>
            </v-card-actions>
          </v-card>
        </v-footer>
      </section>