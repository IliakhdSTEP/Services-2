
export interface Hotel {
  id: number;
  name: string;
  starRating: number;
  thumbnail: string;
  averageRating:   number;
  reviewCount: number;
  roomCount:number;

  address: {
    id: number;
    hotelId: number;
    street: string;
    city: string;
    country: string;

    zipCode: string;
    state: string | null; 


  };
}
