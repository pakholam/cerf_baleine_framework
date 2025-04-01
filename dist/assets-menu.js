"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onAssetMenu = void 0;
const tinypng_1 = require("./tinypng");
/** 资源栏右键菜单 */
function onAssetMenu(assetInfo) {
    return [
        {
            label: 'i18n:oops-framework.name',
            submenu: [
                {
                    label: `i18n:oops-framework.script`,
                    submenu: [
                        {
                            label: `i18n:oops-framework.createGameComponent`,
                            click() {
                                Editor.Panel.open("oops-framework.set_file_name", assetInfo.file, "GameComponent");
                            },
                        },
                        {
                            type: `separator`,
                        },
                        {
                            label: `i18n:oops-framework.createModule`,
                            click() {
                                Editor.Panel.open("oops-framework.set_file_name", assetInfo.file, "Module");
                            },
                        },
                        {
                            label: `i18n:oops-framework.createModel`,
                            click() {
                                Editor.Panel.open("oops-framework.set_file_name", assetInfo.file, "Model");
                            },
                        },
                        {
                            label: `i18n:oops-framework.createBll`,
                            click() {
                                Editor.Panel.open("oops-framework.set_file_name", assetInfo.file, "Bll");
                            },
                        },
                        {
                            label: `i18n:oops-framework.createView`,
                            click() {
                                Editor.Panel.open("oops-framework.set_file_name", assetInfo.file, "View");
                            },
                        },
                        {
                            label: `i18n:oops-framework.createViewMvvm`,
                            click() {
                                Editor.Panel.open("oops-framework.set_file_name", assetInfo.file, "ViewMvvm");
                            },
                        },
                    ]
                },
                {
                    label: `i18n:oops-framework.tools_asset_menu`,
                    submenu: [
                        {
                            label: `i18n:oops-framework.tools_compress`,
                            click() {
                                (0, tinypng_1.compress)(assetInfo.file);
                            },
                        }
                    ]
                }
            ],
        },
    ];
}
exports.onAssetMenu = onAssetMenu;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzLW1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXNzZXRzLW1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdUNBQXFDO0FBRXJDLGNBQWM7QUFDZCxTQUFnQixXQUFXLENBQUMsU0FBb0I7SUFDNUMsT0FBTztRQUNIO1lBQ0ksS0FBSyxFQUFFLDBCQUEwQjtZQUNqQyxPQUFPLEVBQUU7Z0JBQ0w7b0JBQ0ksS0FBSyxFQUFFLDRCQUE0QjtvQkFDbkMsT0FBTyxFQUFFO3dCQUNMOzRCQUNJLEtBQUssRUFBRSx5Q0FBeUM7NEJBQ2hELEtBQUs7Z0NBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsOEJBQThCLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQzs0QkFDdkYsQ0FBQzt5QkFDSjt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsV0FBVzt5QkFDcEI7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFFLGtDQUFrQzs0QkFDekMsS0FBSztnQ0FDRCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDOzRCQUNoRixDQUFDO3lCQUNKO3dCQUNEOzRCQUNJLEtBQUssRUFBRSxpQ0FBaUM7NEJBQ3hDLEtBQUs7Z0NBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsOEJBQThCLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzs0QkFDL0UsQ0FBQzt5QkFDSjt3QkFDRDs0QkFDSSxLQUFLLEVBQUUsK0JBQStCOzRCQUN0QyxLQUFLO2dDQUNELE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLDhCQUE4QixFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7NEJBQzdFLENBQUM7eUJBQ0o7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFFLGdDQUFnQzs0QkFDdkMsS0FBSztnQ0FDRCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDOzRCQUM5RSxDQUFDO3lCQUNKO3dCQUNEOzRCQUNJLEtBQUssRUFBRSxvQ0FBb0M7NEJBQzNDLEtBQUs7Z0NBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsOEJBQThCLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQzs0QkFDbEYsQ0FBQzt5QkFDSjtxQkFDSjtpQkFDSjtnQkFDRDtvQkFDSSxLQUFLLEVBQUUsc0NBQXNDO29CQUM3QyxPQUFPLEVBQUU7d0JBQ0w7NEJBQ0ksS0FBSyxFQUFFLG9DQUFvQzs0QkFDM0MsS0FBSztnQ0FDRCxJQUFBLGtCQUFRLEVBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUM3QixDQUFDO3lCQUNKO3FCQUNKO2lCQUNKO2FBQ0o7U0FDSjtLQUNKLENBQUM7QUFDTixDQUFDO0FBL0RELGtDQStEQztBQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBc3NldEluZm8gfSBmcm9tIFwiLi4vQHR5cGVzL3BhY2thZ2VzL2Fzc2V0LWRiL0B0eXBlcy9wdWJsaWNcIjtcclxuaW1wb3J0IHsgY29tcHJlc3MgfSBmcm9tIFwiLi90aW55cG5nXCI7XHJcblxyXG4vKiog6LWE5rqQ5qCP5Y+z6ZSu6I+c5Y2VICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkFzc2V0TWVudShhc3NldEluZm86IEFzc2V0SW5mbykge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnaTE4bjpvb3BzLWZyYW1ld29yay5uYW1lJyxcclxuICAgICAgICAgICAgc3VibWVudTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBgaTE4bjpvb3BzLWZyYW1ld29yay5zY3JpcHRgLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1lbnU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGBpMThuOm9vcHMtZnJhbWV3b3JrLmNyZWF0ZUdhbWVDb21wb25lbnRgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2soKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdG9yLlBhbmVsLm9wZW4oXCJvb3BzLWZyYW1ld29yay5zZXRfZmlsZV9uYW1lXCIsIGFzc2V0SW5mby5maWxlLCBcIkdhbWVDb21wb25lbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBgc2VwYXJhdG9yYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGBpMThuOm9vcHMtZnJhbWV3b3JrLmNyZWF0ZU1vZHVsZWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljaygpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0b3IuUGFuZWwub3BlbihcIm9vcHMtZnJhbWV3b3JrLnNldF9maWxlX25hbWVcIiwgYXNzZXRJbmZvLmZpbGUsIFwiTW9kdWxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGBpMThuOm9vcHMtZnJhbWV3b3JrLmNyZWF0ZU1vZGVsYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRvci5QYW5lbC5vcGVuKFwib29wcy1mcmFtZXdvcmsuc2V0X2ZpbGVfbmFtZVwiLCBhc3NldEluZm8uZmlsZSwgXCJNb2RlbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBgaTE4bjpvb3BzLWZyYW1ld29yay5jcmVhdGVCbGxgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2soKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdG9yLlBhbmVsLm9wZW4oXCJvb3BzLWZyYW1ld29yay5zZXRfZmlsZV9uYW1lXCIsIGFzc2V0SW5mby5maWxlLCBcIkJsbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBgaTE4bjpvb3BzLWZyYW1ld29yay5jcmVhdGVWaWV3YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRvci5QYW5lbC5vcGVuKFwib29wcy1mcmFtZXdvcmsuc2V0X2ZpbGVfbmFtZVwiLCBhc3NldEluZm8uZmlsZSwgXCJWaWV3XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGBpMThuOm9vcHMtZnJhbWV3b3JrLmNyZWF0ZVZpZXdNdnZtYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRvci5QYW5lbC5vcGVuKFwib29wcy1mcmFtZXdvcmsuc2V0X2ZpbGVfbmFtZVwiLCBhc3NldEluZm8uZmlsZSwgXCJWaWV3TXZ2bVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogYGkxOG46b29wcy1mcmFtZXdvcmsudG9vbHNfYXNzZXRfbWVudWAsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VibWVudTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogYGkxOG46b29wcy1mcmFtZXdvcmsudG9vbHNfY29tcHJlc3NgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2soKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJlc3MoYXNzZXRJbmZvLmZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxufTsiXX0=