/// <reference types="showdown" />
import * as showdown from "showdown";
import "prismjs";
export declare class MarkdownElement {
    model: any;
    private element;
    private converter;
    private root;
    constructor(elem: Element, converter: showdown.Converter);
    attached(): void;
    modelChanged(newValue: any, oldValue?: any): void;
}
