var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "showdown", "prismjs"], function (require, exports, aurelia_framework_1, showdown) {
    "use strict";
    let MarkdownElement = class MarkdownElement {
        constructor(elem, converter) {
            this.element = elem;
            this.converter = converter;
            Prism.highlightAll(true);
        }
        attached() {
            this.root = this.element.shadowRoot || this.element;
            if (!this.model) {
                this.modelChanged(this.element.innerHTML);
            }
            else {
                this.modelChanged(this.model);
            }
        }
        modelChanged(newValue, oldValue) {
            if (!this.root) {
                return;
            }
            this.root.innerHTML = this.converter.makeHtml(newValue);
            for (let node of this.root.querySelectorAll("pre code")) {
                Prism.highlightElement(node, false);
            }
        }
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], MarkdownElement.prototype, "model", void 0);
    MarkdownElement = __decorate([
        aurelia_framework_1.customElement("markdown"),
        aurelia_framework_1.processContent(false),
        aurelia_framework_1.noView,
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [Element, showdown.Converter])
    ], MarkdownElement);
    exports.MarkdownElement = MarkdownElement;
});
