<template>
    <div>
        <dog-button @click="calling" :icon="icon">
            <slot></slot>
        </dog-button>
    </div>
</template>

<script>
    import dogbutton from './button.vue';
    import {
        picture
    } from 'doglib'

    export default {
        data: function () {
            return {
                fileInput: null,
                pict: null
            }
        },
        mounted: function () {
            this.fileInput = document.createElement("input");
            this.fileInput.type = "file";
            this.fileInput.onchange = this.shrink;
            this.pict = new picture(this.fileInput);
        },
        props: ['icon', 'quality'],
        components: {
            "dog-button": dogbutton
        },
        methods: {
            calling: function () {
                this.fileInput.click();
            },
            shrink: function () {
                if (this.quality) {
                    this.pict.shrink(parseInt(this.quality), (url) => {
                        this.$emit('change', url);
                    })
                } else {
                    this.pict.getURL((url) => {
                        this.$emit('change', url);
                    })
                }
            }
        }
    }
</script>

<style scoped>
    input {
        display: none;
    }

    div {
        font-size: 32px;
    }
</style>