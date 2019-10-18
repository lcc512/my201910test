# Marketing CSMS（前台界面）
> 仿电费计费业扩系统的部分功能模块的全栈实现
>
> 2019年10月开发实现



## 技术应用

- vue-cli 脚手架搭建
- element-ui 样式框架
- vue-router 路由导航
- vue-print-nb 打印
- vue-json-excel Excel表格导出

## 开发，打包

```shell
npm run dev
npm run build
```

## Git

```
git status
git add .
git commit -m 'describtion'
git clone https://github.com/lcc512/my201910test.git

git status
git add .
git commit -m 'describtion'
git clone https://github.com/lcc512/2019-mssql-api.git
```



## 文件目录

```shell
|-- App.vue #vue入口
|-- assets
|   `-- logo.png
|-- components
|   |-- Business
|   |   |-- AsideCommon.vue #通用侧边栏
|   |   |-- Charge.vue #算费主vue
|   |   |-- Charges #算费页面相关
|   |   |   |-- ChargeAudit.vue
|   |   |   |-- ChargeAuditList.vue
|   |   |   |-- ChargeCalcu.vue
|   |   |   |-- ChargeCheck.vue
|   |   |   |-- ChargeCheckList.vue
|   |   |   |-- ChargeEnter.vue
|   |   |   |-- ChargeEnterList.vue
|   |   |   `-- ChargeReady.vue
|   |   |-- Information.vue #档案编辑主vue
|   |   `-- Informations #档案编辑页面相关
|   |       |-- InforEdit.vue
|   |       |-- InforEditApply.vue
|   |       |-- InforEditMain.vue
|   |       |-- InforNew.vue
|   |       `-- InfotEditList.vue
|   |-- HelloWorld.vue
|   |-- Home.vue
|   |-- Login.vue
|   |-- NotFound.vue
|   |-- Register.vue
|   `-- commonCompon
|-- main.js #程序主入口
`-- router
    `-- index.js #vue路由配置
```
