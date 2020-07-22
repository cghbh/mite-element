module.exports = {
	title: "LayUI",
	description: 'Vue Components Library',
	base: '/lay-ui/',
	head: [
	    ['link', { rel: 'icon', href: '/logo.png' }]
	 ],
	themeConfig: {
	    nav: [
	      { text: '首页', link: '/' },
	      { text: '组件', link: '/components/' },
	      { text: 'GitHub', link: 'https://github.com/cghbh/lay-ui' },
	    ],
	    sidebar: {
	    	'/components/': ['', 'base', 'form', 'message', 'data', 'other']
	    }
  }
}