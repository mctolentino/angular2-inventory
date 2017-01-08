import {FormGroup, AbstractControl, FormBuilder, Validators, FormControl} from "@angular/forms";
import {Component} from "@angular/core";

@Component({
  selector: 'demo-form-with-explicit-validations',
  template: `
  <div class="ui raised segment">
     <h2 class="ui header">Demo Form: Sku with Builder</h2>
     <div *ngIf="!sku.valid" class="ui error message">SKU is invalid</div>
     <div *ngIf="sku.hasError('required')" class="ui error message">SKU is required</div>
     <div *ngIf="!myForm.valid" class="ui error message">Form is invalid</div>
     <div *ngIf="sku.hasError('invalidSku')" class="ui error message">SKU must begin with <span>123</span></div>
     
     <div *ngIf="productName" class="ui info message">
        The product name is {{productName}}
     </div>
   
     <form [formGroup]="myForm" 
           (ngSubmit)="onSubmit(myForm.value)"
           class="ui form">
 
       <div class="field" [class.error]="!sku.valid && sku.touched">
         <label for="skuInput">SKU</label>
         <input type="text" 
                id="skuInput" 
                placeholder="SKU"
                [formControl]="sku">
       </div>
       
       <div class="field" [class.error]="!sku.valid && sku.touched">
         <label for="productNameInput">Product Name</label>
         <input type="text" 
                id="productNameInput" 
                placeholder="Product name"
                [formControl]="myForm.get('productName')"
                [(ngModel)]="productName">
       </div>
        
       <button type="submit" class="ui button">Submit</button>
     </form> 
   </div>
`
})

export class DemoFormWithExplicitValidations {
  myForm: FormGroup;
  sku: AbstractControl;
  productName: string;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.compose([Validators.required, this.skuValidator])],
      'productName': ['']
    });

    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to: ', value);
      }
    );

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form changed to: ', form);
      }
    );

  }

  skuValidator(control: FormControl): {[s: string]: boolean} {
    if (!control.value.match(/^123/)) {
      return {invalidSku: true};
    }
  }
}
