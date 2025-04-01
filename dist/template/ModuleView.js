"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateView = void 0;
exports.TemplateView = `import { _decorator } from "cc";
import { ecs } from "@/script/libs/ecs/ECS";
import { CCComp } from "@/script/module/common/CCComp";

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kdWxlVmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS90ZW1wbGF0ZS9Nb2R1bGVWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsWUFBWSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUIxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFRlbXBsYXRlVmlldyA9IGBpbXBvcnQgeyBfZGVjb3JhdG9yIH0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7IGVjcyB9IGZyb20gXCJAL3NjcmlwdC9saWJzL2Vjcy9FQ1NcIjtcclxuaW1wb3J0IHsgQ0NDb21wIH0gZnJvbSBcIkAvc2NyaXB0L21vZHVsZS9jb21tb24vQ0NDb21wXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuLyoqIOinhuWbvuWxguWvueixoSAqL1xyXG5AY2NjbGFzcygnPCVOYW1lJT5Db21wJylcclxuQGVjcy5yZWdpc3RlcignPCVOYW1lJT4nLCBmYWxzZSlcclxuZXhwb3J0IGNsYXNzIDwlTmFtZSU+Q29tcCBleHRlbmRzIENDQ29tcCB7XHJcbiAgICAvKiog6KeG5Zu+5bGC6YC76L6R5Luj56CB5YiG56a75ryU56S6ICovXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBjb25zdCBlbnRpdHkgPSB0aGlzLmVudCBhcyBlY3MuRW50aXR5OyAgICAgICAgIC8vIGVjcy5FbnRpdHkg5Y+v6L2s5Li65b2T5YmN5qih5Z2X55qE5YW35L2T5a6e5L2T5a+56LGhXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOinhuWbvuWvueixoemAmui/hyBlY3MuRW50aXR5LnJlbW92ZSg8JU5hbWUlPkNvbXApIOWIoOmZpOe7hOS7tuaYr+inpuWPkee7hOS7tuWkhOeQhuiHquWumuS5iemHiuaUvumAu+i+kSAqL1xyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxufWA7Il19