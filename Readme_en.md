# vue-loading-module

A plug-in to manage the loading state of vue projects.

## Installation

```shell
npm install vue-loading-module

or

yarn add vue-loading-module
```

## Example

### global schema

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'

import LoadingPlugin from 'vue-loading-module'

createApp(App).use(LoadingPlugin).mount('#app');


// xxx.vue
<template>
  <button @click="getName">load</button>
  {/* loadingAsync: record the state of all your asynchronous functions */}
  <span v-if="loadingAsync.getName">getName function is loading...</span>
</template>

<script>
import { mapAsyncMethods } from 'vue-loading-module'

export default {
    methods: {
        // Map your asynchronous functions
        ...mapAsyncMethods({
            // Functions must return promises
            getName() {
                return new Promise(res => {
                    setTimeout(res, 1000)
                })
            },
            // Or you can use the async function
            async getList() {
                await setTimeOutPro(1000)
            },
        })
    }
    // ...otherConfig
}
</script>
```

### in a component

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
    mixins:[asyncLoadingMixin],
    methods: {
        // Map your asynchronous functions
        ...mapAsyncMethods({
            // Functions must return promises
            getName() {
                return new Promise(res => {
                    setTimeout(res, 1000)
                })
            },
            // Or you can use the async function
            async getList() {
                await setTimeOutPro(1000)
            },
        })
    }
    // ...otherConfig
}
</script>
```
