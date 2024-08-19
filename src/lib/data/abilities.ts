import { techs, type Tech } from './techs';
import { incantations, type Incantation } from './incantations';

export type Ability = Tech | Incantation;
type AbilityMap = { [key: string]: Ability };
export const abilities: AbilityMap = {};
techs.forEach((tech) => {
	abilities[tech.id] = tech;
});
incantations.forEach((incantation) => {
	abilities[incantation.id] = incantation;
});
