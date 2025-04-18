export const TemplateModule = `import { ecs } from "@/script/libs/ecs/ECS";

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
