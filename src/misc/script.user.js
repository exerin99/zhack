// ==UserScript==
// @name         ZHack
// @namespace    https://github.com/theinfinityway/zhack/tree/main/src
// @version      1.0.1
// @description  Injects ZHack v1.0.1
// @author       ZHack Libs
// @match        *://*/*
// @icon         https://cdn.jsdelivr.net/gh/theinfinityway/zhack/src/icons/192.png
// @updateURL    https://cdn.jsdelivr.net/gh/theinfinityway/zhack@main/src/misc/script.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/theinfinityway/zhack@main/src/misc/script.user.js
// @grant        none
// ==/UserScript==

(async() => {
    'use strict';
    
    function wildcard(str, rule) {
        var escapeRegex = (str) => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
        return new RegExp("^" + rule.split("*").map(escapeRegex).join(".*") + "$").test(str);
    }

    var root = "https://cdn.jsdelivr.net/gh/theinfinityway/zhack@main/src/";
    var rawConfig = await fetch(root + "injector/config.json");
    var config = await rawConfig.json();

    var glFound = false;
    var js = [];

    for (const item of config.injector) {
        var found = false;
        for (const url of item.urls) {
            if (wildcard(location.href, url)) {
                found = true;
                break;
            }
        }
        if (found) {
            js = item.scripts;
            glFound = true;
            break;
        }
    }

    if (glFound)
        for (const item of js) {
            var el = document.createElement('script');
            el.setAttribute('type', 'text/javascript');
            el.src = root + item;
            document.head.append(el);
        }
})();
