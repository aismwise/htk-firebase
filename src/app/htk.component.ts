import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'htk-app',
  templateUrl: 'htk.component.html',
  styleUrls: ['htk.component.css']
})
export class HtkAppComponent {
  items: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
  }
}
