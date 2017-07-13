<template>
    <div>
        <select class="main" @change="onChange" v-model="vmodel">
            <option v-for="i in list" :value="i.id">{{i.name}}</option>
        </select>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                vmodel: ""
            }
        },
        name: "dog-block",
        computed: {},
        mounted: function () {
            this.vmodel = this.list[0].id;
            this.onChange();
        },
        props: ["list"],
        components: {},
        methods: {
            onChange: function () {
                console.log(this.vmodel);
                this.$emit('input', this.vmodel);
            }
        }
    }
</script>

<style scoped>
    select.main {
        border: 0px;
        height: 40px;
        border-left: 5px solid #b30000;
        background: url("https://png.icons8.com/right-3-filled/ios7/25") no-repeat scroll right center transparent;
        width: 100%;
    }
</style>