function main() {
    if (typeof Card === 'undefined' || typeof Card.Player === 'undefined'
        || typeof Card.Player.__score === 'undefined') {
        setTimeout(main, 50);
        return;
    }

    count = 0;
    isOld = false;

    if (typeof Card.Player._emitSignal === 'undefined') {
        l_exinfo("\"Card.Player._emitSignal\" не найден, это старое задание");
        isOld = true;
    }

    function send_event(a, b) {
        l_info("Отправляем API реквест к \"events\"...");
        console.group("Информация о реквесте");
        console.log("Событие: ", a);
        console.log("Данные: ", b);
        console.groupEnd();
        if (isOld) Card.Player.__score.tutor._sys_event(a, b);
        else Card.Player._emitSignal(a, b);
    }

    function report_solve() {
        l_info("Отправляем \"$lesson_finish\"...");
        send_event("$lesson_finish");
        reload_on_sent();
    }

    function get_score_json() {
        l_info("Получаем Score JSON...");
        var n = {};
        Card.Player.__score.save(n);
        console.group("Score JSON");
        console.log("Data: ", n);
        console.groupEnd();
        return n;
    }

    function solve_current() {
        l_info("Решаем текущее задание...");
        if (Card.Player.__score.current + 1 <= Card.Player.__score.total)
            Card.Player.__score.current++;
        if (Card.Player.__score._index + 2 <= Card.Player.__score.total)
            Card.Player.__score._index += 2;
        else Card.Player.__score._index--;
        send_event("beads_exercise_finish_succ", {
            "amount": Card.Player.__score.current,
            "total": Card.Player.__score.total
        });
        if (isOld) send_event("$store", get_score_json());
        else send_event("$store", {
            "json": JSON.stringify(get_score_json())
        });
    }

    function solve_all() {
        l_info("Автоматическое решение включено!");
        sessionStorage.setItem('solverUrl', location.href);
        sessionStorage.setItem('doSolve', 'true');
        solve_current();
        if (Card.Player.__score.current >= Card.Player.__score.total)
            report_solve();

        reload_on_sent();
    }

    function test_count() {
        if (count >= 1) {
            location.reload(false);
            return;
        }
        setTimeout(function () { test_count(); }, 50);
    }

    function reload_on_sent() {
        setTimeout(function () { test_count(); }, 50);
        $(document).ajaxStop(function () { count++; });
    }

    color = "#00DC82";

    if (sessionStorage.getItem('doSolve') === 'true'
        && sessionStorage.getItem('solved') !== 'true'
        && sessionStorage.getItem('solverUrl') == location.href) {
        color = "#FF8B20";
        status = "Решаем";
    } else if (sessionStorage.getItem('solved') === 'true')
        status = "Решено";
    else if (isOld)
        status = "Поддержка старых заданий";
    else status = "Готов";

    if (ZHack.status !== "Решаем") {
        // --- Меню в top-layer через <dialog> ---
        var old = document.getElementById("zhack-dialog");
        if (old) old.remove();

        var dlg = document.createElement("dialog");
        dlg.id = "zhack-dialog";
        dlg.setAttribute("open", "");
        dlg.style.cssText = [
            "position: fixed",
            "top: 8px",
            "left: 50%",
            "transform: translateX(-50%)",
            "margin: 0",
            "padding: 8px",
            "border: none",
            "background: transparent",
            "z-index: 2147483647",
            "display: flex",
            "gap: 8px",
            "align-items: center",
            "pointer-events: none",
            "max-width: none",
            "width: max-content",
            "overflow: visible"
        ].join("; ");

        // Подстраховка от стилей сайта
        var styleTag = document.createElement("style");
        styleTag.textContent = `
            #zhack-dialog::backdrop { background: transparent !important; }
            #zhack-dialog { z-index: 2147483647 !important; }
            #zhack-dialog .zhack-btn { pointer-events: auto !important; }
        `;
        document.head.appendChild(styleTag);

        function makeBtn(html, onClick) {
            var b = document.createElement("div");
            b.className = "zhack-btn";
            b.style.cssText = [
                "border: 1px solid #262626",
                "background: #171717",
                "border-radius: 10px",
                "padding: 8px",
                "width: max-content",
                "display: flex",
                "font-weight: 800",
                "pointer-events: auto",
                "cursor: pointer"
            ].join("; ");
            b.innerHTML = html;
            if (onClick) b.addEventListener("click", onClick);
            return b;
        }

        var btn1 = makeBtn('<span style="cursor:pointer;color:#fff">Решить карточку</span>', function () {
            solve_all();
        });

        var btn3 = makeBtn(
            `<a style="cursor:pointer;color:#fff;text-decoration:none;" href="https://github.com/theinfinityway/zhack/tree/main/src" target="_blank">ZHack ${ZHack.version}</a>` +
            `<span style="color:white;margin-left:6px;"> » Статус: </span>` +
            `<span style="color:${color};">${status}</span>`
        );

        var btn2 = makeBtn('<span style="cursor:pointer;color:#fff">Решить задание</span>', function () {
            solve_current();
            reload_on_sent();
        });

        dlg.appendChild(btn1);
        dlg.appendChild(btn3);
        dlg.appendChild(btn2);

        // Вставляем в documentElement, а не в body
        document.documentElement.appendChild(dlg);

        // showModal переносит в top-layer — гарантированно поверх всего
        try {
            dlg.showModal();
            dlg.style.setProperty("pointer-events", "none", "important");
        } catch (e) {
            l_exinfo("showModal не сработал: " + e);
        }
    }

    if (sessionStorage.getItem('doSolve') === 'true' && sessionStorage.getItem('solverUrl') == location.href) {
        l_info("Продолжаем решение карточки...");
        if (sessionStorage.getItem('solved') === 'true') {
            l_info("Карточка успешно решена!");
            sessionStorage.setItem('doSolve', 'false');
            sessionStorage.setItem('solved', 'false');
        } else if (Card.Player.__score.current === Card.Player.__score.total) {
            sessionStorage.setItem('doSolve', 'false');
        } else {
            solve_current();
            if (Card.Player.__score.current >= Card.Player.__score.total) {
                report_solve();
                sessionStorage.setItem('solved', 'true');
            }

            reload_on_sent();
        }
    }

    l_success("Скрипт закончил свою работу!");
};

(() => {
    if (typeof ZHack !== 'undefined') return;

    ZHack = {};
    ZHack.type = "card";
    ZHack.version = "v1.0.1";

    l_exinfo(`Версия ${ZHack.version}`);

    main();
})();