
import { Component } from '@angular/core';

import { HotelList } from './features/hotels/components/hotel-list/hotel-list';

@Component({

  selector: 'app-root',
  imports: [HotelList],
  templateUrl: './app.html',
  styleUrl: './app.css'


})
export class App {}
