<template>
    <div class="page-a">
        <el-collapse v-model="activeNames" @change="handleChange" class="collapse">
            <el-collapse-item v-for="item in renderData" :title="item.title" :name="item.name" :key="item.name">
                <div v-if="item.name == 1">
                    <div class="margin-bottom">{{text}}</div>
                    <div class="margin-bottom" v-text="content"></div>
                    <div class="margin-bottom" v-html="content"></div>
                    <div class="margin-bottom" @click="addHandle">点击累加::{{count}}</div>
                </div>
                <div v-else-if="item.name == 2">
                    <div class="margin-bottom" :title="title">{{text}}</div>
                    <el-input v-model="value" class="el-input"></el-input>
                    <div class="margin-bottom">input的值:: {{value}}</div>
                </div>
                <div v-else="item.name == 3">
                    <el-input v-model="value" class="el-input"></el-input>
                    <div class="margin-bottom" :title="title">{{fulltext}}</div>
                    <div class="margin-bottom">你一共输入了{{valueCount}}个字</div>
                </div>
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
                tipText: '',
                renderData: [{
                    title: '数据，事件，方法',
                    name: '1'
                }, {
                    title: '数据，事件，方法',
                    name: '2'
                }, {
                    title: '计算属性和侦听器',
                    name: '3'
                }]
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
                this.valueCount = this.value.length;
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