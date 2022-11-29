import { App } from "vue";
declare type Fn = (...arg: any[]) => Promise<any>;
interface AsyncMethods {
    [key: string]: Fn;
}
interface This {
    loadingAsync: {
        [key: string]: boolean;
    };
}
export declare function mapAsyncMethods<T extends AsyncMethods>(asyncMethods: T): T;
export declare const asyncLoadingMixin: import("vue").DefineComponent<{}, {}, This, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
declare const _default: {
    install: (app: App) => void;
};
export default _default;
