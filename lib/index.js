import { defineComponent } from "vue";
export function mapAsyncMethods(asyncMethods) {
    const obj = {};
    for (const asyncMethodsKey in asyncMethods) {
        let fn = function () {
            this.loadingAsync[asyncMethodsKey] = true;
            asyncMethods[asyncMethodsKey]
                .call(this, arguments)
                .finally(() => {
                this.loadingAsync[asyncMethodsKey] = false;
            });
        };
        obj[asyncMethodsKey] = fn;
    }
    return obj;
}
export const asyncLoadingMixin = defineComponent({
    data: function () {
        return {
            loadingAsync: {}
        };
    }
});
export default {
    install: (app) => {
        app.mixin(asyncLoadingMixin);
    }
};
