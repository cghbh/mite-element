module.exports = {
	// presets: ['@/vue-cli-plugin-babel/preset'],
	plugins: [
		[
			// 配置按需加载
			'component',
			{
				// 库名
				libraryName: 'v-design-cg',
				libDir: 'lib/packages',
				camel2Dash: true // 驼峰转小横线
			}
		]
	]
}

// babel.config.js
// module.exports = {
//   // 配置预置环境
//   presets: [
//     // 使用的规则
//     [
//       '@babel/preset-env',
//       {
//         // 这儿有false, entry, usage三个可选参数，usage可以按需引入polyfill
//         useBuiltIns: 'usage',
//         // 指定corejs版本
//         corejs: 2,
//       },
//     ],
//   ],
// }
