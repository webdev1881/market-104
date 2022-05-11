<template>

    <button
        :class="{btn:'btn', normal_size: 'normal_size', type: 'secondary' }"
        @click="$emit('click')"
     >

        <div class="content"
            :text="text"
        >
        <div>
           {{ text }} 
        </div>
        </div>

    </button>

</template>


<script>

export default {
    name: 'm-button',
    props: {
        text: {type:String, default:'default'},
        width: {type:String, default:'50'},
        src: {type:String, default:''},
        // type: {type:String, default:'secondary'},
    },
    data: () => ({
        
    }),
}

</script>



<style lang='scss' scoped>
// @import '@/assets/front_end/fontawesome-free-5.15.3-web/css/fontawesome.css';


.btn {
    border: 1px solid #F28F24;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 0 1%;
    // justify-content: space-between;
    justify-content: center;
}

.content {
    width: 100%;
    display: flex;
    justify-content: center;
}



.normal_size {
    width: 300px;
}


.secondary {
    min-width: 117px;
    transition-duration: 0.1s;

    // &:hover {
    //     color: #ffff;
    //     background-color: #F28F24;
    // }
    // &::before {

    // }
}
    
    
    
</style>