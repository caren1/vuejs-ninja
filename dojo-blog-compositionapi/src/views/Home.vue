<template>
  <div class="home">
    home
    <p ref="p">My name is {{ name }} and {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">increase age</button>
    <input type="text" v-model="name" name="name" id="name">
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
// @ is an alias to /src

export default {
  name: 'Home',
  // composition API setup function
  // similar to data / mounted / lifecycle methods
  // this function will run before any lifecycle hook
  setup() {
    // console.log('setup');
    // we can write any kind of js within this function
    // 'this' is not available in setup function = undefined
    // variables are not reactive by default, that is why we need a way to modify them -> refs
    
    const name = ref('wojt')
    const age = ref(27);
    // when we use ref and surround the value it becomes reactive

    const handleClick = () => {
      console.log('you clicked me');
      name.value = 'Mario'
      age.value = 30
      // console.log(p, p.value);
      // p.value.classList.add('test')
      // p.value.textContent = 'hello from ref'
    }

    // const p = ref(null);

    // at the end we return values that we want to make available in template
      return { name, age, handleClick }
  },
  // created() {
  //   console.log('created');
  // },
  // mounted() {
  //   console.log('mounted');
  // }
}
</script>
