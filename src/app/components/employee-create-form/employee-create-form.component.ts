import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EempManageService } from 'src/app/services/empService/eemp-manage.service';

@Component({
  selector: 'app-employee-create-form',
  templateUrl: './employee-create-form.component.html',
  styleUrls: ['./employee-create-form.component.scss']
})
export class EmployeeCreateFormComponent implements OnInit {

  employeeForm: FormGroup;
  avatars = [
    { name: 'Avatar1', imageUrl: "/assets/avatars/avatar1.jpeg" },
    { name: 'Avatar2', imageUrl: "/assets/avatars/avatar2.jpeg" },
    { name: 'Avatar3', imageUrl: "/assets/avatars/avatar3.jpeg" }
  ];


  employee: any = {};
  isEditMode: boolean = false;

  employeeId: number | null = null;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EempManageService

  ) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      companyName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      contactNo: ['', Validators.required],
      designation: ['', Validators.required],
      avatar: ['', Validators.required]
    });
   }

   ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    
    if (id !== null) {
      this.employeeId = parseInt(id);
  
      if (this.employeeId) {
        this.isEditMode = true;
        this.employee = this.employeeService.getEmployeeById(this.employeeId);
        console.log(this.employee);
  
        this.employeeForm.patchValue({
          name: this.employee.name,
          companyName: this.employee.companyName,
          emailId: this.employee.emailId,
          contactNo: this.employee.contactNo,
          designation: this.employee.designation,
          avatar: {
            name: this.employee.avatar.name,
            imageUrl : this.employee.avatar.imageUrl
          }
        });
      }
    } else {
      this.employeeId = null;
      this.isEditMode = false;
    }
  }

  onSubmit(): void {
    if(this.isEditMode){
      let formData = this.employeeForm.value;

      let employeeData = {...formData, id:this.employeeId}

      this.employeeService.updateEmployee(employeeData);
      this.router.navigate(['/employees']);
    } else {
      if (this.employeeForm.valid) {
        const formData = this.employeeForm.value;

        console.log('Employee Data:', formData);
  
        this.employeeService.addEmployee(formData);
        
        this.router.navigate(['/employees']);
      }
    }
  }

  goback(){
    this.router.navigate(['/employees']);
  }

}
