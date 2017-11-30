import 'rxjs/add/operator/distinctUntilChanged';
import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { store } from './app.store';
import { Router } from '@angular/router';
import { countPathSelector, postsPathSelector } from './store/app.selectors';
import {
  IAppState,
  createPingAction,
  createIncrementAction,
  createFetchJsonAction,
  createDecrementAction,
  createResetAction
} from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @select(countPathSelector) count$;
  @select(postsPathSelector) posts$;
  title = 'app';

  constructor(private ngRedux: NgRedux<IAppState>) {}

  fireTestAction() {
    this.ngRedux.dispatch(createPingAction('PING'));
  }

  increment() {
    this.ngRedux.dispatch(createIncrementAction());
  }

  decrement() {
    this.ngRedux.dispatch(createDecrementAction());
  }

  reset() {
    this.ngRedux.dispatch(createResetAction());
  }

  fetchJson() {
    this.ngRedux.dispatch(createFetchJsonAction());
  }

}
