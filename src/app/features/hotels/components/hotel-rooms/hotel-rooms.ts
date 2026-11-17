
import { Component, Input, OnChanges, signal } from '@angular/core';
import { HotelService } from '../../services/hotel';
import { Room } from '../../models/room';

@Component({
  selector: 'app-hotel-rooms',
  imports: [],
  templateUrl: './hotel-rooms.html',
  styleUrl: './hotel-rooms.css'
})
export class HotelRooms implements OnChanges {

  @Input() hotelId = 0;

  rooms = signal<Room[]>([]);

  constructor(private hotelService: HotelService) { }

  ngOnChanges() {
    if (this.hotelId) {
      this.rooms.set([]);

      this.hotelService.getRooms(this.hotelId).subscribe(res => {
        console.log('Rooms received:', res.data.items);
        this.rooms.set(res.data.items);
      });
    }
  }
}
