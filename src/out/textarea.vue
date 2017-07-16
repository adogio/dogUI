<template>
    <div>
        <div class="description">
            <strong><slot></slot></strong>
        </div>
        <div>
            <textarea class="field" name="textarea"></textarea>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {}
        },
        directives: {},
        name: "dog-textarea",
        computed: {

        },
        mounted: function () {},
        props: [],
        components: {

        },
        methods: {}
    }
</script>

<style scoped>
    .description {
        font-family: 'ubuntu';
        color: #a8a8a8;
    }

    .field {
        position: relative;
        padding-top: 4px;
        padding-left: 10px;
        font-size: 21px;
        border: 0px;
        border-left: 5px solid #b30000;
        color: #000;
        background: #fff;
    }

    textarea {
        width: 100%;
        height: 100%;
        overflow-y: auto;
        background: url(data:image/jpeg;base64,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) no-repeat right bottom;
    }
</style>