import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { Linha } from '../classes/Linha';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  linha: Linha;

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit() {
  }

}