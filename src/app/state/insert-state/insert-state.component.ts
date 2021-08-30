import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { State } from '../../shared/models';
import { StateService } from './../services';

@Component({
  selector: 'app-insert-state',
  templateUrl: './insert-state.component.html',
  styleUrls: ['./insert-state.component.css'],
})
export class InsertStateComponent implements OnInit {
  @ViewChild('formState') formState!: NgForm;
  state: State = {};
  constructor(private stateService: StateService, private router: Router) {}

  ngOnInit(): void {
    this.state = new State();
  }

  insert(): void {
    if (this.formState.form.valid) {
      this.stateService.insert(this.state);
      this.router.navigate(['/state']);
    }
  }
}
