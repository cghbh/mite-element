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
				title: '开发指南',
				collapsable: false,
				sidebarDepth: 0,
				children: [
					{title: '安装', path:'/install/'},
					{title: '快速上手', path:'/quick-start/'}
				]
			},
			{
				title: '基础组件',
				collapsable: false,
				sidebarDepth: 0,
				children: [
					{title: 'Icon 图标', path:'/icon/'},
					{title: 'Button 按钮', path:'/button/'}
				]
			},
			{
				title: '表单组件',
				collapsable: false,
				sidebarDepth: 0,
				children: [
					{title: 'Radio 单选框', path:'/radio/'},
					{title: 'Checkbox 复选框', path:'/checkbox/'},
					{title: 'Input 输入框', path:'/input/'},
					{title: 'InputNumber 计数器', path:'/input-number/'},
					{title: 'Form表单', path: '/form/' },
					{title: 'Upload上传', path: '/upload/'},
					{title: 'Tree 树形控件', path: '/tree/'},
					{title: 'Table 表格', path: '/table/'}
				]
			},
			{
				title: '消息组件',
				collapsable: false,
				sidebarDepth: 0,
				children: [
					{title: 'Message 消息提示', path:'/message/'},
					{title: 'MessageBox 弹框', path:'/message-box/'},
					{title: 'Modal 复杂弹框', path:'/modal/'}
				]
			},
			{
				title: '其他组件',
				collapsable: false,
				sidebarDepth: 0,
				children: [
					{title: 'Calendar 日历', path:'/calendar/'},
					{title: 'Swiper 轮播图', path:'/swiper/'},
					{title: 'Pagination 分页', path:'/pagination/'},
					{title: 'Badge 标记', path:'/badge/'},
					{title: 'Tabs 标签页', path:'/tabs/'},
					{title: 'Collapse 折叠面板', path:'/collapse/'},
					{title: 'Select 选择器', path:'/select/'}
				]
			}
		],
		displayAllHeaders: true,
		sidebarDepth: 0
	}
}
