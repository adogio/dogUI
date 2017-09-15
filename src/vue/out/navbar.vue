<template>
    <div class="field">
        <div class="outside">
            <span v-if="stacks.length==0"><slot></slot></span>
            <a v-else v-for="(i, index) in stacks" @click="activateNav(index)" :style="navColor(index)">
                {{i.name}}
                <i v-if="index != stacks.length-1" class="fa fa-arrow-right"></i>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                stacks: []
            }
        },
        props: ['mount'],
        created: function () {
            window.dog.nav = (name, fun) => {
                this.stacks.push({
                    name: name,
                    fun: fun
                });
                fun();
                return true;
            }
        },
        mounted: function () {
            if (this.mount) {
                this.mount();
            }
        },
        name: "dog-nav",
        methods: {
            activateNav: function (index) {
                if (index != this.stacks.length - 1) {
                    this.stacks[index].fun();
                    let length = this.stacks.length;
                    for (let i = 0; i < length - index - 1; i++) {
                        this.stacks.pop();
                    }
                }
            },
            navColor: function (index) {
                if (index == this.stacks.length - 1) {
                    return "color: #ff0d00;font-weight: bold;";
                } else {
                    return "";
                }
            }
        }
    }
</script>

<style scoped>
    div.field {
        padding-top: 3px;
    }

    div.outside {
        padding-left: 3px;
        height: auto;
        border-left: 9px solid #ff9700;
        font-size: 18px;
        font-family: 'ubuntu';
        color: #5c5c5c;
    }
</style>