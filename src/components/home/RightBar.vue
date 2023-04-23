<template>
    <div class="right-bar">
        <div class="rightbar-item">
            <div class="person">
                <img src="@/assets/66.jpg" >
                <i class="el-icon-circle-plus"></i>
            </div>
        </div>
        <div class="icon-item"><span class="iconfont icon-aixin" @click="watchReview0">
                <p>19.w</p>
            </span></div>
        <div class="icon-item"><span class="iconfont icon-xingxing" @click="watchReview1">
                <p>33.w</p>
            </span></div>
        <div class="icon-item"><span class="iconfont icon-zhuanfa" @click.stop="watchReview2">
                <p>2023</p>
            </span></div>
        <div class="icon-item"><span class="iconfont icon-review" @click.stop="showComs($event)">
                <p>423</p>
            </span></div>
        <div class="icon-item"><span class="iconfont icon-weixin2 last" @click="watchReview4"></span></div>
    </div>
</template>
<script>
export default {
    props:['showComment'],
    data() {
        return {

        }
    },
    mounted() {

    },
    computed: {

    },
    methods: {
        watchReview() {
            alert("谢谢你这么帅还关注我")
        },
        watchReview0(){
            alert("谢谢点赞")
        },
         watchReview1() {
            alert("谢谢收藏")
        },
         watchReview2() {
            alert("谢谢转发")
        },
         showComs(e) {
            e.preventDefault();
            this.$emit('changeCom',this.showComment)
        },
         watchReview4() {
            alert("转发至微信")
        },
     
    },
}
</script>
<style scoped>
.right-bar {
    /* height: 300px; */
    width: 70px;
    /* background-color: rgb(202, 16, 16); */
    text-align: center;
    z-index: 9999999;
}

.right-bar .rightbar-item {
    width: 100%;
    height: 70px;
}

.person {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.person img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    left: 9px;
}

.el-icon-circle-plus {
    color: red;
    position: absolute;
    top: 43px;
    right: 7px;

}

.rightbar-item .icon-item {
    height: 60px;
    text-align: center;
}
.icon-item .iconfont{
    font-size: 25px;
    color: white;

}

.icon-item{
    padding-top: 10px;
}

.icon-item p{
    font-size: 10px;
    /* color: yellow; */
}






</style>
