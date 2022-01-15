
class AccountProps {
    id: string;
    name: string;
    profile: string;
}

export default class Account {
    private id_: string;
    private name_: string;
    private profile_: string;

    constructor(prop: AccountProps) {
	this.id_ = prop.id;
	this.name_ = prop.name;
	this.profile_ = prop.profile;
    }

    get id(): string {
	return this.id_;
    }

    set id(value: string) {
	this.id_ = value;
    }

    get name(): string {
	return this.name_;
    }

    set name(value: string) {
	this.name_ = value;
    }

    get profile(): string {
	return this.profile_;
    }

    set profile(value: string) {
	this.profile_ = value;
    }
}
