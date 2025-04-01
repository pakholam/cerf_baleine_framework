"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onFileCreated = exports.createScript = exports.createScriptBll = exports.createScriptModule = exports.createView = void 0;
const path_1 = __importStar(require("path"));
const fs_1 = require("fs");
/** 写入文件 */
function createView(directoryPath, fileName, content, isEcsComp = true) {
    return new Promise(async (resolve, reject) => {
        // 创建脚本
        let className = fileName + "View";
        let scriptUrl = "";
        if (isEcsComp) {
            scriptUrl = path_1.default.join(directoryPath, fileName) + "ViewComp.ts";
        }
        else {
            scriptUrl = path_1.default.join(directoryPath, fileName) + "View.ts";
        }
        if (!(0, fs_1.existsSync)(scriptUrl)) {
            content = content.replace(/<%Name%>/g, className);
            await Editor.Message.request('asset-db', 'create-asset', scriptUrl, content);
        }
        // 创建预制
        let prefabUrl = path_1.default.join(directoryPath, fileName) + ".prefab";
        if (!(0, fs_1.existsSync)(prefabUrl)) {
            if (isEcsComp)
                className = className + "Comp";
            await Editor.Message.request('scene', 'execute-scene-script', {
                name: "cerf_baleine_framework",
                method: 'createPrefab',
                args: [fileName, className, prefabUrl]
            });
        }
        // 闪烁提示新创建的脚本文件
        Editor.Message.send('assets', 'twinkle', scriptUrl);
        // 打开脚本
        Editor.Message.request('asset-db', 'open-asset', scriptUrl);
        // 打开预制
        Editor.Message.request('asset-db', 'open-asset', prefabUrl);
        resolve();
    });
}
exports.createView = createView;
function createScriptModule(directoryPath, fileName, content) {
    return new Promise(async (resolve, reject) => {
        // 创建目录
        let pathName = fileName.toLowerCase();
        let pathModule = path_1.default.join(directoryPath, pathName);
        if (!(0, fs_1.existsSync)(pathModule)) {
            await Editor.Message.request('asset-db', 'create-asset', pathModule, null);
        }
        let subPathView = path_1.default.join(pathModule, "view");
        if (!(0, fs_1.existsSync)(subPathView)) {
            await Editor.Message.request('asset-db', 'create-asset', subPathView, null);
        }
        let subPathBll = path_1.default.join(pathModule, "bll");
        if (!(0, fs_1.existsSync)(subPathBll)) {
            await Editor.Message.request('asset-db', 'create-asset', subPathBll, null);
        }
        let subPathModel = path_1.default.join(pathModule, "model");
        if (!(0, fs_1.existsSync)(subPathModel)) {
            await Editor.Message.request('asset-db', 'create-asset', subPathModel, null);
        }
        // 创建脚本
        let scriptUrl = path_1.default.join(pathModule, fileName) + ".ts";
        if (!(0, fs_1.existsSync)(scriptUrl)) {
            content = content.replace(/<%Name%>/g, fileName);
            await Editor.Message.request('asset-db', 'create-asset', scriptUrl, content);
        }
        // 闪烁提示新创建的脚本文件
        Editor.Message.send('assets', 'twinkle', scriptUrl);
        // 打开脚本
        Editor.Message.request('asset-db', 'open-asset', scriptUrl);
        resolve();
    });
}
exports.createScriptModule = createScriptModule;
/** 创建脚本 */
function createScriptBll(directoryPath, fileName, content, moduleName) {
    return new Promise(async (resolve, reject) => {
        let scriptUrl = path_1.default.join(directoryPath, fileName) + ".ts";
        // 创建脚本
        if (!(0, fs_1.existsSync)(scriptUrl)) {
            content = content.replace(/<%Name%>/g, fileName);
            content = content.replace(/<%ModuleName%>/g, moduleName);
            await Editor.Message.request('asset-db', 'create-asset', scriptUrl, content);
        }
        // 闪烁提示新创建的脚本文件
        Editor.Message.send('assets', 'twinkle', scriptUrl);
        // 打开脚本
        Editor.Message.request('asset-db', 'open-asset', scriptUrl);
        resolve();
    });
}
exports.createScriptBll = createScriptBll;
/** 创建业务层脚本 */
function createScript(directoryPath, fileName, content, isEcsComp = true) {
    return new Promise(async (resolve, reject) => {
        let scriptUrl = "";
        if (isEcsComp) {
            scriptUrl = path_1.default.join(directoryPath, fileName) + "Comp.ts";
        }
        else {
            scriptUrl = path_1.default.join(directoryPath, fileName) + ".ts";
        }
        // 创建脚本
        if (!(0, fs_1.existsSync)(scriptUrl)) {
            content = content.replace(/<%Name%>/g, fileName);
            await Editor.Message.request('asset-db', 'create-asset', scriptUrl, content);
        }
        // 闪烁提示新创建的脚本文件
        Editor.Message.send('assets', 'twinkle', scriptUrl);
        // 打开脚本
        Editor.Message.request('asset-db', 'open-asset', scriptUrl);
        resolve();
    });
}
exports.createScript = createScript;
// 监听文件创建事件
function onFileCreated(uuid) {
    console.log("我触发了吗");
    Editor.Message.request('asset-db', 'query-path', uuid).then((filePath) => {
        if (!filePath)
            return;
        if (!filePath.endsWith('.ts'))
            return; // 只处理 TypeScript 文件
        console.log("路径", filePath);
        const relativePath = getRelativePath(filePath);
        const content = (0, fs_1.readFileSync)(filePath, 'utf8');
        // 修改 import 语句，把 "@/xxx" 变成相对路径
        const newContent = content.replace(/from "@\/(.*?)"/g, (match, p1) => {
            return `from "${relativePath}/${p1}"`;
        });
        (0, fs_1.writeFileSync)(filePath, newContent, 'utf8');
        console.log(`✅ 已修改 import 语句: ${filePath}`);
    });
}
exports.onFileCreated = onFileCreated;
// 计算 assets 目录的相对路径
function getRelativePath(filePath) {
    const assetsPath = (0, path_1.join)(Editor.Project.path, 'assets'); // 获取 assets 目录
    const relativePath = (0, path_1.relative)((0, path_1.dirname)(filePath), assetsPath); // 计算相对路径
    return relativePath.replace(/\\/g, "/"); // 兼容 Windows
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jcmVhdGUtc2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXFEO0FBQ3JELDJCQUE2RDtBQUU3RCxXQUFXO0FBQ1gsU0FBZ0IsVUFBVSxDQUFDLGFBQXFCLEVBQUUsUUFBZ0IsRUFBRSxPQUFlLEVBQUUsWUFBcUIsSUFBSTtJQUMxRyxPQUFPLElBQUksT0FBTyxDQUFPLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDL0MsT0FBTztRQUNQLElBQUksU0FBUyxHQUFHLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDbEMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksU0FBUyxFQUFFO1lBQ1gsU0FBUyxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxHQUFHLGFBQWEsQ0FBQztTQUNsRTthQUNJO1lBQ0QsU0FBUyxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxHQUFHLFNBQVMsQ0FBQztTQUM5RDtRQUVELElBQUksQ0FBQyxJQUFBLGVBQVUsRUFBQyxTQUFTLENBQUMsRUFBRTtZQUN4QixPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDbEQsTUFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNoRjtRQUVELE9BQU87UUFDUCxJQUFJLFNBQVMsR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsR0FBRyxTQUFTLENBQUM7UUFDL0QsSUFBSSxDQUFDLElBQUEsZUFBVSxFQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3hC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QUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWE7QUFDMUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoLCB7IGpvaW4sIGRpcm5hbWUsIHJlbGF0aXZlIH0gZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IGV4aXN0c1N5bmMsIHJlYWRGaWxlU3luYywgd3JpdGVGaWxlU3luYyB9IGZyb20gJ2ZzJztcclxuXHJcbi8qKiDlhpnlhaXmlofku7YgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZpZXcoZGlyZWN0b3J5UGF0aDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIGlzRWNzQ29tcDogYm9vbGVhbiA9IHRydWUpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgLy8g5Yib5bu66ISa5pysXHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IGZpbGVOYW1lICsgXCJWaWV3XCI7XHJcbiAgICAgICAgbGV0IHNjcmlwdFVybCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKGlzRWNzQ29tcCkge1xyXG4gICAgICAgICAgICBzY3JpcHRVcmwgPSBwYXRoLmpvaW4oZGlyZWN0b3J5UGF0aCwgZmlsZU5hbWUpICsgXCJWaWV3Q29tcC50c1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2NyaXB0VXJsID0gcGF0aC5qb2luKGRpcmVjdG9yeVBhdGgsIGZpbGVOYW1lKSArIFwiVmlldy50c1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFleGlzdHNTeW5jKHNjcmlwdFVybCkpIHtcclxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvPCVOYW1lJT4vZywgY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgYXdhaXQgRWRpdG9yLk1lc3NhZ2UucmVxdWVzdCgnYXNzZXQtZGInLCAnY3JlYXRlLWFzc2V0Jywgc2NyaXB0VXJsLCBjb250ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWIm+W7uumihOWItlxyXG4gICAgICAgIGxldCBwcmVmYWJVcmwgPSBwYXRoLmpvaW4oZGlyZWN0b3J5UGF0aCwgZmlsZU5hbWUpICsgXCIucHJlZmFiXCI7XHJcbiAgICAgICAgaWYgKCFleGlzdHNTeW5jKHByZWZhYlVybCkpIHtcclxuICAgICAgICAgICAgaWYgKGlzRWNzQ29tcCkgY2xhc3NOYW1lID0gY2xhc3NOYW1lICsgXCJDb21wXCI7XHJcbiAgICAgICAgICAgIGF3YWl0IEVkaXRvci5NZXNzYWdlLnJlcXVlc3QoJ3NjZW5lJywgJ2V4ZWN1dGUtc2NlbmUtc2NyaXB0Jywge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJjZXJmX2JhbGVpbmVfZnJhbWV3b3JrXCIsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdjcmVhdGVQcmVmYWInLFxyXG4gICAgICAgICAgICAgICAgYXJnczogW2ZpbGVOYW1lLCBjbGFzc05hbWUsIHByZWZhYlVybF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDpl6rng4Hmj5DnpLrmlrDliJvlu7rnmoTohJrmnKzmlofku7ZcclxuICAgICAgICBFZGl0b3IuTWVzc2FnZS5zZW5kKCdhc3NldHMnLCAndHdpbmtsZScsIHNjcmlwdFVybCk7XHJcblxyXG4gICAgICAgIC8vIOaJk+W8gOiEmuacrFxyXG4gICAgICAgIEVkaXRvci5NZXNzYWdlLnJlcXVlc3QoJ2Fzc2V0LWRiJywgJ29wZW4tYXNzZXQnLCBzY3JpcHRVcmwpO1xyXG5cclxuICAgICAgICAvLyDmiZPlvIDpooTliLZcclxuICAgICAgICBFZGl0b3IuTWVzc2FnZS5yZXF1ZXN0KCdhc3NldC1kYicsICdvcGVuLWFzc2V0JywgcHJlZmFiVXJsKTtcclxuXHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2NyaXB0TW9kdWxlKGRpcmVjdG9yeVBhdGg6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZywgY29udGVudDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIC8vIOWIm+W7uuebruW9lVxyXG4gICAgICAgIGxldCBwYXRoTmFtZSA9IGZpbGVOYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgbGV0IHBhdGhNb2R1bGUgPSBwYXRoLmpvaW4oZGlyZWN0b3J5UGF0aCwgcGF0aE5hbWUpO1xyXG4gICAgICAgIGlmICghZXhpc3RzU3luYyhwYXRoTW9kdWxlKSkge1xyXG4gICAgICAgICAgICBhd2FpdCBFZGl0b3IuTWVzc2FnZS5yZXF1ZXN0KCdhc3NldC1kYicsICdjcmVhdGUtYXNzZXQnLCBwYXRoTW9kdWxlLCBudWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzdWJQYXRoVmlldyA9IHBhdGguam9pbihwYXRoTW9kdWxlLCBcInZpZXdcIik7XHJcbiAgICAgICAgaWYgKCFleGlzdHNTeW5jKHN1YlBhdGhWaWV3KSkge1xyXG4gICAgICAgICAgICBhd2FpdCBFZGl0b3IuTWVzc2FnZS5yZXF1ZXN0KCdhc3NldC1kYicsICdjcmVhdGUtYXNzZXQnLCBzdWJQYXRoVmlldywgbnVsbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3ViUGF0aEJsbCA9IHBhdGguam9pbihwYXRoTW9kdWxlLCBcImJsbFwiKTtcclxuICAgICAgICBpZiAoIWV4aXN0c1N5bmMoc3ViUGF0aEJsbCkpIHtcclxuICAgICAgICAgICAgYXdhaXQgRWRpdG9yLk1lc3NhZ2UucmVxdWVzdCgnYXNzZXQtZGInLCAnY3JlYXRlLWFzc2V0Jywgc3ViUGF0aEJsbCwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3ViUGF0aE1vZGVsID0gcGF0aC5qb2luKHBhdGhNb2R1bGUsIFwibW9kZWxcIik7XHJcbiAgICAgICAgaWYgKCFleGlzdHNTeW5jKHN1YlBhdGhNb2RlbCkpIHtcclxuICAgICAgICAgICAgYXdhaXQgRWRpdG9yLk1lc3NhZ2UucmVxdWVzdCgnYXNzZXQtZGInLCAnY3JlYXRlLWFzc2V0Jywgc3ViUGF0aE1vZGVsLCBudWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWIm+W7uuiEmuacrFxyXG4gICAgICAgIGxldCBzY3JpcHRVcmwgPSBwYXRoLmpvaW4ocGF0aE1vZHVsZSwgZmlsZU5hbWUpICsgXCIudHNcIjtcclxuICAgICAgICBpZiAoIWV4aXN0c1N5bmMoc2NyaXB0VXJsKSkge1xyXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC88JU5hbWUlPi9nLCBmaWxlTmFtZSk7XHJcbiAgICAgICAgICAgIGF3YWl0IEVkaXRvci5NZXNzYWdlLnJlcXVlc3QoJ2Fzc2V0LWRiJywgJ2NyZWF0ZS1hc3NldCcsIHNjcmlwdFVybCwgY29udGVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDpl6rng4Hmj5DnpLrmlrDliJvlu7rnmoTohJrmnKzmlofku7ZcclxuICAgICAgICBFZGl0b3IuTWVzc2FnZS5zZW5kKCdhc3NldHMnLCAndHdpbmtsZScsIHNjcmlwdFVybCk7XHJcblxyXG4gICAgICAgIC8vIOaJk+W8gOiEmuacrFxyXG4gICAgICAgIEVkaXRvci5NZXNzYWdlLnJlcXVlc3QoJ2Fzc2V0LWRiJywgJ29wZW4tYXNzZXQnLCBzY3JpcHRVcmwpO1xyXG5cclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqIOWIm+W7uuiEmuacrCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2NyaXB0QmxsKGRpcmVjdG9yeVBhdGg6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBtb2R1bGVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgbGV0IHNjcmlwdFVybCA9IHBhdGguam9pbihkaXJlY3RvcnlQYXRoLCBmaWxlTmFtZSkgKyBcIi50c1wiO1xyXG5cclxuICAgICAgICAvLyDliJvlu7rohJrmnKxcclxuICAgICAgICBpZiAoIWV4aXN0c1N5bmMoc2NyaXB0VXJsKSkge1xyXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC88JU5hbWUlPi9nLCBmaWxlTmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoLzwlTW9kdWxlTmFtZSU+L2csIG1vZHVsZU5hbWUpO1xyXG4gICAgICAgICAgICBhd2FpdCBFZGl0b3IuTWVzc2FnZS5yZXF1ZXN0KCdhc3NldC1kYicsICdjcmVhdGUtYXNzZXQnLCBzY3JpcHRVcmwsIGNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g6Zeq54OB5o+Q56S65paw5Yib5bu655qE6ISa5pys5paH5Lu2XHJcbiAgICAgICAgRWRpdG9yLk1lc3NhZ2Uuc2VuZCgnYXNzZXRzJywgJ3R3aW5rbGUnLCBzY3JpcHRVcmwpO1xyXG5cclxuICAgICAgICAvLyDmiZPlvIDohJrmnKxcclxuICAgICAgICBFZGl0b3IuTWVzc2FnZS5yZXF1ZXN0KCdhc3NldC1kYicsICdvcGVuLWFzc2V0Jywgc2NyaXB0VXJsKTtcclxuXHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKiDliJvlu7rkuJrliqHlsYLohJrmnKwgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNjcmlwdChkaXJlY3RvcnlQYXRoOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgaXNFY3NDb21wOiBib29sZWFuID0gdHJ1ZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBsZXQgc2NyaXB0VXJsID0gXCJcIjtcclxuICAgICAgICBpZiAoaXNFY3NDb21wKSB7XHJcbiAgICAgICAgICAgIHNjcmlwdFVybCA9IHBhdGguam9pbihkaXJlY3RvcnlQYXRoLCBmaWxlTmFtZSkgKyBcIkNvbXAudHNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNjcmlwdFVybCA9IHBhdGguam9pbihkaXJlY3RvcnlQYXRoLCBmaWxlTmFtZSkgKyBcIi50c1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Yib5bu66ISa5pysXHJcbiAgICAgICAgaWYgKCFleGlzdHNTeW5jKHNjcmlwdFVybCkpIHtcclxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvPCVOYW1lJT4vZywgZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICBhd2FpdCBFZGl0b3IuTWVzc2FnZS5yZXF1ZXN0KCdhc3NldC1kYicsICdjcmVhdGUtYXNzZXQnLCBzY3JpcHRVcmwsIGNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g6Zeq54OB5o+Q56S65paw5Yib5bu655qE6ISa5pys5paH5Lu2XHJcbiAgICAgICAgRWRpdG9yLk1lc3NhZ2Uuc2VuZCgnYXNzZXRzJywgJ3R3aW5rbGUnLCBzY3JpcHRVcmwpO1xyXG5cclxuICAgICAgICAvLyDmiZPlvIDohJrmnKxcclxuICAgICAgICBFZGl0b3IuTWVzc2FnZS5yZXF1ZXN0KCdhc3NldC1kYicsICdvcGVuLWFzc2V0Jywgc2NyaXB0VXJsKTtcclxuXHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgfSk7XHJcbn1cclxuIC8vIOebkeWQrOaWh+S7tuWIm+W7uuS6i+S7tlxyXG5leHBvcnQgZnVuY3Rpb24gb25GaWxlQ3JlYXRlZCh1dWlkOiBzdHJpbmcpIHtcclxuICAgIGNvbnNvbGUubG9nKFwi5oiR6Kem5Y+R5LqG5ZCXXCIpO1xyXG4gICAgRWRpdG9yLk1lc3NhZ2UucmVxdWVzdCgnYXNzZXQtZGInLCAncXVlcnktcGF0aCcsIHV1aWQpLnRoZW4oKGZpbGVQYXRoOiBzdHJpbmd8bnVsbCkgPT4ge1xyXG4gICAgICAgIGlmKCFmaWxlUGF0aCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghZmlsZVBhdGguZW5kc1dpdGgoJy50cycpKSByZXR1cm47IC8vIOWPquWkhOeQhiBUeXBlU2NyaXB0IOaWh+S7tlxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6Lev5b6EXCIsZmlsZVBhdGgpO1xyXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IGdldFJlbGF0aXZlUGF0aChmaWxlUGF0aCk7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IHJlYWRGaWxlU3luYyhmaWxlUGF0aCwgJ3V0ZjgnKTtcclxuXHJcbiAgICAgICAgLy8g5L+u5pS5IGltcG9ydCDor63lj6XvvIzmioogXCJAL3h4eFwiIOWPmOaIkOebuOWvuei3r+W+hFxyXG4gICAgICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoL2Zyb20gXCJAXFwvKC4qPylcIi9nLCAobWF0Y2gsIHAxKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBgZnJvbSBcIiR7cmVsYXRpdmVQYXRofS8ke3AxfVwiYDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgbmV3Q29udGVudCwgJ3V0ZjgnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhg4pyFIOW3suS/ruaUuSBpbXBvcnQg6K+t5Y+lOiAke2ZpbGVQYXRofWApO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIOiuoeeulyBhc3NldHMg55uu5b2V55qE55u45a+56Lev5b6EXHJcbmZ1bmN0aW9uIGdldFJlbGF0aXZlUGF0aChmaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGFzc2V0c1BhdGggPSBqb2luKEVkaXRvci5Qcm9qZWN0LnBhdGgsICdhc3NldHMnKTsgLy8g6I635Y+WIGFzc2V0cyDnm67lvZVcclxuICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IHJlbGF0aXZlKGRpcm5hbWUoZmlsZVBhdGgpLCBhc3NldHNQYXRoKTsgLy8g6K6h566X55u45a+56Lev5b6EXHJcbiAgICByZXR1cm4gcmVsYXRpdmVQYXRoLnJlcGxhY2UoL1xcXFwvZywgXCIvXCIpOyAvLyDlhbzlrrkgV2luZG93c1xyXG59Il19