
import { FrameworkConfiguration } from "aurelia-framework";

export function configure(config: FrameworkConfiguration)
{
    // register the markdown custom element
    config.globalResources("./markdown-element");
}
