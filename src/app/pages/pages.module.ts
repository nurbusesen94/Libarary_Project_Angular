import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardComponent],
  imports: [BrowserModule, RouterModule],
  providers: [],
  exports: [DashboardComponent],
})
export class PagesModule {}
