import Character from './maincharacter';

class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.setParams();
  }
}

export default Undead;
