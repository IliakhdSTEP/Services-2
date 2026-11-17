
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../models/hotel';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) {}

  getHotels() {
    return this.http.get<{ data: { items: Hotel[] } }>(
      'https://bookingapi.stepacademy.ge/api/hotels?Take=12&Page=1'
    );
  }

  getRooms(id: number) {
    return this.http.get<{ data: { items: Room[] } }>(
      `https://bookingapi.stepacademy.ge/api/rooms/${id}?Take=12&Page=1`
    );
  }
}
