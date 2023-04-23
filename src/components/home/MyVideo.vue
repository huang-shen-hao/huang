<template>
  <div class="video-list">
    <swiper :options="swiperOption">
      <swiper-slide>
        <div class="item-video">
          <VideoList ref="video0"></VideoList>
        </div>
        <div class="info_bar_wrap">
          <InfoBar></InfoBar>
        </div>
        <div class="rightbar_wrap">
          <RightBar @changeCom="showComs"></RightBar>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item-video">
          <VideoList ref="video1"></VideoList>
        </div>
        <div class="info_bar_wrap">
          <InfoBar></InfoBar>
        </div>
        <div class="rightbar_wrap">
          <RightBar @changeCom="showComs"></RightBar>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item-video">
          <VideoList ref="video2"></VideoList>
        </div>
        <div class="info_bar_wrap">
          <InfoBar></InfoBar>
        </div>
        <div class="rightbar_wrap">
          <RightBar @changeCom="showComs"></RightBar>
        </div>
      </swiper-slide>
    </swiper>

    <!-- 评论视图 -->
    <div class="comment-wrap" v-if="showComment">

      <div class="comment-list">
        <div class="comment-top">
          <div class="number">33.0w条评论</div>
          <div @click="close"><i class="el-icon-close"></i></div>
        </div>
        <!-- 模拟评论数据 -->

        <div class="comment-body">
          <div class="context">
            <div class="context-item">
              <div class="user">
                <img src="@/assets/55.jpg" alt="">
              </div>
              <div class="message">
                <div>老铁666</div>
                <div class="time"><span>2023.4.23 14:40 上海</span></div>
              </div>
              <div><span class="iconfont icon-aixin"></span></div>
            </div>
          </div>
          <div class="context">
            <div class="context-item">
              <div class="user">
                <img src="@/assets/55.jpg" alt="">
              </div>
              <div class="message">
                <span>我滴乖乖</span>
                <div class="time"><span>2023.4.23 14:30 上海</span></div>
              </div>
              <div><span class="iconfont icon-aixin"></span></div>
            </div>
          </div>
          <div class="context">
            <div class="context-item">
              <div class="user">
                <img src="@/assets/55.jpg" alt="">
              </div>
              <div class="message">
                <span>这鱼真大</span>
                <div class="time"><span>2023.4.23 11:40 上海</span></div>
              </div>
              <div><span class="iconfont icon-aixin"></span></div>
            </div>
          </div>
          <div class="context">
            <div class="context-item">
              <div class="user">
                <img src="@/assets/55.jpg" alt="">
              </div>
              <div class="message">
                <span>老板上孜然</span>
                <div class="time"><span>2023.4.23 11:20 上海</span></div>
              </div>
              <div @click="close"><span class="iconfont icon-aixin"></span></div>
            </div>
          </div>
          <div class="context">
            <div class="context-item">
              <div class="user">
                <img src="@/assets/55.jpg" alt="">
              </div>
              <div class="message">
                <span>霸屏啦</span>
                <div class="time"><span>2023.4.23 10:40 上海</span></div>
              </div>
              <div><span class="iconfont icon-aixin"></span></div>
            </div>
          </div>
        </div>




      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import VideoList from '@/components/home/VideoList'
import InfoBar from '@/components/home/InfoBar'
import RightBar from '@/components/home/RightBar'
export default {
  data() {
    return {
      showComment: false,
      swiperOption: {
        direction: "vertical",
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1,
        mousewheel: true,
        mousewheelControl: true,
        height: window.innerHeight, //高度设置，占满设备高度
        resistanceRatio: 0,
        observeParents: true,
        on: {
          tap: () => {
            // console.log("6666")
            this.playerAction()
          }
        }
      },

    }
  },
  components: {
    swiper,
    swiperSlide,
    VideoList,
    InfoBar,
    RightBar
  },
  methods: {
    playerAction() {
      this.$refs.video0.playOrStop()
      this.$refs.video1.playOrStop()
      this.$refs.video2.playOrStop()
    },
    showComs() {
      this.showComment = true
    },
    close(){
       this.showComment = false
    }
  }

}
</script>
<style scoped>
.video-list {
  background-color: black;
}

/* .item-video {
  margin-top: 250px;
} */
.videos {
  position: relative;
  top: 250px;
}

.info_bar_wrap {
  position: absolute;
  bottom: 70px;
  left: 5px;
}

.rightbar_wrap {
  position: absolute;
  right: 0;
  bottom: 138px;

}

.comment-wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 400px;
  width: 100%;
  background: white;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  padding: 10px 10px;
  box-sizing: border-box;
  z-index: 1000000000000000000000;
}

.comment-top {
  display: flex;
  align-items: center;
}

.number {
  flex: 1;
  text-align: center;
}

.close {
  padding-right: 5px;
  font-size: 18px;
  color: #666;
}

.comment-body {
  max-width: 420px;
  overflow: auto;
}

.context {
  width: 100%;
  height: 80px;
  /* background:green; */
}

img {
  width: 33px;
  height: 33px;
  border-radius: 50%;
}

.context-item {
  display: flex;
  align-items: center;
  position: relative;
}

.message {
  flex: 1;
  margin-left: 10px;

}

.iconfont {
  font-size: 22px;
}

.time {
  position: absolute;
  font-size: 10px;
  color: rgb(187, 40, 167);

}
</style>
