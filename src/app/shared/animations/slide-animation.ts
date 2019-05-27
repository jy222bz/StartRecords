import {animate, group, state, style, transition, trigger} from "@angular/animations";


export const slideAnimation =
    trigger('slideAnimation', [
        state('in', style({
            'opacity': '1', 'visibility': 'visible', 'transform': 'translateY(0%)'
        })),
        state('out', style({
            'opacity': '0', 'visibility': 'hidden', 'transform': 'translateY(100%)'
        })),
        transition('in => out', [group([
                animate('200ms ease-in-out', style({
                    'opacity': '0'
                })),
                animate('200ms ease-in-out', style({
                    'transform': 'translateY(100%)'
                })),
                animate('200ms ease-in-out', style({
                    'visibility': 'hidden'
                }))
            ]
        )]),
        transition('out => in', [group([
                animate('200ms ease-in-out', style({
                    'visibility': 'visible'
                })),
                animate('200ms ease-in-out', style({
                    transform: 'translateY(0%)'
                })),
                animate('200ms ease-in-out', style({
                    'opacity': '1'
                }))
            ]
        )])
    ]);
