<template>

    <div class='admin'>

        <nuxt-link class="users" to="/admin/users">{{ 'USERS' }}</nuxt-link>
    
    </div>

</template>


<script>

export default {
    name: 'admin',
    nuxtI18n: false,
    data: () => ({
        
    }),
    layout: 'admin',
    validate() {
        return true
    },
    methods: {

    }
}

</script>



<style lang='scss' scoped>
    
    
    
</style>