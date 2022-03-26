import { Currency } from 'common/types';

class Wallet {
  private title: string;
  private currecnyType: Currency;
  private balance: number;

  constructor(title: string, currencyType: Currency, initialBalance = 0.0) {
    this.title = title;
    this.currecnyType = currencyType;
    this.balance = initialBalance;
  }

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }
}

export default Wallet;
