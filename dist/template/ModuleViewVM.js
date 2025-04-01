"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateViewMvvm = void 0;
exports.TemplateViewMvvm = `import { _decorator } from "cc";
import { ecs } from "@/script/libs/ecs/ECS";
import { CCVMParentComp } from "@/script/module/common/CCVMParentComp";

const { ccclass, property } = _decorator;

/** 视图层对象 - 支持 MVVM 框架的数据绑定 */
@ccclass('<%Name%>Comp')
@ecs.register('<%Name%>', false)
export class <%Name%>Comp extends CCVMParentComp {
    /** 脚本控制的界面 MVVM 框架绑定数据 */
    data: any = {};

    /** 视图层逻辑代码分离演示 */
    start() {
        // const entity = this.ent as ecs.Entity;         // ecs.Entity 可转为当前模块的具体实体对象
    }

    /** 视图对象通过 ecs.Entity.remove(<%Name%>Comp) 删除组件是触发组件处理自定义释放逻辑 */
    reset() {
        this.node.destroy();
    }
}`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kdWxlVmlld1ZNLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc291cmNlL3RlbXBsYXRlL01vZHVsZVZpZXdWTS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLGdCQUFnQixHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBc0I5QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFRlbXBsYXRlVmlld012dm0gPSBgaW1wb3J0IHsgX2RlY29yYXRvciB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBlY3MgfSBmcm9tIFwiQC9zY3JpcHQvbGlicy9lY3MvRUNTXCI7XHJcbmltcG9ydCB7IENDVk1QYXJlbnRDb21wIH0gZnJvbSBcIkAvc2NyaXB0L21vZHVsZS9jb21tb24vQ0NWTVBhcmVudENvbXBcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG4vKiog6KeG5Zu+5bGC5a+56LGhIC0g5pSv5oyBIE1WVk0g5qGG5p6255qE5pWw5o2u57uR5a6aICovXHJcbkBjY2NsYXNzKCc8JU5hbWUlPkNvbXAnKVxyXG5AZWNzLnJlZ2lzdGVyKCc8JU5hbWUlPicsIGZhbHNlKVxyXG5leHBvcnQgY2xhc3MgPCVOYW1lJT5Db21wIGV4dGVuZHMgQ0NWTVBhcmVudENvbXAge1xyXG4gICAgLyoqIOiEmuacrOaOp+WItueahOeVjOmdoiBNVlZNIOahhuaetue7keWumuaVsOaNriAqL1xyXG4gICAgZGF0YTogYW55ID0ge307XHJcblxyXG4gICAgLyoqIOinhuWbvuWxgumAu+i+keS7o+eggeWIhuemu+a8lOekuiAqL1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gY29uc3QgZW50aXR5ID0gdGhpcy5lbnQgYXMgZWNzLkVudGl0eTsgICAgICAgICAvLyBlY3MuRW50aXR5IOWPr+i9rOS4uuW9k+WJjeaooeWdl+eahOWFt+S9k+WunuS9k+WvueixoVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDop4blm77lr7nosaHpgJrov4cgZWNzLkVudGl0eS5yZW1vdmUoPCVOYW1lJT5Db21wKSDliKDpmaTnu4Tku7bmmK/op6blj5Hnu4Tku7blpITnkIboh6rlrprkuYnph4rmlL7pgLvovpEgKi9cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbn1gIl19