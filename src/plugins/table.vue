<template id="vTable">
    <table>
        <thead>
            <tr class="thTr" v-for="(tr,index) in rownum" :key="index">
                <th v-for="(th,index) in thLabel[index]" :key="index">{{th.label}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(tr,index) in datas" :key="index">
                <td v-for="(td,index) in labelProp" :key="index">
                    {{tr[td]}}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name:"v-table",
    props:{
        datas:{ //内容的数组
            type:Array
        },
        thLabel:{ //表头数组
            type:Array
        }
    },
    computed:{
        rownum:function() {
            return this.thLabel.length;
        },
        labelProp:function() { //获取对应字段的key
            let thLabel = this.thLabel;
            let labelArr = [];
            //拿到每一行
            for(let i = 0,len = thLabel.length;i<len;i++) {
                // 拿到每一个th对象
                for(let j=0;j <thLabel[i].length;j++ ) {
                    for(const key in thLabel[i][j]) {
                        if(key == 'prop') {
                            labelArr.push(thLabel[i][j][key])
                        }
                    }
                }
            }
            return labelArr;
        }
    },
    mounted(){
        this.$nextTick(function(){
            let thLabel = this.thLabel;
            let thTr = document.getElementsByClassName("thTr"); //所有表头的DOM
            for(let i = 0,len =thLabel.length;i<len;i++ ){
                for(let j = 0;j < thLabel[i].length;j++) {
                    for(const key in thLabel[i][j]) {
                        // 设置跨行行数setAttribute()  第几个元素跨几行 | 跨几列
                        key == 'rowspan' && thTr[i].childNodes[j].setAttribute('rowspan',thLabel[i][j][key]);
                        // 设置跨列列数
                        key == 'colspan' && thTr[i].childNodes[j].setAttribute('colspan',thLabel[i][j][key]);
                    }
                }
            }
        })
    }
    // data(){
    //     return{
    //         tableData:[
    //             {'a':'1','b':'2','c':'3','d':'8'},
    //             {'a':'4','b':'5','c':'6','d':'9'}
    //         ],
    //         thlabel:[
    //             [
    //                 {prop:'a',label:'th[1][1]'},
    //                 {label:'th[1][2]'},
    //                 {label:'th[1][3]'}
    //             ],
    //             [
    //                 {prop:'c',label:'th[2][1]'},
    //                 {prop:'b',label:'th[2][2]'},
    //                 {prop:'d',label:'th[2][3]'}
    //             ]
    //         ]
    //     }
    // }
}
</script>

<style>
table{
    border:1px solid #EBEEF5;
    height: 200px;
    width: 300px;
    text-align: center;
    margin-left: 40px
}
table td {
    border:1px solid #EBEEF5;
    position: relative;
    width: 25%;
    height: 50px;
}
table th {
    border:1px solid #EBEEF5;
    position: relative;
    width: 33%;
    height: 50px;
    background: red
}
</style>