import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { RupeePipe }      from './pipes/rupee.pipe';
import { TruncatePipe }   from './pipes/truncate.pipe';
import { FilterPipe }     from './pipes/filter.pipe';

@NgModule({
  declarations: [AppComponent, RupeePipe, TruncatePipe, FilterPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
