<template>
    <div class="top-container">
        <div class="icon">
            <span class="iconfont icon-sousuo"></span>
            <span class="iconfont icon-zhibo"></span>
        </div>
        <div class="title">
            <div class="item" @click="changeTop(0)"><span :class="index == 0 ? 'active' : ''">人才</span></div>
            <div class="item" @click="changeTop(1)"><span :class="index == 1 ? 'active' : ''">雇主</span></div>
            <div class="item" @click="changeTop(2)"> <span :class="index == 2 ? 'active' : ''">合伙人</span></div>
            <div class="item" @click="changeTop(3)"> <span :class="index == 3 ? 'active' : ''">推荐</span></div>
            <div class="item" @click="changeTop(4)"> <span :class="index == 4 ? 'active' : ''">关注 <i
                        class="el-icon-open"></i></span></div>
        </div>

    </div>
</template>
<script>

export default {
    data() {
        return {
            index: 2
        }
    },
    methods: {
        changeTop(index) {
            this.index = index
        }
    }
}
</script>
<style scoped>

.top-container {
    width: 100%;
    height: 100px;
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    color: #cccccc;
    font-size: 18px;
    z-index: 999;
}

.top-container .icon {
    height: 60%;
}

.iconfont {
    line-height: 48px;
    font-size: 30px;
    padding: 10px;
}

.top-container .title {
    height: 40%;
    display: flex;
    justify-items: center;

}

.top-container .title .item {
    flex: 1;
    text-align: center;
}

.top-container .title .item .active {
    color: yellow;
    border-bottom: 2px solid white;
}
</style>
