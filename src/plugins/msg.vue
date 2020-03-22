<template>
  <div class="msg" ref="msg" :class="{active:msgStatus}">
      <div class="msg-warpper">
          {{ text }}
      </div>
  </div>
</template>

<script>

export default {
  name: 'vue-msg',
  data(){
      return{
          text:'',
          msgStatus:false
      }
  },
  methods:{
      msgPlugin(msg,time){
          this.text = msg;
          this.msgStatus = true;
          time ? time : time = 2000;
          setTimeout(()=>{
              this.msgStatus = false;
          },time);
      }
  }
}
</script>

<style>
.msg{
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    width:0;
    min-height:0;
    text-align:center;
    border-radius:5px;
    background: black;
    color:#fff;
    transition: all 0.5s;
    z-index: -1;
    opacity:0;
}
.msg.active{
    width:150px;
    min-height:25px;
    opacity:1;
    z-index:11;
}
</style>

