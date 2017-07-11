<template>
    <button v-bind:disabled="disabled" class="button button-block" v-bind:class="computedClass" v-bind:style="computedStyle"
        v-on:click="emitclick">
        <anicon v-bind:icon="icon"></anicon>&nbsp;|&nbsp;<slot></slot>
    </button>
</template>

<script>
    import anicon from '../components/icon.vue';
    export default {
        components: {
            "anicon": anicon
        },
        data: function () {
            return {
                disabled: this.disablebutton ? this.disablebutton : false,
                dogicon: this.icon ? this.icon : "question"
            }
        },
        methods: {
            emitclick: function () {
                this.$emit('click');
            }
        },
        props: ['icon', 'size', 'color', 'disablebutton'],
        computed: {
            computedStyle: function () {
                let edge = "border-left: 9px solid #";
                switch (this.color) {
                    case 'blue':
                        edge += "004595";
                        break;
                    case 'green':
                        edge += "003470";
                        break;
                    case 'orange':
                        edge += "7d4c00";
                        break;
                    case 'red':
                        edge += "ce0000";
                        break;
                    case 'purple':
                        edge += "5e007d";
                        break;
                    case 'black':
                        edge += "7c7c7c";
                        break;
                }
                edge += ";";
                return edge;
            },
            computedClass: function () {
                let comClass = ""
                switch (this.color) {
                    case 'blue':
                        comClass += "button-primary";
                        break;
                    case 'green':
                        comClass += "button-action";
                        break;
                    case 'orange':
                        comClass += "button-highlight";
                        break;
                    case 'red':
                        comClass += "button-caution";
                        break;
                    case 'purple':
                        comClass += "button-royal";
                        break;
                    case 'black':
                        comClass += "button-inverse";
                        break;
                }
                let size = "normal";
                if (this.size) {
                    size = this.size;
                }
                if (this.size == "xl") {
                    comClass += " button-xl";
                } else {
                    comClass += " button-" + size;
                }
                return comClass;
            }
        }
    }
</script>

<style scoped>
    .button-xl {
        height: 105px;
        font-size: 48px;
        font-family: 'ubuntu';
    }

    button {
        margin-top: 2px;
    }

    .button-block {
        width: 100%;
    }
</style>