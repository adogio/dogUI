<template>
    <div>
        <div class="row">
            <div class="larger-text col-xs-4">
                {{left}}
            </div>
            <div class="larger-text col-xs-8">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dog-cell",
        props: ['left']
    }
</script>

<style scoped>
    div {
        padding: 0px;
        margin: 0px;
    }

    select {
        width: 100%;
    }

    input {
        border: 0px;
        border-bottom: 1px solid lightblue;
    }

    p,
    hr {
        margin: 0px;
    }

    .col-xs-4 {
        padding-left: 2px;
        word-wrap: break-word;
        /*border-bottom: 1px solid lightgray;*/
    }

    .col-xs-8 {
        padding-right: 2px;
        word-wrap: break-word;
        /*border-bottom: 1px solid lightgray;*/
    }

    .larger-text {
        font-size: 23px;
        font-family: 'Ubuntu';
    }
</style>
