import Character from './maincharacter';

class Bowman extends Character {
  constructor(name, type) {
    super(name, type);
    this.setParams();
  }
}

export default Bowman;
