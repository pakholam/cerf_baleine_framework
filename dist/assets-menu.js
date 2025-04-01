"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onAssetMenu = void 0;
const tinypng_1 = require("./tinypng");
/** 资源栏右键菜单 */
function onAssetMenu(assetInfo) {
    return [
        {
            label: 'i18n:cerf_baleine_framework.name',
            submenu: [
                {
                    label: `i18n:cerf_baleine_framework.script`,
                    submenu: [
                        {
                            label: `i18n:cerf_baleine_framework.createGameComponent`,
                            click() {
                                Editor.Panel.open("cerf_baleine_framework.set_file_name", assetInfo.file, "GameComponent");
                            },
                        },
                        {
                            type: `separator`,
                        },
                        {
                            label: `i18n:cerf_baleine_framework.createModule`,
                            click() {
                                Editor.Panel.open("cerf_baleine_framework.set_file_name", assetInfo.file, "Module");
                            },
                        },
                        {
                            label: `i18n:cerf_baleine_framework.createModel`,
                            click() {
                                Editor.Panel.open("cerf_baleine_framework.set_file_name", assetInfo.file, "Model");
                            },
                        },
                        {
                            label: `i18n:cerf_baleine_framework.createBll`,
                            click() {
                                Editor.Panel.open("cerf_baleine_framework.set_file_name", assetInfo.file, "Bll");
                            },
                        },
                        {
                            label: `i18n:cerf_baleine_framework.createView`,
                            click() {
                                Editor.Panel.open("cerf_baleine_framework.set_file_name", assetInfo.file, "View");
                            },
                        },
                        {
                            label: `i18n:cerf_baleine_framework.createViewMvvm`,
                            click() {
                                Editor.Panel.open("cerf_baleine_framework.set_file_name", assetInfo.file, "ViewMvvm");
                            },
                        },
                    ]
                },
                {
                    label: `i18n:cerf_baleine_framework.tools_asset_menu`,
                    submenu: [
                        {
                            label: `i18n:cerf_baleine_framework.tools_compress`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzLW1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zb3VyY2UvYXNzZXRzLW1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdUNBQXFDO0FBRXJDLGNBQWM7QUFDZCxTQUFnQixXQUFXLENBQUMsU0FBb0I7SUFDNUMsT0FBTztRQUNIO1lBQ0ksS0FBSyxFQUFFLGtDQUFrQztZQUN6QyxPQUFPLEVBQUU7Z0JBQ0w7b0JBQ0ksS0FBSyxFQUFFLG9DQUFvQztvQkFDM0MsT0FBTyxFQUFFO3dCQUNMOzRCQUNJLEtBQUssRUFBRSxpREFBaUQ7NEJBQ3hELEtBQUs7Z0NBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsc0NBQXNDLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQzs0QkFDL0YsQ0FBQzt5QkFDSjt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsV0FBVzt5QkFDcEI7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFFLDBDQUEwQzs0QkFDakQsS0FBSztnQ0FDRCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDOzRCQUN4RixDQUFDO3lCQUNKO3dCQUNEOzRCQUNJLEtBQUssRUFBRSx5Q0FBeUM7NEJBQ2hELEtBQUs7Z0NBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsc0NBQXNDLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzs0QkFDdkYsQ0FBQzt5QkFDSjt3QkFDRDs0QkFDSSxLQUFLLEVBQUUsdUNBQXVDOzRCQUM5QyxLQUFLO2dDQUNELE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7NEJBQ3JGLENBQUM7eUJBQ0o7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFFLHdDQUF3Qzs0QkFDL0MsS0FBSztnQ0FDRCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDOzRCQUN0RixDQUFDO3lCQUNKO3dCQUNEOzRCQUNJLEtBQUssRUFBRSw0Q0FBNEM7NEJBQ25ELEtBQUs7Z0NBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsc0NBQXNDLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQzs0QkFDMUYsQ0FBQzt5QkFDSjtxQkFDSjtpQkFDSjtnQkFDRDtvQkFDSSxLQUFLLEVBQUUsOENBQThDO29CQUNyRCxPQUFPLEVBQUU7d0JBQ0w7NEJBQ0ksS0FBSyxFQUFFLDRDQUE0Qzs0QkFDbkQsS0FBSztnQ0FDRCxJQUFBLGtCQUFRLEVBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUM3QixDQUFDO3lCQUNKO3FCQUNKO2lCQUNKO2FBQ0o7U0FDSjtLQUNKLENBQUM7QUFDTixDQUFDO0FBL0RELGtDQStEQztBQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBc3NldEluZm8gfSBmcm9tIFwiLi4vQHR5cGVzL3BhY2thZ2VzL2Fzc2V0LWRiL0B0eXBlcy9wdWJsaWNcIjtcclxuaW1wb3J0IHsgY29tcHJlc3MgfSBmcm9tIFwiLi90aW55cG5nXCI7XHJcblxyXG4vKiog6LWE5rqQ5qCP5Y+z6ZSu6I+c5Y2VICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkFzc2V0TWVudShhc3NldEluZm86IEFzc2V0SW5mbykge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnaTE4bjpjZXJmX2JhbGVpbmVfZnJhbWV3b3JrLm5hbWUnLFxyXG4gICAgICAgICAgICBzdWJtZW51OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGBpMThuOmNlcmZfYmFsZWluZV9mcmFtZXdvcmsuc2NyaXB0YCxcclxuICAgICAgICAgICAgICAgICAgICBzdWJtZW51OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBgaTE4bjpjZXJmX2JhbGVpbmVfZnJhbWV3b3JrLmNyZWF0ZUdhbWVDb21wb25lbnRgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2soKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdG9yLlBhbmVsLm9wZW4oXCJjZXJmX2JhbGVpbmVfZnJhbWV3b3JrLnNldF9maWxlX25hbWVcIiwgYXNzZXRJbmZvLmZpbGUsIFwiR2FtZUNvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGBzZXBhcmF0b3JgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogYGkxOG46Y2VyZl9iYWxlaW5lX2ZyYW1ld29yay5jcmVhdGVNb2R1bGVgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2soKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdG9yLlBhbmVsLm9wZW4oXCJjZXJmX2JhbGVpbmVfZnJhbWV3b3JrLnNldF9maWxlX25hbWVcIiwgYXNzZXRJbmZvLmZpbGUsIFwiTW9kdWxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGBpMThuOmNlcmZfYmFsZWluZV9mcmFtZXdvcmsuY3JlYXRlTW9kZWxgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2soKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdG9yLlBhbmVsLm9wZW4oXCJjZXJmX2JhbGVpbmVfZnJhbWV3b3JrLnNldF9maWxlX25hbWVcIiwgYXNzZXRJbmZvLmZpbGUsIFwiTW9kZWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogYGkxOG46Y2VyZl9iYWxlaW5lX2ZyYW1ld29yay5jcmVhdGVCbGxgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2soKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdG9yLlBhbmVsLm9wZW4oXCJjZXJmX2JhbGVpbmVfZnJhbWV3b3JrLnNldF9maWxlX25hbWVcIiwgYXNzZXRJbmZvLmZpbGUsIFwiQmxsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGBpMThuOmNlcmZfYmFsZWluZV9mcmFtZXdvcmsuY3JlYXRlVmlld2AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljaygpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0b3IuUGFuZWwub3BlbihcImNlcmZfYmFsZWluZV9mcmFtZXdvcmsuc2V0X2ZpbGVfbmFtZVwiLCBhc3NldEluZm8uZmlsZSwgXCJWaWV3XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGBpMThuOmNlcmZfYmFsZWluZV9mcmFtZXdvcmsuY3JlYXRlVmlld012dm1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2soKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdG9yLlBhbmVsLm9wZW4oXCJjZXJmX2JhbGVpbmVfZnJhbWV3b3JrLnNldF9maWxlX25hbWVcIiwgYXNzZXRJbmZvLmZpbGUsIFwiVmlld012dm1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGBpMThuOmNlcmZfYmFsZWluZV9mcmFtZXdvcmsudG9vbHNfYXNzZXRfbWVudWAsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VibWVudTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogYGkxOG46Y2VyZl9iYWxlaW5lX2ZyYW1ld29yay50b29sc19jb21wcmVzc2AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljaygpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcmVzcyhhc3NldEluZm8uZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG59OyJdfQ==