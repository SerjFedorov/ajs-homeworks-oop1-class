import Character from './maincharacter';

class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    this.setParams();
  }
}

export default Swordsman;
