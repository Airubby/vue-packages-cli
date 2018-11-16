
import testpackage from '../packages/list/index.js'

import packageInfo from '../package.json'


const components = [
  testpackage,
];

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$axios = opts.axios
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default {
  version: packageInfo.version,
  install,
  testpackage
}
