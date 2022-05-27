<template>

    <div class='user'>
        <div class="username">USER: , {{ user.name }}</div>
        <div class="email">email: {{ user.email }}</div>
        <div class="mob">phone: {{ user.phone }}</div>
        
    </div>

</template>


<script>

export default {
    name: 'user',
    nuxtI18n: false,
    layout: 'admin',
    data: () => ({
        
    }),
    async asyncData({$axios, params}) {
        const user = await $axios.$get('https://jsonplaceholder.typicode.com/users/' + params.id )
        return {user}
    }
}

</script>



<style lang='scss' scoped>
    
    
    
</style>