import path, { join, dirname, relative } from "path";
import { existsSync, readFileSync, writeFileSync } from "fs";

/** 写入文件 */
export function createView(directoryPath: string, fileName: string, content: string, isEcsComp: boolean = true): Promise<void> {
  return new Promise<void>(async (resolve, reject) => {
    // 创建脚本
    let className = fileName + "View";
    let scriptUrl = "";
    if (isEcsComp) {
      scriptUrl = path.join(directoryPath, fileName) + "ViewComp.ts";
    } else {
      scriptUrl = path.join(directoryPath, fileName) + "View.ts";
    }

    if (!existsSync(scriptUrl)) {
      content = content.replace(/<%Name%>/g, className);
      await Editor.Message.request("asset-db", "create-asset", scriptUrl, content);
    }

    // 创建预制
    let prefabUrl = path.join(directoryPath, fileName) + ".prefab";
    if (!existsSync(prefabUrl)) {
      if (isEcsComp) className = className + "Comp";
      await Editor.Message.request("scene", "execute-scene-script", {
        name: "cerf_baleine_framework",
        method: "createPrefab",
        args: [fileName, className, prefabUrl],
      });
    }

    // 闪烁提示新创建的脚本文件
    Editor.Message.send("assets", "twinkle", scriptUrl);

    // 打开脚本
    Editor.Message.request("asset-db", "open-asset", scriptUrl);

    // 打开预制
    Editor.Message.request("asset-db", "open-asset", prefabUrl);

    resolve();
  });
}

export function createScriptModule(directoryPath: string, fileName: string, content: string): Promise<void> {
  return new Promise<void>(async (resolve, reject) => {
    // 创建目录
    let pathName = fileName.toLowerCase();
    let pathModule = path.join(directoryPath, pathName);
    if (!existsSync(pathModule)) {
      await Editor.Message.request("asset-db", "create-asset", pathModule, null);
    }

    let subPathView = path.join(pathModule, "view");
    if (!existsSync(subPathView)) {
      await Editor.Message.request("asset-db", "create-asset", subPathView, null);
    }

    let subPathBll = path.join(pathModule, "bll");
    if (!existsSync(subPathBll)) {
      await Editor.Message.request("asset-db", "create-asset", subPathBll, null);
    }

    let subPathModel = path.join(pathModule, "model");
    if (!existsSync(subPathModel)) {
      await Editor.Message.request("asset-db", "create-asset", subPathModel, null);
    }

    // 创建脚本
    let scriptUrl = path.join(pathModule, fileName) + ".ts";
    if (!existsSync(scriptUrl)) {
      content = content.replace(/<%Name%>/g, fileName);
      await Editor.Message.request("asset-db", "create-asset", scriptUrl, content);
    }

    // 闪烁提示新创建的脚本文件
    Editor.Message.send("assets", "twinkle", scriptUrl);

    // 打开脚本
    Editor.Message.request("asset-db", "open-asset", scriptUrl);

    resolve();
  });
}

/** 创建脚本 */
export function createScriptBll(directoryPath: string, fileName: string, content: string, moduleName: string): Promise<void> {
  return new Promise<void>(async (resolve, reject) => {
    let scriptUrl = path.join(directoryPath, fileName) + ".ts";

    // 创建脚本
    if (!existsSync(scriptUrl)) {
      content = content.replace(/<%Name%>/g, fileName);
      content = content.replace(/<%ModuleName%>/g, moduleName);
      await Editor.Message.request("asset-db", "create-asset", scriptUrl, content);
    }

    // 闪烁提示新创建的脚本文件
    Editor.Message.send("assets", "twinkle", scriptUrl);

    // 打开脚本
    Editor.Message.request("asset-db", "open-asset", scriptUrl);

    resolve();
  });
}

/** 创建业务层脚本 */
export function createScript(directoryPath: string, fileName: string, content: string, isEcsComp: boolean = true): Promise<void> {
  return new Promise<void>(async (resolve, reject) => {
    let scriptUrl = "";
    if (isEcsComp) {
      scriptUrl = path.join(directoryPath, fileName) + "Comp.ts";
    } else {
      scriptUrl = path.join(directoryPath, fileName) + ".ts";
    }

    // 创建脚本
    if (!existsSync(scriptUrl)) {
      content = content.replace(/<%Name%>/g, fileName);
      await Editor.Message.request("asset-db", "create-asset", scriptUrl, content);
    }

    // 闪烁提示新创建的脚本文件
    Editor.Message.send("assets", "twinkle", scriptUrl);

    // 打开脚本
    Editor.Message.request("asset-db", "open-asset", scriptUrl);

    resolve();
  });
}
// 监听文件创建事件
export function onFileCreated(uuid: string) {
  Editor.Message.request("asset-db", "query-path", uuid).then((filePath: string | null) => {
    if (!filePath || !filePath.endsWith(".ts")) return; // 只处理 TypeScript 文件

    const relativePath = getRelativePath(filePath);
    const content = readFileSync(filePath, "utf8");

    // 修改 import 语句，把 "@/xxx" 变成相对路径
    const newContent = content.replace(/from "@\/(.*?)"/g, (match, p1) => {
      return `from "${relativePath}/${p1}"`;
    });

    writeFileSync(filePath, newContent, "utf8");
    console.log(`✅ 已修改 import 语句: ${filePath}`);
  });
}

// 计算 assets 目录的相对路径
function getRelativePath(filePath: string): string {
  const assetsPath = join(Editor.Project.path, "assets"); // 获取 assets 目录
  const relativePath = relative(dirname(filePath), assetsPath); // 计算相对路径
  return relativePath.replace(/\\/g, "/"); // 兼容 Windows
}
