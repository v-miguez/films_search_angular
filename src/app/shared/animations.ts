import { animate, state, style, transition, trigger } from '@angular/animations'

export const Animations = {
  menuTrigger: trigger('inOutAnimation', [
    transition(':enter', [
      style({ left: -400, opacity: 0.5, top: 0, position: 'absolute' }),
      animate('0.3s ease-out', style({ left: 0, opacity: 1 }))
    ]),
    transition(':leave', [
      style({ left: 0, opacity: 1, top: 0, position: 'absolute' }),
      animate('0.3s ease-in', style({ left: -400, opacity: 0 }))
    ])
  ])
}
