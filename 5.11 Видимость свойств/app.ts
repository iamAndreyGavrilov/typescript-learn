class Vehicle {
  public make: string;

  private damages: string[];
  private _model: string;
  #price: number;

  protected run: number;

  set model(m: string) {
    this._model = m;
    this.#price = 100;
  }

  get model() {
    return this._model;
  }

  isPriceVehicle(v: Vehicle) {
    return this.#price === v.#price;
  }

  addDamage(damage: string) {
    this.damages.push(damage);
  }
}

class EuroTruck extends Vehicle {
  setRun(km: number) {
    //run - (protected)
    this.run = km / 0.62;
    //this.damages - нельзя (private)
  }
}

new Vehicle();
new EuroTruck();
