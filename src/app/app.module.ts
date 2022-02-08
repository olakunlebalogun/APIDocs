import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './components/default/default.component';
import { IndexComponent } from './components/Pages/index/index.component';
import { SectionOneComponent } from './components/Pages/section-one/section-one.component';
import { SectionTwoComponent } from './components/Pages/section-two/section-two.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SectionThreeComponent } from './components/Pages/section-three/section-three.component';
import { SectionFourComponent } from './components/Pages/section-four/section-four.component';
import { SectionFiveComponent } from './components/Pages/section-five/section-five.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    IndexComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent,
    SectionFiveComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
