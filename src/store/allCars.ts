import { Audi } from '../objects/audi';
import { audi } from '../objects/audi';
import { bmw } from '../objects/bmw';
import { mercedes } from '../objects/mercedes';
import { porsche } from '../objects/porsche';


export const allCarsCombined: Audi[] = audi.concat(bmw, mercedes, porsche);