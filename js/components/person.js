export class personSet{
  constructor (id, name){
    this.id = id,
    this.name = name
  }
  printPersonData(){
    r(this.name)
  }
}

const psD = new personSet(20, "北斗神拳")
psD.printPersonData()