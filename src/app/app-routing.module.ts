import { AuthGuard } from './providers/auth-guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './auth/welcome/welcome.component';
import { DeviceSetUpPage } from './device-setup/device-setup.page';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: '',
    component:WelcomeComponent,
    //canActivate:[AuthGuard]
  },
  {
    path: 'home',
   //component:HomePage,
   loadChildren:()=>import('./home/home.module').then(m=>m.HomePageModule),
   // canActivate:[AuthGuard]
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
