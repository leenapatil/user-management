import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SearchStringPipe } from '../../pipes/search-string.pipe';
import { User } from '../../model/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userData;
  searchString: string = '';
  modalRef?: BsModalRef;
  editProfileForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
    private modalService: BsModalService, private searchStringPipe: SearchStringPipe,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userData = this.activatedRoute.snapshot.data.userData.users.map((user) => {
      let userObj = {};
      userObj['id'] = user['id'];
      userObj['firstName'] = user['firstName'];
      userObj['lastName'] = user['lastName'];
      userObj['email'] = user['email'];
      userObj['birthDate'] = user['birthDate'];
      userObj['phone'] = user['phone'];
      return userObj;
    })
    this.editProfileForm = this.fb.group({
      id: [''],
      firstName: [''],
      lastName: [''],
      email: [''],
      birthDate: [''],
      phone: ['']
    });
  }

  openModal(targetModal, user) {
    console.log('User =>', user);
    this.modalRef = this.modalService.show(targetModal);
    this.editProfileForm.patchValue({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      birthDate: user.birthDate,
      phone: user.phone
    });
  }

  onSubmit() {
    const data = this.editProfileForm.getRawValue();
    console.log("res:", this.editProfileForm.getRawValue());
    this.userData.map((user) => {
      if (user['id'] === data['id']) {
        user['firstName'] = data['firstName'];
        user['lastName'] = data['lastName'];
        user['email'] = data['email'];
        user['birthDate'] = data['birthDate'];
        user['phone'] = data['phone'];
        return user;
      }
    });
    this.modalRef?.hide();
  }
}
