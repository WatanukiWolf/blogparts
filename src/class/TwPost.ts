import type { Account } from './Account';

class NamedProps {
    text: string;
}

export class TwPost {
    private user_: Account;
    private text_: string = '';

    constructor(props: NamedProps) {
	this.text_ = props.text;
    }

    get user(): Account {
	return this.user_;
    }

    get text(): string {
	return this.text_;
    }

    set text(value: string) {
	this.text_ = value;
    }

    get paragraphs(): string[] {
	return this.text.split('\n');
    }

    attachAccount(user: Account) {
	this.user_ = user;
    }
}
