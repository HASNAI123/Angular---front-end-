import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovalCreateComponent } from './approval-create/approval-create.component';
import { ApprovalIndexComponent } from './approval-index/approval-index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ProductsComponent } from './products/products.component';
import { RevisionComponent } from './revision/revision.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'quote', redirectTo: 'quote/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: ':quoteId/view', component: ViewComponent },
  { path: 'create', component: CreateComponent },
  { path: 'create/product', component: ProductsComponent },
  { path: ':quoteId/edit', component: EditComponent },
  { path: 'approval', component:ApprovalIndexComponent },
  { path: 'approval/:quoteId', component:ApprovalCreateComponent },
  { path: 'revision', component:RevisionComponent },
  { path: 'revision/:quoteId', component:EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteRoutingModule { }
