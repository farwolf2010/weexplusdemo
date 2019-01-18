<template>
    <div style="align-items: center;justify-content: center">

    </div>
</template>
<script>
    export default{
        props: {},
        data () {
            return {
                name:''
            }
        },

        methods: {


        },
        created () {
        }
    }
</script>
<style scoped>
    .indicator {
        width: 750px;
        height: 316px;
        position: absolute;
        item-color: #777777;
        item-selected-color: #ffffff;
        item-size: 20px;
        top: 120px;
        left: 1px;
    }

    .slider {
        width: 750px;
        height: 316px;
    }

    .frame {
        width: 750px;
        height: 316px;
        position: relative;
    }

    .image {
        width: 750px;
        height: 316px;
    }
</style>
