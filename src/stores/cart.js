import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCart } from '@/service/cart'
export const useCartStore = defineStore('cart', () => {
  const count = ref(0)
  async function updateCart() {
    const { data = [] } = await getCart()
    count.value = data.length
  }
  let talks=ref([
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
  return { count, updateCart,talks }
})
