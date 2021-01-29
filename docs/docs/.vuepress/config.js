const path = require('path')
module.exports = {
	title: "Mite-Element",
	description: 'Vue Components Library || Similar ElementUI',
	base: '/',
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
				link: 'https://github.com/cghbh/mite-element'
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
				title: '表单组件',
				collapsable: false,
				sidebarDepth: 0,
				children: [
					{title: 'Radio 单选框', path:'/radio/'},
					{title: 'Checkbox 复选框', path:'/checkbox/'},
					{title: 'Input 输入框', path:'/input/'},
					{title: 'InputNumber 计数器', path:'/input-number/'},
					{title: 'Form表单', path: '/form/' },
					{title: 'Pagination 分页', path:'/pagination/'},
					{title: 'Swicth 开关', path:'/switch/'},
					{title: 'Spread 卷轴', path:'/spread/'},
					{title: 'Affix 图钉', path:'/affix/'}
					
				]
			},
			{
				title: '消息组件',
				collapsable: false,
				sidebarDepth: 0,
				children: [
					{title: 'Message 消息提示', path:'/message/'},
					{title: 'MessageBox 弹框', path:'/message-box/'},
					{title: 'Dialog 对话框-等待重构', path:'/dialog/'}
				]
			},
			{
				title: '其他组件',
				collapsable: false,
				sidebarDepth: 0,
				children: [
					{title: 'Swiper 轮播图-', path:'/swiper/'},
					{title: 'Table 表格-未完成-', path:'/table/'},
					{title: 'Tabs 标签页-', path:'/tabs/'},
					{title: 'Collapse 折叠面板-', path:'/collapse/'},
					{title: 'Badge 标记-未完成-', path:'/badge/'},
					{title: 'Cascader 级联选择-未完成-', path:'/cascader/'},
					{title: 'Tree 树形控件-未完成-', path:'/tree/'},
					{title: 'Datepicker 日期选择-未完成-', path:'/datepicker/'},
					{title: 'Popover 气泡卡片-未完成-', path:'/popover/'},
					{title: 'Select 选择器-未完成-', path:'/select/'},
					{title: 'Calendar日历-未完成-', path: '/calendar/'},
					{title: 'Card卡片-未完成-', path: '/card/'},
					{title: 'Tooltip文字提示-未完成-', path: '/tooltip/'},
					{title: 'NavMenu导航菜单-未完成-', path: '/navmenu/'},
					{title: 'Tag标签-未完成-', path: '/tag/'},
					{title: 'Rate评分-', path: '/rate/'},
					{title: 'Uploader上传-未完成-', path: '/uploader/'},
					{title: 'TimePicker时间选择器-未完成-', path: '/timepicker/'},
					{title: 'DateTimePicker日期时间选择器-未完成-', path: '/datetimepicker/'},
					{title: 'Layout 布局-', path: '/layout/'},
					{title: 'Container 布局容器', path: '/container/'},
					{title: 'Skeleton骨架屏',path: '/skeleton/'},
					{title: 'BackTop回到顶部', path: '/backtop/'}
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
