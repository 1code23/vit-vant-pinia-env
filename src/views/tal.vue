<template>
  <div>
    <!-- <p>当前求和为:{{ sum }}</p>
    <van-radio-group v-model="n">
  <van-radio :name="1">单选框 1</van-radio>
  <van-radio :name="2">单选框 2</van-radio>
</van-radio-group>
<van-button type="primary" @click="add">加</van-button>
<van-button type="success" @click="minus" :disabled="sum<=1">减</van-button> -->
<h1>开发者名称：{{ pinaObj.name }}</h1>
<h1>出价：{{ pinaObj.price }}</h1>
<h1>审核状态：{{ pinaObj.status }}</h1>
<h1>数量：{{ pinapatch.counts }}</h1>
<h1>————————————————————————————————————</h1>
<h1>开发者名称简写：{{ name }}</h1>
<h1>出价简写：{{ price }}</h1>
<h1>审核状态简写：{{ status }}</h1>
 </div>
</template>

<script setup>
import { reactive, onMounted, nextTick, } from 'vue'
import { talkStore } from '@/stores/talk'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia';
// import { loginV2 } from '@/service/home'
let pinaObj=talkStore().userObj
let pinapatch=talkStore()
let upperName=talkStore().upperName

console.log(pinapatch,2222,upperName);
// let ss={ name:'开发者姓名',
//         price:'18',
//         status:'审核通过',counts:222}
// const {name,price,status,counts} = ss
// const {counts} = storeToRefs(pinapatch) // 这里可以直接获取到pinapatch中的数据
// console.log(storeToRefs(pinapatch),1111,counts);
onMounted( () => {
  // const { data } = await loginV2()
  // console.log(data,222);
  // 获取pina中的数据
  // console.log(talkStore().talks,222);
  // console.log(talkStore().talks,222);
  // console.log(useCartStore().talks,999);

  // 修改pina中的数据 方法一
  // pinaObj=talkStore().userObj
  // pinaObj.name='修改后的名字'
  // pinaObj.status='审核不通过'

  // 修改pina中的数据 方法二
  // pinapatch.$patch({
  //   userObj:{
  //     name:'开发者姓名修改',
  //     price:'20',
  //     status:'待审核',
  //   }
  // })
  // 修改pina中的数据 方法二 调用actions中的方法
  pinapatch.increment(22211)

  // console.log(pinaObj,333,pinapatch);
  talkStore.$subscribe((mutalk, state) => {
    console.log(state,'talkStore数据发生了变化');
    // localStorage.setItem('talkStore',JSON.stringify(state))
  })
})

function gettalk(){

}
</script>
<style>

</style>