mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn cal_fib(target: i64) {
    alert(&format!("The {}th fib number is: {}", target, fib(target, 0, 1)));
}

fn fib(n: i64, acc: i64, curr: i64) -> i64 {
    if n <= 0 {
        acc
    }else{
        fib(n - 1, &acc + curr, acc)
    }
}
