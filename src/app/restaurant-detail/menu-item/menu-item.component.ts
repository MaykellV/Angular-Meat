import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';
import { trigger, transition, animate, style, state } from '@angular/animations';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('menuItemAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-20px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  menuItemState = 'ready' 

  @Input() menuItem: MenuItem
  @Output() add= new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
    this.add.emit(this.menuItem);
  }
}
