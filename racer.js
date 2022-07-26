export class Racer {
    constructor (name, emoji , number, distance) {
    this.name = name
    this.emoji = emoji
    this.number = number
    this.distance = distance
    }


get Template(){
    return `
        <div class="col-12 bg-info p-3 m-3 fs-5">
            <span id="1">${this.emoji}</span> 
        </div>
    `
}
}