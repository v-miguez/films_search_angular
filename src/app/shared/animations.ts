import { animate, style, transition, trigger } from '@angular/animations'

export const Animations = {
  menuTrigger: trigger('inOutAnimation', [
    transition(':enter', [
      style({
        left: -400,
        opacity: 0.5,
        top: 0,
        position: 'absolute',
        'z-index': 999
      }),
      animate('0.3s ease-out', style({ left: 0, opacity: 1, 'z-index': 999 }))
    ]),
    transition(':leave', [
      style({
        left: 0,
        opacity: 1,
        top: 0,
        position: 'absolute',
        'z-index': 999
      }),
      animate('0.3s ease-in', style({ left: -400, opacity: 0, 'z-index': 999 }))
    ])
  ])
}
