import { Gender } from "src/app/shared/models/gender";
import { HttpClientGeneric } from "./http.client";
import { ClientResource } from "../annotations/client.resource";
import { enviroment } from "src/enviroments/enviroment";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
@ClientResource({
  endPoint: enviroment.endPoints.gender
})
export class GenderClient extends HttpClientGeneric<Gender> {

  getAllGenders(): Observable<Gender[]> {
    return this.getList({path: ''})
  }
}
