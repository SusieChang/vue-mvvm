// Vue 实例
class Vue {
  constructor(options) {
    this.$options = options
    this.$data = options.data
    this.$el = options.el
    if (this.$el) {
      //编译模板，渲染到页面
      new Compile(this, this.$el)
    }
  }
}
