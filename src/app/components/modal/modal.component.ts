import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';


@Component({ templateUrl: 'modal.component.html' })
export class ModalComponent implements OnInit, OnDestroy {
  modalForm: FormGroup;
  user: User = null;
  submitted = false;
  isEdit = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {
    if (this.route.snapshot.paramMap.get('id') !== 'null') {
      this.isEdit = true;
    }
    this.getUser();
  }

  private getUser() {
    this.user = this.usersService.getUserByGuid(this.route.snapshot.paramMap.get('id'));
    if (!this.user && this.isEdit) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.modalForm = this.formBuilder.group({
      first: [this.isEdit ? this.user.name.first : '', Validators.required],
      last: [this.isEdit ? this.user.name.last : '', Validators.required],
      age: [this.isEdit ? this.user.age : '', Validators.required],
      email: [this.isEdit ? this.user.email : '', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.modalForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.modalForm.invalid) {
      return;
    }

    const user = new User({
      guid: this.isEdit ? this.user.guid : randomGuid(),
      name: {
        first: this.f.first.value,
        last: this.f.last.value
      },
      age: this.f.age.value,
      email: this.f.email.value
    });
    if (this.isEdit) {
      this.usersService.updateUser(user);
    } else {
      this.usersService.createUser(user);
    }
    this.router.navigate(['/']);
  }

  ngOnDestroy() { }
}

function randomGuid(): string {
  const u = Date.now().toString(16) + Math.random().toString(16) + '0'.repeat(16);
  const guid = [u.substr(0, 8), u.substr(8, 4), '4000-8' + u.substr(13, 3), u.substr(16, 12)].join('-');
  return guid;
}
