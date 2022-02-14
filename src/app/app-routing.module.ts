import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionFiveComponent } from './components/Pages/section-five/section-five.component';

const routes: Routes = [
  {path:'five',component:SectionFiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
