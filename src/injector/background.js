/* Стили */
var style1 = 'background: #171717; color: #ffffff; border: 3px solid #262626; padding: 2px'; 
var style2 = 'background: #171717; color: #FF8B20; border: 3px solid #262626; padding: 1px; margin: 1px'; 
var style3 = 'background: #171717; color: #00DC82; border: 3px solid #262626; padding: 1px; margin: 1px';
var style4 = 'background: #171717; color: #FF3232; border: 3px solid #262626; padding: 1px; margin: 1px';
var style5 = 'background: #171717; color: #ffffff; border: 3px solid #262626; padding: 1px; margin: 1px';
var prefix = "ZHack"

/* Выделенная информация */
function l_exinfo(msg) {
    console.warn(`%c[${prefix}]` + `%c ${msg}`, style1, style5);
}

/* Информация */
function l_info(msg) {
    console.log(`%c[${prefix}]` + `%c ${msg}`, style1, style5);
}

/* Предупреждение */
function l_warn(msg) {
    console.warn(`%c[${prefix}]` + `%c ${msg}`, style1, style2);
}

/* Успешно */
function l_success(msg) {
    console.log(`%c[${prefix}]` + `%c ${msg}`, style1, style3);
}

/* Ошибка */
function l_error(msg) {
    console.log(`%c[${prefix}]` + `%c ${msg}`, style1, style4);
}

// ------------------------------------------------------------------------------------------------------------------------

function wildcard(str, rule) {
    var escapeRegex = (str) => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    return new RegExp("^" + rule.split("*").map(escapeRegex).join(".*") + "$").test(str);
}

l_exinfo("Загрузка...");
(async() => {
    var rawConfig = await fetch(browser.runtime.getURL("injector/config.json"));
    var config = await rawConfig.json();

    browser.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
        try {
            if (changeInfo.status != "complete") return;
            var glFound = false;
            var js = [];

            for (const item of config.injector) {
                var found = false;
                for (const url of item.urls) {
                    if (wildcard(tab.url, url)) {
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

            if (glFound) {
                l_info(`Запускаем скрипты (${tabId}, ${tab.url})`);
                for (const item of js)
                    browser.tabs.executeScript(tabId, {
                        "code": `var el = document.createElement('script'); 
                        el.setAttribute('type', 'text/javascript'); 
                        el.src = browser.runtime.getURL("${item}"); 
                        document.head.append(el);`})
            }
        } catch (e) {
            l_error(e);
        }
    });
})();

l_success("Всё OK!")