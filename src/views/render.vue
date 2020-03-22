<template>
  <div id="render">
    <Button
    :type="type"
    :text="msg"></Button>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from './button.vue'
export default {
  name: 'render',
  components:{
      Button
  },
  data(){
    return{
      msg:'提交',
      type:'success'
    }
  }
}
</script>
