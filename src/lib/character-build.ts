import { abilities, type Ability } from './data/abilities';
import { roles, type Role } from '$lib/data/roles';
import { characters } from '$lib/data/characters';
import { glimmerChart } from '$lib/data/glimmers';

export interface AbilityData {
	ability: Ability;
	learned: boolean;
	required: boolean;
}

export interface RoleData {
	role: Role;
	unlocked: boolean;
}

export function getAllRoles(
	characterId: string,
	learnableRoles: string[] = [],
	learnedAbilities: string[] = []
) {
	const roleData: RoleData[] = [];
	const character = characters.find((e) => e.id === characterId);
	const roleIds = [...learnableRoles, ...(character?.roles || [])];
	roleIds.forEach((roleId) => {
		const role = roles[roleId];
		if (role.type === 'character') {
			roleData.push({
				unlocked: true,
				role
			});
		} else {
			const unlocked = role.requiredTechs.every((ability) => learnedAbilities.includes(ability));
			roleData.push({
				unlocked,
				role
			});
		}
	});
	return roleData
		.map((r) => {
			const { type, id, role, description } = r.role;
			return {
				unlocked: r.unlocked,
				type,
				id,
				name: role,
				description
			};
		})
		.sort((a, b) => (a.name > b.name ? 1 : -1));
}

export function getAbilities(learnableRoles: string[] = [], learnedAbilities: string[] = []) {
	const requiredAbilities = Object.keys(getRequiredAbilities(learnableRoles));
	const abilitySet: Set<string> = new Set();
	requiredAbilities.forEach((id) => {
		abilitySet.add(id);
	});
	learnedAbilities.forEach((id) => {
		abilitySet.add(id);
	});
	const abilityData: AbilityData[] = [];
	abilitySet.forEach((id) => {
		const ability = abilities[id];
		const learned = learnedAbilities.includes(id);
		const required = requiredAbilities.includes(id);
		abilityData.push({
			ability,
			learned,
			required
		});
	});
	return abilityData;
}

type AbilityMap = { [key: string]: { id: string; name: string }[] };
export function getRequiredAbilities(learnableRoles: string[] = []) {
	const abilityMap: AbilityMap = {};
	learnableRoles.forEach((roleId) => {
		const role = roles[roleId];
		if (role && role.type !== 'character') {
			role.requiredTechs.forEach((abilityId) => {
				if (!abilityMap[abilityId]) {
					abilityMap[abilityId] = [];
				}
				abilityMap[abilityId].push({ id: roleId, name: role.role });
			});
		}
	});
	return abilityMap;
}

export function getRemainingAbilities(roles: string[], learnedAbilities: string[]) {
	const requiredAbilities = getRequiredAbilities(roles);
	const remainingAbilities = Object.keys(requiredAbilities).filter(
		(e) => !learnedAbilities.includes(e)
	);
	return remainingAbilities
		.map((abilityId) => abilities[abilityId])
		.map((ability) => {
			const glimmers = glimmerChart[ability.id];
			let glimmeredFrom: { weaponType?: string; abilities: Ability[] }[] = [];
			if (glimmers) {
				glimmeredFrom = glimmers.glimmers
					.filter((e) => e.abilityIds.length)
					.map((e) => ({
						weaponType: e.weaponType,
						abilities: e.abilityIds.map((id) => abilities[id])
					}));
			}
			const roles = requiredAbilities[ability.id];
			return { ...ability, glimmeredFrom, roles };
		})
		.sort((ab1, ab2) => {
			if (ab1.type === ab2.type) {
				return ab1.name > ab2.name ? 1 : -1;
			}
			return ab1.type > ab2.type ? 1 : -1;
		});
}

export function getCharacterInfo(characterId: string, roles: string[], learnedAbilities: string[]) {
	const character = characters.find((c) => c.id === characterId);
	if (!character) {
		throw new Error(`Character not found: ${characterId}`);
	}
	const allRoles = getAllRoles(characterId, roles, learnedAbilities);

	const remainingAbilities = getRemainingAbilities(roles, learnedAbilities);
	return { id: character.id, name: character.name, roles: allRoles, remainingAbilities };
}
export type CharacterInfo = ReturnType<typeof getCharacterInfo>;
