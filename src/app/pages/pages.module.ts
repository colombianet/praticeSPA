import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [HomeComponent, TeamComponent, AboutComponent, SearchComponent],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    RouterModule
  ]
})
export class PagesModule { }
