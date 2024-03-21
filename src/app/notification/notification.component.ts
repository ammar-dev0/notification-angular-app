import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder, AbstractControl} from "@angular/forms";
import {NotificationService} from "../services/notification.service";
import {Supervisor} from "../models/supervisor";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  supervisors: Supervisor[] = [];

  selectedSupervisor: any;

  submitted = false;

  myForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
    phoneNumber: new FormControl('', [Validators.email]),
    email: new FormControl('', [Validators.pattern('^(1\\s?)?(\\d{3}|\\(\\d{3}\\))[\\s\\-]?\\d{3}[\\s\\-]?\\d{4}$')]),
    supervisorDTO: new FormControl('', [Validators.required])
  });

  constructor(private formBuilder: FormBuilder, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.getAllSupervisors().subscribe(
      (data: Supervisor[]) => this.supervisors = data
    );

    this.myForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      email: ['', Validators.email],
      phoneNumber: ['', Validators.pattern('^(1\\s?)?(\\d{3}|\\(\\d{3}\\))[\\s\\-]?\\d{3}[\\s\\-]?\\d{4}$')],
      supervisorDTO: [null, Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }

  onSubmit() {
    const notification: Notification = this.myForm.value;
    this.notificationService.createNotification(notification).subscribe(
      data => {
        alert('Notification created successfully!');
        this.myForm.reset();
        this.submitted = false;
      },
      error => {
        alert('Failed to create notification. Please try again.');
      }
    )
  }
}
