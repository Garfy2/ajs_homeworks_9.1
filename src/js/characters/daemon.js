// import Character from './character';
import MathCharacter from '../math';

export default class Daemon extends MathCharacter {
  constructor(name, type = 'daemon') {
    super(name, type);
    // this.attack = 10;
    this.defence = 40;
  }
}