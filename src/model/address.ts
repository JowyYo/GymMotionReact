import { geolocalitation } from "./gelocalitation";

export interface address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: geolocalitation
}