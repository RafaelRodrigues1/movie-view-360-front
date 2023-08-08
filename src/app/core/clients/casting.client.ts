import { Observable } from 'rxjs';
import { Cast } from "src/app/shared/models/cast";
import { HttpClientGeneric } from "./http.client";
import { ClientResource } from "../annotations/client.resource";
import { enviroment } from "src/enviroments/enviroment";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
@ClientResource({
  endPoint: enviroment.endPoints.casting
})
export class CastingClient extends HttpClientGeneric<Cast> {

  autocomplete(query: string): Observable<Cast[]>  {
    return this.getList({
      path: '/autocomplete', parameters: `?query=${query}`
    })
  }
}
