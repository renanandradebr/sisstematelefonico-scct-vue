<template>

    <div class="bread">
        <p id="bread"><strong>
        <v-breadcrumbs :items="items"></v-breadcrumbs></strong></p>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            items: [
                {
                    text: 'Home',
                    disabled: false,
                    href: '/',
                },
                {
                    text: 'Contato',
                    disabled: false,
                    href: '/Contatos',
                },
                {
                    text: 'Cadastro de usuário',
                    disabled: true,
                    href: '/cadastro',
                },
            ],
        };
    },
};
</script>
<style>

.bread{
    margin-left: 1%;
    width: 600px;
}
#bread{
  
}
</style>