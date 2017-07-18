<template>
    <div>
        <div class="description" :class="place" @click="ClickIn">
            <strong><slot></slot></strong>
        </div>
        <div class="outField">
            <input v-if="!type" v-model="inputed" @blur="rePlaceHolder" @input="onInput" @click="ClickIn" class="field" v-focus="focusStatus">
            <input v-if="type=='number'" type="number" v-model="inputed" @blur="rePlaceHolder" @input="onInput" @click="ClickIn" class="field"
                v-focus="focusStatus">
            <input v-if="type=='password'" type="password" v-model="inputed" @blur="rePlaceHolder" @input="onInput" @click="ClickIn"
                class="field" v-focus="focusStatus">
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                inputed: "",
                place: "bigPlaceholder smallPlaceholder",
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

        },
        mounted: function () {
            this.inputed = this.value;
            this.rePlaceHolder();
        },
        props: ['type', 'value'],
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
            },
            ClickIn: function () {
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

    .field {
        width: 100%;
        height: 40px;
        position: relative;
        padding-top: 4px;
        padding-left: 10px;
        font-size: 21px;
        border: 0px;
        text-indent: 0;
        line-height: 12px;
        color: #000;
        background: #fff;
    }

    .bigPlaceholder {
        font-size: 21px!important;
        margin: 14px 5px 0 7px!important;
        white-space: nowrap;
    }
</style>