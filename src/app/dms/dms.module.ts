
// Framework.
//
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Dependencies.
//
import { PrimeNgModule } from '../sharedModule/prime-ng.module';
import { IconModule } from '@coreui/icons-angular';
import { ModalModule } from 'ngx-bootstrap/modal';

// Local.
//
import { DmsRoutingModule } from './dms-routing.module';
import { providersForEnvironment } from './services/providers';
import { DmsComponent } from './dms.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { ApprovalsComponent } from './components/approvals/approvals.component';
import { CalendarComponent } from './components/calendar/calendar.component';


@NgModule({
  declarations: [
    DmsComponent,
    InventoryComponent,
    BookingsComponent,
    ApprovalsComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    DmsRoutingModule,

    // Dependencies.
    PrimeNgModule,
    IconModule,
    ModalModule
  ],
  providers: [
    ...providersForEnvironment
  ]
})
export class DmsModule { }
