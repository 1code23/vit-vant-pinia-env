import { defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue'
// 方法一
// export const talkStore = defineStore('talk', {
//   state(){
//     return{
//       counts:2,
//       englishName:'Tomliu',
//       talks: [
//         {
//           value: 1,
//           label: '1',
//         },
//         {
//           value: 2,
//           label: '2',
//         },
//         {
//           value: 4,
//           label: '3',
//         },
//         {
//           value: 4,
//           label: '4',
//         },
//         {
//           value: 5,
//           label: '5',
//         }
//       ],
//       userObj:{
//         name:'开发者姓名',
//         price:'18',
//         status:'审核通过',
//       }
//     }

//   },
//   // actions里面放置的是一个一个方法，用于响应组件中的“动作”
//   actions:{
//     increment(data){
//       // this是当前的store 修改数据
//       this.counts=data
//     }
//   },
//   getters:{
//     countsSum(state){
//       return state.counts*10
//     },
//     bigSum:state=>{
//       return state.counts*5
//     },
//     upperName(){
//       return this.englishName.toUpperCase()//转为大写字母
//     }
//   }
// })
// 方法二
export const talkStore = defineStore('talk', () => {
  let counts = ref(2)
  let talks = ref([
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 4,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 5,
      label: '5',
    }
  ])
  let englishName = ref('Tomliu')
  let userObj = ref({
    name: '开发者姓名',
    price: '18',
    status: '审核通过',
  })
  let levelObj = reactive({
    age: 20,
    level: {
      grade: 1,
      level2: {
        grade: 2,
      }
    }
  })

  // actions
  function increment(data) {
    counts.value = data
  }
  function changeLevel(data) {
    levelObj.level.level2.grade = data
  }
  // getters
  const countsSum = computed(() => {
    return counts.value * 10;
  });

  const bigSum = computed(() => {
    return counts.value * 5;
  });

  const upperName = computed(() => {
    return englishName.value.toUpperCase(); // 转为大写字母
  });

  const levelObjComputed = computed(() => {
    // 直接使用 levelObj 的值，无需深拷贝
    return {
      ...levelObj,
      level: {
        ...levelObj.level,
        level2: {
          ...levelObj.level.level2,
          grade: levelObj.level.level2.grade * 5,
        },
      },
    };
  });
  return { counts, englishName, levelObj, talks, userObj, increment, changeLevel, countsSum, bigSum, upperName, levelObjComputed}
},{persist:true})