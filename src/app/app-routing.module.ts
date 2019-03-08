import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { InvalidComponent } from './invalid/invalid.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent
  },
  { 
    path: 'demo1', 
    component: Demo1Component
  },
  { 
    path: 'demo2', 
    component: Demo2Component
  },
  {
    path: 'invalid',
    component: InvalidComponent
  },
  { path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  { path: '**', 
    redirectTo: '/invalid', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
