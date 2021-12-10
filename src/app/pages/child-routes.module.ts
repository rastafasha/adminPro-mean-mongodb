import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { HospitalesComponent } from './mantenimientos/hospitales/hospitales.component';
import { MedicosComponent } from './mantenimientos/medicos/medicos.component';
import { MedicoComponent } from './mantenimientos/medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AdminGuard } from '../guards/admin.guard';


const childRoutes: Routes = [
  { path: '', component: DashboardComponent, data:{tituloPage:'Dashboard'} },
            { path: 'account-settings', component: AccountSettingComponent, data:{tituloPage:'Ajustes de Cuenta'} },
            { path: 'buscar/:termino', component: BusquedaComponent, data:{tituloPage:'Busquedas'} },
            { path: 'grafica1', component: Grafica1Component, data:{tituloPage:'Grafica 1'} },
            { path: 'perfil', component: PerfilComponent, data:{tituloPage:'Perfil'} },
            { path: 'progress', component: ProgressComponent, data:{tituloPage:'Progress Bar'} },
            { path: 'promesas', component: PromesasComponent, data:{tituloPage:'Promesas'} },
            { path: 'rxjs', component: RxjsComponent, data:{tituloPage:'Rxjs'} },

            //mantenimientos
            { path: 'hospitales', component: HospitalesComponent, data:{tituloPage:'Mantenimiento de Hospitales '} },
            { path: 'medicos', component: MedicosComponent, data:{tituloPage:'Mantenimiento de Medicos '} },
            { path: 'medico/:id', component: MedicoComponent, data:{tituloPage:'Mantenimiento de Medico '} },

            //rutas de admin
            { path: 'usuarios', canActivate: [ AdminGuard ], component: UsuariosComponent, data:{tituloPage:'Mantenimiento de Usuarios '} },
]

@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
    exports: [ RouterModule ]
})
export class ChildRoutesModule { }
