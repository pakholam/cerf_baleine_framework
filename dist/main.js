"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.methods = exports.config = exports.unload = exports.load = void 0;
const electron_1 = require("electron");
const version_1 = require("./common/version");
/**
 * @en Method Triggered on Extension Startup
 * @zh 扩展启动时触发的方法
 */
function load() {
    (0, version_1.checkUpdate)();
    (0, version_1.statistics)();
}
exports.load = load;
/**
 * @en Method triggered when uninstalling the extension
 * @zh 卸载扩展时触发的方法
 */
function unload() { }
exports.unload = unload;
/**
 * @en Registration method for the main process of Extension
 * @zh 为扩展的主进程的注册方法
 */
exports.methods = {
    /** 打开框架文档 */
    document() {
        electron_1.shell.openExternal('https://gitee.com/dgflash/oops-framework/wikis/pages');
    },
    /** 打开框架API文档 */
    documentApi() {
        electron_1.shell.openExternal('https://oops-1255342636.cos.ap-shanghai.myqcloud.com/doc/oops-framework/index.html');
    },
    /** 打开框架更新日志 */
    log() {
        electron_1.shell.openExternal('https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12101082&doc_id=2873565');
    },
    update() {
        (0, version_1.checkUpdate)();
    },
    /** 打开解决方案列表 */
    solution() {
        electron_1.shell.openExternal('https://store.cocos.com/app/search?name=oops');
    },
    /** 打开教程项目 */
    tutorial() {
        electron_1.shell.openExternal('https://store.cocos.com/app/detail/6647');
    },
    /** 点亮 Gitee 星星 */
    gitee() {
        electron_1.shell.openExternal('https://gitee.com/dgflash/oops-framework');
    },
    /** 点亮 Github 星星 */
    github() {
        electron_1.shell.openExternal('https://github.com/dgflash/oops-framework');
    },
    animator_editor() {
        electron_1.shell.openExternal('https://oops-1255342636.cos.ap-shanghai.myqcloud.com/tools/animator-editor/index.html');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFpQztBQUNqQyw4Q0FBMkQ7QUFJM0Q7OztHQUdHO0FBQ0gsU0FBZ0IsSUFBSTtJQUNoQixJQUFBLHFCQUFXLEdBQUUsQ0FBQztJQUNkLElBQUEsb0JBQVUsR0FBRSxDQUFDO0FBQ2hCLENBQUM7QUFIRixvQkFHRTtBQUVGOzs7R0FHRztBQUNILFNBQWdCLE1BQU0sS0FBSyxDQUFDO0FBQTVCLHdCQUE0QjtBQUk1Qjs7O0dBR0c7QUFDVSxRQUFBLE9BQU8sR0FBNEM7SUFDNUQsYUFBYTtJQUNiLFFBQVE7UUFDSixnQkFBSyxDQUFDLFlBQVksQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFDRCxnQkFBZ0I7SUFDaEIsV0FBVztRQUNQLGdCQUFLLENBQUMsWUFBWSxDQUFDLG9GQUFvRixDQUFDLENBQUM7SUFDN0csQ0FBQztJQUNELGVBQWU7SUFDZixHQUFHO1FBQ0MsZ0JBQUssQ0FBQyxZQUFZLENBQUMsc0ZBQXNGLENBQUMsQ0FBQztJQUMvRyxDQUFDO0lBQ0QsTUFBTTtRQUNGLElBQUEscUJBQVcsR0FBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxlQUFlO0lBQ2YsUUFBUTtRQUNKLGdCQUFLLENBQUMsWUFBWSxDQUFDLDhDQUE4QyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUNELGFBQWE7SUFDYixRQUFRO1FBQ0osZ0JBQUssQ0FBQyxZQUFZLENBQUMseUNBQXlDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0Qsa0JBQWtCO0lBQ2xCLEtBQUs7UUFDRCxnQkFBSyxDQUFDLFlBQVksQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDRCxtQkFBbUI7SUFDbkIsTUFBTTtRQUNGLGdCQUFLLENBQUMsWUFBWSxDQUFDLDJDQUEyQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUNELGVBQWU7UUFDWCxnQkFBSyxDQUFDLFlBQVksQ0FBQyx1RkFBdUYsQ0FBQyxDQUFDO0lBQ2hILENBQUM7Q0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2hlbGwgfSBmcm9tIFwiZWxlY3Ryb25cIjtcbmltcG9ydCB7IGNoZWNrVXBkYXRlLCBzdGF0aXN0aWNzIH0gZnJvbSBcIi4vY29tbW9uL3ZlcnNpb25cIjtcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBwYWNrYWdlSlNPTiBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuXG4vKipcbiAqIEBlbiBNZXRob2QgVHJpZ2dlcmVkIG9uIEV4dGVuc2lvbiBTdGFydHVwXG4gKiBAemgg5omp5bGV5ZCv5Yqo5pe26Kem5Y+R55qE5pa55rOVXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkKCkge1xuICAgIGNoZWNrVXBkYXRlKCk7XG4gICAgc3RhdGlzdGljcygpO1xuIH1cblxuLyoqXG4gKiBAZW4gTWV0aG9kIHRyaWdnZXJlZCB3aGVuIHVuaW5zdGFsbGluZyB0aGUgZXh0ZW5zaW9uXG4gKiBAemgg5Y246L295omp5bGV5pe26Kem5Y+R55qE5pa55rOVXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmxvYWQoKSB7IH1cblxuZXhwb3J0IHZhciBjb25maWc6IGFueTtcblxuLyoqXG4gKiBAZW4gUmVnaXN0cmF0aW9uIG1ldGhvZCBmb3IgdGhlIG1haW4gcHJvY2VzcyBvZiBFeHRlbnNpb25cbiAqIEB6aCDkuLrmianlsZXnmoTkuLvov5vnqIvnmoTms6jlhozmlrnms5VcbiAqL1xuZXhwb3J0IGNvbnN0IG1ldGhvZHM6IHsgW2tleTogc3RyaW5nXTogKC4uLmFueTogYW55KSA9PiBhbnkgfSA9IHtcbiAgICAvKiog5omT5byA5qGG5p625paH5qGjICovXG4gICAgZG9jdW1lbnQoKSB7XG4gICAgICAgIHNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly9naXRlZS5jb20vZGdmbGFzaC9vb3BzLWZyYW1ld29yay93aWtpcy9wYWdlcycpO1xuICAgIH0sXG4gICAgLyoqIOaJk+W8gOahhuaetkFQSeaWh+ahoyAqL1xuICAgIGRvY3VtZW50QXBpKCkge1xuICAgICAgICBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHBzOi8vb29wcy0xMjU1MzQyNjM2LmNvcy5hcC1zaGFuZ2hhaS5teXFjbG91ZC5jb20vZG9jL29vcHMtZnJhbWV3b3JrL2luZGV4Lmh0bWwnKTtcbiAgICB9LFxuICAgIC8qKiDmiZPlvIDmoYbmnrbmm7TmlrDml6Xlv5cgKi9cbiAgICBsb2coKSB7XG4gICAgICAgIHNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly9naXRlZS5jb20vZGdmbGFzaC9vb3BzLWZyYW1ld29yay93aWtpcy9wYWdlcz9zb3J0X2lkPTEyMTAxMDgyJmRvY19pZD0yODczNTY1Jyk7XG4gICAgfSxcbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGNoZWNrVXBkYXRlKCk7XG4gICAgfSxcbiAgICAvKiog5omT5byA6Kej5Yaz5pa55qGI5YiX6KGoICovXG4gICAgc29sdXRpb24oKSB7XG4gICAgICAgIHNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly9zdG9yZS5jb2Nvcy5jb20vYXBwL3NlYXJjaD9uYW1lPW9vcHMnKTtcbiAgICB9LFxuICAgIC8qKiDmiZPlvIDmlZnnqIvpobnnm64gKi9cbiAgICB0dXRvcmlhbCgpIHtcbiAgICAgICAgc2hlbGwub3BlbkV4dGVybmFsKCdodHRwczovL3N0b3JlLmNvY29zLmNvbS9hcHAvZGV0YWlsLzY2NDcnKTtcbiAgICB9LFxuICAgIC8qKiDngrnkuq4gR2l0ZWUg5pif5pifICovXG4gICAgZ2l0ZWUoKSB7XG4gICAgICAgIHNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly9naXRlZS5jb20vZGdmbGFzaC9vb3BzLWZyYW1ld29yaycpO1xuICAgIH0sXG4gICAgLyoqIOeCueS6riBHaXRodWIg5pif5pifICovXG4gICAgZ2l0aHViKCkge1xuICAgICAgICBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHBzOi8vZ2l0aHViLmNvbS9kZ2ZsYXNoL29vcHMtZnJhbWV3b3JrJyk7XG4gICAgfSxcbiAgICBhbmltYXRvcl9lZGl0b3IoKSB7XG4gICAgICAgIHNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly9vb3BzLTEyNTUzNDI2MzYuY29zLmFwLXNoYW5naGFpLm15cWNsb3VkLmNvbS90b29scy9hbmltYXRvci1lZGl0b3IvaW5kZXguaHRtbCcpO1xuICAgIH1cbn07Il19