/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface OhblogPost {
        "textoantepenultima": string;
        "textopenultima": string;
        "textoultima": string;
        "tituloantepenultima": string;
        "titulopenultima": string;
        "tituloultima": string;
    }
}
declare global {
    interface HTMLOhblogPostElement extends Components.OhblogPost, HTMLStencilElement {
    }
    var HTMLOhblogPostElement: {
        prototype: HTMLOhblogPostElement;
        new (): HTMLOhblogPostElement;
    };
    interface HTMLElementTagNameMap {
        "ohblog-post": HTMLOhblogPostElement;
    }
}
declare namespace LocalJSX {
    interface OhblogPost {
        "textoantepenultima"?: string;
        "textopenultima"?: string;
        "textoultima"?: string;
        "tituloantepenultima"?: string;
        "titulopenultima"?: string;
        "tituloultima"?: string;
    }
    interface IntrinsicElements {
        "ohblog-post": OhblogPost;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ohblog-post": LocalJSX.OhblogPost & JSXBase.HTMLAttributes<HTMLOhblogPostElement>;
        }
    }
}