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
					{title: '1.Icon 图标', path:'/icon/'},
					{title: '2.Button 按钮', path:'/button/'}
				]
			},
			{
				title: '数据组件',
				collapsable: false,
				sidebarDepth: 0,
				children: [
					{title: '3.Radio 单选框', path:'/radio/'},
					{title: '4.Checkbox 复选框', path:'/checkbox/'},
					{title: '5.Input 输入框', path:'/input/'},
					{title: '6.InputNumber 计数器', path:'/input-number/'},
					{title: '7.Form表单', path: '/form/' },
					{title: '8.Table 表格-未完成', path:'/table/'},
					{title: '9.Pagination 分页-未完成', path:'/pagination/'},
					{title: '10.Cascader 级联选择-未完成', path:'/cascader/'}
				]
			},
			{
				title: '消息组件',
				collapsable: false,
				sidebarDepth: 0,
				children: [
					{title: '11.Message 消息提示', path:'/message/'},
					{title: '12.MessageBox 弹框', path:'/message-box/'},
					{title: '13.Modal 复杂弹框', path:'/modal/'}
				]
			},
			{
				title: '其他组件',
				collapsable: false,
				sidebarDepth: 0,
				children: [
					{title: '14.Swiper 轮播图', path:'/swiper/'},
					{title: '15.Badge 标记', path:'/badge/'},
					{title: '16.Tabs 标签页', path:'/tabs/'},
					{title: '17.Collapse 折叠面板', path:'/collapse/'},
					{title: '18.Affix 图钉-未完成', path:'/affix/'},
					{title: '19.Tree 树形控件', path:'/tree/'},
					{title: '20.Datepicker 日期选择-未完成', path:'/datepicker/'},
					{title: '21.Swicth 开关-未完成', path:'/switch/'},
					{title: '22.Popover 气泡卡片', path:'/popover/'},
					{title: '23.Select 选择器', path:'/select/'},
					{title: '24.Step步骤条', path: '/'},
					{title: '25.Calendar日历', path: '/'},
					{title: '26.Timeline时间线', path: '/'},
					{title: '27.Card卡片', path: '/'},
					{title: '28.Tooltip文字提示', path: '/'},
					{title: '29.PageHeader页头', path: '/'},
					{title: '30.Breadcrumb面包屑', path: '/'},
					{title: '31.NavMenu导航菜单', path: '/'},
					{title: '32.Notification通知', path: '/'},
					{title: '33.Progress进度条', path: '/'},
					{title: '34.Tag标签', path: '/'},
					{title: '35.Rate评分', path: '/'},
					{title: '36.Uploader上传', path: '/'},
					{title: '37.TimePicker时间选择器', path: '/'},
					{title: '38.DateTimePicker日期时间选择器', path: '/'},
					{title: '39.Link文字链接', path: '/'},
					{title: '40.Layout 布局', path: '/'},
					{title: '41.Container 布局容器', path: '/'},
					{title: '42.LoadingBar加载进度条', path: '/'},
				]
			}
		],
		displayAllHeaders: true,
		sidebarDepth: 0
	}
}
