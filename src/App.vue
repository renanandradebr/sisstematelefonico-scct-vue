<template>
  <v-app>
    <v-app-bar class="navbar" app color="primary" dark flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-container class="py-0 fill-height">
        <div>
          <v-img src="./assets/logo-scct2.png" transition="scale-transition" width="100" />
        </div>

        <v-divider class="mx-4" vertical></v-divider>

        <v-btn v-for="link in links" :key="link" text>
          {{ link }}
        </v-btn>
        <v-spacer></v-spacer>
        <v-responsive max-width="260">
          <v-text-field class="mp-10" dense flat hide-details rounded solo-inverted append-icon="mdi-magnify"
            label="Pesquisar"></v-text-field>
        </v-responsive>
        <v-divider class="mx-4" vertical></v-divider>
        <v-avatar class="mr-10" color="white darken-1" size="32"></v-avatar>

      </v-container>

    </v-app-bar>
    
    <v-row>
      <v-col cols="12" class="container">
        <v-main class="grey lighten-3">
          <v-container>
            <v-row>
              <v-col cols="2">

                <v-sheet rounded="lg">
                
                  

                  <v-list color="transparent">
                    <v-list-item v-for="n in 2" :key="n" link>
                      <v-list-item-content>
                        <v-list-item-title>
                          Option {{ n }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>

                    <v-divider class="my-2"></v-divider>

                    
                  </v-list>
                </v-sheet>
              </v-col>

              <v-col cols="10">
                <v-sheet min-height="70vh" rounded="lg">
                  <router-view />
                </v-sheet>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-col>
    </v-row>
    <footerCaema />

  </v-app>
</template>

<script>

import footerCaema from './components/footerCaema.vue'

export default {
  components: { footerCaema, },
  name: 'App',

  data() {

    return {
      search: '',
      drawer: false,
      links: [
        'Dashboard',
        'Profile',
      ],
    }
  },
};
</script>
<style>
.v-text-field {
  max-width: 400px;
  /* Defina a largura máxima do campo de pesquisa */
}

#barra {
  position: inherit;
  background-color: rgb(0, 77, 210);

}

.scct-logodiv {
  width: 60%;
  margin: auto;
  display: block;
  margin-top: 5%;
}

#scct-logo {
  margin-bottom: 5%;
}

.botoes {
  margin: 2%;


}

.loginProfile {
  width: 60%;
  margin: auto;
  display: block;
  margin-bottom: 100%;
}

#login {

  border-radius: 100%;
  width: 100px;
  height: 100px;
  margin-left: 20%;
  margin-top: 15%;

}

h1 {
  text-align: center;

  color: aliceblue;
}
</style>
