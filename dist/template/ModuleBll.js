"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateBll = void 0;
exports.TemplateBll = `import { ecs } from "db://oops-framework/libs/ecs/ECS";

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kdWxlQmxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc291cmNlL3RlbXBsYXRlL01vZHVsZUJsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLFdBQVcsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF1QnpCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVGVtcGxhdGVCbGwgPSBgaW1wb3J0IHsgZWNzIH0gZnJvbSBcImRiOi8vb29wcy1mcmFtZXdvcmsvbGlicy9lY3MvRUNTXCI7XHJcblxyXG4vKiog5Lia5Yqh6L6T5YWl5Y+C5pWwICovXHJcbkBlY3MucmVnaXN0ZXIoJzwlTmFtZSU+JylcclxuZXhwb3J0IGNsYXNzIDwlTmFtZSU+Q29tcCBleHRlbmRzIGVjcy5Db21wIHtcclxuICAgIC8qKiDkuJrliqHlsYLnu4Tku7bnp7vpmaTml7bvvIzph43nva7miYDmnInmlbDmja7kuLrpu5jorqTlgLwgKi9cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4vKiog5Lia5Yqh6YC76L6R5aSE55CG5a+56LGhICovXHJcbkBlY3MucmVnaXN0ZXIoJzwlTW9kdWxlTmFtZSU+JylcclxuZXhwb3J0IGNsYXNzIDwlTmFtZSU+U3lzdGVtIGV4dGVuZHMgZWNzLkNvbWJsb2NrU3lzdGVtIGltcGxlbWVudHMgZWNzLklFbnRpdHlFbnRlclN5c3RlbSB7XHJcbiAgICBmaWx0ZXIoKTogZWNzLklNYXRjaGVyIHtcclxuICAgICAgICByZXR1cm4gZWNzLmFsbE9mKDwlTmFtZSU+Q29tcCk7XHJcbiAgICB9XHJcblxyXG4gICAgZW50aXR5RW50ZXIoZTogZWNzLkVudGl0eSk6IHZvaWQge1xyXG4gICAgICAgIC8vIOazqO+8muiHquWumuS5ieS4muWKoemAu+i+kVxyXG5cclxuICAgICAgICBlLnJlbW92ZSg8JU5hbWUlPkNvbXApO1xyXG4gICAgfVxyXG59YDsiXX0=