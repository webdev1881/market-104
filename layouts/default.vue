<template>

    <div>
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
</style>