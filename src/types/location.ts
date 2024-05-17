export const defaultLocation: Location = {
  place_id: 3223223,
  lat: "28.6139",
  lon: "77.2088",
  display_name: "New Delhi",
  icon: "https://nominatim.openstreetmap.org/ui/mapicons/poi_boundary_administrative.p.20.png",
};

export type Location = {
  place_id: number;
  lat: string;
  lon: string;
  display_name: string;
  icon?: string;
  address?: {
    city: string;
    district: string;
    state: string;
    country: string;
    country_code: string;
  };
};
