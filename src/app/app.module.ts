import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user.effects';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { TestComponent } from './test/test.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {reducer, userFeatureKey} from './user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    AppRoutingModule,
    StoreModule.forFeature(userFeatureKey, reducer),
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([UserEffects])
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
