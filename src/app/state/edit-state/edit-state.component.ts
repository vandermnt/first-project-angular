import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from '../../shared/models';
import { StateService } from '../services';

@Component({
  selector: 'app-edit-state',
  templateUrl: './edit-state.component.html',
  styleUrls: ['./edit-state.component.css'],
})
export class EditStateComponent implements OnInit {
  @ViewChild('formState') formState!: NgForm;
  state: State = {};

  constructor(
    private stateService: StateService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
