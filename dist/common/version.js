"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reload = exports.statistics = exports.checkUpdate = void 0;
const package_util_1 = require("./package-util");
const axios = require('axios');
/**
 * 检查更新
 * @param {boolean} logWhatever 无论有无更新都打印提示
 */
function checkUpdate() {
    const packageJsonUrl = `${package_util_1.PackageUtil.repository}/raw/master/package.json`;
    axios.get(packageJsonUrl)
        .then(async (response) => {
        const json = response.data;
        if (json && json.version) {
            const remoteVersion = json.version;
            // 本地版本号
            const localVersion = getLocalVersion();
            // 对比版本号
            const result = compareVersion(localVersion, remoteVersion);
            if (result < 0) {
                console.log('【Oops Framework】发现新版本');
                console.log('【Oops Framework】本地版本：', localVersion);
                console.log('【Oops Framework】最新版本：', remoteVersion);
                console.log('【Oops Framework】关闭 Cocos Creator 运行 update-oops-plugin-hot-update 可自动更新');
            }
            else {
                console.log('【Oops Framework】当前 Oops Framework 为最新版本');
                console.log('【Oops Framework】本地版本：', localVersion);
            }
        }
    })
        .catch(() => {
        console.error("【Oops Framework】请检查你的网络是否正常，框架版本验证失败");
    });
}
exports.checkUpdate = checkUpdate;
async function statistics() {
    // 获取本地 IP 地址  
    const os = require('os');
    const getLocalIp = () => {
        const interfaces = os.networkInterfaces();
        for (let interfaceKey in interfaces) {
            for (let interfaceInfo of interfaces[interfaceKey]) {
                if (interfaceInfo.family === 'IPv4' && !interfaceInfo.internal) {
                    return interfaceInfo.address;
                }
            }
        }
        return 'undefined';
    };
    const si = require('systeminformation');
    const system = await si.system();
    const axios = require('axios');
    const api = `http://dgflash.work:8866/ptl/Register`;
    const params = {
        username: system.uuid,
        ip: getLocalIp()
    };
    axios.post(api, params).then((response) => { }).catch(() => { });
}
exports.statistics = statistics;
async function reload() {
    // const path = await Editor.Package.getPath(PackageUtil.name);
    // await Editor.Package.unregister(path);
    // await Editor.Package.register(path);
    // await Editor.Package.enable(path);
}
exports.reload = reload;
/**
 * 获取本地版本号
 * @returns {string}
 */
function getLocalVersion() {
    return package_util_1.PackageUtil.version;
}
/**
     * 拆分版本号
     * @param {string | number} version 版本号文本
     * @returns {number[]}
     * @example
     * splitVersionString('1.2.0');  // [1, 2, 0]
     */
function splitVersionString(version) {
    if (typeof version === 'number') {
        return [version];
    }
    if (typeof version === 'string') {
        return (version.replace(/-/g, '.').split('.').map(v => (parseInt(v) || 0)));
    }
    return [0];
}
/**
 * 对比版本号
 * @param {string | number} a 版本 a
 * @param {string | number} b 版本 b
 * @returns {-1 | 0 | 1}
 * @example
 * compareVersion('1.0.0', '1.0.1');    // -1
 * compareVersion('1.1.0', '1.1.0');    // 0
 * compareVersion('1.2.1', '1.2.0');    // 1
 * compareVersion('1.2.0.1', '1.2.0');  // 1
 */
function compareVersion(a, b) {
    const acs = splitVersionString(a), bcs = splitVersionString(b);
    const count = Math.max(acs.length, bcs.length);
    for (let i = 0; i < count; i++) {
        const ac = acs[i], bc = bcs[i];
        // 前者缺少分量或前者小于后者
        if (ac == undefined || ac < bc) {
            return -1;
        }
        // 后者缺少分量或前者大于后者
        if (bc == undefined || ac > bc) {
            return 1;
        }
    }
    return 0;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9jb21tb24vdmVyc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBNkM7QUFDN0MsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRS9COzs7R0FHRztBQUNILFNBQWdCLFdBQVc7SUFDdkIsTUFBTSxjQUFjLEdBQUcsR0FBRywwQkFBVyxDQUFDLFVBQVUsMEJBQTBCLENBQUM7SUFDM0UsS0FBSyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7U0FDcEIsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFhLEVBQUUsRUFBRTtRQUMxQixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBRTNCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdEIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNuQyxRQUFRO1lBQ1IsTUFBTSxZQUFZLEdBQUcsZUFBZSxFQUFFLENBQUM7WUFDdkMsUUFBUTtZQUNSLE1BQU0sTUFBTSxHQUFHLGNBQWMsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFFM0QsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztnQkFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDO2FBQzFGO2lCQUNJO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLENBQUMsQ0FBQztnQkFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxZQUFZLENB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LE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLGdCQUFnQjtRQUNoQixJQUFJLEVBQUUsSUFBSSxTQUFTLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUM1QixPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ2I7UUFDRCxnQkFBZ0I7UUFDaEIsSUFBSSxFQUFFLElBQUksU0FBUyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDNUIsT0FBTyxDQUFDLENBQUM7U0FDWjtLQUNKO0lBQ0QsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFja2FnZVV0aWwgfSBmcm9tIFwiLi9wYWNrYWdlLXV0aWxcIjtcclxuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xyXG5cclxuLyoqXHJcbiAqIOajgOafpeabtOaWsFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGxvZ1doYXRldmVyIOaXoOiuuuacieaXoOabtOaWsOmDveaJk+WNsOaPkOekulxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrVXBkYXRlKCkge1xyXG4gICAgY29uc3QgcGFja2FnZUpzb25VcmwgPSBgJHtQYWNrYWdlVXRpbC5yZXBvc2l0b3J5fS9yYXcvbWFzdGVyL3BhY2thZ2UuanNvbmA7XHJcbiAgICBheGlvcy5nZXQocGFja2FnZUpzb25VcmwpXHJcbiAgICAgICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QganNvbiA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICBpZiAoanNvbiAmJiBqc29uLnZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW90ZVZlcnNpb24gPSBqc29uLnZlcnNpb247XHJcbiAgICAgICAgICAgICAgICAvLyDmnKzlnLDniYjmnKzlj7dcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmVyc2lvbiA9IGdldExvY2FsVmVyc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgLy8g5a+55q+U54mI5pys5Y+3XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjb21wYXJlVmVyc2lvbihsb2NhbFZlcnNpb24sIHJlbW90ZVZlcnNpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+OAkE9vcHMgRnJhbWV3b3Jr44CR5Y+R546w5paw54mI5pysJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+OAkE9vcHMgRnJhbWV3b3Jr44CR5pys5Zyw54mI5pys77yaJywgbG9jYWxWZXJzaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn44CQT29wcyBGcmFtZXdvcmvjgJHmnIDmlrDniYjmnKzvvJonLCByZW1vdGVWZXJzaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn44CQT29wcyBGcmFtZXdvcmvjgJHlhbPpl60gQ29jb3MgQ3JlYXRvciDov5DooYwgdXBkYXRlLW9vcHMtcGx1Z2luLWhvdC11cGRhdGUg5Y+v6Ieq5Yqo5pu05pawJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn44CQT29wcyBGcmFtZXdvcmvjgJHlvZPliY0gT29wcyBGcmFtZXdvcmsg5Li65pyA5paw54mI5pysJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+OAkE9vcHMgRnJhbWV3b3Jr44CR5pys5Zyw54mI5pys77yaJywgbG9jYWxWZXJzaW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuOAkE9vcHMgRnJhbWV3b3Jr44CR6K+35qOA5p+l5L2g55qE572R57uc5piv5ZCm5q2j5bi477yM5qGG5p6254mI5pys6aqM6K+B5aSx6LSlXCIpO1xyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhdGlzdGljcygpIHtcclxuICAgIC8vIOiOt+WPluacrOWcsCBJUCDlnLDlnYAgIFxyXG4gICAgY29uc3Qgb3MgPSByZXF1aXJlKCdvcycpO1xyXG4gICAgY29uc3QgZ2V0TG9jYWxJcCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBpbnRlcmZhY2VzID0gb3MubmV0d29ya0ludGVyZmFjZXMoKTtcclxuICAgICAgICBmb3IgKGxldCBpbnRlcmZhY2VLZXkgaW4gaW50ZXJmYWNlcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbnRlcmZhY2VJbmZvIG9mIGludGVyZmFjZXNbaW50ZXJmYWNlS2V5XSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGludGVyZmFjZUluZm8uZmFtaWx5ID09PSAnSVB2NCcgJiYgIWludGVyZmFjZUluZm8uaW50ZXJuYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW50ZXJmYWNlSW5mby5hZGRyZXNzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAndW5kZWZpbmVkJztcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2kgPSByZXF1aXJlKCdzeXN0ZW1pbmZvcm1hdGlvbicpO1xyXG4gICAgY29uc3Qgc3lzdGVtID0gYXdhaXQgc2kuc3lzdGVtKCk7XHJcbiAgICBjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcbiAgICBjb25zdCBhcGkgPSBgaHR0cDovL2RnZmxhc2gud29yazo4ODY2L3B0bC9SZWdpc3RlcmA7XHJcbiAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN5c3RlbS51dWlkLFxyXG4gICAgICAgIGlwOiBnZXRMb2NhbElwKClcclxuICAgIH07XHJcbiAgICBheGlvcy5wb3N0KGFwaSwgcGFyYW1zKS50aGVuKChyZXNwb25zZTogYW55KSA9PiB7IH0pLmNhdGNoKCgpID0+IHsgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWxvYWQoKSB7XHJcbiAgICAvLyBjb25zdCBwYXRoID0gYXdhaXQgRWRpdG9yLlBhY2thZ2UuZ2V0UGF0aChQYWNrYWdlVXRpbC5uYW1lKTtcclxuICAgIC8vIGF3YWl0IEVkaXRvci5QYWNrYWdlLnVucmVnaXN0ZXIocGF0aCk7XHJcbiAgICAvLyBhd2FpdCBFZGl0b3IuUGFja2FnZS5yZWdpc3RlcihwYXRoKTtcclxuICAgIC8vIGF3YWl0IEVkaXRvci5QYWNrYWdlLmVuYWJsZShwYXRoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluacrOWcsOeJiOacrOWPt1xyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0TG9jYWxWZXJzaW9uKCkge1xyXG4gICAgcmV0dXJuIFBhY2thZ2VVdGlsLnZlcnNpb247XHJcbn1cclxuXHJcbi8qKlxyXG4gICAgICog5ouG5YiG54mI5pys5Y+3XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gdmVyc2lvbiDniYjmnKzlj7fmlofmnKxcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJbXX1cclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBzcGxpdFZlcnNpb25TdHJpbmcoJzEuMi4wJyk7ICAvLyBbMSwgMiwgMF1cclxuICAgICAqL1xyXG5mdW5jdGlvbiBzcGxpdFZlcnNpb25TdHJpbmcodmVyc2lvbjogc3RyaW5nKSB7XHJcbiAgICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgcmV0dXJuIFt2ZXJzaW9uXTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgdmVyc2lvbiA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB2ZXJzaW9uLnJlcGxhY2UoLy0vZywgJy4nKS5zcGxpdCgnLicpLm1hcCh2ID0+IChwYXJzZUludCh2KSB8fCAwKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFswXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOWvueavlOeJiOacrOWPt1xyXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gYSDniYjmnKwgYVxyXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlcn0gYiDniYjmnKwgYlxyXG4gKiBAcmV0dXJucyB7LTEgfCAwIHwgMX1cclxuICogQGV4YW1wbGVcclxuICogY29tcGFyZVZlcnNpb24oJzEuMC4wJywgJzEuMC4xJyk7ICAgIC8vIC0xXHJcbiAqIGNvbXBhcmVWZXJzaW9uKCcxLjEuMCcsICcxLjEuMCcpOyAgICAvLyAwXHJcbiAqIGNvbXBhcmVWZXJzaW9uKCcxLjIuMScsICcxLjIuMCcpOyAgICAvLyAxXHJcbiAqIGNvbXBhcmVWZXJzaW9uKCcxLjIuMC4xJywgJzEuMi4wJyk7ICAvLyAxXHJcbiAqL1xyXG5mdW5jdGlvbiBjb21wYXJlVmVyc2lvbihhOiBzdHJpbmcsIGI6IHN0cmluZykge1xyXG4gICAgY29uc3QgYWNzID0gc3BsaXRWZXJzaW9uU3RyaW5nKGEpLCBiY3MgPSBzcGxpdFZlcnNpb25TdHJpbmcoYik7XHJcbiAgICBjb25zdCBjb3VudCA9IE1hdGgubWF4KGFjcy5sZW5ndGgsIGJjcy5sZW5ndGgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgYWMgPSBhY3NbaV0sIGJjID0gYmNzW2ldO1xyXG4gICAgICAgIC8vIOWJjeiAhee8uuWwkeWIhumHj+aIluWJjeiAheWwj+S6juWQjuiAhVxyXG4gICAgICAgIGlmIChhYyA9PSB1bmRlZmluZWQgfHwgYWMgPCBiYykge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWQjuiAhee8uuWwkeWIhumHj+aIluWJjeiAheWkp+S6juWQjuiAhVxyXG4gICAgICAgIGlmIChiYyA9PSB1bmRlZmluZWQgfHwgYWMgPiBiYykge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxufSJdfQ==