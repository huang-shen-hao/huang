<template>
    <div>
        <HomeTop></HomeTop>
        <MyVideo></MyVideo>
        <HomeFooter></HomeFooter>


    </div>
</template>
<script>
import MyVideo from '../components/home/MyVideo.vue'
import HomeTop from '../components/home/HomeTop.vue'
import HomeFooter from '../components/home/HomeFooter.vue'


export default {
    data() {

    },
    components: {
        HomeTop,
        MyVideo,
        HomeFooter


    }
}
</script>
<style scoped></style>
