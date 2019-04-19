import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.css']
})
export class GstEditComponent implements OnInit {

  business: any = {};
  angForm: FormGroup;
  ID = 'id';

  constructor(private route: ActivatedRoute, private router: Router, private bs: BusinessService, private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
        person_name: ['', Validators.required ],
        business_name: ['', Validators.required ],
        business_gst_number: ['', Validators.required ]
      });
    }


  ngOnInit() {
    this.route.params.subscribe(params => {
        this.bs.editBusiness(params[this.ID]).subscribe(res => {
          this.business = res;
      });
    });
  }

  updateBusiness(personName, businessName, businessGstNumber) {
    this.route.params.subscribe(params => {
       this.bs.updateBusiness(personName, businessName, businessGstNumber, params[this.ID]).subscribe(res => {
        console.log('Updated');
        this.router.navigate(['business']);
      });
    });
  }
}
