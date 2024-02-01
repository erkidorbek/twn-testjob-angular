import { Component, Input } from '@angular/core';

@Component({
    selector: 'loader',
    template: `
        @if (showLoader) {
        <div class="loader">
            <img src="../../assets/loader.svg" alt="Loader">
        </div>
        }
    `,
    standalone: true,
})
export class LoaderComponent {
    constructor() { }

    @Input() showLoader: boolean = false;
}
