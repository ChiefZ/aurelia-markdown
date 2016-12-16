// based on aurelia-markdown by gooy - https://github.com/gooy/aurelia-markdown/blob/master/src/markdown.js

import { autoinject, bindable, customElement, Factory, noView, processContent } from "aurelia-framework";
import * as showdown from "showdown";

import "prismjs";

@customElement("markdown")
@processContent(false)
@noView
@autoinject
export class MarkdownElement
{
    @bindable public model: any;
    private element: Element;
    private converter: showdown.Converter;
    private root: ShadowRoot | Element;

    constructor(elem: Element, converter: showdown.Converter)
    {
        this.element = elem;
        this.converter = converter;

        Prism.highlightAll(true);
    }

    public attached()
    {
        this.root = this.element.shadowRoot || this.element;

        if (!this.model)
        {
            this.modelChanged(this.element.innerHTML);
        }
        else
        {
            this.modelChanged(this.model);
        }
    }

    public modelChanged(newValue: any, oldValue?: any)
    {
        if (!this.root)
        {
            return;
        }

        this.root.innerHTML = this.converter.makeHtml(newValue);

        for (let node of this.root.querySelectorAll("pre code"))
        {
            Prism.highlightElement(node, false);
        }
    }
}
