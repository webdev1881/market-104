<template>

    <div>
        <HeaderTop/>
        <HeaderBottom/>

        <main class="main_layout">
            <div class="md:container md:mx-auto">
                <Nuxt />
            </div>
        </main>
        <Help/>
        <Footer />
    </div>
    
</template>


<script>
import HeaderTop from '@/components/M-HeaderTop'
import HeaderBottom from '@/components/M-HeaderBottom'
import Footer from '@/components/M-Footer'
import Help from '@/components/M-Help'
export default {
    name: 'default',
    components: {
        HeaderTop, HeaderBottom, Footer, Help
    },
    data: () => ({
        
    }),
}

</script>



<style lang='scss' scoped>

.main_layout {
    // max-width: $xl;
    // margin: 0 auto;
}
</style>