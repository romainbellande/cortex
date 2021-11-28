import { OAWExclude } from "./oaw-exclude";
import { OAWLang } from "./oaw-lang";
import { OAWUnits } from "./oaw-units.interface";

export interface OneCallPayload {
  latitude: number;
  longitude: number;
  exclude?: OAWExclude[];
  units?: OAWUnits;
  lang?: OAWLang;
}
