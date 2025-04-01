"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const vue_1 = require("vue");
const create_script_1 = require("../create-script");
const GameComponent_1 = require("../template/GameComponent");
const Module_1 = require("../template/Module");
const ModuleBll_1 = require("../template/ModuleBll");
const ModuleModel_1 = require("../template/ModuleModel");
const ModuleView_1 = require("../template/ModuleView");
const ModuleViewVM_1 = require("../template/ModuleViewVM");
const panelDataMap = new WeakMap();
module.exports = Editor.Panel.define({
    listeners: {
        show() { console.log('show'); },
        hide() { console.log('hide'); },
    },
    template: (0, fs_extra_1.readFileSync)((0, path_1.join)(__dirname, '../../static/template/default/index.html'), 'utf-8'),
    style: (0, fs_extra_1.readFileSync)((0, path_1.join)(__dirname, '../../static/style/default/index.css'), 'utf-8'),
    $: {
        app: '#app',
    },
    ready() {
        var args = arguments;
        let filename = "Default";
        let path = args[0];
        let type = args[1];
        let title = "???";
        let showModule = false;
        let moduleName = "ModuleName";
        switch (type) {
            case "GameComponent":
                title = `i18n:cerf_baleine_framework.createGameComponent`;
                break;
            case "Module":
                title = `i18n:cerf_baleine_framework.createModule`;
                break;
            case "Model":
                title = `i18n:cerf_baleine_framework.createModel`;
                break;
            case "Bll":
                title = `i18n:cerf_baleine_framework.createBll`;
                showModule = true;
                break;
            case "View":
                title = `i18n:cerf_baleine_framework.createView`;
                break;
            case "ViewMvvm":
                title = `i18n:cerf_baleine_framework.createViewMvvm`;
                break;
        }
        // 创建框架配置界面
        if (this.$.app) {
            const app = (0, vue_1.createApp)({});
            app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('ui-');
            app.component('MyConfig', {
                template: (0, fs_extra_1.readFileSync)((0, path_1.join)(__dirname, '../../static/template/vue/set_file_name.html'), 'utf-8'),
                data() {
                    return {
                        title: title,
                        filename: filename,
                        showModule: showModule
                    };
                },
                methods: {
                    // 记录输入的文件名
                    onInputName(event) {
                        filename = event.target.value;
                    },
                    onModuleName(event) {
                        moduleName = event.target.value;
                    },
                    // 创建文件
                    async onConfirm() {
                        if (filename.trim().length == 0) {
                            await Editor.Dialog.info('请输入文件名');
                            return;
                        }
                        switch (type) {
                            case "GameComponent":
                                await (0, create_script_1.createView)(path, filename, GameComponent_1.TemplateGameComponent, false);
                                break;
                            case "Module":
                                await (0, create_script_1.createScriptModule)(path, filename, Module_1.TemplateModule);
                                break;
                            case "Model":
                                await (0, create_script_1.createScript)(path, filename, ModuleModel_1.TemplateModel);
                                break;
                            case "Bll":
                                await (0, create_script_1.createScriptBll)(path, filename, ModuleBll_1.TemplateBll, moduleName);
                                break;
                            case "View":
                                await (0, create_script_1.createView)(path, filename, ModuleView_1.TemplateView);
                                break;
                            case "ViewMvvm":
                                await (0, create_script_1.createView)(path, filename, ModuleViewVM_1.TemplateViewMvvm);
                                break;
                        }
                        close();
                    }
                },
            });
            app.mount(this.$.app);
            panelDataMap.set(this, app);
        }
    },
    beforeClose() { },
    close() {
        const app = panelDataMap.get(this);
        if (app) {
            app.unmount();
        }
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zb3VyY2UvZGVmYXVsdC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUF3QztBQUN4QywrQkFBNEI7QUFDNUIsNkJBQXFDO0FBQ3JDLG9EQUFpRztBQUNqRyw2REFBa0U7QUFDbEUsK0NBQW9EO0FBQ3BELHFEQUFvRDtBQUNwRCx5REFBd0Q7QUFDeEQsdURBQXNEO0FBQ3RELDJEQUE0RDtBQUU1RCxNQUFNLFlBQVksR0FBRyxJQUFJLE9BQU8sRUFBWSxDQUFDO0FBRTdDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDakMsU0FBUyxFQUFFO1FBQ1AsSUFBSSxLQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLElBQUksS0FBSyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNsQztJQUNELFFBQVEsRUFBRSxJQUFBLHVCQUFZLEVBQUMsSUFBQSxXQUFJLEVBQUMsU0FBUyxFQUFFLDBDQUEwQyxDQUFDLEVBQUUsT0FBTyxDQUFDO0lBQzVGLEtBQUssRUFBRSxJQUFBLHVCQUFZLEVBQUMsSUFBQSxXQUFJLEVBQUMsU0FBUyxFQUFFLHNDQUFzQyxDQUFDLEVBQUUsT0FBTyxDQUFDO0lBQ3JGLENBQUMsRUFBRTtRQUNDLEdBQUcsRUFBRSxNQUFNO0tBQ2Q7SUFDRCxLQUFLO1FBQ0QsSUFBSSxJQUFJLEdBQUcsU0FBZ0IsQ0FBQztRQUM1QixJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxV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Z0NBQ25ELE1BQU07eUJBQ2I7d0JBQ0QsS0FBSyxFQUFFLENBQUM7b0JBQ1osQ0FBQztpQkFDSjthQUNKLENBQUMsQ0FBQztZQUNILEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QixZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFDRCxXQUFXLEtBQUssQ0FBQztJQUNqQixLQUFLO1FBQ0QsTUFBTSxHQUFHLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLEdBQUcsRUFBRTtZQUNMLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNqQjtJQUNMLENBQUM7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tICdmcy1leHRyYSc7XHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgQXBwLCBjcmVhdGVBcHAgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgeyBjcmVhdGVTY3JpcHQsIGNyZWF0ZVNjcmlwdEJsbCwgY3JlYXRlU2NyaXB0TW9kdWxlLCBjcmVhdGVWaWV3IH0gZnJvbSAnLi4vY3JlYXRlLXNjcmlwdCc7XHJcbmltcG9ydCB7IFRlbXBsYXRlR2FtZUNvbXBvbmVudCB9IGZyb20gJy4uL3RlbXBsYXRlL0dhbWVDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZU1vZHVsZSB9IGZyb20gJy4uL3RlbXBsYXRlL01vZHVsZSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlQmxsIH0gZnJvbSAnLi4vdGVtcGxhdGUvTW9kdWxlQmxsJztcclxuaW1wb3J0IHsgVGVtcGxhdGVNb2RlbCB9IGZyb20gJy4uL3RlbXBsYXRlL01vZHVsZU1vZGVsJztcclxuaW1wb3J0IHsgVGVtcGxhdGVWaWV3IH0gZnJvbSAnLi4vdGVtcGxhdGUvTW9kdWxlVmlldyc7XHJcbmltcG9ydCB7IFRlbXBsYXRlVmlld012dm0gfSBmcm9tICcuLi90ZW1wbGF0ZS9Nb2R1bGVWaWV3Vk0nO1xyXG5cclxuY29uc3QgcGFuZWxEYXRhTWFwID0gbmV3IFdlYWtNYXA8YW55LCBBcHA+KCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEVkaXRvci5QYW5lbC5kZWZpbmUoe1xyXG4gICAgbGlzdGVuZXJzOiB7XHJcbiAgICAgICAgc2hvdygpIHsgY29uc29sZS5sb2coJ3Nob3cnKTsgfSxcclxuICAgICAgICBoaWRlKCkgeyBjb25zb2xlLmxvZygnaGlkZScpOyB9LFxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiByZWFkRmlsZVN5bmMoam9pbihfX2Rpcm5hbWUsICcuLi8uLi9zdGF0aWMvdGVtcGxhdGUvZGVmYXVsdC9pbmRleC5odG1sJyksICd1dGYtOCcpLFxyXG4gICAgc3R5bGU6IHJlYWRGaWxlU3luYyhqb2luKF9fZGlybmFtZSwgJy4uLy4uL3N0YXRpYy9zdHlsZS9kZWZhdWx0L2luZGV4LmNzcycpLCAndXRmLTgnKSxcclxuICAgICQ6IHtcclxuICAgICAgICBhcHA6ICcjYXBwJyxcclxuICAgIH0sXHJcbiAgICByZWFkeSgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyBhcyBhbnk7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gXCJEZWZhdWx0XCI7XHJcbiAgICAgICAgbGV0IHBhdGggPSBhcmdzWzBdO1xyXG4gICAgICAgIGxldCB0eXBlID0gYXJnc1sxXTtcclxuICAgICAgICBsZXQgdGl0bGUgPSBcIj8/P1wiO1xyXG4gICAgICAgIGxldCBzaG93TW9kdWxlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG1vZHVsZU5hbWUgPSBcIk1vZHVsZU5hbWVcIjtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJHYW1lQ29tcG9uZW50XCI6XHJcbiAgICAgICAgICAgICAgICB0aXRsZSA9IGBpMThuOmNlcmZfYmFsZWluZV9mcmFtZXdvcmsuY3JlYXRlR2FtZUNvbXBvbmVudGA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIk1vZHVsZVwiOlxyXG4gICAgICAgICAgICAgICAgdGl0bGUgPSBgaTE4bjpjZXJmX2JhbGVpbmVfZnJhbWV3b3JrLmNyZWF0ZU1vZHVsZWA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIk1vZGVsXCI6XHJcbiAgICAgICAgICAgICAgICB0aXRsZSA9IGBpMThuOmNlcmZfYmFsZWluZV9mcmFtZXdvcmsuY3JlYXRlTW9kZWxgO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCbGxcIjpcclxuICAgICAgICAgICAgICAgIHRpdGxlID0gYGkxOG46Y2VyZl9iYWxlaW5lX2ZyYW1ld29yay5jcmVhdGVCbGxgO1xyXG4gICAgICAgICAgICAgICAgc2hvd01vZHVsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlZpZXdcIjpcclxuICAgICAgICAgICAgICAgIHRpdGxlID0gYGkxOG46Y2VyZl9iYWxlaW5lX2ZyYW1ld29yay5jcmVhdGVWaWV3YDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiVmlld012dm1cIjpcclxuICAgICAgICAgICAgICAgIHRpdGxlID0gYGkxOG46Y2VyZl9iYWxlaW5lX2ZyYW1ld29yay5jcmVhdGVWaWV3TXZ2bWA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWIm+W7uuahhuaetumFjee9rueVjOmdolxyXG4gICAgICAgIGlmICh0aGlzLiQuYXBwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFwcCA9IGNyZWF0ZUFwcCh7fSk7XHJcbiAgICAgICAgICAgIGFwcC5jb25maWcuY29tcGlsZXJPcHRpb25zLmlzQ3VzdG9tRWxlbWVudCA9ICh0YWcpID0+IHRhZy5zdGFydHNXaXRoKCd1aS0nKTtcclxuICAgICAgICAgICAgYXBwLmNvbXBvbmVudCgnTXlDb25maWcnLCB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogcmVhZEZpbGVTeW5jKGpvaW4oX19kaXJuYW1lLCAnLi4vLi4vc3RhdGljL3RlbXBsYXRlL3Z1ZS9zZXRfZmlsZV9uYW1lLmh0bWwnKSwgJ3V0Zi04JyksXHJcbiAgICAgICAgICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWU6IGZpbGVuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93TW9kdWxlOiBzaG93TW9kdWxlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6K6w5b2V6L6T5YWl55qE5paH5Lu25ZCNXHJcbiAgICAgICAgICAgICAgICAgICAgb25JbnB1dE5hbWUoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW9kdWxlTmFtZShldmVudDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyDliJvlu7rmlofku7ZcclxuICAgICAgICAgICAgICAgICAgICBhc3luYyBvbkNvbmZpcm0oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWxlbmFtZS50cmltKCkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IEVkaXRvci5EaWFsb2cuaW5mbygn6K+36L6T5YWl5paH5Lu25ZCNJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkdhbWVDb21wb25lbnRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBjcmVhdGVWaWV3KHBhdGgsIGZpbGVuYW1lLCBUZW1wbGF0ZUdhbWVDb21wb25lbnQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJNb2R1bGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBjcmVhdGVTY3JpcHRNb2R1bGUocGF0aCwgZmlsZW5hbWUsIFRlbXBsYXRlTW9kdWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJNb2RlbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGNyZWF0ZVNjcmlwdChwYXRoLCBmaWxlbmFtZSwgVGVtcGxhdGVNb2RlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQmxsXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgY3JlYXRlU2NyaXB0QmxsKHBhdGgsIGZpbGVuYW1lLCBUZW1wbGF0ZUJsbCwgbW9kdWxlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiVmlld1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGNyZWF0ZVZpZXcocGF0aCwgZmlsZW5hbWUsIFRlbXBsYXRlVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiVmlld012dm1cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBjcmVhdGVWaWV3KHBhdGgsIGZpbGVuYW1lLCBUZW1wbGF0ZVZpZXdNdnZtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhcHAubW91bnQodGhpcy4kLmFwcCk7XHJcbiAgICAgICAgICAgIHBhbmVsRGF0YU1hcC5zZXQodGhpcywgYXBwKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYmVmb3JlQ2xvc2UoKSB7IH0sXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICBjb25zdCBhcHAgPSBwYW5lbERhdGFNYXAuZ2V0KHRoaXMpO1xyXG4gICAgICAgIGlmIChhcHApIHtcclxuICAgICAgICAgICAgYXBwLnVubW91bnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19