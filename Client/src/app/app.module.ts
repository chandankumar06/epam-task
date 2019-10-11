import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { IssueComponent } from './issue/issue.component';
import { MetricComponent } from './metric/metric.component';
import { ProductfilterPipe } from './productfilter.pipe';
import { ProducttitlefilterPipe } from './producttitlefilter.pipe';
import { IssuetitlefilterPipe } from './issuetitlefilter.pipe';
import { IssuefilterPipe } from './issuefilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    IssueComponent,
    MetricComponent,
    ProductfilterPipe,
    ProducttitlefilterPipe,
    IssuetitlefilterPipe,
    IssuefilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
