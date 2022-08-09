class Vehicle {
  public make: string;

  private damages: string[];
  private _model: string;

  protected run: number;

  set model(m: string) {
    this._model = m;
  }

  get model() {
    return this._model;
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
