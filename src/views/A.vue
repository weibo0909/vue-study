<template>
    <div class="page-a">
        <el-collapse v-model="activeNames" @change="handleChange" class="collapse">
            <el-collapse-item title="数据，事件，方法" name="1">
                <div class="margin-bottom">{{text}}</div>
                <div class="margin-bottom" v-text="content"></div>
                <div class="margin-bottom" v-html="content"></div>
                <div class="margin-bottom" @click="addHandle">点击累加::{{count}}</div>
            </el-collapse-item>
            <el-collapse-item title="属性绑定和双向绑定" name="2">
                <div class="margin-bottom" :title="title">{{text}}</div>
                <el-input v-model="value" class="el-input"></el-input>
                <div class="margin-bottom">input的值:: {{value}}</div>
            </el-collapse-item>
            <el-collapse-item title="计算属性和侦听器" name="2">
                <el-input v-model="value" class="el-input"></el-input>
                <div class="margin-bottom" :title="title">{{fulltext}}</div>
                <div class="margin-bottom">你一共输入了{{valueCount}}个字</div>
            </el-collapse-item>
        </el-collapse>
    </div>

</template>

<script>
    export default {
        name: 'A',
        data() {
            return {
                activeNames: ['1'],
                text: 'hello word',
                title: '你好，世界',
                content: '<h5>你好，世界</h5>',
                count: 0,
                valueCount: 0,
                value: '',
                tipText: ''
            };
        },
        computed: {
            //计算属性
            fulltext() {
                return this.text + this.title + this.value;
            }
        },
        watch: {
            //侦听器
            value() {
                this.valueCount++;
            }
        },
        methods: {
            //事件方法
            addHandle() {
                this.count++;
            },
            handleChange(val) {
                // console.log(val);
            }
        }
    };
</script>

<style scoped lang="scss">
    @import '../assets/views/A.scss';
</style>