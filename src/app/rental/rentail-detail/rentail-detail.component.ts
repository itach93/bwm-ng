import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'bwm-rentail-detail',
  templateUrl: './rentail-detail.component.html',
  styleUrls: ['./rentail-detail.component.scss']
})
export class RentailDetailComponent implements OnInit {

  rental: Rental;

  constructor(private route: ActivatedRoute, private rentalService: RentalService) { }

  ngOnInit() {
    // this.rental = new Rental();

    this.route.params.subscribe(
      (params) => {
        this.getRental(params['rentalId']);
      }
    );
  }

  getRental(rentalId: string) {
    this.rentalService.getRentalById(rentalId).subscribe(
      (rental: Rental) => {
        this.rental = rental;
      }
    );
  }

}
