<template>

    <div class="main_layout">
        <Header />
        <main>
            <div class="container mx-auto">
                <Nuxt />
            </div>
        </main>
        <Footer />
    </div>
    
</template>


<script>
import Header from '@/components/M-Header'
import Footer from '@/components/M-Footer'
export default {
    name: 'default',
    components: {
        Header, Footer
    },
    data: () => ({
        
    }),
}

</script>



<style lang='scss' scoped>
.main_layout {
    max-width: 1519px;
    margin: 0 auto;
}
</style>