"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateModel = void 0;
exports.TemplateModel = `import { ecs } from "db://oops-framework/libs/ecs/ECS";

/** 数据层对象 */
@ecs.register('<%Name%>')
export class <%Name%>Comp extends ecs.Comp {
    id: number = -1;

    /** 数据层组件移除时，重置所有数据为默认值 */
    reset() {
        this.id = -1;
    }
}`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kdWxlTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zb3VyY2UvdGVtcGxhdGUvTW9kdWxlTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxhQUFhLEdBQUc7Ozs7Ozs7Ozs7O0VBVzNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVGVtcGxhdGVNb2RlbCA9IGBpbXBvcnQgeyBlY3MgfSBmcm9tIFwiZGI6Ly9vb3BzLWZyYW1ld29yay9saWJzL2Vjcy9FQ1NcIjtcclxuXHJcbi8qKiDmlbDmja7lsYLlr7nosaEgKi9cclxuQGVjcy5yZWdpc3RlcignPCVOYW1lJT4nKVxyXG5leHBvcnQgY2xhc3MgPCVOYW1lJT5Db21wIGV4dGVuZHMgZWNzLkNvbXAge1xyXG4gICAgaWQ6IG51bWJlciA9IC0xO1xyXG5cclxuICAgIC8qKiDmlbDmja7lsYLnu4Tku7bnp7vpmaTml7bvvIzph43nva7miYDmnInmlbDmja7kuLrpu5jorqTlgLwgKi9cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSAtMTtcclxuICAgIH1cclxufWA7Il19