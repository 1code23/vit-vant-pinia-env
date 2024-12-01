<template>
  <div>
    <h1>{{testObj}}</h1>
    <button class="btn_get" @click="computedBtn">点我修改</button>
<h1>{{editComputed}}</h1>
    <h1>————————————————————————————————————</h1>
    <h1>开发者名称：{{ pinaObj.name }}</h1>
    <h1>出价：{{ pinaObj.price }}</h1>
    <h1>审核状态：{{ pinaObj.status }}</h1>
    <h1>数量：{{ pinapatch.counts }}</h1>
    <h1>名字：{{pinapatch.englishName}}</h1>
    <h1>———————————————————————————————————</h1>
    <button class="btn_get" @click="addCount">点我修改数量</button>
    <h1>名字：{{ upperName }}</h1>
    <h1>级别：{{ level }}</h1>
    <h1>数量和：{{pinapatch.countsSum}}</h1>
    <h1>计算后的级别：{{ pinapatch.levelObjComputed }}</h1>
  </div>
</template>

<script setup>
import { reactive, onMounted, nextTick,computed } from "vue";
import { talkStore } from "@/stores/talk";
import { storeToRefs } from "pinia";
let pinaObj = talkStore().userObj;
let pinapatch = talkStore();// 获取store中的数据 并转换为响应式对象
let upperName = talkStore().upperName; //这样的话不是响应式的
let level = talkStore().levelObj;
// computed计算属性 reactive响应式对象
const testObj =reactive({
  name:'测试',
  age:20,
  level:{
    level2:{
      grade:2
    }
  }
})
const computedBtn = () => {
  testObj.level.level2.grade+=1;
}
const editComputed = computed(() => {
  return testObj.level.level2.grade*2;
})

// 调用actions中的方法
const addCount = () => {
  pinapatch.increment(pinapatch.counts + 1);
  pinapatch.changeLevel(4)
};
onMounted(() => {
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
  // pinapatch.increment(1);

  // console.log(pinaObj,333,pinapatch);
  pinapatch.$subscribe((mutalk, state) => {
    console.log(state, "talkStore数据发生了变化");
    // localStorage.setItem('talkStore',JSON.stringify(state))
  });
});
</script>
