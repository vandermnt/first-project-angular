import { Component, Input, OnInit } from '@angular/core';
import { People } from 'src/app/shared/models';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-people',
  templateUrl: './modal-people.component.html',
  styleUrls: ['./modal-people.component.css'],
})
export class ModalPeopleComponent implements OnInit {
  @Input() people: People = {};

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
