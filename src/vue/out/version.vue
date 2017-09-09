<template>
    <div class="version-number-nontainer">
        <ico :icon="whichIcon"></ico>
        <slot></slot>
        <div class="version-nontainer">
            {{calculatePath}}
        </div>
    </div>
</template>

<script>
    import icon from '../components/icon.vue';
    export default {
        data: function () {
            return {}
        },
        computed: {
            whichIcon: function () {
                if (this.icon) {
                    return this.icon;
                } else {
                    return "code-fork"
                }
            },
            calculatePath: function () {
                if (this.current && !this.latest) {
                    return this.current;
                }
                if (this.current && this.latest) {
                    if (this.compare(this.versionToArray(this.current), this.versionToArray(this.latest)) != -1) {
                        return this.current + " >> " + this.latest;
                    }
                }
            }
        },
        props: ["icon", "current", "latest"],
        components: {
            "ico": icon
        },
        methods: {
            versionToArray: function (versionNumber) {
                let arr = versionNumber.split(".");
                let parsed = [];
                for (let i = 0; i < 3; i++) {
                    if (arr[i]) {
                        parsed.push(parseInt(arr[i]));
                    } else {
                        parsed.push(0);
                    }
                }
                return parsed;
            },
            compare: function (current, latest) {
                for (let i = 0; i < current.length; i++) {
                    if (current[i] < latest[i]) {
                        return i;
                    }
                }
                return -1;
            }
        }
    }
</script>

<style scoped>
    .version-number-nontainer {
        background-color: #450053;
        color: #C5FFF2;
        margin-top: 2px;
        padding-left: 5px;
        border-left: 7px solid #A7A7A7;
    }

    .version-nontainer {
        padding-left: 5px;
        color: white;
    }
</style>