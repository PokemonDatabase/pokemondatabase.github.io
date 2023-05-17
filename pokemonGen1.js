const pokemonGen1 = [{
        id: 1,
        name: "Bulbasaur",
        type: ["Grass", "Poison"],
        weight: 5,
        moves: ["Tackle", "Vine Whip", "Razor Leaf", "Seed Bomb"],
        description: "A small, quadrupedal creature with blue-green skin and a bulb-like protrusion on its back. It is the first of its kind, and has the ability to absorb energy from the sun and convert it into nutrients.",
        stats: {
            hp: 45,
            attack: 49,
            defense: 49,
            spAttack: 65,
            spDefense: 65,
            speed: 45
        },
        sprite: "SpritesGen1/bulbasaur.gif",

    },
    {
        id: 2,
        name: "Ivysaur",
        type: ["Grass", "Poison"],
        moves: ["Razor Leaf", "Vine Whip", "Leech Seed", "Sleep Powder"],
        description: "A larger version of Bulbasaur, with a more pronounced bulb on its back. It has developed vines on its arms and legs that it uses to manipulate objects and defend itself.",
        stats: {
            hp: 60,
            attack: 62,
            defense: 63,
            spAttack: 80,
            spDefense: 80,
            speed: 60
        },
        sprite: "SpritesGen1/ivysaur.gif"
    },
    {
        id: 3,
        name: "Venusaur",
        type: ["Grass", "Poison"],
        moves: ["Solar Beam", "Sludge Bomb", "Earthquake", "Synthesis"],
        description: "The final evolution of Bulbasaur, Venusaur is a massive, quadrupedal creature with a large flower on its back. It has the ability to emit powerful blasts of pollen and has become a revered symbol of nature.",
        stats: {
            hp: 80,
            attack: 82,
            defense: 83,
            spAttack: 100,
            spDefense: 100,
            speed: 80
        },
        sprite: "SpritesGen1/venusaur.gif"
    },
    {
        id: 4,
        name: "Charmander",
        type: ["Fire"],
        moves: ["Scratch", "Ember", "Flamethrower", "Dragon Rage"],
        description: "A small, bipedal creature with orange scales and a flame at the tip of its tail. It is known for its fiery temperament and its ability to breathe fire.",
        stats: {
            hp: 39,
            attack: 52,
            defense: 43,
            spAttack: 60,
            spDefense: 50,
            speed: 65
        },
        sprite: "SpritesGen1/charmander.gif"
    },
    {
        id: 5,
        name: "Charmeleon",
        type: ["Fire"],
        moves: ["Flamethrower", "Dragon Claw", "Brick Break", "Fire Fang"],
        description: "A larger and more aggressive version of Charmander, Charmeleon has red scales and a more pronounced flame on its tail. It is known for its combative nature and its ability to manipulate fire.",
        stats: {
            hp: 58,
            attack: 64,
            defense: 58,
            spAttack: 80,
            spDefense: 65,
            speed: 80
        },
        sprite: "SpritesGen1/charmeleon.gif"
    },
    {
        id: 6,
        name: "Charizard",
        type: ["Fire", "Flying"],
        moves: ["Fire Blast", "Wing Attack", "Dragon Claw", "Flamethrower"],
        description: "The final evolution of Charmander, Charizard is a dragon-like creature with wings and the ability to fly. It has become a popular symbol of power and strength, and its ability to breathe fire is legendary.",
        stats: {
            hp: 78,
            attack: 84,
            defense: 78,
            spAttack: 109,
            spDefense: 85,
            speed: 100
        },
        sprite: "SpritesGen1/charizard.gif"
    },
    {
        id: 7,
        name: "Squirtle",
        type: ["Water"],
        moves: ["Tackle", "Bubble", "Tail Whip", "Withdraw"],
        description: "A small, bipedal creature with a blue shell on its back. It has the ability to spray water from its mouth and is known for its mischievous and playful nature.",
        stats: {
            hp: 44,
            attack: 48,
            defense: 65,
            spAttack: 50,
            spDefense: 64,
            speed: 43
        },
        sprite: "SpritesGen1/squirtle.gif"
    },
    {
        id: 8,
        name: "Wartortle",
        type: ["Water"],
        moves: ["Hydro Pump", "Bubble", "Withdraw", "Bite"],
        description: "A larger and more serious version of Squirtle, Wartortle has developed sharp claws and a more pronounced shell on its back. It is a skilled swimmer and can hold its breath for long periods of time.",
        stats: {
            hp: 59,
            attack: 63,
            defense: 80,
            spAttack: 65,
            spDefense: 80,
            speed: 58
        },
        sprite: "SpritesGen1/wartortle.gif"
    },
    {
        id: 9,
        name: "Blastoise",
        type: ["Water"],
        moves: ["Hydro Cannon", "Water Gun", "Withdraw", "Bite"],
        description: "The final evolution of Squirtle, Blastoise is a massive, bipedal creature with two large cannons on its shell. It is known for its formidable defense and its ability to unleash powerful blasts of water.",
        stats: {
            hp: 79,
            attack: 83,
            defense: 100,
            spAttack: 85,
            spDefense: 105,
            speed: 78
        },
        sprite: "SpritesGen1/blastoise.gif"
    },
    {
        id: 10,
        name: "Caterpie",
        type: ["Bug"],
        moves: ["Tackle", "String Shot"],
        description: "A small, worm-like creature with a green body and a yellow underbelly. It is known for its voracious appetite and its ability to spin silk.",
        stats: {
            hp: 45,
            attack: 30,
            defense: 35,
            spAttack: 20,
            spDefense: 20,
            speed: 45
        },
        sprite: "SpritesGen1/caterpie.gif"
    },
    {
        id: 11,
        name: "Metapod",
        type: ["Bug"],
        moves: ["Harden"],
        description: "A cocoon-like creature that evolves from Caterpie. It is known for its hard outer shell and its ability to harden its body to withstand attacks.",
        stats: {
            hp: 50,
            attack: 20,
            defense: 55,
            spAttack: 25,
            spDefense: 25,
            speed: 30
        },
        sprite: "SpritesGen1/metapod.gif"
    },
    {
        id: 12,
        name: "Butterfree",
        type: ["Bug", "Flying"],
        moves: ["Gust", "Psybeam", "Sleep Powder", "Whirlwind"],
        description: "The final evolution of Caterpie, Butterfree is a butterfly-like creature with large, colorful wings. It is known for its ability to produce a powerful sleep powder and is often used as a symbol of beauty.",
        stats: {
            hp: 60,
            attack: 45,
            defense: 50,
            spAttack: 90,
            spDefense: 80,
            speed: 70
        },
        sprite: "SpritesGen1/butterfree.gif"
    },
    {
        id: 13,
        name: "Weedle",
        type: ["Bug", "Poison"],
        moves: ["Poison Sting", "String Shot"],
        description: "A small, worm-like creature with a brown body and a stinger on its head. It is known for its aggressive nature and its ability to poison its enemies.",
        stats: {
            hp: 40,
            attack: 35,
            defense: 30,
            spAttack: 20,
            spDefense: 20,
            speed: 50
        },
        sprite: "SpritesGen1/weedle.gif"
    },
    {
        id: 14,
        name: "Kakuna",
        type: ["Bug", "Poison"],
        moves: ["Harden", "Poison Sting"],
        description: "A cocoon-like creature that evolves from Weedle. It is known for its hard outer shell and its ability to endure attacks while waiting for its evolution.",
        stats: {
            hp: 45,
            attack: 25,
            defense: 50,
            spAttack: 25,
            spDefense: 25,
            speed: 35
        },
        sprite: "SpritesGen1/kakuna.gif"
    },
    {
        id: 15,
        name: "Beedrill",
        type: ["Bug", "Poison"],
        moves: ["Twineedle", "Sludge Bomb", "Focus Energy", "Rage"],
        description: "The final evolution of Weedle, Beedrill is a bee-like creature with sharp stingers on its arms. It is known for its aggressive nature and its ability to swarm enemies in large numbers.",
        stats: {
            hp: 65,
            attack: 90,
            defense: 40,
            spAttack: 45,
            spDefense: 80,
            speed: 75
        },
        sprite: "SpritesGen1/beedrill.gif"
    },
    {
        id: 16,
        name: "Pidgey",
        type: ["Normal", "Flying"],
        moves: ["Gust", "Quick Attack"],
        description: "A small, bird-like creature with brown feathers and a hooked beak. It is known for its keen eyesight and its ability to fly at high speeds.",
        stats: {
            hp: 40,
            attack: 45,
            defense: 40,
            spAttack: 35,
            spDefense: 35,
            speed: 56
        },
        sprite: "SpritesGen1/pidgey.gif"
    },
    {
        id: 17,
        name: "Pidgeotto",
        type: ["Normal", "Flying"],
        moves: ["Wing Attack", "Quick Attack", "Feather Dance", "Agility"],
        description: "A larger and more aggressive version of Pidgey, Pidgeotto has larger wings and a more powerful beak. It is known for its ability to hunt prey from the air.",
        stats: {
            hp: 63,
            attack: 60,
            defense: 55,
            spAttack: 50,
            spDefense: 50,
            speed: 71
        },
        sprite: "SpritesGen1/pidgeotto.gif"
    },
    {
        id: 18,
        name: "Pidgeot",
        type: ["Normal", "Flying"],
        moves: ["Sky Attack", "Feather Dance", "Wing Attack", "Quick Attack"],
        description: "The final evolution of Pidgey, Pidgeot is a massive bird-like creature with a wingspan of over 4 meters. It is known for its powerful wings and its ability to fly at incredible speeds, making it one of the fastest creatures in the sky.",
        stats: {
            hp: 83,
            attack: 80,
            defense: 75,
            spAttack: 70,
            spDefense: 70,
            speed: 101
        },
        sprite: "SpritesGen1/pidgeot.gif"
    },
    {
        id: 19,
        name: "Rattata",
        type: ["Normal"],
        moves: ["Tackle", "Quick Attack", "Focus Energy", "Tail Whip"],
        description: "A small, rodent-like creature with purple fur and large, sharp teeth. It is known for its quick movements and its ability to chew through almost anything.",
        stats: {
            hp: 30,
            attack: 56,
            defense: 35,
            spAttack: 25,
            spDefense: 35,
            speed: 72
        },
        sprite: "SpritesGen1/rattata.gif"
    },
    {
        id: 20,
        name: "Raticate",
        type: ["Normal"],
        moves: ["Hyper Fang", "Super Fang", "Sucker Punch", "Scary Face"],
        description: "A larger and more ferocious version of Rattata, Raticate has larger teeth and a more pronounced jaw. It is known for its aggressive nature and its ability to intimidate opponents.",
        stats: {
            hp: 55,
            attack: 81,
            defense: 60,
            spAttack: 50,
            spDefense: 70,
            speed: 97
        },
        sprite: "SpritesGen1/raticate.gif"
    },
    {
        id: 21,
        name: "Spearow",
        type: ["Normal", "Flying"],
        moves: ["Drill Peck", "Leer", "Fury Attack", "Mirror Move"],
        description: "A small, bird-like creature with brown feathers and a pointed beak. It is known for its territorial behavior and its ability to dive-bomb enemies from the sky.",
        stats: {
            hp: 40,
            attack: 60,
            defense: 30,
            spAttack: 31,
            spDefense: 31,
            speed: 70
        },
        sprite: "SpritesGen1/spearow.gif"
    },
    {
        id: 22,
        name: "Fearow",
        type: ["Normal", "Flying"],
        moves: ["Drill Peck", "Mirror Move", "Pursuit", "Agility"],
        description: "The final evolution of Spearow, Fearow is a larger and more aggressive bird-like creature with a wingspan of over 7 meters. It is known for its ability to fly at incredible speeds and its powerful beak, which it uses to crush opponents.",
        stats: {
            hp: 65,
            attack: 90,
            defense: 65,
            spAttack: 61,
            spDefense: 61,
            speed: 100
        },
        sprite: "SpritesGen1/fearow.gif"
    },
    {
        id: 23,
        name: "Ekans",
        type: ["Poison"],
        moves: ["Poison Sting", "Bite", "Glare", "Screech"],
        description: "A long, snake-like creature with purple skin and sharp fangs. It is known for its ability to coil around opponents and constrict them to death.",
        stats: {
            hp: 35,
            attack: 60,
            defense: 44,
            spAttack: 40,
            spDefense: 54,
            speed: 55
        },
        sprite: "SpritesGen1/ekans.gif"
    },
    {
        id: 24,
        name: "Arbok",
        type: ["Poison"],
        moves: ["Acid", "Bite", "Glare", "Poison Fang"],
        description: "The final evolution of Ekans, Arbok is a much larger and more deadly snake-like creature with a hooded head and a menacing stare. It is known for its ability to spit venom at enemies and its powerful constricting abilities.",
        stats: {
            hp: 60,
            attack: 95,
            defense: 69,
            spAttack: 65,
            spDefense: 79,
            speed: 80
        },
        sprite: "SpritesGen1/arbok.gif"
    },
    {
        id: 25,
        name: "Pikachu",
        type: ["Electric"],
        moves: ["Thunderbolt", "Quick Attack", "Thunder Wave", "Agility"],
        description: "A small, yellow mouse-like creature with red cheeks and lightning bolt-shaped markings on its tail. It is known for its electrical abilities, which it can use to shock opponents and power machinery.",
        stats: {
            hp: 35,
            attack: 55,
            defense: 30,
            spAttack: 50,
            spDefense: 40,
            speed: 90
        },
        sprite: "SpritesGen1/pikachu.gif"
    },
    {
        id: 26,
        name: "Raichu",
        type: ["Electric"],
        moves: ["Thunder", "Quick Attack", "Thunder Wave", "Agility"],
        description: "The final evolution of Pikachu, Raichu is a larger and more powerful version of the yellow mouse-like creature. It has more pronounced lightning bolt-shaped markings on its body and is known for its ability to generate massive amounts of electricity.",
        stats: {
            hp: 60,
            attack: 90,
            defense: 55,
            spAttack: 90,
            spDefense: 80,
            speed: 110
        },
        sprite: "SpritesGen1/raichu.gif"
    },
    {
        id: 27,
        name: "Sandshrew",
        type: ["Ground"],
        moves: ["Scratch", "Sand Attack", "Slash", "Poison Sting"],
        description: "A small, armadillo-like creature with tan-colored skin and sharp claws. It is known for its ability to curl into a ball and roll away from danger.",
        stats: {
            hp: 50,
            attack: 75,
            defense: 85,
            spAttack: 20,
            spDefense: 30,
            speed: 40
        },
        sprite: "SpritesGen1/sandshrew.gif"
    },
    {
        id: 28,
        name: "Sandslash",
        type: ["Ground"],
        moves: ["Earthquake", "Sand Tomb", "Slash", "Fury Swipes"],
        description: "The final evolution of Sandshrew, Sandslash is a much larger and more deadly version of the armadillo-like creature. It has larger claws and a more pronounced shell, which it can use to defend itself against attackers.",
        stats: {
            hp: 75,
            attack: 100,
            defense: 110,
            spAttack: 45,
            spDefense: 55,
            speed: 65
        },
        sprite: "SpritesGen1/sandslash.gif"
    },
    {
        id: 29,
        name: "Nidoran♀",
        type: ["Poison"],
        moves: ["Poison Sting", "Scratch", "Tail Whip", "Double Kick"],
        description: "A small, rabbit-like creature with blue fur and large, pointed ears. It is known for its agility and its ability to produce powerful poisons.",
        stats: {
            hp: 55,
            attack: 47,
            defense: 52,
            spAttack: 40,
            spDefense: 40,
            speed: 41
        },
        sprite: "SpritesGen1/nidoranf.gif"
    },
    {
        id: 30,
        name: "Nidorina",
        type: ["Poison"],
        moves: ["Poison Sting", "Bite", "Growl", "Scratch"],
        description: "A larger and more aggressive version of Nidoran♀, Nidorina has more pronounced spikes on its body and a more powerful poison.",
        stats: {
            hp: 70,
            attack: 62,
            defense: 67,
            spAttack: 55,
            spDefense: 55,
            speed: 56
        },
        sprite: "SpritesGen1/nidorina.gif"
    },
    {
        id: 31,
        name: "Nidoqueen",
        type: ["Poison", "Ground"],
        moves: ["Earthquake", "Poison Fang", "Superpower", "Sludge Wave"],
        description: "The final evolution of Nidoran♀, Nidoqueen is a massive, quadrupedal creature with a powerful horn on its head and a pronounced tail. It is known for its formidable strength and its ability to produce powerful poisons.",
        stats: {
            hp: 90,
            attack: 92,
            defense: 87,
            spAttack: 75,
            spDefense: 85,
            speed: 76
        },
        sprite: "SpritesGen1/nidoqueen.gif"
    },
    {
        id: 32,
        name: "Nidoran♂",
        type: ["Poison"],
        moves: ["Poison Sting", "Leer", "Horn Attack", "Double Kick"],
        description: "A small, rabbit-like creature with purple fur and large, pointed ears. It is known for its agility and its ability to produce powerful poisons.",
        stats: {
            hp: 46,
            attack: 57,
            defense: 40,
            spAttack: 40,
            spDefense: 40,
            speed: 50
        },
        sprite: "SpritesGen1/nidoranm.gif"
    },
    {
        id: 33,
        name: "Nidorino",
        type: ["Poison"],
        moves: ["Poison Sting", "Horn Attack", "Focus Energy", "Double Kick"],
        description: "A larger and more aggressive version of Nidoran♂, Nidorino has more pronounced spikes on its body and a more powerful poison.",
        stats: {
            hp: 61,
            attack: 72,
            defense: 57,
            spAttack: 55,
            spDefense: 55,
            speed: 65
        },
        sprite: "SpritesGen1/nidorino.gif"
    },
    {
        id: 34,
        name: "Nidoking",
        type: ["Poison", "Ground"],
        moves: ["Earthquake", "Megahorn", "Poison Jab", "Fire Punch"],
        description: "The final evolution of Nidoran♂, Nidoking is a massive, bipedal creature with a powerful horn on its head and a pronounced tail. It is known for its formidable strength and its ability to produce powerful poisons.",
        stats: {
            hp: 81,
            attack: 102,
            defense: 77,
            spAttack: 85,
            spDefense: 75,
            speed: 85
        },
        sprite: "SpritesGen1/nidoking.gif"
    },
    {
        id: 35,
        name: "Clefairy",
        type: ["Fairy"],
        moves: ["Pound", "Sing", "Metronome", "Moonlight"],
        description: "A small, pink creature with large, pointed ears and a curly tail. It is known for its ability to levitate and its magical abilities, which it uses to cast spells and control the elements.",
        stats: {
            hp: 70,
            attack: 45,
            defense: 48,
            spAttack: 60,
            spDefense: 65,
            speed: 35
        },
        sprite: "SpritesGen1/clefairy.gif"
    },
    {
        id: 36,
        name: "Clefable",
        type: ["Fairy"],
        moves: ["Moonblast", "Sing", "Metronome", "Moonlight"],
        description: "The final evolution of Clefairy, Clefable is a much larger and more powerful version of the pink creature. It has a more pronounced tail and is known for its ability to harness the power of the moon to cast spells and heal allies.",
        stats: {
            hp: 95,
            attack: 70,
            defense: 73,
            spAttack: 95,
            spDefense: 90,
            speed: 60
        },
        sprite: "SpritesGen1/clefable.gif"
    },
    {
        id: 37,
        name: "Vulpix",
        type: ["Fire"],
        moves: ["Ember", "Tail Whip", "Quick Attack", "Roar"],
        description: "A small, fox-like creature with reddish-orange fur and six tails. It is known for its ability to manipulate fire and create illusions.",
        stats: {
            hp: 38,
            attack: 41,
            defense: 40,
            spAttack: 50,
            spDefense: 65,
            speed: 65
        },
        sprite: "SpritesGen1/vulpix.gif"
    },
    {
        id: 38,
        name: "Ninetales",
        type: ["Fire"],
        moves: ["Flamethrower", "Confuse Ray", "Will-O-Wisp", "Quick Attack"],
        description: "The final evolution of Vulpix, Ninetales is a much larger and more powerful version of the fox-like creature. It has nine tails and is known for its ability to manipulate fire and create powerful illusions that can trap enemies.",
        stats: {
            hp: 73,
            attack: 76,
            defense: 75,
            spAttack: 81,
            spDefense: 100,
            speed: 100
        },
        sprite: "SpritesGen1/ninetales.gif"
    },
    {
        id: 39,
        name: "Jigglypuff",
        type: ["Normal", "Fairy"],
        moves: ["Pound", "Sing", "Disable", "Defense Curl"],
        description: "A small, pink creature with large, blue eyes and a round body. It is known for its ability to sing lullabies that can put opponents to sleep.",
        stats: {
            hp: 115,
            attack: 45,
            defense: 20,
            spAttack: 45,
            spDefense: 25,
            speed: 20
        },
        sprite: "SpritesGen1/jigglypuff.gif"
    },
    {
        id: 40,
        name: "Wigglytuff",
        type: ["Normal", "Fairy"],
        moves: ["Hyper Voice", "Sing", "Disable", "Defense Curl"],
        description: "The final evolution of Jigglypuff, Wigglytuff is a much larger and more powerful version of the pink creature. It has a more pronounced body and is known for its ability to sing powerful songs that can heal allies and boost their strength.",
        stats: {
            hp: 140,
            attack: 70,
            defense: 45,
            spAttack: 85,
            spDefense: 50,
            speed: 45
        },
        sprite: "SpritesGen1/wigglytuff.gif"
    },
    {
        id: 41,
        name: "Zubat",
        type: ["Poison", "Flying"],
        moves: ["Leech Life", "Supersonic", "Astonish", "Bite"],
        description: "A small, bat-like creature with blue skin and sharp fangs. It is known for its ability to navigate in the dark and its powerful sonar, which it uses to detect enemies.",
        stats: {
            hp: 40,
            attack: 45,
            defense: 35,
            spAttack: 30,
            spDefense: 40,
            speed: 55
        },
        sprite: "SpritesGen1/zubat.gif"
    },
    {
        id: 42,
        name: "Golbat",
        type: ["Poison", "Flying"],
        moves: ["Leech Life", "Supersonic", "Astonish", "Bite"],
        description: "The final evolution of Zubat, Golbat is a much larger and more aggressive version of the bat-like creature. It has larger fangs and is known for its ability to use its powerful sonar to disorient enemies and drain their blood.",
        stats: {
            hp: 75,
            attack: 80,
            defense: 70,
            spAttack: 65,
            spDefense: 75,
            speed: 90
        },
        sprite: "SpritesGen1/golbat.gif"
    },
    {
        id: 43,
        name: "Oddish",
        type: ["Grass", "Poison"],
        moves: ["Absorb", "Poison Powder", "Stun Spore", "Sleep Powder"],
        description: "A small, plant-like creature with blue skin and large, green leaves. It is known for its ability to release powerful scents and poisons.",
        stats: {
            hp: 45,
            attack: 50,
            defense: 55,
            spAttack: 75,
            spDefense: 65,
            speed: 30
        },
        sprite: "SpritesGen1/oddish.gif"
    },
    {
        id: 44,
        name: "Gloom",
        type: ["Grass", "Poison"],
        moves: ["Absorb", "Poison Powder", "Stun Spore", "Sleep Powder"],
        description: "The middle evolution of Oddish, Gloom is a larger and more aggressive version of the plant-like creature. It has larger leaves and is known for its ability to release powerful and noxious odors.",
        stats: {
            hp: 60,
            attack: 65,
            defense: 70,
            spAttack: 85,
            spDefense: 75,
            speed: 40
        },
        sprite: "SpritesGen1/gloom.gif"
    },
    {
        id: 45,
        name: "Vileplume",
        type: ["Grass", "Poison"],
        moves: ["Petal Dance", "Sludge Bomb", "Stun Spore", "Sleep Powder"],
        description: "The final evolution of Oddish, Vileplume is a much larger and more powerful version of the plant-like creature. It has a more pronounced flower on its head and is known for its ability to release powerful toxins and spores that can incapacitate enemies.",
        stats: {
            hp: 75,
            attack: 80,
            defense: 85,
            spAttack: 110,
            spDefense: 90,
            speed: 50
        },
        sprite: "SpritesGen1/vileplume.gif"
    },
    {
        id: 46,
        name: "Paras",
        type: ["Bug", "Grass"],
        moves: ["Scratch", "Stun Spore", "Leech Life", "Spore"],
        description: "A small, bug-like creature with a mushroom growing on its back. It is known for its ability to release spores and control the minds of enemies.",
        stats: {
            hp: 35,
            attack: 70,
            defense: 55,
            spAttack: 45,
            spDefense: 55,
            speed: 25
        },
        sprite: "SpritesGen1/paras.gif"
    },
    {
        id: 47,
        name: "Parasect",
        type: ["Bug", "Grass"],
        moves: ["Scratch", "Stun Spore", "Leech Life", "Spore"],
        description: "The final evolution of Paras, Parasect is a much larger and more powerful version of the bug-like creature. The mushroom on its back has taken over its body and is known for its ability to release spores and control the minds of enemies.",
        stats: {
            hp: 60,
            attack: 95,
            defense: 80,
            spAttack: 60,
            spDefense: 80,
            speed: 30
        },
        sprite: "SpritesGen1/parasect.gif"
    },
    {
        id: 48,
        name: "Venonat",
        type: ["Bug", "Poison"],
        moves: ["Tackle", "Disable", "Poison Powder", "Leech Life"],
        description: "A small, furry creature with purple fur and large, red eyes. It is known for its ability to release toxic gases and its sharp fangs.",
        stats: {
            hp: 60,
            attack: 55,
            defense: 50,
            spAttack: 40,
            spDefense: 55,
            speed: 45
        },
        sprite: "SpritesGen1/venonat.gif"
    },
    {
        id: 49,
        name: "Venomoth",
        type: ["Bug", "Poison"],
        moves: ["Psybeam", "Poison Powder", "Stun Spore", "Leech Life"],
        description: "The final evolution of Venonat, Venomoth is a much larger and more deadly version of the furry creature. It has larger wings and is known for its ability to release powerful toxins and control the minds of enemies.",
        stats: {
            hp: 70,
            attack: 65,
            defense: 60,
            spAttack: 90,
            spDefense: 75,
            speed: 90
        },
        sprite: "SpritesGen1/venomoth.gif"
    },
    {
        id: 50,
        name: "Diglett",
        type: ["Ground"],
        moves: ["Scratch", "Growl", "Dig", "Sand Attack"],
        description: "A small, brown creature with no visible limbs or eyes. It is known for its ability to burrow underground and move quickly.",
        stats: {
            hp: 10,
            attack: 55,
            defense: 25,
            spAttack: 35,
            spDefense: 45,
            speed: 95
        },
        sprite: "SpritesGen1/diglett.gif"
    },
    {
        id: 51,
        name: "Dugtrio",
        type: ["Ground"],
        moves: ["Scratch", "Growl", "Dig", "Sand Attack"],
        description: "The final evolution of Diglett, Dugtrio is a much larger and more powerful version of the brown creature. It has three heads and is known for its ability to dig tunnels underground and move quickly.",
        stats: {
            hp: 35,
            attack: 100,
            defense: 50,
            spAttack: 50,
            spDefense: 70,
            speed: 120
        },
        sprite: "SpritesGen1/dugtrio.gif"
    },
    {
        id: 52,
        name: "Meowth",
        type: ["Normal"],
        moves: ["Scratch", "Growl", "Bite", "Pay Day"],
        description: "A small, cat-like creature with brown fur and a coin-shaped charm on its forehead. It is known for its ability to steal valuable items and its sharp claws.",
        stats: {
            hp: 40,
            attack: 45,
            defense: 35,
            spAttack: 40,
            spDefense: 40,
            speed: 90
        },
        sprite: "SpritesGen1/meowth.gif"
    },
    {
        id: 53,
        name: "Persian",
        type: ["Normal"],
        moves: ["Scratch", "Growl", "Bite", "Pay Day"],
        description: "The final evolution of Meowth, Persian is a much larger and more powerful version of the cat-like creature. It has longer fur and sharper claws, and is known for its ability to intimidate enemies and protect its territory.",
        stats: {
            hp: 65,
            attack: 70,
            defense: 60,
            spAttack: 65,
            spDefense: 65,
            speed: 115
        },
        sprite: "SpritesGen1/persian.gif"
    },
    {
        id: 54,
        name: "Psyduck",
        type: ["Water"],
        moves: ["Scratch", "Tail Whip", "Water Gun", "Disable"],
        description: "A small, yellow creature with a round head and beady black eyes. It is known for its ability to generate intense headaches in enemies and its powerful psychic abilities.",
        stats: {
            hp: 50,
            attack: 52,
            defense: 48,
            spAttack: 65,
            spDefense: 50,
            speed: 55
        },
        sprite: "SpritesGen1/psyduck.gif"
    },
    {
        id: 55,
        name: "Golduck",
        type: ["Water"],
        moves: ["Scratch", "Tail Whip", "Water Gun", "Disable"],
        description: "The final evolution of Psyduck, Golduck is a much larger and more powerful version of the yellow creature. It has a more pronounced beak and is known for its ability to manipulate water and generate powerful psychic attacks.",
        stats: {
            hp: 80,
            attack: 82,
            defense: 78,
            spAttack: 95,
            spDefense: 80,
            speed: 85
        },
        sprite: "SpritesGen1/golduck.gif"
    },
    {
        id: 56,
        name: "Mankey",
        type: ["Fighting"],
        moves: ["Scratch", "Karate Chop", "Leer", "Low Kick"],
        description: "A small, monkey-like creature with brown fur and a pig-like snout. It is known for its aggressive behavior and its powerful fists.",
        stats: {
            hp: 40,
            attack: 80,
            defense: 35,
            spAttack: 35,
            spDefense: 45,
            speed: 70
        },
        sprite: "SpritesGen1/mankey.gif"
    },
    {
        id: 57,
        name: "Primeape",
        type: ["Fighting"],
        moves: ["Scratch", "Karate Chop", "Leer", "Low Kick"],
        description: "The final evolution of Mankey, Primeape is a much larger and more powerful version of the monkey-like creature. It has sharper claws and is known for its powerful fighting abilities and its quick temper.",
        stats: {
            hp: 65,
            attack: 105,
            defense: 60,
            spAttack: 60,
            spDefense: 70,
            speed: 95
        },
        sprite: "SpritesGen1/primeape.gif"
    },
    {
        id: 58,
        name: "Growlithe",
        type: ["Fire"],
        moves: ["Bite", "Roar", "Ember", "Leer"],
        description: "A small, dog-like creature with reddish-orange fur and a bushy tail. It is known for its loyalty and its ability to manipulate fire.",
        stats: {
            hp: 55,
            attack: 70,
            defense: 45,
            spAttack: 70,
            spDefense: 50,
            speed: 60
        },
        sprite: "SpritesGen1/growlithe.gif"
    },
    {
        id: 59,
        name: "Arcanine",
        type: ["Fire"],
        moves: ["Bite", "Roar", "Ember", "Leer"],
        description: "The final evolution of Growlithe, Arcanine is a much larger and more powerful version of the dog-like creature. It has longer fur and is known for its incredible speed and strength, as well as its ability to control fire.",
        stats: {
            hp: 90,
            attack: 110,
            defense: 80,
            spAttack: 100,
            spDefense: 80,
            speed: 95
        },
        sprite: "SpritesGen1/arcanine.gif"
    },
    {
        id: 60,
        name: "Poliwag",
        type: ["Water"],
        moves: ["Bubble", "Hypnosis", "Water Gun", "Double Slap"],
        description: "A small, blue creature with a round body and large eyes. It is known for its ability to absorb moisture from the air and its powerful swimming abilities.",
        stats: {
            hp: 40,
            attack: 50,
            defense: 40,
            spAttack: 40,
            spDefense: 40,
            speed: 90
        },
        sprite: "SpritesGen1/poliwag.gif"
    },
    {
        id: 61,
        name: "Poliwhirl",
        type: ["Water"],
        moves: ["Bubble", "Hypnosis", "Water Gun", "Double Slap"],
        description: "The middle evolution of Poliwag, Poliwhirl is a larger and more powerful version of the blue creature. It has larger eyes and is known for its ability to generate powerful water attacks.",
        stats: {
            hp: 65,
            attack: 65,
            defense: 65,
            spAttack: 50,
            spDefense: 50,
            speed: 90
        },
        sprite: "SpritesGen1/poliwhirl.gif"
    },
    {
        id: 62,
        name: "Poliwrath",
        type: ["Water", "Fighting"],
        moves: ["Water Gun", "BubbleBeam", "Hypnosis", "Double Slap"],
        description: "The final evolution of Poliwag, Poliwrath is a much larger and more powerful version of the blue creature. It has larger muscles and is known for its incredible strength and its ability to generate powerful water attacks.",
        stats: {
            hp: 90,
            attack: 95,
            defense: 95,
            spAttack: 70,
            spDefense: 90,
            speed: 70
        },
        sprite: "SpritesGen1/poliwrath.gif"
    },
    {
        id: 63,
        name: "Abra",
        type: ["Psychic"],
        moves: ["Teleport", "Psybeam", "Shadow Ball", "Reflect"],
        description: "Using its ability to read minds, it will identify impending danger and teleport to safety before the danger can be inflicted.",
        stats: {
            hp: 25,
            attack: 20,
            defense: 15,
            spAttack: 105,
            spDefense: 55,
            speed: 90
        },
        sprite: "SpritesGen1/abra.gif"
    },
    {
        id: 64,
        name: "Kadabra",
        type: ["Psychic"],
        moves: ["Psybeam", "Recover", "Reflect", "Teleport"],
        description: "The middle evolution of Abra, Kadabra is a larger and more powerful version of the yellow creature. It has more pronounced ears and is known for its ability to generate powerful psychic attacks.",
        stats: {
            hp: 40,
            attack: 35,
            defense: 30,
            spAttack: 120,
            spDefense: 70,
            speed: 105
        },
        sprite: "SpritesGen1/kadabra.gif"
    },

    {
        id: 65,
        name: "Alakazam",
        type: ["Psychic"],
        moves: ["Psychic", "Shadow Ball", "Focus Blast", "Calm Mind"],
        description: "Its brain can outperform a supercomputer. It uses psychic power to identify and manipulate objects.",
        stats: {
            hp: 55,
            attack: 50,
            defense: 45,
            spAttack: 135,
            spDefense: 95,
            speed: 120
        },
        sprite: "SpritesGen1/alakazam.gif"
    },

    {
        id: 66,
        name: "Machop",
        type: ["Fighting"],
        moves: ["Low Kick", "Karate Chop", "Cross Chop", "Bulk Up"],
        description: "Loves to build its muscles. It trains in all styles of martial arts to become even stronger.",
        stats: {
            hp: 70,
            attack: 80,
            defense: 50,
            spAttack: 35,
            spDefense: 35,
            speed: 35
        },
        sprite: "SpritesGen1/machop.gif"
    },
    {
        id: 67,
        name: "Machoke",
        type: ["Fighting"],
        moves: ["Karate Chop", "Seismic Toss", "Cross Chop", "Bulk Up"],
        description: "Its muscular body is so powerful that it must wear a power-save belt to be able to regulate its motions.",
        stats: {
            hp: 80,
            attack: 100,
            defense: 70,
            spAttack: 50,
            spDefense: 60,
            speed: 45
        },
        sprite: "SpritesGen1/machoke.gif"
    },

    {
        id: 68,
        name: "Machamp",
        type: ["Fighting"],
        moves: ["Dynamic Punch", "Earthquake", "Stone Edge", "Bulk Up"],
        description: "Using its powerful muscles, it throws punches that are faster than a bullet train. It can even move mountains.",
        stats: {
            hp: 90,
            attack: 130,
            defense: 80,
            spAttack: 65,
            spDefense: 85,
            speed: 55
        },
        sprite: "SpritesGen1/machamp.gif"
    },

    {
        id: 69,
        name: "Bellsprout",
        type: ["Grass", "Poison"],
        moves: ["Vine Whip", "Razor Leaf", "Poison Powder", "Sleep Powder"],
        description: "A small, plant-like creature with a long stem and a large, green leaf. It is known for its ability to ensnare enemies with its vines and its powerful acid attacks.",
        stats: {
            hp: 50,
            attack: 75,
            defense: 35,
            spAttack: 70,
            spDefense: 30,
            speed: 40
        },
        sprite: "SpritesGen1/bellsprout.gif"
    },
    {
        id: 70,
        name: "Weepinbell",
        type: ["Grass", "Poison"],
        moves: ["Razor Leaf", "Sludge Bomb", "Sleep Powder", "Acid"],
        description: "The leaf on its head is large and is known to emit a sweet aroma. It attracts prey with its sweet-smelling drool.",
        stats: {
            hp: 65,
            attack: 90,
            defense: 50,
            spAttack: 85,
            spDefense: 45,
            speed: 55
        },
        sprite: "SpritesGen1/weepinbell.gif"
    },
    {
        id: 71,
        name: "Victreebel",
        type: ["Grass", "Poison"],
        moves: ["Vine Whip", "Razor Leaf", "Poison Powder", "Sleep Powder"],
        description: "The final evolution of Bellsprout, Victreebel is a much larger and more powerful version of the plant-like creature. It has a gaping, tooth-filled maw and is known for its ability to trap enemies with its vines and its potent acid attacks.",
        stats: {
            hp: 80,
            attack: 105,
            defense: 65,
            spAttack: 100,
            spDefense: 60,
            speed: 70
        },
        sprite: "SpritesGen1/victreebel.gif"
    },
    {
    id: 72,
    name: "Tentacool",
    type: ["Water", "Poison"],
    moves: ["Poison Sting", "Water Gun", "BubbleBeam", "Wrap"],
    description: "Tentacool is a Water/Poison type Pokémon. It has tentacles that are capable of stinging its opponents and secretes toxic poison. It can also shoot high-pressure water jets to attack its enemies.",
    stats: {
        hp: 40,
        attack: 40,
        defense: 35,
        spAttack: 50,
        spDefense: 100,
        speed: 70
    },
    sprite: "SpritesGen1/tentacool.gif"
},
{
    id: 73,
    name: "Tentacruel",
    type: ["Water", "Poison"],
    moves: ["Poison Jab", "Hydro Pump", "Sludge Bomb", "Barrier"],
    description: "Tentacruel is the evolved form of Tentacool. It is a larger and more powerful Pokémon with numerous tentacles. It has the ability to trap and immobilize its prey using its tentacles while injecting venomous poison. Its massive size allows it to swim swiftly through the ocean.",
    stats: {
        hp: 80,
        attack: 70,
        defense: 65,
        spAttack: 80,
        spDefense: 120,
        speed: 100
    },
    sprite: "SpritesGen1/tentacruel.gif"
},
    {
        id: 74,
        name: "Geodude",
        type: ["Rock", "Ground"],
        moves: ["Tackle", "Rock Throw", "Defense Curl"],
        description: "A small, rock-like creature with arms and legs. It is known for its incredible strength and its ability to generate powerful rock attacks.",
        stats: {
            hp: 40,
            attack: 80,
            defense: 100,
            spAttack: 30,
            spDefense: 30,
            speed: 20
        },
        sprite: "SpritesGen1/geodude.gif"
    },
    {
        id: 75,
        name: "Graveler",
        type: ["Rock", "Ground"],
        moves: ["Tackle", "Rock Throw", "Defense Curl", "Earthquake"],
        description: "The middle evolution of Geodude, Graveler is a larger and more powerful version of the rock-like creature. It has a more pronounced face and is known for its incredible strength and its ability to generate powerful rock attacks.",
        stats: {
            hp: 55,
            attack: 95,
            defense: 115,
            spAttack: 45,
            spDefense: 45,
            speed: 35
        },
        sprite: "SpritesGen1/graveler.gif"
    },
    {
        id: 76,
        name: "Golem",
        type: ["Rock", "Ground"],
        moves: ["Tackle", "Rock Throw", "Defense Curl", "Earthquake"],
        description: "The final evolution of Geodude, Golem is a much larger and more powerful version of the rock-like creature. It has a more pronounced face and is known for its incredible strength and its ability to generate powerful rock attacks.",
        stats: {
            hp: 80,
            attack: 120,
            defense: 130,
            spAttack: 55,
            spDefense: 65,
            speed: 45
        },
        sprite: "SpritesGen1/golem.gif"
    },
    {
        id: 77,
        name: "Ponyta",
        type: ["Fire"],
        moves: ["Tackle", "Ember", "Tail Whip", "Stomp"],
        description: "A small, horse-like creature with fiery orange fur. It is known for its incredible speed and its ability to control fire.",
        stats: {
            hp: 50,
            attack: 85,
            defense: 55,
            spAttack: 65,
            spDefense: 65,
            speed: 90
        },
        sprite: "SpritesGen1/ponyta.gif"
    },
    {
        id: 78,
        name: "Rapidash",
        type: ["Fire"],
        moves: ["Tackle", "Ember", "Tail Whip", "Stomp"],
        description: "The final evolution of Ponyta, Rapidash is a much larger and more powerful version of the horse-like creature. It has fiery orange fur and is known for its incredible speed and its ability to control fire.",
        stats: {
            hp: 65,
            attack: 100,
            defense: 70,
            spAttack: 80,
            spDefense: 80,
            speed: 105
        },
        sprite: "SpritesGen1/rapidash.gif"
    },
    {
        id: 79,
        name: "Slowpoke",
        type: ["Water", "Psychic"],
        moves: ["Water Gun", "Psychic", "Amnesia", "Yawn"],
        description: "Incredibly slow and dopey. It takes 5 seconds for it to feel pain when under attack.",
        stats: {
            hp: 90,
            attack: 65,
            defense: 65,
            spAttack: 40,
            spDefense: 40,
            speed: 15
        },
        sprite: "SpritesGen1/slowpoke.gif"
    },
    {
        id: 80,
        name: "Slowbro",
        type: ["Water", "Psychic"],
        moves: ["Tackle", "Water Gun", "Confusion", "Disable"],
        description: "The final evolution of Slowpoke, Slowbro is a much larger and more powerful version of the blue creature. It has a large, pink shell on its back and is known for its powerful psychic abilities and its tendency to be oblivious to danger.",
        stats: {
            hp: 95,
            attack: 75,
            defense: 110,
            spAttack: 100,
            spDefense: 80,
            speed: 30
        },
        sprite: "SpritesGen1/slowbro.gif"
    },
    {
        id: 81,
        name: "Magnemite",
        type: ["Electric", "Steel"],
        moves: ["Tackle", "Thunder Shock", "Sonic Boom"],
        description: "A small, magnet-like creature with two large eyes. It is known for its ability to manipulate electricity and generate powerful electric attacks.",
        stats: {
            hp: 25,
            attack: 35,
            defense: 70,
            spAttack: 95,
            spDefense: 55,
            speed: 45
        },
        sprite: "SpritesGen1/magnemite.gif"
    },
    {
        id: 82,
        name: "Magneton",
        type: ["Electric", "Steel"],
        moves: ["Tackle", "Thunder Shock", "Sonic Boom", "Thunderbolt"],
        description: "The final evolution of Magnemite, Magneton is a much larger and more powerful version of the magnet-like creature. It is made up of three Magnemites joined together and is known for its ability to manipulate electricity and generate powerful electric attacks.",
        stats: {
            hp: 50,
            attack: 60,
            defense: 95,
            spAttack: 120,
            spDefense: 70,
            speed: 70
        },
        sprite: "SpritesGen1/magneton.gif"
    },
    {
        id: 83,
        name: "Farfetch'd",
        type: ["Normal", "Flying"],
        moves: ["Peck", "Sand Attack", "Leer", "Fury Attack"],
        description: "A small, duck-like creature with a leek in its beak. It is known for its incredible speed and its sharp beak.",
        stats: {
            hp: 52,
            attack: 90,
            defense: 55,
            spAttack: 58,
            spDefense: 62,
            speed: 60
        },
        sprite: "SpritesGen1/farfetchd.gif"
    },
    {
        id: 84,
        name: "Doduo",
        type: ["Normal", "Flying"],
        moves: ["Peck", "Growl", "Fury Attack"],
        description: "A small, two-headed bird-like creature. It is known for its incredible speed and its powerful legs.",
        stats: {
            hp: 35,
            attack: 85,
            defense: 45,
            spAttack: 35,
            spDefense: 35,
            speed: 75
        },
        sprite: "SpritesGen1/doduo.gif"
    },
    {
        id: 85,
        name: "Dodrio",
        type: ["Normal", "Flying"],
        moves: ["Peck", "Growl", "Fury Attack", "Drill Peck"],
        description: "The final evolution of Doduo, Dodrio is a much larger and more powerful version of the two-headed creature. It has three heads and is known for its incredible speed and its powerful legs.",
        stats: {
            hp: 60,
            attack: 110,
            defense: 70,
            spAttack: 60,
            spDefense: 60,
            speed: 100
        },
        sprite: "SpritesGen1/dodrio.gif"
    },
    {
        id: 86,
        name: "Seel",
        type: ["Water"],
        moves: ["Headbutt", "Growl", "Aurora Beam"],
        description: "A small, seal-like creature with a round body and large eyes. It is known for its ability to dive deep underwater and hold its breath for extended periods of time. It can also use its icy breath to freeze its enemies.",
        stats: {
            hp: 65,
            attack: 45,
            defense: 55,
            spAttack: 45,
            spDefense: 70,
            speed: 45
        },
        sprite: "SpritesGen1/seel.gif"
    },
    {
        id: 87,
        name: "Dewgong",
        type: ["Water", "Ice"],
        moves: ["Headbutt", "Growl", "Aurora Beam", "Ice Beam"],
        description: "The final evolution of Seel, Dewgong is a much larger and more powerful version of the seal-like creature. It has a streamlined body and is known for its ability to dive deep underwater and hold its breath for extended periods of time. It can also use its icy breath to freeze its enemies.",
        stats: {
            hp: 90,
            attack: 70,
            defense: 80,
            spAttack: 70,
            spDefense: 95,
            speed: 70
        },
        sprite: "SpritesGen1/dewgong.gif"
    },
    {
        id: 88,
        name: "Grimer",
        type: ["Poison"],
        moves: ["Pound", "Disable", "Acid", "Poison Gas"],
        description: "A small, sludge-like creature with a lumpy body and large eyes. It is known for its ability to generate toxic sludge and spread disease.",
        stats: {
            hp: 80,
            attack: 80,
            defense: 50,
            spAttack: 40,
            spDefense: 50,
            speed: 25
        },
        sprite: "SpritesGen1/grimer.gif"
    },
    {
        id: 89,
        name: "Muk",
        type: ["Poison"],
        moves: ["Pound", "Disable", "Sludge", "Acid Armor"],
        description: "The final evolution of Grimer, Muk is a much larger and more powerful version of the sludge-like creature. It has a lumpy body and is known for its ability to generate toxic sludge and spread disease.",
        stats: {
            hp: 105,
            attack: 105,
            defense: 75,
            spAttack: 65,
            spDefense: 100,
            speed: 50
        },
        sprite: "SpritesGen1/muk.gif"
    },
    {
        id: 90,
        name: "Shellder",
        type: ["Water"],
        moves: ["Tackle", "Withdraw", "Ice Shard", "Icicle Spear"],
        description: "A small, clam-like creature with a hard shell. It is known for its ability to clamp down on its enemies with its powerful jaws.",
        stats: {
            hp: 30,
            attack: 65,
            defense: 100,
            spAttack: 45,
            spDefense: 25,
            speed: 40
        },
        sprite: "SpritesGen1/shellder.gif"
    },
    {
        id: 91,
        name: "Cloyster",
        type: ["Water", "Ice"],
        moves: ["Tackle", "Withdraw", "Ice Shard", "Icicle Spear"],
        description: "The final evolution of Shellder, Cloyster is a much larger and more powerful version of the clam-like creature. It has a hard, spiky shell and is known for its ability to clamp down on its enemies with its powerful jaws.",
        stats: {
            hp: 50,
            attack: 95,
            defense: 180,
            spAttack: 85,
            spDefense: 45,
            speed: 70
        },
        sprite: "SpritesGen1/cloyster.gif"
    },
    {
        id: 92,
        name: "Gastly",
        type: ["Ghost", "Poison"],
        moves: ["Lick", "Hypnosis", "Dream Eater", "Night Shade"],
        description: "A small, ghost-like creature with a gaseous body. It is known for its ability to float through walls and its potent ghostly attacks.",
        stats: {
            hp: 30,
            attack: 35,
            defense: 30,
            spAttack: 100,
            spDefense: 35,
            speed: 80
        },
        sprite: "SpritesGen1/gastly.gif"
    },
    {
        id: 93,
        name: "Haunter",
        type: ["Ghost", "Poison"],
        moves: ["Lick", "Hypnosis", "Dream Eater", "Night Shade"],
        description: "The middle evolution of Gastly, Haunter is a larger and more powerful version of the ghost-like creature. It has a gaseous body and is known for its ability to float through walls and its potent ghostly attacks.",
        stats: {
            hp: 45,
            attack: 50,
            defense: 45,
            spAttack: 115,
            spDefense: 55,
            speed: 95
        },
        sprite: "SpritesGen1/haunter.gif"
    },
    {
        id: 94,
        name: "Gengar",
        type: ["Ghost", "Poison"],
        moves: ["Lick", "Hypnosis", "Dream Eater", "Night Shade"],
        description: "The final evolution of Gastly, Gengar is a much larger and more powerful version of the ghost-like creature. It has a gaseous body and is known for its ability to float through walls and its potent ghostly attacks. It is said to be able to steal people's souls.",
        stats: {
            hp: 60,
            attack: 65,
            defense: 60,
            spAttack: 130,
            spDefense: 75,
            speed: 110
        },
        sprite: "SpritesGen1/gengar.gif"
    },
    {
        id: 95,
        name: "Onix",
        type: ["Rock", "Ground"],
        moves: ["Tackle", "Rock Throw", "Harden", "Bind"],
        description: "A massive, snake-like creature made of rock. It is known for its incredible size and strength.",
        stats: {
            hp: 35,
            attack: 45,
            defense: 160,
            spAttack: 30,
            spDefense: 45,
            speed: 70
        },
        sprite: "SpritesGen1/onix.gif"
    },
    {
        id: 96,
        name: "Drowzee",
        type: ["Psychic"],
        moves: ["Pound", "Hypnosis", "Disable", "Confusion"],
        description: "A small, bipedal creature with a long nose. It is known for its powerful psychic abilities and its ability to put people to sleep.",
        stats: {
            hp: 60,
            attack: 48,
            defense: 45,
            spAttack: 43,
            spDefense: 90,
            speed: 42
        },
        sprite: "SpritesGen1/drowzee.gif"
    },
    {
        id: 97,
        name: "Hypno",
        type: ["Psychic"],
        moves: ["Pound", "Hypnosis", "Disable", "Confusion"],
        description: "The final evolution of Drowzee, Hypno is a much larger and more powerful version of the bipedal creature. It has a long nose and is known for its powerful psychic abilities and its ability to put people to sleep.",
        stats: {
            hp: 85,
            attack: 73,
            defense: 70,
            spAttack: 73,
            spDefense: 115,
            speed: 67
        },
        sprite: "SpritesGen1/hypno.gif"
    },
    {
        id: 98,
        name: "Krabby",
        type: ["Water"],
        moves: ["Bubble", "Vice Grip", "Leer", "Harden"],
        description: "A small, crab-like creature with a hard shell. It is known for its powerful pincers and its ability to generate powerful water attacks.",
        stats: {
            hp: 30,
            attack: 105,
            defense: 90,
            spAttack: 25,
            spDefense: 25,
            speed: 50
        },
        sprite: "SpritesGen1/krabby.gif"
    },
    {
        id: 99,
        name: "Kingler",
        type: ["Water"],
        moves: ["Bubble", "Vice Grip", "Leer", "Harden"],
        description: "The final evolution of Krabby, Kingler is a much larger and more powerful version of the crab-like creature. It has massive, powerful pincers and is known for its ability to generate powerful water attacks.",
        stats: {
            hp: 55,
            attack: 130,
            defense: 115,
            spAttack: 50,
            spDefense: 50,
            speed: 75
        },
        sprite: "SpritesGen1/kingler.gif"
    },
    {
        id: 100,
        name: "Voltorb",
        type: ["Electric"],
        moves: ["Tackle", "Screech", "Sonic Boom", "Self-Destruct"],
        description: "A small, spherical creature with two large eyes. It is known for its ability to generate powerful electric attacks.",
        stats: {
            hp: 40,
            attack: 30,
            defense: 50,
            spAttack: 55,
            spDefense: 55,
            speed: 100
        },
        sprite: "SpritesGen1/voltorb.gif"
    },
    {
        id: 101,
        name: "Electrode",
        type: ["Electric"],
        moves: ["Tackle", "Screech", "Sonic Boom", "Self-Destruct"],
        description: "The final evolution of Voltorb, Electrode is a much larger and more powerful version of the spherical creature. It is known for its ability to generate powerful electric attacks and its tendency to explode.",
        stats: {
            hp: 60,
            attack: 50,
            defense: 70,
            spAttack: 80,
            spDefense: 80,
            speed: 140
        },
        sprite: "SpritesGen1/electrode.gif"
    },
    {
        id: 102,
        name: "Exeggcute",
        type: ["Grass", "Psychic"],
        moves: ["Barrage", "Hypnosis", "Reflect", "Leech Seed"],
        description: "A group of small, egg-like creatures with faces. They are known for their powerful psychic abilities and their ability to generate powerful grass attacks.",
        stats: {
            hp: 60,
            attack: 40,
            defense: 80,
            spAttack: 60,
            spDefense: 45,
            speed: 40
        },
        sprite: "SpritesGen1/exeggcute.gif"
    },
    {
        id: 103,
        name: "Exeggutor",
        type: ["Grass", "Psychic"],
        moves: ["Barrage", "Hypnosis", "Reflect", "Leech Seed"],
        description: "The final evolution of Exeggcute, Exeggutor is a much larger and more powerful version of the egg-like creatures. It has a long neck and a large head, with several eggs on top that it can use to generate powerful psychic and grass attacks.",
        stats: {
            hp: 95,
            attack: 95,
            defense: 85,
            spAttack: 125,
            spDefense: 75,
            speed: 55
        },
        sprite: "SpritesGen1/exeggutor.gif"
    },
    {
        id: 104,
        name: "Cubone",
        type: ["Ground"],
        moves: ["Bone Club", "Growl", "Tail Whip", "Headbutt"],
        description: "A small, bipedal creature with a skull helmet on its head. It is known for its melancholic personality and its powerful bone attacks.",
        stats: {
            hp: 50,
            attack: 50,
            defense: 95,
            spAttack: 40,
            spDefense: 50,
            speed: 35
        },
        sprite: "SpritesGen1/cubone.gif"
    },

    {
        id: 105,
        name: "Marowak",
        type: ["Ground"],
        moves: ["Bone Club", "Focus Energy", "Rage", "Thrash"],
        description: "The final evolution of Cubone, Marowak is a much larger and more powerful version of the bipedal creature. It has a larger skull helmet and is known for its melancholic personality and its powerful bone attacks.",
        stats: {
            hp: 60,
            attack: 80,
            defense: 110,
            spAttack: 50,
            spDefense: 80,
            speed: 45
        },
        sprite: "SpritesGen1/marowak.gif"
    },
    {
        id: 106,
        name: "Hitmonlee",
        type: ["Fighting"],
        moves: ["Double Kick", "Meditate", "Rolling Kick", "Jump Kick"],
        description: "A humanoid creature with a long, stretchy body and powerful legs. It is known for its incredible kicking abilities and its skill in martial arts.",
        stats: {
            hp: 50,
            attack: 120,
            defense: 53,
            spAttack: 35,
            spDefense: 110,
            speed: 87
        },
        sprite: "SpritesGen1/hitmonlee.gif"
    },
    {
        id: 107,
        name: "Hitmonchan",
        type: ["Fighting"],
        moves: ["Comet Punch", "Agility", "Fire Punch", "Ice Punch"],
        description: "A humanoid creature with a muscular build and powerful arms. It is known for its incredible punching abilities and its skill in martial arts.",
        stats: {
            hp: 50,
            attack: 105,
            defense: 79,
            spAttack: 35,
            spDefense: 110,
            speed: 76
        },
        sprite: "SpritesGen1/hitmonchan.gif"
    },
    {
        id: 108,
        name: "Lickitung",
        type: ["Normal"],
        moves: ["Lick", "Supersonic", "Defense Curl", "Wrap"],
        description: "A large, pink creature with a long tongue. It is known for its ability to wrap its tongue around things and its powerful licking attacks.",
        stats: {
            hp: 90,
            attack: 55,
            defense: 75,
            spAttack: 60,
            spDefense: 75,
            speed: 30
        },
        sprite: "SpritesGen1/lickitung.gif"
    },
    {
        id: 109,
        name: "Koffing",
        type: ["Poison"],
        moves: ["Tackle", "Smog", "Sludge", "Self-Destruct"],
        description: "A small, gas-filled creature with a skull and crossbones pattern on its body. It is known for its ability to generate toxic gas attacks.",
        stats: {
            hp: 40,
            attack: 65,
            defense: 95,
            spAttack: 60,
            spDefense: 45,
            speed: 35
        },
        sprite: "SpritesGen1/koffing.gif"
    },
    {
        id: 110,
        name: "Weezing",
        type: ["Poison"],
        moves: ["Tackle", "Smog", "Sludge", "Self-Destruct"],
        description: "The final evolution of Koffing, Weezing is a much larger and more powerful version of the gas-filled creature. It has two heads and is known for its ability to generate toxic gas attacks.",
        stats: {
            hp: 65,
            attack: 90,
            defense: 120,
            spAttack: 85,
            spDefense: 70,
            speed: 60
        },
        sprite: "SpritesGen1/weezing.gif"
    },
    {
        id: 111,
        name: "Rhyhorn",
        type: ["Ground", "Rock"],
        moves: ["Horn Attack", "Stomp", "Tail Whip", "Fury Attack"],
        description: "A massive, rhinoceros-like creature with a hard, rocky body. It is known for its incredible strength and its powerful charging attacks.",
        stats: {
            hp: 80,
            attack: 85,
            defense: 95,
            spAttack: 30,
            spDefense: 30,
            speed: 25
        },
        sprite: "SpritesGen1/rhyhorn.gif"
    },
    {
        id: 112,
        name: "Rhydon",
        type: ["Ground", "Rock"],
        moves: ["Horn Drill", "Stomp", "Tail Whip", "Fury Attack"],
        description: "The final evolution of Rhyhorn, Rhydon is a much larger and more powerful version of the rhinoceros-like creature. It has a hard, rocky body and is known for its incredible strength and its powerful charging attacks.",
        stats: {
            hp: 105,
            attack: 130,
            defense: 120,
            spAttack: 45,
            spDefense: 45,
            speed: 40
        },
        sprite: "SpritesGen1/rhydon.gif"
    },
    {
        id: 113,
        name: "Chansey",
        type: ["Normal"],
        moves: ["Pound", "Sing", "Growl", "Minimize"],
        description: "A small, pink creature with a large, egg-shaped body. It is known for its incredible kindness and its ability to heal others with its eggs.",
        stats: {
            hp: 250,
            attack: 5,
            defense: 5,
            spAttack: 35,
            spDefense: 105,
            speed: 50
        },
        sprite: "SpritesGen1/chansey.gif"
    },
    {
        id: 114,
        name: "Tangela",
        type: ["Grass"],
        moves: ["Constrict", "Bind", "Absorb", "Poison Powder"],
        description: "A small, vine-like creature with a mass of tangled vines on top of its head. It is known for its powerful vine attacks.",
        stats: {
            hp: 65,
            attack: 55,
            defense: 115,
            spAttack: 100,
            spDefense: 40,
            speed: 60
        },
        sprite: "SpritesGen1/tangela.gif"
    },
    {
        id: 115,
        name: "Kangaskhan",
        type: ["Normal"],
        moves: ["Comet Punch", "Leer", "Bite", "Tail Whip"],
        description: "A large, bipedal creature with a baby in its pouch. It is known for its incredible strength and its powerful punching attacks.",
        stats: {
            hp: 105,
            attack: 95,
            defense: 80,
            spAttack: 40,
            spDefense: 80,
            speed: 90
        },
        sprite: "SpritesGen1/kangaskhan.gif"
    },
    {
        id: 116,
        name: "Horsea",
        type: ["Water"],
        moves: ["Bubble", "Smokescreen", "Leer", "Water Gun"],
        description: "A small, seahorse-like creature with a hard, spiky shell. It is known for its ability to generate powerful water attacks.",
        stats: {
            hp: 30,
            attack: 40,
            defense: 70,
            spAttack: 70,
            spDefense: 25,
            speed: 60
        },
        sprite: "SpritesGen1/horsea.gif"
    },
    {
        id: 117,
        name: "Seadra",
        type: ["Water"],
        moves: ["Water Gun", "Smokescreen", "Leer", "Agility"],
        description: "The final evolution of Horsea, Seadra is a much larger and more powerful version of the seahorse-like creature. It has a hard, spiky shell and is known for its ability to generate powerful water attacks.",
        stats: {
            hp: 55,
            attack: 65,
            defense: 95,
            spAttack: 95,
            spDefense: 45,
            speed: 85
        },
        sprite: "SpritesGen1/seadra.gif"
    },
    {
        id: 118,
        name: "Goldeen",
        type: ["Water"],
        moves: ["Peck", "Tail Whip", "Supersonic", "Horn Attack"],
        description: "A small, fish-like creature with a horn on its head. It is known for its ability to generate powerful water attacks.",
        stats: {
            hp: 45,
            attack: 67,
            defense: 60,
            spAttack: 35,
            spDefense: 50,
            speed: 63
        },
        sprite: "SpritesGen1/goldeen.gif"
    },
    {
        id: 119,
        name: "Seaking",
        type: ["Water"],
        moves: ["Peck", "Tail Whip", "Supersonic", "Horn Attack"],
        description: "The final evolution of Goldeen, Seaking is a much larger and more powerful version of the fish-like creature. It has a larger horn on its head and is known for its ability to generate powerful water attacks.",
        stats: {
            hp: 80,
            attack: 92,
            defense: 65,
            spAttack: 65,
            spDefense: 80,
            speed: 68
        },
        sprite: "SpritesGen1/seaking.gif"
    },
    {
        id: 120,
        name: "Staryu",
        type: ["Water"],
        moves: ["Tackle", "Water Gun", "Harden", "Recover"],
        description: "A small, star-shaped creature with a hard, gem-like body. It is known for its ability to generate powerful water attacks.",
        stats: {
            hp: 30,
            attack: 45,
            defense: 55,
            spAttack: 70,
            spDefense: 55,
            speed: 85
        },
        sprite: "SpritesGen1/staryu.gif"
    },
    {
        id: 121,
        name: "Starmie",
        type: ["Water", "Psychic"],
        moves: ["Tackle", "Water Gun", "Harden", "Recover"],
        description: "The final evolution of Staryu, Starmie is a much larger and more powerful version of the star-shaped creature. It has a hard, gem-like body and is known for its ability to generate powerful water attacks.",
        stats: {
            hp: 60,
            attack: 75,
            defense: 85,
            spAttack: 100,
            spDefense: 85,
            speed: 115
        },
        sprite: "SpritesGen1/starmie.gif"
    },
    {
        id: 122,
        name: "Mr. Mime",
        type: ["Psychic", "Fairy"],
        moves: ["Confusion", "Barrier", "Light Screen", "Double Slap"],
        description: "A humanoid creature with a white, clown-like appearance. It is known for its powerful psychic abilities and its ability to create invisible walls and barriers.",
        stats: {
            hp: 40,
            attack: 45,
            defense: 65,
            spAttack: 100,
            spDefense: 120,
            speed: 90
        },
        sprite: "SpritesGen1/mrmime.gif"
    },
    {
        id: 123,
        name: "Scyther",
        type: ["Bug", "Flying"],
        moves: ["Quick Attack", "Wing Attack", "Slash", "Swords Dance"],
        description: "A large, insectoid creature with powerful scythe-like arms. It is known for its incredible speed and its ability to cut through almost anything with its scythes.",
        stats: {
            hp: 70,
            attack: 110,
            defense: 80,
            spAttack: 55,
            spDefense: 80,
            speed: 105
        },
        sprite: "SpritesGen1/scyther.gif"
    },
    {
        id: 124,
        name: "Jynx",
        type: ["Ice", "Psychic"],
        moves: ["Pound", "Ice Punch", "Lick", "Lovely Kiss"],
        description: "A humanoid creature with a curvy figure and large lips. It is known for its powerful ice attacks and its ability to mesmerize opponents with its dance moves.",
        stats: {
            hp: 65,
            attack: 50,
            defense: 35,
            spAttack: 115,
            spDefense: 95,
            speed: 95
        },
        sprite: "SpritesGen1/jynx.gif"
    },
    {
        id: 125,
        name: "Electabuzz",
        type: ["Electric"],
        moves: ["Quick Attack", "Thunder Punch", "Light Screen", "Screech"],
        description: "A humanoid creature with a yellow, electrically charged body. It is known for its powerful electric attacks and its ability to generate and control electricity.",
        stats: {
            hp: 65,
            attack: 83,
            defense: 57,
            spAttack: 95,
            spDefense: 85,
            speed: 105
        },
        sprite: "SpritesGen1/electabuzz.gif"
    },
    {
        id: 126,
        name: "Magmar",
        type: ["Fire"],
        moves: ["Ember", "Fire Punch", "Leer", "Smog"],
        description: "A large, bipedal creature with a fiery body. It is known for its powerful fire attacks and its ability to generate and control flames.",
        stats: {
            hp: 65,
            attack: 95,
            defense: 57,
            spAttack: 100,
            spDefense: 85,
            speed: 93
        },
        sprite: "SpritesGen1/magmar.gif"
    },
    {
        id: 127,
        name: "Pinsir",
        type: ["Bug"],
        moves: ["Vice Grip", "Guillotine", "Focus Energy", "Harden"],
        description: "A large, beetle-like creature with powerful pincers. It is known for its incredible strength and its ability to crush almost anything with its pincers.",
        stats: {
            hp: 65,
            attack: 125,
            defense: 100,
            spAttack: 55,
            spDefense: 70,
            speed: 85
        },
        sprite: "SpritesGen1/pinsir.gif"
    },
    {
        id: 128,
        name: "Tauros",
        type: ["Normal"],
        moves: ["Tackle", "Stomp", "Tail Whip", "Leer"],
        description: "A large, bull-like creature with incredible strength. It is known for its powerful charging attacks and its ability to generate shockwaves by stomping the ground.",
        stats: {
            hp: 75,
            attack: 100,
            defense: 95,
            spAttack: 40,
            spDefense: 70,
            speed: 110
        },
        sprite: "SpritesGen1/tauros.gif"
    },
    {
        id: 129,
        name: "Magikarp",
        type: ["Water"],
        moves: ["Splash", "Tackle"],
        description: "A small, fish-like creature with almost no abilities other than flopping around. However, it can evolve into a much more powerful creature.",
        stats: {
            hp: 20,
            attack: 10,
            defense: 55,
            spAttack: 15,
            spDefense: 20,
            speed: 80
        },
        sprite: "SpritesGen1/magikarp.gif"
    },
    {
        id: 130,
        name: "Gyarados",
        type: ["Water", "Flying"],
        moves: ["Bite", "Dragon Rage", "Hydro Pump", "Leer"],
        description: "The final evolution of Magikarp, Gyarados is a massive, serpentine creature with a powerful, dragon-like appearance. It is known for its incredible strength and its ability to generate powerful water and dragon attacks.",
        stats: {
            hp: 95,
            attack: 125,
            defense: 79,
            spAttack: 60,
            spDefense: 100,
            speed: 81
        },
        sprite: "SpritesGen1/gyarados.gif"
    },
    {
        id: 131,
        name: "Lapras",
        type: ["Water", "Ice"],
        moves: ["Sing", "Water Gun", "Ice Shard", "Body Slam"],
        description: "A large, aquatic creature with a long neck and a hard, shell-like body. It is known for its powerful ice attacks and its ability to carry people and other Pokémon on its back.",
        stats: {
            hp: 130,
            attack: 85,
            defense: 80,
            spAttack: 85,
            spDefense: 95,
            speed: 60
        },
        sprite: "SpritesGen1/lapras.gif"
    },
    {
        id: 132,
        name: "Ditto",
        type: ["Normal"],
        moves: ["Transform"],
        description: "A small, amorphous creature with the ability to transform into any other creature it encounters. It is known for its incredible versatility and adaptability.",
        stats: {
            hp: 48,
            attack: 48,
            defense: 48,
            spAttack: 48,
            spDefense: 48,
            speed: 48
        },
        sprite: "SpritesGen1/ditto.gif"
    },
    {
        id: 133,
        name: "Eevee",
        type: ["Normal"],
        moves: ["Tackle", "Quick Attack", "Bite", "Swift"],
        description: "A small, fox-like creature with the ability to evolve into several different forms depending on the circumstances. It is known for its adaptability and its ability to evolve into powerful creatures.",
        stats: {
            hp: 55,
            attack: 55,
            defense: 50,
            spAttack: 45,
            spDefense: 65,
            speed: 55
        },
        sprite: "SpritesGen1/eevee.gif"
    },
    {
        id: 134,
        name: "Vaporeon",
        type: ["Water"],
        moves: ["Water Gun", "Aurora Beam", "Quick Attack", "Hydro Pump"],
        description: "One of the evolutions of Eevee, Vaporeon is a powerful aquatic creature with the ability to generate and control water.",
        stats: {
            hp: 130,
            attack: 65,
            defense: 60,
            spAttack: 110,
            spDefense: 95,
            speed: 65
        },
        sprite: "SpritesGen1/vaporeon.gif"
    },
    {
        id: 135,
        name: "Jolteon",
        type: ["Electric"],
        moves: ["Thundershock", "Quick Attack", "Double Kick", "Thunderbolt"],
        description: "One of the evolutions of Eevee, Jolteon is a powerful electric creature with the ability to generate and control electricity.",
        stats: {
            hp: 65,
            attack: 65,
            defense: 60,
            spAttack: 110,
            spDefense: 95,
            speed: 130
        },
        sprite: "SpritesGen1/jolteon.gif"
    },
    {
        id: 136,
        name: "Flareon",
        type: ["Fire"],
        moves: ["Ember", "Quick Attack", "Bite", "Fire Blast"],
        description: "One of the evolutions of Eevee, Flareon is a powerful fire creature with the ability to generate and control flames.",
        stats: {
            hp: 65,
            attack: 130,
            defense: 60,
            spAttack: 95,
            spDefense: 110,
            speed: 65
        },
        sprite: "SpritesGen1/flareon.gif"
    },
    {
        id: 137,
        name: "Porygon",
        type: ["Normal"],
        moves: ["Tackle", "Conversion", "Sharpen", "Psybeam"],
        description: "A small, computer-like creature with the ability to travel through cyberspace. It is known for its incredible technological abilities and its ability to generate and control computer programs.",
        stats: {
            hp: 65,
            attack: 60,
            defense: 70,
            spAttack: 85,
            spDefense: 75,
            speed: 40
        },
        sprite: "SpritesGen1/porygon.gif"
    },
    {
        id: 138,
        name: "Omanyte",
        type: ["Rock", "Water"],
        moves: ["Constrict", "Withdraw", "Bite", "Water Gun"],
        description: "A small, spiral-shelled creature with the ability to regenerate its body from even the smallest piece. It is known for its powerful water and rock attacks.",
        stats: {
            hp: 35,
            attack: 40,
            defense: 100,
            spAttack: 90,
            spDefense: 55,
            speed: 35
        },
        sprite: "SpritesGen1/omanyte.gif"
    },
    {
        id: 139,
        name: "Omastar",
        type: ["Rock", "Water"],
        moves: ["Horn Attack", "Withdraw", "Hydro Pump", "Spike Cannon"],
        description: "The final evolution of Omanyte, Omastar is a much larger and more powerful version of the spiral-shelled creature. It is known for its powerful water and rock attacks and its ability to regenerate its body from even the smallest piece.",
        stats: {
            hp: 70,
            attack: 60,
            defense: 125,
            spAttack: 115,
            spDefense: 70,
            speed: 55
        },
        sprite: "SpritesGen1/omastar.gif"
    },
    {
        id: 140,
        name: "Kabuto",
        type: ["Rock", "Water"],
        moves: ["Scratch", "Harden", "Absorb", "Leer"],
        description: "A small, insectoid creature with a hard, shell-like body. It is known for its powerful water and rock attacks.",
        stats: {
            hp: 30,
            attack: 80,
            defense: 90,
            spAttack: 55,
            spDefense: 45,
            speed: 55
        },
        sprite: "SpritesGen1/kabuto.gif"
    },
    {
        id: 141,
        name: "Kabutops",
        type: ["Rock", "Water"],
        moves: ["Scratch", "Harden", "Absorb", "Leer"],
        description: "The final evolution of Kabuto, Kabutops is a much larger and more powerful version of the insectoid creature. It has powerful water and rock attacks and razor-sharp blades on its arms.",
        stats: {
            hp: 60,
            attack: 115,
            defense: 105,
            spAttack: 65,
            spDefense: 70,
            speed: 80
        },
        sprite: "SpritesGen1/kabutops.gif"
    },
    {
        id: 142,
        name: "Aerodactyl",
        type: ["Rock", "Flying"],
        moves: ["Wing Attack", "Agility", "Bite", "Supersonic"],
        description: "A large, winged creature with a hard, rocky body. It is known for its incredible speed and its powerful flying and rock attacks.",
        stats: {
            hp: 80,
            attack: 105,
            defense: 65,
            spAttack: 60,
            spDefense: 75,
            speed: 130
        },
        sprite: "SpritesGen1/aerodactyl.gif"
    },
    {
        id: 143,
        name: "Snorlax",
        type: ["Normal"],
        moves: ["Tackle", "Amnesia", "Body Slam", "Rest"],
        description: "A large, bear-like creature with an insatiable appetite. It is known for its incredible strength and its ability to sleep for days on end.",
        stats: {
            hp: 160,
            attack: 110,
            defense: 65,
            spAttack: 65,
            spDefense: 110,
            speed: 30
        },
        sprite: "SpritesGen1/snorlax.gif"
    },
    {
        id: 144,
        name: "Articuno",
        type: ["Ice", "Flying"],
        moves: ["Ice Shard", "Gust", "Powder Snow", "Mist"],
        description: "One of the legendary birds of Kanto, Articuno is a powerful creature with the ability to generate and control ice.",
        stats: {
            hp: 90,
            attack: 85,
            defense: 100,
            spAttack: 95,
            spDefense: 125,
            speed: 85
        },
        sprite: "SpritesGen1/articuno.gif"
    },
    {
        id: 145,
        name: "Zapdos",
        type: ["Electric", "Flying"],
        moves: ["Thunder Shock", "Drill Peck", "Thunder Wave", "Agility"],
        description: "One of the legendary birds of Kanto, Zapdos is a powerful creature with the ability to generate and control electricity.",
        stats: {
            hp: 90,
            attack: 90,
            defense: 85,
            spAttack: 125,
            spDefense: 90,
            speed: 100
        },
        sprite: "SpritesGen1/zapdos.gif"
    },
    {
        id: 146,
        name: "Moltres",
        type: ["Fire", "Flying"],
        moves: ["Ember", "Wing Attack", "Fire Spin", "Agility"],
        description: "One of the legendary birds of Kanto, Moltres is a powerful creature with the ability to generate and control flames.",
        stats: {
            hp: 90,
            attack: 100,
            defense: 90,
            spAttack: 125,
            spDefense: 85,
            speed: 90
        },
        sprite: "SpritesGen1/moltres.gif"
    },
    {
        id: 147,
        name: "Dratini",
        type: ["Dragon"],
        moves: ["Wrap", "Leer", "Thunder Wave", "Agility"],
        description: "A small, serpentine creature with the ability to grow and evolve into much more powerful creatures. It is known for its powerful dragon attacks.",
        stats: {
            hp: 41,
            attack: 64,
            defense: 45,
            spAttack: 50,
            spDefense: 50,
            speed: 50
        },
        sprite: "SpritesGen1/dratini.gif"
    },
    {
        id: 148,
        name: "Dragonair",
        type: ["Dragon"],
        moves: ["Slam", "Dragon Rage", "Thunder Wave", "Agility"],
        description: "The middle evolution of Dratini, Dragonair is a much larger and more powerful version of the serpentine creature. It is known for its powerful dragon attacks and its ability to control the weather.",
        stats: {
            hp: 61,
            attack: 84,
            defense: 65,
            spAttack: 70,
            spDefense: 70,
            speed: 70
        },
        sprite: "SpritesGen1/dragonair.gif"
    },
    {
        id: 149,
        name: "Dragonite",
        type: ["Dragon", "Flying"],
        moves: ["Wing Attack", "Dragon Rage", "Thunder Wave", "Agility"],
        description: "The final evolution of Dratini, Dragonite is a massive, dragon-like creature with the ability to generate and control powerful winds. It is known for its incredible strength and its ability to fly at incredible speeds.",
        stats: {
            hp: 91,
            attack: 134,
            defense: 95,
            spAttack: 100,
            spDefense: 100,
            speed: 80
        },
        sprite: "SpritesGen1/dragonite.gif"
    },
    {
        id: 150,
        name: "Mewtwo",
        type: ["Psychic"],
        moves: ["Confusion", "Swift", "Barrier", "Recover"],
        description: "A powerful and legendary creature created through genetic engineering. Mewtwo has powerful psychic abilities and is known for its intelligence and strategic thinking.",
        stats: {
            hp: 106,
            attack: 110,
            defense: 90,
            spAttack: 154,
            spDefense: 90,
            speed: 130
        },
        sprite: "SpritesGen1/mewtwo.gif"
    },
    {
        id: 151,
        name: "Mew",
        type: ["Psychic"],
        moves: ["Psychic", "Thunderbolt", "Ice Beam", "Transform"],
        description: "Another legendary creature, Mew is known for its ability to learn and use any move in existence. It is also said to possess the DNA of all Pokémon species.",
        stats: {
            hp: 100,
            attack: 100,
            defense: 100,
            spAttack: 100,
            spDefense: 100,
            speed: 100
        },
        sprite: "SpritesGen1/mew.gif"
    }
];
