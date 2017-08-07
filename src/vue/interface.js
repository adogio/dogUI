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
    fold,
    small,
    float
} from './import';

export default {
    /**
     * Initall this interface to Vue: Vue
     * 
     * @param {Vue} Vue 
     * @param {object} options 
     */
    install: function (Vue, options) {
        let dog_temp = {
            mode: 'normal'
        }
        let $dog = {
            egg: 95,
            alertLength: 0,
            draw: "right",
            extend: []
        }
        window.dog = {
            release: () => {
                const temp = window.dog;
                window.dog = undefined;
                // delete dog;
                return temp;
            },
            back: () => {
                if (getURLVar('environment')) {
                    if (getURLVar('environment') !== "android") {
                        webkit.messageHandlers.IOS.postMessage("done");
                    }
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
            inner: switch (i.toLowerCase()) {
                case "extend":
                case "extends":
                    $dog.extend = options[i];
                    break inner;
                case "credit":
                    $dog.credit = options[i];
                    break inner;
                case "egg":
                    $dog.egg = options[i];
                    break inner;
                case "sample":
                    if (options.sample == true) dog_temp.mode = 'sample';
                    break inner;
                case "drawmenu":
                case "draw":
                    $dog.draw = options[i];
                    break inner;
                case "end":
                    break outer;
            }
        }
        Vue.prototype.$dog = $dog;
        if (dog_temp.mode === 'normal') {
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
            Vue.component('dog-small', small);
            Vue.component('dog-float', float);
        } else {
            Vue.component('cov', cover);
            Vue.component('tit', title);
            Vue.component('blo', block);
            Vue.component('cel', cell);
            Vue.component('sea', search);
            Vue.component('upl', upload);
            Vue.component('inp', input);
            Vue.component('sel', select);
            Vue.component('but', button);
            Vue.component('inf', info);
            Vue.component('vie', view);
            Vue.component('tex', textarea);
            Vue.component('nab', navBar);
            Vue.component('sta', statics);
            Vue.component('cre', credit);
            Vue.component('swi', switcher);
            Vue.component('fol', fold);
            Vue.component('sma', small);
            Vue.component('flo', float);
        }
    }
}