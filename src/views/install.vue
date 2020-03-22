<template>
  <div class="install">
  </div>
</template>

<script>

export default {
  name: 'install',
  // install(vue实例，vue选项)添加全局的属性或者方法
  install(Vue){
      //添加全局的属性
      Vue.$name = 'wilson';
      //添加全局的一个组件选项
      Vue.mixin({
          methods: {
              mixinFn(){
                  console.log('我是mixin方法');
              }
          },
      })
      //this.mixinFn()指令
      Vue.directive('focus',{
          bind:(el) => {
              el.focus;
          }
      })
      Vue.prototype.$age = 18;
      Vue.prototype.$myMethods  = () => {
          console.log('555');
      }
  }
}
</script>
