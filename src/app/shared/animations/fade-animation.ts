import {animate, state, style, transition, trigger} from "@angular/animations";


export const fadeAnimation =
    trigger('fadeAnimation', [
        state('open', style({
            opacity: 1
        })),
        state('closed',   style({
            opacity: 0
        })),
        transition('open => closed', animate('600ms ease-out')),
        transition('closed => open', animate('1000ms ease-in'))
    ]);
