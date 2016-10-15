import {RouterModule,Routes} from "@angular/router";
import { HomeComponent } from "./home-component.component";
import { UserComponent } from "./user/user.component";
import {USER_ROUTES} from "./user/user.routes";
import {LoadedRouterConfig} from "@angular/router/src/router_config_loader";

// const APP_ROUTES: Routes = [
//     { path: 'user/:id', component: UserComponent},
//     { path: 'user/:id', component: UserComponent, children: USER_ROUTES},
//     // { path:'user', redirectTo : '/user/1', pathMatch: 'full'},
//     { path: '', component: HomeComponent },
//     { path:'**', redirectTo : '/user/1', pathMatch: 'full'}
// ];

const APP_ROUTES: Routes = [
    { path:'user', redirectTo : '/user/1', pathMatch: 'full'},
    { path: 'user/:id', component: UserComponent},
    { path: 'user/:id', component: UserComponent, children: USER_ROUTES},
    { path: '', component: HomeComponent },
    { path:'**', redirectTo : '/user/1', pathMatch: 'full'}
];

export  const  Routing = RouterModule.forRoot(APP_ROUTES);