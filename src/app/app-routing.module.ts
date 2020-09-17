import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule)},
  {path:'products', loadChildren: () => import('./feature/products/products.module').then(m => m.ProductsModule)},
  {path:'blogs', loadChildren: () => import('./feature/blogs/blogs.module').then(m => m.BlogsModule)},
  {path:'dealership', loadChildren: () => import('./feature/dealership/dealership.module').then(m => m.DealershipModule)},
  {path:'contact', loadChildren: () => import('./feature/contact/contact.module').then(m => m.ContactModule)},
  {path:'**', component: NotfoundpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }