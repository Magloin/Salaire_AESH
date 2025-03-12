/*const allowances = [
    {
        "AIN (01)": [
            {
                "city": "Beynost",
                "postal_code": "01700",
                "allowance": 2
            },
            {
                "city": "La Boisse",
                "postal_code": "01120",
                "allowance": 2
            },
            {
                "city": "Dagneux",
                "postal_code": "01120",
                "allowance": 2
            },
            {
                "city": "Massieux",
                "postal_code": "01600",
                "allowance": 2
            },
            {
                "city": "Miribel",
                "postal_code": "01700",
                "allowance": 2
            },
            {
                "city": "Misérieux",
                "postal_code": "01600",
                "allowance": 2
            },
            {
                "city": "Montluel",
                "postal_code": "01120",
                "allowance": 2
            },
            {
                "city": "Neyron",
                "postal_code": "01700",
                "allowance": 2
            },
            {
                "city": "Parcieux",
                "postal_code": "01600",
                "allowance": 2
            },
            {
                "city": "Reyrieux",
                "postal_code": "01600",
                "allowance": 2
            },
            {
                "city": "Saint-Didier-de-Formans",
                "postal_code": "01600",
                "allowance": 2
            },
            {
                "city": "Saint-Maurice-de-Beynost",
                "postal_code": "01700",
                "allowance": 2
            },
            {
                "city": "Sainte-Euphémie",
                "postal_code": "01600",
                "allowance": 2
            },
            {
                "city": "Toussieux",
                "postal_code": "01600",
                "allowance": 2
            },
            {
                "city": "Trévoux",
                "postal_code": "01600",
                "allowance": 2
            },
            {
                "city": "Autres communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "AISNE (02)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "ALLIER (03)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "ALPES DE HAUTE PROVENCE (04)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "HAUTES-ALPES (05)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "BOUCHES-DU-RHÔNE (13)": [
            {
                "city": "Port-Saint-Louis-du-Rhône",
                "postal_code": "13230",
                "allowance": 0
            },
            {
                "city": "Rognac",
                "postal_code": "13340",
                "allowance": 0
            },
            {
                "city": "Roquefort-la-Bédoule",
                "postal_code": "13830",
                "allowance": 2
            },
            {
                "city": "Roquevaire",
                "postal_code": "13360",
                "allowance": 0
            },
            {
                "city": "Saint-Chamas",
                "postal_code": "13250",
                "allowance": 0
            },
            {
                "city": "Saint-Marc-Jaumegarde",
                "postal_code": "13100",
                "allowance": 0
            },
            {
                "city": "Saint-Martin-de-Crau",
                "postal_code": "13310",
                "allowance": 2
            },
            {
                "city": "Saint-Savournin",
                "postal_code": "13119",
                "allowance": 0
            },
            {
                "city": "Saint-Victoret",
                "postal_code": "13730",
                "allowance": 0
            },
            {
                "city": "Saintes-Maries-de-la-Mer (Les)",
                "postal_code": "13460",
                "allowance": 2
            },
            {
                "city": "Salon-de-Provence",
                "postal_code": "13300",
                "allowance": 2
            },
            {
                "city": "Septèmes-les-Vallons",
                "postal_code": "13240",
                "allowance": 0
            },
            {
                "city": "Simiane-Collongue",
                "postal_code": "13109",
                "allowance": 0
            },
            {
                "city": "Tarascon",
                "postal_code": "13150",
                "allowance": 2
            },
            {
                "city": "Tholonet (Le)",
                "postal_code": "13100",
                "allowance": 0
            },
            {
                "city": "Venelles",
                "postal_code": "13770",
                "allowance": 0
            },
            {
                "city": "Vitrolles",
                "postal_code": "13127",
                "allowance": 0
            },
            {
                "city": "Autres communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "CALVADOS (14)": [
            {
                "city": "Baron-sur-Odon",
                "postal_code": "14210",
                "allowance": 2
            },
            {
                "city": "Bénouville",
                "postal_code": "14970",
                "allowance": 2
            },
            {
                "city": "Beuvillers",
                "postal_code": "14100",
                "allowance": 2
            },
            {
                "city": "Blainville-sur-Orne",
                "postal_code": "14550",
                "allowance": 2
            },
            {
                "city": "Bretteville-sur-Orne",
                "postal_code": "14760",
                "allowance": 2
            },
            {
                "city": "Caen",
                "postal_code": "14000",
                "allowance": 2
            },
            {
                "city": "Carpiquet",
                "postal_code": "14650",
                "allowance": 2
            },
            {
                "city": "Colombelles",
                "postal_code": "14460",
                "allowance": 2
            },
            {
                "city": "Cormelles-le-Royal",
                "postal_code": "14123",
                "allowance": 2
            },
            {
                "city": "Cuverville",
                "postal_code": "14840",
                "allowance": 2
            },
            {
                "city": "Démouville",
                "postal_code": "14840",
                "allowance": 2
            },
            {
                "city": "Épron",
                "postal_code": "14610",
                "allowance": 2
            },
            {
                "city": "Fleury-sur-Orne",
                "postal_code": "14123",
                "allowance": 2
            },
            {
                "city": "Fontaine-Étoupefour",
                "postal_code": "14790",
                "allowance": 2
            },
            {
                "city": "Giberville",
                "postal_code": "14730",
                "allowance": 2
            },
            {
                "city": "Glos",
                "postal_code": "14100",
                "allowance": 2
            },
            {
                "city": "Hérouville-Saint-Clair",
                "postal_code": "14200",
                "allowance": 2
            },
            {
                "city": "Ifs",
                "postal_code": "14123",
                "allowance": 2
            },
            {
                "city": "Lisieux",
                "postal_code": "14100",
                "allowance": 2
            },
            {
                "city": "Louvigny",
                "postal_code": "14111",
                "allowance": 2
            },
            {
                "city": "Mondeville",
                "postal_code": "14120",
                "allowance": 2
            },
            {
                "city": "Ouilly-le-Vicomte",
                "postal_code": "14100",
                "allowance": 2
            },
            {
                "city": "Rots",
                "postal_code": "14980",
                "allowance": 2
            },
            {
                "city": "Saint-Désir",
                "postal_code": "14100",
                "allowance": 2
            },
            {
                "city": "Saint-Germain-la-Blanche-Herbe",
                "postal_code": "14280",
                "allowance": 2
            },
            {
                "city": "Verson",
                "postal_code": "14790",
                "allowance": 2
            },
            {
                "city": "Autres communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "CANTAL (15)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "CHARENTE (16)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "CHARENTE-MARITIME (17)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "CHER (18)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "CORRÈZE (19)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "EURE (27)": [
            {
                "city": "Saint-Just",
                "postal_code": "27950",
                "allowance": 2
            },
            {
                "city": "Saint-Marcel",
                "postal_code": "27950",
                "allowance": 2
            },
            {
                "city": "Saint-Pierre-D’Autils",
                "postal_code": "27950",
                "allowance": 2
            },
            {
                "city": "Vernon",
                "postal_code": "27200",
                "allowance": 2
            },
            {
                "city": "Autres communes",
                "postal_code": "",
                "allowance": 3
            },
            {
        "EURE-ET-LOIR (28)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "FINISTÈRE (29)": [
            {
                "city": "Bohars",
                "postal_code": "29820",
                "allowance": 2
            },
            {
                "city": "Brest",
                "postal_code": "29200",
                "allowance": 2
            },
            {
                "city": "Gouesnou",
                "postal_code": "29850",
                "allowance": 2
            },
            {
                "city": "Guilers",
                "postal_code": "29820",
                "allowance": 2
            },
            {
                "city": "Guipavas",
                "postal_code": "29490",
                "allowance": 2
            },
            {
                "city": "Loperhet",
                "postal_code": "29470",
                "allowance": 2
            },
            {
                "city": "Plougastel-Daoulas",
                "postal_code": "29470",
                "allowance": 2
            },
            {
                "city": "Plouzané",
                "postal_code": "29280",
                "allowance": 2
            },
            {
                "city": "Le Relecq-Kerhuon",
                "postal_code": "29480",
                "allowance": 2
            },
            {
                "city": "Autres communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "GARD (30)": [
            {
                "city": "Alès",
                "postal_code": "30100",
                "allowance": 2
            },
            {
                "city": "Anduze",
                "postal_code": "30140",
                "allowance": 2
            },
            {
                "city": "Bagard",
                "postal_code": "30140",
                "allowance": 2
            },
            {
                "city": "Beaucaire",
                "postal_code": "30300",
                "allowance": 2
            },
            {
                "city": "Bernis",
                "postal_code": "30620",
                "allowance": 2
            },
            {
                "city": "Bessèges",
                "postal_code": "30160",
                "allowance": 2
            },
            {
                "city": "Boisset-et-Gaujac",
                "postal_code": "30140",
                "allowance": 2
            },
            {
                "city": "Bordezac",
                "postal_code": "30160",
                "allowance": 2
            },
            {
                "city": "Branoux-les-Taillades",
                "postal_code": "30110",
                "allowance": 2
            },
            {
                "city": "Caissargues",
                "postal_code": "30132",
                "allowance": 2
            },
            {
                "city": "Cendras",
                "postal_code": "30480",
                "allowance": 2
            },
            {
                "city": "Codognan",
                "postal_code": "30920",
                "allowance": 2
            },
            {
                "city": "Nîmes",
                "postal_code": "30000",
                "allowance": 2
            },
            {
                "city": "Vergèze",
                "postal_code": "30310",
                "allowance": 2
            },
            {
                "city": "Vestric-et-Candiac",
                "postal_code": "30600",
                "allowance": 2
            },
            {
                "city": "Autres communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "HAUTE-GARONNE (31)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "GERS (32)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "GIRONDE (33)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "HÉRAULT (34)": [
            {
                "city": "Balaruc-les-Bains",
                "postal_code": "34540",
                "allowance": 2
            },
            {
                "city": "Balaruc-le-Vieux",
                "postal_code": "34540",
                "allowance": 2
            },
            {
                "city": "Béziers",
                "postal_code": "34500",
                "allowance": 2
            },
            {
                "city": "Montpellier",
                "postal_code": "34000",
                "allowance": 2
            },
            {
                "city": "Sète",
                "postal_code": "34200",
                "allowance": 2
            },
            {
                "city": "Autres communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "ILLE-ET-VILAINE (35)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "INDRE (36)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "INDRE-ET-LOIRE (37)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "ISÈRE (38)": [
            {
                "city": "Chasse-sur-Rhône",
                "postal_code": "38670",
                "allowance": 2
            },
            {
                "city": "Autres communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "JURA (39)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "LANDES (40)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "LOIR-ET-CHER (41)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "LOIRE (42)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "HAUTE-LOIRE (43)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "LOIRE-ATLANTIQUE (44)": [
            {
                "city": "Basse-Goulaine",
                "postal_code": "44115",
                "allowance": 2
            },
            {
                "city": "Bouguenais",
                "postal_code": "44340",
                "allowance": 2
            },
            {
                "city": "Carquefou",
                "postal_code": "44470",
                "allowance": 2
            },
            {
                "city": "La Chapelle-sur-Erdre",
                "postal_code": "44240",
                "allowance": 2
            },
            {
                "city": "Couëron",
                "postal_code": "44220",
                "allowance": 2
            },
            {
                "city": "Haute-Goulaine",
                "postal_code": "44115",
                "allowance": 2
            },
            {
                "city": "Indre",
                "postal_code": "44610",
                "allowance": 2
            },
            {
                "city": "La Montagne",
                "postal_code": "44620",
                "allowance": 2
            },
            {
                "city": "Nantes",
                "postal_code": "44000",
                "allowance": 2
            },
            {
                "city": "Orvault",
                "postal_code": "44700",
                "allowance": 2
            },
            {
                "city": "Rezé",
                "postal_code": "44400",
                "allowance": 2
            },
            {
                "city": "Saint-Herblain",
                "postal_code": "44800",
                "allowance": 2
            },
            {
                "city": "Saint-Jean-de-Boiseau",
                "postal_code": "44640",
                "allowance": 2
            },
            {
                "city": "Saint-Sébastien-sur-Loire",
                "postal_code": "44230",
                "allowance": 2
            },
            {
                "city": "Sainte-Luce-sur-Loire",
                "postal_code": "44980",
                "allowance": 2
            },
            {
                "city": "Sautron",
                "postal_code": "44880",
                "allowance": 2
            },
            {
                "city": "Les Sorinières",
                "postal_code": "44840",
                "allowance": 2
            },
            {
                "city": "Thouaré-sur-Loire",
                "postal_code": "44470",
                "allowance": 2
            },
            {
                "city": "Vertou",
                "postal_code": "44120",
                "allowance": 2
            },
            {
                "city": "Autres communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "LOIRET (45)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "LOT (46)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "LOT-ET-GARONNE (47)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "LOZÈRE (48)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "MAINE-ET-LOIRE (49)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "MANCHE (50)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "MARNE (51)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "HAUTE-MARNE (52)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "MAYENNE (53)": [
            {
                "city": "Toutes communes",
                "postal_code": "",
                "allowance": 3
            }
        ]
    },
    {
        "MEURTHE-ET-MOSELLE (54)": [
            {
                "city": "Abbeville-lès-Conflans",
                "postal_code": "54800",
                "allowance": 2
            },
            {
                "city": "Affléville",
                "postal_code": "54800",
                "allowance": 2
            },
            {
                "city": "Allamont",
                "postal_code": "54800",
                "allowance": 2
            },
            {
                "city": "Anderny",
                "postal_code": "54560",
                "allowance": 2
            },
            {
                "city": "Anoux",
                "postal_code": "54150",
                "allowance": 2
            },
            {
                "city": "Auboué",
                "postal_code": "54580",
                "allowance": 2
            },
            {
                "city": "Audun-le-Roman",
                "postal_code": "54560",
                "allowance": 2
            },
            {
                "city": "Avillers",
                "postal_code": "54490",
                "allowance": 2
            },
            {
                "city": "Avril",
                "postal_code": "54150",
                "allowance": 2
            },
            {
                "city": "Bainville-sur-Madon",
                "postal_code": "54550",
                "allowance": 2
            },
            {
                "city": "Les Baroches",
                "postal_code": "54150",
                "allowance": 2
            },
            {
                "city": "Baslieux",
                "postal_code": "54620",
                "allowance": 2
            },
            {
                "city": "Batilly",
                "postal_code": "54980",
                "allowance": 2
            },
            {
                "city": "Bazailles",
                "postal_code": "54620",
                "allowance": 2
            },
            {
                "city": "Béchamps",
                "postal_code": "54800",
                "allowance": 2
            },
            {
                "city": "Belleville",
                "postal_code": "54940",
                "allowance": 2
            },
            {
                "city": "Bettainvillers",
                "postal_code": "54640",
                "allowance": 2
            },
            {
                "city": "Beuvillers",
                "postal_code": "54560",
                "allowance": 2
            },
            {
                "city": "Blénod-lès-Pont-à-Mousson",
                "postal_code": "54700",
                "allowance": 2
            },
            {
                "city": "Boismont",
                "postal_code": "54620",
                "allowance": 2
            },
            {
                "city": "Boncourt",
                "postal_code": "54400",
                "allowance": 2
            },
            {
                "city": "Bouxières-aux-Dames",
                "postal_code": "54136",
                "allowance": 2
            },
            {
                "city": "Brainville",
                "postal_code": "54800",
                "allowance": 2
            },
            {
                "city": "Bréhain-la-Ville",
                "postal_code": "54190",
                "allowance": 2
            },
            {
                "city": "Briey",
                "postal_code": "54150",
                "allowance": 2
            },
            {
                "city": "Bruville",
                "postal_code": "54800",
                "allowance": 2
            },
            {
                "city": "Chaligny",
                "postal_code": "54230",
                "allowance": 2
            },
            {
                "city": "Champigneulles",
                "postal_code": "54250",
                "allowance": 2
            },
            {
                "city": "Chanteheux",
                "postal_code": "54300",
                "allowance": 2
            },
            {
                "city": "Chavigny",
                "postal_code": "54230",
                "allowance": 2
            },
            {
                "city": "Chenières",
                "postal_code": "54720",
                "allowance": 2
            },
            {
                "city": "Conflans-en-Jarnisy",
                "postal_code": "54800",
                "allowance": 2
            },
            {
                "city": "Cons-la-Grandville",
                "postal_code": "54870",
                "allowance": 2
            },
            {
                "city": "Cosnes-et-Romain",
                "postal_code": "54400",
                "allowance": 2
            },
            {
                "city": "Crusnes",
                "postal_code": "54680",
                "allowance": 2
            },
            {
                "city": "Custines",
                "postal_code": "54670",
                "allowance": 2
            },
            {
                "city": "Cutry",
                "postal_code": "54720",
                "allowance": 2
            },
            {
                "city": "Dieulouard",
                "postal_code": "54380",
                "allowance": 2
            },
            {
                "city": "Dombasle-sur-Meurthe",
                "postal_code": "54110",
                "allowance": 2
            },
            {
                "city": "Dommartemont",
                "postal_code": "54130",
                "allowance": 2
            },
            {
                "city": "Domprix",
                "postal_code": "54490",
                "allowance": 2
            },
            {
                "city": "Domcourt-lès-Conflans",
                "postal_code": "54800",
                "allowance": 2
            },
            {
                "city": "Errouville",
                "postal_code": "54680",
                "allowance": 2
            },
            {
                "city": "Essey-lès-Nancy",
                "postal_code": "54270",
                "allowance": 2
            },
            {
                "city": "Eulmont",
                "postal_code": "54690",
                "allowance": 2
            },
            {
                "city": "Fillières",
                "postal_code": "54560",
                "allowance": 2
            },
            {
                "city": "Fléville-devant-Nancy",
                "postal_code": "54710",
                "allowance": 2
            },
        rajouter une crochet après la fin de la liste du 54
]*/




/*--
    lien chatGPT : https://chatgpt.com/c/67bf360d-a5f8-800d-9039-82a8d257e749  

    lien google sheet : https://docs.google.com/spreadsheets/d/1F64bYRQn4zRpVAkGjStYfVoA13mm47ypaU3BjPHxL2k/edit?gid=1503638194#gid=1503638194
    */




