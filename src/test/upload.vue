<template>
    <div>
        <div class="row">
            <div class="larger-text col-xs-5">{{description}}
            </div>
            <div class="larger-text col-xs-7">
                <input v-bind:id="uniqueid" type="file" v-on:change="whenonChange" accept="image/*" style="display: none;">
                <icon-button icon="cloud-upload" v-bind:info="displays.upload" size="small" class="button button-block" v-bind:onclick="clickFile"></icon-button>
            </div>
        </div>
        <div class="row" v-if="picture.length>0">
            <div class="larger-text col-xs-5">{{displays.preview}}</div>
            <div class="larger-text col-xs-7">
                <img v-bind:src="picture" height="28px">
            </div>
        </div>
    </div>
</template>

<script>
    import anicon from './fontawesome.vue';
    import iconButton from './processbutton.vue';
    import infotab from './tabtag.vue';
    import strings from '../../strings.js';

    import {
        Cf$
    } from '../../../lib/caper.js';

    export default {
        components: {
            "anicon": anicon,
            "icon-button": iconButton,
            "info-tab": infotab
        },
        mounted: function () {
            if (this.$parent.$parent.language == "en") {
                this.displays = strings.uploadPicture.en;
            }
        },
        data: function () {
            return {
                picture: "",
                errorlog: "",
                displays: strings.uploadPicture.cn
            }
        },
        props: ["description", "uniqueid", "updatesrc"],
        methods: {
            clickFile: function () {
                // webkit.messageHandlers.IOS.postMessage("image");
                document.getElementById(this.uniqueid).click();
                this.errorlog = "Clicked button";
                // window.updateImage = this.updateImg;
            },
            clickIos: function () {
                window.updateImage = this.updateImg;
                webkit.messageHandlers.IOS.postMessage("image");
            },
            clickCamera: function () {
                window.updateImage = this.updateImg;
                webkit.messageHandlers.IOS.postMessage("camera");
            },
            updateImg: function (filedata) {
                this.errorlog = "Updating";
                lrz(filedata)
                    .then((rst) => {
                        this.updatesrc(rst.base64);
                        this.picture = rst.base64;
                        this.errorlog = "压缩成功";
                    })
                    .catch((err) => {
                        console.log(err);
                        this.updatesrc(filedata);
                        this.picture = filedata;
                        this.errorlog = "压缩失败";
                    })
                    .always(() => {});
            },
            testfun: function () {
                console.log(this.uniqueid);
            },
            whenonChange: function () {
                this.errorlog = "Updating";
                Cf$.read({
                    mode: 'url',
                    file: document.getElementById(this.uniqueid).files[0]
                }, (filedata) => {
                    lrz(filedata)
                        .then((rst) => {
                            this.updatesrc(rst.base64);
                            this.picture = rst.base64;
                            this.errorlog = "压缩成功";
                        })
                        .catch((err) => {
                            console.log(err);
                            this.updatesrc(filedata);
                            this.picture = filedata;
                            this.errorlog = "压缩失败";
                        })
                        .always(() => {});
                });
            }
        }
    }
</script>

<style scoped>
    button {
        padding: 0px;
        margin: 0px;
    }

    .col-xs-5 {
        padding-left: 2px;
        background: linear-gradient(to right, #ffd775, white);
    }

    .col-xs-7 {
        padding-right: 2px;
    }

    div {
        padding: 0px;
        margin: 0px;
    }

    input {
        width: 100%;
        border: 0px;
        border-bottom: 1px solid lightblue;
    }

    p,
    hr {
        margin: 0px;
    }
</style>