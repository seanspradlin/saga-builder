import { abilities, type Ability } from './data/abilities';
import { roles, characterRoles, type Role } from '$lib/data/roles';

interface AbilityData {
	ability: Ability;
	learned: boolean;
	required: boolean;
}

interface RoleData {
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
