import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './templates/home-page/home-page.component';
import { ErrorPageComponent } from './templates/error-page/error-page.component';
import { MenuComponent } from './templates/menu/menu.component';
import { ServicesComponent } from './templates/services/services.component';
import { BlogComponent } from './templates/blog/blog.component';
import { AboutComponent } from './templates/about/about.component';
import { ContactComponent } from './templates/contact/contact.component';

const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'error', component: ErrorPageComponent},
    {path: '**', redirectTo: 'error', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
