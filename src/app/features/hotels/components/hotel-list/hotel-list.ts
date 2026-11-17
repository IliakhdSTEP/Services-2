
import { Component, OnInit, signal } from '@angular/core';
import { HotelService } from '../../services/hotel';
import { Hotel } from '../../models/hotel';
import { HotelRooms } from '../hotel-rooms/hotel-rooms';

@Component({
  selector: 'app-hotel-list',
  imports: [HotelRooms],
  templateUrl: './hotel-list.html',
  styleUrl: './hotel-list.css'
})
export class HotelList implements OnInit {

  hotels = signal<Hotel[]>([]);
  selectedHotel = signal<number | null>(null);

  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    this.hotelService.getHotels().subscribe(res => {
      this.hotels.set(res.data.items);
    });
  }

selectHotel(id: number) {
  console.log('Selected hotel:', id);
  this.selectedHotel.set(id);
}
}
