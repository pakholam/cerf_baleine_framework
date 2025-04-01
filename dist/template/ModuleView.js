"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateView = void 0;
exports.TemplateView = `import { _decorator } from "cc";
import { ecs } from "db://oops-framework/libs/ecs/ECS";
import { CCComp } from "db://oops-framework/module/common/CCComp";

const { ccclass, property } = _decorator;

/** 视图层对象 */
@ccclass('<%Name%>Comp')
@ecs.register('<%Name%>', false)
export class <%Name%>Comp extends CCComp {
    /** 视图层逻辑代码分离演示 */
    start() {
        // const entity = this.ent as ecs.Entity;         // ecs.Entity 可转为当前模块的具体实体对象
    }

    /** 视图对象通过 ecs.Entity.remove(<%Name%>Comp) 删除组件是触发组件处理自定义释放逻辑 */
    reset() {
        this.node.destroy();
    }
}`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kdWxlVmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS90ZW1wbGF0ZS9Nb2R1bGVWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsWUFBWSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUIxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFRlbXBsYXRlVmlldyA9IGBpbXBvcnQgeyBfZGVjb3JhdG9yIH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IGVjcyB9IGZyb20gXCJkYjovL29vcHMtZnJhbWV3b3JrL2xpYnMvZWNzL0VDU1wiO1xyXG5pbXBvcnQgeyBDQ0NvbXAgfSBmcm9tIFwiZGI6Ly9vb3BzLWZyYW1ld29yay9tb2R1bGUvY29tbW9uL0NDQ29tcFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbi8qKiDop4blm77lsYLlr7nosaEgKi9cclxuQGNjY2xhc3MoJzwlTmFtZSU+Q29tcCcpXHJcbkBlY3MucmVnaXN0ZXIoJzwlTmFtZSU+JywgZmFsc2UpXHJcbmV4cG9ydCBjbGFzcyA8JU5hbWUlPkNvbXAgZXh0ZW5kcyBDQ0NvbXAge1xyXG4gICAgLyoqIOinhuWbvuWxgumAu+i+keS7o+eggeWIhuemu+a8lOekuiAqL1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gY29uc3QgZW50aXR5ID0gdGhpcy5lbnQgYXMgZWNzLkVudGl0eTsgICAgICAgICAvLyBlY3MuRW50aXR5IOWPr+i9rOS4uuW9k+WJjeaooeWdl+eahOWFt+S9k+WunuS9k+WvueixoVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDop4blm77lr7nosaHpgJrov4cgZWNzLkVudGl0eS5yZW1vdmUoPCVOYW1lJT5Db21wKSDliKDpmaTnu4Tku7bmmK/op6blj5Hnu4Tku7blpITnkIboh6rlrprkuYnph4rmlL7pgLvovpEgKi9cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbn1gOyJdfQ==