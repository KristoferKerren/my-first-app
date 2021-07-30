import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecretWordComponent } from './secret-word/secret-word.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ // All components to include
    AppComponent,
    SecretWordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // The root component
})
export class AppModule { }
