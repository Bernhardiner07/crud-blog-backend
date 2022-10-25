import { CanActivate, ExecutionContext, forwardRef, Inject, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { User } from "src/domain/models/user.entity";
import { UserService } from "src/infrastructure/services/users.service";


@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    @Inject(forwardRef(() => UserService))
    private userService: UserService) { }
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler()); //gets the role from role decorator
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    console.log(request);
    const user: User = request.user;
    console.log(user);
    return this.userService.findOneByUsername(user.username)
      .then((user: User) => {
        const hasRole = () => roles.indexOf(user.role) > -1; //checks if user role is in roles Array from role that is provided by the reflector
        let hasPermission: boolean = false;
        console.log(user);
        console.log(roles.indexOf(user.role));
        if (hasRole()) {
          console.log("User " + user.username + " with role " + user.role + " authorized");
          hasPermission = true;
        }
        return user && hasPermission;
      }
      )
  }
}