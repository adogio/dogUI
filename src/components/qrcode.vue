<template>
    <div>
        <div class="content">
            <table class="center">
                <tr v-for="i in src">
                    <td v-for="j in i" :class="toClass(j)">
                    </td>
                </tr>
            </table>

        </div>
        <div class="above"><img src="https://raw.githubusercontent.com/adogio/Flow.resource/master/Atthisicon.png"></div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                qrcode: require('../../../dogLib/src/main').qrtable,
                src: ""
            }
        },
        computed: {

        },
        watch: {
            content: function () {
                this.src = this.qrcode(this.content, 6);
            }
        },
        mounted: function () {
            this.src = this.qrcode(this.content, 6);
            console.log(this.src);
        },
        props: ['content'],
        components: {},
        methods: {
            toClass: function (ingo) {
                return (ingo == 1) ? 'black' : 'white';
            }
        }
    }
</script>

<style scoped>
    .content {
        text-align: center;
    }


    td {
        padding: 4px;
    }

    img {
        width: 48px;
        height: 48px;
        background-color: red;
    }

    .above {
        position: fixed;
        top: 258px;
        text-align: center;
        width: 100%;
    }

    td.black {
        background-color: #222;
    }

    td.white {
        background-color: white;
    }

    .center {
        margin: auto;
        margin-top: 138px;
        box-sizing: border-box;
        border: 9px solid white;
    }
</style>