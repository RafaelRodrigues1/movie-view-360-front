import { Injectable } from '@angular/core';
import { EndPoint } from '../models/endpoint';
import { HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  buildResourceUrl(endPoint: EndPoint): string {
    return `${this.getProtocol(endPoint)}${this.getPath(endPoint)}`
  }

  getHeaders(applicationType?: string): HttpHeaders {
    const headers: HttpHeaders = new HttpHeaders()
    if(applicationType) headers.append('Content-Type', applicationType ? applicationType : 'application/json');
    return headers
  }

  responseMap(response: any, mapper: any): any {
    if (mapper)
      return mapper(response);

    return response
  }

  private getPath(endPoint: EndPoint): string {
    let url: string = ''
    url = endPoint.path
    url = endPoint.context ? `${url}/${endPoint.context}` : url
    return url
  }

  private getProtocol(endPoint: EndPoint): string {
    return endPoint.protocol ? `${endPoint.protocol}://` : 'http://'
  }
}
