import Character from './maincharacter';

class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.setParams();
  }
}

export default Magician;
