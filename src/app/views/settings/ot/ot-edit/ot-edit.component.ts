import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { OtService } from '../ot.service';

@Component({
  selector: 'app-ot-edit',
  templateUrl: './ot-edit.component.html',
  styleUrls: ['./ot-edit.component.scss']
})
export class OtEditComponent implements OnInit {
  @ViewChild('successModal') successModal : ModalDirective;
  
  form: FormGroup;
  id:any;
  alertBody: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public otService: OtService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.id = params.get('id');
        this.getData(params.get('id'));
      }
    });
    this.form =  this.formBuilder.group({
      title: '',
      value: ''
    });
  }

  getData(id) {
    this.otService.find(id).subscribe((data)=>{
      this.form.patchValue(data.data);
      console.log(data);
    })  
  }

  redirectPage(){
    this.router.navigateByUrl('settings/ot/index');
  }

  submit(){
    console.log(this.form.value);
    this.otService.update(this.form.value, this.id).subscribe(res => {
        this.alertBody = res.message || 'Updated Successfully';
        this.id = res.data.value;
        this.successModal.show();
    })
  }

}
