import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { FoodModel } from './food.model';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodDashboardComponent implements OnInit {
  FoodModellObj : FoodModel = new FoodModel();
  FoodModelData !: any;
  formValue !: FormGroup;
  constructor(private formbuilder: FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name : [''],
      price : [''],
      class : [''],
      note : [''],
    })
    this.getFood();
  }
  postEmployeeDetails(){
    this.FoodModellObj.name = this.formValue.value.name;
    this.FoodModellObj.price = this.formValue.value.price;
    this.FoodModellObj.class = this.formValue.value.class;
    this.FoodModellObj.note = this.formValue.value.note;
    this.api.postFood(this.FoodModellObj)
    .subscribe(res=>{
      console.log(res);
      alert("Food added successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getFood();
    },
    err=>{
      alert("Somthing went wrong")
    })
  }
  getFood(){
    this.api.getFood()
    .subscribe(res=>{
      this.FoodModelData = res;
    })
  }
}
