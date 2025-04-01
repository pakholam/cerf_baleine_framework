"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateModel = void 0;
exports.TemplateModel = `import { ecs } from "@/script/libs/ecs/ECS";

/** 数据层对象 */
@ecs.register('<%Name%>')
export class <%Name%>Comp extends ecs.Comp {
    id: number = -1;

    /** 数据层组件移除时，重置所有数据为默认值 */
    reset() {
        this.id = -1;
    }
}`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kdWxlTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zb3VyY2UvdGVtcGxhdGUvTW9kdWxlTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxhQUFhLEdBQUc7Ozs7Ozs7Ozs7O0VBVzNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVGVtcGxhdGVNb2RlbCA9IGBpbXBvcnQgeyBlY3MgfSBmcm9tIFwiQC9zY3JpcHQvbGlicy9lY3MvRUNTXCI7XHJcblxyXG4vKiog5pWw5o2u5bGC5a+56LGhICovXHJcbkBlY3MucmVnaXN0ZXIoJzwlTmFtZSU+JylcclxuZXhwb3J0IGNsYXNzIDwlTmFtZSU+Q29tcCBleHRlbmRzIGVjcy5Db21wIHtcclxuICAgIGlkOiBudW1iZXIgPSAtMTtcclxuXHJcbiAgICAvKiog5pWw5o2u5bGC57uE5Lu256e76Zmk5pe277yM6YeN572u5omA5pyJ5pWw5o2u5Li66buY6K6k5YC8ICovXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLmlkID0gLTE7XHJcbiAgICB9XHJcbn1gOyJdfQ==