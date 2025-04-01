import { AssetInfo } from "../@types/packages/asset-db/@types/public";
import { compress } from "./tinypng";

/** 资源栏右键菜单 */
export function onAssetMenu(assetInfo: AssetInfo) {
  return [
    {
      label: "i18n:cerf_baleine_framework.name",
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
          ],
        },
        {
          label: `i18n:cerf_baleine_framework.tools_asset_menu`,
          submenu: [
            {
              label: `i18n:cerf_baleine_framework.tools_compress`,
              click() {
                compress(assetInfo.file);
              },
            },
          ],
        },
      ],
    },
  ];
}
