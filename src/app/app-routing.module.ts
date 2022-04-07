import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PagePortfolioComponent } from './pages/page-portfolio/page-portfolio.component';

const routes: Routes = [
  { path: 'portfolio', component: PagePortfolioComponent },
  { path: '', component: PageLoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
