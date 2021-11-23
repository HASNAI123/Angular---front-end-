import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './http-interceptors/auth-interceptor';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DialogComponent } from './components/shared/dialog/dialog.component';
import { QuoteModule } from './quote/quote.module';
import { OpportunityModule } from './views/opportunity/opportunity.module';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { DatePipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { SociModule } from './soci/soci.module';
import { SettingsModule } from './views/settings/settings.module';
import { ContactModule } from './views/contact/contact.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule }  from 'primeng/checkbox';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { ChartModule } from 'primeng/chart';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextModule } from 'primeng/inputtext';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { ManagerViewModule } from './views/manager-view/manager-view.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './views/customers/create/create.component';
import { IndexComponent } from './views/customers/index/index.component';
import { EditComponent } from './views/customers/edit/edit.component';
import { CustomersModule } from './views/customers/customers.module';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    HttpClientModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    QuoteModule,
    SettingsModule,
    OpportunityModule,
    AutoCompleteModule,
    CalendarModule,
    AccordionModule,
    TableModule,
    SociModule,
    ContactModule,
    MatSlideToggleModule,
    DashboardModule,
    TabViewModule,
    CheckboxModule,
    ProgressBarModule,
    DropdownModule,
    ChartModule,
    SplitButtonModule,
    InputNumberModule,
    SelectButtonModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    ManagerViewModule,
    NgbModule,
    InputTextModule,
    CustomersModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    DialogComponent,
    // CreateComponent,
    // IndexComponent,
    // EditComponent,
    // LogoutComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    },
    IconSetService,
    DatePipe,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
