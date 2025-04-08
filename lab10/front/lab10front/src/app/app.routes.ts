
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { VacanciesComponent } from './vacancies/vacancies.component';

export const routes: Routes = [
  { path: '', component: CompanyComponent },
  { path: 'companies/:id/vacancies', component: VacanciesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


