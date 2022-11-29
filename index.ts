import { defineComponent, App } from "vue";

type Fn = (...arg: any[]) => Promise<any>

interface AsyncMethods {
    [key: string]: Fn
}

interface This {
    loadingAsync: { [key: string]: boolean }
}

export function mapAsyncMethods<T extends AsyncMethods>(asyncMethods: T): T {
    const obj: any = {};

    for (const asyncMethodsKey in asyncMethods) {
        let fn = function (this: This) {
            this.loadingAsync[asyncMethodsKey] = true;
            asyncMethods[asyncMethodsKey]
                .call(this, arguments)
                .finally(() => {
                    this.loadingAsync[asyncMethodsKey] = false;
                });
        }
        obj[asyncMethodsKey] = fn;
    }
    return obj as T;
}

export const asyncLoadingMixin = defineComponent({
    data: function (): This {
        return {
            loadingAsync: {}
        }
    }
});

export default {
    install: (app: App) => {
        app.mixin(asyncLoadingMixin);
    }
}


