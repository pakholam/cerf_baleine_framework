"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateModule = void 0;
exports.TemplateModule = `import { ecs } from "@/script/libs/ecs/ECS";

/** <%Name%> 模块 */
@ecs.register('<%Name%>')
export class <%Name%> extends ecs.Entity {
    /** ---------- 数据层 ---------- */
    // <%Name%>Model!: <%Name%>ModelComp;

    /** ---------- 业务层 ---------- */
    // <%Name%>Bll!: <%Name%>BllComp;

    /** ---------- 视图层 ---------- */
    // <%Name%>View!: <%Name%>ViewComp;

    /** 初始添加的数据层组件 */
    protected init() {
        // this.addComponents<ecs.Comp>();
    }
}`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc291cmNlL3RlbXBsYXRlL01vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLGNBQWMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0I1QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFRlbXBsYXRlTW9kdWxlID0gYGltcG9ydCB7IGVjcyB9IGZyb20gXCJAL3NjcmlwdC9saWJzL2Vjcy9FQ1NcIjtcclxuXHJcbi8qKiA8JU5hbWUlPiDmqKHlnZcgKi9cclxuQGVjcy5yZWdpc3RlcignPCVOYW1lJT4nKVxyXG5leHBvcnQgY2xhc3MgPCVOYW1lJT4gZXh0ZW5kcyBlY3MuRW50aXR5IHtcclxuICAgIC8qKiAtLS0tLS0tLS0tIOaVsOaNruWxgiAtLS0tLS0tLS0tICovXHJcbiAgICAvLyA8JU5hbWUlPk1vZGVsITogPCVOYW1lJT5Nb2RlbENvbXA7XHJcblxyXG4gICAgLyoqIC0tLS0tLS0tLS0g5Lia5Yqh5bGCIC0tLS0tLS0tLS0gKi9cclxuICAgIC8vIDwlTmFtZSU+QmxsITogPCVOYW1lJT5CbGxDb21wO1xyXG5cclxuICAgIC8qKiAtLS0tLS0tLS0tIOinhuWbvuWxgiAtLS0tLS0tLS0tICovXHJcbiAgICAvLyA8JU5hbWUlPlZpZXchOiA8JU5hbWUlPlZpZXdDb21wO1xyXG5cclxuICAgIC8qKiDliJ3lp4vmt7vliqDnmoTmlbDmja7lsYLnu4Tku7YgKi9cclxuICAgIHByb3RlY3RlZCBpbml0KCkge1xyXG4gICAgICAgIC8vIHRoaXMuYWRkQ29tcG9uZW50czxlY3MuQ29tcD4oKTtcclxuICAgIH1cclxufWA7Il19