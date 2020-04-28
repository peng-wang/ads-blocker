function block() {
    var list = [];
    list.push(document.querySelector("div.wrap.topAD"));
    list.push(document.getElementById("hq_main_top_tgWrap"));
    list.push(document.querySelector("div.AD_hqbottom"));
    list.push(document.querySelector("div.AD_R"));
    list.push(document.querySelector("div.cj_app_left"));
    list.push(document.querySelector("div.hq-finapp-sh-new"));

    list.push(document.querySelector("div.mod_index_ad.channel_relative_2016.index_top_ad"));
    list.push(document.querySelector("div.hp_textlink_ad"));
    list.push(document.querySelector("div.mod_home_footad"));
    list.push(document.querySelector("div.b-wrap > a"));
    list.push(document.querySelector("#cs_DIV_cscpvrich6799B"));
    list.push(document.querySelector("div.o_r_contact2"));
    list.push(document.querySelector("div.a970_play"));
    list.push(document.querySelector("div#epContentRight"));
    list.push(document.querySelector("div.gg200x300"));
    list.push(document.querySelector("div.post_end_ad"));
    list.push(document.querySelector("div.post_adtop_main"));
    list.push(document.querySelector("div.top_ad"));
    list.push(document.querySelector("div.topnews_ad"));
    list.push(document.querySelector('div[style*="position: fixed; bottom: 0px;"]'));
    list.forEach(e => {
        if(e) {
            e.remove();
        }
    });

    document.querySelectorAll("div.col_r").forEach(e => {
        if(e) {
            e.remove();
        }
    }); 
    document.querySelectorAll("div.mod_ad_text").forEach(e => {
        if(e) {
            e.remove();
        }
    }); 
    document.querySelectorAll("div.mod_index_ad").forEach(e => {
        if(e) {
            e.remove();
        }
    }); 
    document.querySelectorAll("div.post_recommend_ad").forEach(e => {
        if(e) {
            e.remove();
        }
    }); 
    document.querySelectorAll("div.at_item").forEach(e => {
        if(e) {
            e.remove();
        }
    }); 


    document.querySelectorAll("div.a960_index").forEach(e => {
        if(e) {
            e.remove();
        }
    }); 

    let a = {name: "abc"};
    browser.storage.local.set({a}).then(console.log("aaa"));
}

block();