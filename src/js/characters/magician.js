import MathCharacter from '../math';

export default class Magician extends MathCharacter {
  constructor(name, type = 'magician') {
    super(name, type);
    // this.attack = 10;
    this.defence = 40;
  }
}