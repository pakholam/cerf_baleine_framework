"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateViewMvvm = void 0;
exports.TemplateViewMvvm = `import { _decorator } from "cc";
import { ecs } from "db://oops-framework/libs/ecs/ECS";
import { CCVMParentComp } from "db://oops-framework/module/common/CCVMParentComp";

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kdWxlVmlld1ZNLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc291cmNlL3RlbXBsYXRlL01vZHVsZVZpZXdWTS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLGdCQUFnQixHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBc0I5QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFRlbXBsYXRlVmlld012dm0gPSBgaW1wb3J0IHsgX2RlY29yYXRvciB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBlY3MgfSBmcm9tIFwiZGI6Ly9vb3BzLWZyYW1ld29yay9saWJzL2Vjcy9FQ1NcIjtcclxuaW1wb3J0IHsgQ0NWTVBhcmVudENvbXAgfSBmcm9tIFwiZGI6Ly9vb3BzLWZyYW1ld29yay9tb2R1bGUvY29tbW9uL0NDVk1QYXJlbnRDb21wXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuLyoqIOinhuWbvuWxguWvueixoSAtIOaUr+aMgSBNVlZNIOahhuaetueahOaVsOaNrue7keWumiAqL1xyXG5AY2NjbGFzcygnPCVOYW1lJT5Db21wJylcclxuQGVjcy5yZWdpc3RlcignPCVOYW1lJT4nLCBmYWxzZSlcclxuZXhwb3J0IGNsYXNzIDwlTmFtZSU+Q29tcCBleHRlbmRzIENDVk1QYXJlbnRDb21wIHtcclxuICAgIC8qKiDohJrmnKzmjqfliLbnmoTnlYzpnaIgTVZWTSDmoYbmnrbnu5HlrprmlbDmja4gKi9cclxuICAgIGRhdGE6IGFueSA9IHt9O1xyXG5cclxuICAgIC8qKiDop4blm77lsYLpgLvovpHku6PnoIHliIbnprvmvJTnpLogKi9cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIGNvbnN0IGVudGl0eSA9IHRoaXMuZW50IGFzIGVjcy5FbnRpdHk7ICAgICAgICAgLy8gZWNzLkVudGl0eSDlj6/ovazkuLrlvZPliY3mqKHlnZfnmoTlhbfkvZPlrp7kvZPlr7nosaFcclxuICAgIH1cclxuXHJcbiAgICAvKiog6KeG5Zu+5a+56LGh6YCa6L+HIGVjcy5FbnRpdHkucmVtb3ZlKDwlTmFtZSU+Q29tcCkg5Yig6Zmk57uE5Lu25piv6Kem5Y+R57uE5Lu25aSE55CG6Ieq5a6a5LmJ6YeK5pS+6YC76L6RICovXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG59YCJdfQ==