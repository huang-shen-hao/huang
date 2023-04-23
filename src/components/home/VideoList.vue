<template>
    <div class="videos">
        <video-player class="video-player vjs-default-skin vjs-big-play-centered" ref="videoPlayer" :playsinline="true"
            :options="playerOptions"></video-player>
    </div>
</template>
<script>
import { videoPlayer } from 'vue-video-player'
export default {
    data() {
        return {
            playerOptions: {
                autoplay: false, //如果true,浏览器准备好时开始回放。
                muted: false, // 默认情况下将会消除任何音频。
                loop: false, // 导致视频一结束就重新开始。
                preload: 'auto',
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [
                    {
                        src: 'http://vjs.zencdn.net/v/oceans.mp4', // 路径
                        type: 'video/mp4'  // 类型
                    },
                ],
                // http://vd3.bdstatic.com/mda-pdibbpnfgbdt03da/360p/h264/1681891235228396808/mda-pdibbpnfgbdt03da.mp4

                width: document.documentElement.clientWidth,
                notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                controlBar: false
            },
            playing: true,
        }
    },
    components: {
        videoPlayer,
    },
    methods: {
        playOrStop() {
            if (this.playing) {
                this.$refs.videoPlayer.player.pause()
                this.playing=false
            }else{
                 this.$refs.videoPlayer.player.play()
                this.playing = true
            }
        }
    }
}
</script>
<style scoped></style>
