
<template>
  <ul>
    <li v-for="item in testdata">{{item.title}}</li>
  </ul>
</template>

<script>
  import { Props } from './props'

  export default {
    name: 'testList',
    props: Props,
    data() {
      const { color, data } = this.$props
      return {
        testdata:data,
      }
    },
    computed: {
     
    },
    methods: {
      
    },
    watch:{
        
    }
    
  }
</script>
