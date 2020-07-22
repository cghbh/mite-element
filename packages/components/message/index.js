// import Message from './index.vue'
// // 定义所有的已经生成的实例
// let instances = []
// // 定义初始化的高度
// let verticalTop = 18
// // 记录当前是哪一个实例
// let index = 0
// export default {
// 	install(Vue) {
// 		// 创建实例的函数
// 		function generateInstance (options) {
// 			// 创造Vue的子类
// 			// 使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
// 			// 需要通过 new Profile().$mount('#mount-point') 来挂载到指定的元素上面
// 			const Ctor = Vue.extend(Message)
// 			let instance = new Ctor({
// 				propsData: options
// 			}).$mount(document.createElement('div'))
// 			// 每次产生一个实例的时候，将实例的距离顶部的高度予以记录
// 			instance.verticalTop = computedVerticalTop(instance.position)
// 			instance.id = 'message' + index++
// 			instance.$once('close', () => {
// 				updataVerticaltop(instance)
// 			})
// 			return instance
// 		}

// 		// 计算距离顶部的距离的
// 		function computedVerticalTop(position) {
// 			let filterInstance = instances.filter(instan => instan.position === position)
// 			return instances.reduce((acc, cur) => {
// 				return acc + cur.$el.offsetHeight + verticalTop
// 			}, verticalTop)
// 		}

// 		// 当点击删除当前的这条消息的时候，更新当前删除消息之后的距离顶部的距离
// 		function updataVerticaltop(instance) {
// 			// 记录当前点击删除的实例的高度
// 			let removeTop = instance.verticalTop
// 			let index1 = 0
// 			for(; index1 < instances.length; index1++) {
// 				if (instances[index1].id === instance.id) {
// 					break
// 				}
// 			}
// 			// 在这里查找到index1的值，也就是方便知道是哪一个消息提示被删除了
// 			// 删除数组里面被删除的实例，返回一个新的数组
// 			instances.splice(index1, 1)
// 			for( ; index1 < instances.length; index1++) {
// 				// instances[index1].verticalTop = removeTop
// 				// removeTop = instances[index1].verticalTop
// 				;[instances[index1].verticalTop, removeTop] = [removeTop, instances[index1].verticalTop]
// 				// console.log(removeTop, index1, instances, instances[index1].verticalTop, 'instances[index1].verticalTop')
// 			}
// 			// console.log(removeTop, instances, 'instances[index1].verticalTop')

// 		}
		
// 		// 挂载
// 		Vue.prototype.$message = function(options) {
// 			let instance = generateInstance(options)
// 			// 每次产生一个实例的话就push进去一个
// 			instances.push(instance)
// 		}
// 	}
// }

import Message from './index.vue'
let instances = []
let verticalTop = 16
let index = 0
export default {
  install(Vue) {
    function computedVerticalTop(position) {
    	console.log(position, 'position')
      let filterInstances = instances.filter(
        (instance) => instance.position === position
      )

      console.log(filterInstances, 'filterInstances')

      return filterInstances.reduce((acc, cul) => {
        return cul.$el.offsetHeight + acc + verticalTop
      }, verticalTop)
    }

    function updateVerticalTop(instance) {
      let removeTop = instance.verticalTop

      let index = 0

      for (; index < instances.length; index++) {
        if (instances[index].id === instance.id) {
          break
        }
      }

      instances.splice(index, 1)

      for (; index < instances.length; index++) {
        if (instances[index].position === instance.position) {
          ;[instances[index].verticalTop, removeTop] = [
            removeTop,
            instances[index].verticalTop,
          ]
        }
      }
    }

    function generateInstance(options) {
      const Ctor = Vue.extend(Message)

      let instance = new Ctor({
        propsData: options,
      }).$mount(document.createElement('div'))

      instance.verticalTop = computedVerticalTop(instance.position)

      instance.id = 'message-' + index++

      instance.$once('close', function() {
        updateVerticalTop(instance)
      })

      return instance
    }

    Vue.prototype.$message = function(options) {
      let instance = generateInstance(options)
      instances.push(instance)
    }
  },
}
