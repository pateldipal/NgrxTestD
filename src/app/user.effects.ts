import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoadUsersAction} from './user.actions';
import {mergeMap, map} from 'rxjs/operators';
import {Action} from '@ngrx/store';



@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  loadUserData$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadUsersAction.loadUsers),
      mergeMap(value => {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
      }),
      map((data: any) => LoadUsersAction.loadUsersSuccess({ data }))
    )
  );
}
