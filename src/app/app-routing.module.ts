import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DefaultModule } from './layouts/default/default.module';


const routes: Routes = [
  {
    path: '', component: DefaultComponent,
    children: [{
      path: '', redirectTo: '/main', pathMatch: 'full'
    },
    {
      path: 'main', loadChildren: () =>
        import('./pages/main/main.module').then(
          m => m.MainModule)
    }]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ useHash: true }),
    DefaultModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
