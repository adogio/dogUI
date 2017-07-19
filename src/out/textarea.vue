<template>
    <div>
        <div class="description" :class="place" @click="ClickIn">
            <span :class="unpin" class="placeh"><i class="fa fa-star fa-fw"></i></span><strong><slot></slot></strong>
        </div>
        <div class="borderer">
            <textarea ref="area" class="field" name="textarea" v-model="inputed" @click="ClickIn" @input="onInput" @blur="rePlaceHolder"
                :style="autoHeight" v-focus="focusStatus"></textarea>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                place: "bigPlaceholder smallPlaceholder",
                inputed: "",
                unpin: "redder",
                focusStatus: false,
                autoHeight: ""
            }
        },
        directives: {},
        name: "dog-textarea",
        computed: {

        },
        mounted: function () {
            this.inputed = this.value;
            this.rePlaceHolder();
        },
        props: ['value'],
        components: {

        },
        directives: {
            focus: {
                update: (el, {
                    value
                }) => {
                    if (value) {
                        el.focus();
                    }

                }
            }
        },
        methods: {
            rePlaceHolder: function () {
                this.focusStatus = false;
                if (this.inputed.length > 0) {
                    this.place = "smallPlaceholder";
                    this.unpin = "grayier";
                } else {
                    if (this.unpin == "grayier") {
                        this.unpin = "oranager";

                    }
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
                this.unpin = "grayier";
                this.place = "smallPlaceholder";
                this.focusStatus = true;
            }
        }
    }
</script>

<style scoped>
    .description {
        font-family: 'ubuntu';
        color: #a8a8a8;
    }

    .borderer {
        border-left: 5px solid #b30000;
    }

    .field {
        position: relative;
        padding-top: 7px;
        padding-left: 10px;
        font-size: 21px;
        border: 0px;
        color: #000;
        background: #fff;
    }

    .bigPlaceholder {
        font-size: 21px!important;
        margin: 14px 5px 0 7px!important;
        white-space: nowrap;
    }

    span.placeh {
        font-size: 12px;
        vertical-align: text-top;
    }

    span {
        transition: all 0.5s;
    }

    span.oranager {
        color: orange;
    }

    span.redder {
        color: #b30000;
    }

    span.grayier {
        color: #e4e4e4;
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