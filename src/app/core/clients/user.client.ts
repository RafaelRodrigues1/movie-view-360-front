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
  endPoint: enviroment.endPoints.user
})
export class UserClient extends HttpClientGeneric<User> {

  saveClient(user: User): Observable<User> {
    return this.post({
      path: '',
      body: {
        user: JSON.stringify(user)
      },
      aplicationType: 'application/json'
    })
  }
}
