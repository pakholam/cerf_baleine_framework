"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageUtil = void 0;
const { shell } = require('electron');
/** 包信息 */
const PACKAGE_JSON = require('../../package.json');
/** 包工具 */
class PackageUtil {
    /**
     * 包名
     * @type {string}
     */
    static get package_name() {
        return PACKAGE_JSON.name;
    }
    /**
     * 版本
     * @type {string}
     */
    static get version() {
        return PACKAGE_JSON.version;
    }
    /**
     * 仓库地址
     * @type {string}
     */
    static get repository() {
        return PACKAGE_JSON.repository;
    }
    /**
     * 打开仓库页面
     */
    static openRepository() {
        const url = this.repository;
        shell.openExternal(url);
    }
}
exports.PackageUtil = PackageUtil;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFja2FnZS11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc291cmNlL2NvbW1vbi9wYWNrYWdlLXV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUV0QyxVQUFVO0FBQ1YsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFFbkQsVUFBVTtBQUNWLE1BQWEsV0FBVztJQUNwQjs7O09BR0c7SUFDSCxNQUFNLEtBQUssWUFBWTtRQUNuQixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sS0FBSyxPQUFPO1FBQ2QsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLEtBQUssVUFBVTtRQUNqQixPQUFPLFlBQVksQ0FBQyxVQUFVLENBQUM7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTSxDQUFDLGNBQWM7UUFDakIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM1QixLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDSjtBQWhDRCxrQ0FnQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IHNoZWxsIH0gPSByZXF1aXJlKCdlbGVjdHJvbicpO1xyXG5cclxuLyoqIOWMheS/oeaBryAqL1xyXG5jb25zdCBQQUNLQUdFX0pTT04gPSByZXF1aXJlKCcuLi8uLi9wYWNrYWdlLmpzb24nKTtcclxuXHJcbi8qKiDljIXlt6XlhbcgKi9cclxuZXhwb3J0IGNsYXNzIFBhY2thZ2VVdGlsIHtcclxuICAgIC8qKlxyXG4gICAgICog5YyF5ZCNXHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0IHBhY2thZ2VfbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gUEFDS0FHRV9KU09OLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDniYjmnKxcclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXQgdmVyc2lvbigpIHtcclxuICAgICAgICByZXR1cm4gUEFDS0FHRV9KU09OLnZlcnNpb247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDku5PlupPlnLDlnYBcclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXQgcmVwb3NpdG9yeSgpIHtcclxuICAgICAgICByZXR1cm4gUEFDS0FHRV9KU09OLnJlcG9zaXRvcnk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiZPlvIDku5PlupPpobXpnaJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIG9wZW5SZXBvc2l0b3J5KCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMucmVwb3NpdG9yeTtcclxuICAgICAgICBzaGVsbC5vcGVuRXh0ZXJuYWwodXJsKTtcclxuICAgIH1cclxufSJdfQ==