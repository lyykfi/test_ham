import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogPageComponent } from './components/pages/catalog-page/catalog-page.component';

const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogPageComponent,
  }, {
    path: 'catalog/:id',
    component: CatalogPageComponent,
  }, {
    path: '',
    redirectTo: '/catalog',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
