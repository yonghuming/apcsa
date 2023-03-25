import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'EN',
  title: 'APCSA Accelerator！',
  description: '跟郎老师学 AP，AP 计算机科学',
  base: '/apcsa/',
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: 'Foo',
        link: '/frq/',
      },
      // NavbarGroup
      {
        text: 'Codingbat',
        link: 'https://codingbat.com/java'
      },
      // 字符串 - 页面文件路径
      '/README.md',
    ],
    sidebar: [
      {
          text: 'Basic',
          collapsable: false,
          children: [
              '/',
              '/basic/if',
              '/basic/while',
              '/basic/array',
              
          ]
      },
      {
          text: 'FRQ',
          collapsable: false,
          children: [
              "/frq/2021",
              "/frq/2020",
              "/frq/2019",
              "/frq/2018",
              "/frq/2017",
              "/frq/2016",
              "/frq/2015",
              "/frq/2014",
              "/frq/2013",
              "/frq/2012",
              "/frq/2011",
              "/frq/2010",
              "/frq/2009",
          ]
      },
      {
          text: 'Vocabulary',
          collapsable: false,
          children: [
              '/vocabulary'
          ]
      },
      {
          text: 'Tools',
          collapsable: false,
          children: [
              '/tools/shuangpin',
              '/tools/snipaste',
              
          ]
      },
      
      
  ],
  sidebarDepth: 3
  }),
})