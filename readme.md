# vue-loading-module

(English)<https://github.com/perter-laoguo/vue-loading-module/blob/main/Readme_en.md>

## 介绍

一个管理vue组件中methods状态的插件

## 安装

```shell
npm install vue-loading-module

or

yarn add vue-loading-module
```

## 示例

### 全局注册

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'

import LoadingPlugin from 'vue-loading-module'

createApp(App).use(LoadingPlugin).mount('#app');


// xxx.vue
<template>
  <button @click="getName">load</button>
  {/* loadingAsync: 使用和函数同名的属性记录了对应函数的loading状态 */}
  <span v-if="loadingAsync.getName">getName function is loading...</span>
</template>

<script>
import { mapAsyncMethods } from 'vue-loading-module'

export default {
    methods: {
        // 把你的异步函数包裹进来，并且展开到methods中
        ...mapAsyncMethods({
            // 函数必须返回一个promsie
            getName() {
                return new Promise(res => {
                    setTimeout(res, 1000)
                })
            },
            // 或者你可以使用async函数，它会自动返回一个promise
            async getList() {
                await setTimeOutPro(1000)
            },
        }),
        // 其他不需要管理loading的函数
    }
}
</script>
```

### 也可以单独在某个组件中使用

```js
// xxx.vue
<template>
  <button @click="getName">load</button>
  {/* loadingAsync: record the state of all your asynchronous functions */}
  <span v-if="loadingAsync.getName">getName function is loading...</span>
</template>

<script>
import { asyncLoadingMixin, mapAsyncMethods } from 'vue-loading-module'

export default {
    // 将asyncLoadingMixin混入到当前组件
    mixins: [asyncLoadingMixin],
    methods: {
        // 其他配置相同
        ...mapAsyncMethods({
            getName() {
                return new Promise(res => {
                    setTimeout(res, 1000)
                })
            },
            async getList() {
                await setTimeOutPro(1000)
            },
        })
    }
}
</script>
```

## 参与贡献

- Fork 本仓库
- 新建 Feat_xxx 分支
- 提交代码
- 新建 Pull Request
