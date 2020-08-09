module.exports = {
	title: "V-Design",
	description: 'Vue Components Library',
	base: '/v-design/',
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
				title: '数据组件',
				collapsable: false,
				sidebarDepth: 0,
				children: [
					{title: 'Radio 单选框', path:'/radio/'},
					{title: 'Checkbox 复选框', path:'/checkbox/'},
					{title: 'Input 输入框', path:'/input/'},
					{title: 'InputNumber 计数器', path:'/input-number/'},
					{title: 'Form表单', path: '/form/' },
					{title: 'Table 表格-未完成', path:'/table/'},
					// {title: 'Pagination 分页-未完成', path:'/pagination/'},
					{title: 'Cascader 级联选择-未完成', path:'/cascader/'}
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
					{title: 'Swiper 轮播图', path:'/swiper/'},
					
					// {title: 'Badge 标记', path:'/badge/'},
					{title: 'Tabs 标签页', path:'/tabs/'},
					{title: 'Collapse 折叠面板', path:'/collapse/'},
					
					// {title: 'Affix 图钉-未完成', path:'/affix/'},
					// {title: 'Tree 树形图', path:'/tree/'},
					
					// {title: 'Datepicker 日期选择-未完成', path:'/datepicker/'},
					// {title: 'Swicth 开关-未完成', path:'/switch/'},
					// {title: 'Popover 气泡卡片', path:'/popover/'},
					// {title: 'Select 选择', path:'/select/'}
				]
			}
		],
		displayAllHeaders: true,
		sidebarDepth: 0
	}
}
