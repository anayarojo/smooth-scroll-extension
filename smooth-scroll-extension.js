/*!
 * Autor: anayarojo
 * Date: 2018-09-21
 * 
 * Smooth scroll extension
 * https://github.com/anayarojo/smooth-scroll-extension
 *
 * Copyright released under the MIT license
 * https://github.com/anayarojo/smooth-scroll-extension/blob/master/LICENSE
 *
 */
; (function (obj, window) {

    obj.prototype.smoothScroll = function (options) {

        options = options || {};

        var defaults = {
            padding: options.padding ? options.padding : 0
        };

        var options = options.extend(defaults, options);

        this.addEventListener('click', function (event) {

            if (event.target.tagName === 'A') {

                let href = event.target.getAttribute('href');
                if (href.startsWith('#')) {
                    event.preventDefault();

                    let element = document.getElementById(href.replace('#', ''));
                    if (element) {

                        let top = element.offsetTop;

                        window.scroll({
                            top: top + options.padding,
                            behavior: 'smooth'
                        });
                    }
                }
            }
        });
    };

    obj.prototype.extend = function () {
        for (var i = 1; i < arguments.length; i++) {
            for (var key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key)) {
                    arguments[0][key] = arguments[i][key];
                }
            }
        }
        return arguments[0];
    };

})(Object, window);