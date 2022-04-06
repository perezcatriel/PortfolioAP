import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AutentificacionService } from './autentificacion.service';

@Injectable({
  providedIn: 'root',
})
export class GuardService implements CanActivate {
  constructor(
    private autenticacionServicio: AutentificacionService,
    private rutas: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | Boolean {
    let currentUser = this.autenticacionServicio.usuarioAutentificado;
    if (currentUser && currentUser.accessToken) {
      return true;
    } else {
      this.rutas.navigate(['login']);
      return false;
    }
  }
}
