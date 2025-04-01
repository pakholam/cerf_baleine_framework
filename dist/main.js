"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.methods = exports.config = exports.unload = exports.load = void 0;
const electron_1 = require("electron");
const version_1 = require("./common/version");
const create_script_1 = require("./create-script");
/**
 * @en Method Triggered on Extension Startup
 * @zh 扩展启动时触发的方法
 */
function load() {
    (0, version_1.checkUpdate)();
    (0, version_1.statistics)();
    Editor.Message.addBroadcastListener('asset-db:asset-add', create_script_1.onFileCreated);
}
exports.load = load;
/**
 * @en Method triggered when uninstalling the extension
 * @zh 卸载扩展时触发的方法
 */
function unload() {
    Editor.Message.removeBroadcastListener('asset-db:asset-add', create_script_1.onFileCreated);
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFpQztBQUNqQyw4Q0FBMkQ7QUFDM0QsbURBQWdEO0FBSWhEOzs7R0FHRztBQUNILFNBQWdCLElBQUk7SUFDaEIsSUFBQSxxQkFBVyxHQUFFLENBQUM7SUFDZCxJQUFBLG9CQUFVLEdBQUUsQ0FBQztJQUNiLE1BQU0sQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLEVBQUUsNkJBQWEsQ0FBQyxDQUFDO0FBQzVFLENBQUM7QUFKRixvQkFJRTtBQUVGOzs7R0FHRztBQUNILFNBQWdCLE1BQU07SUFDbEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxvQkFBb0IsRUFBRSw2QkFBYSxDQUFDLENBQUM7QUFDL0UsQ0FBQztBQUZGLHdCQUVFO0FBSUY7OztHQUdHO0FBQ1UsUUFBQSxPQUFPLEdBQTRDO0lBQzVELGFBQWE7SUFDYixRQUFRO1FBQ0osZ0JBQUssQ0FBQyxZQUFZLENBQUMsc0RBQXNELENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBQ0QsZ0JBQWdCO0lBQ2hCLFdBQVc7UUFDUCxnQkFBSyxDQUFDLFlBQVksQ0FBQyxvRkFBb0YsQ0FBQyxDQUFDO0lBQzdHLENBQUM7SUFDRCxlQUFlO0lBQ2YsR0FBRztRQUNDLGdCQUFLLENBQUMsWUFBWSxDQUFDLHNGQUFzRixDQUFDLENBQUM7SUFDL0csQ0FBQztJQUNELE1BQU07UUFDRixJQUFBLHFCQUFXLEdBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0QsZUFBZTtJQUNmLFFBQVE7UUFDSixnQkFBSyxDQUFDLFlBQVksQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFDRCxhQUFhO0lBQ2IsUUFBUTtRQUNKLGdCQUFLLENBQUMsWUFBWSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUNELGtCQUFrQjtJQUNsQixLQUFLO1FBQ0QsZ0JBQUssQ0FBQyxZQUFZLENBQUMsMENBQTBDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ0QsbUJBQW1CO0lBQ25CLE1BQU07UUFDRixnQkFBSyxDQUFDLFlBQVksQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDRCxlQUFlO1FBQ1gsZ0JBQUssQ0FBQyxZQUFZLENBQUMsdUZBQXVGLENBQUMsQ0FBQztJQUNoSCxDQUFDO0NBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNoZWxsIH0gZnJvbSBcImVsZWN0cm9uXCI7XG5pbXBvcnQgeyBjaGVja1VwZGF0ZSwgc3RhdGlzdGljcyB9IGZyb20gXCIuL2NvbW1vbi92ZXJzaW9uXCI7XG5pbXBvcnQgeyBvbkZpbGVDcmVhdGVkIH0gZnJvbSAnLi9jcmVhdGUtc2NyaXB0Jztcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBwYWNrYWdlSlNPTiBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuXG4vKipcbiAqIEBlbiBNZXRob2QgVHJpZ2dlcmVkIG9uIEV4dGVuc2lvbiBTdGFydHVwXG4gKiBAemgg5omp5bGV5ZCv5Yqo5pe26Kem5Y+R55qE5pa55rOVXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkKCkge1xuICAgIGNoZWNrVXBkYXRlKCk7XG4gICAgc3RhdGlzdGljcygpO1xuICAgIEVkaXRvci5NZXNzYWdlLmFkZEJyb2FkY2FzdExpc3RlbmVyKCdhc3NldC1kYjphc3NldC1hZGQnLCBvbkZpbGVDcmVhdGVkKTtcbiB9XG5cbi8qKlxuICogQGVuIE1ldGhvZCB0cmlnZ2VyZWQgd2hlbiB1bmluc3RhbGxpbmcgdGhlIGV4dGVuc2lvblxuICogQHpoIOWNuOi9veaJqeWxleaXtuinpuWPkeeahOaWueazlVxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5sb2FkKCkge1xuICAgIEVkaXRvci5NZXNzYWdlLnJlbW92ZUJyb2FkY2FzdExpc3RlbmVyKCdhc3NldC1kYjphc3NldC1hZGQnLCBvbkZpbGVDcmVhdGVkKTtcbiB9XG5cbmV4cG9ydCB2YXIgY29uZmlnOiBhbnk7XG5cbi8qKlxuICogQGVuIFJlZ2lzdHJhdGlvbiBtZXRob2QgZm9yIHRoZSBtYWluIHByb2Nlc3Mgb2YgRXh0ZW5zaW9uXG4gKiBAemgg5Li65omp5bGV55qE5Li76L+b56iL55qE5rOo5YaM5pa55rOVXG4gKi9cbmV4cG9ydCBjb25zdCBtZXRob2RzOiB7IFtrZXk6IHN0cmluZ106ICguLi5hbnk6IGFueSkgPT4gYW55IH0gPSB7XG4gICAgLyoqIOaJk+W8gOahhuaetuaWh+ahoyAqL1xuICAgIGRvY3VtZW50KCkge1xuICAgICAgICBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHBzOi8vZ2l0ZWUuY29tL2RnZmxhc2gvb29wcy1mcmFtZXdvcmsvd2lraXMvcGFnZXMnKTtcbiAgICB9LFxuICAgIC8qKiDmiZPlvIDmoYbmnrZBUEnmlofmoaMgKi9cbiAgICBkb2N1bWVudEFwaSgpIHtcbiAgICAgICAgc2hlbGwub3BlbkV4dGVybmFsKCdodHRwczovL29vcHMtMTI1NTM0MjYzNi5jb3MuYXAtc2hhbmdoYWkubXlxY2xvdWQuY29tL2RvYy9vb3BzLWZyYW1ld29yay9pbmRleC5odG1sJyk7XG4gICAgfSxcbiAgICAvKiog5omT5byA5qGG5p625pu05paw5pel5b+XICovXG4gICAgbG9nKCkge1xuICAgICAgICBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHBzOi8vZ2l0ZWUuY29tL2RnZmxhc2gvb29wcy1mcmFtZXdvcmsvd2lraXMvcGFnZXM/c29ydF9pZD0xMjEwMTA4MiZkb2NfaWQ9Mjg3MzU2NScpO1xuICAgIH0sXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBjaGVja1VwZGF0ZSgpO1xuICAgIH0sXG4gICAgLyoqIOaJk+W8gOino+WGs+aWueahiOWIl+ihqCAqL1xuICAgIHNvbHV0aW9uKCkge1xuICAgICAgICBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHBzOi8vc3RvcmUuY29jb3MuY29tL2FwcC9zZWFyY2g/bmFtZT1vb3BzJyk7XG4gICAgfSxcbiAgICAvKiog5omT5byA5pWZ56iL6aG555uuICovXG4gICAgdHV0b3JpYWwoKSB7XG4gICAgICAgIHNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly9zdG9yZS5jb2Nvcy5jb20vYXBwL2RldGFpbC82NjQ3Jyk7XG4gICAgfSxcbiAgICAvKiog54K55LquIEdpdGVlIOaYn+aYnyAqL1xuICAgIGdpdGVlKCkge1xuICAgICAgICBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHBzOi8vZ2l0ZWUuY29tL2RnZmxhc2gvb29wcy1mcmFtZXdvcmsnKTtcbiAgICB9LFxuICAgIC8qKiDngrnkuq4gR2l0aHViIOaYn+aYnyAqL1xuICAgIGdpdGh1YigpIHtcbiAgICAgICAgc2hlbGwub3BlbkV4dGVybmFsKCdodHRwczovL2dpdGh1Yi5jb20vZGdmbGFzaC9vb3BzLWZyYW1ld29yaycpO1xuICAgIH0sXG4gICAgYW5pbWF0b3JfZWRpdG9yKCkge1xuICAgICAgICBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHBzOi8vb29wcy0xMjU1MzQyNjM2LmNvcy5hcC1zaGFuZ2hhaS5teXFjbG91ZC5jb20vdG9vbHMvYW5pbWF0b3ItZWRpdG9yL2luZGV4Lmh0bWwnKTtcbiAgICB9XG59OyJdfQ==