import fs from 'fs';
import path from 'path';
const travelDir = (dir, collector) => {
    fs.readdirSync(dir).forEach(function (file) {
        const pathname = path.join(dir, file);
        if (fs.statSync(pathname).isDirectory()) {
            travelDir(pathname, collector);
        } else {
            collector.push(pathname);
        }
    })
}
const getEntireName = (pt, prefix, suffix) => {
    prefix = prefix || 'views';
    suffix = suffix || '.ftl';
    const reg1 = new RegExp(`^\.*${prefix}\\${path.sep}|\\${suffix}$`, 'g');
    const reg2 = new RegExp(`\\${path.sep}`, 'g');
    const chunkName = pt.replace(reg1, '').replace(reg2, '/');
    return chunkName
}
export { travelDir };
export { getEntireName }