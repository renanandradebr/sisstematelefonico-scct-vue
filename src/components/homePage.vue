<template>
  <v-container>
    <v-divider class="my-3"></v-divider>
    <v-row>
      <v-col cols="12" class="home1 pa-4 my-4">
        <v-container>
          <v-row justify="center">
            <div class="botoesScct">
              <v-btn block color="primary" class="mb-2" to='./cadastro' elevation="1">
                <v-icon>mdi-account-plus</v-icon> CADASTRO DE USUÁRIO</v-btn>

              <v-btn block color="primary" class="mb-2" to='./cadastroTelefone' elevation="1">
                <v-icon>mdi-phone-plus</v-icon>CADASTRO DE TELEFONE FIXO</v-btn>

              <v-btn block color="primary" class="mb-2" elevation="1"> <v-icon>mdi-plus</v-icon>CADASTRO De
                CELULAR</v-btn>

              <v-btn block color="primary" class="mb-2" elevation="1"> <v-icon>mdi-deskphone</v-icon>AGENDA
                TELEFÔNICA</v-btn>

              <v-btn block color="primary" class="mb-2" to='./backups' elevation="1">
                <v-icon>mdi-cloud-upload</v-icon>SOLICITAR BACKUPS</v-btn>

              <v-btn block color="primary" class="mb-2" elevation="1"> <v-icon>mdi-phone-log</v-icon>ACESSAR LOGS
                DE USUÁRIO</v-btn>
              <v-img id="imgFundo" src="https://i.pinimg.com/564x/a7/d6/d2/a7d6d279c1e8611828b6385ed7a46c09.jpg"></v-img>
            </div>

          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-divider></v-divider>

    <v-row>
      <v-col>

      </v-col>
    </v-row>
  </v-container>
</template>



<script>

export default {
  data() {
    return {
    }
  },
}
</script>
<style>
.carousel-container {
  margin-top: 1%;
  margin-left: 12%;
}

.botoesScct {
  position: relative;
  overflow: hidden;
  padding: 5px;
}

.botoesScct v-btn {
  position: relative;
  margin-left: 25px;
  align-content: center;
  opacity: 100%;
}

#imgFundo {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  opacity: 1; }

.logo-scct{
  width: 100%;
  height: auto;
}
</style>