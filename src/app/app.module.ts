import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroService } from './service/hero.service';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './component/hero-search/hero-search.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({
      appId: 'toh-universal'
    }),
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroesComponent,
    HeroDetailComponent,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
