import Character from './maincharacter';

class Deamon extends Character {
  constructor(name, type) {
    super(name, type);
    this.setParams();
  }
}

export default Deamon;
