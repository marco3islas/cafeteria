import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AboutComponent} from "./components/about/about.component";
import {ContactoComponent} from "./components/contacto/contacto.component";
import {GaleriaComponent} from "./components/galeria/galeria.component";
import {MenuComponent} from "./components/menu/menu.component";

const app_routes: Routes = [
    { path: 'home', component: AboutComponent},
    { path: 'about', component: AboutComponent},
    { path: 'menu', component: MenuComponent},
    { path: 'galeria', component: GaleriaComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(app_routes, { useHash: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}
