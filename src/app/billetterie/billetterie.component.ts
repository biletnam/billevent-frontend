import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import Event from '../../billevent/Event'
import {ActivatedRoute} from "@angular/router";
import {BilleventApiService} from "../billevent-api.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-billetterie',
  templateUrl: './billetterie.component.html',
  styleUrls: ['./billetterie.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BilletterieComponent implements OnInit {

  event: Observable<Event>;

  constructor(
      private route: ActivatedRoute,
      private billeventApi: BilleventApiService
  ) {
  }

  ngOnInit() {
      this.loadEvent();
  }

    loadEvent() {
        const id: number = +this.route.snapshot.paramMap.get('id');
        this.event = this.billeventApi.getEvent(id);
    }
}