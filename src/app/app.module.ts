import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { IAppState } from './store';
import { store } from './app.store';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(appRef: ApplicationRef, ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);

    // ngRedux.subscribe(() => appRef.tick());
    ngRedux.subscribe(() => setTimeout(() => appRef.tick()));
  }
}
