export const TemplateGameComponent = `import { _decorator } from 'cc';
import { GameComponent } from "@/script/module/common/GameComponent";

const { ccclass, property } = _decorator;

/** 显示对象控制 */
@ccclass('<%Name%>')
export class <%Name%> extends GameComponent {
    protected start() {

    }
}`;
