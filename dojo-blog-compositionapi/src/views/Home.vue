<template>
  <div class="home">
    <!-- home
    <p ref="p">My name is {{ name }} and {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">increase age</button>
    <input type="text" v-model="name" name="name" id="name"> -->

    <!-- <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    <hr />
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button> -->

    <h1>Home</h1>
    <input type="text" name="search" id="search" v-model="search">
    <p>Search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed } from '@vue/reactivity'
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
    
    // const name = ref('wojt')
    // const age = ref(27);
    // when we use ref and surround the value it becomes reactive

    // const handleClick = () => {
    //   console.log('you clicked me');
    //   name.value = 'Mario'
    //   age.value = 30
      // console.log(p, p.value);
      // p.value.classList.add('test')
      // p.value.textContent = 'hello from ref'
      
      // const ninjaOne = ref({ name: 'Mario', age: 30 })
      // const ninjaTwo = reactive({ name: 'Luigi', age: 35 })

      // const updateNinjaOne = () => {
      //   ninjaOne.value.age = 40;
      // }

      // const updateNinjaTwo = () => {
      //   // while using reactive we do not have to use the 'value' keyword, we can directly access the value we want
      //   ninjaTwo.age = 45
      // }

      // refs vs reactive?
      // with reactive we cannot use primitive values
      // const nameOne = ref('mario')
      // const nameTwo = reactive('luigi');
      // nameTwo = 'mario' / nameTwo = reactive('mario') <- not working

      // refs will work better for external compositions

      // return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo }

      // imported from vue
      // idea of computed is not to return a single value, but compute value on other values
      // ie. filtered versions of data
      // const name = computed(() => {
      //   return 'wojt'
      // })

      // return { name }
      const search = ref('')
      const names = ref(['wojt', 'wojtek', 'mario', 'luigi', 'koopa'])

      const matchingNames = computed(() => {
        return names.value.filter((name) => name.includes(search.value))
      })

      return { names, search, matchingNames }
    }

    // const p = ref(null);

    // at the end we return values that we want to make available in template
      // return { name, age, handleClick }
  // },
  // created() {
  //   console.log('created');
  // },
  // mounted() {
  //   console.log('mounted');
  // }
}
</script>
