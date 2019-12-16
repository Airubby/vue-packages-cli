
import testList from './src/main.vue'

testList.install = function(Vue) {
  Vue.component(testList.name, testList)
};

export default testList
