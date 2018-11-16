
import testList from './src/main'

testList.install = function(Vue) {
  Vue.component(testList.name, testList)
};

export default testList
