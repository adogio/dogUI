<template>
    <div>
        <div class="description" :class="place">
            <strong><slot></slot></strong>
        </div>
        <div>
            <textarea ref="area" class="field" name="textarea" v-model="inputed" @click="ClickIn" @input="onInput" @blur="rePlaceHolder"
                :style="autoHeight"></textarea>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                place: "bigPlaceholder smallPlaceholder",
                inputed: "",
                autoHeight: ""
            }
        },
        directives: {},
        name: "dog-textarea",
        computed: {

        },
        mounted: function () {},
        props: [],
        components: {

        },
        methods: {
            rePlaceHolder: function () {
                this.focusStatus = false;
                if (this.inputed.length > 0) {
                    this.place = "smallPlaceholder";
                } else {
                    this.place = "bigPlaceholder smallPlaceholder";
                }
            },
            onInput: function () {
                this.place = "smallPlaceholder";
                this.$emit('input', this.inputed);
                this.focusStatus = false;
                if (this.$refs.area.scrollHeight > 135) {
                    this.autoHeight = "height: 135px;";
                } else {
                    this.autoHeight = "height: " + this.$refs.area.scrollHeight + "px;";
                }
            },
            ClickIn: function () {
                this.place = "smallPlaceholder";
            }
        }
    }
</script>

<style scoped>
    .description {
        font-family: 'ubuntu';
        color: #a8a8a8;
    }

    .field {
        position: relative;
        padding-top: 4px;
        padding-left: 10px;
        font-size: 21px;
        border: 0px;
        border-left: 5px solid #b30000;
        color: #000;
        background: #fff;
    }

    .bigPlaceholder {
        font-size: 21px!important;
        margin: 14px 5px 0 7px!important;
        white-space: nowrap;
    }

    .smallPlaceholder {
        transition: .2s;
        font-size: 15px;
        line-height: 16px;
        margin-top: 1px;
        margin-left: 7px;
        position: absolute;
        z-index: 4;
        white-space: nowrap;
    }

    textarea {
        width: 100%;
        height: 100%;
        overflow-y: auto;
        resize: none;
        word-wrap: break-word;
        transition-property: all;
        transition-delay: .2s;
    }
</style>