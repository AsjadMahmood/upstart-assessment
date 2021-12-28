export interface User {
    id: number;
    email: string;
    name: string;
    phone: string;
    username: string;
    website: string;
    address: Address;
    company: Company;
}

export interface Address {
    city: string;
    street: string;
    suite: string;
    geo: Geo;
    zipcode: string;
}

export interface Company {
    name: string,
    catchPhrase: string;
    bs: string;
}

export interface Geo {
    lat: string,
    lng: string
}