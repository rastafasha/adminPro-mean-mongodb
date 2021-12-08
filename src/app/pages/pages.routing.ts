import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AuthGuard } from '../guards/auth.guard';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios/usuarios.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        canActivate:[AuthGuard],
        children: [
            { path: '', component: DashboardComponent, data:{tituloPage:'Dashboard'} },
            { path: 'progress', component: ProgressComponent, data:{tituloPage:'Progress Bar'} },
            { path: 'grafica1', component: Grafica1Component, data:{tituloPage:'Grafica 1'} },
            { path: 'account-settings', component: AccountSettingComponent, data:{tituloPage:'Ajustes de Cuenta'} },
            { path: 'promesas', component: PromesasComponent, data:{tituloPage:'Promesas'} },
            { path: 'rxjs', component: RxjsComponent, data:{tituloPage:'Rxjs'} },
            { path: 'perfil', component: PerfilComponent, data:{tituloPage:'Perfil'} },

            //mantenimientos
            { path: 'usuarios', component: UsuariosComponent, data:{tituloPage:'Usuarios de App'} },
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


