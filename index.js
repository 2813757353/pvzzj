const ID = 200;
const coinNum = 128000 * 5;
const NAME = "奖励时间";
const data = new Date();
const year = `${data.getFullYear()}`.padStart(2, "0");
const month = `${data.getMonth() + 1}`.padStart(2, "0");
const day = data.getDate();
const today = `${year}-${month}-${day}`;
const coinReward = {
  type: "Coin",
  value: `${coinNum}`,
};
const packetReward = {
  type: "Packet",
  value: [
    "PlantSunflowerPea",
    "PlantFirenut",
    "PlantSunBomb",
    "PlantSunMine",
    "PlantReCactus",
    "PlantSunShroom",
    "PlantCactusBlover",
    "PlantMagnetnut",
    "PlantPuffPot",
    "PlantPeaPot",
    "PlantCatPot",
    "PlantCorntrop",
    "PlantSunBean",
    "PlantHypnoGarlic",
    "PlantGraveMine",
    "PlantScaredySunShroom",
    "PlantIcenut",
    "PlantSnowShroom",
    "PlantWinterMelonShroom",
    "PlantGargantuarShroom",
    "PlantMagnetMine",
    "PlantPeaLilyPad",
    "PlantJalaSunShroom",
    "PlantFireSnowPea",
    "PlantGloompult",
    "PlantIceSunShroom",
    "PlantTabooDoomShroom",
    "PlantPumpkinFire",
    "PlantWildPea",
    "PlantPeaShooterSingle",
    "PlantCherryBomb",
    "PlantWallnut",
    "PlantPeaShooter",
    "PlantSquash",
    "PlantJalapeno",
    "PlantPot",
    "PlantGatlingPea",
  ],
};
const option = getOption();

function getOption() {
  return {
    name: NAME,
    icon: "Noone",
    type: "预选卡",
    id: ID,
    api: `/get_daily_level/${ID}`,
    reward: coinReward,
  };
}

const dailyLevel = getDailyLevel();
function getDailyLevel() {
  return {
    Name: `DailyLevel-${today}-${ID}`,
    Description: "{UserName}的房子",
    LevelName: `${NAME}`,
    LevelNumber: 1,
    NextLevel: "",
    HomeWorld: "Morden",
    Talk: "",
    Tutorial: "",
    Map: "FrontlawnEmpty",
    BGM: "Frontlawn",
    Reward: { RewardFirst: "", RewardType: "Noone" },
    Event: {
      EventInit: [
        {
          EventName: "CurrentMapFunctionExecute",
          Value: {
            FunctionName: "LineUseSet",
            Value: [1.0, true],
          },
        },
        {
          EventName: "CurrentMapFunctionExecute",
          Value: {
            FunctionName: "LineUseSet",
            Value: [2.0, true],
          },
        },
        {
          EventName: "CurrentMapFunctionExecute",
          Value: {
            FunctionName: "LineUseSet",
            Value: [3.0, true],
          },
        },
        {
          EventName: "CurrentMapFunctionExecute",
          Value: {
            FunctionName: "LineUseSet",
            Value: [4.0, true],
          },
        },
        {
          EventName: "CurrentMapFunctionExecute",
          Value: {
            FunctionName: "LineUseSet",
            Value: [5.0, true],
          },
        },
      ],
      EventReady: [],
      EventStart: [],
    },
    PacketBank: {
      Method: "Choose",
      Type: "Total",
      Value: [],
    },
    PreSpawn: {
      Packet: [],
    },
    SunManager: {
      Begin: 9990,
      MovingMethod: "Land",
      Open: false,
      SpawnInterval: 6,
      SpawnNum: 55,
    },
    WaveManager: {
      BeginCol: 20,
      Dynamic: [
        {
          PointIncrementPerWave: -10,
          StartingPoints: -50,
          StartingWave: 3,
          ZombiePool: ["ZombieNormal"],
        },
        {
          PointIncrementPerWave: -10,
          StartingPoints: -50,
          StartingWave: 4,
          ZombiePool: ["ZombieNormal"],
        },
        {
          PointIncrementPerWave: -5,
          StartingPoints: -100,
          StartingWave: 5,
          ZombiePool: ["ZombieNormal"],
        },
        {},
        {
          PointIncrementPerWave: 20,
          StartingPoints: 20,
          StartingWave: 5,
          ZombiePool: ["ZombieNormal"],
        },
        {
          PointIncrementPerWave: 40,
          StartingPoints: 40,
          StartingWave: 4,
          ZombiePool: ["ZombieNormal"],
        },
        {
          PointIncrementPerWave: 60,
          StartingPoints: 60,
          StartingWave: 3,
          ZombiePool: ["ZombieNormal"],
        },
      ],
      FlagWaveInterval: 2,
      FlagZombie: "ZombieFlagCone",
      MaxNextWaveHealthPercentage: 0.5,
      MinNextWaveHealthPercentage: 0.5,
      SpawnColEnd: 20,
      SpawnColStart: 10,
      Wave: [
        {
          Dynamic: {
            Point: 1600,
            ZombiePool: [
              "ZombieGargantuar",
              "ZombieBalloon",
              "ZombieBalloonColour",
              "ZombieBed",
              "ZombieFootball",
              "ZombiePaper",
              "ZombieSleeper",
              "ZombieJackson",
              "ZombieShadow",
            ],
          },
          DynamicPlantfood: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
          Spawn: [],
          Event: [
            {
              EventName: "TipsPlay",
              Value: {
                Duration: 4,
                Text: "准备开始狂欢吧！",
              },
            },
          ],
        },
        {
          Dynamic: {
            Point: 1600,
            ZombiePool: [
              "ZombieGargantuar",
              "ZombieBalloon",
              "ZombieBalloonColour",
              "ZombieBed",
              "ZombieFootball",
              "ZombiePaper",
              "ZombieSleeper",
              "ZombieJackson",
              "ZombieShadow",
            ],
          },
          DynamicPlantfood: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
          Spawn: [
            {
              Zombie: "ZombieNormal",
              Line: -1.0,
              Num: 14.0,
            },
          ],
          Event: [],
        },
      ],
    },
  };
}
const mapline = 5;
const wildPea = 3;
const firenut = 2;
for (let j = 1; j <= mapline; j++) {
  for (let k = 1; k <= wildPea; k++) {
    dailyLevel.PreSpawn.Packet.push({
      Name: "PlantWinterMelonShroom",
      GridPos: [k, j],
    });
  }
}
for (let j = 1; j <= mapline; j++) {
  for (let k = wildPea + 1; k <= wildPea + firenut; k++) {
    dailyLevel.PreSpawn.Packet.push({
      Name: "PlantFirenut",
      GridPos: [k, j],
    });
  }
}
for (let j = 1; j <= mapline; j++) {
  for (let k = 1; k <= wildPea + firenut; k++) {
    dailyLevel.PreSpawn.Packet.push({
      Name: "PlantCatPot",
      GridPos: [k, j],
    });
  }
}
for (let j = 1; j <= mapline; j++) {
  for (let k = 1; k <= wildPea + firenut; k++) {
    dailyLevel.PreSpawn.Packet.push({
      Name: "PlantSunBean",
      GridPos: [k, j],
    });
  }
}
let LevelList = {};
window.onload = function () {
  getJSON();
};
function getJSON() {
  fetch("./levelList.json")
    .then((req) => req.json())
    .then((res) => {
      LevelList = res;
      LevelList.LevelList.push(`${ID}`);
      LevelList.LevelDateMap[today] = [`${ID}`];
      LevelList.LevelMeta[ID] = option;
      setDomInfo(LevelList, dailyLevel);
    });
}

function radioChange(e) {
  console.log(e.value);
  if (e.value === "coin") {
    LevelList.LevelMeta[ID].reward = coinReward;
  } else {
    LevelList.LevelMeta[ID].reward = packetReward;
  }
  setDomInfo(LevelList, dailyLevel);
}

function setDomInfo(list, level) {
  const listDom = document.getElementById("list-json");
  const dailyDom = document.getElementById("daily-json");
  listDom.innerText = JSON.stringify(list);
  dailyDom.innerText = JSON.stringify(level);
}
//72720
//74650
