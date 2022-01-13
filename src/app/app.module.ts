import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterDashboardComponent } from './character-dashboard/character-dashboard.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    CharacterDetailComponent,
    CharacterDashboardComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
  exports: [
    CharacterDetailComponent,
    CharacterDashboardComponent
  ]
})
export class AppModule { }
