class FreeAccount {
  constructor(name) {
    this.name = name;
    this.cost = 0;
  }
}

class StandardAccount {
  constructor(name) {
    this.name = name;
    this.cost = 50;
  }
}

class PremiumAccount {
  constructor(name) {
    this.name = name;
    this.cost = 150;
  }
}

class AccountFactory {
  // static list = {
  //   free: FreeAccount,
  //   standard: StandardAccount,
  //   premium: PremiumAccount
  // };

  create(name, type = 'free') {
    const Account =
      AccountFactory.list[type] || AccountFactory.list.free;
    const account = new Account(name);
    account.type = type;
    account.details = function() {
      console.log(
        `${this.name}'s ${this.type} account, ${this.cost}$`
      );
    };

    return account;
  }
}
AccountFactory.list = {
  free: FreeAccount,
  standard: StandardAccount,
  premium: PremiumAccount
};

const accountFactory = new AccountFactory();

const accounts = [
  accountFactory.create('Bob', 'standard'),
  accountFactory.create('Bill', 'premium'),
  accountFactory.create('John', 'free'),
  accountFactory.create('Tom')
];

accounts.forEach(account => {
  account.details();
});
