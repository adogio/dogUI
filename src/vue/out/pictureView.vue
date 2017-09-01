<template>
    <div v-if="small&&rows">
        <div class="row" v-for="(row, indexl) in rows" :key="indexl">
            <div class="col-xs-4" v-for="(i, indexr) in row" :key="indexr">
                <div class="box" @click="biggerClick(indexl, indexr)">
                    <img :src="i" :alt="alt?alt:'X'">
                </div>
            </div>
        </div>
        <div v-if="!small">
            <div class="box" @click="smallClick">
                <img :src="biggerone" :alt="alt?alt:'X'">
            </div>
            <div class="displayText">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
import button from './button.vue';
export default {
    data: function() {
        return {
            rows: null,
            small: true,
            left: 0,
            top: 0
        }
    },
    computed: {
        biggerone: function() {
            return this.rows[this.left][this.top];
        }
    },
    mounted: function() {
        this.rows = this.getrows();
    },
    name: "dog-view",
    props: ['srcs', 'alt'],
    components: {
        "dog-button": button
    },
    methods: {
        download: function() {
            // TODO
            // let dataURI = this.rows[this.left][this.top];
            // var byteString = atob(dataURI.split(',')[1]);
            // var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
            // var ab = new ArrayBuffer(byteString.length);
            // var ia = new Uint8Array(ab);
            // for (var i = 0; i < byteString.length; i++) {
            //     ia[i] = byteString.charCodeAt(i);
            // }

            // var bb = new Blob([ab]);
            // const a = document.createElement('a');
            // const url = window.URL.createObjectURL(bb);
            // a.href = url;
            // a.download = 'atthis_dl.jpg';
            // a.click();
            // window.URL.revokeObjectURL(url);
        },
        biggerClick: function(indexl, indexr) {
            this.left = indexl;
            this.top = indexr;
            this.small = false;
        },
        smallClick: function() {
            this.small = true;
        },
        getrows: function() {
            let srcs = this.srcs;
            let re = [];
            let temp = [];
            while (srcs.length != 0) {
                temp.push(srcs.shift());
                if (temp.length == 3 || srcs.length == 0) {
                    re.push(temp);
                    temp = [];
                }
            }
            return re;
        }
    }
}
</script>

<style scoped>
.box {
    width: 100%;
    height: 100%;
    text-align: center;
}

div.displayText {
    font-size: 15px;
    text-align: center;
    font-family: 'ubuntu';
}

.box img {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: auto;
}

div.col-xs-4,
div.row {
    margin: 0px;
    padding: 0px;
}
</style>