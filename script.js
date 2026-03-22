const buildingTypes = [
  {
    id: "townhall",
    name: "Town Hall",
    goldCost: 220,
    elixirCost: 0,
    health: 420,
    kind: "core",
    description: "Main base building.",
  },
  {
    id: "goldmine",
    name: "Gold Mine",
    goldCost: 120,
    elixirCost: 0,
    health: 180,
    kind: "resource",
    income: { gold: 16, elixir: 0, interval: 2500 },
    description: "Generates gold over time.",
  },
  {
    id: "archertower",
    name: "Archer Tower",
    goldCost: 150,
    elixirCost: 40,
    health: 220,
    kind: "defense",
    damage: 16,
    range: 240,
    cooldown: 900,
    description: "Ranged defense against attackers.",
  },
  {
    id: "barracks",
    name: "Barracks",
    goldCost: 130,
    elixirCost: 50,
    health: 220,
    kind: "training",
    description: "Required to train troops.",
  },
  {
    id: "elixircollector",
    name: "Elixir Collector",
    goldCost: 90,
    elixirCost: 30,
    health: 180,
    kind: "resource",
    income: { gold: 0, elixir: 14, interval: 2500 },
    description: "Generates elixir over time.",
  },
  {
    id: "wizardtower",
    name: "Wizard Tower",
    goldCost: 180,
    elixirCost: 90,
    health: 200,
    kind: "defense",
    damage: 24,
    range: 180,
    cooldown: 1300,
    description: "Heavy splash-style defense.",
  },
  {
    id: "herohall",
    name: "Hero Hall",
    goldCost: 240,
    elixirCost: 140,
    health: 260,
    kind: "hero",
    description: "Unlocks powerful hero units.",
  },
];

const enemyLayout = [
  { id: "enemy-archer", name: "Enemy Archer Tower", health: 170, damage: 10, range: 220, cooldown: 950, x: 74 },
  { id: "enemy-wizard", name: "Enemy Wizard Tower", health: 210, damage: 15, range: 180, cooldown: 1250, x: 170 },
  { id: "enemy-townhall", name: "Enemy Town Hall", health: 520, damage: 0, range: 0, cooldown: 0, x: 282 },
];

const raidTemplates = [
  [
    { id: "enemy-archer", name: "Enemy Archer Tower", health: 170, damage: 10, range: 220, cooldown: 950, x: 74 },
    { id: "enemy-wizard", name: "Enemy Wizard Tower", health: 210, damage: 15, range: 180, cooldown: 1250, x: 170 },
    { id: "enemy-townhall", name: "Enemy Town Hall", health: 520, damage: 0, range: 0, cooldown: 0, x: 282 },
  ],
  [
    { id: "enemy-cannon", name: "Enemy Cannon", health: 190, damage: 14, range: 160, cooldown: 850, x: 88 },
    { id: "enemy-archer-2", name: "Enemy Archer Tower", health: 165, damage: 11, range: 220, cooldown: 900, x: 176 },
    { id: "enemy-townhall", name: "Enemy Town Hall", health: 560, damage: 0, range: 0, cooldown: 0, x: 286 },
  ],
  [
    { id: "enemy-wizard-2", name: "Enemy Wizard Tower", health: 220, damage: 18, range: 180, cooldown: 1200, x: 104 },
    { id: "enemy-mortar", name: "Enemy Mortar", health: 240, damage: 22, range: 210, cooldown: 1450, x: 196 },
    { id: "enemy-townhall", name: "Enemy Town Hall", health: 600, damage: 0, range: 0, cooldown: 0, x: 292 },
  ],
];

const troopTypes = [
  {
    id: "barbarian",
    name: "Barbarian",
    cost: 60,
    health: 110,
    damage: 20,
    speed: 42,
    range: 28,
    attackCooldown: 750,
    lootBonus: 1,
    description: "Balanced melee fighter for early raids.",
  },
  {
    id: "archer",
    name: "Archer",
    cost: 70,
    health: 75,
    damage: 16,
    speed: 48,
    range: 120,
    attackCooldown: 700,
    lootBonus: 1,
    description: "Long range and quick shots.",
  },
  {
    id: "goblin",
    name: "Goblin",
    cost: 55,
    health: 68,
    damage: 14,
    speed: 72,
    range: 24,
    attackCooldown: 500,
    lootBonus: 2,
    description: "Fast raider that steals extra loot.",
  },
  {
    id: "hogrider",
    name: "Hog Rider",
    cost: 110,
    health: 150,
    damage: 26,
    speed: 66,
    range: 26,
    attackCooldown: 850,
    lootBonus: 1,
    description: "Heavy hitter that charges defenses.",
  },
  {
    id: "dragon",
    name: "Dragon",
    cost: 160,
    health: 240,
    damage: 38,
    speed: 36,
    range: 140,
    attackCooldown: 1200,
    lootBonus: 1,
    description: "Slow but strong flying unit.",
  },
  {
    id: "rootrider",
    name: "Root Rider",
    cost: 190,
    health: 300,
    damage: 40,
    speed: 34,
    range: 34,
    attackCooldown: 1050,
    lootBonus: 1,
    description: "Heavy bruiser that pushes forward with huge health.",
  },
  {
    id: "ramrider",
    name: "Ram Rider",
    cost: 180,
    health: 210,
    damage: 34,
    speed: 64,
    range: 32,
    attackCooldown: 780,
    lootBonus: 1,
    description: "Fast mounted attacker that slams into defenses.",
  },
];

const heroTypes = [
  {
    id: "barbarianking",
    name: "Barbarian King",
    cost: 220,
    health: 340,
    damage: 42,
    speed: 42,
    range: 30,
    attackCooldown: 900,
    lootBonus: 1,
    description: "Tanky melee hero with crushing damage.",
  },
  {
    id: "archerqueen",
    name: "Archer Queen",
    cost: 240,
    health: 250,
    damage: 36,
    speed: 44,
    range: 170,
    attackCooldown: 700,
    lootBonus: 1,
    description: "Long-range hero that picks off defenses safely.",
  },
  {
    id: "bossbandit",
    name: "Boss Bandit",
    cost: 260,
    health: 220,
    damage: 48,
    speed: 74,
    range: 32,
    attackCooldown: 650,
    lootBonus: 3,
    description: "Concept hero that charges fast and steals huge loot.",
  },
];

const state = {
  gold: 480,
  elixir: 260,
  troops: {
    barbarian: 0,
    archer: 0,
    goblin: 0,
    hogrider: 0,
    dragon: 0,
    rootrider: 0,
    ramrider: 0,
  },
  heroes: {
    barbarianking: 0,
    archerqueen: 0,
    bossbandit: 0,
  },
  selectedUnitGroup: "troop",
  selectedTroop: "barbarian",
  selectedHero: "barbarianking",
  selectedBuilding: null,
  deployMode: false,
  villageTiles: Array.from({ length: 15 }, (_, index) => ({ tileId: index, building: null })),
  placedBuildings: [],
  battleTroops: [],
  enemyDefenses: enemyLayout.map((defense) => ({
    ...defense,
    currentHealth: defense.health,
    cooldownLeft: 0,
  })),
  raidActive: false,
  lastTick: performance.now(),
  gameOver: false,
  villageDirty: true,
  shopDirty: true,
};

const goldValue = document.getElementById("goldValue");
const elixirValue = document.getElementById("elixirValue");
const troopValue = document.getElementById("troopValue");
const enemyHealthValue = document.getElementById("enemyHealthValue");
const buildingShop = document.getElementById("buildingShop");
const villageGrid = document.getElementById("villageGrid");
const playerDefenseLane = document.getElementById("playerDefenseLane");
const enemyDefenseLane = document.getElementById("enemyDefenseLane");
const battleLane = document.getElementById("battleLane");
const battleMessage = document.getElementById("battleMessage");
const troopRoster = document.getElementById("troopRoster");
const heroRoster = document.getElementById("heroRoster");
const attackButton = document.getElementById("attackButton");
const deployTroopButton = document.getElementById("deployTroopButton");
const selectionHint = document.getElementById("selectionHint");

function getBuildingType(id) {
  return buildingTypes.find((building) => building.id === id);
}

function getTroopType(id) {
  return troopTypes.find((troop) => troop.id === id);
}

function getHeroType(id) {
  return heroTypes.find((hero) => hero.id === id);
}

function getSelectedUnitType() {
  return state.selectedUnitGroup === "hero" ? getHeroType(state.selectedHero) : getTroopType(state.selectedTroop);
}

function getSelectedUnitCount() {
  return state.selectedUnitGroup === "hero" ? state.heroes[state.selectedHero] : state.troops[state.selectedTroop];
}

function getTotalTroops() {
  return Object.values(state.troops).reduce((sum, count) => sum + count, 0)
    + Object.values(state.heroes).reduce((sum, count) => sum + count, 0);
}

function createRandomBase() {
  const template = raidTemplates[Math.floor(Math.random() * raidTemplates.length)];
  return template.map((defense) => {
    const variance = defense.id === "enemy-townhall" ? 80 : 35;
    const bonusHealth = Math.floor(Math.random() * variance);
    return {
      ...defense,
      health: defense.health + bonusHealth,
      currentHealth: defense.health + bonusHealth,
      cooldownLeft: 0,
    };
  });
}

function canAfford(building) {
  return state.gold >= building.goldCost && state.elixir >= building.elixirCost;
}

function setMessage(message) {
  battleMessage.textContent = message;
}

function updateSelectionHint() {
  if (state.deployMode) {
    selectionHint.textContent = `Deploy mode active: click the battle lane to send ${getSelectedUnitType().name}.`;
    return;
  }

  if (!state.selectedBuilding) {
    selectionHint.textContent = `No building selected. Current unit: ${getSelectedUnitType().name}.`;
    return;
  }

  const building = getBuildingType(state.selectedBuilding);
  selectionHint.textContent = `Selected: ${building.name}. Click an empty village tile to place it.`;
}

function renderShop() {
  buildingShop.innerHTML = "";

  buildingTypes.forEach((building) => {
    const button = document.createElement("button");
    button.className = `shop-button${state.selectedBuilding === building.id ? " selected" : ""}`;
    button.disabled = !canAfford(building);
    button.innerHTML = `
      <span class="shop-name">
        <span>${building.name}</span>
        <span>${building.kind}</span>
      </span>
      <span class="cost-line">Gold ${building.goldCost} | Elixir ${building.elixirCost}</span>
      <span class="cost-line">${building.description}</span>
    `;
    button.addEventListener("click", () => {
      state.selectedBuilding = building.id;
      state.deployMode = false;
      state.shopDirty = true;
      updateSelectionHint();
      render();
    });
    buildingShop.appendChild(button);
  });
}

function renderTroopRoster() {
  troopRoster.innerHTML = "";

  troopTypes.forEach((troop) => {
    const card = document.createElement("div");
    card.className = `troop-card${state.selectedUnitGroup === "troop" && state.selectedTroop === troop.id ? " selected" : ""}`;
    card.innerHTML = `
      <div class="troop-head">
        <span>${troop.name}</span>
        <span>x${state.troops[troop.id]}</span>
      </div>
      <p class="troop-meta">Cost ${troop.cost} Elixir | DMG ${troop.damage} | HP ${troop.health}</p>
      <p class="troop-meta">${troop.description}</p>
    `;

    const trainButton = document.createElement("button");
    trainButton.className = "action-button";
    trainButton.textContent = `Train ${troop.name}`;
    trainButton.dataset.troopId = troop.id;
    trainButton.disabled = state.gameOver;
    trainButton.addEventListener("click", () => trainTroop(troop.id));

    const selectButton = document.createElement("button");
    selectButton.className = "action-button accent";
    selectButton.textContent = state.selectedUnitGroup === "troop" && state.selectedTroop === troop.id ? "Selected" : `Select ${troop.name}`;
    selectButton.dataset.troopId = troop.id;
    selectButton.disabled = state.gameOver;
    selectButton.addEventListener("click", () => {
      state.selectedUnitGroup = "troop";
      state.selectedTroop = troop.id;
      state.shopDirty = true;
      renderDynamic();
      renderInteractive();
    });

    card.appendChild(trainButton);
    card.appendChild(selectButton);
    troopRoster.appendChild(card);
  });
}

function renderHeroRoster() {
  heroRoster.innerHTML = "";

  heroTypes.forEach((hero) => {
    const card = document.createElement("div");
    card.className = `troop-card${state.selectedUnitGroup === "hero" && state.selectedHero === hero.id ? " selected" : ""}`;
    card.innerHTML = `
      <div class="troop-head">
        <span>${hero.name}</span>
        <span>x${state.heroes[hero.id]}</span>
      </div>
      <p class="troop-meta">Cost ${hero.cost} Elixir | DMG ${hero.damage} | HP ${hero.health}</p>
      <p class="troop-meta">${hero.description}</p>
    `;

    const trainButton = document.createElement("button");
    trainButton.className = "action-button";
    trainButton.textContent = `Train ${hero.name}`;
    trainButton.dataset.heroId = hero.id;
    trainButton.disabled = state.gameOver;
    trainButton.addEventListener("click", () => trainHero(hero.id));

    const selectButton = document.createElement("button");
    selectButton.className = "action-button accent";
    selectButton.textContent = state.selectedUnitGroup === "hero" && state.selectedHero === hero.id ? "Selected" : `Select ${hero.name}`;
    selectButton.dataset.heroId = hero.id;
    selectButton.disabled = state.gameOver;
    selectButton.addEventListener("click", () => {
      state.selectedUnitGroup = "hero";
      state.selectedHero = hero.id;
      state.shopDirty = true;
      renderDynamic();
      renderInteractive();
    });

    card.appendChild(trainButton);
    card.appendChild(selectButton);
    heroRoster.appendChild(card);
  });
}

function renderVillage() {
  villageGrid.innerHTML = "";

  state.villageTiles.forEach((tile) => {
    const tileButton = document.createElement("button");
    tileButton.className = `tile ${tile.building ? "occupied" : "empty"}`;
    tileButton.type = "button";

    if (tile.building) {
      const building = tile.building;
      tileButton.innerHTML = `
        <div class="building-card building-${building.type.id}">
          <span class="building-name">${building.type.name}</span>
          <span class="building-health">HP ${Math.max(0, Math.ceil(building.currentHealth))}</span>
        </div>
      `;
    } else {
      tileButton.textContent = "Empty";
    }

    tileButton.addEventListener("click", () => handleTileClick(tile.tileId));
    villageGrid.appendChild(tileButton);
  });
}

function renderDefenses() {
  playerDefenseLane.innerHTML = "";
  enemyDefenseLane.innerHTML = "";

  const playerDefenses = state.placedBuildings.filter((building) => building.type.kind === "defense");
  const playerSupport = state.placedBuildings.filter((building) => building.type.kind !== "defense");

  [...playerDefenses, ...playerSupport].forEach((building) => {
    const card = document.createElement("div");
    card.className = "defense-card defense-player";
    card.innerHTML = `${building.type.name}<span class="defense-health">HP ${Math.max(0, Math.ceil(building.currentHealth))}</span>`;
    playerDefenseLane.appendChild(card);
  });

  state.enemyDefenses.forEach((building) => {
    const card = document.createElement("div");
    card.className = "defense-card defense-enemy";
    card.innerHTML = `${building.name}<span class="defense-health">HP ${Math.max(0, Math.ceil(building.currentHealth))}</span>`;
    enemyDefenseLane.appendChild(card);
  });
}

function renderBattle() {
  battleLane.innerHTML = "";

  state.battleTroops.forEach((troop) => {
    const troopEl = document.createElement("div");
    troopEl.className = "entity";
    troopEl.style.left = `${troop.x}px`;
    troopEl.innerHTML = `${troop.name}<span class="entity-health">HP ${Math.max(0, Math.ceil(troop.currentHealth))}</span>`;
    battleLane.appendChild(troopEl);
  });

  state.enemyDefenses.forEach((defense) => {
    const defenseEl = document.createElement("div");
    defenseEl.className = "entity enemy-target";
    defenseEl.style.left = `${defense.x}px`;
    defenseEl.style.top = "22%";
    defenseEl.innerHTML = `${defense.name}<span class="entity-health">HP ${Math.max(0, Math.ceil(defense.currentHealth))}</span>`;
    battleLane.appendChild(defenseEl);
  });
}

function renderResources() {
  goldValue.textContent = Math.floor(state.gold);
  elixirValue.textContent = Math.floor(state.elixir);
  troopValue.textContent = getTotalTroops();
  const enemyTownHall = state.enemyDefenses.find((building) => building.id === "enemy-townhall");
  enemyHealthValue.textContent = Math.max(0, Math.ceil(enemyTownHall.currentHealth));
}

function renderButtons() {
  const hasBarracks = state.placedBuildings.some((building) => building.type.id === "barracks");
  const hasHeroHall = state.placedBuildings.some((building) => building.type.id === "herohall");
  troopRoster.querySelectorAll("button[data-troop-id]").forEach((button) => {
    const troop = getTroopType(button.dataset.troopId);
    if (button.textContent.startsWith("Train")) {
      button.disabled = !hasBarracks || state.elixir < troop.cost || state.gameOver;
    }
  });
  heroRoster.querySelectorAll("button[data-hero-id]").forEach((button) => {
    const hero = getHeroType(button.dataset.heroId);
    if (button.textContent.startsWith("Train")) {
      button.disabled = !hasHeroHall || state.elixir < hero.cost || state.gameOver;
    }
  });
  attackButton.disabled = state.gameOver;
  deployTroopButton.disabled = !state.raidActive || getSelectedUnitCount() <= 0 || state.gameOver;
  deployTroopButton.textContent = `Deploy ${getSelectedUnitType().name}`;
}

function renderInteractive() {
  if (state.shopDirty) {
    renderShop();
    renderTroopRoster();
    renderHeroRoster();
    state.shopDirty = false;
  }

  if (state.villageDirty) {
    renderVillage();
    renderDefenses();
    state.villageDirty = false;
  }
}

function renderDynamic() {
  renderBattle();
  renderResources();
  renderButtons();
  updateSelectionHint();
}

function render() {
  renderInteractive();
  renderDynamic();
}

function spendResources(gold, elixir) {
  state.gold -= gold;
  state.elixir -= elixir;
}

function handleTileClick(tileId) {
  if (!state.selectedBuilding || state.gameOver) {
    return;
  }

  const tile = state.villageTiles.find((entry) => entry.tileId === tileId);
  if (!tile || tile.building) {
    setMessage("That tile is occupied. Pick another spot.");
    return;
  }

  const buildingType = getBuildingType(state.selectedBuilding);
  if (!canAfford(buildingType)) {
    setMessage("Not enough resources for that building.");
    state.shopDirty = true;
    render();
    return;
  }

  spendResources(buildingType.goldCost, buildingType.elixirCost);
  const placed = {
    id: `${buildingType.id}-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`,
    type: buildingType,
    tileId,
    currentHealth: buildingType.health,
    incomeClock: 0,
    cooldownLeft: 0,
  };

  tile.building = placed;
  state.placedBuildings.push(placed);
  setMessage(`${buildingType.name} placed.`);
  state.selectedBuilding = null;
  state.villageDirty = true;
  state.shopDirty = true;
  render();
}

function trainTroop(troopId) {
  if (state.gameOver) {
    return;
  }

  const hasBarracks = state.placedBuildings.some((building) => building.type.id === "barracks");
  if (!hasBarracks) {
    setMessage("Build a Barracks before training troops.");
    return;
  }

  const troop = getTroopType(troopId);
  if (state.elixir < troop.cost) {
    setMessage(`Not enough elixir to train ${troop.name}.`);
    return;
  }

  state.elixir -= troop.cost;
  state.troops[troop.id] += 1;
  state.selectedUnitGroup = "troop";
  state.selectedTroop = troop.id;
  setMessage(`${troop.name} trained and ready to deploy.`);
  state.shopDirty = true;
  render();
}

function trainHero(heroId) {
  if (state.gameOver) {
    return;
  }

  const hasHeroHall = state.placedBuildings.some((building) => building.type.id === "herohall");
  if (!hasHeroHall) {
    setMessage("Build a Hero Hall before training heroes.");
    return;
  }

  const hero = getHeroType(heroId);
  if (state.elixir < hero.cost) {
    setMessage(`Not enough elixir to train ${hero.name}.`);
    return;
  }

  state.elixir -= hero.cost;
  state.heroes[hero.id] += 1;
  state.selectedUnitGroup = "hero";
  state.selectedHero = hero.id;
  setMessage(`${hero.name} trained and ready to deploy.`);
  state.shopDirty = true;
  render();
}

function deployTroop() {
  if (state.gameOver) {
    return;
  }

  if (!state.raidActive) {
    setMessage("Press Attack to raid a random base first.");
    return;
  }

  const unit = getSelectedUnitType();
  if (getSelectedUnitCount() <= 0) {
    setMessage(`Train ${unit.name} first.`);
    return;
  }

  state.deployMode = true;
  state.selectedBuilding = null;
  state.shopDirty = true;
  setMessage(`Deploy mode active. Click the battle lane to send ${unit.name}.`);
  render();
}

function spawnTroop() {
  const unitType = getSelectedUnitType();
  if (!state.raidActive || getSelectedUnitCount() <= 0 || state.gameOver) {
    return;
  }

  if (state.selectedUnitGroup === "hero") {
    state.heroes[unitType.id] -= 1;
  } else {
    state.troops[unitType.id] -= 1;
  }
  state.deployMode = false;
  state.battleTroops.push({
    id: `troop-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`,
    typeId: unitType.id,
    name: unitType.name,
    x: 8,
    speed: unitType.speed,
    damage: unitType.damage,
    range: unitType.range,
    attackCooldown: unitType.attackCooldown,
    cooldownLeft: 0,
    currentHealth: unitType.health,
    lootBonus: unitType.lootBonus,
  });

  setMessage(`${unitType.name} has entered the battle lane.`);
  state.shopDirty = true;
  render();
}

function getAliveEnemyTargets() {
  return state.enemyDefenses.filter((building) => building.currentHealth > 0);
}

function getPlayerDefenses() {
  return state.placedBuildings.filter((building) => building.type.kind === "defense" && building.currentHealth > 0);
}

function updateResourceGeneration(deltaMs) {
  state.placedBuildings.forEach((building) => {
    if (building.type.kind !== "resource") {
      return;
    }

    building.incomeClock += deltaMs;
    while (building.incomeClock >= building.type.income.interval) {
      building.incomeClock -= building.type.income.interval;
      state.gold += building.type.income.gold;
      state.elixir += building.type.income.elixir;
      state.shopDirty = true;
    }
  });
}

function updateTroops(deltaMs) {
  const enemies = getAliveEnemyTargets();

  state.battleTroops.forEach((troop) => {
    if (troop.currentHealth <= 0) {
      return;
    }

    troop.cooldownLeft = Math.max(0, troop.cooldownLeft - deltaMs);
    const target = enemies.find((enemy) => enemy.currentHealth > 0);
    if (!target) {
      return;
    }

    const distance = target.x - troop.x;
    if (distance > troop.range) {
      troop.x += (troop.speed * deltaMs) / 1000;
      troop.x = Math.min(troop.x, target.x - troop.range);
    } else if (troop.cooldownLeft === 0) {
      target.currentHealth -= troop.damage;
      troop.cooldownLeft = troop.attackCooldown;
      setMessage(`${troop.name} hits ${target.name} for ${troop.damage}.`);
      if (target.currentHealth <= 0) {
        target.currentHealth = 0;
        state.gold += 70 * troop.lootBonus;
        state.elixir += 35 * troop.lootBonus;
        state.shopDirty = true;
        setMessage(`${target.name} destroyed. Loot collected.`);
      }
    }
  });

  state.battleTroops = state.battleTroops.filter((troop) => troop.currentHealth > 0);
}

function updateEnemyDefenses(deltaMs) {
  state.enemyDefenses.forEach((defense) => {
    if (defense.currentHealth <= 0 || defense.damage <= 0) {
      return;
    }

    defense.cooldownLeft = Math.max(0, defense.cooldownLeft - deltaMs);
    const target = state.battleTroops.find((troop) => troop.currentHealth > 0 && defense.x - troop.x <= defense.range);
    if (!target || defense.cooldownLeft > 0) {
      return;
    }

    target.currentHealth -= defense.damage;
    defense.cooldownLeft = defense.cooldown;
    setMessage(`${defense.name} hits ${target.name} for ${defense.damage}.`);
  });
}

function updatePlayerDefenses(deltaMs) {
  const playerDefenses = getPlayerDefenses();
  const enemyTargets = getAliveEnemyTargets().filter((defense) => defense.id !== "enemy-townhall");

  playerDefenses.forEach((defenseBuilding) => {
    defenseBuilding.cooldownLeft = Math.max(0, defenseBuilding.cooldownLeft - deltaMs);
    if (defenseBuilding.cooldownLeft > 0) {
      return;
    }

    const target = enemyTargets[0];
    if (!target) {
      return;
    }

    target.currentHealth -= defenseBuilding.type.damage;
    defenseBuilding.cooldownLeft = defenseBuilding.type.cooldown;
    setMessage(`${defenseBuilding.type.name} fires at ${target.name}.`);

    if (target.currentHealth <= 0) {
      target.currentHealth = 0;
      setMessage(`${target.name} destroyed by your defenses.`);
    }
  });
}

function cleanupDestroyedBuildings() {
  let removedAny = false;
  state.placedBuildings = state.placedBuildings.filter((building) => building.currentHealth > 0);
  state.villageTiles.forEach((tile) => {
    if (tile.building && tile.building.currentHealth <= 0) {
      tile.building = null;
      removedAny = true;
    }
  });

  if (removedAny) {
    state.villageDirty = true;
  }
}

function checkVictory() {
  const enemyTownHall = state.enemyDefenses.find((building) => building.id === "enemy-townhall");
  const ownTownHall = state.placedBuildings.find((building) => building.type.id === "townhall");

  if (enemyTownHall.currentHealth <= 0 && state.raidActive && !state.gameOver) {
    state.raidActive = false;
    state.deployMode = false;
    state.shopDirty = true;
    state.battleTroops = [];
    state.gold += 500;
    state.elixir += 500;
    setMessage("Victory. The enemy Town Hall has fallen. You gained 500 gold and 500 elixir.");
  } else if (!ownTownHall && !state.gameOver) {
    setMessage("You do not have a Town Hall yet. Build one to secure your village.");
  }
}

function startAttack() {
  if (state.gameOver) {
    return;
  }

  state.enemyDefenses = createRandomBase();
  state.battleTroops = [];
  state.deployMode = false;
  state.raidActive = true;
  state.shopDirty = true;
  setMessage("A random enemy base was found. Deploy your units.");
  render();
}

function gameLoop(timestamp) {
  const deltaMs = Math.min(80, timestamp - state.lastTick);
  state.lastTick = timestamp;

  if (!state.gameOver) {
    updateResourceGeneration(deltaMs);
    if (state.raidActive) {
      updateTroops(deltaMs);
      updateEnemyDefenses(deltaMs);
      updatePlayerDefenses(deltaMs);
    }
    cleanupDestroyedBuildings();
    checkVictory();
  }

  renderDynamic();
  requestAnimationFrame(gameLoop);
}

attackButton.addEventListener("click", startAttack);
deployTroopButton.addEventListener("click", deployTroop);
battleLane.addEventListener("click", () => {
  if (state.deployMode) {
    spawnTroop();
  }
});

render();
requestAnimationFrame(gameLoop);
