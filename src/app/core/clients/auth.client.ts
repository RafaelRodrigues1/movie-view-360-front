import { Observable } from 'rxjs';
import { User } from "src/app/shared/models/user";
import { HttpClientGeneric } from "./http.client";
import { ClientResource } from "../annotations/client.resource";
import { enviroment } from "src/enviroments/enviroment";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@ClientResource({
  endPoint: enviroment.endPoints.auth
})
export class AuthClient extends HttpClientGeneric<string> {

  login(user: User): Observable<string> {
    return this.post({
      path: '/login',
      body: user,
      aplicationType: 'application/json'
    }, false)
  }
}
