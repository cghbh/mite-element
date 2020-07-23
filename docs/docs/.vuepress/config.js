module.exports = {
	title: "LayUI",
	description: 'Vue Components Library',
	base: '/lay-ui/',
	head: [
		['link', {
			rel: 'icon',
			href: '/logo.png'
		}]
	],
	themeConfig: {
		nav: [{
				text: '首页',
				link: '/'
			},
			{
				text: '组件',
				link: '/install/'
			},
			{
				text: 'GitHub',
				link: 'https://github.com/cghbh/lay-ui'
			},
		],
		sidebar: [
			{
				title: '开发指南', // 必要的
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 0, // 可选的, 默认值是 1
				children: [
					{title: '安装', path:'/install/'},
					{title: '快速上手', path:'/quick-start/'}
				]
			},
			{
				title: '基础组件', // 必要的
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 0, // 可选的, 默认值是 1
				children: [
					{title: 'Icon 图标', path:'/icon/'},
					{title: 'Button 按钮', path:'/button/'}
				]
			},
			{
				title: '表单组件', // 必要的
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 0, // 可选的, 默认值是 1
				children: [
					{title: 'Radio 单选框', path:'/radio/'},
					{title: 'Checkbox 复选框', path:'/checkbox/'}
				]
			},
			{
				title: '消息组件', // 必要的
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 0, // 可选的, 默认值是 1
				children: [
					{title: 'Message 消息提示', path:'/message/'},
					{title: 'MessageBox 弹框', path:'/message-box/'}
				]
			}
		],
		displayAllHeaders: true, // 默认值：false
		sidebarDepth: 0
	}
}
