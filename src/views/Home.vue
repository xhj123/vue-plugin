<template>
  <div class="home">
    <input type="text" placeholder="请输入值" v-model="value"/>
    <button @click="submit">提交</button>
    <!-- vue-msg 这个标签来源于msg.vue组件中的name的值 -->
    <vue-msg ref="msg"></vue-msg>
    <v-table :datas="tableData" :thLabel="thlabel"></v-table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data(){
    return{
      value:null,
      tableData:[
          {'a':'1','b':'2','c':'3','d':'8'},
          {'a':'4','b':'5','c':'6','d':'9'}
      ],
      thlabel:[
          [
              {prop:'a',label:'th[1][1]',rowspan:'2'},
              {label:'th[1][2]',colspan:'2'},
              {label:'th[1][3]'}
          ],
          [
              {prop:'c',label:'th[2][1]'},
              {prop:'b',label:'th[2][2]'},
              {prop:'d',label:'th[2][3]'}
          ]
      ]
    }
  },
  methods:{
    submit(){
      if(!this.value) {     // 如果为空值的话
        // this.$nextTick，所有的DOM更新完成之后就会调用这个方法
        this.$nextTick(()=>{
          // 这个refs的值msg，来源于msg.vue中定义的ref的值
          this.$refs.msg.msgPlugin('请填写内容',5000);
        })
        // alert('请填写值')
      }
    }
  }
}
</script>
