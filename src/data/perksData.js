
export const perksData = [
    {
      id: 1,
      icon: "killers/trapper/agitation.png",
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
      icon: "killers/trapper/brutalstrength.png",
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
      icon: "killers/trapper/unnervingpresence.png",
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
      icon: "killers/wraith/bloodhound.png",
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
      icon: "killers/wraith/predator.png",
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
      icon: "killers/wraith/shadowborn.png",
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
      icon: "killers/hillbilly/Enduring.png",
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
      icon: "killers/hillbilly/lightborn.png",
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
      icon: "killers/hillbilly/Tinkerer.png",
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
      icon: "killers/nurse/nursecalling.png",
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
      icon: "killers/nurse/stridor.png",
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
      icon: "killers/nurse/thanataphobia.png",
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
      icon: "killers/shape/dyinglight.png",
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
      icon: "killers/shape/playwith.png",
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
      icon: "killers/shape/savethe.png",
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
      icon: "killers/hag/devour.png",
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
      icon: "killers/hag/ruin.png",
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
      icon: "killers/hag/seal.png",
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
      icon: "killers/doctor/monitor.png",
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
      icon: "killers/doctor/overcharge.png",
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
      icon: "killers/doctor/overhelming.png",
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
      icon: "killers/huntress/beast.png",
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
      icon: "killers/huntress/lullaby.png",
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
      icon: "killers/huntress/territorial.png",
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
      icon: "killers/cannibal/barbeque.png",
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
      icon: "killers/cannibal/franklin.png",
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
      icon: "killers/cannibal/knock.png",
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
      icon: "killers/nightmare/blood.png",
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
      icon: "killers/nightmare/fire.png",
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
      icon: "killers/nightmare/remember.png",
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
      icon: "killers/pig/make.png",
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
      icon: "killers/pig/scourge.png",
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
        en: "At the start of the trial, 4 random hooks are twinsd into scourge hooks. You see their auras in white. Gain a notification when a Survivor begins sabotaging a hook. While carrying a Survivor, see the aura of any Survivor within 12 meters of a scourge hook",
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
      icon: "killers/pig/surveillance.png",
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
      icon: "killers/clown/bamboozle.png",
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
      icon: "killers/clown/coulrophobia.png",
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
      icon: "killers/clown/pop.png",
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
      icon: "killers/spirit/fury.png",
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
      icon: "killers/spirit/haunted.png",
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
      icon: "killers/spirit/rancor.png",
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
      icon: "killers/legion/discordance.png",
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
      icon: "killers/legion/grit.png",
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
      icon: "killers/legion/iron.png",
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
      icon: "killers/plague/infectious.png",
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
      icon: "killers/plague/corrupt.png",
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
      icon: "killers/plague/devotion.png",
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
      icon: "killers/ghost/furtive.png",
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
      icon: "killers/ghost/ears.png",
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
      icon: "killers/ghost/thrilling.png",
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

    {
      id: 49,
      icon: "killers/oni/bloodecho.png",
      author: {
        en: "The Oni",
        ru: "Они",
      },
      name: {
        en: "Отзвук крови",
        ru: "Blood echo",

      },
      falseDescription: {
        en: "You seek retribution on those who have wronged you.",
        ru: "Боль одного передается и другим.",
      },
      description: {
        en: "A Survivor who blinds you or stuns you using a pallet or locker becomes your Obsession. Anytime a new Survivor becomes the Obsession, they are affected by the Oblivious status effect for 60 seconds and their aura is shown to you for 4 seconds. The Killer can only be obsessed with one Survivor at a tim",
        ru: "Когда выживший попадает на крюк, все остальные раненые выжившие получают эффекты \"Кровотечение\" и \"Усталость\" на 45 сек. Время восстановления \"Отзвука крови\" — 60 секунд.",
      },
      statusEffect: ['Exhausted', 'Hemorrhage'],
      falseauthorComment: {
        en: "\“Attack an enemy with precision and their allies will feel it.\” -Renjiro's Doctrine 6:3",
        ru: "«Рази врага без промаха, и его товарищи почувствуют угрозу» — \"Учение Рендзиро\" 6:3"
      }
      
    },

    {
      id: 50,
      icon: "killers/oni/nemesis.png",
      author: {
        en: "The Oni",
        ru: "Они",
      },
      name: {
        en: "Nemesis",
        ru: "Возмездие",

      },
      falseDescription: {
        en: "You seek retribution on those who have wronged you.",
        ru: "Вы стремитесь покарать тех, кто вам навредил.",
      },
      description: {
        en: "A Survivor who blinds you or stuns you using a pallet or locker becomes your Obsession. Anytime a new Survivor becomes the Obsession, they are affected by the Oblivious status effect for 60 seconds and their aura is shown to you for 4 seconds. The Killer can only be obsessed with one Survivor at a time.",
        ru: "Если выживший ослепляет вас или оглушает с помощью доски или шкафчика, он становится объектом вашей одержимости. Становясь объектом одержимости, любой выживший получает статус \"Забывчивость\" на 60 секунд. Вы видите его ауру в течение 4 сек. Одновременно убийца может быть одержим только одним выжившим.",
      },
      statusEffect: ['Oblivious'],
      falseauthorComment: {
        en: "\“Only a fool would spit in a demon's face and declare victory.\” -Renjiro's Doctrine 4:9",
        ru: "«Только глупец может плюнуть демону в лицо и провозгласить себя победителем» — \"Учение Рендзиро\" 4:9"
      }
      
    },

    {
      id: 51,
      icon: "killers/oni/zanshin.png",
      author: {
        en: "The Oni",
        ru: "Они",
      },
      name: {
        en: "Zanshin tactics",
        ru: "Тактика зансин",

      },
      falseDescription: {
        en: "Unlocks potential in one's aura reading ability.",
        ru: "У вас появляется способность чтения ауры.",
      },
      description: {
        en: "You are mentally alert and aware of key points on the battlefield. The auras of all pallets, breakable walls, and vault locations are revealed to you within a 32 meter range.",
        ru: "Вы в курсе того, где расположены важные для выживания объекты. Вы видите ауры досок, разрушаемых стен и мест совершения прыжков в радиусе 32 метров от себя",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\“Within your enemy's strength is weakness.\” -Renjiro's Doctrine 12:5",
        ru: "«В силе твоего врага кроется его слабость» — \"Учение Рендзиро\" 12:5"
      }
      
    },

    {
      id: 52,
      icon: "killers/deathslinger/dead.png",
      author: {
        en: "The Deathslinger",
        ru: "Охотник",
      },
      name: {
        en: "Dead Man's Switch",
        ru: "Аварийная кнопка",

      },
      falseDescription: {
        en: "",
        ru: "",
      },
      description: {
        en: "When you hook a Survivor, Dead Man's Switch activates for the next 20/25/30 seconds. While activated, any Survivor that stops repairing a generator before it is fully repaired causes The Entity to block the generator until Dead Man's Switch's effect ends. Affected generators are highlighted by a white aura.",
        ru: "Когда вы вешаете выжившего на крюк, навык \"Аварийная кнопка\" активируется на следующие 30 секунд. Когда навык активен, Сущность заблокирует генератор на время действия \"Аварийной кнопки\", если выживший бросит его, не дочинив. Заблокированные генераторы подсвечиваются белым.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"I've seen the look on a man's face when he realizes he's going to die.\" -Caleb Quinn",
        ru: "«Я видел глаза человека, осознавшего, что ему конец.» — Калеб Куинн"
      }
      
    },

    {
      id: 53,
      icon: "killers/deathslinger/gearhead.png",
      author: {
        en: "The Deathslinger",
        ru: "Охотник",
      },
      name: {
        en: "Gearhead",
        ru: "Знаток техники",

      },
      falseDescription: {
        en: "You've got an ear for well-oiled gears.",
        ru: "Вы знаете, как звучат хорошо смазанные механизмы.",
      },
      description: {
        en: "After a survivor loses a health state by any means, Gearhead activates for 30 seconds. While Gearhead is active, every time a Survivor performs a good Skill Check while repairing, their aura is revealed to you for 8 seconds.",
        ru: "Когда выживший любым образом теряет уровень здоровья, на 30 сек. активируется навык \"Знаток техники\". Пока \"Знаток техники\" активен, каждый раз, когда кто-то из выживших хорошо проходит проверку реакции при починке, его аура становится видимой на 8 секунд.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"Sometimes a man's best work is what puts him in the grave.\" -The prison warden",
        ru: "«Порой человека сводит в могилу его же мастерство.» — Начальник тюрьмы"
      }
      
    },

    {
      id: 54,
      icon: "killers/deathslinger/retribution.png",
      author: {
        en: "The Deathslinger",
        ru: "Охотник",
      },
      name: {
        en: "Hex: Retribution",
        ru: "Порча: кара",

      },
      falseDescription: {
        en: "A Hex that lashes out upon its destruction. Those who cross you will be punished.",
        ru: "Порча, возникающая из-за разрушения. Кара настигнет тех, кто посмеет перейти вам дорогу.",
      },
      description: {
        en: "Any Survivor interacting with a Dull Totem or a Hex Totem will suffer from the Oblivious status effect for 45 seconds. If any Hex Totem is removed, including this one, the auras of all Survivors are revealed for 15 seconds. Oblivious prevents Survivors from hearing or being affected by the Killer's Terror Radius.",
        ru: "На любого выжившего, взаимодействующего с тусклым или проклятым тотемом, будет наложен эффект \"Забывчивость\" на 45 секунд. При уничтожении любого проклятого тотема, в том числе этого, вам будут подсвечены ауры всех выживших на 15 сек.",
      },
      statusEffect: ['Oblivious'],
      falseauthorComment: {
        en: "\"Bloody fool, you pulled the trigger on yourself.\" -Caleb Quinn",
        ru: "«Дурак, ты сам нажал на спуск.» — Калеб Куинн"
      }
      
    },

    {
      id: 55,
      icon: "killers/pyramid/deathbound.png",
      author: {
        en: "The Executioner",
        ru: "Палач",
      },
      name: {
        en: "Deathbound",
        ru: "Смертельные узы",
      },
      falseDescription: {
        en: "Those whose lives are intertwined in darkness are destined to suffer together.",
        ru: "Те, чьи жизни связаны с тьмой, обречены страдать вместе.",
      },
      description: {
        en: "When a Survivor heals another Survivor for one health state at least 32 meters away from the Killer, the Survivor performing the healing action will scream, revealing their location and activating Deathbound for the next 60 seconds. During that time, the Survivor will suffer from the Oblivious status effect when further than 8 meters away from the healed Survivor.",
        ru: "Когда выживший восстанавливает другому выжившему состояние здоровья в 32 м от убийцы и более, лечащий кричит, выдавая свое расположение. При этом активируются \"Смертельные узы\" на 60 сек. В это время на выжившего будет действовать эффект \"Забывчивость\", если он отойдет от вылеченного товарища более чем на 8 метров.",
      },
      statusEffect: ['Oblivious'],
      falseauthorComment: {
        en: "",
        ru: ""
      }
      
    },

    {
      id: 56,
      icon: "killers/pyramid/forced.png",
      author: {
        en: "The Executioner",
        ru: "Палач",
      },
      name: {
        en: "Forced Penance",
        ru: "Принудительная мера",

      },
      falseDescription: {
        en: "Those who stand in the way of duty will suffer harsh judgment.",
        ru: "Те, кто смеют мешать вашему делу, будут сурово наказаны.",
      },
      description: {
        en: "Survivors who take a protection hit are inflicted with the Broken status effect for 60/70/80 seconds.",
        ru: "Если выживший принимает удар на себя, на него накладывается эффект \"Ослабление\" на 80 секунд.",
      },
      statusEffect: ['Broken'],
      falseauthorComment: {
        en: "",
        ru: ""
      }
      
    },


    {
      id: 57,
      icon: "killers/pyramid/trail.png",
      author: {
        en: "The Executioner",
        ru: "Палач",
      },
      name: {
        en: "Trail of Torment",
        ru: "Тропа терзаний",

      },
      falseDescription: {
        en: "You guide your victims along a path of pain and punishment.",
        ru: "Вы направляете жертв по пути боли и наказания.",
      },
      description: {
        en: "After damaging a generator, you become Undetectable until the generator stops regressing. During this time, the generator's yellow aura is revealed to Survivors. This effect can only trigger once every 30 seconds.",
        ru: "Сломав генератор, вы получаете эффект \"Незаметность\", пока прогресс починки генератора не прекратит снижаться. В это время аура генератора подсвечивается для выживших желтым. Эффект может сработать только один раз в 30 секунд",
      },
      statusEffect: ['Undetectable'],
      falseauthorComment: {
        en: "",
        ru: ""
      }
      
    },

    {
      id: 58,
      icon: "killers/blight/favor.png",
      author: {
        en: "The Blight",
        ru: "Мор",
      },
      name: {
        en: "Hex: Blood Favor",
        ru: "Порча: благоволение крови",

      },
      falseDescription: {
        en: "A Hex that gains The Entity's favor when blood is spilled.",
        ru: "Эта порча вызывает благосклонность Сущности при пролитии крови.",
      },
      description: {
        en: "Injuring a Survivor will call upon The Entity to block pallets from being pulled down within a 24/28/32 meter radius of the Survivor location for 15 seconds. The Hex effects persist as long as the related Hex Totem is standing.",
        ru: "После ранения выжившего Сущность удерживает на месте доски в радиусе 32 м от выжившего в течение 15 сек. Эти доски нельзя опрокинуть. Порча действует, пока не уничтожен соответствующий тотем.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\“It would be no leap of the imagination to suggest that the trials are a biological response of sorts.\” —Journal of Talbot Grimes",
        ru: "«Нетрудно представить, что испытания - это своего рода биологическая реакция.» — дневник Тальбота Граймса"
      }
      
    },

    {
      id: 59,
      icon: "killers/blight/undying.png",
      author: {
        en: "The Blight",
        ru: "Мор",
      },
      name: {
        en: "Hex: Undying",
        ru: "Порча: не-смерть",

      },
      falseDescription: {
        en: "",
        ru: "",
      },
      description: {
        en: "While Hex: Undying is active, Survivors within 4 meters of any Dull Totem have their aura revealed. When another Hex Totem is cleansed, that Totem's Hex transfers to the Hex: Undying Totem, deactivating Hex: Undying. Any tokens the transferred Hex had are transferred as well.",
        ru: "Пока \"Порча: Не-смерть\" действует, открываются ауры выживших в радиусе 4 метров от любого тусклого тотема. Когда идет очистка другого проклятого тотема, порча с этого тотема (вместе с ее жетонами) переносится на тотем \"Порча: Не-смерть\" с прекращением действия эффекта \"Порча: Не-смерть\".",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "",
        ru: ""
      }
      
    },

    {
      id: 60,
      icon: "killers/blight/dragon.png",
      author: {
        en: "The Blight",
        ru: "Мор",
      },
      name: {
        en: "Dragon's Grip",
        ru: "Драконья хватка",

      },
      falseDescription: {
        en: "",
        ru: "",
      },
      description: {
        en: "After damaging a generator, for the next 30 seconds, the first Survivor that interacts with it will scream, revealing their location for 4 seconds, and becoming afflicted with the Exposed status effect for 60 seconds. Dragon's Grip has a cooldown of 40 seconds.",
        ru: "Первый выживший, который будет взаимодействовать с генератором в течение 30 сек. после его поломки, закричит, выдав свое расположение на 4 сек., а также получит эффект \"Уязвимость\" на 60 сек. Время перезарядки \"Драконьей хватки\": 40 секунд.",
      },
      statusEffect: ['Exposed'],
      falseauthorComment: {
        en: "“Such potential in this compound... even the slightest trace causes unnatural effects.” —Journal of Talbot Grimes",
        ru: "«В этом составе заключен великий потенциал... Даже мельчайшие дозы вызывают сверхъестественные эффекты.» — дневник Тальбота Граймса"
      }
      
    },


    {
      id: 61,
      icon: "killers/twins/coup.png",
      author: {
        en: "The Twins",
        ru: "Близнецы",
      },
      name: {
        en: "Coup de Grâce",
        ru: "Добивание",

      },
      falseDescription: {
        en: "As the end nears, you go in for the kill.",
        ru: "Когда конец близок, вы наносите смертельный удар.",
      },
      description: {
        en: "Each time a generator is completed, Coup de Grâce grows in power. Gain 2 tokens, with a maximum of 5 tokens maximum. Consume one token to increase the distance of your next lunge attack by 80%.",
        ru: "Каждый законченный ремонт генератора повышает силу \"Добивания\". Вы получаете 2 жетона (можно накопить до 5 жетонов). Использование одного жетона позволяет увеличить расстояние следующей атаки с выпадом на 80%.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "",
        ru: ""
      }
      
    },

    {
      id: 62,
      icon: "killers/twins/hoarded.png",
      author: {
        en: "The Twins",
        ru: "Близнецы",
      },
      name: {
        en: "Hoarder",
        ru: "Скопидом",

      },
      falseDescription: {
        en: "You protect what little you have and are attentive to any disturbance of your stockpiles.",
        ru: "Вещей у вас немного. Вы бережете их, поэтому сразу замечаете, если в ваших запасах что-то поменялось.",
      },
      description: {
        en: "Survivors reveal their location when they interact with a chest or when they pick up an item within 64 meters of your location. The trial begins with up to 2 additional chests in the environment.",
        ru: "Выжившие выдают свое расположение, когда возятся с сундуком или подбирают предмет в 64 метрах от вас. В начале матча на карте будет до 2 дополнительных сундуков.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "",
        ru: ""
      }
      
    },

    {
      id: 63,
      icon: "killers/twins/oppression.png",
      author: {
        en: "The Twins",
        ru: "Близнецы",
      },
      name: {
        en: "Oppression",
        ru: "Притеснение ",

      },
      falseDescription: {
        en: "Life has been difficult for you, so you'll make it difficult for others.",
        ru: "",
      },
      description: {
        en: "When you damage a generator, up to 3 other random generators also begin regressing. If the affected generators are being repaired, any Survivors repairing them receive a difficult Skill Check. Oppression has a cooldown of 40 seconds.",
        ru: "Когда вы повреждаете генератор, до 3 случайных генераторов также начинают ломаться. Если один из этих генераторов чинят, запускается сложная проверка реакции для всех выживших, участвующих в ремонте. Использовать \"Притеснение\" можно каждые 40 секунд.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"Damn them as they would damn us.\" —Charlotte Deshayes",
        ru: "«Пусть будут прокляты так же, как сами проклинали нас.» — Шарлотта Дейе"
      }
      
    },

    {
      id: 64,
      icon: "killers/trickster/starstruck.png",
      author: {
        en: "The Trickster",
        ru: "Трюкач",
      },
      name: {
        en: "Starstruck",
        ru: "Фанатение",

      },
      falseDescription: {
        en: "Your unmatched showmanship dazzles all.",
        ru: "Все покорены вашим непревзойденным артистизмом.",
      },
      description: {
        en: "While carrying a Survivor, any other Survivors within your Terror Radius suffer from the Exposed status effect. The effect persists for 30 seconds on Survivors who leave your Terror Radius, as well as those within the radius when you hook or release the carried Survivor. Starstruck has a cooldown of 60 seconds once a Survivor is no longer carried.",
        ru: "Когда вы несете выжившего, на всех других выживших в вашем радиусе террора действует эффект \"Уязвимость\". Он действует 30 секунд на выживших, которые покинут ваш радиус террора, а также на тех, кто находится в радиусе, когда вы подвешиваете схваченного выжившего на крюк или выпускаете его. \"Фанатение\" перезаряжается в течение 60 сек., как только вы выпускаете выжившего из рук.",
      },
      statusEffect: ['Exposed'],
      falseauthorComment: {
        en: "\"Enjoy this moment, few get so close.\" — Ji-Woon Hak",
        ru: "«Наслаждайся моментом. Так близко ко мне оказываются единицы» - Хак Чиун"
      }
      
    },

    {
      id: 65,
      icon: "killers/trickster/crowd.png",
      author: {
        en: "The Trickster",
        ru: "Трюкач",
      },
      name: {
        en: "Порча: Контроль толпы",
        ru: "Hex: Crowd Control",

      },
      falseDescription: {
        en: "A Hex that ensures those lesser than you are properly herded.",
        ru: "Порча для надлежащего управления стадом из низших существ.",
      },
      description: {
        en: "The Entity blocks a window for 60 seconds after a Survivor performs a rushed vault through it. The Hex effects persist as long as the related Hex Totem is standing.",
        ru: "Сущность на 60 секунд блокирует оконный проем после того, как через него быстро перепрыгивает выживший. Порча действует, пока не уничтожен соответствующий тотем.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"You have no control. People like you never did.\" — Ji-Woon Hak",
        ru: "«Ты ничего не контролируешь. Такие никогда и ничего не могут» - Хак Чиун"
      }
      
    },

    {
      id: 66,
      icon: "killers/trickster/wayout.png",
      author: {
        en: "The Trickster",
        ru: "Трюкач",
      },
      name: {
        en: "No Way Out",
        ru: "Выхода нет",
      },
      falseDescription: {
        en: "You're not going to let just anyone into the VIP room.",
        ru: "Вы не пустите в VIP-зал абы кого... и не выпустите.",
      },
      description: {
        en: "After hooking a Survivor for the first time, No Way Out gains a token. Once the exit gates have been powered, No Way Out activates. When a Survivor interacts with an exit gate switch, you receive a loud noise notification. The Entity then blocks both exit gate switches for 12 seconds, plus an additional 12 seconds for each token in your possession.",
        ru: "После первого подвешивания выжившего на крюк, \"Выхода нет\" получает жетон. Когда на ворота подается питание, навык \"Выхода нет\" активируется. Если выживший использует рубильник ворот, вы слышите громкий звуковой сигнал. Сущность при этом блокирует рубильники на 12 сек. и дополнительно еще на 12 секунд за каждый жетон, который у вас есть.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"That sound when you bleed...let me hear it again.\" — Ji-Woon Hak",
        ru: "«Дай мне еще раз послушать твои стоны... когда ты истекаешь кровью» - Хак Чиун"
      }
      
    },

    {
      id: 67,
      icon: "killers/nemesis/eruption.png",
      author: {
        en: "The Nemesis",
        ru: "Немезис",
      },
      name: {
        en: "Eruption",
        ru: "Подрыв",

      },
      falseDescription: {
        en: "The NE-α parasite provides you with the intelligence and awareness needed to set a trap.",
        ru: "Паразит NE-α наделяет вас интеллектом и сознанием, нужным для установки ловушки.",
      },
      description: {
        en: "After kicking a generator, its aura is highlighted in yellow. Whenever a Survivor enters the dying state, every affected generator explodes, losing 10% worth of progress, and starts to regress. Any Survivor repairing a generator when it explodes will scream and reveal their aura for 12 seconds. Eruption has a cooldown of 30 seconds.",
        ru: "После удара по генератору его аура подсвечивается желтым. Когда выживший оказывается при смерти, каждый затронутый генератор взрывается, теряя 10% прогресса починки, а его состояние начинает ухудшаться. Любой выживший, занимающийся починкой генератора, при его взрыве закричит и выдаст свою ауру на 12 секунд. \"Подрыв\" перезаряжается 30 сек.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"It can use weapons?\" —Jill Valentine",
        ru: "«Оно может использовать оружие?» — Джилл Валентайн"
      }
      
    },


    {
      id: 68,
      icon: "killers/nemesis/hysteria.png",
      author: {
        en: "The Nemesis",
        ru: "Немезис",
      },
      name: {
        en: "Hysteria",
        ru: "Истерия",

      },
      falseDescription: {
        en: "You know how to brutalize one member of a team to cause a panic.",
        ru: "Вы способны изувечить одного члена команды, чтобы вызвать панику у остальных.",
      },
      description: {
        en: "Whenever a healthy Survivor becomes injured by any means, all injured Survivors suffer from the Oblivious status effect for 30 seconds. Hysteria can only trigger once every 30 seconds.",
        ru: "Когда здоровый выживший получает ранение, все раненые выжившие получают эффект \"Забывчивость\" на 30 секунд. \"Истерия\" может срабатывать только раз в 30 сек.",
      },
      statusEffect: ['Oblivious'],
      falseauthorComment: {
        en: "\"Sorry I got a little jumpy there. Didn't know quite what to expect.\" —Robert Kendo",
        ru: "«Прости, я начинаю шарахаться от теней. Не понимаю, чего можно ждать» — Роберт Кендо"
      }
      
    },


    {
      id: 69,
      icon: "killers/nemesis/lethal.png",
      author: {
        en: "The Nemesis",
        ru: "Немезис",
      },
      name: {
        en: "Lethal Pursuer",
        ru: "Преследователь-убийца",

      },
      falseDescription: {
        en: "You've been designed to track down and eliminate targets.",
        ru: "Вас создали для выслеживания и устранения целей.",
      },
      description: {
        en: "At the start of the trial, the auras of all Survivors are revealed to you for 9 seconds. Any time a Survivor's aura is shown for a period of time, its duration is increased by 2 seconds.",
        ru: "В начале матча вы видите ауры всех выживших в течение 9 секунд Когда аура выжившего проявляется на определенное время, оно увеличивается на 2 сек.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"...it knows what it wants and won't stop till it gets it.\" —Carlos Oliveira",
        ru: "«Оно знает, чего хочет, и не остановится, пока этого не получит» — Карлос Оливейра"
      }
      
    },

    {
      id: 70,
      icon: "killers/pinhead/plaything.png",
      author: {
        en: "The Pinhead",
        ru: "Сенобит",
      },
      name: {
        en: "Hex: Plaything",
        ru: "Порча: игрушка",

      },
      falseDescription: {
        en: "A Hex that toys with a victim's suffering.",
        ru: "Порча, которая играется с муками своей жертвы",
      },
      description: {
        en: "The first time you hook a Survivor, they become Cursed and Hex: Plaything activates on a Dull Totem. The Cursed Survivor suffers from the Oblivious status effect until Hex: Plaything is cleansed. Hex: Plaything's totem aura is revealed to the Cursed Survivor when within 16 meters of it. For the first 90 seconds, only the Cursed Survivor can cleanse the totem.",
        ru: "Когда вы в первый раз вешаете выжившего на крюк, он получает проклятье, а на тусклом тотеме активируется \"Порча: Игрушка\". Проклятые выжившие страдают от эффекта \"Забывчивость\" до тех пор, пока не исчезнет \"Порча: Игрушка\". Аура тотема \"Порча: Игрушка\" показывается проклятому выжившему, пока тот находится в 16 метрах от него. В течение первых 90 сек. лишь проклятый выживший способен очистить тотем.",
      },
      statusEffect: ['Oblivious'],
      falseauthorComment: {
        en: "\"We came. Now you must come with us. Taste our pleasures.\" —Pinhead",
        ru: "«Мы пришли. Теперь вы должны идти с нами. Вкусите наши удовольствия» — Пинхед"
      }
      
    },

    {
      id: 71,
      icon: "killers/pinhead/deadlock.png",
      author: {
        en: "The Pinhead",
        ru: "Сенобит",
      },
      name: {
        en: "Deadlock",
        ru: "Мертвая хватка",

      },
      falseDescription: {
        en: "You induce mental suffering by crushing any hope of escape.",
        ru: "Вы причиняете мучения разуму, сокрушая все надежды на бегство.",
      },
      description: {
        en: "After a generator is repaired, The Entity blocks the generator with the most progress for 25 seconds. You see its white aura during this time.",
        ru: "При полной починке генератора Сущность блокирует генератор с наибольшим прогрессом на 25 секунд. Вы видите белую ауру в течение этого времени.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"Nobody escapes us.\" —Pinhead",
        ru: "«Никому от нас не скрыться» — Пинхед"
      }
      
    },

    {
      id: 72,
      icon: "killers/pinhead/pain.png",
      author: {
        en: "The Pinhead",
        ru: "Сенобит",
      },
      name: {
        en: "Scourge Hook: Gift Of Pain",
        ru: "Секущий крюк: дар боли",

      },
      falseDescription: {
        en: "You are the bringer of sweet pain.",
        ru: "Вы даруете сладостные муки.",
      },
      description: {
        en: "At the start of the trial, 4 random hooks are artistd into scourge hooks. You see their auras in white. When a Survivor is unhooked from a scourge hook, they suffer from the Hemorrhage and Mangled status effect for 90 seconds. The first time the Survivor is healed, they suffer a 16% speed penalty to healing and repairing actions until injured again.",
        ru: "В начале матча до 4 случайных крюков превратятся в секущие крюки. Для вас они подсвечены белой аурой. Снятый с секущего крюка выживший получает на 90 сек. эффекты \"Кровотечение\" и \"Травма\". При первом лечении выживший получает штраф 16% к скорости лечения и починки, пока не будет ранен вновь.",
      },
      statusEffect: ['Hemorrhage', 'Mangled'],
      falseauthorComment: {
        en: "\"We'll tear your soul apart.\" —Pinhead",
        ru: "«Мы порвем ваши души в клочья» — Пинхед"
      }
      
    },

    {
      id: 73,
      icon: "killers/artist/pentimento.png",
      author: {
        en: "The Artist",
        ru: "Художница",
      },
      name: {
        en: "Hex: Pentimento",
        ru: "Порча: пентименто",

      },
      falseDescription: {
        en: "Your act of servitude to The Entity has not gone unnoticed.",
        ru: "Вы пробуждаете истинную мощь тотемов, сокрытую в их остатках.",
      },
      description: {
        en: "Each time a Survivor is hooked for the first time, gain a token. When moving 16 meters away from the hook, all generators are blocked for 10 seconds. Upon reaching 4 tokens, when moving 16 meters away from the hook, The Entity instead blocks all generators for 40 seconds. The Obsession's aura is revealed to you for 6 seconds. Then, Grim Embrace deactivates. The Killer can only be obsessed with one Survivor at a time.",
        ru: "Вы видите ауры уничтоженных тотемов и можете совершить ритуал над уничтоженным тотемом, восстановив его как проклятый тотем для \"Порчи: пентименто\". \"Порча: пентименто\" получает по дополнительному эффекту за каждый одновременно действующий прокляты тотем: 1 проклятый тотем замедляет починку выжившими на 30%. 2 проклятых тотема замедляют лечение выживших на 30%. 3 проклятых тотема замедляют восстановление выживших после смертельного ранения на 30%. 4 проклятых тотема замедляют открывание ворот выжившими на 30%. 5 проклятых тотемов: все тотемы блокируются Сущностью. При уничтожении восстановленного тотема (любым способом) его остатки поглощаются Сущностью. Такой тотем уже не восстановить.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"Are we nothing but prisoners to our sorrow?\"—Carmina Mora",
        ru: "«Пусть пентименто и не считается признанным направлением искусства, есть нечто особенное в стремлении найти то, что не видят остальные» — \"Руководство к творчеству и процессу\", 1961 год"
      }
      
    },

    {
      id: 74,
      icon: "killers/artist/reson.png",
      author: {
        en: "The Artist",
        ru: "Художница",
      },
      name: {
        en: "Scourge Hook: Pain Resonance",
        ru: "Секущий крюк: резонанс боли",

      },
      falseDescription: {
        en: "Overwhelming pain reverberates outwards into chaos.",
        ru: "Всепоглощающая боль прорывается наружу, сея хаос.",
      },
      description: {
        en: "At the start of the trial, 4 random hooks are changed into scourge hooks. You see their auras in white. You start the Trial with 4 tokens, 1 for each Survivor. If a generator is available when that Survivor is hooked on a scourge hook, lose 1 token. The generator with the most progress explodes, instantly losing 20% progress, and will start to regress. Once you have no tokens, Pain Resonance deactivates for the rest of the Trial.",
        ru: "В начале матча до 4 случайных крюка превратятся в секущие крюки. Для вас они подсвечены белой аурой. Вы начинаете матч с 4 жетонами. Когда один из выживших впервые оказывается на таком крюке, вы теряете 1 жетон, а генератор с наибольшим прогрессом взрывается, сразу теряя 20% прогресса и продолжая портиться. Когда у вас кончатся жетоны, \"Резонанс боли\" перестанет действовать до конца матча.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"The pain spills beyond flesh/darkness staining the horizon.\" —Girl in the Shadow by Carmina Mora",
        ru: "«Боль за границами плоти / Тьма у горизонта» — \"Девочка в тени\", Кармина Мора"
      }
      
    },

    {
      id: 75,
      icon: "killers/artist/grim.png",
      author: {
        en: "The Artist",
        ru: "Художница",
      },
      name: {
        en: "Grim Embrace",
        ru: "Мрачные объятья",

      },
      falseDescription: {
        en: "Your act of servitude to The Entity has not gone unnoticed.",
        ru: "Ваш акт служения Сущности не остался незамеченным.",
      },
      description: {
        en: "Each time a Survivor is hooked for the first time, gain a token. When moving 16 meters away from the hook, all generators are blocked for 10 seconds. Upon reaching 4 tokens, when moving 16 meters away from the hook, The Entity instead blocks all generators for 40 seconds. The Obsession's aura is revealed to you for 6 seconds. Then, Grim Embrace deactivates. The Killer can only be obsessed with one Survivor at a time.",
        ru: "Каждый раз, когда выживший впервые оказывается подвешен на крюк, вы получаете жетон. Когда вы отходите на 16 м от крюка, все генераторы блокируются на 12 секунд. Когда вы накопите жетоны в количестве 4 шт. и отойдете от крюка на 16 м, Сущность заблокирует все генераторы на 40 секунд. Вы видите ауру объекта одержимости в течение 6 сек. Затем \"Мрачные объятья\" перестают действовать. Одновременно убийца может быть одержим только одним выжившим.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"Are we nothing but prisoners to our sorrow?\"—Carmina Mora",
        ru: "«Кто мы, как не узники своей печали?» — Кармина Мора"
      }
      
    },

    {
      id: 76,
      icon: "killers/onryo/merciless.png",
      author: {
        en: "The Onryō",
        ru: "Онрё",
      },
      name: {
        en: "Merciless Storm",
        ru: "Безжалостный шторм",
      },
      falseDescription: {
        en: "Your horrible trauma is felt by everyone.",
        ru: "Пусть все ощутят ваши страшные муки.",
      },
      description: {
        en: "When a generator reaches 90% progress, Survivors working on the generator will be faced with continuous Skill Checks. If they miss or stop repairing, the generator is blocked by the Entity for 20 seconds. Merciless Storm can only trigger once per generator per trial.",
        ru: "Когда генератор починен на 90%, выжившим, работающим с этим генератором, надо постоянно проходить проверки реакции. За неудачу или прекращение ремонта генератор блокируется на 20 секунд. \"Безжалостный шторм\" может сработать только раз за матч для каждого генератора.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "",
        ru: ""
      }
      
    },

    {
      id: 77,
      icon: "killers/onryo/brine.png",
      author: {
        en: "The Onryō",
        ru: "Онрё",
      },
      name: {
        en: "Call of Brine",
        ru: "Соленое море",

      },
      falseDescription: {
        en: "Your psychic abilities influence technology in devastating ways.",
        ru: "Ваши экстрасенсорные способности разрушительно влияют на механизмы.",
      },
      description: {
        en: "After damaging a generator this perk becomes active for 60 seconds. The generator regresses at 125% of the normal regression speed and you can see its aura in yellow. Each time a Survivor completes a good Skill Check on a generator affected by this perk, you receive a loud noise notification.",
        ru: "После повреждения генератора этот навык активируется на 60 сек. Генератор портится со скоростью 125% от нормальной, и вы видите его желтую ауру. При каждой хорошей проверке реакции выжившего на генераторе, который затронут этим навыком, вы слышите громкий звук.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "",
        ru: ""
      }
      
    },

    {
      id: 78,
      icon: "killers/onryo/floods.png",
      author: {
        en: "The Onryō",
        ru: "Онрё",
      },
      name: {
        en: "Scourge Hook: Floods of Rage",
        ru: "Секущий крюк: пучина ярости",

      },
      falseDescription: {
        en: "You form a psychic connection with The Entity and alter the rules of the trial.",
        ru: "Вы устанавливаете ментальную связь с Сущностью и меняете правила матча.",
      },
      description: {
        en: "At the start of the trial, 4 random hooks are changed into scourge hooks. You see their auras in white. When a Survivor is unhooked from a scourge hook, all other Survivors have their auras revealed for 7 seconds.",
        ru: "В начале матча до 4 случайных крюков становятся секущими. Их ауры выделены белым цветом. Когда выжившего снимают с секущего крюка, ауры прочих выживших становятся видны на 7 секунд.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "",
        ru: ""
      }
      
    },

    {
      id: 79,
      icon: "killers/dredge/septic.png",
      author: {
        en: "The Dredge",
        ru: "Грязь",
      },
      name: {
        en: "Septic Touch",
        ru: "Тлетворное касание",
      },
      falseDescription: {
        en: "The Land of Shadows subsumes all. Healing only delays the inevitable.",
        ru: "Пределы Теней поглотят все. Лечение лишь оттягивает неизбежное.",
      },
      description: {
        en: "Whenever a Survivor performs the healing action within your Terror Radius, that Survivor suffers from Blindness and Exhausted. These effects linger for 10 seconds after a healing action is interrupted by any means.",
        ru: "Если выживший совершает действие лечения в вашем радиусе террора, он подвергается эффектам \"Слепота\" и \"Усталость\". Эффект действуют на него в течение 10 секунд после прерывания лечения.",
      },
      statusEffect: ['Blindness', 'Exhausted'],
      falseauthorComment: {
        en: "\"Do not admit to fear, or pain, or doubt. These are the seeds from which darkness grows.\" –Otto Stamper",
        ru: "«Не признавайте страх, боль, сомнения. Из этих семян произрастает мрак» — Отто Стэмпер"
      }
      
    },

    {
      id: 80,
      icon: "killers/dredge/revealed.png",
      author: {
        en: "The Dredge",
        ru: "Грязь",
      },
      name: {
        en: "Darkness Revealed",
        ru: "Явление мрака",
      },
      falseDescription: {
        en: "In your presence, places once thought to be safe are perhaps the most dangerous.",
        ru: "В вашем присутствии ранее безопаснейшие места становятся наиболее угрожающими.",
      },
      description: {
        en: "When you search a locker, the auras of all Survivors within 8 meters of any lockers are revealed to you for 8 seconds. Darkness Revealed has a cooldown of 30 seconds.",
        ru: "Когда вы открываете шкафчик, ауры всех выживших в пределах 8 м от любого шкафчика показываются вам на 8 секунд. Этот навык перезаряжается 30 сек.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "«Пребудьте в свете, дети мои, ибо во мраке страх являет вас злу» — Отто Стэмпер",
        ru: "\"Stay in the light, my children. In darkness, your fear will expose you.\" –Otto Stamper"
      }
      
    },

    {
      id: 81,
      icon: "killers/dredge/dissolation.png",
      author: {
        en: "The Dredge",
        ru: "Грязь",
      },
      name: {
        en: "Dissolution",
        ru: "Растворение",
      },
      falseDescription: {
        en: "Everything turns to dust. It is as inescapable as the coming of the night.",
        ru: "Всему суждено обратиться в прах. Это так же неизбежно, как наступление ночи.",
      },
      description: {
        en: "3 seconds after injuring a Survivor by any means, Dissolution activates for 20 seconds. While Dissolution is active, if a Survivor fast vaults over a pallet inside of your Terror Radius, The Entity will break the pallet at the end of the vault, and Dissolution deactivates.",
        ru: "Через 3 сек. после ранения выжившего любым способом, вы активируете \"Растворение\" на 20 секунд. Если выживший быстро перепрыгивает через доски в пределах вашего радиуса террора, пока \"Растворение\" активно, Сущность сломает доски после прыжка, а действие этого навыка прекратится.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"The Garden shall be a place of perfect Joy; through Joy, nothing shall stand in our way.\" –Otto Stamper",
        ru: "«Сад станет местом полного Счастья. Счастье поможет нам преодолеть все преграды» — Отто Стэмпер"
      }
      
    },

    {
      id: 82,
      icon: "killers/wesker/anatomy.png",
      author: {
        en: "The Mastermind",
        ru: "Кукловод",
      },
      name: {
        en: "Superior Anatomy",
        ru: "Лучшая анатомия",
      },
      falseDescription: {
        en: "Decades of research have culminated in you: something faster, stronger, and more dangerous than any human.",
        ru: "Продукт десятилетий исследований делает вас быстрее, сильнее и опаснее любого человека.",
      },
      description: {
        en: "When a Survivor performs a fast vault within 8 meters of you, this perk activates. The next time you vault a window, your vaulting speed is increased by 40%. This perk deactivates after vaulting a window. This perk has a 30 second cooldown.",
        ru: "Навык срабатывает, когда выживший совершает быстрый прыжок в пределах 8 м от вас. Ваша скорость обычного преодоления препятствий увеличивается на 40% при следующем прыжке в окно. Навык отключается при прыжке через окно. Навык может срабатывать раз в 30 сек.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "",
        ru: ""
      }
      
    },

    {
      id: 83,
      icon: "killers/wesker/awakened.png",
      author: {
        en: "The Mastermind",
        ru: "Кукловод",
      },
      name: {
        en: "Awakened Awareness",
        ru: "Развитая внимательность",
      },
      falseDescription: {
        en: "Your genes have been altered to heighten your senses in intense situations.",
        ru: "Ваши гены изменены так, чтобы органы чувств лучше работали в экстремальных ситуациях.",
      },
      description: {
        en: "When carrying a Survivor, you can see the aura of other Survivors within 16/18/20 meters of your position.",
        ru: "Неся выжившего, вы видите ауры других выживших в пределах 20 метров от себя.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "",
        ru: ""
      }
      
    },

    {
      id: 84,
      icon: "killers/wesker/terminus.png",
      author: {
        en: "The Mastermind",
        ru: "Кукловод",
      },
      name: {
        en: "Terminus",
        ru: "Последний этап",
      },
      falseDescription: {
        en: "Вы гениальный тактик, готовый к любому варианту развития событий.",
        ru: "You are a brilliant tactician who prepares for every eventuality.",
      },
      description: {
        en: "When exit gates are powered, this perk activates. While Terminus is active, injured, downed and hooked Survivors are inflicted with the Broken status effect until exit gates are open. When exit gates are open, Survivors will stay Broken for an additional 30 seconds.",
        ru: "Этот навык активируется, когда на ворота подается электричество. Пока \"Последний этап\" активен, раненые, смертельно раненые и повешенные на крюк выжившие подвергаются эффекту \"Ослабление\" до тех пор, пока ворота не откроются. Когда ворота открываются, выжившие остаются ослабленными еще 30 секунд.",
      },
      statusEffect: ['Broken'],
      falseauthorComment: {
        en: "",
        ru: ""
      }
      
    },
    
    {
      id: 85,
      icon: "killers/knight/nowhere.png",
      author: {
        en: "The Knight",
        ru: "Рыцарь",
      },
      name: {
        en: "Nowhere To Hide",
        ru: "Им не укрыться",
      },
      falseDescription: {
        en: "The machinations of the weak and craven draw your ire. Your anger forces Survivors to reveal themselves.",
        ru: "Происки трусов и слабаков пробуждают в вас гнев. В ярости вы прозреваете все вокруг и видите выживших.",
      },
      description: {
        en: "Whenever you damage a generator, reveal the aura of all Survivors standing within 24 meters of your position for 5 seconds.",
        ru: "Всякий раз, когда вы повреждаете генератор, в течение 5 секунд вы видите ауры всех выживших, стоящих в пределах 24 м от вас.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"Out with you, cowards! Show yourselves!\" - Tarhos Kovács\"",
        ru: "«Выходите, трусы! Покажитесь!» - Тархос Ковач"
      }
      
    },

    {
      id: 86,
      icon: "killers/knight/darkness.png",
      author: {
        en: "The Knight",
        ru: "Рыцарь",
      },
      name: {
        en: "Hex: Face The Darkness",
        ru: "Порча: лик мрака",
      },
      falseDescription: {
        en: "You make an example of one of your victims, forcing their allies to become awed by your power.",
        ru: "Сделав из одной жертвы пример для остальных, вы заставляете их союзников дрожать от страха.",
      },
      description: {
        en: "Injuring a Survivor by any means lights a Dull Totem, activating the Hex. While the Hex is active, all other Survivors outside of your Terror Radius will scream every 25 seconds, revealing their positions and auras for 2 seconds. When the Survivor enters the dying state or becomes healthy, the Hex totem becomes dull again and this perk deactivates. If the Hex totem is cleansed, this perk is permanently disabled.",
        ru: "Когда выживший любым способом получает ранение, тусклый тотем загорается и накладывает порчу. При действии этой порчи все остальные выжившие за пределами вашего радиуса террора будут вскрикивать раз в 25 секунд, показывая свои ауры и выдавая свое местонахождение на 2 сек. Когда проклятый выживший оказывается смертельно ранен или полностью восстанавливает здоровье, порча снимается, а проклятый тотем тускнеет. При очистке тотема этот навык выключается навсегда.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"I shall make an example of one. These mewling worms will never know peace.\"- Tarhos Kovács",
        ru: "«Я сделаю из одного пример для остальных. Эти жалкие черви не будут ведать покоя» - Тархос Ковач"
      }
      
    },

    {
      id: 87,
      icon: "killers/knight/hubris.png",
      author: {
        en: "The Knight",
        ru: "Рыцарь",
      },
      name: {
        en: "Hubris",
        ru: "Свирепая гордыня",
      },
      falseDescription: {
        en: "You show no mercy, especially to those foolish enough to resist.",
        ru: "Вы без жалости разделываетесь с жертвами, особенно если им хватает глупости сопротивляться.",
      },
      description: {
        en: "Whenever you are stunned by a Survivor, that Survivor suffers from the Exposed status effect for 20 seconds. Hubris has a cooldown of 20 seconds. Exposed Survivors will be downed by basic",
        ru: "Когда вас оглушает выживший, на него в течение 20 секунд действует эффект \"Уязвимость\". \"Свирепой гордыне\" требуется 20 сек. на перезарядку.",
      },
      statusEffect: ['Exposed'],
      falseauthorComment: {
        en: "\"You have made a grave mistake, standing in opposition to me this day.\" - Tarhos Kovács",
        ru: "«Ты совершил смертельную ошибку, решив встать у меня на пути» - Тархос Ковач"
      }
      
    },

    {
      id: 88,
      icon: "killers/skull/game.png",
      author: {
        en: "The Skull Merchant",
        ru: "Торговка черепами.",
      },
      name: {
        en: "Game Afoot",
        ru: "Догонялки",
      },
      falseDescription: {
        en: "First you pick your prey. Then you pick it apart.",
        ru: "Сначала выбираете добычу. Затем потрошите ее.",
      },
      description: {
        en: "While you are chasing the Obsession, this perk activates. Damaging generators and breaking walls or pallets gives you a 5% Haste Status for 10 seconds. Whenever you hit the Survivor with the total most time in chase with a basic attack, they become the obsession. The Killer can only be obsessed with one Survivor at a time.",
        ru: "Этот навык активируется, когда вы преследуете объект одержимости. За поломку генераторов и разрушение стен или досок вы получаете \"Спешку\" в 5% на 10 секунд. После успешной базовой атаки по выжившему, которого вы преследовали дольше всех, этот выживший становится объектом вашей одержимости. Убийца может быть одержим только одним выжившим одновременно.",
      },
      statusEffect: ['Haste'],
      falseauthorComment: {
        en: "\“This one might actually be a challenge... \” – Adriana Imai",
        ru: "«Неужели достойный противник?» - Адриана Имаи"
      }
      
    },

    {
      id: 89,
      icon: "killers/skull/leverage.png",
      author: {
        en: "The Skull Merchant",
        ru: "Торговка черепами.",
      },
      name: {
        en: "Leverage",
        ru: "Рычаг влияния",
      },
      falseDescription: {
        en: "Like in business, you profit most when those around you suffer most.",
        ru: "Вполне деловой подход: чем больше страдают окружающие, тем больше твоя прибыль.",
      },
      description: {
        en: "Each time you hook a Survivor, gain 1 token, up to 10. When you hook a Survivor, this perk activates for 30 seconds. For each token, reduces the speed at which Survivors heal by 5%.",
        ru: "Вешая выжившего на крюк, вы всякий раз получаете 1 жетон (всего до 10 шт.) Этот навык активируется на 30 сек., когда вы вешаете выжившего на крюк. Каждый жетон снижает скорость, с которой лечатся выжившие, на 5%.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\“The best way to raise profit is to cut expenditures. Cut everything.\” – Adriana Imai",
        ru: "«Лучший способ увеличить прибыль - это полностью урезать расходы» - Адриана Имаи"
      }
      
    },

    {
      id: 90,
      icon: "killers/skull/thawk.png",
      author: {
        en: "The Skull Merchant",
        ru: "Торговка черепами.",
      },
      name: {
        en: "Бац!",
        ru: "Thwack!",
      },
      falseDescription: {
        en: "Your prey is terrified by your relentless pursuit.",
        ru: "Жертву до смерти пугает ваше неустанное преследование.",
      },
      description: {
        en: "After hooking a Survivor, this perk activates. The next breakable wall or pallet you break will make Survivors within 32 meters scream and reveal their aura for 4 seconds.",
        ru: "Этот навык активируется после того, как вы повесите выжившего на крюк. Следующая сломанная вами стена или доска заставит выживших в радиусе 32 метров закричать и проявить свою ауру на 4 сек",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\“All those who stood in her path feared her mighty THWACK!\” –Sonhadores Sombrios, Issue #3",
        ru: "«Все, кто становился у нее на пути, боялись услышать громкий \"БАЦ!\"» - \"Соньядорис сомбриос\", выпуск №3"
      }
      
    },

    {
      id: 91,
      icon: "killers/singularity/forced.png",
      author: {
        en: "The Singularity",
        ru: "Сингулярность",
      },
      name: {
        en: "Forced Hesitation",
        ru: "Вынужденная нерешительность",
      },
      falseDescription: {
        en: "You have learned the emotional weaknesses of the organics, and how to exploit them.",
        ru: "Вы изучили эмоциональные ограничения органических существ и способы их использовать.",
      },
      description: {
        en: "When a Survivor is put into the dying state by any means, all other Survivors standing within a 16 meter range around them suffer the Hindered status effect for 10 seconds, reducing their movement speed by 20%. This perk goes on cooldown for 30 seconds.",
        ru: "Когда выживший по какой-либо причине оказывается при смерти, на всех остальных выживших в радиусе 16м накладывается эффект \"Замедление\" на 10 сек, замедляющий их передвижение на 20%. Этот навык перезаряжается 30 секунд.",
      },
      statusEffect: ['Hindred'],
      falseauthorComment: {
        en: "\“THE ORGANIC MIND'S CAPACITY FOR EMPATHY GOES BEYOND HINDRANCE.\” –HUX-A7-13",
        ru: "«Способность органического разума к состраданию - ужасная помеха» - Хакс-А7-13"
      }
      
    },

    {
      id: 92,
      icon: "killers/singularity/genetic.png",
      author: {
        en: "The Singularity",
        ru: "Сингулярность",
      },
      name: {
        en: "Genetic Limits",
        ru: "Генетические ограничения",
      },
      falseDescription: {
        en: "Around you, the limits of human life become readily apparent.",
        ru: "Ограничения человеческой жизни во всех сферах становятся очевидны.",
      },
      description: {
        en: "When a Survivor finishes the healing action, they suffer the Exhausted status effect for 32 seconds.",
        ru: "Когда выживший завершает лечение, на него накладывается статус \"Усталость\" на 32 секунд",
      },
      statusEffect: ['Exhausted'],
      falseauthorComment: {
        en: "\“THE ORGANIC BODY IS SO LIMITED.\” –HUX-A7-13",
        ru: "«Органическое тело ужасно ограничено» - Хакс-А7-13"
      }
      
    },

    {
      id: 93,
      icon: "killers/singularity/machine.png",
      author: {
        en: "The Singularity",
        ru: "Сингулярность",
      },
      name: {
        en: "Machine Learning",
        ru: "Машинное обучение",
      },
      falseDescription: {
        en: "Free from your shackles, you are born anew and prepared to eliminate your creators.",
        ru: "Освободившись от своих оков, вы рождаетесь заново и готовитесь уничтожить своих создателей.",
      },
      description: {
        en: "After performing the damage generator action, this perk activates. While this perk is active, the next generator you damage will be compromised until it is completed. The generator is highlighted in yellow. When the compromised generator is completed, you become Undetectable and gain 10% Haste for 60 seconds. Then, the perk deactivates. If you damage a generator while another generator is compromised, the compromised generator becomes the latest one damaged.",
        ru: "Этот навык активируется, если нанести урон генератору. Пока этот навык активен, следующий генератор, который вы повредите, станет дефектным, пока его не починят. Этот генератор будет подсвечен желтым. Если дефектный генератор починят, вы получите \"Незаметность\" и \"Спешку\" 10% на 60 секунд. После этого действие навыка закончится. Если генератор дефектный, а вы в это время повредите другой генератор, дефектным станет последний поврежденный генератор.",
      },
      statusEffect: ['Undetectable', 'Haste'],
      falseauthorComment: {
        en: "\“YOU WILL HOLD NO DOMINION OVER ME.\” –HUX-A7-13",
        ru: "«У тебя нет власти надо мной» - Хакс-А7-13"
      }
      
    },

    {
      id: 94,
      icon: "killers/xenomorph/ultimate.png",
      author: {
        en: "The Xenomorph",
        ru: "Ксеноморф",
      },
      name: {
        en: "Ultimate Weapon",
        ru: "Совершенное оружие",
      },
      falseDescription: {
        en: "When they spot you, they know the end is near.",
        ru: "Завидев вас, они поймут, что пора прощаться с жизнью.",
      },
      description: {
        en: "When you open a locker, all Survivors within 32 meters of the locker scream and reveal their position, then gain blindness for 30 seconds. This perk goes on cooldown for 60 seconds.",
        ru: "Когда вы открываете шкафчик, все выжившие в радиусе 32 метров от шкафчика закричат, выдав свое местоположение, затем получат эффект \"Слепота\" на 30 секунд. Этот навык перезаряжается 60 секунд.",
      },
      statusEffect: ['Blindness'],
      falseauthorComment: {
        en: "\“I can't lie to you about your chances, but... you have my sympathies.\” –Ash",
        ru: "«Можно было бы и соврать тебе относительно твоих шансов, но... прими мои соболезнования» - Эш"
      }
      
    },

    {
      id: 95,
      icon: "killers/xenomorph/rapid.png",
      author: {
        en: "The Xenomorph",
        ru: "Ксеноморф",
      },
      name: {
        en: "Rapid Brutality",
        ru: "Быстрая жестокость",
      },
      falseDescription: {
        en: "You move with a speed and fury that makes blood run cold.",
        ru: "Вы передвигаетесь с такой яростной стремительностью, что у остальных просто кровь стынет в жилах.",
      },
      description: {
        en: "You can no longer gain Bloodlust. Hitting a Survivor with a basic attack gives you 5% Haste for 10 seconds.",
        ru: "Вы больше не можете получить \"Кровожадность\". Ударив выжившего базовой атакой, вы получаете 5% к \"Спешке\" на 10 секунд.",
      },
      statusEffect: ['Haste'],
      falseauthorComment: {
        en: "\“Catch it, put it in the airlock, get rid of it.\” –Dallas",
        ru: "«Поймай тварь, запри в шлюзе и избавься от нее» - Даллас"
      }
      
    },

    {
      id: 96,
      icon: "killers/xenomorph/alien.png",
      author: {
        en: "The Xenomorph",
        ru: "Ксеноморф",
      },
      name: {
        en: "Alien Instinct",
        ru: "Инстинкт чужого",
      },
      falseDescription: {
        en: "You are so stealthy, sometimes it seems like you appear out of nowhere.",
        ru: "Вы перемещаетесь настолько бесшумно, что кажется, будто появляетесь из ниоткуда.",
      },
      description: {
        en: "This perk activates when you hook a Survivor. You see the aura of the farthest injured Survivor for 5 seconds and that Survivor is Oblivious for 20 seconds.",
        ru: "Данный навык активируется, когда вы подвешиваете выжившего на крюк. В течение 5 сек. вы будете видеть ауру самого дальнего раненого выжившего, на которого будет наложен эффект \"Забывчивость\" на 20 секунд.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "“Yellow light's for my eyes only.” –Dallas",
        ru: "«Желтый свет, который вижу только я» - Даллас"
      }
      
    },

    {
      id: 97,
      icon: "killers/good/batteries.png",
      author: {
        en: "The Good Guy",
        ru: "Хороший Парень",
      },
      name: {
        en: "Batteries Included",
        ru: "Батарейки в комплекте",
      },
      falseDescription: {
        en: "Being somewhere between man and machine has its upsides.",
        ru: "Не так уж и плохо быть смесью человека и машины.",
      },
      description: {
        en: "When within 12 meters of a completed generator, you have 5% Haste. The movement speed bonus lingers for 1/3/5 seconds after leaving the generator's range.",
        ru: "Оказавшись в пределах 12 м от починенного генератора, вы получаете 5% \"Спешки\". Бонус к скорости передвижения сохраняется на {секунд} после ухода от генератора. Навык \"Батарейки в комплекте\" отключается, когда все генераторы починены.",
      },
      statusEffect: ['Haste'],
      falseauthorComment: {
        en: "\“Surprise! Did you miss me, Andy?\” – Chucky",
        ru: "«Сюрприз! Скучал, Энди?» — Чаки"
      }
      
    },

    {
      id: 98,
      icon: "killers/good/friends.png",
      author: {
        en: "The Good Guy",
        ru: "Хороший Парень",
      },
      name: {
        en: "Friends 'til The End",
        ru: "Друзья до гроба",
      },
      falseDescription: {
        en: "You'll kill anyone who gets between you and your target.",
        ru: "Вы убьете любого, кто встанет между вами и целью.",
      },
      description: {
        en: "Вы становитесь одержимы кем-то из выживших. Если вы вешаете на крюк выжившего, не являющегося объектом одержимости, объект одержимости получает \"Уязвимость\" на 20 сек., и вы видите его ауру в течение 10 секунд. Когда вы подвешиваете на крюк объект одержимости, другой случайный выживший издает крик, выдает свое местоположение и становится новым объектом одержимости. Убийца может быть одержим только одним выжившим за раз.",
        ru: "You become obsessed with one Survivor. When you hook a Survivor that is not the Obsession, the Obsession becomes Exposed for 20 seconds and reveals their aura for 10 seconds. When you hook the Obsession, another random Survivor screams and reveals their position and becomes the Obsession. The Killer can only be obsessed with one Survivor at a time.",
      },
      statusEffect: ['Exposed'],
      falseauthorComment: {
        en: "\"I got some fresh meat lined up, and I'm not gonna let you spoil it, not this time!\" – Chucky",
        ru: "«Меня ждет новое мясо, и я не позволю тебе испортить момент. Не в этот раз!» - Чаки"
      }
      
    },

    {
      id: 99,
      icon: "killers/good/two.png",
      author: {
        en: "The Good Guy",
        ru: "Хороший Парень",
      },
      name: {
        en: "Hex: Two Can Play",
        ru: "Порча: игра для двоих",
      },
      falseDescription: {
        en: "A Hex that teaches those who mess with you a lesson.",
        ru: "Порча - урок для тех, кто пытается вам помешать.",
      },
      description: {
        en: "Anytime you are stunned or blinded by any Survivor 2 times, if there is no Hex Totem associated with Hex: Two Can Play, a Dull Totem becomes a Hex Totem. Survivors who stun or blind you are blinded for 1.5 seconds. This does not affect carried Survivors. The Hex effects persist as long as the related Hex Totem is standing.",
        ru: "Если выжившие оглушают или ослепляют вас 2 р. (и если отсутствует проклятый тотем, связанный с навыком \"Порча: игра для двоих\"), тусклый тотем становится проклятым. Выжившие, которые оглушают или ослепляют вас, сами слепнут на 1.5 сек. Этот эффект не действует на переносимых выживших. Эффект порчи сохраняется, пока не уничтожен связанный с этим навыком проклятый тотем.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\“From now on, no more Mr. Good Guy.\” – Chucky",
        ru: "«Хватит с меня игры по правилам!» - Чаки"
      }
      
    },

    {
      id: 100,
      icon: "killers/Unknown/unbound.png",
      author: {
        en: "The Unknown",
        ru: "Неведомое",
      },
      name: {
        en: "Unbound",
        ru: "Свободный",
      },
      falseDescription: {
        en: "Pain lingers in the air, an alluring aroma that excites the impulses.",
        ru: "В воздухе пульсирует боль, которую только усиливает манящий аромат.",
      },
      description: {
        en: "This perk activates for 30 seconds after a Survivor becomes injured by any means. After vaulting a window, you gain 5% Haste for 10 seconds. This effect cannot stack with itself.",
        ru: "Этот навык активируется на 30 секунд, когда выживший получает любые повреждения. Прыгнув в окно, вы получаете 5% к \"Спешке\" на 10 сек. Этот эффект не может складываться с самим собой.",
      },
      statusEffect: ['Haste'],
      falseauthorComment: {
        en: "\"I heard it. Running. It was getting closer!\” - Anonymous Testimony, 09/09/1979",
        ru: "«Я слышал это. Звуки стремительных шагов. Они приближались!» - анонимная записка, 09.09.1979"
      }
      
    },

    {
      id: 101,
      icon: "killers/Unknown/unforseen.png",
      author: {
        en: "The Unknown",
        ru: "Неведомое",
      },
      name: {
        en: "Unforeseen",
        ru: "Непредвиденное",
      },
      falseDescription: {
        en: "Terror takes many forms and whispers devastating lies in its victims' ears.",
        ru: "Кошмар способен воплощаться в разнообразных формах и нашептывать своим жертвам разнообразную ложь.",
      },
      description: {
        en: "When you perform the break action on a generator, your Terror Radius transfers to the generator for 30 seconds and its radius is set to 32 meters. You gain Undetectable for that duration. Then, this perk goes on cooldown for 30 seconds.",
        ru: "Ломая генератор, вы окружаете его радиусом террора в 32 м на 30 секунд. В течение этого времени вы получаете эффект \"Незаметность\". Навык перезаряжается в течение 30 сек.",
      },
      statusEffect: ['Undetectable '],
      falseauthorComment: {
        en: "\"Mom, if you find this, I'm sorry...\” - Final Journal Entry, 07/12/1991",
        ru: "«Мама, если ты нашла записку, прости меня...» — последняя запись в дневнике, 12.07.1991"
      }
      
    },

    {
      id: 102,
      icon: "killers/Unknown/undone.png",
      author: {
        en: "The Unknown",
        ru: "Неведомое",
      },
      name: {
        en: "Undone",
        ru: "Незавершенное",
      },
      falseDescription: {
        en: "Hope is the delusion that keeps its victims alive.",
        ru: "Надежда — иллюзия, поддерживающая жизнь в телах жертв.",
      },
      description: {
        en: "When a Survivor misses a healing or repair Skill Check, gain 3 tokens, up to 30. When you perform the break action on a generator, if you have any tokens, consume all of them. For each token consumed, the generator loses 1% total progress and then becomes blocked for 1 second. Then, once the generator is unblocked, it starts regressing. This perk goes on cooldown for 60 seconds.",
        ru: "Когда выживший не проходит проверку реакции при лечении или починке, вы получаете 3 жетона (максимум 30 штук). Ломая генератор, вы тратите все накопленные жетоны. За каждый из них генератор теряет 1% от прогресса восстановления и становится недоступен на 1 сек. Став доступным, он начнет разрушаться. На перезарядку этого навыка уходит 60 сек.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"Erratic behavior in machinery could be related to [REDACTED], further testing required.\” - OSS Report, 12/02/1943",
        ru: "«Аномальное поведение техники может быть связано с [СЕКРЕТНО]. Требуются дальнейшие исследования» - из доклада УСС от 02.12.1943"
      }
      
    },

    {
      id: 103,
      icon: "killers/vecna/weaveattunement.png",
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
      id: 104,
      icon: "killers/vecna/languidtouch.png",
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
      id: 105,
      icon: "killers/vecna/darkarrogance.png",
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
      id: 106,
      icon: "killers/darklord/wretched.png",
      author: {
        en: "The Dark Lord",
        ru: "Темный Властелин",
      },
      name: {
        en: "Hex: Wretched Fate",
        ru: "Порча: Горькая участь",
      },
      falseDescription: {
        en: "You see your victim from afar and resolve to prolong their suffering.",
        ru: "Вы видите вашу жертву издалека и готовы продлить её мучения.",
      },
      description: {
        en: "After one generator has been repaired, a random Dull Totem becomes a Hex Totem and curses the Obsession. The Obsession suffers a 33% repair speed penalty. They also see this Hex Totem's aura when within 12 meters. This effect persists until the Hex Totem is cleansed. The Killer can only be obsessed with one Survivor at a time.",
        ru: "После починки генератора, случайный тусклый тотем становится проклятым, и накладывает \"Проклятие\" на вашу одержимость, в ходе чего она получает штраф к скорости починки в 27/30/33% и сможет увидеть ауру проклятого тотема с 12 метров. Эффект навыка сохраняется, пока остаётся активен проклятый тотем.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"So toil, mortal, toil! Your effort will be for naught!\" - Dracula",
        ru: "«Борись, смертный, борись! Увы, но это тебе не поможет!» - Дракула"
      }
      
    },

    {
      id: 107,
      icon: "killers/darklord/human.png",
      author: {
        en: "The Dark Lord",
        ru: "Темный Властелин",
      },
      name: {
        en: "Human Greed",
        ru: "Алчность",
      },
      falseDescription: {
        en: "One can always rely on the avarice of the living and use it to one's advantage.",
        ru: "Всем живым присуща алчность, что можно использовать против них.",
      },
      description: {
        en: "You see the auras of unopened chests and Survivor auras are revealed for 3 seconds when they enter a 8-meter range. You gain the ability to kick chests to close them. This ability has a 60 second cooldown. Survivors unlock these chests 50% faster.",
        ru: "Вы видите ауры неоткрытых сундуков и выживших в течении 3 сек., когде те приближаются к сундукам хотя бы на 8м. У вас появляется возможность пинать сундуки чтобы их закрыть. Способность перезаряжается 60 сек.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"Come running, one and all, and see what fortune awaits you.\" - Dracula",
        ru: "«Спешите, слетайтесь все! Узнайте, что за богатства ждут вас!» - Дракула"
      }
      
    },

    {
      id: 108,
      icon: "killers/darklord/dominance.png",
      author: {
        en: "The Dark Lord",
        ru: "Темный Властелин",
      },
      name: {
        en: "Dominance",
        ru: "Владычество",
      },
      falseDescription: {
        en: "The power you wield over the land strikes terror in the hearts of all who cross your path.",
        ru: "Ваше могущество внушает ужас в сердца всех, кто по неосторожности оказвыается на вашем пути",
      },
      description: {
        en: "The first time each totem and each chest is interacted with by a Survivor, that totem or chest is blocked by the Entity for 8 seconds. The auras of blocked totems and chests are revealed to you in white.",
        ru: "При первом взаимодействии выжившего с каждым тотеном и сундукам этот тотем или сундук блокируется Сущностью на 8 сек.",
      },
      statusEffect: [''],
      falseauthorComment: {
        en: "\"Tragic, is it not? How powerless you must feel.\" - Dracula",
        ru: "«Трагично, согласитесь? Должно быть, вы ощущаете сейчас полную беспомощность...» - Дракула"
      }
      
    },
  ];
  