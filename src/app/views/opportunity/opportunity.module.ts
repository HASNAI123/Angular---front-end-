import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OpportunityRoutingModule } from './opportunity-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { IconModule } from '@coreui/icons-angular';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TabViewModule} from 'primeng/tabview';

import { ListOpportunityComponent } from './list-opportunity.component';
import { NewOpportunityComponent } from './new-opportunity.component';
import { EditOpportunityComponent } from './edit-opportunity.component';
import { OpportunityBookingComponent } from './opportunity-booking/opportunity-booking.component';

import { IndexComponent } from '@app/fps/components/fps-form/index/index.component';

@NgModule({
  imports: [    
    CommonModule,
    OpportunityRoutingModule,
    TabsModule,
    TableModule,
    PaginatorModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    IconModule,
    ModalModule,
    MatAutocompleteModule,
    ProgressbarModule,
    MatSlideToggleModule,

    TabViewModule
  
  ],
  declarations: [
    NewOpportunityComponent,
    EditOpportunityComponent,
    ListOpportunityComponent,
    OpportunityBookingComponent,
    IndexComponent  
  ]
})
export class OpportunityModule { }