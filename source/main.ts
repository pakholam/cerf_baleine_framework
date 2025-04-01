import { shell } from "electron";
import { checkUpdate, statistics } from "./common/version";
import { onFileCreated } from './create-script';
// @ts-ignore
import packageJSON from '../package.json';

/**
 * @en Method Triggered on Extension Startup
 * @zh 扩展启动时触发的方法
 */
export function load() {
    checkUpdate();
    statistics();
    Editor.Message.addBroadcastListener('asset-db:asset-add', onFileCreated);
 }

/**
 * @en Method triggered when uninstalling the extension
 * @zh 卸载扩展时触发的方法
 */
export function unload() {
    Editor.Message.removeBroadcastListener('asset-db:asset-add', onFileCreated);
 }

export var config: any;

/**
 * @en Registration method for the main process of Extension
 * @zh 为扩展的主进程的注册方法
 */
export const methods: { [key: string]: (...any: any) => any } = {
    /** 打开框架文档 */
    document() {
        shell.openExternal('https://gitee.com/dgflash/oops-framework/wikis/pages');
    },
    /** 打开框架API文档 */
    documentApi() {
        shell.openExternal('https://oops-1255342636.cos.ap-shanghai.myqcloud.com/doc/oops-framework/index.html');
    },
    /** 打开框架更新日志 */
    log() {
        shell.openExternal('https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12101082&doc_id=2873565');
    },
    update() {
        checkUpdate();
    },
    /** 打开解决方案列表 */
    solution() {
        shell.openExternal('https://store.cocos.com/app/search?name=oops');
    },
    /** 打开教程项目 */
    tutorial() {
        shell.openExternal('https://store.cocos.com/app/detail/6647');
    },
    /** 点亮 Gitee 星星 */
    gitee() {
        shell.openExternal('https://gitee.com/dgflash/oops-framework');
    },
    /** 点亮 Github 星星 */
    github() {
        shell.openExternal('https://github.com/dgflash/oops-framework');
    },
    animator_editor() {
        shell.openExternal('https://oops-1255342636.cos.ap-shanghai.myqcloud.com/tools/animator-editor/index.html');
    }
};