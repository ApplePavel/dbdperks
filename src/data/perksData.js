
export const perksData = [
    {
      id: 100,
      icon: "vecna/weaveattunement.png",
      author: {
        en: "The Lich",
        ru: "Лич",
      },
      name: {
        en: "WEAVE ATTUNEMENT",
        ru: "Связь с плетением",

      },
      falseDescription: {
        en: "You are so attuned to magical energies that you can sense even minor ripples around enchantments.",
        ru: "Вы так чутко воспринимаете магические энергии, что можете ощутить малейшее их возмущение возле зачарованных вещей.",
      },
      description: {
        en: "Whenever an Item is depleted for the first time, it is automatically dropped: The Auras of dropped Survivor Items are revealed to you, as well as the Auras of any Survivors within 8 metres of them. Causes Survivors picking up a Survivor Item to suffer from the Oblivious Status Effect for 30 seconds.",
        ru: "Когда у предмета впервые заканчиваются заряды, выживший выбрасывает его. Вы можете видеть ауры брошенных предметов. Вы также видите ауры выживших в радиусе 12 м от брошенных предметов, ауры которых вы увидели. Когда выживший подбирает предмет выжившего, на него действует \"Забывчивость\" в течение 30 секунд.",
      },
      statusEffect: ['Oblivious'],
      falseauthorComment: {
        en: "\"No number of novelties will protect you from me!\" — Vecna",
        ru: "«Никакие новомодные штучки не защитят вас от меня!» — Векна"
      }
      
    },

    {
      id: 200,
      icon: "vecna/languidtouch.png",
      author: {
        en: "The Lich",
        ru: "Лич",
      },
      name: {
        en: "LANGUID TOUCH",
        ru: "Безжизненное касание",
      },
      falseDescription: {
        en: "Your dreadful aura is so suffocating that even terrifying scenes tire your prey.",
        ru: "Ваша кошмарная аура давит на голову и создает пугающие образы, которые изматывают жертву",
      },
      description: {
        en: "When a Survivor within 36 meters of you scares a crow, they gain the Exhausted status effect for 10 seconds. Languid Touch has a cooldown of 20 seconds.",
        ru: "Когда выживший оказывается в 36 м от вас и спугивает ворону, на него накладывается эффект \"Усталость\" на 10 секунд. Этот навык восстанавливается в течение 20 сек.",
      },
      statusEffect: ['Exhausted'],
      falseauthorComment: {
        en: "\"Submit to me. It is inevitable.\" — Vecna",
        ru: "«Подчинись мне. Прими неотвратимое!» - Векна"
      }
      
    },

    {
      id: 300,
      icon: "vecna/darkarrogance.png",
      author: {
        en: "The Lich",
        ru: "Лич",
      },
      name: {
        en: "Dark Arrogance",
        ru: "Темное высокомерие",

      },
      falseDescription: {
        en: "When everything is going right, you are an inescapable inevitability.",
        ru: "Когда все идет как надо, вы сами становитесь неизбежностью.",
      },
      description: {
        en: "Increases the duration you are blinded by any means and the duration of pallet stuns by 25%. Increases regular vault speed by 25%.",
        ru: "Увеличивает длительность вашего ослепления любыми средствами и оглушения досками на 25%. Увеличивает скорость обычного прыжка на 25%.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"No number of novelties will protect you from me!\" — Vecna",
        ru: "«Никакие новомодные штучки не защитят вас от меня!» — Векна"
      }
      
    },

    {
      id: 1,
      icon: "trapper/agitation.png",
      author: {
        en: "The Trapper",
        ru: "Охотник",
      },
      name: {
        en: "Agitation",
        ru: "Нетерпимость",

      },
      falseDescription: {
        en: "You get excited in anticipation of hooking your prey.",
        ru: "Вас будоражит желание поскорее повесить вашу добычу. ",
      },
      description: {
        en: "Increases your speed while transporting bodies by 18 %. While transporting a body, your Terror Radius is increased by 12 metres.",
        ru: "Увеличивает вашу скорость во время перемещения тел на 18%. Во время транспортировки тела радиус вашего террора увеличивается на 12 м.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"At some point, the excitement of hooking one of us becomes more important than the desire to kill us.\"",
        ru: "«В какой-то момент желание повесить одного из нас на крюк перевешивает желание убить нас.»"
      }
      
    },

    {
      id: 2,
      icon: "trapper/brutalstrength.png",
      author: {
        en: "The Trapper",
        ru: "Охотник",
      },
      name: {
        en: "BRUTAL STRENGTH",
        ru: "Зверская сила",

      },
      falseDescription: {
        en: "Your great strength allows you to shred through your prey's defences.",
        ru: "С такой великой силой вам не страшна никакая преграда.",
      },
      description: {
        en: "Destroy dropped pallets, breakable walls, and generators 20% faster.",
        ru: "Теперь вы ломаете опрокинутые доски, разрушаемые стены и генераторы на 20% быстрее.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"It is more than muscles. A dark power motivates the beast.\"",
        ru: "«Это больше, чем просто мышцы. Зверем движут сами силы тьмы.»"
      }
      
    },

    {
      id: 3,
      icon: "trapper/unnervingpresence.png",
      author: {
        en: "The Trapper",
        ru: "Охотник",
      },
      name: {
        en: "unnerving presence",
        ru: "Пугающее присутствие",

      },
      falseDescription: {
        en: "Your presence alone instils great fear.",
        ru: "Одно ваше присутствие вселяет страх.",
      },
      description: {
        en: "Survivors within your Terror Radius have a 10 % greater chance of triggering Skill Checks when repairing, healing or sabotaging. Triggered Skill Checks' success zones are reduced by 60%.",
        ru: "У выживших, находящихся в пределах вашего радиуса террора, на 10% чаще срабатывает проверка реакции при починке или лечении. Зона успеха при проверке реакции уменьшается на 60%.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"Its presence befalls us.\"",
        ru: "«Когда он рядом, мы не можем сосредоточиться.»"
      }
      
    },

    {
      id: 4,
      icon: "wraith/bloodhound.png",
      author: {
        en: "The Wraith",
        ru: "Призрак",
      },
      name: {
        en: "Bloodhound",
        ru: "Ищейка ",

      },
      falseDescription: {
        en: "Like a hunting scent hound, you smell traces of blood at a great distance.",
        ru: "Подобно гончей, вы чуете кровь издалека.",
      },
      description: {
        en: "Pools of Blood are considerably more discernible than normal and can be tracked for 4 seconds longer than normal.",
        ru: "Подобно гончей, вы чуете кровь издалека. Свежие следы крови значительно заметнее, чем обычно, и отслеживаются на 4 дольше.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"Pebbles shimmering in the moonlight; my life drips down in a trail so easy to follow\"",
        ru: "«Камушки переливаются в лунном свете; жизнь моя стекает по тропинке, которую так легко найти»"
      }
      
    },

    {
      id: 5,
      icon: "wraith/predator.png",
      author: {
        en: "The Wraith",
        ru: "Призрак",
      },
      name: {
        en: "Predator",
        ru: "Хищник",

      },
      falseDescription: {
        en: "Your acute tracking ability allows you to hone in on disturbances left by running Survivors.",
        ru: "Ваш талант следопыта позволяет тщательнее исследовать следы, которые оставляют за собой бегущие выжившие.",
      },
      description: {
        en: "Scratch Marks left by Survivors will spawn considerably closer together.",
        ru: "Следы-трещины, оставленные Выжившими, будут появляться значительно ближе и плотнее друг к другу.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"Never stop moving and hope you're always two steps ahead of the beast.\" — Unknown, Notebook",
        ru: "«Никогда не останавливайся и надейся, что ты всегда на два шага впереди зверя» — Из дневника"
      }
      
    },

    {
      id: 6,
      icon: "wraith/shadowborn.png",
      author: {
        en: "The Wraith",
        ru: "Призрак",
      },
      name: {
        en: "Shadowborn",
        ru: "Детище тьмы",

      },
      falseDescription: {
        en: "You have a keen vision in the darkness of the night.",
        ru: "Вы хорошо видите во мраке ночи.",
      },
      description: {
        en: "When blinded by any means, Shadowborn grants a 10 % Haste Status Effect for 10 seconds.",
        ru: "Если вы ослеплены любым способом, то получаете 10 % Спешки на 10 сек.",
      },
      statusEffect: ['Haste'],
      falseauthorComment: {
        en: "\"Shining in the darkest dark, his eyes pierce the night and sting your soul.\"",
        ru: "«Его глаза, сияющие во мраке, пронзают ночь и жалят твою душу.»"
      }
      
    },

    {
      id: 7,
      icon: "hillbilly/Enduring.png",
      author: {
        en: "The Hillbilly",
        ru: "Деревенщина",
      },
      name: {
        en: "Enduring",
        ru: "Стойкий",

      },
      falseDescription: {
        en: "You are resilient to pain.",
        ru: "Вы не чувствуете боль. ",
      },
      description: {
        en: "Reduces the duration of Pallet Stuns by 50 %. Enduring has no effect while carrying a Survivor.",
        ru: "Длительность оглушения досками снижена на 50 %. Не действует во время переноски выживших.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"He stops at nothing.\"",
        ru: "«Его ничто не остановит.»"
      }
      
    },

    {
      id: 8,
      icon: "hillbilly/lightborn.png",
      author: {
        en: "The Hillbilly",
        ru: "Деревенщина",
      },
      name: {
        en: "Lightborn",
        ru: "Детище света",

      },
      falseDescription: {
        en: "Unlike other beasts of The Fog, you have adapted to light.",
        ru: "В отличие от других тварей из Тумана, вы приспособились к свету",
      },
      description: {
        en: "The Auras of Survivors attempting to blind you with a Flashlight are revealed to you for 10 seconds. Lightborn grants immunity from being blinded by Flashlights, Firecrackers, Flashbangs, or Blast Mines.",
        ru: "Вы обрели иммунитет к ослеплению фонариками, хлопушками, ослепляющими гранатами и фугасными минами. Ауры выживших, которые пытаются вас ослепить, подсвечиваются вам на 10 секунд.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"These monsters... they adapt! They emerge with strange new abilities.\" — Vigo, Vigo's Journal",
        ru: "«Эти монстры... они приспосабливаются! У них откуда-то появляются странные новые способности» — Из дневника Виго"
      }
      
    },

    {
      id: 9,
      icon: "hillbilly/Tinkerer.png",
      author: {
        en: "The Hillbilly",
        ru: "Деревенщина",
      },
      name: {
        en: "Tinkerer",
        ru: "Умелец",

      },
      description: {
        en: "When a Generator is repaired to 70 %, you receive a Loud Noise notification and you are granted the Undetectable Status Effect for 16 seconds. Tinkerer can only trigger once per Generator per Trial.",
        ru: "Когда ремонт генератора доходит до 70%, вы слышите громкий звук и получаете эффект Незаметность на следующие 16 секунд. Этот эффект может сработать только по разу для каждого генератора.",
      },
      statusEffect: ['Undetectable'],
      falseauthorComment: {
        en: "\"The Hillbilly makes impressive tools out of scraps. Tools aimed at maiming us in creative ways.\" — Notebook",
        ru: " «Деревенщина делает впечатляющие штуки из разного хлама. Очень творческий подход к издевательствам над нами...» — запись в блокноте"
      }
      
    },

    {
      id: 10,
      icon: "nurse/nursecalling.png",
      author: {
        en: "The Nurse",
        ru: "Медсестра",
      },
      name: {
        en: "A Nurse's Calling",
        ru: "Зов Медсестры ",

      },
      falseDescription: {
        en: "Unlocks potential in one's aura reading ability.",
        ru: "У Вас появляется способность чтения ауры. ",
      },
      description: {
        en: "The auras of Survivors who are healing or being healed are revealed to you when they are within a 28 meter range.",
        ru: "Ауры выживших — лечащих или лечащихся — раскрываются вам, когда они находятся в радиусе 28 м. от вас.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"Still attached to the fragments of her past life, she is drawn to those in need of help.\"",
        ru: "«Еще не потерявшая всех воспоминаний из прошлой жизни, ее влечет к нуждающимся, как и раньше.»"
      }
      
    },
    {
      id: 11,
      icon: "nurse/stridor.png",
      author: {
        en: "The Nurse",
        ru: "Медсестра",
      },
      name: {
        en: "Stridor",
        ru: "Стридор",

      },
      falseDescription: {
        en: "You are acutely sensitive to the breathing of your prey.",
        ru: "Вы крайне чувствительны к дыханию своей жертвы.",
      },
      description: {
        en: "Breathing of Survivors in pain is 50% louder and regular breathing is 25% louder.",
        ru: "Дыхание выживших, страдающих от боли, звучит на 50% громче, обычное дыхание громче на 25%.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"If you don't stop and catch your breath… she will.\"",
        ru: "«Если не остановитесь и не задержите дыхание... она задержит его за вас.»"
      }
      
    },
    {
      id: 12,
      icon: "nurse/thanataphobia.png",
      author: {
        en: "The Nurse",
        ru: "Медсестра",
      },
      name: {
        en: "Thanatophobia",
        ru: "Танатофобия",

      },
      falseDescription: {
        en: "Their courage fades in the face of undeniable mortality.",
        ru: "Их храбрость тает перед лицом неизбежной смерти.",
      },
      description: {
        en: "For each injured, dying, or hooked Survivor, all Survivors receive a penalty of 2% to repair, sabotage and Totem-cleansing speeds. If there are 4 injured, dying or hooked Survivors, there is an additional 12% penalty to repair, sabotage and Totem-cleansing speeds.",
        ru: "За каждого раненного, умирающего или повешенного на крюк выжившего скорость поломки, починки и очистки тотемов у всех выживших снижается на 2%. Если одновременно есть 4 раненых, умирающих или повешенных на крюк выживших, скорость поломки, починки и очистки тотемов дополнительно снижается на 12%.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"She plays with us and revels in our pain.\"",
        ru: "«Она играет с нами и наслаждается нашей болью.»"
      }
      
    },

    {
      id: 13,
      icon: "shape/dyinglight.png",
      author: {
        en: "The Shape",
        ru: "Тень",
      },
      name: {
        en: "Dying Light",
        ru: "Угасающий свет",

      },
      description: {
        en: "You become obsessed with one Survivor. Your Obsession gains a 33% action speed bonus to unhooking and healing other Survivors. Each time you hook a Survivor other than the Obsession, if the Obsession is alive, gain a token. If the Obsession is alive, all Survivors who are not the Obsession get 3% penalty to repair, healing and sabotage speeds for each token.",
        ru: "Вы становитесь одержимы одним выжившим. Объект вашей одержимости получает бонус к скорости действий 33% при снятии с крюка и лечении других выживших. Каждый раз, когда вы вешаете на крюк выжившего, не являющегося объектом вашей одержимости, и если объект одержимости при этом жив, вы получаете жетон. Пока объект одержимости жив, остальные выжившие получают штраф к скорости ремонта, лечения и поломки 3% за каждый жетон.",
      },
      statusEffect: ['Obsession'],
      falseauthorComment: {
        en: "\"This isn't a man...» -Dr.Sam Loomis\"",
        ru: "«Это не человек...» — Доктор Сэм Лумис"
      }
      
    },

    {
      id: 14,
      icon: "shape/playwith.png",
      author: {
        en: "The Shape",
        ru: "Тень",
      },
      name: {
        en: "Play With Your Food",
        ru: "Поиграть со своей жертвой",

      },
      description: {
        en: "You become obsessed with one Survivor. Every time you chase your Obsession and let them escape, you receive a token up to a maximum of 3 tokens. Each token increases your movement speed by 5%. Performing a basic attack or Special Attack spends one token.",
        ru: "Вы становитесь одержимы одним выжившим. Каждый раз, когда вы преследуете и упускаете объект одержимости, вы получаете 1 жетон (вплоть до 3). Каждый жетон повышает вашу скорость передвижения на 5%. Каждая базовая или особая атака тратит один жетон.",
      },
      statusEffect: ['Obsession', 'Haste'],
      falseauthorComment: {
        en: "\"You've fooled them, haven't you Michael? But not me.\" -Dr. Sam Loomis",
        ru: "«Ты обманул их, не так ли, Майкл? Но не меня.» — Доктор Сэм Лумис"
      }
      
    },

    {
      id: 15,
      icon: "shape/savethe.png",
      author: {
        en: "The Shape",
        ru: "Тень",
      },
      name: {
        en: "Save the Best for Last",
        ru: "Оставьте лучшее напоследок",

      },
      description: {
        en: "You become obsessed with one Survivor. Earn a token for each successful basic attack that is not dealt to the Obsession. Each token grants a stackable 4% decreased successful basic attack cooldown, you can earn up to 8 tokens. When you hit the Obsession with a Basic Attack or Special Attack, lose 2 tokens. You cannot gain tokens as long as your Obsession is sacrificed or killed",
        ru: "Вы становитесь одержимы одним выжившим. За каждый успешный удар базовой атакой НЕ по объекту одержимости вы получаете один жетон. Каждый жетон ускоряет восстановление после успешных базовых атак на 4% (эффект суммируется). Всего вы можете получить до 8 жетонов. Нанеся удар по объекту одержимости обычной или особой атакой, вы теряете 2 шт. жетонов. Вы не сможете получать жетоны, пока ваш объект одержимости не будет принесен в жертву или убит.",
      },
      statusEffect: ['Obsession'],
      falseauthorComment: {
        en: "\"Death has come to your little town, sheriff.\" -Dr. Sam Loomis",
        ru: "«Смерть пришла в Ваш маленький городок, шериф» — Доктор Сэм Лумис"
      }
      
    },

    {
      id: 16,
      icon: "hag/devour.png",
      author: {
        en: "The Hag",
        ru: "Ведьма",
      },
      name: {
        en: "Hex: Devour Hope",
        ru: "Порча: пожирание надежды",

      },
      falseDescription: {
        en: "A Hex rooting its power on hope. The false hope of Survivors ignites your hunger.",
        ru: "Порча, черпающая силу в надежде. Ложная надежда выживших лишь усиливает ваш голод.",
      },
      description: {
        en: "When a Survivor is rescued from a hook at least 24 meters away, Devour Hope receives a token. 2 Tokens: Gain a 5% Haste status effect, 10 seconds after hooking a Survivor, for a duration of 10 seconds. 3 Tokens: Survivors suffer from the Exposed status effect. 5 Tokens: Grants the ability to kill Survivors by your own hand. The Hex effects persist as long as the related Hex Totem is standing.",
        ru: "Когда выживший спасён с крюка хотя бы в 24 метрах от вас, навык \"Пожирание надежды\" получает жетон. 2 жетона: Через 10 сек. после того, как вы вешаете выжившего на крюк, вы получаете эффект \"Спешка\" 5% на 10 сек. 3 жетона: Выжившие получают эффект \"Уязвимость\". 5 жетона: Дает возможность убивать выживших своими руками. Порча действует, пока не уничтожен соответствующий тотем.",
      },
      statusEffect: ['Exposed', 'Haste'],
      falseauthorComment: {
        en: "\"If you do nothing, you have their blood on your hands. If you save them, her hunger grows.\"",
        ru: "«Если бездействуешь, ты виноват в их смерти. Но если ты их спасаешь, это лишь еще больше усиливает её голод.»"
      }
      
    },

    {
      id: 17,
      icon: "hag/ruin.png",
      author: {
        en: "The Hag",
        ru: "Ведьма",
      },
      name: {
        en: "Hex: Ruin",
        ru: "Порча: погибель",

      },
      falseDescription: {
        en: "A Hex that affects all Survivors' generator repair progress.",
        ru: "Порча, влияющая на прогресс починки генераторов у всех выживших.",
      },
      description: {
        en: "All generators are affected by Hex: Ruin. While a generator is not being repaired by a Survivor, it will immediately and automatically regress repair progress at 100% of the normal regression speed. The Hex effects persist as long as the related Hex Totem is standing.",
        ru: "\"Порча: Погибель\" воздействует на все генераторы. Когда выживший прекращает чинить генератор, прогресс тут же автоматически начинает снижаться со скоростью 100% от обычной. Порча действует, пока не уничтожен соответствующий тотем.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"A curse is upon you. It will be your ruin.\"",
        ru: "«На тебе лежит проклятие. Оно приведет к твоей погибели.»"
      }
      
    },

    {
      id: 18,
      icon: "hag/seal.png",
      author: {
        en: "The Hag",
        ru: "Ведьма",
      },
      name: {
        en: "Hex: The Third Seal",
        ru: "Порча: третья печать",

      },
      falseDescription: {
        en: "A Hex that hinders one's aura reading ability.",
        ru: "Порча, препятствующая чтению ауры.",
      },
      description: {
        en: "Hitting a Survivor with a basic attack or a special attack while the Hex Totem is active applies the Blindness status effect. This effect applies to the last 4 Survivors hit. The Hex effects persist as long as the related Hex Totem is standing.",
        ru: "При активном тотеме порчи удар по выжившему базовой или особой атакой вызывает эффект \"Слепота\", который распространяется на последних 4 выживших, попавших под удар. Порча действует пока не уничтожен соответствующий тотем.",
      },
      statusEffect: ['Blindness'],
      falseauthorComment: {
        en: "\"She touched your skin, you bear the witch's mark!\"",
        ru: "«Она дотронулась до тебя, теперь на тебе метка ведьмы!»"
      }
      
    },

    {
      id: 19,
      icon: "doctor/monitor.png",
      author: {
        en: "The Doctor",
        ru: "Доктор",
      },
      name: {
        en: "Monitor & Abuse",
        ru: "Слежка и наказание",

      },
      falseDescription: {
        en: "Meticulous in your approach, terrifying in your application.",
        ru: "Щепетильный в своих методах и грозный в своем обличии.",
      },
      description: {
        en: "While in a chase, your Terror Radius is increased by 8 meters. Otherwise, your Terror Radius is decreased by 8 meters.",
        ru: "Во время погони ваш радиус террора увеличивается на 8 метров. В обычном состоянии ваш радиус террора уменьшается на 8 метров.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"It's time for your treatment!\" -The Doctor",
        ru: "«Вам пора на процедуры!» — Доктор"
      }
      
    },

    {
      id: 20,
      icon: "doctor/overcharge.png",
      author: {
        en: "The Doctor",
        ru: "Доктор",
      },
      name: {
        en: "Overcharge",
        ru: "Перегрузка",

      },
      falseDescription: {
        en: "You are fuelled by your hate for progress.",
        ru: "Вас переполняет ненависть к прогрессу.",
      },
      description: {
        en: "Overcharge a generator by performing the Damage Generator action. The next Survivor interacting with that generator is faced with a difficult Skill Check. Failing the Skill Check results in an additional 4% loss of progress.Succeeding the Skill Check grants no progress but prevents the generator explosion. After Overcharge is applied to a generator, its regression speed increases from 85% of normal to 130% of normal over the next 30 seconds.",
        ru: "Вы можете перегрузить генератор, совершив действие \"Поломка генератора\". Выживший, который попытается взаимодействовать с этим генератором, столкнется с тяжелой проверкой реакции. При провале этой проверки починка откатывается еще на 4%. Успешная проверка не увеличивает прогресс починки, но защищает от взрыва. Когда к генератору применяется \"Перегрузка\", скорость отката его ремонта увеличивается с 85% от обычной до 130% за следующие 30 сек.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"It is a trap. But a trap one must step in…\" -The Doctor",
        ru: "«Это ловушка, но в нее придется шагнуть...» — Доктор"
      }
      
    },

    {
      id: 21,
      icon: "doctor/overhelming.png",
      author: {
        en: "The Doctor",
        ru: "Доктор",
      },
      name: {
        en: "Overwhelming Presence",
        ru: "Невыносимое присутствие",

      },
      falseDescription: {
        en: "Just knowing you are near is enough to disturb your victims.",
        ru: "Жертв сковывает страх от одного осознания, что вы рядом.",
      },
      description: {
        en: "Survivors within your Terror Radius suffer from inefficiency. Affected Survivors item consumption rates are increased by 100%.",
        ru: "Выжившие, находящиеся в вашем радиусе террора, очень нервничают. Скорость траты предметов у этих выживших возрастает на 100%.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"Shit!! I dropped the gauze!\"",
        ru: "«Дерьмо! Я уронил повязку!»"
      }
      
    },

    {
      id: 22,
      icon: "huntress/beast.png",
      author: {
        en: "The Huntress",
        ru: "Охотница",
      },
      name: {
        en: "Beast of prey",
        ru: "Хищный зверь",

      },
      falseDescription: {
        en: "Your lust for a kill is so intense that your connection with The Entity is momentarily lost, making you totally unpredictable.",
        ru: "Ваша жажда убийства столь сильна, что на короткое время затмевает даже связь с Сущностью, и ваши действия становятся совершенно непредсказуемыми.",
      },
      description: {
        en: "Grants the Undetectable status effect after gaining Bloodlust Tier I. The status effect is removed once you lose Bloodlust. Gain 50% more Bloodpoints for actions in the Hunter Category.",
        ru: "Когда вы получаете 1-й уровень кровожадности, на вас начинает действовать эффект \"Незаметность\". Эффект пропадает, когда вы теряете кровожадность. Вы получаете на 50% больше очков крови в категории \"Охота\".",
      },
      statusEffect: ['Undetectable'],
      falseauthorComment: {
        en: "\"Where did she go?\"",
        ru: "«Куда она подевалась?»"
      }
      
    },


    {
      id: 23,
      icon: "huntress/lullaby.png",
      author: {
        en: "The Huntress",
        ru: "Охотница",
      },
      name: {
        en: "Hex: Huntress Lullaby",
        ru: "Порча: колыбельная охотницы",

      },
      falseDescription: {
        en: "A Hex rooting its power in despair. Your hunt is an irresistible song of dread which muddles your prey's attention.",
        ru: "Порча, черпающая свою силу из отчаяния. Вы напеваете навязчивую мелодию ужаса, которая путает мысли жертвы.",
      },
      description: {
        en: "Survivors receive a 6% regression penalty when missing a Skill Check while healing or repairing. Each time a Survivor is hooked, Huntress Lullaby grows in power. It affects healing and repairing Skill Check warnings: 1 to 4 Tokens: Time between the Skill Check warning sound and the Skill Check becomes shorter. 5 Tokens: No Skill Check warning. The Hex effects persist as long as the related Hex Totem is standing.",
        ru: "Выжившие получают штраф 6% к прогрессу при лечении или починке, если проваливают проверку реакции. Каждый раз, когда выживший попадает на крюк, сила \"Колыбельной Охотницы\" возрастает. Это сказывается на предупреждении о проверках реакции при лечении и починке: от 1 до 4 жетонов: время между проверками реакции и предупреждающим о них звуком сокращается. 5 жетонов: нет предупреждения при проверке реакции. Эффект порчи сохраняется, пока стоит соответствующий ей тотем.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"That song, it drives me crazy!\"",
        ru: "«Это пение, сводит меня с ума!»"
      }
      
    },


    {
      id: 24,
      icon: "huntress/territorial.png",
      author: {
        en: "The Huntress",
        ru: "Охотница",
      },
      name: {
        en: "Territorial Imperative",
        ru: "Территориальный императив",

      },
      falseDescription: {
        en: "Unlocks potential in one's aura reading ability.",
        ru: "У вас появляется способность чтения ауры.",
      },
      description: {
        en: "Survivors' auras are revealed to you for 6 seconds when they enter the basement and you are more than 24 meters away from the basement entrance. Territorial Imperative can only be triggered once every 45 seconds.",
        ru: "Ауры выживших раскрываются вам на 6 секунд, когда те спускаются в подвал, а вы находитесь более чем в 24-х метрах от него. Территориальный Императив может сработать лишь раз в 45 секунд.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"We're not safe anywhere...\"",
        ru: "«Мы нигде не в безопасности...»"
      }
      
    },

    {
      id: 25,
      icon: "cannibal/barbeque.png",
      author: {
        en: "The Cannibal",
        ru: "Каннибал",
      },
      name: {
        en: "Barbecue & Chili",
        ru: "Барбекю и чили",

      },
      falseDescription: {
        en: "A deep bond with The Entity unlocks potential in one's aura reading ability.",
        ru: "Тесная связь с Сущностью дарует вам способность чтения аур.",
      },
      description: {
        en: "After hooking a Survivor, all other Survivors' auras are revealed to you for 5 seconds when they are further than 40 meters from the hook.",
        ru: "После того, как вы вешаете выжившего на крюк, ауры остальных выживших открываются вам на 5 сек., если они находятся более чем в 40 метров от крюка.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"I just can't take no pleasure in killing. There's just some things you gotta do. Don't mean you have to like it.\" -Drayton Sawyer",
        ru: "«Не могу получать удовольствия от убийств. Да, есть вещи, которые приходится делать. Это не значит, что они должны тебе нравиться» — Дрейтон Сойер"
      }
      
    },

    {
      id: 26,
      icon: "cannibal/franklin.png",
      author: {
        en: "The Cannibal",
        ru: "Каннибал",
      },
      name: {
        en: "Franklin's Demise",
        ru: "Гибель Франклина",

      },
      falseDescription: {
        en: "",
        ru: "",
      },
      description: {
        en: "Your basic attacks make Survivors drop their item on impact. While on the ground, it takes up to 90 seconds for the item to lose all of its charges if it is not picked up. Reveal items on the ground within 32 meters with a white aura. The Aura will slowly fade to red until the Item is empty of charges.",
        ru: "Ваши базовые атаки заставляют попавших под удар выживших ронять предметы. Лежащий на земле предмет теряет все заряды за 90 секунд, если его не подобрать. Ауры выпавших предметов в радиусе 32 м подсвечиваются белым. Ауры предметов постепенно краснеют, пока их заряды не истощатся.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"Sally, I hear something. Stop! Stop!\" -Franklin",
        ru: "«Салли, я что-то слышу. Стой! Остановись!» — Франклин"
      }
      
    },

    {
      id: 27,
      icon: "cannibal/knock.png",
      author: {
        en: "The Cannibal",
        ru: "Каннибал",
      },
      name: {
        en: "Knock Out",
        ru: "Нокаут",

      },
      falseDescription: {
        en: "The trauma caused by your brutal attacks makes crying for help painfully difficult.",
        ru: "Травмы, нанесенные вашими жестокими ударами, не позволяют выжившим звать на помощь.",
      },
      description: {
        en: "Survivors put into the dying state by your basic attacks are not revealed to other Survivors when they are standing outside of a 16 meter range. Survivors put into the dying state by your basic attacks crawl 50% slower for 15 seconds, and their recovery speed is reduced by 25%. During this time, Survivors are affected by the Blindness status effect.",
        ru: "Ауры умирающих выживших, которых вы сразили базовыми атаками, не видны их союзникам, пока те находятся более чем в 16 метров от них. Умирающие выжившие, которых вы сразили базовыми атаками, ползают на 50% медленнее в течение 15 сек., а их скорость восстановления снижается на 25%. В это время на выживших действует эффект \"Слепота\".",
      },
      statusEffect: ['Blindness'],
      falseauthorComment: {
        en: "\"Oh, that gun's no good. The old way… with a sledge! You see, that way's better. They die better that way.\" -Nubbins Sawyer",
        ru: "«О, пистолет? Нет, это ерунда. По старинке... молотком! Так гораздо лучше, знаете ли. Так они умирают куда интереснее» — Наббинс Сойер"
      }
      
    },


    {
      id: 28,
      icon: "nightmare/blood.png",
      author: {
        en: "The Nightmare",
        ru: "Кошмар",
      },
      name: {
        en: "Blood Warden",
        ru: "Кровавый смотритель",

      },
      falseDescription: {
        en: "",
        ru: "",
      },
      description: {
        en: "As soon as an exit gate is opened, Blood Warden is activated. The auras of any Survivors located within Exit areas are revealed to you. Once per match, hooking a Survivor while Blood Warden is active calls upon The Entity to block both Exits for all Survivors for 60 seconds.",
        ru: "Как только открываются ворота, активируется навык \"Кровавый смотритель\". Вы будете видеть ауры выживших, которые находятся рядом с выходом. Раз в матч, когда хотя бы одни ворота открыты, повесив выжившего на крюк, вы призываете Сущность заблокировать все выходы для выживших на 60 секунд.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\“This is my world. And you can't ever leave.\” - Freddy Krueger",
        ru: "«Это мой мир, и вам отсюда не сбежать!» — Фредди Крюгер"
      }
      
    },

    {
      id: 29,
      icon: "nightmare/fire.png",
      author: {
        en: "The Nightmare",
        ru: "Кошмар",
      },
      name: {
        en: "Fire Up",
        ru: "Яркое пламя",

      },
      falseDescription: {
        en: "The increased pressure of losing your prey fills you with anger and gives you unsuspected motivation.",
        ru: "Страх потерять своих жертв наполняет вас злобой и заставляет продолжать охоту.",
      },
      description: {
        en: "Each time the Survivors complete repairs on a generator, Fire Up grows in power. For each generator completed, gain a 4% stackable buff that grants a speed bonus to picking up, dropping, vaulting, damaging generators, and breaking pallets and breakable walls for the remainder of the trial.",
        ru: "Каждый раз, после того как выживший восстанавливает генератор, пламя мести разгорается сильнее. За каждый отремонтированный генератор вы получаете +4% (бонус суммируется) к скорости следующих действий до конца матча: поднятие/бросание, преодоление препятствий, поломка генераторов, досок и стен.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "“Now why don't you just fucking die?” - Freddy Krueger",
        ru: "«Почему ты просто не сдохнешь?» — Фредди Крюгер"
      }
      
    },

    {
      id: 30,
      icon: "nightmare/remember.png",
      author: {
        en: "The Nightmare",
        ru: "Кошмар",
      },
      name: {
        en: "Remember Me",
        ru: "Помни меня",

      },
      falseDescription: {
        en: "",
        ru: "",
      },
      description: {
        en: "You become obsessed with one Survivor. Each time your Obsession loses a health state, gain 1 token, up to 4. Each token increases the opening time of the exit gates by 6 seconds up to a maximum of 24 additional seconds. The Obsession is not affected by Remember Me.",
        ru: "Вы становитесь одержимы одним выжившим. Каждый раз, когда состояние здоровья такого выжившего ухудшается, вы получаете жетон (не более 4). С каждым жетоном время, необходимое для открытия ворот, увеличивается на 6 сек., вплоть до 24 секунд максимум. Навык \"Помни меня\" не влияет на объект одержимости.",
      },
      statusEffect: ['Obsessed'],
      falseauthorComment: {
        en: "\“You don't remember? You must. You're my number one, and you'll never wake up again.\” - Freddy Krueger",
        ru: "«Ты не помнишь? Надо вспомнить. Ты мой любимчик. Ты никогда больше не проснешься» — Фредди Крюгер"
      }
      
    },


    {
      id: 31,
      icon: "pig/make.png",
      author: {
        en: "The Pig",
        ru: "Свинья",
      },
      name: {
        en: "Make Your Choice",
        ru: "Выбор за тобой",

      },
      falseDescription: {
        en: "",
        ru: "",
      },
      description: {
        en: "When a Survivor rescues another from a hook at least 32 meters away from you, Make your Choice causes the Survivor to scream and applies the Exposed status effect to them for 60 seconds. Make your Choice has a cooldown of 60 seconds.",
        ru: "Когда выживший спасает своего союзника с крюка на расстоянии хотя бы 32 метров от вас, срабатывает \"Выбор за тобой\": спасатель вскрикивает, и на него накладывается эффект \"Уязвимость\" на 60 секунд. \"Выбор за тобой\" может снова сработать через 60 сек.",
      },
      statusEffect: ['Exposed'],
      falseauthorComment: {
        en: "\"You'd be surprised what tools can save a life.\" -Amanda Young",
        ru: "«Ты бы удивилась, узнав, какие инструменты могут спасти жизнь» — Аманда Янг"
      }
      
    },

    {
      id: 32,
      icon: "pig/scourge.png",
      author: {
        en: "The Pig",
        ru: "Свинья",
      },
      name: {
        en: "Scourge Hook: Hangman's Trick",
        ru: "Секущий крюк: секрет палача",

      },
      falseDescription: {
        en: "Your ingenious modifications to hooks alert you of tampering.",
        ru: "Благодаря хитроумным усовершенствованиям крюков вы узнаете, если кто-то пытается их повредить.",
      },
      description: {
        en: "At the start of the trial, 4 random hooks are changed into scourge hooks. You see their auras in white. Gain a notification when a Survivor begins sabotaging a hook. While carrying a Survivor, see the aura of any Survivor within 12 meters of a scourge hook",
        ru: "В начале матча 4 случайных крюка заменяются на секущие, и вы видите их белые ауры. Вы получаете уведомление, когда выживший начинает ломать крюк. Когда вы несете выжившего, вам будет показана аура любого выжившего в радиусе 10 метров от секущего крюка.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"No excuses, no equivocations… No crying.\" -Amanda Young",
        ru: "«Не оправдывайся. Не хитри... И не плачь.» — Аманда Янг"
      }
      
    },

    {
      id: 33,
      icon: "pig/surveillance.png",
      author: {
        en: "The Pig",
        ru: "Свинья",
      },
      name: {
        en: "Surveillance",
        ru: "Наблюдение",

      },
      falseDescription: {
        en: "Unlocks potential in one's aura reading ability.",
        ru: "У вас появляется способность чтения ауры.",
      },
      description: {
        en: "Any regressing generator will be highlighted by a white aura. If the regression is interrupted on a generator, it will be highlighted by a yellow aura for 16 seconds. Noises created by generator repairs are audible at an additional 8 meters.",
        ru: "Любой сломанный генератор подсвечивается белым. Если поломка исправлена, генератор подсвечивается желтым на 16 секунд. Шум от ремонта генераторов слышен на большем расстоянии (+8м).",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"Are you gonna behave?\" -Amanda Young",
        ru: "«Будешь паинькой?» - Аманда Янг"
      }
      
    },

    {
      id: 34,
      icon: "clown/bamboozle.png",
      author: {
        en: "The Clown",
        ru: "Клоун",
      },
      name: {
        en: "Bamboozle",
        ru: "Розыгрыш",

      },
      falseDescription: {
        en: "",
        ru: "",
      },
      description: {
        en: "Your vault speed is 15% faster. Performing a vault action calls upon The Entity to block that vault location to Survivors for 16 seconds. Only 1 vault location may be blocked in this way at any time. Does not affect pallets.",
        ru: "Вы перелезаете через препятствия на 15% быстрее. После преодоления препятствия Сущность заблокирует его на 16 секунд. Навык может заблокировать только одно препятствие за раз. Препятствие заблокировано только для Выживших. Не действует на доски.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "",
        ru: ""
      }
      
    },

    {
      id: 35,
      icon: "clown/coulrophobia.png",
      author: {
        en: "The Clown",
        ru: "Клоун",
      },
      name: {
        en: "Coulrophobia",
        ru: "Клоунофобия",

      },
      falseDescription: {
        en: "Even those without a fear of clowns know to be terrified of you.",
        ru: "Вы приводите в ужас даже тех, кто обычно не боится клоунов.",
      },
      description: {
        en: "Survivors within your Terror Radius have a 50% penalty to healing progression speed, and healing Skill Checks move 50% faster.",
        ru: "В радиусе вашего террора выжившие лечатся на 50% медленнее, а проверка реакции во время лечения происходит на 50% быстрее.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "",
        ru: ""
      }
      
    },

    {
      id: 36,
      icon: "clown/pop.png",
      author: {
        en: "The Clown",
        ru: "Клоун",
      },
      name: {
        en: "Pop Goes the Weasel",
        ru: "Чертик из табакерки",

      },
      falseDescription: {
        en: "A deep bond with The Entity unlocks great strength.",
        ru: "Глубокая связь с Сущностью дарит вам силу.",
      },
      description: {
        en: "After hooking a Survivor, the next generator you damage instantly loses 20% of its current progress. Normal generator regression applies after the Damage Generator action. Pop Goes the Weasel is active for 45 seconds after the Survivor is hooked.",
        ru: "После того, как вы повесили выжившего, следующий сломанный вами генератор сразу лишится 20% текущего прогресса. После повреждения генератора прогресс будет уменьшаться с обычной скоростью. \"Чертик из табакерки\" действует в течение 45 секунд после подвешивания выжившего.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "",
        ru: ""
      }
      
    },


    {
      id: 37,
      icon: "spirit/fury.png",
      author: {
        en: "The Spirit",
        ru: "Дух",
      },
      name: {
        en: "Spirit Fury",
        ru: "Ярость духа",

      },
      falseDescription: {
        en: "Each pallet you break magnifies the wrath of The Entity.",
        ru: "Каждая сломанная доска приумножает ярость Сущности.",
      },
      description: {
        en: "After you break 2 pallets, the next time you are stunned by a pallet, The Entity will instantly break the pallet. You still suffer from the stun effect penalty.",
        ru: "После поломки 2 досок, в следующий раз, когда вы будете оглушены доской, Сущность моментально сломает ее. При этом вы все равно пострадаете от оглушения.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\“Fury is her blood.\”",
        ru: "«Кровью ей - ярость»"
      }
      
    },


    {
      id: 38,
      icon: "spirit/haunted.png",
      author: {
        en: "The Spirit",
        ru: "Дух",
      },
      name: {
        en: "Hex: Haunted Ground",
        ru: "Порча: проклятая земля",

      },
      falseDescription: {
        en: "",
        ru: "",
      },
      description: {
        en: "Two trapped Hex Totems will spawn in the trial. When either one of the two trapped Hex Totems is cleansed by a Survivor, all Survivors suffer from the Exposed status effect for 60 seconds. The remaining trapped Hex Totem immediately becomes a Dull Totem.",
        ru: "В матче появятся два проклятых тотема. Когда выживший очищает любой из проклятых тотемов, все выжившие начинают страдать от эффекта \"Уязвимость\" в течение 60 секунд. Другой проклятый тотем сразу становится пустышкой.",
      },
      statusEffect: ['Exposed'],
      falseauthorComment: {
        en: "\“Her home became profane.\”",
        ru: "«Ее дом осквернили»"
      }
      
    },

    {
      id: 39,
      icon: "spirit/rancor.png",
      author: {
        en: "The Spirit",
        ru: "Дух",
      },
      name: {
        en: "Rancor",
        ru: "Ненависть",

      },
      falseDescription: {
        en: "",
        ru: "",
      },
      description: {
        en: "You become obsessed with one Survivor. Each time a generator is completed, your Obsession sees your aura for 3 seconds. Each time a generator is completed, all Survivors' locations are revealed to you for 3 seconds. Once the exit gates are powered, the Obsession has the Exposed status effect and you can kill them. The Killer can only be obsessed with one Survivor at a time.",
        ru: "Вы становитесь одержимы одним Выжившим. Каждый раз после полной починки генератора ваш объект одержимости видит вас на протяжении 3 секунд. Каждый раз после полной починки генератора ауры всех выживших раскрываются вам на 3 сек. Как только на все ворота поступает напряжение, ваш объект одержимости начинает страдать от эффекта \"Уязвимость\" и вы можете убить его своими руками. Убийца может быть одержим только одним выжившим за раз.",
      },
      statusEffect: ['Exposed'],
      falseauthorComment: {
        en: "",
        ru: ""
      }
      
    },

    {
      id: 40,
      icon: "legion/discordance.png",
      author: {
        en: "The Legion",
        ru: "Легион",
      },
      name: {
        en: "Discordance",
        ru: "Разлад",

      },
      falseDescription: {
        en: "",
        ru: "",
      },
      description: {
        en: "Any generator within a range of 128 meters that is being repaired by two or more Survivors is marked by a yellow aura. When the generator is first highlighted, Discordance triggers a loud noise notification on the generator. After the generator is no longer within range or is no longer being repaired by two or more Survivors, the aura remains for another 4 seconds.",
        ru: "Любой генератор в радиусе 128 метров, который чинят два или более выживших, будет подсвечен желтой аурой. При первом подсвечивании \"Разлад\" вызывает громкий звук, указывающий на генератор. Если генератор оказывается вне радиуса действия или уже не чинится двумя или более выжившими, аура остается еще на 4 сек.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"Smartasses get killed. We always see to that.\" -The Legion",
        ru: "«Умников убивают. Мы всегда за этим следим.» — Легион"
      }
      
    },

    {
      id: 41,
      icon: "legion/grit.png",
      author: {
        en: "The Legion",
        ru: "Легион",
      },
      name: {
        en: "Iron Maiden",
        ru: "Железная дева",

      },
      falseDescription: {
        en: "",
        ru: "",
      },
      description: {
        en: "",
        ru: "",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: " ",
        ru: "«»"
      }
      
    },

    {
      id: 42,
      icon: "legion/iron.png",
      author: {
        en: "The Legion",
        ru: "Легион",
      },
      name: {
        en: "Mad Grit",
        ru: "Безумное упорство",

      },
      falseDescription: {
        en: "",
        ru: "",
      },
      description: {
        en: "You open lockers 50% faster. Survivors who exit lockers suffer from the Exposed status effect for 30 seconds and scream, revealing their location for 4 seconds.",
        ru: "Вы открываете шкафчики на 50% быстрее. Вылезающие из шкафчиков выжившие получают эффект \"Уязвимость\" на 30 сек. Они кричат, раскрывая свое местоположение на 4 сек.",
      },
      statusEffect: ['Exposed'],
      falseauthorComment: {
        en: "\“This is no place for cowards.\” -The Legion",
        ru: "«Трусам здесь не место» — Легион"
      }
      
    },


    {
      id: 43,
      icon: "plague/infectious.png",
      author: {
        en: "The Plague",
        ru: "Чума",
      },
      name: {
        en: "Infectious Fright",
        ru: "Заразительный ужас",

      },
      falseDescription: {
        en: "The cries of the unfaithful make your heart leap.",
        ru: "От криков неверных ваше сердце бьется чаще.",
      },
      description: {
        en: "Any Survivors that are within your Terror Radius while another Survivor is put into the dying state will scream and reveal their location to you for 6 seconds.",
        ru: "Когда кто-нибудь из выживших оказывается в предсмертном состоянии, все выжившие в радиусе вашего террора кричат и выдают себя на 6 секунд.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\“Horror overcomes the heart of infidels who cry at the feet of the fallen.\” (Hymn of Praise, 11. 4)",
        ru: "«Ужас наполняет сердца неверных, и они рыдают у ног павших» - Хвалебный гимн, 11.4"
      }
      
    },

    {
      id: 44,
      icon: "plague/corrupt.png",
      author: {
        en: "The Plague",
        ru: "Чума",
      },
      name: {
        en: "Corrupt Intervention",
        ru: "Вмешательство скверны",

      },
      falseDescription: {
        en: "Your prayers invoke a dark power that meddles with the Survivors's chances of survival.",
        ru: "Ваши молитвы пробуждают темную силу, которая мешает выжившим.",
      },
      description: {
        en: "3 generators located furthest from you are blocked by The Entity for 80/100/120 seconds at the start of the trial. Survivors cannot repair these generators for the duration. Affected generators are highlighted by a white aura. Corrupt Intervention deactivates when any Survivor enters the dying state.",
        ru: "В начале испытания Сущность блокирует генераторы (3), которые находятся от вас дальше всего, на 120 секунд. На протяжении этого времени выжившие не могут их чинить. Такие генераторы подсвечиваются белым. Когда любой выживший переходит в предсмертное состояние, \"Вмешательство скверны\" прекращается.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\“It shall be known across the land that the Gods curse the unfaithful.\” (The Tablet of Adiris, 3.7.)",
        ru: "«Весть сия да разнесется по земле: Боги карают неверных» — \"Скрижаль Адирис\", 3.7"
      }
      
    },

    {
      id: 45,
      icon: "plague/devotion.png",
      author: {
        en: "The Plague",
        ru: "Чума",
      },
      name: {
        en: "Dark Devotion",
        ru: "Темная преданность",

      },
      falseDescription: {
        en: "The display of your powers creates a whirlwind of panic that spreads throughout the land.",
        ru: "Демонстрация вашей силы вызывает приступ паники, которая охватывает всех вокруг.",
      },
      description: {
        en: "You become obsessed with one Survivor. When the Obsession loses a health state, your Terror Radius transfers to the Obsession for 30 seconds, and its radius is set to 32 meters. You are granted the Undetectable status effect for the duration. The Survivor with the transferred Terror Radius is also considered to be \"inside the Terror Radius\" for other purposes. The Killer can only be obsessed with one Survivor at a time.",
        ru: "Вы становитесь одержимы одним выжившим. Когда объект одержимости теряет уровень здоровья, ваш радиус террора передается ему на 30 секунд и распространяется на 32 м. В течение этого времени на вас действует эффект \"Незаметность\". Выживший, которому передан радиус террора, считается находящимся в пределах радиуса террора убийцы. Одновременно убийца может быть одержим только одной жертвой.",
      },
      statusEffect: ['Undetectable'],
      falseauthorComment: {
        en: "\“And terror shall take hold of a defiant non-believer, who shall falsely announce my arrival.\” (The Tablet of Adiris, 48.9)",
        ru: "«Ужас овладеет заблудшими, и они разнесут ложную весть о моем прибытии» — \"Скрижали Адирис\", 48.9"
      }
      
    },

    {
      id: 46,
      icon: "ghost/furtive.png",
      author: {
        en: "The Ghost Face",
        ru: "Гоуст Фейс",
      },
      name: {
        en: "Furtive Chase",
        ru: "Скрытная погоня",

      },
      falseDescription: {
        en: "You lurk in the shadows, eliminating your victims one by one.",
        ru: "Вы прячетесь в тенях, уничтожая жертв одну за другой.",
      },
      description: {
        en: "You become obsessed with one Survivor. When your Obsession is hooked, gain the Undetectable status effect and a 5 % Haste status effect for 18 seconds. When a Survivor rescues the Obsession from a hook, the rescuer becomes the Obsession. The Killer can only be obsessed with one Survivor at a time.",
        ru: "Вы становитесь одержимы одним выжившим. Когда объект вашей одержимости оказывается на крюке, получите эффект \"Незаметность\" и 5% \"Спешка\" на 18 секунд. Если выживший снимает объект вашей одержимости с крюка, вы становитесь одержимы спасателем. Одновременно убийца может быть одержим только одним выжившим.",
      },
      statusEffect: ['Undetectable', 'Haste'],
      falseauthorComment: {
        en: "\"You have no idea what I have planned for you. It'll be in the news for weeks: I'll make sure of it.\" –The Ghost Face",
        ru: "«Ты даже не представляешь, что тебя ждет. Газеты будут писать об этом неделями, это я тебе обещаю» — Гоуст Фейс"
      }
      
    },

    {
      id: 47,
      icon: "ghost/ears.png",
      author: {
        en: "The Ghost Face",
        ru: "Гоуст Фейс",
      },
      name: {
        en: "I'm All Ears",
        ru: "Чуткий слух",

      },
      falseDescription: {
        en: "Your keen senses are sharpened in the dark realm of The Entity.",
        ru: "Ваши органы чувств обострились в темных владениях Сущности.",
      },
      description: {
        en: "Unlocks potential in one's aura reading ability. Any Survivor performing a rushed action within 48 meters from your location will have their aura revealed for 8 seconds. I'm All Ears can only be triggered once every 30 seconds.",
        ru: "Разблокирует возможности чтения ауры. Вы увидите ауру любого выжившего, совершающего резкие действия на расстоянии 48 м от вас. Действует 8 сек.\"Чуткий слух\" срабатывает только раз в 30 секунд.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"There is no need to worry. I've been preparing my whole life for this.\" –The Ghost Face",
        ru: "«Не стоит беспокоиться, я готовился к этому всю жизнь» — Гоуст Фейс"
      }
      
    },


    {
      id: 48,
      icon: "ghost/thrilling.png",
      author: {
        en: "The Ghost Face",
        ru: "Гоуст Фейс",
      },
      name: {
        en: "Thrilling Tremors",
        ru: "Пугающая тряска",

      },
      falseDescription: {
        en: "Your dark designs and shrewd composure rouse The Entity.",
        ru: "Ваши темные помыслы, собранность и хладнокровие будоражат Сущность.",
      },
      description: {
        en: "After picking up a Survivor, all Generators not being repaired by Survivors are blocked by The Entity and cannot be repaired for the next 16 seconds. Affected generators are highlighted by a white aura. Thrilling Tremors can only be triggered once every 60 seconds.",
        ru: "Когда вы подбираете выжившего, Сущность блокирует все генераторы, которые в данный момент не чинят выжившие, и в течение 16 сек. их нельзя будет ремонтировать. Такие генераторы подсвечиваются белым. \"Пугающая тряска\" срабатывает только раз в 16 секунд.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"The night assists me and it's endless here.\" –The Ghost Face",
        ru: "«Ночь - моя союзница, а здесь она вечна» — Гоуст Фейс"
      }
      
    },


  ];
  