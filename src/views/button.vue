<!--
<template>
    <div id="button">
        <div class="btn btn-success" v-if="type == 'success'">成功</div>
        <div class="btn btn-danger" v-else-if="type == 'danger'">成功</div>
        <div class="btn btn-warning" v-else>成功</div>
    </div>
</template>
-->


<!--通过一个变量反复的渲染DOM的时候 就使用render方法，而不使用template标签-->
<script>
export default {
    props:{
        type:{
            type:String
        },
        text:{
            type:String,
            default:'normal'
        }
    },
    render(h){
        // 第一个参数div创建的元素，第二个参数是选项
        return h('div', {
            // 与v-bind:class 一样
            class:{
                btn:true,
                'btn-success':this.type === 'success',
                'btn-warning':this.type === 'warning',
                'btn-danger':this.type === 'danger',
                'btn-normal':!this.type  //如果父组件传过来的type是null,则使用btn-normal类名
            },
            // DOM的属性 innerText设置div的值
            domProps:{
                innerText:this.text ? this.text : 'default'
            },
            // 绑定事件
            on:{
                click:this.handlerClick
            }
        })
    },
    methods:{
        handlerClick(){
            console.log('我是button的click方法');
        }
    }
}
</script>

<style scoped>
.btn {
    width:100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color:#fff
}
.btn-success {
    background: green;
}
.btn-warning {
    background: orange;
}
.btn-danger{
    background: red
}
.btn-normal{
    background: #ccc;
}
</style>

