import Character from './maincharacter';

class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    this.setParams();
  }
}

export default Zombie;
