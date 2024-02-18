// hari dan mama mulinma weapon object eka hadanna

const weapon = {
  name: "sniper",
  maxAmmo: 10,
  currentAmmo: 10,
  damage: 100,
  shoot,
  reload,
  visualize,
  viewWeapon,
};

function shoot(bullets) {
  let string = "shooting...";
  if (this.currentAmmo >= bullets) this.currentAmmo -= bullets;
  else if (this.currentAmmo > 0) {
    this.currentAmmo = 0;
  } else {
    string = "no ammo";
  }
  return string;
}

function viewWeapon() {
  console.log(this);
}

function reload() {
  console.log("let's reload...");
  this.currentAmmo = this.maxAmmo;
  console.log("reloaded...");
}

function visualize() {
  let output = `${this.name} has ammo: [${"|".repeat(
    this.currentAmmo
  )}${" ".repeat(this.maxAmmo - this.currentAmmo)}]  ${this.currentAmmo}/${
    this.maxAmmo
  }`;
  console.log(output);
}

function spacing() {
  console.log();
}

weapon.visualize();
spacing();

console.log(weapon.shoot(10));
spacing();

weapon.visualize();
spacing();
weapon.reload();
spacing();

weapon.visualize();
spacing();
