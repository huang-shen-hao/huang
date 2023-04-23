<template>
    <div class="footer-container">
        <div class="item" @click="changeIndex(0)"><router-link to="/" tag="span" :class="index == 0 ? 'active' : ''"><i
                    class="el-icon-house huang">
                    <div>首页</div>
                </i></router-link></div>

        <div class="item" @click="changeIndex(1)"><router-link to="/message" tag="span"
                :class="index == 1 ? 'active' : ''"><i class="el-icon-chat-dot-round huang">
                    <div>消息</div>
                </i></router-link></div>

        <div class="item" @click="changeIndex(2)"><router-link to="/public" tag="span"
                :class="index == 2 ? 'active' : ''"><i class="el-icon-search huang">
                    <div>公益招聘</div>
                </i></router-link></div>

        <div class="item" @click="changeIndex(3)"><router-link to="/page" tag="span" :class="index == 3 ? 'active' : ''"><i
                    class="el-icon-video-camera huang">
                    <div>主页</div>
                </i></router-link></div>

        <div class="item" @click="changeIndex(4)"><router-link to="/own" tag="span" :class="index == 4 ? 'active' : ''"><i
                    class="el-icon-setting huang">
                    <div>我的</div>
                </i></router-link></div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            index: 0
        }
    },
    mounted() {

    },
    computed: {

    },
    methods: {
        // 改变底边栏点击状态
        changeIndex(index) {
            this.index = index
        }
    },
}
</script>
<style scoped>
.footer-container {
    height: 60px;
    line-height: 50px;
    width: 100%;
    background-color: black;
    position: fixed;
    bottom: 0;
    left: 0;
    color: #cccccc;
    font-size: 16px;
    display: flex;
    justify-items: center;
    z-index: 999;

}

.footer-container .item {
    flex: 1;
    text-align: center;
}

.footer-container .item .active {
    color: red;
}

.footer-container .item span .huang {
    /* background-color: yellow; */
    /* display: block; */
    line-height: 26px;

}
</style>
