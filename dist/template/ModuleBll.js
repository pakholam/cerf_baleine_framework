"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateBll = void 0;
exports.TemplateBll = `import { ecs } from "@/script/libs/ecs/ECS";

/** 业务输入参数 */
@ecs.register('<%Name%>')
export class <%Name%>Comp extends ecs.Comp {
    /** 业务层组件移除时，重置所有数据为默认值 */
    reset() {
        
    }
}

/** 业务逻辑处理对象 */
@ecs.register('<%ModuleName%>')
export class <%Name%>System extends ecs.ComblockSystem implements ecs.IEntityEnterSystem {
    filter(): ecs.IMatcher {
        return ecs.allOf(<%Name%>Comp);
    }

    entityEnter(e: ecs.Entity): void {
        // 注：自定义业务逻辑

        e.remove(<%Name%>Comp);
    }
}`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kdWxlQmxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc291cmNlL3RlbXBsYXRlL01vZHVsZUJsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLFdBQVcsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF1QnpCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVGVtcGxhdGVCbGwgPSBgaW1wb3J0IHsgZWNzIH0gZnJvbSBcIkAvc2NyaXB0L2xpYnMvZWNzL0VDU1wiO1xyXG5cclxuLyoqIOS4muWKoei+k+WFpeWPguaVsCAqL1xyXG5AZWNzLnJlZ2lzdGVyKCc8JU5hbWUlPicpXHJcbmV4cG9ydCBjbGFzcyA8JU5hbWUlPkNvbXAgZXh0ZW5kcyBlY3MuQ29tcCB7XHJcbiAgICAvKiog5Lia5Yqh5bGC57uE5Lu256e76Zmk5pe277yM6YeN572u5omA5pyJ5pWw5o2u5Li66buY6K6k5YC8ICovXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLyoqIOS4muWKoemAu+i+keWkhOeQhuWvueixoSAqL1xyXG5AZWNzLnJlZ2lzdGVyKCc8JU1vZHVsZU5hbWUlPicpXHJcbmV4cG9ydCBjbGFzcyA8JU5hbWUlPlN5c3RlbSBleHRlbmRzIGVjcy5Db21ibG9ja1N5c3RlbSBpbXBsZW1lbnRzIGVjcy5JRW50aXR5RW50ZXJTeXN0ZW0ge1xyXG4gICAgZmlsdGVyKCk6IGVjcy5JTWF0Y2hlciB7XHJcbiAgICAgICAgcmV0dXJuIGVjcy5hbGxPZig8JU5hbWUlPkNvbXApO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGl0eUVudGVyKGU6IGVjcy5FbnRpdHkpOiB2b2lkIHtcclxuICAgICAgICAvLyDms6jvvJroh6rlrprkuYnkuJrliqHpgLvovpFcclxuXHJcbiAgICAgICAgZS5yZW1vdmUoPCVOYW1lJT5Db21wKTtcclxuICAgIH1cclxufWA7Il19