
export const perksData = [
    {
      id: 100,
      icon: "vecna/weaveattunement.png",
      author: {
        en: "The Lich",
        ru: "Векна, Лич",
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
        en: "Whenever an Item is depleted for the first time, it is automatically dropped: The Auras of dropped Survivor Items are revealed to you, as well as the Auras of any Survivors within 8 metres of them. Causes Survivors picking up a Survivor Item to suffer from the Oblivious Status Effect for 20/25/30 seconds.",
        ru: "Когда у предмета впервые заканчиваются заряды, выживший выбрасывает его. Вы можете видеть ауры брошенных предметов. Вы также видите ауры выживших в радиусе 12 м от брошенных предметов, ауры которых вы увидели. Когда выживший подбирает предмет выжившего, на него действует \"Забывчивость\" в течение 20/25/30 секунд.",
      },
      statusEffect: ['Oblivious'],
      falseauthorComment: {
        en: "«No number of novelties will protect you from me!» — Vecna",
        ru: "«Никакие новомодные штучки не защитят вас от меня!» — Векна"
      }
      
    },

    {
      id: 200,
      icon: "vecna/languidtouch.png",
      author: {
        en: "The Lich",
        ru: "Векна, Лич",
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
        en: "When a Survivor within 36 meters of you scares a crow, they gain the Exhausted status effect for 6/8/10 seconds. Languid Touch has a cooldown of 20 seconds.",
        ru: "Когда выживший оказывается в 36 м от вас и спугивает ворону, на него накладывается эффект \"Усталость\" на 6/8/10 секунд.Этот навык восстанавливается в течение 20 сек.",
      },
      statusEffect: ['Exhausted'],
      falseauthorComment: {
        en: "«Submit to me. It is inevitable.» — Vecna",
        ru: "«Подчинись мне. Прими неотвратимое!» - Векна"
      }
      
    },

    {
      id: 300,
      icon: "vecna/darkarrogance.png",
      author: {
        en: "The Lich",
        ru: "Векна, Лич",
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
        en: "Increases the duration you are blinded by any means and the duration of pallet stuns by 25%. Increases regular vault speed by 15/20/25%.",
        ru: "Увеличивает длительность вашего ослепления любыми средствами и оглушения досками на 25%. Увеличивает скорость обычного прыжка на 15/20/25%.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "«No number of novelties will protect you from me!» — Vecna",
        ru: " «Никакие новомодные штучки не защитят вас от меня!» — Векна"
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
        en: "Increases your speed while transporting bodies by 6/12/18 %. While transporting a body, your Terror Radius is increased by 12 metres.",
        ru: "Увеличивает вашу скорость во время перемещения тел на 6/12/18%. Во время транспортировки тела радиус вашего террора увеличивается на 12 м.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "«At some point, the excitement of hooking one of us becomes more important than the desire to kill us.»",
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
        en: "Destroy dropped pallets, breakable walls, and generators 10/15/20% faster.",
        ru: "Теперь вы ломаете опрокинутые доски, разрушаемые стены и генераторы на 10/15/20% быстрее.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "«It is more than muscles. A dark power motivates the beast.»",
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
        en: "Survivors within your Terror Radius have a 10 % greater chance of triggering Skill Checks when repairing, healing or sabotaging. Triggered Skill Checks' success zones are reduced by 40/50/60%.",
        ru: "У выживших, находящихся в пределах вашего радиуса террора, на 10% чаще срабатывает проверка реакции при починке или лечении. Зона успеха при проверке реакции уменьшается на 40/50/60%.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "«Its presence befalls us.»",
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
        en: "Pools of Blood are considerably more discernible than normal and can be tracked for 2/3/4 seconds longer than normal.",
        ru: "Подобно гончей, вы чуете кровь издалека. Свежие следы крови значительно заметнее, чем обычно, и отслеживаются на 2/3/4 дольше.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "«Pebbles shimmering in the moonlight; my life drips down in a trail so easy to follow»",
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
        en: "Scratch Marks left by Survivors will spawn slightly/moderately/considerably closer together.",
        ru: "Следы-трещины, оставленные Выжившими, будут появляться слегка/умеренно/значительно ближе и плотнее друг к другу.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "«Never stop moving and hope you're always two steps ahead of the beast.» — Unknown, Notebook",
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
        en: "When blinded by any means, Shadowborn grants a 6/8/10 % Haste Status Effect for 10 seconds.",
        ru: "Если вы ослеплены любым способом, то получаете 6/8/10 % Спешки на 10 сек.",
      },
      statusEffect: ['Haste'],
      falseauthorComment: {
        en: "«Shining in the darkest dark, his eyes pierce the night and sting your soul.»",
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
        en: "Reduces the duration of Pallet Stuns by 40/45/50 %. Enduring has no effect while carrying a Survivor.",
        ru: "Длительность оглушения досками снижена на 40/45/50 %. Не действует во время переноски выживших.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "«He stops at nothing.»",
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
        en: "The Auras of Survivors attempting to blind you with a Flashlight are revealed to you for 6/8/10 seconds. Lightborn grants immunity from being blinded by Flashlights, Firecrackers, Flashbangs, or Blast Mines.",
        ru: "Вы обрели иммунитет к ослеплению фонариками, хлопушками, ослепляющими гранатами и фугасными минами. Ауры выживших, которые пытаются вас ослепить, подсвечиваются вам на 6/8/10 секунд.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "«These monsters... they adapt! They emerge with strange new abilities. — Vigo, Vigo's Journal»",
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
        en: "When a Generator is repaired to 70 %, you receive a Loud Noise notification and you are granted the Undetectable Status Effect for 12/14/16 seconds. Tinkerer can only trigger once per Generator per Trial.",
        ru: "Когда ремонт генератора доходит до 70%, вы слышите громкий звук и получаете эффект Незаметность на следующие 12/14/16 секунд. Этот эффект может сработать только по разу для каждого генератора.",
      },
      statusEffect: ['Undetectable'],
      falseauthorComment: {
        en: "«The Hillbilly makes impressive tools out of scraps. Tools aimed at maiming us in creative ways.» — Notebook",
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
        en: "The auras of Survivors who are healing or being healed are revealed to you when they are within a 20/24/28 meter range.",
        ru: "Ауры выживших — лечащих или лечащихся — раскрываются вам, когда они находятся в радиусе 20/24/28 м. от вас.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "«Still attached to the fragments of her past life, she is drawn to those in need of help.»",
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
        en: "Breathing of Survivors in pain is 30/40/50% louder and regular breathing is 15/20/25% louder.",
        ru: "Дыхание выживших, страдающих от боли, звучит на 30/40/50% громче, обычное дыхание громче на 15/20/25%.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "«If you don't stop and catch your breath… she will.»",
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
        en: "For each injured, dying, or hooked Survivor, all Survivors receive a penalty of 1/1.5/2% to repair, sabotage and Totem-cleansing speeds. If there are 4 injured, dying or hooked Survivors, there is an additional 12% penalty to repair, sabotage and Totem-cleansing speeds.",
        ru: "За каждого раненного, умирающего или повешенного на крюк выжившего скорость поломки, починки и очистки тотемов у всех выживших снижается на 1/1.5/2%. Если одновременно есть 4 раненых, умирающих или повешенных на крюк выживших, скорость поломки, починки и очистки тотемов дополнительно снижается на 12%.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "«She plays with us and revels in our pain.»",
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
        en: "You become obsessed with one Survivor. Your Obsession gains a 33% action speed bonus to unhooking and healing other Survivors. Each time you hook a Survivor other than the Obsession, if the Obsession is alive, gain a token. If the Obsession is alive, all Survivors who are not the Obsession get 2/2.5/3% penalty to repair, healing and sabotage speeds for each token.",
        ru: "Вы становитесь одержимы одним выжившим. Объект вашей одержимости получает бонус к скорости действий 33% при снятии с крюка и лечении других выживших. Каждый раз, когда вы вешаете на крюк выжившего, не являющегося объектом вашей одержимости, и если объект одержимости при этом жив, вы получаете жетон. Пока объект одержимости жив, остальные выжившие получают штраф к скорости ремонта, лечения и поломки 2/2.5/3% за каждый жетон.",
      },
      statusEffect: ['Obsession'],
      falseauthorComment: {
        en: "«This isn't a man...» -Dr.Sam Loomis",
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
        en: "You become obsessed with one Survivor. Every time you chase your Obsession and let them escape, you receive a token up to a maximum of 3 tokens. Each token increases your movement speed by 3/4/5%. Performing a basic attack or Special Attack spends one token.",
        ru: "Вы становитесь одержимы одним выжившим. Каждый раз, когда вы преследуете и упускаете объект одержимости, вы получаете 1 жетон (вплоть до 3). Каждый жетон повышает вашу скорость передвижения на 3/4/5%. Каждая базовая или особая атака тратит один жетон.",
      },
      statusEffect: ['Obsession', 'Haste'],
      falseauthorComment: {
        en: "«You've fooled them, haven't you Michael? But not me.» -Dr. Sam Loomis",
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
        en: "You become obsessed with one Survivor. Earn a token for each successful basic attack that is not dealt to the Obsession. Each token grants a stackable 4% decreased successful basic attack cooldown, you can earn up to 6/7/8 tokens. When you hit the Obsession with a Basic Attack or Special Attack, lose 2 tokens. You cannot gain tokens as long as your Obsession is sacrificed or killed",
        ru: "ы становитесь одержимы одним выжившим. За каждый успешный удар базовой атакой НЕ по объекту одержимости вы получаете один жетон. Каждый жетон ускоряет восстановление после успешных базовых атак на 4% (эффект суммируется). Всего вы можете получить до 6/7/8 жетонов. Нанеся удар по объекту одержимости обычной или особой атакой, вы теряете 2 шт. жетонов. Вы не сможете получать жетоны, пока ваш объект одержимости не будет принесен в жертву или убит.",
      },
      statusEffect: ['Obsession'],
      falseauthorComment: {
        en: "«Death has come to your little town, sheriff.» -Dr. Sam Loomis",
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
        en: "When a Survivor is rescued from a hook at least 24 meters away, Devour Hope receives a token. 2 Tokens: Gain a 3/4/5% Haste status effect, 10 seconds after hooking a Survivor, for a duration of 10 seconds. 3 Tokens: Survivors suffer from the Exposed status effect. 5 Tokens: Grants the ability to kill Survivors by your own hand. The Hex effects persist as long as the related Hex Totem is standing.",
        ru: "Когда выживший спасён с крюка хотя бы в 24 метрах от вас, навык \"Пожирание надежды\" получает жетон. 2 жетона: Через 10 сек. после того, как вы вешаете выжившего на крюк, вы получаете эффект \"Спешка\" 5% на 10 сек. 3 жетона: Выжившие получают эффект \"Уязвимость\". 5 жетона: Дает возможность убивать выживших своими руками. Порча действует, пока не уничтожен соответствующий тотем.",
      },
      statusEffect: ['Exposed', 'Haste'],
      falseauthorComment: {
        en: "«If you do nothing, you have their blood on your hands. If you save them, her hunger grows.»",
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
        en: "All generators are affected by Hex: Ruin. While a generator is not being repaired by a Survivor, it will immediately and automatically regress repair progress at 50/75/100% of the normal regression speed. The Hex effects persist as long as the related Hex Totem is standing.",
        ru: "\"Порча: Погибель\" воздействует на все генераторы. Когда выживший прекращает чинить генератор, прогресс тут же автоматически начинает снижаться со скоростью 50/75/100% от обычной. Порча действует, пока не уничтожен соответствующий тотем.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "«A curse is upon you. It will be your ruin.»",
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
        en: "Hitting a Survivor with a basic attack or a special attack while the Hex Totem is active applies the Blindness status effect. This effect applies to the last 2/3/4 Survivors hit. The Hex effects persist as long as the related Hex Totem is standing.",
        ru: "При активном тотеме порчи удар по выжившему базовой или особой атакой вызывает эффект \"Слепота\", который распространяется на последних 2/3/4 выживших, попавших под удар. Порча действует пока не уничтожен соответствующий тотем.",
      },
      statusEffect: ['Blindness'],
      falseauthorComment: {
        en: "«She touched your skin, you bear the witch's mark!»",
        ru: "«Она дотронулась до тебя, теперь на тебе метка ведьмы!»"
      }
      
    },



  ];
  