module.exports = {
	title: "LayUI",
	description: 'Vue Components Library',
	base: '/lay-ui/',
	themeConfig: {
	    nav: [
	      { text: '首页', link: '/' },
	      { text: '组件', link: '/components/' },
	      { text: 'GitHub', link: 'https://github.com/cghbh/lay-ui' },
	    ],
	    sidebar: {
	    	'/components/': ['', 'base', 'form', 'data']
	    }
  }
}