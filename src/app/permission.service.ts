import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  private permissions: Array<string> = []

  constructor(private auth: AuthService) {
    this.auth.user$.subscribe(user => {
      if (!user) {
        return;
      }

      this.auth.getAccessTokenSilently().subscribe({
        next: (token) => {
          const data: { permissions: string[] } = JSON.parse(atob(token.split(".")[1]))
          this.permissions = data.permissions;
        }
      })
    })
  }

  public getPermissions() {
    return this.permissions
  }

  public hasPermission(permission: string) {
    const values: string | undefined = this.permissions.find((value) => value == permission)
    return values != undefined;
  }
}
