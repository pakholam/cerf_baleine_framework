"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateModule = void 0;
exports.TemplateModule = `import { ecs } from "db://oops-framework/libs/ecs/ECS";

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc291cmNlL3RlbXBsYXRlL01vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLGNBQWMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0I1QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFRlbXBsYXRlTW9kdWxlID0gYGltcG9ydCB7IGVjcyB9IGZyb20gXCJkYjovL29vcHMtZnJhbWV3b3JrL2xpYnMvZWNzL0VDU1wiO1xyXG5cclxuLyoqIDwlTmFtZSU+IOaooeWdlyAqL1xyXG5AZWNzLnJlZ2lzdGVyKCc8JU5hbWUlPicpXHJcbmV4cG9ydCBjbGFzcyA8JU5hbWUlPiBleHRlbmRzIGVjcy5FbnRpdHkge1xyXG4gICAgLyoqIC0tLS0tLS0tLS0g5pWw5o2u5bGCIC0tLS0tLS0tLS0gKi9cclxuICAgIC8vIDwlTmFtZSU+TW9kZWwhOiA8JU5hbWUlPk1vZGVsQ29tcDtcclxuXHJcbiAgICAvKiogLS0tLS0tLS0tLSDkuJrliqHlsYIgLS0tLS0tLS0tLSAqL1xyXG4gICAgLy8gPCVOYW1lJT5CbGwhOiA8JU5hbWUlPkJsbENvbXA7XHJcblxyXG4gICAgLyoqIC0tLS0tLS0tLS0g6KeG5Zu+5bGCIC0tLS0tLS0tLS0gKi9cclxuICAgIC8vIDwlTmFtZSU+VmlldyE6IDwlTmFtZSU+Vmlld0NvbXA7XHJcblxyXG4gICAgLyoqIOWIneWni+a3u+WKoOeahOaVsOaNruWxgue7hOS7tiAqL1xyXG4gICAgcHJvdGVjdGVkIGluaXQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5hZGRDb21wb25lbnRzPGVjcy5Db21wPigpO1xyXG4gICAgfVxyXG59YDsiXX0=