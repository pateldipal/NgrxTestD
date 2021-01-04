import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserAppState} from '../user.reducer';
import {Store} from '@ngrx/store';
import {userSelector} from '../user.selectors';
import {Observable} from 'rxjs';
import {loadUsers, LoadUsersAction} from '../user.actions';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  constructor(public http: HttpClient, private store: Store<UserAppState>) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getApi(){
    this.store.dispatch(LoadUsersAction.loadUsers());
  }
}
