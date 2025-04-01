"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.methods = exports.unload = exports.load = void 0;
function load() { }
exports.load = load;
function unload() { }
exports.unload = unload;
// 在其他扩展脚本中，我们可以使用如下代码调用 rotateCamera 函数
// const options: ExecuteSceneScriptMethodOptions = {
//     name: scene.ts 所在的扩展包名, 如: App,
//     method: scene.ts 中定义的方法, 如: createPrefab,
//     args: 参数，可选, 只传递json
// };
// const result = await Editor.Message.request('scene', 'execute-scene-script', options);
exports.methods = {
    /** 创建视图层制 */
    async createPrefab(fileName, className, prefabUrl) {
        const { Node, js, Layers, UITransform } = require('cc');
        const node = new Node(fileName);
        node.layer = Layers.Enum.UI_2D;
        node.addComponent(UITransform);
        while (true) {
            const result = js.getClassByName(className);
            if (result)
                break;
            await new Promise((next) => {
                setTimeout(next, 100);
            });
        }
        const com = node.addComponent(className);
        com.resetInEditor && com.resetInEditor();
        const info = cce.Prefab.generatePrefabDataFromNode(node);
        node.destroy();
        return Editor.Message.request('asset-db', 'create-asset', prefabUrl, info.prefabData || info);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NlbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2Uvc2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsU0FBZ0IsSUFBSSxLQUFLLENBQUM7QUFBMUIsb0JBQTBCO0FBRTFCLFNBQWdCLE1BQU0sS0FBSyxDQUFDO0FBQTVCLHdCQUE0QjtBQUU1Qix3Q0FBd0M7QUFDeEMscURBQXFEO0FBQ3JELHNDQUFzQztBQUN0QyxnREFBZ0Q7QUFDaEQsMkJBQTJCO0FBQzNCLEtBQUs7QUFDTCx5RkFBeUY7QUFDNUUsUUFBQSxPQUFPLEdBQUc7SUFDbkIsYUFBYTtJQUNiLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBZ0IsRUFBRSxTQUFpQixFQUFFLFNBQWlCO1FBQ3JFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRS9CLE9BQU8sSUFBSSxFQUFFO1lBQ1QsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM1QyxJQUFJLE1BQU07Z0JBQUUsTUFBTTtZQUVsQixNQUFNLElBQUksT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3ZCLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekMsR0FBRyxDQUFDLGFBQWEsSUFBSSxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFekMsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQVEsQ0FBQztRQUNoRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFZixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLENBQUM7SUFDbEcsQ0FBQztDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbG9hZCgpIHsgfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVubG9hZCgpIHsgfVxyXG5cclxuLy8g5Zyo5YW25LuW5omp5bGV6ISa5pys5Lit77yM5oiR5Lus5Y+v5Lul5L2/55So5aaC5LiL5Luj56CB6LCD55SoIHJvdGF0ZUNhbWVyYSDlh73mlbBcclxuLy8gY29uc3Qgb3B0aW9uczogRXhlY3V0ZVNjZW5lU2NyaXB0TWV0aG9kT3B0aW9ucyA9IHtcclxuLy8gICAgIG5hbWU6IHNjZW5lLnRzIOaJgOWcqOeahOaJqeWxleWMheWQjSwg5aaCOiBBcHAsXHJcbi8vICAgICBtZXRob2Q6IHNjZW5lLnRzIOS4reWumuS5ieeahOaWueazlSwg5aaCOiBjcmVhdGVQcmVmYWIsXHJcbi8vICAgICBhcmdzOiDlj4LmlbDvvIzlj6/pgIksIOWPquS8oOmAkmpzb25cclxuLy8gfTtcclxuLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgRWRpdG9yLk1lc3NhZ2UucmVxdWVzdCgnc2NlbmUnLCAnZXhlY3V0ZS1zY2VuZS1zY3JpcHQnLCBvcHRpb25zKTtcclxuZXhwb3J0IGNvbnN0IG1ldGhvZHMgPSB7XHJcbiAgICAvKiog5Yib5bu66KeG5Zu+5bGC5Yi2ICovXHJcbiAgICBhc3luYyBjcmVhdGVQcmVmYWIoZmlsZU5hbWU6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcsIHByZWZhYlVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgeyBOb2RlLCBqcywgTGF5ZXJzLCBVSVRyYW5zZm9ybSB9ID0gcmVxdWlyZSgnY2MnKTtcclxuICAgICAgICBjb25zdCBub2RlID0gbmV3IE5vZGUoZmlsZU5hbWUpO1xyXG4gICAgICAgIG5vZGUubGF5ZXIgPSBMYXllcnMuRW51bS5VSV8yRDtcclxuICAgICAgICBub2RlLmFkZENvbXBvbmVudChVSVRyYW5zZm9ybSk7XHJcblxyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGpzLmdldENsYXNzQnlOYW1lKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKG5leHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQobmV4dCwgMTAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb20gPSBub2RlLmFkZENvbXBvbmVudChjbGFzc05hbWUpO1xyXG4gICAgICAgIGNvbS5yZXNldEluRWRpdG9yICYmIGNvbS5yZXNldEluRWRpdG9yKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGluZm8gPSBjY2UuUHJlZmFiLmdlbmVyYXRlUHJlZmFiRGF0YUZyb21Ob2RlKG5vZGUpIGFzIGFueTtcclxuICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIEVkaXRvci5NZXNzYWdlLnJlcXVlc3QoJ2Fzc2V0LWRiJywgJ2NyZWF0ZS1hc3NldCcsIHByZWZhYlVybCwgaW5mby5wcmVmYWJEYXRhIHx8IGluZm8pO1xyXG4gICAgfVxyXG59OyJdfQ==