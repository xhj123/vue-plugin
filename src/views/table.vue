<template id="vTable">
    <table>
        <thead>
            <tr class="thTr" v-for="(tr,index) in thlabel" :key="index">
                <th v-for="(th,index) in thlabel[index]" :key="index">{{th.label}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(tr,index) in tableData" :key="index">
                <td v-for="(td,index) in tr" :key="index">
                    {{td}}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name:"v-table",
    data(){
        return{
            tableData:[
                {'a':'1','b':'2','c':'3','d':'8'},
                {'a':'4','b':'5','c':'6','d':'9'}
            ],
            thlabel:[
                [
                    {prop:'a',label:'th[1][1]'},
                    {label:'th[1][2]'},
                    {label:'th[1][3]'}
                ],
                [
                    {prop:'c',label:'th[2][1]'},
                    {prop:'b',label:'th[2][2]'},
                    {prop:'d',label:'th[2][3]'}
                ]
            ]
        }
    }
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
    background: rosybrown
}
</style>