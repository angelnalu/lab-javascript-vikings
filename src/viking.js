// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage){
    this.health -= damage;
    return this.health > 0 ?
    `${this.name} has received ${damage} points of damage` :
    `${this.name} has died in act of combat`
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage){
    this.health -= damage;
    return this.health > 0 ?
    `A Saxon has received ${damage} points of damage` :
    `A Saxon has died in combat`
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking){
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  }
  vikingAttack(){
    const randomViking = randomElement(this.vikingArmy);
    const randomSaxon = randomElement(this.saxonArmy);
    const result = randomSaxon[0].receiveDamage(randomViking[0].strength);

    if(randomSaxon[0].health <= 0){
      this.saxonArmy.splice(randomSaxon[1], 1);
    }
    return result;
  }
  saxonAttack(){
    const randomViking = randomElement(this.vikingArmy);
    const randomSaxon = randomElement(this.saxonArmy);
    const result = randomViking[0].receiveDamage(randomSaxon[0].strength);

    if(randomViking[0].health <= 0){
      this.vikingArmy.splice(randomSaxon[1], 1);
    }
    return result;
  }
 showStatus(){
  if(this.saxonArmy == 0){
    return "Vikings have won the war of the century!"
  } else if(this.vikingArmy == 0){
    return "Saxons have fought for their lives and survived another day..."
  }else{
    return "Vikings and Saxons are still in the thick of battle."
  }
 }
}

  const randomElement = (array) => {
  const index = Math.floor(Math.random() * array.length)
  return [array[index]];

}