import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestOneComponent } from './test-one/test-one.component';
import { TestSCAMModule } from './test-scam/test-scam.module';
import { TestStandaloneComponent } from './test-standalone/test-standalone.component';

@NgModule({
  declarations: [AppComponent, TestOneComponent],
  imports: [BrowserModule, TestSCAMModule, TestStandaloneComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
