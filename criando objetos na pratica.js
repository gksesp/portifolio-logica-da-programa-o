class formaDebolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
    escrever(){
        console.log(`um delicioso bolo de ${this.saborDaMassa}com recheio de ${this.saborRecheio}`)
    }
    assar(){
        console.log("bolo assando de" + this.saborDaMassa)
    }
}

let bolinho = new formaDebolo("chocolate", "nutella")
let bolinhoPremium = new formatoDeBolo("baunilha", "morango")

bolinho.saborDaMassa = "floresta negra"

bolinho.escrever()
bolinhoPremium.escrever()
bolinhoPremium.assar()



console.log(bolinho.saborDaMassa)