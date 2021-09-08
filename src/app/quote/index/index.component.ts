import { Component, OnInit, ViewChild } from '@angular/core';

import { QuoteService } from '../quote.service';
import { Quote } from '../quote';
import { LazyLoadEvent } from 'primeng/api';
import { Paginator } from 'primeng/paginator';
import { Column } from '../../soci/column';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  datasource: Quote[] = [];
  quotes: Quote[] = [];
  pages: [];
  columns: Column[] = [];
  existingColumns: Column[] = [];
  defaultColumns: Column[] = [
    {header:'Created Date', field: 'created_at', type: 'date'},
    {header:'Quotation ID', field: 'quote_id', type: 'text'},
    {header:'Company Name', field: 'company', type: 'text'},
    {header:'Validity Date', field: 'validity_date', type: 'date'},
    {header:'Reason', field: 'cancelled_remarks', type: 'text'},
    {header:'Status', field: 'status', type: 'text'},
    {header:'Amount (MYR)', field: 'amount', type: 'numeric'},
  ];
  pageItems: number = 10;
  totalRecords:number;
  search_text: string = '';
  loading: boolean;
  
  constructor(public quoteService: QuoteService) { }
  
  ngOnInit(): void {
    this.quoteService.getAll(this.pageItems,this.search_text).subscribe(data=>{
      this.datasource = data['data'];
      this.quotes = data['data']['quotes']['data'];
      this.pages = data['data']['quotes']['links'];
      this.totalRecords = data['data']['quotes']['total'];
      this.columns = JSON.parse(data['data']['columnOrder']['column_order']);
      if(this.columns == null){
        this.columns = JSON.parse(JSON.stringify(this.defaultColumns));
      }
    })  
    this.loading = false;
  }
  
  deleteQuote(id){
    this.quoteService.delete(id).subscribe(res => {
         this.quotes = this.quotes.filter(item => item.id !== id);
         console.log('Quote deleted successfully!');
    })
  }

  getAll(){
    this.quoteService.getAll(this.pageItems,this.search_text).subscribe((data)=>{
      this.quotes = data['data']['quotes']['data'];
      this.pages = data['data']['quotes']['links'];
      this.totalRecords = data['data']['quotes']['total'];
    })  
  }

  onClick(url){
    this.quoteService.getPage(url,this.pageItems,this.search_text).subscribe((data)=>{
      this.quotes = data['data']['quotes']['data'];
      this.pages = data['data']['quotes']['links'];
    })  
  }

  columnOrder(event){
    this.quoteService.saveColumnOrder(event.columns,'quote')
  }

  // loadQuotations(event: LazyLoadEvent) {
  //   // this.loading = true;
  //   console.log(event.rows)
  //   setTimeout(() => {
  //     this.quoteService.getAll(this.pageItems,this.search_text).subscribe(data=>{
  //       this.datasource = data['data'];
        
  //       this.quotes = data['data']['total'];
  //       console.log(this.totalRecords);
  //       // this.quotes = this.datasource.slice(event.first, (event.first + event.rows));
  //       this.loading = false;
  //     })  
  //   }, 1000);
  // }

  test(event){
    console.log(event.filters)
  }

  paginate(event){
    console.log(event);
    this.pageItems = event.rows;
    let url = "http://idsmed-sales-funnel-api.test/api/quote?page="+(parseInt(event.page) + 1);
    this.onClick(url);
  }
}