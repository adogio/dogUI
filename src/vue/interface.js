import {
    title,
    block,
    cell,
    button,
    search,
    upload,
    input,
    select,
    info,
    view,
    textarea,
    cover,
    navBar,
    statics,
    credit,
    switcher,
    fold
} from './import';

export default {
    install: function (Vue, options) {
        window.dog = {
            egg: 95,
            back: () => {
                if (getURLVar('environment')) {
                    webkit.messageHandlers.IOS.postMessage("done");
                    return "ios";
                } else {
                    alert("Close");
                    return "normal";
                }

                function getURLVar(string) {
                    return decodeURIComponent((new RegExp('[?|&]' + string + '=' + '([^&;]+?)(&|#|;|$)').exec(
                        location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
                }

            }
        };
        outer: for (let i in options) {
            inner: switch (i) {
                case "credit":
                    dog.credit = options[i];
                    break inner;
                case "egg":
                    dog.egg = options[i];
                    break inner;
            }
        }
        Vue.component('dog-cover', cover);
        Vue.component('dog-title', title);
        Vue.component('dog-block', block);
        Vue.component('dog-cell', cell);
        Vue.component('dog-search', search);
        Vue.component('dog-upload', upload);
        Vue.component('dog-input', input);
        Vue.component('dog-select', select);
        Vue.component('dog-button', button);
        Vue.component('dog-info', info);
        Vue.component('dog-view', view);
        Vue.component('dog-textarea', textarea);
        Vue.component('dog-nav', navBar);
        Vue.component('dog-static', statics);
        Vue.component('dog-credit', credit);
        Vue.component('dog-switch', switcher);
        Vue.component('dog-fold', fold);
    }
}