<template>
    <div>
        <div class="borderier">
            <div class="description">
                <strong><slot></slot></strong>
            </div>
            <select class="main" @change="onChange" v-model="vmodel">
                <option v-for="i in statlist" :value="i.id">{{i.name}}</option>
            </select>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                vmodel: "",
                statlist: this.list
            }
        },
        name: "dog-block",
        watch: {
            list: function () {
                this.fixList();
            }
        },
        mounted: function () {
            this.fixList();
        },
        props: ["list"],
        components: {},
        methods: {
            fixList: function () {
                if (!this.list[0].id || !this.list[0].name) {
                    let newlist = [];
                    for (let i = 0; i < this.list.length; i++) {
                        newlist.push({
                            id: this.list[i],
                            name: this.list[i]
                        });
                    }
                    this.statlist = newlist;
                } else {
                    this.statlist = this.list;
                }
                this.vmodel = this.statlist[0].id;
                this.onChange();
            },
            onChange: function () {
                this.$emit('input', this.vmodel);
            }
        }
    }
</script>

<style scoped>
    .description {
        font-family: 'ubuntu';
        color: #a8a8a8;
        font-size: 15px;
        position: absolute;
        margin: 2px 3px 0 0px!important;
    }

    .borderier {
        border-left: 5px solid #b30000;
    }

    select.main {
        -webkit-appearance: none;
        text-indent: 0;
        position: relative;
        border-radius: 0px;
        font-size: 21px;
        padding-top: 15px;
        padding-left: 5px;
        border: 0px;
        height: 45px;
        background: url("https://png.icons8.com/right-3-filled/ios7/25") no-repeat scroll right center transparent;
        width: 100%;
    }
</style>
