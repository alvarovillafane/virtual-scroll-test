import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScrollingModule  as  ExperimentalScrollingModule} from '@angular/cdk-experimental/scrolling';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    ExperimentalScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
