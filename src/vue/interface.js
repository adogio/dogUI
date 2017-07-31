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
    credit
} from './import';

export default {
    install: function (Vue, options) {
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
    }
}