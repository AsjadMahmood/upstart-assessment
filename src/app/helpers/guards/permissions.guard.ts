import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let access: boolean = false;

    this.authService.permissions.pipe(tap((permissions: string[]) => {
      if (state.url.includes('/admin/users')) {
        access = permissions.includes('user.read')
      }
      else if (state.url.includes('/admin/posts')) {
        access = permissions.includes('catalog.read')
      }
    })).subscribe((res) => { })

    return access;
  }

}