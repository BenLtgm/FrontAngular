import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  private permissions: Array<string> = []

  constructor(private auth: AuthService) {
    this.auth.getAccessTokenSilently().subscribe((token) => {
      const data = jwtDecode(token)
      const rawData = JSON.parse(JSON.stringify(data))
      this.permissions = rawData?.permissions
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
