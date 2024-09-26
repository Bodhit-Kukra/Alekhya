import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { CategoriesComponent } from './categories/categories.component';
import { SculpturesComponent } from './sculptures/sculptures.component';
import { PotteryComponent } from './pottery/pottery.component';
import { TextileComponent } from './textile/textile.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'header', 
        component: HeaderComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'paintings',
        component: PaintingsComponent
    },
    {
        path: 'categories',
        component: CategoriesComponent
    },
    {
        path: 'sculptures',
        component: SculpturesComponent
    },
    {
        path: 'pottery',
        component: PotteryComponent
    },
    {
        path: 'textile',
        component: TextileComponent
    },
    { 
        path: '', 
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
