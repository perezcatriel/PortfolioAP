import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutentificacionService } from './autentificacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private autenticacionServicio: AutentificacionService) {
    intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{

      var currentUser=this.autenticacionServicio.usuarioAutentificado;
      if(currentUser && currentUser.accessToken) {
        req=req.clone({
          setHeaders:{
            Authorization: `Bearer ${currentUser.accessToken}`
          }
        })
      }
      console.log("Interceptor esta corriendo " + JSON.stringify(currentUser));
      return next.handle(req);
    }
  }
}
