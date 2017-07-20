<template>
    <div>
        <button @click="dateflow">{{text}}</button>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                text: 213
            }
        },
        computed: {

        },
        mounted: function () {},
        props: [],
        components: {},
        methods: {
            dateflow: function () {
                window.datepicker(456, (date) => {
                    console.log(date);
                });
            }
        }
    }
</script>

<style scoped>

</style>