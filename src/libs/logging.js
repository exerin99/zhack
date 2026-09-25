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