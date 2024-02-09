import { UseQueryResult } from '@tanstack/react-query';
import React from 'react';
import { AxiosResponse } from 'axios';
import {Filter, ListQueryParams} from "@/types/list-query-params";

export type TableProps = {
    query: (
        params: ListQueryParams
    ) => UseQueryResult<AxiosResponse>;
    id?: string;
    filters?: Filter;
    sort?: {column: string, direction: string}
};

export interface FilterProps {
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
    onFilterChange: React.Dispatch<React.SetStateAction<string>>;
}

export interface ProductBrandsProps  {
    smart: boolean;
    lamborghini: boolean;
    ferrari: boolean;
    volkswagen: boolean;
    mercedes: boolean;
    tesla: boolean;
    fiat: boolean;
    land: boolean;
    nissan: boolean;
    maserati: boolean;
    bugatti: boolean;
    aston: boolean;
    chevrolet: boolean;
    honda: boolean;
    rolls: boolean;
    audi: boolean;
    cadillac: boolean;
    kia: boolean;
    hyundai: boolean;
    polestar: boolean;
    mini: boolean;
    mazda: boolean;
    dodge: boolean;
    bmw: boolean;
    jeep: boolean;
    ford: boolean;
}

export interface ProductModelsProps  {
    cts: boolean;
    roadster: boolean;
    taurus: boolean;
    jetta: boolean;
    fortwo: boolean;
    A4: boolean;
    'F-150': boolean;
    Corvette: boolean;
    Ranchero: boolean;
    Colorado: boolean;
    911: boolean;
    Altima: boolean;
    Mercielago: boolean;
    Land: boolean;
    Model: boolean;
    Accord: boolean;
    Volt: boolean;
    Mustang: boolean;
    Golf: boolean;
    Malibu: boolean;
    Roadster: boolean;
    Alpine: boolean;
    Wrangler: boolean;
    Caravan: boolean;
    Silverado: boolean;
    Explorer: boolean;
    ATS: boolean;
    Jetta: boolean;
    2: boolean;
    Cherokee: boolean;
    1: boolean;
    LeBaron: boolean;
    V90: boolean;
    Charger: boolean;
    Camry: boolean;
    Spyder: boolean;
    Expedition: boolean;
    Impala: boolean;
    Fiesta: boolean;
    Cruze: boolean;
    Camino: boolean;
    Element: boolean;
    XTS: boolean;
}

export interface FilterProps {
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
    onFilterChange: React.Dispatch<React.SetStateAction<string>>;
}

export interface IdProps {
    id: string
}

export interface Product {
    id: string
    name: string
    price: string
    image: string
}
