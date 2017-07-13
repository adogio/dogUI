<template>
    <div>
        <div class="description" :class="place">
            <strong><slot></slot></strong>
        </div>
        <div class="outField">
            <input v-if="!type" v-model="inputed" @blur="rePlaceHolder" @input="onInput" @click="ClickIn" class="field">
            <input v-if="type=='number'" type="number" v-model="inputed" @blur="rePlaceHolder" @input="onInput" @click="ClickIn" class="field">
            <input v-if="type=='password'" type="password" v-model="inputed" @blur="rePlaceHolder" @input="onInput" @click="ClickIn"
                class="field">
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                inputed: "",
                place: "bigPlaceholder smallPlaceholder"
            }
        },
        name: "dog-input",
        computed: {

        },
        mounted: function () {},
        props: ['type'],
        components: {

        },
        methods: {
            rePlaceHolder: function () {
                if (this.inputed.length > 0) {
                    this.place = "smallPlaceholder";
                } else {
                    this.place = "bigPlaceholder smallPlaceholder";
                }
            },
            onInput: function () {
                this.place = "smallPlaceholder";
                this.$emit('input', this.inputed)
            },
            ClickIn: function () {
                this.place = "smallPlaceholder";
            }
        }
    }
</script>

<style scoped>
    .description {
        font-size: 10px;
        font-family: 'ubuntu';
        color: #a8a8a8;
    }

    .smallPlaceholder {
        transition: .2s;
        font-size: 7px;
        line-height: 16px;
        margin-top: 1px;
        margin-left: 7px;
        position: absolute;
        z-index: 4;
        white-space: nowrap;
    }

    .outField {
        padding: 0 3px 0 0px;
    }

    .field {
        width: 100%;
        height: 40px;
        position: relative;
        padding-top: 4px;
        padding-left: 10px;
        border: 0px;
        border-left: 5px solid #b30000;
        text-indent: 0;
        line-height: 12px;
        color: #000;
        background: #fff;
    }

    .bigPlaceholder {
        font-size: 15px!important;
        margin: 14px 5px 0 7px!important;
        white-space: nowrap;
    }
</style>
