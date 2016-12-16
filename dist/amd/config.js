define(["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
        config.globalResources("./markdown-element");
    }
    exports.configure = configure;
});
