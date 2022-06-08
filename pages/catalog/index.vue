<template>

    <div class='catalog'>

        <div class="catalog_title"> Газові котли </div>

        <div class="catalog_wrapper">  
            <M-Filters/>

            <div class="content">           
                <UIM-MiniProductCard
                    v-for="product in PRODUCTS"
                    :key="product.id"
                    :img="product.thumbnail"
                    :fullname="product.title"
                    :price="product.price"
                    :rate="product.rating"
                />
            </div>
        </div>


    </div>

</template>


<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'catalog',
    data: () => ({
        
    }),
    methods: {
        ...mapActions([ 'GET_PRODUCTS', ]),
    },
    computed: {
      ...mapGetters([ 'PRODUCTS', ]),
    },

    mounted() {

        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            this.GET_PRODUCTS()
            this.$nuxt.$loading.finish()
        })

    },
}

</script>



<style lang='scss' scoped>

.catalog_title {
    font-size: 24px;
    margin: 20px 0;
}

.catalog_wrapper {
    display: flex;
    padding: 20px 0;
}
    
.content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: 0 20px;
    grid-column-gap: 10px;
    grid-row-gap:20px;
}

.filters {
    width: 250px;
    height: 100%;
}
    
</style>