
// Framework.
//
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Dependencies.
//
import { PrimeNgModule } from '../sharedModule/prime-ng.module';
import { IconModule } from '@coreui/icons-angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Local.
//
import { DmsRoutingModule } from './dms-routing.module';
import { CalendarModule } from './components/calendar/calendar.module';
import { providersForEnvironment } from './services/providers';
import { DmsComponent } from './dms.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { BookingFormComponent } from './components/bookings/booking-form/booking-form.component';
import { FormComponent } from './components/bookings/form/form.component';
import { MainAssetComponent } from './components/bookings/main-asset/main-asset.component';
import { IdentifyComponent } from './components/bookings/main-asset/identify/identify.component';
import { BookingDetailComponent } from './components/bookings/booking-entity/booking-detail/booking-detail.component';
import { StatusLogComponent } from './components/bookings/booking-entity/status-log/status-log.component';
import { OpportunitySummaryComponent } from './components/bookings/opportunity-summary/opportunity-summary.component';
import { BookingEntityComponent } from './components/bookings/booking-entity/booking-entity.component';
import { BookingApprovalComponent } from './components/bookings/booking-approval/booking-approval.component';
import { ApprovalsComponent } from './components/approvals/approvals.component';
import { ExpandPanelComponent } from './components/widgets/expand-panel/expand-panel.component';
import { EquipmentTableComponent } from './components/bookings/main-asset/equipment-table/equipment-table.component';
import { OpportunityBookingFormComponent } from './components/bookings/opportunity-booking-form/opportunity-booking-form.component';
import { OpportunityFormComponent } from './components/bookings/opportunity-booking-form/opportunity-form/opportunity-form.component';
import { DeclineReasonComponent } from './components/bookings/booking-approval/decline-reason/decline-reason.component';

@NgModule({
  declarations: [
    DmsComponent,
    InventoryComponent,
    BookingsComponent,
    BookingEntityComponent,
    BookingApprovalComponent,
    ApprovalsComponent,
    BookingFormComponent,
    FormComponent,
    MainAssetComponent,
    BookingDetailComponent,
    OpportunitySummaryComponent,
    StatusLogComponent,
    MainAssetComponent,
    ExpandPanelComponent,
    EquipmentTableComponent,
    IdentifyComponent,
    OpportunityBookingFormComponent,
    OpportunityFormComponent,
    DeclineReasonComponent
  ],

  imports: [
    CommonModule,
    DmsRoutingModule,
    CalendarModule,

    // Dependencies.
    PrimeNgModule,
    IconModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ...providersForEnvironment
  ]
})
export class DmsModule { }
