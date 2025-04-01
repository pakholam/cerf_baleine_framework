"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateGameComponent = void 0;
exports.TemplateGameComponent = `import { _decorator } from 'cc';
import { GameComponent } from "db://oops-framework/module/common/GameComponent";

const { ccclass, property } = _decorator;

/** 显示对象控制 */
@ccclass('<%Name%>')
export class <%Name%> extends GameComponent {
    protected start() {

    }
}`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS90ZW1wbGF0ZS9HYW1lQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEscUJBQXFCLEdBQUc7Ozs7Ozs7Ozs7O0VBV25DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVGVtcGxhdGVHYW1lQ29tcG9uZW50ID0gYGltcG9ydCB7IF9kZWNvcmF0b3IgfSBmcm9tICdjYyc7XHJcbmltcG9ydCB7IEdhbWVDb21wb25lbnQgfSBmcm9tIFwiZGI6Ly9vb3BzLWZyYW1ld29yay9tb2R1bGUvY29tbW9uL0dhbWVDb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG4vKiog5pi+56S65a+56LGh5o6n5Yi2ICovXHJcbkBjY2NsYXNzKCc8JU5hbWUlPicpXHJcbmV4cG9ydCBjbGFzcyA8JU5hbWUlPiBleHRlbmRzIEdhbWVDb21wb25lbnQge1xyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxufWA7Il19