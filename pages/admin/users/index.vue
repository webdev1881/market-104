<template>

    <div class='users'>

        <div class="users">USERS</div>

        <ul>
            <li v-for="user of users" :key="user.id" >
                <a href="#"  @click.prevent="openUser(user)"> {{ user.name }} </a>
            </li>
        </ul>
    
    </div>

</template>


<script>

export default {
    name: 'users',
    nuxtI18n: false,
    layout: 'admin',
    data: () => ({
        users: []
    }),
    methods: {
        openUser(user) {
            this.$router.push('/admin/users/' + user.id)  
        }
    },
    async asyncData({$axios}) {
        const users = await $axios.$get('https://jsonplaceholder.typicode.com/users/')
        return {users}
    }
}

</script>



<style lang='scss' scoped>
    
.users {
    font-size: 20px;
}
    
</style>