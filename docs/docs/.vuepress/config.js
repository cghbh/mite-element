const path = require('path')
module.exports = {
	title: "Mite-Element",
	description: 'Vue Components Library || Similar ElementUI',
	base: '/ad-vue/',
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
				link: 'https://github.com/cghbh/ad-vue'
			},
		],
		sidebar: [
			{
				title: '介绍',
				collapsable: false,
				sidebarDepth: 0,
				children: [
					{title: '写在前面', path:'/front/'}
				]
			},
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
					{title: 'Pagination 分页', path:'/pagination/'},
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
					{title: 'Tabs 标签页', path:'/tabs/'},
					{title: 'Collapse 折叠面板', path:'/collapse/'},
					{title: 'Badge 标记-未完成', path:'/badge/'},
					{title: 'Affix 图钉-未完成', path:'/affix/'},
					{title: 'Tree 树形控件-未完成', path:'/tree/'},
					{title: 'Datepicker 日期选择-未完成', path:'/datepicker/'},
					{title: 'Swicth 开关-未完成', path:'/switch/'},
					{title: 'Popover 气泡卡片-未完成', path:'/popover/'},
					{title: 'Select 选择器-未完成', path:'/select/'},
					{title: 'Step步骤条-未完成', path: '/'},
					{title: 'Calendar日历-未完成', path: '/'},
					// {title: '26.Timeline时间线', path: '/'},
					{title: 'Card卡片-未完成', path: '/'},
					{title: 'Tooltip文字提示-未完成', path: '/'},
					// {title: '29.PageHeader页头', path: '/'},
					// {title: '30.Breadcrumb面包屑', path: '/'},
					{title: 'NavMenu导航菜单-未完成', path: '/'},
					// {title: 'Notification通知', path: '/'},
					// {title: '33.Progress进度条', path: '/'},
					{title: 'Tag标签-未完成', path: '/'},
					// {title: '35.Rate评分', path: '/'},
					{title: 'Uploader上传-未完成', path: '/'},
					{title: 'TimePicker时间选择器-未完成', path: '/'},
					{title: 'DateTimePicker日期时间选择器-未完成', path: '/'},
					// {title: '39.Link文字链接', path: '/'},
					// {title: '40.Layout 布局', path: '/'},
					// {title: '41.Container 布局容器', path: '/'},
					// {title: '42.LoadingBar加载进度条', path: '/'},
					// {title: '43.Skeleton骨架屏',path: '/'},
					{title: 'Toast轻提示-未完成', path: '/'}
					// {title: '45.BackTop回到顶部', path: '/'},
					// {title: '46.Transition过渡动画', path: '/'},
					// {title: '47.Waterfall瀑布流', path: '/'}
				]
			}
		],
		displayAllHeaders: true,
		sidebarDepth: 0
	},
	chainWebpack: (config, isServer) => {
	    config.resolveLoader
	    .modules
	    .add(path.resolve(__dirname, '../../../node_modules'))
	}
}
