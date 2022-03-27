import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormMomentsComponent } from './components/form-moments/form-moments.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'form', component: FormMomentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
