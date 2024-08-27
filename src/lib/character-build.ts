import { abilities, type Ability } from './data/abilities';
import { roles, characterRoles, type Role } from '$lib/data/roles';
import { characters } from '$lib/data/characters';

export interface AbilityData {
	ability: Ability;
	learned: boolean;
	required: boolean;
}

export interface RoleData {
	role: Role;
	unlocked: boolean;
}

export class CharacterBuild {
	characterRoles: string[];

	constructor(
		public character: string,
		private learnableRoles: string[] = [],
		private learnedAbilities: string[] = [],
		private requiredAbilities: string[] = []
	) {
		this.characterRoles = characterRoles.filter((e) => e.character === character).map((e) => e.id);
	}

	get roles() {
		const roleData: RoleData[] = [];
		const roleIds = [...this.learnableRoles, ...this.characterRoles];
		roleIds.forEach((roleId) => {
			const role = roles[roleId];
			if (role.type === 'character') {
				roleData.push({
					unlocked: true,
					role
				});
			} else {
				const unlocked = role.requiredTechs.every((ability) =>
					this.learnedAbilities.includes(ability)
				);
				roleData.push({
					unlocked,
					role
				});
			}
		});
		return roleData;
	}

	addRole(roleId: string) {
		this.learnableRoles.push(roleId);
	}

	removeRole(roleId: string) {
		this.learnableRoles = this.learnableRoles.filter((id) => id !== roleId);
	}

	get abilities() {
		const abilitySet: Set<string> = new Set();
		this.requiredAbilities.forEach((id) => {
			abilitySet.add(id);
		});
		this.learnedAbilities.forEach((id) => {
			abilitySet.add(id);
		});
		const abilityData: AbilityData[] = [];
		abilitySet.forEach((id) => {
			const ability = abilities[id];
			const learned = this.learnedAbilities.includes(id);
			const required = this.requiredAbilities.includes(id);
			abilityData.push({
				ability,
				learned,
				required
			});
		});
		return abilityData;
	}

	addAbility(abilityId: string) {
		this.learnedAbilities.push(abilityId);
	}

	removeAbility(abilityId: string) {
		this.learnedAbilities = this.learnedAbilities.filter((id) => id !== abilityId);
	}
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
	return roleData;
}

export function getAbilities(learnableRoles: string[] = [], learnedAbilities: string[] = []) {
	const requiredAbilities = getRequiredAbilities(learnableRoles);
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

export function getRequiredAbilities(learnableRoles: string[] = []) {
	const abilitySet: Set<string> = new Set();
	learnableRoles.forEach((roleId) => {
		const role = roles[roleId];
		if (role && role.type !== 'character') {
			role.requiredTechs.forEach((ability) => {
				abilitySet.add(ability);
			});
		}
	});
	return Array.from(abilitySet);
}

export function getRemainingAbilities(roles: string[], learnedAbilities: string[]) {
	const requiredAbilities = getRequiredAbilities(roles);
	const remainingAbilities = requiredAbilities.filter((e) => !learnedAbilities.includes(e));
	return remainingAbilities
		.map((abilityId) => abilities[abilityId])
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
	return { character, roles: allRoles, remainingAbilities };
}
export type CharacterInfo = ReturnType<typeof getCharacterInfo>;
