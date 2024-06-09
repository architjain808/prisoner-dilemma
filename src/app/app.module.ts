import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/components/home/home.component';
import { FightGraphComponent } from 'src/components/fight-graph/fight-graph.component';

@NgModule({
  declarations: [AppComponent, HomeComponent,FightGraphComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
