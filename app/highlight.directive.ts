import { Directive, ElementRef, Input } from 'angular2/core';

@Directive({
    selector: '[myHighlight]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})

export class HighlightDirective {
    private _el : HTMLElement;
    private _defaultColor = 'red';

    @Input('myHighlight') highlightColor : string;
    @Input() set defaultColor(color : string) {
        this._defaultColor = color || this._defaultColor;
    }

    constructor(el : ElementRef) {
        this._el = el.nativeElement;
    }

    private _highlight(color : string) {
        this._el.style.backgroundColor = color;
    }

    onMouseEnter() {
        this._highlight(this.highlightColor || this._defaultColor);
    }

    onMouseLeave() {
        this._highlight(null);
    }
}