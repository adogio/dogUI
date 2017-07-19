<template>
    <div>
        <div class="description" :class="place" @click="ClickIn">
            <span :class="unpin" class="placeh"><i :class="ifIcon"></i></span><strong><slot></slot></strong>
        </div>
        <transition name="fade">
            <div v-if="type=='money'" class="money" v-show="cover">
                <strong>$</strong>
            </div>
        </transition>
        <div class="outField">
            <input v-if="!type" v-model="inputed" @blur="rePlaceHolder" @input="onInput" @click="ClickIn" class="field" v-focus="focusStatus">
            <input v-if="type=='number'" type="number" v-model="inputed" @blur="rePlaceHolder" @input="onInput" @click="ClickIn" class="field"
                v-focus="focusStatus">
            <input v-if="type=='email'" type="email" v-model="inputed" @blur="rePlaceHolder" @input="onInput" @click="ClickIn" class="field"
                v-focus="focusStatus">
            <input v-if="type=='tel'" type="tel" v-model="inputed" @blur="rePlaceHolder" @input="onInput" @click="ClickIn" class="field"
                v-focus="focusStatus">
            <input v-if="type=='money'" type="number" v-model="inputed" @blur="rePlaceHolder" @input="onInput" @click="ClickIn" class="money"
                v-focus="focusStatus">
            <input v-if="type=='password'" type="password" v-model="inputed" @blur="rePlaceHolder" @input="onInput" @click="ClickIn"
                class="field" v-focus="focusStatus">
            <input v-if="type=='date'" type="date" v-model="inputed" @blur="rePlaceHolder" @input="onInput" @click="ClickIn" class="dates"
                v-focus="focusStatus">
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                inputed: "",
                place: "bigPlaceholder smallPlaceholder",
                unpin: "redder",
                cover: false,
                focusStatus: false
            }
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
        name: "dog-input",
        computed: {
            ifIcon: function () {
                if (this.icon) {
                    return "fa fa-" + this.icon + " fa-fw";
                } else {
                    return "fa fa-star fa-fw";
                }
            }
        },
        mounted: function () {
            this.inputed = this.value;
            if (this.type == 'date') {
                this.place = "smallPlaceholder";
            } else {
                this.rePlaceHolder();
            }
        },
        props: ['type', 'value', 'icon'],
        methods: {
            rePlaceHolder: function () {
                this.focusStatus = false;
                if (this.inputed.length > 0) {
                    this.place = "smallPlaceholder";
                    this.unpin = "grayier";
                } else {
                    if (this.type == 'money') {
                        this.cover = false;
                    }
                    if (this.unpin == "grayier") {
                        this.unpin = "oranager";
                    }
                    if (this.type != "date") {
                        this.place = "bigPlaceholder smallPlaceholder";
                    }
                }
            },
            onInput: function () {
                this.place = "smallPlaceholder";
                this.$emit('input', this.inputed);
                this.focusStatus = false;
            },
            ClickIn: function () {
                this.unpin = "grayier";
                this.place = "smallPlaceholder";
                this.focusStatus = true;
                if (this.type == 'money') {
                    this.cover = true;
                }
            }
        }
    }
</script>

<style scoped>
    .description {
        font-family: 'ubuntu';
        color: #a8a8a8;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .2s
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0
    }

    div.money {
        font-family: 'ubuntu';
        color: #777;
        line-height: 16px;
        position: absolute;
        z-index: 4;
        font-size: 18px!important;
        margin: 15px 3px 0 16px!important;
        white-space: nowrap;
    }

    input.money {
        width: 100%;
        height: 40px;
        position: relative;
        padding-top: 9px;
        padding-left: 27px;
        font-size: 21px;
        border: 0px;
        text-indent: 0;
        line-height: 12px;
        color: #000;
        background: #fff;
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

    .outField {
        padding: 0 3px 0 0px;
        border-left: 5px solid #b30000;
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

    input.dates {
        width: 100%;
        height: 40px;
        position: relative;
        padding-top: 9px;
        padding-left: 10px;
        color: #000;
        background: #fff;
        line-height: 12px;
        border: 0px;
    }

    .field {
        width: 100%;
        height: 40px;
        position: relative;
        padding-top: 9px;
        padding-left: 11px;
        font-size: 21px;
        border: 0px;
        text-indent: 0;
        line-height: 12px;
        color: #000;
        background: #fff;
    }

    .bigPlaceholder {
        font-size: 21px!important;
        margin: 8px 5px 0 7px!important;
        white-space: nowrap;
    }
</style>