import * as wasm from './rust_wasm_bg.wasm';

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const u32CvtShim = new Uint32Array(2);

const int64CvtShim = new BigInt64Array(u32CvtShim.buffer);
/**
* @param {BigInt} target
*/
export function cal_fib(target) {
    int64CvtShim[0] = target;
    const low0 = u32CvtShim[0];
    const high0 = u32CvtShim[1];
    wasm.cal_fib(low0, high0);
}

export const __wbg_alert_d87a18f2b03e82aa = function(arg0, arg1) {
    alert(getStringFromWasm0(arg0, arg1));
};

