export interface TourPackage {
    id: string;
    title: string;
    destination: string;
    image: string;
    duration: string;
    price: number;
    departureDate: string;
    seatsAvailable: number;
    isPopular?: boolean;
  }