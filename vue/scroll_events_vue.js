// https://blog.capilano-fw.com/?p=4705
// CONSOLE DOT LOG カナダLOVE!なフリーランス・プログラマーのブログ！

    Vue.component('v-move-to-top', {
        data() {
            return {
                show: false
            };
        },
        template: '<transition name="fade">'+
            '<button type="button" :style="styles" v-if="show" @click="moveToTop"><slot></slot></button>'+
            '</transition>',
        methods: {
            moveToTop() {
                const duration = 100;  // 移動速度（1秒で終了）
                const interval = 1;    // 0.025秒ごとに移動
                const step = -window.scrollY / Math.ceil(duration / interval); // 1回に移動する距離
                const timer = setInterval(() => {
                    window.scrollBy(0, step);   // スクロール位置を移動
                    if(window.scrollY <= 0) {
                        clearInterval(timer);
                    }
                }, interval);
            }
        },
        computed: {
            styles() {

                let styles = { position: 'fixed' };

                if(this.position === 'top-left') {
                    styles['top'] = '20px';
                    styles['left'] = '20px';

                } else if(this.position === 'top-right') {
                    styles['top'] = '20px';
                    styles['right'] = '20px';

                } else if(this.position === 'bottom-left') {
                    styles['bottom'] = '20px';
                    styles['left'] = '20px';

                } else {
                    styles['bottom'] = '20px';
                    styles['right'] = '20px';

                }

                return styles;

            }
        },
        mounted() {
            // CSSを追加
            let style = document.createElement('style');
            style.innerHTML = `
                        .fade-enter-active, .fade-leave-active {
                            transition: opacity .5s;
                        }
                        .fade-enter, .fade-leave-to {
                            opacity: 0;
                        }
                    `;
            document.getElementsByTagName('head')[0].appendChild(style);

            // スクロール・イベントを追加
            window.addEventListener('scroll', () => {
                this.show = (window.scrollY > 150);
            });
        }
    });

    new Vue({
        el: '#scroll',
    });

