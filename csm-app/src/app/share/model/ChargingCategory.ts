import { ChargingModel } from "./charging";

export class ChargingCategoryModel{
    links?: string[];
    icon?: string[];
    name?: string;
    id?:number;
    background?: string[];
    isDeleted?: boolean;
    listCharging?: ChargingModel[];
  }