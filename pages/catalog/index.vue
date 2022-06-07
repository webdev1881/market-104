<template>

    <div class='catalog'>

        <h1>CATALOG</h1>

        <div 
        class="item"
        v-for="product in PRODUCTS"
        :key="product.id"
        > {{ product.title }} </div>

    </div>

</template>


<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'catalog',
    data: () => ({
        
    }),
    methods: {
        ...mapActions([
            'GET_PRODUCTS',
            // 'ADD_TO_CART'
        ]),
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
      ]),
    },

    mounted() {

        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            this.GET_PRODUCTS()
            this.$nuxt.$loading.finish()
        })


        // this.GET_PRODUCTS()
        // .then((data) => {
        //     console.log( data )
        // })
    },
}

</script>



<style lang='scss' scoped>
    
    
    
</style>