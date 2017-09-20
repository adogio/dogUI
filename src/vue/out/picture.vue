<template>
    <div>
        <dog-button @click="calling" :icon="ificon" :size="ifsize" :color="ifcolor">
            <slot></slot>&nbsp;|&nbsp;
            <dog-icon v-if="!sizer" icon="file-image-o"></dog-icon>
            <span v-if="sizer">{{sizer}}</span>
            <img v-if="preview&&sizer" :src="src" :alt="alt?alt:'X'">
        </dog-button>
    </div>
</template>

<script>
import dogbutton from './button.vue';
import icon from '../components/icon.vue';
import {
    picture
} from 'doglib'

export default {
    data: function() {
        return {
            fileInput: null,
            pict: null,
            src: "",
            sizer: ""
        }
    },
    computed: {
        ifsize: function() {
            return this.size ? this.size : 'normal'
        },
        ifcolor: function() {
            return this.color ? this.color : undefined
        },
        ificon: function() {
            return this.icon ? this.icon : "question"
        }
    },
    mounted: function() {
        this.fileInput = document.createElement("input");
        this.fileInput.type = "file";
        if (this.accept) {
            this.fileInput.accept = "image/*"
        }
        this.fileInput.onchange = this.shrink;
        this.pict = new picture(this.fileInput);
    },
    props: ['icon', 'quality', 'size', 'color', 'preview', 'alt', 'accept'],
    name: "dog-upload",
    components: {
        "dog-button": dogbutton,
        "dog-icon": icon
    },
    methods: {
        calling: function() {
            this.fileInput.click();
        },
        calSize: function(base64) {
            let length = base64.length;
            var sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
            var i = parseInt(Math.floor(Math.log(length) / Math.log(1024)));
            return Math.round(length / Math.pow(1024, i), 2) + ' ' + sizes[i];
        },
        shrink: function() {
            const emit = (url) => {
                this.$emit('change', url);
                if (this.preview) {
                    this.src = url;
                }
                this.sizer = this.calSize(url);
            }
            if (this.quality) {
                this.pict.shrink(parseInt(this.quality), (url) => {
                    emit(url);
                })
            } else {
                this.pict.getURL((url) => {
                    emit(url);
                })
            }
        }
    }
}
</script>

<style scoped>
img {
    height: 80%;
    border: 1px solid white;
    padding-bottom: 2px;
}

input {
    display: none;
}

.bigNews {
    font-size: 5px;
}

div {
    font-size: 32px;
}
</style>