function block() {
    var list = [];
    list.push(document.querySelector("div.wrap.topAD"));
    list.push(document.getElementById("hq_main_top_tgWrap"));
    list.push(document.querySelector("div.AD_hqbottom"));
    list.push(document.querySelector("div.AD_R"));
    list.push(document.querySelector("div.cj_app_left"));
    list.push(document.querySelector("div.hq-finapp-sh-new"));
    list.forEach(e => e.remove());

    let a = {name: "abc"};
    browser.storage.local.set({a}).then(console.log("aaa"));
}

block();