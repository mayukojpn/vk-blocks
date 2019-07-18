//hexカラーコード定義をrgbaに変換
export function hex2rgba (hex, alpha) {

    // ロングバージョンの場合（例：#FF0000）
    let r = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    let c = null;
    if (r) {
        c = r.slice(1,4).map(function(x) { return parseInt(x, 16) })
    }
    // ショートバージョンの場合（例：#F00）
    r = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
    if (r) {
        c = r.slice(1,4).map(function(x) { return 0x11 * parseInt(x, 16) })
    }
    // 該当しない場合は、nullを返す.
    if (!c) {
        return null
    }
    return `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${alpha})`
}
