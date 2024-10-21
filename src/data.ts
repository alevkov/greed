import { SubstanceData } from './types';

export const substanceData: SubstanceData[] = [
    {
        "substance": "1,4-Butanediol",
        "method": "oral",
        "unit": "ml",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 1.5
            },
            "Light": {
                "value": 1.5,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Common": {
                "value": 2.5,
                "CI Lower": 1.75,
                "CI Upper": 3.0
            },
            "Strong": {
                "value": 3.0,
                "CI Lower": 2.5,
                "CI Upper": 5.0
            },
            "Heavy": {
                "value": 5.0,
                "CI Lower": 4.0,
                "CI Upper": 6.0
            }
        },
        "reliability_score": 0.8473954263843368
    },
    {
        "substance": "1P-LSD",
        "method": "oral",
        "unit": "\u00b5g",
        "tiers": {
            "Threshold": {
                "value": 37.650000000000006,
                "CI Lower": 4.0,
                "CI Upper": 50.0
            },
            "Light": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 100.0,
                "CI Upper": 150.0
            },
            "Strong": {
                "value": 200.0,
                "CI Lower": 113.0,
                "CI Upper": 200.0
            },
            "Heavy": {
                "value": 300.0,
                "CI Lower": 200.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.8082269315281372
    },
    {
        "substance": "1P-LSD",
        "method": "sublingual",
        "unit": "\u00b5g",
        "tiers": {
            "Threshold": {
                "value": 50.0,
                "CI Lower": 37.0,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 100.0,
                "CI Upper": 150.0
            },
            "Strong": {
                "value": 150.0,
                "CI Lower": 100.0,
                "CI Upper": 200.0
            },
            "Heavy": {
                "value": 200.0,
                "CI Lower": 150.0,
                "CI Upper": 250.0
            }
        },
        "reliability_score": 0.8535984475063914
    },
    {
        "substance": "2'-Oxo-PCE",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 7.0
            },
            "Light": {
                "value": 5.0,
                "CI Lower": 1.0,
                "CI Upper": 15.0
            },
            "Common": {
                "value": 8.0,
                "CI Lower": 5.0,
                "CI Upper": 27.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 7.0,
                "CI Upper": 30.0
            },
            "Heavy": {
                "value": 30.0,
                "CI Lower": 15.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.75096499204624
    },
    {
        "substance": "2-Fluorodeschloroketamine",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 15.0
            },
            "Light": {
                "value": 15.0,
                "CI Lower": 10.0,
                "CI Upper": 25.0
            },
            "Common": {
                "value": 23.0,
                "CI Lower": 12.5,
                "CI Upper": 46.0
            },
            "Strong": {
                "value": 43.5,
                "CI Lower": 21.0,
                "CI Upper": 60.0
            },
            "Heavy": {
                "value": 60.449999999999996,
                "CI Lower": 46.0,
                "CI Upper": 63.0
            }
        },
        "reliability_score": 0.813718525382588
    },
    {
        "substance": "2-Fluorodeschloroketamine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 20.0,
                "CI Lower": 10.0,
                "CI Upper": 30.0
            },
            "Common": {
                "value": 25.0,
                "CI Lower": 10.0,
                "CI Upper": 30.0
            },
            "Strong": {
                "value": 30.0,
                "CI Lower": 20.0,
                "CI Upper": 50.0
            },
            "Heavy": {
                "value": 43.999999999999986,
                "CI Lower": 30.0,
                "CI Upper": 50.0
            }
        },
        "reliability_score": 0.857171431429143
    },
    {
        "substance": "2-Fluoromethamphetamine",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 17.5,
                "CI Lower": 15.0,
                "CI Upper": 30.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 15.0,
                "CI Upper": 30.0
            },
            "Strong": {
                "value": 30.0,
                "CI Lower": 20.0,
                "CI Upper": 40.0
            },
            "Heavy": {
                "value": 35.0,
                "CI Lower": 30.0,
                "CI Upper": 40.0
            }
        },
        "reliability_score": 0.8964909030883399
    },
    {
        "substance": "2-Fluoromethamphetamine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 15.5,
                "CI Lower": 15.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 30.0,
                "CI Lower": 30.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.8865084831173604
    },
    {
        "substance": "2-Fluoromethamphetamine",
        "method": "rectal",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 15.0
            },
            "Light": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 25.0
            },
            "Strong": {
                "value": 25.0,
                "CI Lower": 25.0,
                "CI Upper": 25.0
            },
            "Heavy": {
                "value": 35.0,
                "CI Lower": 30.0,
                "CI Upper": 35.0
            }
        },
        "reliability_score": 0.9072156290774835
    },
    {
        "substance": "2-Me-AP-237",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 7.5,
                "CI Lower": 7.5,
                "CI Upper": 15.0
            },
            "Light": {
                "value": 15.0,
                "CI Lower": 7.5,
                "CI Upper": 15.0
            },
            "Common": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 15.0
            },
            "Strong": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 50.0
            },
            "Heavy": {
                "value": 50.0,
                "CI Lower": 15.0,
                "CI Upper": 50.0
            }
        },
        "reliability_score": 0.8123728819482439
    },
    {
        "substance": "2-Me-AP-237",
        "method": "rectal",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 20.0,
                "CI Lower": 15.0,
                "CI Upper": 25.0
            },
            "Common": {
                "value": 25.0,
                "CI Lower": 20.0,
                "CI Upper": 30.0
            },
            "Strong": {
                "value": 30.0,
                "CI Lower": 25.0,
                "CI Upper": 40.0
            },
            "Heavy": {
                "value": 40.0,
                "CI Lower": 40.0,
                "CI Upper": 40.0
            }
        },
        "reliability_score": 0.8997973685587626
    },
    {
        "substance": "2-Methyl-2-Butanol",
        "method": "oral",
        "unit": "ml",
        "tiers": {
            "Threshold": {
                "value": 0.645,
                "CI Lower": 0.6,
                "CI Upper": 2.0
            },
            "Light": {
                "value": 0.7749999999999999,
                "CI Lower": 0.6,
                "CI Upper": 2.0
            },
            "Common": {
                "value": 2.0,
                "CI Lower": 0.7,
                "CI Upper": 4.0
            },
            "Strong": {
                "value": 3.5,
                "CI Lower": 1.0,
                "CI Upper": 5.0
            },
            "Heavy": {
                "value": 4.549999999999999,
                "CI Lower": 2.0,
                "CI Upper": 5.0
            }
        },
        "reliability_score": 0.782292181548581
    },
    {
        "substance": "25C-NBOMe",
        "method": "insufflated",
        "unit": "\u00b5g",
        "tiers": {
            "Threshold": {
                "value": 136.66,
                "CI Lower": 83.3,
                "CI Upper": 250.0
            },
            "Light": {
                "value": 250.0,
                "CI Lower": 150.0,
                "CI Upper": 400.0
            },
            "Common": {
                "value": 300.0,
                "CI Lower": 200.0,
                "CI Upper": 500.0
            },
            "Strong": {
                "value": 500.0,
                "CI Lower": 250.0,
                "CI Upper": 600.0
            },
            "Heavy": {
                "value": 639.9999999999999,
                "CI Lower": 500.0,
                "CI Upper": 800.0
            }
        },
        "reliability_score": 0.8398988730330064
    },
    {
        "substance": "25C-NBOMe",
        "method": "sublingual",
        "unit": "\u00b5g",
        "tiers": {
            "Threshold": {
                "value": 150.0,
                "CI Lower": 150.0,
                "CI Upper": 250.0
            },
            "Light": {
                "value": 300.0,
                "CI Lower": 166.6,
                "CI Upper": 400.0
            },
            "Common": {
                "value": 500.0,
                "CI Lower": 300.0,
                "CI Upper": 600.0
            },
            "Strong": {
                "value": 675.0,
                "CI Lower": 500.0,
                "CI Upper": 900.0
            },
            "Heavy": {
                "value": 1000.0,
                "CI Lower": 800.0,
                "CI Upper": 1200.0
            }
        },
        "reliability_score": 0.8413453360971432
    },
    {
        "substance": "25I-NBOMe",
        "method": "insufflated",
        "unit": "\u00b5g",
        "tiers": {
            "Threshold": {
                "value": 125.0,
                "CI Lower": 60.0,
                "CI Upper": 211.0
            },
            "Light": {
                "value": 127.0,
                "CI Lower": 125.0,
                "CI Upper": 400.0
            },
            "Common": {
                "value": 400.0,
                "CI Lower": 127.0,
                "CI Upper": 500.0
            },
            "Strong": {
                "value": 500.0,
                "CI Lower": 300.0,
                "CI Upper": 1200.0
            },
            "Heavy": {
                "value": 1200.0,
                "CI Lower": 500.0,
                "CI Upper": 1400.0
            }
        },
        "reliability_score": 0.7569593432400259
    },
    {
        "substance": "25I-NBOMe",
        "method": "oral",
        "unit": "\u00b5g",
        "tiers": {
            "Threshold": {
                "value": 500.0,
                "CI Lower": 500.0,
                "CI Upper": 750.0
            },
            "Light": {
                "value": 712.5,
                "CI Lower": 500.0,
                "CI Upper": 1000.0
            },
            "Common": {
                "value": 900.0,
                "CI Lower": 500.0,
                "CI Upper": 1500.0
            },
            "Strong": {
                "value": 1275.0,
                "CI Lower": 750.0,
                "CI Upper": 1850.0
            },
            "Heavy": {
                "value": 1712.4999999999998,
                "CI Lower": 1000.0,
                "CI Upper": 1850.0
            }
        },
        "reliability_score": 0.8664748834896614
    },
    {
        "substance": "25I-NBOMe",
        "method": "sublingual",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.0
            },
            "Common": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.2
            },
            "Strong": {
                "value": 1.5,
                "CI Lower": 1.0,
                "CI Upper": 1.6
            },
            "Heavy": {
                "value": 2.0,
                "CI Lower": 1.5,
                "CI Upper": 2.0
            }
        },
        "reliability_score": 0.9134822570529826
    },
    {
        "substance": "25I-NBOMe",
        "method": "sublingual",
        "unit": "\u00b5g",
        "tiers": {
            "Threshold": {
                "value": 210.0,
                "CI Lower": 1.0,
                "CI Upper": 250.0
            },
            "Light": {
                "value": 300.0,
                "CI Lower": 250.0,
                "CI Upper": 600.0
            },
            "Common": {
                "value": 600.0,
                "CI Lower": 500.0,
                "CI Upper": 800.0
            },
            "Strong": {
                "value": 800.0,
                "CI Lower": 634.0,
                "CI Upper": 1500.0
            },
            "Heavy": {
                "value": 1559.9999999999998,
                "CI Lower": 1000.0,
                "CI Upper": 2000.0
            }
        },
        "reliability_score": 0.8057436991388685
    },
    {
        "substance": "2C-B",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 2.5,
                "CI Upper": 7.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 7.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 15.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 25.0,
                "CI Lower": 20.0,
                "CI Upper": 27.0
            },
            "Heavy": {
                "value": 46.99999999999996,
                "CI Lower": 30.0,
                "CI Upper": 50.0
            }
        },
        "reliability_score": 0.802259636718476
    },
    {
        "substance": "2C-B",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 8.0,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 15.0,
                "CI Lower": 13.5,
                "CI Upper": 18.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 22.5
            },
            "Strong": {
                "value": 25.0,
                "CI Lower": 25.0,
                "CI Upper": 26.0
            },
            "Heavy": {
                "value": 35.0,
                "CI Lower": 30.0,
                "CI Upper": 36.0
            }
        },
        "reliability_score": 0.8858856264641926
    },
    {
        "substance": "2C-B",
        "method": "rectal",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 8.35,
                "CI Lower": 7.0,
                "CI Upper": 15.0
            },
            "Light": {
                "value": 11.25,
                "CI Lower": 7.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 15.5,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 15.0,
                "CI Upper": 33.0
            },
            "Heavy": {
                "value": 27.149999999999984,
                "CI Lower": 16.0,
                "CI Upper": 33.0
            }
        },
        "reliability_score": 0.8668688328042287
    },
    {
        "substance": "2C-B-Fly",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 2.5,
                "CI Upper": 9.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 15.0
            },
            "Strong": {
                "value": 15.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 20.0,
                "CI Lower": 15.0,
                "CI Upper": 25.0
            }
        },
        "reliability_score": 0.8694578308113325
    },
    {
        "substance": "2C-C",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 4.4,
                "CI Lower": 1.0,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 9.0,
                "CI Lower": 5.0,
                "CI Upper": 15.0
            },
            "Strong": {
                "value": 15.0,
                "CI Lower": 8.0,
                "CI Upper": 25.0
            },
            "Heavy": {
                "value": 25.749999999999993,
                "CI Lower": 15.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.7809627527337393
    },
    {
        "substance": "2C-C",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 11.600000000000001,
                "CI Lower": 5.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 25.0,
                "CI Lower": 20.0,
                "CI Upper": 30.0
            },
            "Common": {
                "value": 30.0,
                "CI Lower": 30.0,
                "CI Upper": 36.0
            },
            "Strong": {
                "value": 40.0,
                "CI Lower": 36.0,
                "CI Upper": 50.0
            },
            "Heavy": {
                "value": 55.99999999999994,
                "CI Lower": 50.0,
                "CI Upper": 60.0
            }
        },
        "reliability_score": 0.8776618928178779
    },
    {
        "substance": "2C-D",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 7.75,
                "CI Lower": 5.0,
                "CI Upper": 12.0
            },
            "Light": {
                "value": 15.0,
                "CI Lower": 10.0,
                "CI Upper": 25.0
            },
            "Common": {
                "value": 30.0,
                "CI Lower": 20.0,
                "CI Upper": 40.0
            },
            "Strong": {
                "value": 50.0,
                "CI Lower": 40.0,
                "CI Upper": 55.0
            },
            "Heavy": {
                "value": 65.0,
                "CI Lower": 50.0,
                "CI Upper": 80.0
            }
        },
        "reliability_score": 0.8209059479912526
    },
    {
        "substance": "2C-E",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 1.5,
                "CI Lower": 1.0,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 8.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 6.0,
                "CI Upper": 10.0
            },
            "Strong": {
                "value": 13.0,
                "CI Lower": 10.0,
                "CI Upper": 15.0
            },
            "Heavy": {
                "value": 25.0,
                "CI Lower": 15.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.8037467651645069
    },
    {
        "substance": "2C-E",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 4.0,
                "CI Upper": 6.0
            },
            "Light": {
                "value": 12.0,
                "CI Lower": 10.0,
                "CI Upper": 14.0
            },
            "Common": {
                "value": 16.0,
                "CI Lower": 15.0,
                "CI Upper": 18.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 30.0,
                "CI Lower": 25.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.8781264348027678
    },
    {
        "substance": "2C-I",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 4.0,
                "CI Lower": 2.0,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 12.0,
                "CI Lower": 5.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 12.0,
                "CI Upper": 25.0
            },
            "Heavy": {
                "value": 35.0,
                "CI Lower": 20.0,
                "CI Upper": 40.0
            }
        },
        "reliability_score": 0.7914716995060112
    },
    {
        "substance": "2C-I",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.040000000000001,
                "CI Lower": 5.0,
                "CI Upper": 8.0
            },
            "Light": {
                "value": 15.0,
                "CI Lower": 12.0,
                "CI Upper": 15.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 18.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 22.0
            },
            "Heavy": {
                "value": 30.0,
                "CI Lower": 26.0,
                "CI Upper": 33.0
            }
        },
        "reliability_score": 0.8831746793369375
    },
    {
        "substance": "2C-P",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 2.6,
                "CI Lower": 2.0,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 5.0,
                "CI Lower": 2.0,
                "CI Upper": 9.0
            },
            "Common": {
                "value": 8.0,
                "CI Lower": 5.0,
                "CI Upper": 11.0
            },
            "Strong": {
                "value": 10.0,
                "CI Lower": 5.0,
                "CI Upper": 15.0
            },
            "Heavy": {
                "value": 14.399999999999999,
                "CI Lower": 9.0,
                "CI Upper": 15.0
            }
        },
        "reliability_score": 0.8505595316617636
    },
    {
        "substance": "2C-P",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 3.8000000000000007,
                "CI Lower": 2.0,
                "CI Upper": 6.0
            },
            "Light": {
                "value": 8.0,
                "CI Lower": 6.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 8.0,
                "CI Upper": 10.0
            },
            "Strong": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 15.0
            },
            "Heavy": {
                "value": 16.0,
                "CI Lower": 12.0,
                "CI Upper": 17.0
            }
        },
        "reliability_score": 0.890204137458054
    },
    {
        "substance": "2C-T-2",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 2.25,
                "CI Lower": 2.0,
                "CI Upper": 3.0
            },
            "Light": {
                "value": 5.0,
                "CI Lower": 2.5,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 5.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 10.0,
                "CI Upper": 35.0
            },
            "Heavy": {
                "value": 37.5,
                "CI Lower": 20.0,
                "CI Upper": 40.0
            }
        },
        "reliability_score": 0.7512700811775948
    },
    {
        "substance": "2C-T-2",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 4.0,
                "CI Upper": 6.0
            },
            "Light": {
                "value": 9.0,
                "CI Lower": 7.0,
                "CI Upper": 12.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 15.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 22.5,
                "CI Lower": 20.0,
                "CI Upper": 25.0
            },
            "Heavy": {
                "value": 32.15,
                "CI Lower": 30.0,
                "CI Upper": 40.0
            }
        },
        "reliability_score": 0.8415100167078247
    },
    {
        "substance": "2C-T-21",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 8.0
            },
            "Light": {
                "value": 8.0,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 8.0,
                "CI Upper": 12.0
            },
            "Strong": {
                "value": 11.5,
                "CI Lower": 8.5,
                "CI Upper": 15.0
            },
            "Heavy": {
                "value": 15.099999999999998,
                "CI Lower": 12.0,
                "CI Upper": 16.0
            }
        },
        "reliability_score": 0.9043580518387639
    },
    {
        "substance": "2C-T-4",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 2.2,
                "CI Lower": 1.0,
                "CI Upper": 8.0
            },
            "Light": {
                "value": 8.0,
                "CI Lower": 4.0,
                "CI Upper": 15.0
            },
            "Common": {
                "value": 15.0,
                "CI Lower": 8.0,
                "CI Upper": 18.0
            },
            "Strong": {
                "value": 18.0,
                "CI Lower": 15.0,
                "CI Upper": 30.0
            },
            "Heavy": {
                "value": 30.0,
                "CI Lower": 20.0,
                "CI Upper": 35.0
            }
        },
        "reliability_score": 0.8233732144888994
    },
    {
        "substance": "2C-T-7",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 3.0,
                "CI Lower": 2.0,
                "CI Upper": 4.0
            },
            "Light": {
                "value": 5.125,
                "CI Lower": 4.0,
                "CI Upper": 8.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 7.0,
                "CI Upper": 10.0
            },
            "Strong": {
                "value": 15.0,
                "CI Lower": 10.0,
                "CI Upper": 25.0
            },
            "Heavy": {
                "value": 26.74999999999997,
                "CI Lower": 25.0,
                "CI Upper": 32.0
            }
        },
        "reliability_score": 0.7951054058230809
    },
    {
        "substance": "2C-T-7",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 7.300000000000001,
                "CI Lower": 4.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 15.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 25.0,
                "CI Lower": 22.0,
                "CI Upper": 30.0
            },
            "Strong": {
                "value": 32.0,
                "CI Lower": 30.0,
                "CI Upper": 40.0
            },
            "Heavy": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 60.0
            }
        },
        "reliability_score": 0.8454098627738431
    },
    {
        "substance": "3-FEA",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 8.225000000000001,
                "CI Lower": 3.0,
                "CI Upper": 16.0
            },
            "Light": {
                "value": 15.125,
                "CI Lower": 3.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 12.5,
                "CI Upper": 30.0
            },
            "Strong": {
                "value": 26.25,
                "CI Lower": 16.0,
                "CI Upper": 40.0
            },
            "Heavy": {
                "value": 40.0,
                "CI Lower": 20.0,
                "CI Upper": 40.0
            }
        },
        "reliability_score": 0.8441962664205549
    },
    {
        "substance": "3-Fluoroamphetamine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 17.25,
                "CI Lower": 15.0,
                "CI Upper": 23.0
            },
            "Light": {
                "value": 20.0,
                "CI Lower": 15.0,
                "CI Upper": 30.0
            },
            "Common": {
                "value": 26.5,
                "CI Lower": 20.0,
                "CI Upper": 40.0
            },
            "Strong": {
                "value": 33.75,
                "CI Lower": 20.0,
                "CI Upper": 45.0
            },
            "Heavy": {
                "value": 42.74999999999999,
                "CI Lower": 30.0,
                "CI Upper": 45.0
            }
        },
        "reliability_score": 0.8935592121275264
    },
    {
        "substance": "3-HO-PCE",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 4.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 35.0
            },
            "Heavy": {
                "value": 35.0,
                "CI Lower": 20.0,
                "CI Upper": 35.0
            }
        },
        "reliability_score": 0.843658671956693
    },
    {
        "substance": "3-HO-PCE",
        "method": "rectal",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 15.0
            },
            "Light": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 15.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            }
        },
        "reliability_score": 0.96007681519756
    },
    {
        "substance": "3-HO-PCP",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 3.0,
                "CI Lower": 2.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 11.0
            },
            "Common": {
                "value": 14.0,
                "CI Lower": 10.0,
                "CI Upper": 15.0
            },
            "Strong": {
                "value": 15.75,
                "CI Lower": 15.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 24.750000000000014,
                "CI Lower": 20.0,
                "CI Upper": 25.0
            }
        },
        "reliability_score": 0.8685538452428678
    },
    {
        "substance": "3-HO-PCP",
        "method": "rectal",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 11.0,
                "CI Lower": 8.0,
                "CI Upper": 14.0
            },
            "Common": {
                "value": 15.0,
                "CI Lower": 13.0,
                "CI Upper": 15.0
            },
            "Strong": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 25.0,
                "CI Lower": 20.0,
                "CI Upper": 25.0
            }
        },
        "reliability_score": 0.8964021465933452
    },
    {
        "substance": "3-Me-PCPy",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 8.0,
                "CI Lower": 8.0,
                "CI Upper": 8.0
            },
            "Light": {
                "value": 8.0,
                "CI Lower": 8.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 9.0,
                "CI Lower": 8.0,
                "CI Upper": 10.0
            },
            "Strong": {
                "value": 10.0,
                "CI Lower": 8.0,
                "CI Upper": 10.0
            },
            "Heavy": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 10.0
            }
        },
        "reliability_score": 0.9648635815536846
    },
    {
        "substance": "3-Me-PCPy",
        "method": "rectal",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 20.0,
                "CI Lower": 5.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 5.0,
                "CI Upper": 27.0
            },
            "Strong": {
                "value": 27.0,
                "CI Lower": 20.0,
                "CI Upper": 27.0
            },
            "Heavy": {
                "value": 27.0,
                "CI Lower": 27.0,
                "CI Upper": 27.0
            }
        },
        "reliability_score": 0.8833779751530018
    },
    {
        "substance": "3-MeO-PCE",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 4.25,
                "CI Lower": 2.5,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 5.0,
                "CI Upper": 15.0
            },
            "Common": {
                "value": 15.0,
                "CI Lower": 10.0,
                "CI Upper": 15.0
            },
            "Strong": {
                "value": 15.75,
                "CI Lower": 15.0,
                "CI Upper": 25.0
            },
            "Heavy": {
                "value": 28.75,
                "CI Lower": 16.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.8392657829009673
    },
    {
        "substance": "3-MeO-PCE",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 3.85,
                "CI Lower": 2.5,
                "CI Upper": 7.0
            },
            "Light": {
                "value": 7.0,
                "CI Lower": 4.0,
                "CI Upper": 16.0
            },
            "Common": {
                "value": 16.0,
                "CI Lower": 7.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 18.0,
                "CI Lower": 15.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            }
        },
        "reliability_score": 0.8604620875957589
    },
    {
        "substance": "3-MeO-PCE",
        "method": "rectal",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 8.0,
                "CI Lower": 8.0,
                "CI Upper": 15.0
            },
            "Light": {
                "value": 15.0,
                "CI Lower": 8.0,
                "CI Upper": 15.0
            },
            "Common": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 17.0
            },
            "Strong": {
                "value": 17.0,
                "CI Lower": 15.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 20.0,
                "CI Lower": 17.0,
                "CI Upper": 20.0
            }
        },
        "reliability_score": 0.9295931126364192
    },
    {
        "substance": "3-MeO-PCP",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 6.0,
                "CI Lower": 5.0,
                "CI Upper": 12.0
            },
            "Common": {
                "value": 14.0,
                "CI Lower": 10.0,
                "CI Upper": 15.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 15.0,
                "CI Upper": 25.0
            },
            "Heavy": {
                "value": 25.99999999999998,
                "CI Lower": 21.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.8356692530693834
    },
    {
        "substance": "3-MeO-PCP",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 6.0
            },
            "Light": {
                "value": 6.0,
                "CI Lower": 5.0,
                "CI Upper": 8.0
            },
            "Common": {
                "value": 8.0,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Strong": {
                "value": 10.0,
                "CI Lower": 6.0,
                "CI Upper": 10.0
            },
            "Heavy": {
                "value": 10.0,
                "CI Lower": 8.0,
                "CI Upper": 10.0
            }
        },
        "reliability_score": 0.9211484739831797
    },
    {
        "substance": "3-Methylmethcathinone",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 62.5,
                "CI Lower": 50.0,
                "CI Upper": 150.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 160.0
            },
            "Strong": {
                "value": 157.5,
                "CI Lower": 100.0,
                "CI Upper": 200.0
            },
            "Heavy": {
                "value": 187.0,
                "CI Lower": 150.0,
                "CI Upper": 200.0
            }
        },
        "reliability_score": 0.8612987388559326
    },
    {
        "substance": "3F-Phenmetrazine",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 7.0,
                "CI Lower": 6.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 20.0,
                "CI Lower": 7.0,
                "CI Upper": 30.0
            },
            "Common": {
                "value": 30.0,
                "CI Lower": 20.0,
                "CI Upper": 40.0
            },
            "Strong": {
                "value": 40.0,
                "CI Lower": 35.0,
                "CI Upper": 70.0
            },
            "Heavy": {
                "value": 75.0,
                "CI Lower": 50.0,
                "CI Upper": 80.0
            }
        },
        "reliability_score": 0.8228678739450741
    },
    {
        "substance": "3F-Phenmetrazine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 20.0,
                "CI Lower": 5.0,
                "CI Upper": 30.0
            },
            "Light": {
                "value": 29.0,
                "CI Lower": 20.0,
                "CI Upper": 48.0
            },
            "Common": {
                "value": 47.0,
                "CI Lower": 29.0,
                "CI Upper": 60.0
            },
            "Strong": {
                "value": 60.0,
                "CI Lower": 40.0,
                "CI Upper": 106.0
            },
            "Heavy": {
                "value": 106.0,
                "CI Lower": 50.0,
                "CI Upper": 125.0
            }
        },
        "reliability_score": 0.8231913532152495
    },
    {
        "substance": "4-AcO-DET",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 4.0,
                "CI Upper": 8.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 7.5,
                "CI Upper": 15.0
            },
            "Common": {
                "value": 16.0,
                "CI Lower": 14.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 18.0,
                "CI Upper": 25.0
            },
            "Heavy": {
                "value": 30.0,
                "CI Lower": 25.0,
                "CI Upper": 35.0
            }
        },
        "reliability_score": 0.8657367819842692
    },
    {
        "substance": "4-AcO-DMT",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 3.95,
                "CI Lower": 3.0,
                "CI Upper": 7.0
            },
            "Light": {
                "value": 8.5,
                "CI Lower": 4.0,
                "CI Upper": 17.0
            },
            "Common": {
                "value": 16.0,
                "CI Lower": 7.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 13.0,
                "CI Upper": 30.0
            },
            "Heavy": {
                "value": 30.0,
                "CI Lower": 20.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.8358178306471471
    },
    {
        "substance": "4-AcO-DMT",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 6.0,
                "CI Lower": 5.0,
                "CI Upper": 8.0
            },
            "Light": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 16.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 25.0,
                "CI Lower": 25.0,
                "CI Upper": 30.0
            },
            "Heavy": {
                "value": 40.0,
                "CI Lower": 30.0,
                "CI Upper": 40.0
            }
        },
        "reliability_score": 0.8717039899409951
    },
    {
        "substance": "4-AcO-DiPT",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 4.0,
                "CI Upper": 12.0
            },
            "Light": {
                "value": 16.5,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 25.0
            },
            "Strong": {
                "value": 30.0,
                "CI Lower": 25.0,
                "CI Upper": 35.0
            },
            "Heavy": {
                "value": 40.0,
                "CI Lower": 35.0,
                "CI Upper": 45.0
            }
        },
        "reliability_score": 0.8746098817450398
    },
    {
        "substance": "4-AcO-MET",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 5.0,
                "CI Upper": 12.0
            },
            "Light": {
                "value": 13.5,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 16.0,
                "CI Upper": 30.0
            },
            "Strong": {
                "value": 30.0,
                "CI Lower": 25.0,
                "CI Upper": 40.0
            },
            "Heavy": {
                "value": 40.0,
                "CI Lower": 40.0,
                "CI Upper": 40.0
            }
        },
        "reliability_score": 0.8624503808957185
    },
    {
        "substance": "4-AcO-MiPT",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 6.175,
                "CI Lower": 2.0,
                "CI Upper": 7.0
            },
            "Light": {
                "value": 8.5,
                "CI Lower": 6.25,
                "CI Upper": 15.0
            },
            "Common": {
                "value": 16.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 18.0,
                "CI Upper": 25.0
            },
            "Heavy": {
                "value": 30.0,
                "CI Lower": 22.0,
                "CI Upper": 35.0
            }
        },
        "reliability_score": 0.8435259239906909
    },
    {
        "substance": "4-Fluoroamphetamine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 40.0,
                "CI Lower": 20.0,
                "CI Upper": 50.0
            },
            "Light": {
                "value": 75.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 90.0,
                "CI Upper": 120.0
            },
            "Strong": {
                "value": 125.0,
                "CI Lower": 110.0,
                "CI Upper": 150.0
            },
            "Heavy": {
                "value": 200.0,
                "CI Lower": 150.0,
                "CI Upper": 200.0
            }
        },
        "reliability_score": 0.8714294856416063
    },
    {
        "substance": "4-Fluoromethylphenidate",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 7.225,
                "CI Lower": 6.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 7.5,
                "CI Upper": 15.0
            },
            "Common": {
                "value": 15.0,
                "CI Lower": 10.0,
                "CI Upper": 15.0
            },
            "Strong": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 15.0
            },
            "Heavy": {
                "value": 17.749999999999986,
                "CI Lower": 15.0,
                "CI Upper": 100.0
            }
        },
        "reliability_score": 0.7
    },
    {
        "substance": "4-Fluoromethylphenidate",
        "method": "rectal",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 8.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 10.0
            },
            "Strong": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 14.0
            },
            "Heavy": {
                "value": 14.0,
                "CI Lower": 13.0,
                "CI Upper": 14.0
            }
        },
        "reliability_score": 0.9547798896083999
    },
    {
        "substance": "4-HO-DET",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 14.25,
                "CI Lower": 10.0,
                "CI Upper": 25.0
            },
            "Light": {
                "value": 25.0,
                "CI Lower": 15.0,
                "CI Upper": 25.0
            },
            "Common": {
                "value": 25.0,
                "CI Lower": 25.0,
                "CI Upper": 30.0
            },
            "Strong": {
                "value": 30.0,
                "CI Lower": 25.0,
                "CI Upper": 38.0
            },
            "Heavy": {
                "value": 38.3,
                "CI Lower": 30.0,
                "CI Upper": 40.0
            }
        },
        "reliability_score": 0.918294417532513
    },
    {
        "substance": "4-HO-DiPT",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 6.75,
                "CI Lower": 3.5,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 9.0,
                "CI Upper": 18.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 15.0,
                "CI Upper": 25.0
            },
            "Strong": {
                "value": 25.0,
                "CI Lower": 22.0,
                "CI Upper": 30.0
            },
            "Heavy": {
                "value": 32.99999999999997,
                "CI Lower": 27.0,
                "CI Upper": 42.0
            }
        },
        "reliability_score": 0.8628220134465936
    },
    {
        "substance": "4-HO-EPT",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 21.25,
                "CI Lower": 10.0,
                "CI Upper": 30.0
            },
            "Light": {
                "value": 29.25,
                "CI Lower": 10.0,
                "CI Upper": 45.0
            },
            "Common": {
                "value": 45.0,
                "CI Lower": 27.0,
                "CI Upper": 55.0
            },
            "Strong": {
                "value": 47.5,
                "CI Lower": 42.0,
                "CI Upper": 75.0
            },
            "Heavy": {
                "value": 81.25,
                "CI Lower": 45.0,
                "CI Upper": 100.0
            }
        },
        "reliability_score": 0.8554443414856872
    },
    {
        "substance": "4-HO-MET",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 7.0,
                "CI Lower": 3.0,
                "CI Upper": 8.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 8.0,
                "CI Upper": 15.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 15.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 27.25,
                "CI Lower": 20.0,
                "CI Upper": 30.0
            },
            "Heavy": {
                "value": 40.0,
                "CI Lower": 30.0,
                "CI Upper": 60.0
            }
        },
        "reliability_score": 0.8301117777013409
    },
    {
        "substance": "4-HO-MiPT",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 3.6,
                "CI Lower": 3.0,
                "CI Upper": 6.0
            },
            "Light": {
                "value": 6.0,
                "CI Lower": 3.0,
                "CI Upper": 12.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 6.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 15.0,
                "CI Lower": 6.0,
                "CI Upper": 25.0
            },
            "Heavy": {
                "value": 21.999999999999993,
                "CI Lower": 12.0,
                "CI Upper": 25.0
            }
        },
        "reliability_score": 0.818852120025422
    },
    {
        "substance": "4-HO-MiPT",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 9.400000000000002,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 15.0,
                "CI Lower": 12.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 23.0
            },
            "Strong": {
                "value": 26.0,
                "CI Lower": 23.0,
                "CI Upper": 30.0
            },
            "Heavy": {
                "value": 40.0,
                "CI Lower": 30.0,
                "CI Upper": 40.0
            }
        },
        "reliability_score": 0.8746118177598587
    },
    {
        "substance": "4-MeO-MiPT",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 4.65,
                "CI Lower": 4.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 9.25,
                "CI Lower": 4.0,
                "CI Upper": 25.0
            },
            "Common": {
                "value": 19.0,
                "CI Lower": 7.0,
                "CI Upper": 25.0
            },
            "Strong": {
                "value": 25.0,
                "CI Lower": 10.0,
                "CI Upper": 50.0
            },
            "Heavy": {
                "value": 43.5,
                "CI Lower": 25.0,
                "CI Upper": 50.0
            }
        },
        "reliability_score": 0.7899409250008986
    },
    {
        "substance": "4-Methylethcathinone",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 3.2,
                "CI Lower": 2.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 4.0,
                "CI Upper": 50.0
            },
            "Common": {
                "value": 50.0,
                "CI Lower": 10.0,
                "CI Upper": 50.0
            },
            "Strong": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 70.0
            },
            "Heavy": {
                "value": 93.99999999999991,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            }
        },
        "reliability_score": 0.7998440635166488
    },
    {
        "substance": "4-Methylmethcathinone",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 15.0,
                "CI Lower": 6.0,
                "CI Upper": 30.0
            },
            "Light": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 75.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 75.0,
                "CI Upper": 100.0
            },
            "Strong": {
                "value": 125.0,
                "CI Lower": 100.0,
                "CI Upper": 131.0
            },
            "Heavy": {
                "value": 200.0,
                "CI Lower": 150.0,
                "CI Upper": 250.0
            }
        },
        "reliability_score": 0.8326706471141962
    },
    {
        "substance": "4-Methylmethcathinone",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 50.0,
                "CI Lower": 25.0,
                "CI Upper": 60.0
            },
            "Light": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 125.0
            },
            "Common": {
                "value": 160.0,
                "CI Lower": 100.0,
                "CI Upper": 200.0
            },
            "Strong": {
                "value": 250.0,
                "CI Lower": 200.0,
                "CI Upper": 250.0
            },
            "Heavy": {
                "value": 300.0,
                "CI Lower": 250.0,
                "CI Upper": 500.0
            }
        },
        "reliability_score": 0.8366392874319861
    },
    {
        "substance": "4-PrO-DMT",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 11.0,
                "CI Lower": 11.0,
                "CI Upper": 11.0
            },
            "Light": {
                "value": 11.0,
                "CI Lower": 11.0,
                "CI Upper": 12.0
            },
            "Common": {
                "value": 12.0,
                "CI Lower": 11.0,
                "CI Upper": 13.0
            },
            "Strong": {
                "value": 13.0,
                "CI Lower": 12.0,
                "CI Upper": 13.0
            },
            "Heavy": {
                "value": 13.0,
                "CI Lower": 13.0,
                "CI Upper": 13.0
            }
        },
        "reliability_score": 0.9788711436317872
    },
    {
        "substance": "5-APB",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 45.0,
                "CI Lower": 40.0,
                "CI Upper": 85.0
            },
            "Light": {
                "value": 65.0,
                "CI Lower": 40.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 85.0,
                "CI Lower": 50.0,
                "CI Upper": 140.0
            },
            "Strong": {
                "value": 110.0,
                "CI Lower": 85.0,
                "CI Upper": 140.0
            },
            "Heavy": {
                "value": 140.0,
                "CI Lower": 100.0,
                "CI Upper": 140.0
            }
        },
        "reliability_score": 0.8867156968802237
    },
    {
        "substance": "5-MAPB",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 28.25,
                "CI Lower": 20.0,
                "CI Upper": 35.0
            },
            "Light": {
                "value": 40.0,
                "CI Lower": 30.0,
                "CI Upper": 50.0
            },
            "Common": {
                "value": 60.0,
                "CI Lower": 40.0,
                "CI Upper": 80.0
            },
            "Strong": {
                "value": 83.75,
                "CI Lower": 60.0,
                "CI Upper": 110.0
            },
            "Heavy": {
                "value": 120.0,
                "CI Lower": 100.0,
                "CI Upper": 125.0
            }
        },
        "reliability_score": 0.8573271727022673
    },
    {
        "substance": "5-MeO-AMT",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 2.4250000000000003,
                "CI Lower": 1.0,
                "CI Upper": 3.0
            },
            "Light": {
                "value": 3.0,
                "CI Lower": 2.5,
                "CI Upper": 6.0
            },
            "Common": {
                "value": 5.5,
                "CI Lower": 3.0,
                "CI Upper": 15.0
            },
            "Strong": {
                "value": 16.25,
                "CI Lower": 5.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 20.500000000000007,
                "CI Lower": 12.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.7495761832907946
    },
    {
        "substance": "5-MeO-AMT",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 2.1750000000000003,
                "CI Lower": 1.0,
                "CI Upper": 3.0
            },
            "Light": {
                "value": 5.0,
                "CI Lower": 3.5,
                "CI Upper": 5.0
            },
            "Common": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 6.25
            },
            "Strong": {
                "value": 10.0,
                "CI Lower": 6.25,
                "CI Upper": 12.0
            },
            "Heavy": {
                "value": 15.0,
                "CI Lower": 13.0,
                "CI Upper": 17.5
            }
        },
        "reliability_score": 0.8252302711703456
    },
    {
        "substance": "5-MeO-DALT",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 8.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 20.25,
                "CI Lower": 15.0,
                "CI Upper": 30.0
            },
            "Common": {
                "value": 30.0,
                "CI Lower": 25.0,
                "CI Upper": 40.0
            },
            "Strong": {
                "value": 50.0,
                "CI Lower": 30.0,
                "CI Upper": 64.0
            },
            "Heavy": {
                "value": 80.0,
                "CI Lower": 60.0,
                "CI Upper": 85.0
            }
        },
        "reliability_score": 0.8305840126333994
    },
    {
        "substance": "5-MeO-DMT",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 4.0,
                "CI Upper": 8.0
            },
            "Light": {
                "value": 9.25,
                "CI Lower": 7.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 11.0,
                "CI Lower": 10.0,
                "CI Upper": 15.0
            },
            "Strong": {
                "value": 17.5,
                "CI Lower": 14.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 25.0,
                "CI Lower": 20.0,
                "CI Upper": 27.5
            }
        },
        "reliability_score": 0.8608106283809243
    },
    {
        "substance": "5-MeO-DMT",
        "method": "smoked",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 4.300000000000001,
                "CI Lower": 2.0,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 8.0,
                "CI Lower": 6.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 13.0
            },
            "Strong": {
                "value": 17.0,
                "CI Lower": 15.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 25.0,
                "CI Lower": 20.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.8396272524897745
    },
    {
        "substance": "5-MeO-DiPT",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 3.0
            },
            "Light": {
                "value": 3.0,
                "CI Lower": 1.0,
                "CI Upper": 6.0
            },
            "Common": {
                "value": 7.0,
                "CI Lower": 3.0,
                "CI Upper": 10.0
            },
            "Strong": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 13.0
            },
            "Heavy": {
                "value": 18.200000000000003,
                "CI Lower": 12.0,
                "CI Upper": 20.0
            }
        },
        "reliability_score": 0.7954960355733964
    },
    {
        "substance": "5-MeO-DiPT",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 3.0,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 8.75,
                "CI Lower": 7.5,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 11.0,
                "CI Lower": 10.0,
                "CI Upper": 12.0
            },
            "Strong": {
                "value": 15.0,
                "CI Lower": 14.0,
                "CI Upper": 17.0
            },
            "Heavy": {
                "value": 25.0,
                "CI Lower": 20.0,
                "CI Upper": 25.0
            }
        },
        "reliability_score": 0.8630421424512147
    },
    {
        "substance": "5-MeO-MET",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 16.0,
                "CI Lower": 16.0,
                "CI Upper": 16.0
            },
            "Light": {
                "value": 16.0,
                "CI Lower": 16.0,
                "CI Upper": 49.0
            },
            "Common": {
                "value": 25.0,
                "CI Lower": 16.0,
                "CI Upper": 49.0
            },
            "Strong": {
                "value": 49.0,
                "CI Lower": 16.0,
                "CI Upper": 49.0
            },
            "Heavy": {
                "value": 49.0,
                "CI Lower": 49.0,
                "CI Upper": 49.0
            }
        },
        "reliability_score": 0.842974329409202
    },
    {
        "substance": "5-MeO-MIPT",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 2.0,
                "CI Lower": 2.0,
                "CI Upper": 3.0
            },
            "Light": {
                "value": 5.0,
                "CI Lower": 3.0,
                "CI Upper": 6.0
            },
            "Common": {
                "value": 7.1,
                "CI Lower": 6.0,
                "CI Upper": 10.0
            },
            "Strong": {
                "value": 10.0,
                "CI Lower": 9.0,
                "CI Upper": 14.0
            },
            "Heavy": {
                "value": 19.69999999999999,
                "CI Lower": 14.0,
                "CI Upper": 20.0
            }
        },
        "reliability_score": 0.822815296643725
    },
    {
        "substance": "6-APB",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 17.8,
                "CI Lower": 9.0,
                "CI Upper": 25.0
            },
            "Light": {
                "value": 25.0,
                "CI Lower": 20.0,
                "CI Upper": 60.0
            },
            "Common": {
                "value": 57.0,
                "CI Lower": 25.0,
                "CI Upper": 100.0
            },
            "Strong": {
                "value": 78.0,
                "CI Lower": 54.0,
                "CI Upper": 139.0
            },
            "Heavy": {
                "value": 139.6,
                "CI Lower": 78.0,
                "CI Upper": 142.0
            }
        },
        "reliability_score": 0.8069617573783268
    },
    {
        "substance": "6-APB",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 30.0,
                "CI Lower": 20.0,
                "CI Upper": 50.0
            },
            "Light": {
                "value": 70.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 90.0,
                "CI Upper": 110.0
            },
            "Strong": {
                "value": 133.75,
                "CI Lower": 100.0,
                "CI Upper": 150.0
            },
            "Heavy": {
                "value": 200.0,
                "CI Lower": 150.0,
                "CI Upper": 200.0
            }
        },
        "reliability_score": 0.8590264576643714
    },
    {
        "substance": "AL-LAD",
        "method": "oral",
        "unit": "\u00b5g",
        "tiers": {
            "Threshold": {
                "value": 61.50000000000001,
                "CI Lower": 30.0,
                "CI Upper": 75.0
            },
            "Light": {
                "value": 150.0,
                "CI Lower": 75.0,
                "CI Upper": 150.0
            },
            "Common": {
                "value": 150.0,
                "CI Lower": 150.0,
                "CI Upper": 300.0
            },
            "Strong": {
                "value": 300.0,
                "CI Lower": 150.0,
                "CI Upper": 300.0
            },
            "Heavy": {
                "value": 379.9999999999997,
                "CI Lower": 300.0,
                "CI Upper": 450.0
            }
        },
        "reliability_score": 0.8265798517338021
    },
    {
        "substance": "AL-LAD",
        "method": "sublingual",
        "unit": "\u00b5g",
        "tiers": {
            "Threshold": {
                "value": 23.9,
                "CI Lower": 14.0,
                "CI Upper": 75.0
            },
            "Light": {
                "value": 75.0,
                "CI Lower": 25.0,
                "CI Upper": 150.0
            },
            "Common": {
                "value": 150.0,
                "CI Lower": 75.0,
                "CI Upper": 300.0
            },
            "Strong": {
                "value": 250.0,
                "CI Lower": 150.0,
                "CI Upper": 450.0
            },
            "Heavy": {
                "value": 450.0,
                "CI Lower": 300.0,
                "CI Upper": 450.0
            }
        },
        "reliability_score": 0.7719724968584647
    },
    {
        "substance": "ALD-52",
        "method": "oral",
        "unit": "\u00b5g",
        "tiers": {
            "Threshold": {
                "value": 90.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 100.0,
                "CI Lower": 100.0,
                "CI Upper": 150.0
            },
            "Common": {
                "value": 140.0,
                "CI Lower": 100.0,
                "CI Upper": 250.0
            },
            "Strong": {
                "value": 200.0,
                "CI Lower": 125.0,
                "CI Upper": 250.0
            },
            "Heavy": {
                "value": 259.99999999999994,
                "CI Lower": 200.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.8700961894323342
    },
    {
        "substance": "ALD-52",
        "method": "sublingual",
        "unit": "\u00b5g",
        "tiers": {
            "Threshold": {
                "value": 75.0,
                "CI Lower": 50.0,
                "CI Upper": 150.0
            },
            "Light": {
                "value": 112.5,
                "CI Lower": 50.0,
                "CI Upper": 187.0
            },
            "Common": {
                "value": 150.0,
                "CI Lower": 100.0,
                "CI Upper": 300.0
            },
            "Strong": {
                "value": 230.0,
                "CI Lower": 150.0,
                "CI Upper": 300.0
            },
            "Heavy": {
                "value": 300.0,
                "CI Lower": 187.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.8564840145507107
    },
    {
        "substance": "AMT",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 6.25,
                "CI Lower": 5.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 15.5,
                "CI Lower": 5.0,
                "CI Upper": 25.0
            },
            "Strong": {
                "value": 23.75,
                "CI Lower": 13.0,
                "CI Upper": 60.0
            },
            "Heavy": {
                "value": 53.5,
                "CI Lower": 20.0,
                "CI Upper": 60.0
            }
        },
        "reliability_score": 0.7447831135855887
    },
    {
        "substance": "AMT",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 12.625,
                "CI Lower": 10.0,
                "CI Upper": 17.5
            },
            "Light": {
                "value": 25.0,
                "CI Lower": 25.0,
                "CI Upper": 30.0
            },
            "Common": {
                "value": 40.0,
                "CI Lower": 30.0,
                "CI Upper": 40.0
            },
            "Strong": {
                "value": 50.0,
                "CI Lower": 45.0,
                "CI Upper": 50.0
            },
            "Heavy": {
                "value": 60.0,
                "CI Lower": 60.0,
                "CI Upper": 80.0
            }
        },
        "reliability_score": 0.8748092817388071
    },
    {
        "substance": "AMT",
        "method": "smoked",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 8.0
            },
            "Light": {
                "value": 5.75,
                "CI Lower": 5.0,
                "CI Upper": 15.0
            },
            "Common": {
                "value": 11.25,
                "CI Lower": 5.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 18.75,
                "CI Lower": 10.0,
                "CI Upper": 30.0
            },
            "Heavy": {
                "value": 30.0,
                "CI Lower": 15.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.7988420267181966
    },
    {
        "substance": "Absinthe",
        "method": "oral",
        "unit": "ml",
        "tiers": {
            "Threshold": {
                "value": 25.0,
                "CI Lower": 25.0,
                "CI Upper": 25.0
            },
            "Light": {
                "value": 25.0,
                "CI Lower": 25.0,
                "CI Upper": 30.0
            },
            "Common": {
                "value": 30.0,
                "CI Lower": 25.0,
                "CI Upper": 50.0
            },
            "Strong": {
                "value": 50.0,
                "CI Lower": 30.0,
                "CI Upper": 110.0
            },
            "Heavy": {
                "value": 113.99999999999991,
                "CI Lower": 50.0,
                "CI Upper": 150.0
            }
        },
        "reliability_score": 0.7885336215292753
    },
    {
        "substance": "Acacia confusa",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 1.25,
                "CI Lower": 1.0,
                "CI Upper": 4.0
            },
            "Light": {
                "value": 4.5,
                "CI Lower": 1.25,
                "CI Upper": 7.0
            },
            "Common": {
                "value": 7.0,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Strong": {
                "value": 10.0,
                "CI Lower": 7.0,
                "CI Upper": 13.5
            },
            "Heavy": {
                "value": 13.85,
                "CI Lower": 10.0,
                "CI Upper": 15.0
            }
        },
        "reliability_score": 0.825138249443641
    },
    {
        "substance": "Acetaminophen",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 156.0,
                "CI Lower": 150.0,
                "CI Upper": 650.0
            },
            "Light": {
                "value": 300.0,
                "CI Lower": 150.0,
                "CI Upper": 812.5
            },
            "Common": {
                "value": 650.0,
                "CI Lower": 162.0,
                "CI Upper": 1950.0
            },
            "Strong": {
                "value": 1300.0,
                "CI Lower": 650.0,
                "CI Upper": 2450.0
            },
            "Heavy": {
                "value": 2200.0,
                "CI Lower": 812.5,
                "CI Upper": 2450.0
            }
        },
        "reliability_score": 0.7496529361471542
    },
    {
        "substance": "Acetaminophen",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.625
            },
            "Common": {
                "value": 1.9,
                "CI Lower": 1.0,
                "CI Upper": 2.5
            },
            "Strong": {
                "value": 2.6,
                "CI Lower": 2.0,
                "CI Upper": 3.3
            },
            "Heavy": {
                "value": 3.945,
                "CI Lower": 2.7,
                "CI Upper": 4.5
            }
        },
        "reliability_score": 0.8481940303698099
    },
    {
        "substance": "Acetaminophen",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 250.0,
                "CI Lower": 162.5,
                "CI Upper": 325.0
            },
            "Light": {
                "value": 500.0,
                "CI Lower": 325.0,
                "CI Upper": 500.0
            },
            "Common": {
                "value": 650.0,
                "CI Lower": 650.0,
                "CI Upper": 975.0
            },
            "Strong": {
                "value": 1300.0,
                "CI Lower": 1000.0,
                "CI Upper": 1500.0
            },
            "Heavy": {
                "value": 2150.0,
                "CI Lower": 1940.0,
                "CI Upper": 2600.0
            }
        },
        "reliability_score": 0.8008357079798192
    },
    {
        "substance": "Adrafinil",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 295.75,
                "CI Lower": 200.0,
                "CI Upper": 300.0
            },
            "Light": {
                "value": 300.0,
                "CI Lower": 295.0,
                "CI Upper": 300.0
            },
            "Common": {
                "value": 300.0,
                "CI Lower": 300.0,
                "CI Upper": 300.0
            },
            "Strong": {
                "value": 300.0,
                "CI Lower": 300.0,
                "CI Upper": 400.0
            },
            "Heavy": {
                "value": 400.0,
                "CI Lower": 300.0,
                "CI Upper": 450.0
            }
        },
        "reliability_score": 0.9545876370715083
    },
    {
        "substance": "Alcohol - Beer/Wine",
        "method": "oral",
        "unit": "ml",
        "tiers": {
            "Threshold": {
                "value": 10.8,
                "CI Lower": 0.5,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 300.0,
                "CI Lower": 100.0,
                "CI Upper": 375.0
            },
            "Common": {
                "value": 500.0,
                "CI Lower": 350.0,
                "CI Upper": 700.0
            },
            "Strong": {
                "value": 750.0,
                "CI Lower": 600.0,
                "CI Upper": 750.0
            },
            "Heavy": {
                "value": 1436.9999999999998,
                "CI Lower": 750.0,
                "CI Upper": 1500.0
            }
        },
        "reliability_score": 0.7912624469452569
    },
    {
        "substance": "Alcohol - Hard",
        "method": "oral",
        "unit": "ml",
        "tiers": {
            "Threshold": {
                "value": 30.0,
                "CI Lower": 2.4,
                "CI Upper": 60.0
            },
            "Light": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 175.0
            },
            "Common": {
                "value": 250.0,
                "CI Lower": 125.0,
                "CI Upper": 350.0
            },
            "Strong": {
                "value": 500.0,
                "CI Lower": 350.0,
                "CI Upper": 750.0
            },
            "Heavy": {
                "value": 750.0,
                "CI Lower": 700.0,
                "CI Upper": 1000.0
            }
        },
        "reliability_score": 0.7500417592199045
    },
    {
        "substance": "Allylescaline",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 2.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 5.0,
                "CI Upper": 15.0
            },
            "Common": {
                "value": 15.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 15.0,
                "CI Upper": 27.0
            },
            "Heavy": {
                "value": 27.0,
                "CI Lower": 20.0,
                "CI Upper": 32.0
            }
        },
        "reliability_score": 0.8439326842437935
    },
    {
        "substance": "Alprazolam",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 0.26250000000000007,
                "CI Lower": 0.25,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 1.5
            },
            "Common": {
                "value": 1.75,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Strong": {
                "value": 2.0,
                "CI Lower": 2.0,
                "CI Upper": 3.0
            },
            "Heavy": {
                "value": 3.0,
                "CI Lower": 2.5,
                "CI Upper": 6.0
            }
        },
        "reliability_score": 0.8096362017483489
    },
    {
        "substance": "Alprazolam",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 0.25,
                "CI Lower": 0.25,
                "CI Upper": 0.5
            },
            "Light": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 1.0
            },
            "Common": {
                "value": 1.625,
                "CI Lower": 1.25,
                "CI Upper": 2.0
            },
            "Strong": {
                "value": 2.0,
                "CI Lower": 2.0,
                "CI Upper": 2.5
            },
            "Heavy": {
                "value": 5.0,
                "CI Lower": 4.0,
                "CI Upper": 6.0
            }
        },
        "reliability_score": 0.7738706303218643
    },
    {
        "substance": "Amanitas",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 0.875,
                "CI Lower": 0.5,
                "CI Upper": 3.5
            },
            "Light": {
                "value": 4.75,
                "CI Lower": 2.75,
                "CI Upper": 8.0
            },
            "Common": {
                "value": 8.75,
                "CI Lower": 5.0,
                "CI Upper": 12.5
            },
            "Strong": {
                "value": 14.25,
                "CI Lower": 9.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 21.25,
                "CI Lower": 15.0,
                "CI Upper": 28.0
            }
        },
        "reliability_score": 0.7973066286737129
    },
    {
        "substance": "Amanitas - A. muscaria",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 1.1,
                "CI Lower": 0.5,
                "CI Upper": 3.0
            },
            "Light": {
                "value": 5.0,
                "CI Lower": 4.0,
                "CI Upper": 5.5
            },
            "Common": {
                "value": 8.0,
                "CI Lower": 7.0,
                "CI Upper": 10.0
            },
            "Strong": {
                "value": 12.0,
                "CI Lower": 10.0,
                "CI Upper": 14.0
            },
            "Heavy": {
                "value": 20.099999999999994,
                "CI Lower": 15.0,
                "CI Upper": 25.0
            }
        },
        "reliability_score": 0.8115585270274877
    },
    {
        "substance": "Amanitas - A. pantherina",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 1.8800000000000001,
                "CI Lower": 1.6,
                "CI Upper": 3.0
            },
            "Light": {
                "value": 2.6,
                "CI Lower": 1.6,
                "CI Upper": 4.0
            },
            "Common": {
                "value": 4.0,
                "CI Lower": 2.16,
                "CI Upper": 8.0
            },
            "Strong": {
                "value": 6.5,
                "CI Lower": 3.0,
                "CI Upper": 8.0
            },
            "Heavy": {
                "value": 8.0,
                "CI Lower": 4.0,
                "CI Upper": 8.0
            }
        },
        "reliability_score": 0.8333261247233661
    },
    {
        "substance": "Amitriptyline",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 7.5,
                "CI Upper": 25.0
            },
            "Light": {
                "value": 25.0,
                "CI Lower": 25.0,
                "CI Upper": 30.0
            },
            "Common": {
                "value": 50.0,
                "CI Lower": 30.0,
                "CI Upper": 75.0
            },
            "Strong": {
                "value": 100.0,
                "CI Lower": 75.0,
                "CI Upper": 100.0
            },
            "Heavy": {
                "value": 100.0,
                "CI Lower": 100.0,
                "CI Upper": 150.0
            }
        },
        "reliability_score": 0.8099020167222195
    },
    {
        "substance": "Amphetamine",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 15.0
            },
            "Light": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 15.0
            },
            "Common": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 15.0
            },
            "Strong": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 15.0
            },
            "Heavy": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 15.0
            }
        },
        "reliability_score": 1.0
    },
    {
        "substance": "Amphetamine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 5.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            }
        },
        "reliability_score": 0.8709005551264195
    },
    {
        "substance": "Amphetamine",
        "method": "rectal",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 6.0,
                "CI Lower": 5.0,
                "CI Upper": 7.0
            },
            "Common": {
                "value": 7.0,
                "CI Lower": 7.0,
                "CI Upper": 8.0
            },
            "Strong": {
                "value": 10.0,
                "CI Lower": 7.0,
                "CI Upper": 13.0
            },
            "Heavy": {
                "value": 15.0,
                "CI Lower": 13.0,
                "CI Upper": 15.0
            }
        },
        "reliability_score": 0.8833343525539243
    },
    {
        "substance": "Amphetamines",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 3.0,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 15.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 30.0,
                "CI Lower": 25.0,
                "CI Upper": 37.0
            },
            "Heavy": {
                "value": 45.0,
                "CI Lower": 40.0,
                "CI Upper": 60.0
            }
        },
        "reliability_score": 0.8154096470302776
    },
    {
        "substance": "Amphetamines",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 15.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 30.0
            },
            "Strong": {
                "value": 30.0,
                "CI Lower": 30.0,
                "CI Upper": 40.0
            },
            "Heavy": {
                "value": 60.0,
                "CI Lower": 60.0,
                "CI Upper": 60.0
            }
        },
        "reliability_score": 0.8202806402624421
    },
    {
        "substance": "Aniracetam",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 385.0,
                "CI Lower": 350.0,
                "CI Upper": 700.0
            },
            "Light": {
                "value": 700.0,
                "CI Lower": 350.0,
                "CI Upper": 750.0
            },
            "Common": {
                "value": 750.0,
                "CI Lower": 700.0,
                "CI Upper": 1500.0
            },
            "Strong": {
                "value": 1380.0,
                "CI Lower": 750.0,
                "CI Upper": 1500.0
            },
            "Heavy": {
                "value": 1500.0,
                "CI Lower": 1260.0,
                "CI Upper": 1500.0
            }
        },
        "reliability_score": 0.8631317683051338
    },
    {
        "substance": "Aripiprazole",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 2.5,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 5.0,
                "CI Upper": 15.0
            },
            "Strong": {
                "value": 15.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 25.0
            }
        },
        "reliability_score": 0.8403896021537167
    },
    {
        "substance": "Armodafinil",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 75.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 100.0,
                "CI Lower": 75.0,
                "CI Upper": 150.0
            },
            "Common": {
                "value": 150.0,
                "CI Lower": 100.0,
                "CI Upper": 200.0
            },
            "Strong": {
                "value": 175.0,
                "CI Lower": 150.0,
                "CI Upper": 250.0
            },
            "Heavy": {
                "value": 250.0,
                "CI Lower": 150.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.8627641809378104
    },
    {
        "substance": "Articaine",
        "method": "sublingual",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 36.0,
                "CI Lower": 36.0,
                "CI Upper": 36.0
            },
            "Light": {
                "value": 36.0,
                "CI Lower": 36.0,
                "CI Upper": 36.0
            },
            "Common": {
                "value": 36.0,
                "CI Lower": 36.0,
                "CI Upper": 36.0
            },
            "Strong": {
                "value": 36.0,
                "CI Lower": 36.0,
                "CI Upper": 36.0
            },
            "Heavy": {
                "value": 36.0,
                "CI Lower": 36.0,
                "CI Upper": 36.0
            }
        },
        "reliability_score": 1.0
    },
    {
        "substance": "Atomoxetine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 16.35,
                "CI Lower": 10.0,
                "CI Upper": 40.0
            },
            "Light": {
                "value": 40.0,
                "CI Lower": 18.0,
                "CI Upper": 40.0
            },
            "Common": {
                "value": 40.0,
                "CI Lower": 40.0,
                "CI Upper": 60.0
            },
            "Strong": {
                "value": 60.0,
                "CI Lower": 40.0,
                "CI Upper": 100.0
            },
            "Heavy": {
                "value": 110.99999999999994,
                "CI Lower": 80.0,
                "CI Upper": 120.0
            }
        },
        "reliability_score": 0.8279493535595541
    },
    {
        "substance": "Ayahuasca",
        "method": "oral",
        "unit": "ml",
        "tiers": {
            "Threshold": {
                "value": 40.0,
                "CI Lower": 33.0,
                "CI Upper": 50.0
            },
            "Light": {
                "value": 50.0,
                "CI Lower": 40.0,
                "CI Upper": 80.0
            },
            "Common": {
                "value": 80.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Strong": {
                "value": 100.0,
                "CI Lower": 100.0,
                "CI Upper": 125.0
            },
            "Heavy": {
                "value": 150.0,
                "CI Lower": 100.0,
                "CI Upper": 200.0
            }
        },
        "reliability_score": 0.8549396414333323
    },
    {
        "substance": "BK-2C-B",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 25.0,
                "CI Lower": 20.0,
                "CI Upper": 50.0
            },
            "Light": {
                "value": 55.0,
                "CI Lower": 25.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 55.0,
                "CI Upper": 140.0
            },
            "Strong": {
                "value": 147.5,
                "CI Lower": 100.0,
                "CI Upper": 250.0
            },
            "Heavy": {
                "value": 277.4999999999999,
                "CI Lower": 150.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.8022536023112592
    },
    {
        "substance": "BOD",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 7.8,
                "CI Lower": 6.0,
                "CI Upper": 19.4
            },
            "Light": {
                "value": 15.0,
                "CI Lower": 6.0,
                "CI Upper": 25.0
            },
            "Common": {
                "value": 20.95,
                "CI Lower": 10.0,
                "CI Upper": 30.0
            },
            "Strong": {
                "value": 28.75,
                "CI Lower": 15.0,
                "CI Upper": 31.0
            },
            "Heavy": {
                "value": 30.549999999999997,
                "CI Lower": 22.5,
                "CI Upper": 31.0
            }
        },
        "reliability_score": 0.8705127853419481
    },
    {
        "substance": "Baclofen",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 20.0,
                "CI Lower": 10.0,
                "CI Upper": 40.0
            },
            "Common": {
                "value": 40.0,
                "CI Lower": 25.0,
                "CI Upper": 50.0
            },
            "Strong": {
                "value": 60.0,
                "CI Lower": 40.0,
                "CI Upper": 80.0
            },
            "Heavy": {
                "value": 107.99999999999997,
                "CI Lower": 80.0,
                "CI Upper": 125.0
            }
        },
        "reliability_score": 0.800030195516138
    },
    {
        "substance": "Banisteriopsis caapi",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 2.5500000000000003,
                "CI Lower": 1.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 18.75,
                "CI Lower": 6.0,
                "CI Upper": 25.0
            },
            "Common": {
                "value": 33.5,
                "CI Lower": 25.0,
                "CI Upper": 50.0
            },
            "Strong": {
                "value": 50.0,
                "CI Lower": 45.0,
                "CI Upper": 60.0
            },
            "Heavy": {
                "value": 96.70000000000002,
                "CI Lower": 60.0,
                "CI Upper": 100.0
            }
        },
        "reliability_score": 0.7895365146470705
    },
    {
        "substance": "Bath Salts, Plant Food, etc",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 50.0
            },
            "Light": {
                "value": 22.25,
                "CI Lower": 10.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 75.0,
                "CI Lower": 10.0,
                "CI Upper": 150.0
            },
            "Strong": {
                "value": 100.0,
                "CI Lower": 35.0,
                "CI Upper": 225.0
            },
            "Heavy": {
                "value": 191.24999999999991,
                "CI Lower": 100.0,
                "CI Upper": 225.0
            }
        },
        "reliability_score": 0.7380574669583708
    },
    {
        "substance": "Benzocaine",
        "method": "sublingual",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            }
        },
        "reliability_score": 1.0
    },
    {
        "substance": "Bisfluoroadrafinil",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 245.0,
                "CI Lower": 245.0,
                "CI Upper": 280.0
            },
            "Light": {
                "value": 280.0,
                "CI Lower": 245.0,
                "CI Upper": 280.0
            },
            "Common": {
                "value": 280.0,
                "CI Lower": 280.0,
                "CI Upper": 300.0
            },
            "Strong": {
                "value": 300.0,
                "CI Lower": 280.0,
                "CI Upper": 320.0
            },
            "Heavy": {
                "value": 320.0,
                "CI Lower": 300.0,
                "CI Upper": 320.0
            }
        },
        "reliability_score": 0.973249209329865
    },
    {
        "substance": "Bromazepam",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 3.0,
                "CI Lower": 1.5,
                "CI Upper": 6.0
            },
            "Light": {
                "value": 6.0,
                "CI Lower": 3.0,
                "CI Upper": 6.0
            },
            "Common": {
                "value": 6.0,
                "CI Lower": 6.0,
                "CI Upper": 15.0
            },
            "Strong": {
                "value": 15.0,
                "CI Lower": 6.0,
                "CI Upper": 24.0
            },
            "Heavy": {
                "value": 24.0,
                "CI Lower": 12.0,
                "CI Upper": 24.0
            }
        },
        "reliability_score": 0.7811047216699756
    },
    {
        "substance": "Bromo-Dragonfly",
        "method": "oral",
        "unit": "\u00b5g",
        "tiers": {
            "Threshold": {
                "value": 92.5,
                "CI Lower": 50.0,
                "CI Upper": 200.0
            },
            "Light": {
                "value": 212.5,
                "CI Lower": 100.0,
                "CI Upper": 380.0
            },
            "Common": {
                "value": 340.0,
                "CI Lower": 100.0,
                "CI Upper": 600.0
            },
            "Strong": {
                "value": 575.0,
                "CI Lower": 300.0,
                "CI Upper": 1050.0
            },
            "Heavy": {
                "value": 1050.0,
                "CI Lower": 600.0,
                "CI Upper": 1050.0
            }
        },
        "reliability_score": 0.7836188464571552
    },
    {
        "substance": "Buprenorphine",
        "method": "IV",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 0.55,
                "CI Lower": 0.3,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 0.9,
                "CI Lower": 0.3,
                "CI Upper": 1.0
            },
            "Common": {
                "value": 1.0,
                "CI Lower": 0.8,
                "CI Upper": 2.0
            },
            "Strong": {
                "value": 1.25,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Heavy": {
                "value": 2.0,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            }
        },
        "reliability_score": 0.8632133488631277
    },
    {
        "substance": "Buprenorphine",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 0.8800000000000001,
                "CI Lower": 0.2,
                "CI Upper": 2.0
            },
            "Light": {
                "value": 2.0,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Common": {
                "value": 2.0,
                "CI Lower": 1.0,
                "CI Upper": 3.0
            },
            "Strong": {
                "value": 2.75,
                "CI Lower": 2.0,
                "CI Upper": 4.0
            },
            "Heavy": {
                "value": 4.0,
                "CI Lower": 3.0,
                "CI Upper": 4.0
            }
        },
        "reliability_score": 0.8502526150669325
    },
    {
        "substance": "Buprenorphine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Light": {
                "value": 2.0,
                "CI Lower": 1.0,
                "CI Upper": 4.0
            },
            "Common": {
                "value": 4.0,
                "CI Lower": 2.0,
                "CI Upper": 8.0
            },
            "Strong": {
                "value": 8.0,
                "CI Lower": 4.0,
                "CI Upper": 12.0
            },
            "Heavy": {
                "value": 15.199999999999989,
                "CI Lower": 8.0,
                "CI Upper": 18.0
            }
        },
        "reliability_score": 0.744278435562195
    },
    {
        "substance": "Buprenorphine",
        "method": "sublingual",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 0.8020000000000002,
                "CI Lower": 0.4,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 2.0,
                "CI Lower": 2.0,
                "CI Upper": 4.0
            },
            "Common": {
                "value": 4.0,
                "CI Lower": 4.0,
                "CI Upper": 8.0
            },
            "Strong": {
                "value": 8.0,
                "CI Lower": 8.0,
                "CI Upper": 8.0
            },
            "Heavy": {
                "value": 14.399999999999977,
                "CI Lower": 8.0,
                "CI Upper": 16.0
            }
        },
        "reliability_score": 0.7920720484990089
    },
    {
        "substance": "Bupropion",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 56.625,
                "CI Lower": 25.0,
                "CI Upper": 75.0
            },
            "Light": {
                "value": 75.0,
                "CI Lower": 75.0,
                "CI Upper": 150.0
            },
            "Common": {
                "value": 150.0,
                "CI Lower": 75.0,
                "CI Upper": 150.0
            },
            "Strong": {
                "value": 150.0,
                "CI Lower": 150.0,
                "CI Upper": 225.0
            },
            "Heavy": {
                "value": 300.0,
                "CI Lower": 200.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.8471912344954253
    },
    {
        "substance": "Bupropion",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 100.0,
                "CI Lower": 75.0,
                "CI Upper": 150.0
            },
            "Light": {
                "value": 150.0,
                "CI Lower": 150.0,
                "CI Upper": 150.0
            },
            "Common": {
                "value": 300.0,
                "CI Lower": 300.0,
                "CI Upper": 300.0
            },
            "Strong": {
                "value": 300.0,
                "CI Lower": 300.0,
                "CI Upper": 400.0
            },
            "Heavy": {
                "value": 600.0,
                "CI Lower": 450.0,
                "CI Upper": 750.0
            }
        },
        "reliability_score": 0.8372071042140199
    },
    {
        "substance": "Buspirone",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.875,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 13.75,
                "CI Lower": 7.5,
                "CI Upper": 15.0
            },
            "Common": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 30.0
            },
            "Strong": {
                "value": 30.0,
                "CI Lower": 15.0,
                "CI Upper": 30.0
            },
            "Heavy": {
                "value": 36.499999999999986,
                "CI Lower": 30.0,
                "CI Upper": 45.0
            }
        },
        "reliability_score": 0.8359168989782246
    },
    {
        "substance": "Butalbital",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 50.0
            },
            "Light": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Strong": {
                "value": 150.0,
                "CI Lower": 100.0,
                "CI Upper": 200.0
            },
            "Heavy": {
                "value": 244.99999999999994,
                "CI Lower": 150.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.8153162458918171
    },
    {
        "substance": "CBD",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 56.0
            },
            "Common": {
                "value": 56.0,
                "CI Lower": 10.0,
                "CI Upper": 56.0
            },
            "Strong": {
                "value": 56.0,
                "CI Lower": 56.0,
                "CI Upper": 56.0
            },
            "Heavy": {
                "value": 56.0,
                "CI Lower": 56.0,
                "CI Upper": 56.0
            }
        },
        "reliability_score": 0.8344169548357816
    },
    {
        "substance": "Cacti - T. pachanoi",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 1.1500000000000001,
                "CI Lower": 1.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 11.75,
                "CI Lower": 6.0,
                "CI Upper": 25.0
            },
            "Common": {
                "value": 28.0,
                "CI Lower": 15.0,
                "CI Upper": 42.5
            },
            "Strong": {
                "value": 50.0,
                "CI Lower": 30.0,
                "CI Upper": 75.0
            },
            "Heavy": {
                "value": 96.99999999999996,
                "CI Lower": 63.0,
                "CI Upper": 112.5
            }
        },
        "reliability_score": 0.7495129786413233
    },
    {
        "substance": "Cacti - T. pachanoi",
        "method": "oral",
        "unit": "ml",
        "tiers": {
            "Threshold": {
                "value": 81.25,
                "CI Lower": 25.0,
                "CI Upper": 350.0
            },
            "Light": {
                "value": 270.0,
                "CI Lower": 25.0,
                "CI Upper": 500.0
            },
            "Common": {
                "value": 350.0,
                "CI Lower": 150.0,
                "CI Upper": 750.0
            },
            "Strong": {
                "value": 575.0,
                "CI Lower": 330.0,
                "CI Upper": 950.0
            },
            "Heavy": {
                "value": 859.9999999999998,
                "CI Lower": 350.0,
                "CI Upper": 950.0
            }
        },
        "reliability_score": 0.8028059961229959
    },
    {
        "substance": "Cacti - T. peruvianus",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 9.25,
                "CI Lower": 5.0,
                "CI Upper": 15.0
            },
            "Light": {
                "value": 20.0,
                "CI Lower": 15.0,
                "CI Upper": 25.0
            },
            "Common": {
                "value": 30.0,
                "CI Lower": 25.0,
                "CI Upper": 33.0
            },
            "Strong": {
                "value": 40.5,
                "CI Lower": 30.0,
                "CI Upper": 50.0
            },
            "Heavy": {
                "value": 55.25,
                "CI Lower": 50.0,
                "CI Upper": 70.0
            }
        },
        "reliability_score": 0.8529886405508558
    },
    {
        "substance": "Cacti - columnar",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 10.35,
                "CI Lower": 9.0,
                "CI Upper": 25.0
            },
            "Light": {
                "value": 20.0,
                "CI Lower": 9.0,
                "CI Upper": 30.0
            },
            "Common": {
                "value": 27.5,
                "CI Lower": 12.0,
                "CI Upper": 40.0
            },
            "Strong": {
                "value": 37.5,
                "CI Lower": 20.0,
                "CI Upper": 40.0
            },
            "Heavy": {
                "value": 40.0,
                "CI Lower": 30.0,
                "CI Upper": 40.0
            }
        },
        "reliability_score": 0.8711672181016306
    },
    {
        "substance": "Caffeine",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 25.0,
                "CI Lower": 25.0,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 100.0,
                "CI Lower": 25.0,
                "CI Upper": 200.0
            },
            "Common": {
                "value": 175.0,
                "CI Lower": 100.0,
                "CI Upper": 200.0
            },
            "Strong": {
                "value": 200.0,
                "CI Lower": 100.0,
                "CI Upper": 400.0
            },
            "Heavy": {
                "value": 400.0,
                "CI Lower": 200.0,
                "CI Upper": 400.0
            }
        },
        "reliability_score": 0.8062711580648589
    },
    {
        "substance": "Caffeine",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 0.895,
                "CI Lower": 0.7,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 1.0,
                "CI Lower": 0.7,
                "CI Upper": 1.6
            },
            "Common": {
                "value": 1.4,
                "CI Lower": 1.0,
                "CI Upper": 1.8
            },
            "Strong": {
                "value": 1.75,
                "CI Lower": 1.0,
                "CI Upper": 2.5
            },
            "Heavy": {
                "value": 2.175,
                "CI Lower": 1.6,
                "CI Upper": 2.5
            }
        },
        "reliability_score": 0.8905925048271373
    },
    {
        "substance": "Caffeine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 50.0,
                "CI Lower": 40.0,
                "CI Upper": 65.0
            },
            "Light": {
                "value": 158.5,
                "CI Lower": 150.0,
                "CI Upper": 170.0
            },
            "Common": {
                "value": 200.0,
                "CI Lower": 200.0,
                "CI Upper": 200.0
            },
            "Strong": {
                "value": 400.0,
                "CI Lower": 400.0,
                "CI Upper": 400.0
            },
            "Heavy": {
                "value": 400.0,
                "CI Lower": 400.0,
                "CI Upper": 400.0
            }
        },
        "reliability_score": 0.8426277689791357
    },
    {
        "substance": "Calamus",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 2.3,
                "CI Lower": 2.0,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 5.0,
                "CI Lower": 2.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 8.0,
                "CI Lower": 4.0,
                "CI Upper": 15.0
            },
            "Strong": {
                "value": 14.0,
                "CI Lower": 5.0,
                "CI Upper": 25.0
            },
            "Heavy": {
                "value": 25.0,
                "CI Lower": 10.0,
                "CI Upper": 25.0
            }
        },
        "reliability_score": 0.7665244867592833
    },
    {
        "substance": "Calcium Carbonate",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 337.0,
                "CI Lower": 337.0,
                "CI Upper": 337.0
            },
            "Light": {
                "value": 337.0,
                "CI Lower": 337.0,
                "CI Upper": 675.0
            },
            "Common": {
                "value": 506.0,
                "CI Lower": 337.0,
                "CI Upper": 675.0
            },
            "Strong": {
                "value": 675.0,
                "CI Lower": 337.0,
                "CI Upper": 675.0
            },
            "Heavy": {
                "value": 675.0,
                "CI Lower": 675.0,
                "CI Upper": 675.0
            }
        },
        "reliability_score": 0.8943824259746134
    },
    {
        "substance": "Calcium Phosphate",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 75.0,
                "CI Lower": 75.0,
                "CI Upper": 75.0
            },
            "Light": {
                "value": 75.0,
                "CI Lower": 75.0,
                "CI Upper": 75.0
            },
            "Common": {
                "value": 75.0,
                "CI Lower": 75.0,
                "CI Upper": 75.0
            },
            "Strong": {
                "value": 75.0,
                "CI Lower": 75.0,
                "CI Upper": 75.0
            },
            "Heavy": {
                "value": 75.0,
                "CI Lower": 75.0,
                "CI Upper": 75.0
            }
        },
        "reliability_score": 1.0
    },
    {
        "substance": "Calea zacatechichi",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Common": {
                "value": 2.0,
                "CI Lower": 1.0,
                "CI Upper": 3.4
            },
            "Strong": {
                "value": 3.4,
                "CI Lower": 2.3,
                "CI Upper": 5.0
            },
            "Heavy": {
                "value": 5.5,
                "CI Lower": 3.4,
                "CI Upper": 7.5
            }
        },
        "reliability_score": 0.8009496520579209
    },
    {
        "substance": "Calea zacatechichi",
        "method": "smoked",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 0.5,
                "CI Lower": 0.5,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 0.55,
                "CI Lower": 0.5,
                "CI Upper": 1.0
            },
            "Common": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 1.75
            },
            "Strong": {
                "value": 1.0,
                "CI Lower": 0.7,
                "CI Upper": 2.0
            },
            "Heavy": {
                "value": 1.8874999999999997,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            }
        },
        "reliability_score": 0.8442292107798339
    },
    {
        "substance": "Cannabis",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 0.5,
                "CI Lower": 0.1,
                "CI Upper": 0.5
            },
            "Light": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 1.0
            },
            "Common": {
                "value": 1.5,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Strong": {
                "value": 3.0,
                "CI Lower": 1.5,
                "CI Upper": 4.0
            },
            "Heavy": {
                "value": 5.0,
                "CI Lower": 3.6,
                "CI Upper": 5.0
            }
        },
        "reliability_score": 0.7722908203750782
    },
    {
        "substance": "Cannabis",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 10.0,
                "CI Upper": 40.0
            },
            "Strong": {
                "value": 40.0,
                "CI Lower": 20.0,
                "CI Upper": 40.0
            },
            "Heavy": {
                "value": 40.0,
                "CI Lower": 40.0,
                "CI Upper": 40.0
            }
        },
        "reliability_score": 0.8184393118532325
    },
    {
        "substance": "Cannabis",
        "method": "smoked",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 0.2,
                "CI Lower": 0.15,
                "CI Upper": 0.25
            },
            "Light": {
                "value": 0.5,
                "CI Lower": 0.4,
                "CI Upper": 0.5
            },
            "Common": {
                "value": 1.0,
                "CI Lower": 0.6,
                "CI Upper": 1.0
            },
            "Strong": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.5
            },
            "Heavy": {
                "value": 2.5,
                "CI Lower": 2.0,
                "CI Upper": 3.0
            }
        },
        "reliability_score": 0.7780392836703764
    },
    {
        "substance": "Cannabis",
        "method": "smoked",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 49.2,
                "CI Lower": 30.0,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 125.0,
                "CI Lower": 100.0,
                "CI Upper": 151.0
            },
            "Common": {
                "value": 200.0,
                "CI Lower": 150.0,
                "CI Upper": 250.0
            },
            "Strong": {
                "value": 300.0,
                "CI Lower": 250.0,
                "CI Upper": 350.0
            },
            "Heavy": {
                "value": 428.0000000000002,
                "CI Lower": 350.0,
                "CI Upper": 500.0
            }
        },
        "reliability_score": 0.8331133225782275
    },
    {
        "substance": "Cannabis - Hash",
        "method": "smoked",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 0.25,
                "CI Lower": 0.1,
                "CI Upper": 0.5
            },
            "Light": {
                "value": 0.5,
                "CI Lower": 0.25,
                "CI Upper": 1.0
            },
            "Common": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 2.0
            },
            "Strong": {
                "value": 2.0,
                "CI Lower": 1.0,
                "CI Upper": 3.0
            },
            "Heavy": {
                "value": 3.0,
                "CI Lower": 2.0,
                "CI Upper": 4.0
            }
        },
        "reliability_score": 0.7547011091406248
    },
    {
        "substance": "Carisoprodol",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 350.0,
                "CI Lower": 87.5,
                "CI Upper": 350.0
            },
            "Light": {
                "value": 600.0,
                "CI Lower": 350.0,
                "CI Upper": 700.0
            },
            "Common": {
                "value": 700.0,
                "CI Lower": 700.0,
                "CI Upper": 700.0
            },
            "Strong": {
                "value": 1050.0,
                "CI Lower": 700.0,
                "CI Upper": 1400.0
            },
            "Heavy": {
                "value": 1739.9999999999998,
                "CI Lower": 1050.0,
                "CI Upper": 2100.0
            }
        },
        "reliability_score": 0.8330098368249224
    },
    {
        "substance": "Catnip",
        "method": "smoked",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 0.3625,
                "CI Lower": 0.25,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 0.5625,
                "CI Lower": 0.25,
                "CI Upper": 1.0
            },
            "Common": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 2.0
            },
            "Strong": {
                "value": 1.375,
                "CI Lower": 0.75,
                "CI Upper": 3.0
            },
            "Heavy": {
                "value": 2.549999999999999,
                "CI Lower": 1.0,
                "CI Upper": 3.0
            }
        },
        "reliability_score": 0.7843548388237
    },
    {
        "substance": "Changa",
        "method": "smoked",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 60.05,
                "CI Lower": 23.0,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 100.0,
                "CI Lower": 23.0,
                "CI Upper": 138.0
            },
            "Common": {
                "value": 118.5,
                "CI Lower": 100.0,
                "CI Upper": 200.0
            },
            "Strong": {
                "value": 200.0,
                "CI Lower": 100.0,
                "CI Upper": 300.0
            },
            "Heavy": {
                "value": 267.5,
                "CI Lower": 200.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.8413090561448386
    },
    {
        "substance": "Chlordiazepoxide",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 25.0
            },
            "Common": {
                "value": 25.0,
                "CI Lower": 10.0,
                "CI Upper": 50.0
            },
            "Strong": {
                "value": 30.0,
                "CI Lower": 20.0,
                "CI Upper": 75.0
            },
            "Heavy": {
                "value": 75.0,
                "CI Lower": 25.0,
                "CI Upper": 75.0
            }
        },
        "reliability_score": 0.7717822677061807
    },
    {
        "substance": "Chlorpheniramine Maleate",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.8,
                "CI Lower": 2.0,
                "CI Upper": 28.0
            },
            "Light": {
                "value": 32.0,
                "CI Lower": 16.0,
                "CI Upper": 34.0
            },
            "Common": {
                "value": 44.0,
                "CI Lower": 32.0,
                "CI Upper": 64.0
            },
            "Strong": {
                "value": 64.0,
                "CI Lower": 64.0,
                "CI Upper": 112.0
            },
            "Heavy": {
                "value": 192.0,
                "CI Lower": 64.0,
                "CI Upper": 192.0
            }
        },
        "reliability_score": 0.7476557508021546
    },
    {
        "substance": "Citalopram",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 40.0
            },
            "Strong": {
                "value": 40.0,
                "CI Lower": 40.0,
                "CI Upper": 40.0
            },
            "Heavy": {
                "value": 57.5,
                "CI Lower": 40.0,
                "CI Upper": 60.0
            }
        },
        "reliability_score": 0.8547689418045867
    },
    {
        "substance": "Clonazepam",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 0.25,
                "CI Lower": 0.25,
                "CI Upper": 0.5
            },
            "Light": {
                "value": 0.5,
                "CI Lower": 0.5,
                "CI Upper": 1.0
            },
            "Common": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 1.0
            },
            "Strong": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Heavy": {
                "value": 2.5,
                "CI Lower": 1.5,
                "CI Upper": 2.5
            }
        },
        "reliability_score": 0.8042879353814036
    },
    {
        "substance": "Clonazepam",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 0.5,
                "CI Lower": 0.5,
                "CI Upper": 0.5
            },
            "Light": {
                "value": 0.5,
                "CI Lower": 0.5,
                "CI Upper": 1.0
            },
            "Common": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.5
            },
            "Strong": {
                "value": 2.0,
                "CI Lower": 2.0,
                "CI Upper": 2.5
            },
            "Heavy": {
                "value": 4.0,
                "CI Lower": 4.0,
                "CI Upper": 4.0
            }
        },
        "reliability_score": 0.788517003560318
    },
    {
        "substance": "Clonazepam",
        "method": "sublingual",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 0.475,
                "CI Lower": 0.25,
                "CI Upper": 0.5
            },
            "Light": {
                "value": 0.5,
                "CI Lower": 0.5,
                "CI Upper": 1.0
            },
            "Common": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 2.0
            },
            "Strong": {
                "value": 1.5,
                "CI Lower": 0.5,
                "CI Upper": 2.5
            },
            "Heavy": {
                "value": 2.549999999999999,
                "CI Lower": 2.0,
                "CI Upper": 3.0
            }
        },
        "reliability_score": 0.7789920029375219
    },
    {
        "substance": "Clonazolam",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 0.24,
                "CI Lower": 0.15,
                "CI Upper": 0.25
            },
            "Light": {
                "value": 0.25,
                "CI Lower": 0.25,
                "CI Upper": 0.5
            },
            "Common": {
                "value": 0.5,
                "CI Lower": 0.25,
                "CI Upper": 0.5
            },
            "Strong": {
                "value": 0.5,
                "CI Lower": 0.5,
                "CI Upper": 1.5
            },
            "Heavy": {
                "value": 1.5,
                "CI Lower": 0.5,
                "CI Upper": 1.5
            }
        },
        "reliability_score": 0.788081467126053
    },
    {
        "substance": "Clonazolam",
        "method": "oral",
        "unit": "\u00b5g",
        "tiers": {
            "Threshold": {
                "value": 125.0,
                "CI Lower": 125.0,
                "CI Upper": 200.0
            },
            "Light": {
                "value": 162.5,
                "CI Lower": 125.0,
                "CI Upper": 250.0
            },
            "Common": {
                "value": 250.0,
                "CI Lower": 125.0,
                "CI Upper": 500.0
            },
            "Strong": {
                "value": 250.0,
                "CI Lower": 200.0,
                "CI Upper": 500.0
            },
            "Heavy": {
                "value": 500.0,
                "CI Lower": 250.0,
                "CI Upper": 500.0
            }
        },
        "reliability_score": 0.8418699483926935
    },
    {
        "substance": "Clonidine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 0.07225,
                "CI Lower": 0.02,
                "CI Upper": 0.1
            },
            "Light": {
                "value": 0.1,
                "CI Lower": 0.075,
                "CI Upper": 0.2
            },
            "Common": {
                "value": 0.2,
                "CI Lower": 0.1,
                "CI Upper": 0.3
            },
            "Strong": {
                "value": 0.3,
                "CI Lower": 0.2,
                "CI Upper": 0.8
            },
            "Heavy": {
                "value": 0.8050000000000002,
                "CI Lower": 0.3,
                "CI Upper": 0.9
            }
        },
        "reliability_score": 0.7323585057199025
    },
    {
        "substance": "Cocaine",
        "method": "IV",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 0.20375,
                "CI Lower": 0.125,
                "CI Upper": 0.5
            },
            "Light": {
                "value": 0.325,
                "CI Lower": 0.125,
                "CI Upper": 0.5
            },
            "Common": {
                "value": 0.5,
                "CI Lower": 0.3,
                "CI Upper": 1.0
            },
            "Strong": {
                "value": 0.575,
                "CI Lower": 0.4,
                "CI Upper": 1.0
            },
            "Heavy": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 1.0
            }
        },
        "reliability_score": 0.8358565734173866
    },
    {
        "substance": "Cocaine",
        "method": "IV",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 28.0,
                "CI Lower": 25.0,
                "CI Upper": 125.0
            },
            "Light": {
                "value": 125.0,
                "CI Lower": 25.0,
                "CI Upper": 200.0
            },
            "Common": {
                "value": 200.0,
                "CI Lower": 100.0,
                "CI Upper": 250.0
            },
            "Strong": {
                "value": 250.0,
                "CI Lower": 125.0,
                "CI Upper": 300.0
            },
            "Heavy": {
                "value": 269.99999999999994,
                "CI Lower": 200.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.8478730960466121
    },
    {
        "substance": "Cocaine",
        "method": "insufflated",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 0.27,
                "CI Lower": 0.25,
                "CI Upper": 0.5
            },
            "Light": {
                "value": 0.5,
                "CI Lower": 0.5,
                "CI Upper": 0.6
            },
            "Common": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 1.0
            },
            "Strong": {
                "value": 1.5,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Heavy": {
                "value": 2.5,
                "CI Lower": 2.0,
                "CI Upper": 3.0
            }
        },
        "reliability_score": 0.7945628198819756
    },
    {
        "substance": "Cocaine",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 25.0,
                "CI Lower": 0.125,
                "CI Upper": 40.0
            },
            "Light": {
                "value": 45.0,
                "CI Lower": 25.0,
                "CI Upper": 125.0
            },
            "Common": {
                "value": 200.0,
                "CI Lower": 75.0,
                "CI Upper": 250.0
            },
            "Strong": {
                "value": 437.5,
                "CI Lower": 250.0,
                "CI Upper": 500.0
            },
            "Heavy": {
                "value": 734.9999999999998,
                "CI Lower": 500.0,
                "CI Upper": 875.0
            }
        },
        "reliability_score": 0.7254297169274515
    },
    {
        "substance": "Codeine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 16.0,
                "CI Lower": 12.0,
                "CI Upper": 24.0
            },
            "Light": {
                "value": 33.6,
                "CI Lower": 30.0,
                "CI Upper": 60.0
            },
            "Common": {
                "value": 90.0,
                "CI Lower": 60.0,
                "CI Upper": 102.0
            },
            "Strong": {
                "value": 150.0,
                "CI Lower": 120.0,
                "CI Upper": 180.0
            },
            "Heavy": {
                "value": 300.0,
                "CI Lower": 240.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.7722240657434536
    },
    {
        "substance": "Cyclobenzaprine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 2.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 17.5,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 30.0
            },
            "Heavy": {
                "value": 50.0,
                "CI Lower": 30.0,
                "CI Upper": 60.0
            }
        },
        "reliability_score": 0.7840958091434167
    },
    {
        "substance": "DHEA",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 25.0
            },
            "Light": {
                "value": 25.0,
                "CI Lower": 5.0,
                "CI Upper": 50.0
            },
            "Common": {
                "value": 50.0,
                "CI Lower": 25.0,
                "CI Upper": 50.0
            },
            "Strong": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Heavy": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            }
        },
        "reliability_score": 0.8205861706934134
    },
    {
        "substance": "DMAE",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 130.0
            },
            "Light": {
                "value": 200.0,
                "CI Lower": 100.0,
                "CI Upper": 300.0
            },
            "Common": {
                "value": 345.0,
                "CI Lower": 200.0,
                "CI Upper": 500.0
            },
            "Strong": {
                "value": 500.0,
                "CI Lower": 350.0,
                "CI Upper": 700.0
            },
            "Heavy": {
                "value": 750.0,
                "CI Lower": 700.0,
                "CI Upper": 900.0
            }
        },
        "reliability_score": 0.8219969572175558
    },
    {
        "substance": "DMT",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 16.5,
                "CI Lower": 10.0,
                "CI Upper": 50.0
            },
            "Light": {
                "value": 46.25,
                "CI Lower": 10.0,
                "CI Upper": 70.0
            },
            "Common": {
                "value": 57.5,
                "CI Lower": 20.0,
                "CI Upper": 85.0
            },
            "Strong": {
                "value": 83.75,
                "CI Lower": 50.0,
                "CI Upper": 130.0
            },
            "Heavy": {
                "value": 110.49999999999999,
                "CI Lower": 80.0,
                "CI Upper": 130.0
            }
        },
        "reliability_score": 0.8371120450814267
    },
    {
        "substance": "DMT",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 31.05,
                "CI Lower": 15.0,
                "CI Upper": 50.0
            },
            "Light": {
                "value": 50.0,
                "CI Lower": 37.0,
                "CI Upper": 70.0
            },
            "Common": {
                "value": 70.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Strong": {
                "value": 126.25,
                "CI Lower": 80.0,
                "CI Upper": 165.0
            },
            "Heavy": {
                "value": 200.0,
                "CI Lower": 150.0,
                "CI Upper": 200.0
            }
        },
        "reliability_score": 0.8191540795824495
    },
    {
        "substance": "DMT",
        "method": "smoked",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 15.0,
                "CI Lower": 10.0,
                "CI Upper": 15.0
            },
            "Light": {
                "value": 30.0,
                "CI Lower": 25.0,
                "CI Upper": 30.0
            },
            "Common": {
                "value": 40.0,
                "CI Lower": 40.0,
                "CI Upper": 50.0
            },
            "Strong": {
                "value": 52.5,
                "CI Lower": 50.0,
                "CI Upper": 60.0
            },
            "Heavy": {
                "value": 100.0,
                "CI Lower": 80.0,
                "CI Upper": 100.0
            }
        },
        "reliability_score": 0.8465729497322907
    },
    {
        "substance": "DOB",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.5
            },
            "Light": {
                "value": 1.5,
                "CI Lower": 1.0,
                "CI Upper": 1.5
            },
            "Common": {
                "value": 1.625,
                "CI Lower": 1.5,
                "CI Upper": 2.5
            },
            "Strong": {
                "value": 2.525,
                "CI Lower": 1.5,
                "CI Upper": 3.0
            },
            "Heavy": {
                "value": 3.0,
                "CI Lower": 2.6,
                "CI Upper": 3.2
            }
        },
        "reliability_score": 0.8957089514866827
    },
    {
        "substance": "DOC",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.5
            },
            "Light": {
                "value": 2.0,
                "CI Lower": 1.2,
                "CI Upper": 2.0
            },
            "Common": {
                "value": 2.725,
                "CI Lower": 2.0,
                "CI Upper": 3.0
            },
            "Strong": {
                "value": 3.5,
                "CI Lower": 3.0,
                "CI Upper": 4.0
            },
            "Heavy": {
                "value": 5.0,
                "CI Lower": 4.0,
                "CI Upper": 7.0
            }
        },
        "reliability_score": 0.8606712690055796
    },
    {
        "substance": "DOI",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 2.0
            },
            "Light": {
                "value": 2.0,
                "CI Lower": 1.0,
                "CI Upper": 3.0
            },
            "Common": {
                "value": 3.0,
                "CI Lower": 2.0,
                "CI Upper": 4.0
            },
            "Strong": {
                "value": 4.0,
                "CI Lower": 3.0,
                "CI Upper": 4.0
            },
            "Heavy": {
                "value": 5.199999999999996,
                "CI Lower": 4.0,
                "CI Upper": 6.0
            }
        },
        "reliability_score": 0.8559698556894779
    },
    {
        "substance": "DOM",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 2.4125,
                "CI Lower": 1.2,
                "CI Upper": 2.5
            },
            "Light": {
                "value": 5.0,
                "CI Lower": 2.5,
                "CI Upper": 5.0
            },
            "Common": {
                "value": 6.0,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Strong": {
                "value": 10.0,
                "CI Lower": 7.0,
                "CI Upper": 15.0
            },
            "Heavy": {
                "value": 15.0,
                "CI Lower": 10.0,
                "CI Upper": 15.0
            }
        },
        "reliability_score": 0.828664426546907
    },
    {
        "substance": "DPH",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 100.0,
                "CI Lower": 100.0,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 100.0,
                "CI Lower": 100.0,
                "CI Upper": 500.0
            },
            "Common": {
                "value": 500.0,
                "CI Lower": 100.0,
                "CI Upper": 600.0
            },
            "Strong": {
                "value": 600.0,
                "CI Lower": 500.0,
                "CI Upper": 600.0
            },
            "Heavy": {
                "value": 600.0,
                "CI Lower": 600.0,
                "CI Upper": 600.0
            }
        },
        "reliability_score": 0.8322949016875159
    },
    {
        "substance": "DPT",
        "method": "IM",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 14.75,
                "CI Lower": 12.5,
                "CI Upper": 25.0
            },
            "Light": {
                "value": 27.5,
                "CI Lower": 20.0,
                "CI Upper": 50.0
            },
            "Common": {
                "value": 50.0,
                "CI Lower": 30.0,
                "CI Upper": 75.0
            },
            "Strong": {
                "value": 77.5,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Heavy": {
                "value": 100.0,
                "CI Lower": 80.0,
                "CI Upper": 110.0
            }
        },
        "reliability_score": 0.8329074809044197
    },
    {
        "substance": "DPT",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 12.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 30.0,
                "CI Lower": 25.0,
                "CI Upper": 40.0
            },
            "Common": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 59.0
            },
            "Strong": {
                "value": 100.0,
                "CI Lower": 62.5,
                "CI Upper": 100.0
            },
            "Heavy": {
                "value": 150.0,
                "CI Lower": 102.0,
                "CI Upper": 150.0
            }
        },
        "reliability_score": 0.8161815650221005
    },
    {
        "substance": "DPT",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 85.0
            },
            "Light": {
                "value": 82.5,
                "CI Lower": 50.0,
                "CI Upper": 135.0
            },
            "Common": {
                "value": 122.5,
                "CI Lower": 75.0,
                "CI Upper": 200.0
            },
            "Strong": {
                "value": 200.0,
                "CI Lower": 100.0,
                "CI Upper": 250.0
            },
            "Heavy": {
                "value": 256.25,
                "CI Lower": 200.0,
                "CI Upper": 275.0
            }
        },
        "reliability_score": 0.8407824445370704
    },
    {
        "substance": "DPT",
        "method": "rectal",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 25.0,
                "CI Lower": 25.0,
                "CI Upper": 40.0
            },
            "Light": {
                "value": 35.0,
                "CI Lower": 25.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 75.0,
                "CI Lower": 30.0,
                "CI Upper": 100.0
            },
            "Strong": {
                "value": 100.0,
                "CI Lower": 60.0,
                "CI Upper": 113.0
            },
            "Heavy": {
                "value": 103.89999999999999,
                "CI Lower": 100.0,
                "CI Upper": 113.0
            }
        },
        "reliability_score": 0.8551862962032062
    },
    {
        "substance": "DPT",
        "method": "smoked",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 12.875,
                "CI Lower": 12.5,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 20.0,
                "CI Lower": 12.5,
                "CI Upper": 30.0
            },
            "Common": {
                "value": 30.0,
                "CI Lower": 20.0,
                "CI Upper": 40.0
            },
            "Strong": {
                "value": 40.5,
                "CI Lower": 30.0,
                "CI Upper": 50.0
            },
            "Heavy": {
                "value": 66.99999999999996,
                "CI Lower": 40.0,
                "CI Upper": 70.0
            }
        },
        "reliability_score": 0.8564252470611602
    },
    {
        "substance": "DXM",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 60.0,
                "CI Lower": 45.0,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 220.0,
                "CI Lower": 200.0,
                "CI Upper": 240.0
            },
            "Common": {
                "value": 354.0,
                "CI Lower": 330.0,
                "CI Upper": 375.0
            },
            "Strong": {
                "value": 600.0,
                "CI Lower": 536.0,
                "CI Upper": 600.0
            },
            "Heavy": {
                "value": 900.0,
                "CI Lower": 830.0,
                "CI Upper": 960.0
            }
        },
        "reliability_score": 0.817667795641682
    },
    {
        "substance": "DXM",
        "method": "oral",
        "unit": "ml",
        "tiers": {
            "Threshold": {
                "value": 88.75,
                "CI Lower": 75.0,
                "CI Upper": 120.0
            },
            "Light": {
                "value": 100.0,
                "CI Lower": 75.0,
                "CI Upper": 180.0
            },
            "Common": {
                "value": 165.0,
                "CI Lower": 100.0,
                "CI Upper": 240.0
            },
            "Strong": {
                "value": 237.75,
                "CI Lower": 120.0,
                "CI Upper": 480.0
            },
            "Heavy": {
                "value": 358.99999999999983,
                "CI Lower": 230.0,
                "CI Upper": 480.0
            }
        },
        "reliability_score": 0.8216086186957838
    },
    {
        "substance": "Damiana",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 2.0,
                "CI Lower": 2.0,
                "CI Upper": 3.0
            },
            "Light": {
                "value": 2.75,
                "CI Lower": 2.0,
                "CI Upper": 4.0
            },
            "Common": {
                "value": 4.0,
                "CI Lower": 2.0,
                "CI Upper": 7.0
            },
            "Strong": {
                "value": 5.5,
                "CI Lower": 3.0,
                "CI Upper": 10.0
            },
            "Heavy": {
                "value": 8.899999999999999,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            }
        },
        "reliability_score": 0.831477896185457
    },
    {
        "substance": "Damiana",
        "method": "smoked",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 0.5,
                "CI Lower": 0.5,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 0.5,
                "CI Lower": 0.5,
                "CI Upper": 1.0
            },
            "Common": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 2.0
            },
            "Strong": {
                "value": 1.75,
                "CI Lower": 0.5,
                "CI Upper": 3.0
            },
            "Heavy": {
                "value": 2.549999999999999,
                "CI Lower": 1.0,
                "CI Upper": 3.0
            }
        },
        "reliability_score": 0.7859127903555811
    },
    {
        "substance": "Deschloroetizolam",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 0.725,
                "CI Lower": 0.5,
                "CI Upper": 3.0
            },
            "Light": {
                "value": 1.25,
                "CI Lower": 0.5,
                "CI Upper": 5.0
            },
            "Common": {
                "value": 4.0,
                "CI Lower": 1.0,
                "CI Upper": 12.0
            },
            "Strong": {
                "value": 8.75,
                "CI Lower": 2.0,
                "CI Upper": 12.0
            },
            "Heavy": {
                "value": 12.0,
                "CI Lower": 5.0,
                "CI Upper": 12.0
            }
        },
        "reliability_score": 0.7337432849185779
    },
    {
        "substance": "Deschloroketamine",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 7.8,
                "CI Lower": 6.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 6.0,
                "CI Upper": 25.0
            },
            "Common": {
                "value": 22.0,
                "CI Lower": 10.0,
                "CI Upper": 50.0
            },
            "Strong": {
                "value": 28.75,
                "CI Lower": 10.0,
                "CI Upper": 80.0
            },
            "Heavy": {
                "value": 66.49999999999997,
                "CI Lower": 24.0,
                "CI Upper": 80.0
            }
        },
        "reliability_score": 0.7408972955309918
    },
    {
        "substance": "Deschloroketamine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 15.45,
                "CI Lower": 7.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 20.0,
                "CI Lower": 7.0,
                "CI Upper": 40.0
            },
            "Common": {
                "value": 26.5,
                "CI Lower": 20.0,
                "CI Upper": 40.0
            },
            "Strong": {
                "value": 40.0,
                "CI Lower": 20.0,
                "CI Upper": 50.0
            },
            "Heavy": {
                "value": 43.5,
                "CI Lower": 40.0,
                "CI Upper": 50.0
            }
        },
        "reliability_score": 0.8738691477059417
    },
    {
        "substance": "Deschloroketamine",
        "method": "rectal",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 8.0,
                "CI Lower": 8.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 8.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 12.5,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 15.0,
                "CI Upper": 25.0
            },
            "Heavy": {
                "value": 25.0,
                "CI Lower": 20.0,
                "CI Upper": 25.0
            }
        },
        "reliability_score": 0.873073410679007
    },
    {
        "substance": "Dexmethylphenidate",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 7.25,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 20.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            }
        },
        "reliability_score": 0.8762587002542808
    },
    {
        "substance": "Dexmethylphenidate",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 1.75,
                "CI Lower": 1.0,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 5.0,
                "CI Lower": 1.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 5.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 10.0,
                "CI Upper": 30.0
            },
            "Heavy": {
                "value": 32.5,
                "CI Lower": 20.0,
                "CI Upper": 40.0
            }
        },
        "reliability_score": 0.7663138829844509
    },
    {
        "substance": "Dextroamphetamine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 15.0
            },
            "Light": {
                "value": 15.0,
                "CI Lower": 5.0,
                "CI Upper": 30.0
            },
            "Common": {
                "value": 30.0,
                "CI Lower": 15.0,
                "CI Upper": 30.0
            },
            "Strong": {
                "value": 30.0,
                "CI Lower": 30.0,
                "CI Upper": 45.0
            },
            "Heavy": {
                "value": 45.0,
                "CI Lower": 30.0,
                "CI Upper": 45.0
            }
        },
        "reliability_score": 0.8311805698386587
    },
    {
        "substance": "Dextroamphetamine",
        "method": "sublingual",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 15.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            }
        },
        "reliability_score": 0.8945907446610539
    },
    {
        "substance": "DiPT",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 13.250000000000002,
                "CI Lower": 5.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 25.0,
                "CI Lower": 20.0,
                "CI Upper": 36.0
            },
            "Common": {
                "value": 42.5,
                "CI Lower": 27.0,
                "CI Upper": 50.0
            },
            "Strong": {
                "value": 70.0,
                "CI Lower": 50.0,
                "CI Upper": 76.0
            },
            "Heavy": {
                "value": 100.0,
                "CI Lower": 75.0,
                "CI Upper": 150.0
            }
        },
        "reliability_score": 0.814152061303157
    },
    {
        "substance": "Diazepam",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 2.5,
                "CI Lower": 2.0,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 10.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 15.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 30.0,
                "CI Lower": 20.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.818297207206691
    },
    {
        "substance": "Diclazepam",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Light": {
                "value": 2.0,
                "CI Lower": 1.0,
                "CI Upper": 3.0
            },
            "Common": {
                "value": 2.0,
                "CI Lower": 1.0,
                "CI Upper": 4.0
            },
            "Strong": {
                "value": 4.0,
                "CI Lower": 2.0,
                "CI Upper": 9.0
            },
            "Heavy": {
                "value": 6.5,
                "CI Lower": 3.0,
                "CI Upper": 9.0
            }
        },
        "reliability_score": 0.7810057591883965
    },
    {
        "substance": "Dihydrocodeine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 8.0,
                "CI Lower": 8.0,
                "CI Upper": 8.0
            },
            "Light": {
                "value": 8.0,
                "CI Lower": 8.0,
                "CI Upper": 15.0
            },
            "Common": {
                "value": 30.0,
                "CI Lower": 8.0,
                "CI Upper": 38.0
            },
            "Strong": {
                "value": 60.0,
                "CI Lower": 30.0,
                "CI Upper": 120.0
            },
            "Heavy": {
                "value": 120.0,
                "CI Lower": 76.0,
                "CI Upper": 120.0
            }
        },
        "reliability_score": 0.7
    },
    {
        "substance": "Dihydroergotamine",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.0
            },
            "Common": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Strong": {
                "value": 2.0,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Heavy": {
                "value": 2.0,
                "CI Lower": 2.0,
                "CI Upper": 2.0
            }
        },
        "reliability_score": 0.8902112417932899
    },
    {
        "substance": "Dimenhydrinate",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 50.0
            },
            "Light": {
                "value": 150.0,
                "CI Lower": 100.0,
                "CI Upper": 200.0
            },
            "Common": {
                "value": 450.0,
                "CI Lower": 350.0,
                "CI Upper": 500.0
            },
            "Strong": {
                "value": 600.0,
                "CI Lower": 600.0,
                "CI Upper": 750.0
            },
            "Heavy": {
                "value": 1172.4999999999995,
                "CI Lower": 1000.0,
                "CI Upper": 1200.0
            }
        },
        "reliability_score": 0.780330193438751
    },
    {
        "substance": "Diphenhydramine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 25.0,
                "CI Lower": 25.0,
                "CI Upper": 50.0
            },
            "Light": {
                "value": 75.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 250.0,
                "CI Lower": 200.0,
                "CI Upper": 300.0
            },
            "Strong": {
                "value": 400.0,
                "CI Lower": 375.0,
                "CI Upper": 500.0
            },
            "Heavy": {
                "value": 800.0,
                "CI Lower": 750.0,
                "CI Upper": 900.0
            }
        },
        "reliability_score": 0.7451845063962004
    },
    {
        "substance": "Diphenidine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 30.0,
                "CI Lower": 30.0,
                "CI Upper": 65.0
            },
            "Light": {
                "value": 61.25,
                "CI Lower": 30.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 77.5,
                "CI Lower": 30.0,
                "CI Upper": 100.0
            },
            "Strong": {
                "value": 100.0,
                "CI Lower": 70.0,
                "CI Upper": 150.0
            },
            "Heavy": {
                "value": 133.75,
                "CI Lower": 100.0,
                "CI Upper": 150.0
            }
        },
        "reliability_score": 0.8646959194131218
    },
    {
        "substance": "Diplopterys cabrerana",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 2.25,
                "CI Lower": 2.0,
                "CI Upper": 3.0
            },
            "Light": {
                "value": 3.0,
                "CI Lower": 2.0,
                "CI Upper": 8.0
            },
            "Common": {
                "value": 5.0,
                "CI Lower": 2.5,
                "CI Upper": 14.0
            },
            "Strong": {
                "value": 10.5,
                "CI Lower": 3.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 17.0,
                "CI Lower": 8.0,
                "CI Upper": 20.0
            }
        },
        "reliability_score": 0.762719403715709
    },
    {
        "substance": "Divalproex",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 250.0,
                "CI Lower": 250.0,
                "CI Upper": 500.0
            },
            "Light": {
                "value": 500.0,
                "CI Lower": 250.0,
                "CI Upper": 750.0
            },
            "Common": {
                "value": 750.0,
                "CI Lower": 500.0,
                "CI Upper": 1000.0
            },
            "Strong": {
                "value": 1000.0,
                "CI Lower": 500.0,
                "CI Upper": 1500.0
            },
            "Heavy": {
                "value": 1500.0,
                "CI Lower": 1000.0,
                "CI Upper": 1500.0
            }
        },
        "reliability_score": 0.8509465206980278
    },
    {
        "substance": "Doxylamine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 4.5,
                "CI Lower": 2.5,
                "CI Upper": 13.0
            },
            "Light": {
                "value": 12.5,
                "CI Lower": 2.5,
                "CI Upper": 25.0
            },
            "Common": {
                "value": 23.0,
                "CI Lower": 6.5,
                "CI Upper": 75.0
            },
            "Strong": {
                "value": 37.5,
                "CI Lower": 13.0,
                "CI Upper": 100.0
            },
            "Heavy": {
                "value": 87.5,
                "CI Lower": 25.0,
                "CI Upper": 100.0
            }
        },
        "reliability_score": 0.7034235674564402
    },
    {
        "substance": "Dronabinol",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 2.5,
                "CI Lower": 2.5,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 5.0,
                "CI Lower": 2.5,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Strong": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 20.0,
                "CI Lower": 10.0,
                "CI Upper": 25.0
            }
        },
        "reliability_score": 0.8048356920863493
    },
    {
        "substance": "Duloxetine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 29.0,
                "CI Lower": 10.0,
                "CI Upper": 60.0
            },
            "Light": {
                "value": 60.0,
                "CI Lower": 30.0,
                "CI Upper": 60.0
            },
            "Common": {
                "value": 60.0,
                "CI Lower": 60.0,
                "CI Upper": 60.0
            },
            "Strong": {
                "value": 60.0,
                "CI Lower": 60.0,
                "CI Upper": 120.0
            },
            "Heavy": {
                "value": 120.0,
                "CI Lower": 60.0,
                "CI Upper": 120.0
            }
        },
        "reliability_score": 0.8724501224125318
    },
    {
        "substance": "ETH-LAD",
        "method": "oral",
        "unit": "\u00b5g",
        "tiers": {
            "Threshold": {
                "value": 58.75,
                "CI Lower": 25.0,
                "CI Upper": 150.0
            },
            "Light": {
                "value": 150.0,
                "CI Lower": 25.0,
                "CI Upper": 250.0
            },
            "Common": {
                "value": 175.0,
                "CI Lower": 100.0,
                "CI Upper": 400.0
            },
            "Strong": {
                "value": 287.5,
                "CI Lower": 150.0,
                "CI Upper": 450.0
            },
            "Heavy": {
                "value": 427.49999999999994,
                "CI Lower": 200.0,
                "CI Upper": 450.0
            }
        },
        "reliability_score": 0.8160560379898412
    },
    {
        "substance": "Ephedrine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 12.5,
                "CI Lower": 12.0,
                "CI Upper": 25.0
            },
            "Light": {
                "value": 25.0,
                "CI Lower": 24.0,
                "CI Upper": 25.0
            },
            "Common": {
                "value": 40.0,
                "CI Lower": 25.0,
                "CI Upper": 50.0
            },
            "Strong": {
                "value": 75.0,
                "CI Lower": 50.0,
                "CI Upper": 75.0
            },
            "Heavy": {
                "value": 105.49999999999997,
                "CI Lower": 75.0,
                "CI Upper": 150.0
            }
        },
        "reliability_score": 0.8055604516695607
    },
    {
        "substance": "Ephenidine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 58.0,
                "CI Lower": 40.0,
                "CI Upper": 70.0
            },
            "Light": {
                "value": 70.0,
                "CI Lower": 60.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 70.0,
                "CI Upper": 120.0
            },
            "Strong": {
                "value": 120.0,
                "CI Lower": 100.0,
                "CI Upper": 150.0
            },
            "Heavy": {
                "value": 150.0,
                "CI Lower": 120.0,
                "CI Upper": 150.0
            }
        },
        "reliability_score": 0.9058950481325583
    },
    {
        "substance": "Escitalopram",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 15.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 25.999999999999943,
                "CI Lower": 20.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.860878610165787
    },
    {
        "substance": "Esomeprazole",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 40.0
            },
            "Light": {
                "value": 40.0,
                "CI Lower": 40.0,
                "CI Upper": 40.0
            },
            "Common": {
                "value": 40.0,
                "CI Lower": 40.0,
                "CI Upper": 40.0
            },
            "Strong": {
                "value": 40.0,
                "CI Lower": 40.0,
                "CI Upper": 40.0
            },
            "Heavy": {
                "value": 40.0,
                "CI Lower": 40.0,
                "CI Upper": 40.0
            }
        },
        "reliability_score": 0.9495225688046451
    },
    {
        "substance": "Estradiol Enanthate",
        "method": "injected",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 10.0
            },
            "Strong": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 13.6
            },
            "Heavy": {
                "value": 13.6,
                "CI Lower": 10.0,
                "CI Upper": 13.6
            }
        },
        "reliability_score": 0.9672465449799432
    },
    {
        "substance": "Estradiol Undecylate",
        "method": "injected",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            }
        },
        "reliability_score": 1.0
    },
    {
        "substance": "Eszopiclone",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 2.0,
                "CI Lower": 1.5,
                "CI Upper": 3.0
            },
            "Light": {
                "value": 2.75,
                "CI Lower": 2.0,
                "CI Upper": 4.0
            },
            "Common": {
                "value": 4.0,
                "CI Lower": 2.0,
                "CI Upper": 6.0
            },
            "Strong": {
                "value": 6.0,
                "CI Lower": 4.0,
                "CI Upper": 7.5
            },
            "Heavy": {
                "value": 9.624999999999995,
                "CI Lower": 6.0,
                "CI Upper": 10.0
            }
        },
        "reliability_score": 0.8385166994335949
    },
    {
        "substance": "Ether",
        "method": "smoked",
        "unit": "ml",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 15.0
            },
            "Light": {
                "value": 15.0,
                "CI Lower": 10.0,
                "CI Upper": 30.0
            },
            "Common": {
                "value": 30.0,
                "CI Lower": 15.0,
                "CI Upper": 50.0
            },
            "Strong": {
                "value": 45.0,
                "CI Lower": 20.0,
                "CI Upper": 125.0
            },
            "Heavy": {
                "value": 72.49999999999991,
                "CI Lower": 40.0,
                "CI Upper": 125.0
            }
        },
        "reliability_score": 0.7377785944286908
    },
    {
        "substance": "Ethylphenidate",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 9.3,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 16.25,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 25.0,
                "CI Lower": 20.0,
                "CI Upper": 35.0
            },
            "Strong": {
                "value": 48.75,
                "CI Lower": 30.0,
                "CI Upper": 50.0
            },
            "Heavy": {
                "value": 60.0,
                "CI Lower": 50.0,
                "CI Upper": 75.0
            }
        },
        "reliability_score": 0.8239781620363436
    },
    {
        "substance": "Ethylphenidate",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 7.0,
                "CI Lower": 7.0,
                "CI Upper": 7.0
            },
            "Light": {
                "value": 7.0,
                "CI Lower": 7.0,
                "CI Upper": 9.0
            },
            "Common": {
                "value": 9.0,
                "CI Lower": 7.0,
                "CI Upper": 15.0
            },
            "Strong": {
                "value": 17.5,
                "CI Lower": 9.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 25.0
            }
        },
        "reliability_score": 0.8586529399646392
    },
    {
        "substance": "Ethylphenidate",
        "method": "rectal",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 7.0,
                "CI Lower": 7.0,
                "CI Upper": 7.0
            },
            "Light": {
                "value": 7.0,
                "CI Lower": 7.0,
                "CI Upper": 9.0
            },
            "Common": {
                "value": 8.0,
                "CI Lower": 7.0,
                "CI Upper": 9.0
            },
            "Strong": {
                "value": 9.0,
                "CI Lower": 7.0,
                "CI Upper": 9.0
            },
            "Heavy": {
                "value": 9.0,
                "CI Lower": 9.0,
                "CI Upper": 9.0
            }
        },
        "reliability_score": 0.9604715292478951
    },
    {
        "substance": "Etizolam",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 0.5,
                "CI Lower": 0.25,
                "CI Upper": 0.5
            },
            "Light": {
                "value": 1.0,
                "CI Lower": 0.6,
                "CI Upper": 1.0
            },
            "Common": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Strong": {
                "value": 2.0,
                "CI Lower": 2.0,
                "CI Upper": 2.5
            },
            "Heavy": {
                "value": 4.0,
                "CI Lower": 3.0,
                "CI Upper": 4.0
            }
        },
        "reliability_score": 0.8146186386788314
    },
    {
        "substance": "Etizolam",
        "method": "sublingual",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 0.5,
                "CI Lower": 0.5,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 2.0
            },
            "Common": {
                "value": 2.0,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Strong": {
                "value": 2.0,
                "CI Lower": 2.0,
                "CI Upper": 4.0
            },
            "Heavy": {
                "value": 4.149999999999999,
                "CI Lower": 2.0,
                "CI Upper": 5.0
            }
        },
        "reliability_score": 0.8149558211344243
    },
    {
        "substance": "F-Phenibut",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 250.0,
                "CI Lower": 125.0,
                "CI Upper": 300.0
            },
            "Light": {
                "value": 300.0,
                "CI Lower": 250.0,
                "CI Upper": 500.0
            },
            "Common": {
                "value": 500.0,
                "CI Lower": 300.0,
                "CI Upper": 500.0
            },
            "Strong": {
                "value": 500.0,
                "CI Lower": 500.0,
                "CI Upper": 1500.0
            },
            "Heavy": {
                "value": 1500.0,
                "CI Lower": 500.0,
                "CI Upper": 1500.0
            }
        },
        "reliability_score": 0.7684470696967409
    },
    {
        "substance": "F-Phenibut",
        "method": "rectal",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 600.0,
                "CI Lower": 500.0,
                "CI Upper": 600.0
            },
            "Light": {
                "value": 750.0,
                "CI Lower": 650.0,
                "CI Upper": 1000.0
            },
            "Common": {
                "value": 1300.0,
                "CI Lower": 1000.0,
                "CI Upper": 1400.0
            },
            "Strong": {
                "value": 1600.0,
                "CI Lower": 1400.0,
                "CI Upper": 1800.0
            },
            "Heavy": {
                "value": 2000.0,
                "CI Lower": 1850.0,
                "CI Upper": 2000.0
            }
        },
        "reliability_score": 0.8788871671616987
    },
    {
        "substance": "Fentanyl",
        "method": "sublingual",
        "unit": "\u00b5g",
        "tiers": {
            "Threshold": {
                "value": 33.125,
                "CI Lower": 12.5,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 50.0,
                "CI Lower": 12.5,
                "CI Upper": 125.0
            },
            "Common": {
                "value": 125.0,
                "CI Lower": 50.0,
                "CI Upper": 200.0
            },
            "Strong": {
                "value": 200.0,
                "CI Lower": 100.0,
                "CI Upper": 400.0
            },
            "Heavy": {
                "value": 289.9999999999999,
                "CI Lower": 150.0,
                "CI Upper": 400.0
            }
        },
        "reliability_score": 0.7728137630589078
    },
    {
        "substance": "Fentanyl",
        "method": "transdermal",
        "unit": "\u00b5g",
        "tiers": {
            "Threshold": {
                "value": 19.0,
                "CI Lower": 10.0,
                "CI Upper": 25.0
            },
            "Light": {
                "value": 25.0,
                "CI Lower": 20.0,
                "CI Upper": 50.0
            },
            "Common": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Strong": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Heavy": {
                "value": 100.0,
                "CI Lower": 100.0,
                "CI Upper": 150.0
            }
        },
        "reliability_score": 0.8304353005429401
    },
    {
        "substance": "Flunitrazepam",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 0.725,
                "CI Lower": 0.5,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 1.0
            },
            "Common": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Strong": {
                "value": 1.375,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Heavy": {
                "value": 2.0,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            }
        },
        "reliability_score": 0.879238527115088
    },
    {
        "substance": "Fluoxetine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 40.0,
                "CI Lower": 20.0,
                "CI Upper": 40.0
            },
            "Heavy": {
                "value": 42.99999999999997,
                "CI Lower": 40.0,
                "CI Upper": 60.0
            }
        },
        "reliability_score": 0.852372231022698
    },
    {
        "substance": "Flurazepam",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 22.5,
                "CI Lower": 15.0,
                "CI Upper": 30.0
            },
            "Light": {
                "value": 30.0,
                "CI Lower": 15.0,
                "CI Upper": 30.0
            },
            "Common": {
                "value": 30.0,
                "CI Lower": 30.0,
                "CI Upper": 60.0
            },
            "Strong": {
                "value": 45.0,
                "CI Lower": 30.0,
                "CI Upper": 60.0
            },
            "Heavy": {
                "value": 60.0,
                "CI Lower": 30.0,
                "CI Upper": 60.0
            }
        },
        "reliability_score": 0.8734113300566568
    },
    {
        "substance": "Fluvoxamine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 72.5,
                "CI Lower": 50.0,
                "CI Upper": 200.0
            },
            "Light": {
                "value": 125.0,
                "CI Lower": 50.0,
                "CI Upper": 200.0
            },
            "Common": {
                "value": 200.0,
                "CI Lower": 100.0,
                "CI Upper": 300.0
            },
            "Strong": {
                "value": 237.5,
                "CI Lower": 200.0,
                "CI Upper": 300.0
            },
            "Heavy": {
                "value": 300.0,
                "CI Lower": 200.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.8668514669402787
    },
    {
        "substance": "GBL",
        "method": "oral",
        "unit": "ml",
        "tiers": {
            "Threshold": {
                "value": 0.54,
                "CI Lower": 0.3,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 1.2,
                "CI Lower": 1.0,
                "CI Upper": 1.5
            },
            "Common": {
                "value": 1.5,
                "CI Lower": 1.4,
                "CI Upper": 2.0
            },
            "Strong": {
                "value": 2.25,
                "CI Lower": 2.0,
                "CI Upper": 2.7
            },
            "Heavy": {
                "value": 4.799999999999997,
                "CI Lower": 2.5,
                "CI Upper": 5.0
            }
        },
        "reliability_score": 0.8211233946448948
    },
    {
        "substance": "GHB",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 1.5,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Common": {
                "value": 2.0,
                "CI Lower": 2.0,
                "CI Upper": 2.5
            },
            "Strong": {
                "value": 3.0,
                "CI Lower": 2.5,
                "CI Upper": 3.4
            },
            "Heavy": {
                "value": 4.225000000000001,
                "CI Lower": 3.5,
                "CI Upper": 6.0
            }
        },
        "reliability_score": 0.8481961312645367
    },
    {
        "substance": "GHB",
        "method": "oral",
        "unit": "ml",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 2.0
            },
            "Light": {
                "value": 2.0,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Common": {
                "value": 2.0,
                "CI Lower": 2.0,
                "CI Upper": 3.0
            },
            "Strong": {
                "value": 3.0,
                "CI Lower": 2.0,
                "CI Upper": 5.0
            },
            "Heavy": {
                "value": 5.0,
                "CI Lower": 4.0,
                "CI Upper": 7.0
            }
        },
        "reliability_score": 0.8252914171548327
    },
    {
        "substance": "Gabapentin",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 0.3,
                "CI Lower": 0.3,
                "CI Upper": 1.8
            },
            "Light": {
                "value": 2.4,
                "CI Lower": 0.3,
                "CI Upper": 3.0
            },
            "Common": {
                "value": 3.0,
                "CI Lower": 1.8,
                "CI Upper": 4.0
            },
            "Strong": {
                "value": 4.0,
                "CI Lower": 3.0,
                "CI Upper": 6.0
            },
            "Heavy": {
                "value": 6.139999999999997,
                "CI Lower": 4.0,
                "CI Upper": 7.4
            }
        },
        "reliability_score": 0.8239144752658403
    },
    {
        "substance": "Gabapentin",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 300.0,
                "CI Lower": 100.0,
                "CI Upper": 300.0
            },
            "Light": {
                "value": 600.0,
                "CI Lower": 400.0,
                "CI Upper": 600.0
            },
            "Common": {
                "value": 900.0,
                "CI Lower": 800.0,
                "CI Upper": 900.0
            },
            "Strong": {
                "value": 1200.0,
                "CI Lower": 1200.0,
                "CI Upper": 1600.0
            },
            "Heavy": {
                "value": 2400.0,
                "CI Lower": 2000.0,
                "CI Upper": 2400.0
            }
        },
        "reliability_score": 0.8047433242362112
    },
    {
        "substance": "Ginkgo biloba",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 60.0,
                "CI Lower": 40.0,
                "CI Upper": 60.0
            },
            "Light": {
                "value": 60.0,
                "CI Lower": 60.0,
                "CI Upper": 120.0
            },
            "Common": {
                "value": 120.0,
                "CI Lower": 60.0,
                "CI Upper": 120.0
            },
            "Strong": {
                "value": 140.0,
                "CI Lower": 120.0,
                "CI Upper": 160.0
            },
            "Heavy": {
                "value": 215.99999999999994,
                "CI Lower": 150.0,
                "CI Upper": 270.0
            }
        },
        "reliability_score": 0.857964470305836
    },
    {
        "substance": "Harmala Alkaloids",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 58.5,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 88.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 67.0,
                "CI Upper": 200.0
            },
            "Strong": {
                "value": 150.0,
                "CI Lower": 100.0,
                "CI Upper": 250.0
            },
            "Heavy": {
                "value": 225.0,
                "CI Lower": 100.0,
                "CI Upper": 250.0
            }
        },
        "reliability_score": 0.8518806087849375
    },
    {
        "substance": "Harmaline",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 75.0,
                "CI Lower": 75.0,
                "CI Upper": 150.0
            },
            "Light": {
                "value": 112.5,
                "CI Lower": 75.0,
                "CI Upper": 200.0
            },
            "Common": {
                "value": 162.5,
                "CI Lower": 75.0,
                "CI Upper": 250.0
            },
            "Strong": {
                "value": 237.5,
                "CI Lower": 150.0,
                "CI Upper": 250.0
            },
            "Heavy": {
                "value": 250.0,
                "CI Lower": 175.0,
                "CI Upper": 250.0
            }
        },
        "reliability_score": 0.8750362048421823
    },
    {
        "substance": "Heimia salicifolia",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 2.0,
                "CI Lower": 2.0,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 5.0,
                "CI Lower": 4.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Strong": {
                "value": 10.5,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 22.399999999999977,
                "CI Lower": 14.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.8065548522294312
    },
    {
        "substance": "Heroin",
        "method": "IV",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 0.028749999999999998,
                "CI Lower": 0.025,
                "CI Upper": 0.18
            },
            "Light": {
                "value": 0.16625,
                "CI Lower": 0.025,
                "CI Upper": 0.25
            },
            "Common": {
                "value": 0.25,
                "CI Lower": 0.125,
                "CI Upper": 0.5
            },
            "Strong": {
                "value": 0.42500000000000004,
                "CI Lower": 0.25,
                "CI Upper": 0.5
            },
            "Heavy": {
                "value": 0.5,
                "CI Lower": 0.4,
                "CI Upper": 0.5
            }
        },
        "reliability_score": 0.818417803692655
    },
    {
        "substance": "Heroin",
        "method": "IV",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 4.5,
                "CI Upper": 30.0
            },
            "Light": {
                "value": 35.0,
                "CI Lower": 10.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 30.0,
                "CI Upper": 125.0
            },
            "Strong": {
                "value": 181.25,
                "CI Lower": 100.0,
                "CI Upper": 200.0
            },
            "Heavy": {
                "value": 200.0,
                "CI Lower": 200.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.7666487487097433
    },
    {
        "substance": "Heroin",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 7.0,
                "CI Lower": 3.0,
                "CI Upper": 7.0
            },
            "Light": {
                "value": 7.0,
                "CI Lower": 7.0,
                "CI Upper": 15.0
            },
            "Common": {
                "value": 13.0,
                "CI Lower": 7.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 13.0,
                "CI Upper": 40.0
            },
            "Heavy": {
                "value": 40.0,
                "CI Lower": 20.0,
                "CI Upper": 50.0
            }
        },
        "reliability_score": 0.7788018007523296
    },
    {
        "substance": "Heroin",
        "method": "rectal",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 22.5
            },
            "Light": {
                "value": 30.0,
                "CI Lower": 20.0,
                "CI Upper": 40.0
            },
            "Common": {
                "value": 40.0,
                "CI Lower": 30.0,
                "CI Upper": 80.0
            },
            "Strong": {
                "value": 80.0,
                "CI Lower": 40.0,
                "CI Upper": 80.0
            },
            "Heavy": {
                "value": 80.0,
                "CI Lower": 80.0,
                "CI Upper": 80.0
            }
        },
        "reliability_score": 0.8527142753328683
    },
    {
        "substance": "Heroin",
        "method": "smoked",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 15.0
            },
            "Light": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 250.0
            },
            "Strong": {
                "value": 65.0,
                "CI Lower": 15.0,
                "CI Upper": 400.0
            },
            "Heavy": {
                "value": 325.0,
                "CI Lower": 20.0,
                "CI Upper": 400.0
            }
        },
        "reliability_score": 0.7
    },
    {
        "substance": "Hydergine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 3.75,
                "CI Lower": 3.0,
                "CI Upper": 4.5
            },
            "Light": {
                "value": 4.5,
                "CI Lower": 3.0,
                "CI Upper": 4.5
            },
            "Common": {
                "value": 4.5,
                "CI Lower": 4.5,
                "CI Upper": 5.0
            },
            "Strong": {
                "value": 4.5,
                "CI Lower": 4.5,
                "CI Upper": 5.0
            },
            "Heavy": {
                "value": 5.0,
                "CI Lower": 4.5,
                "CI Upper": 5.0
            }
        },
        "reliability_score": 0.9648292082865018
    },
    {
        "substance": "Hydrocodone",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 2.5,
                "CI Lower": 2.5,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 5.0,
                "CI Lower": 2.5,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 5.0,
                "CI Upper": 15.0
            },
            "Strong": {
                "value": 15.0,
                "CI Lower": 7.5,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 21.999999999999993,
                "CI Lower": 15.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.7966687636681702
    },
    {
        "substance": "Hydrocodone",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 3.75,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 7.5,
                "CI Lower": 5.0,
                "CI Upper": 7.5
            },
            "Common": {
                "value": 12.5,
                "CI Lower": 10.0,
                "CI Upper": 15.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 35.0,
                "CI Lower": 30.0,
                "CI Upper": 40.0
            }
        },
        "reliability_score": 0.801975452774041
    },
    {
        "substance": "Hydromorphone",
        "method": "IV",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.5
            },
            "Light": {
                "value": 1.375,
                "CI Lower": 1.0,
                "CI Upper": 4.0
            },
            "Common": {
                "value": 4.0,
                "CI Lower": 1.0,
                "CI Upper": 4.0
            },
            "Strong": {
                "value": 4.0,
                "CI Lower": 4.0,
                "CI Upper": 7.5
            },
            "Heavy": {
                "value": 7.924999999999999,
                "CI Lower": 4.0,
                "CI Upper": 10.0
            }
        },
        "reliability_score": 0.7877604529417752
    },
    {
        "substance": "Hydromorphone",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 4.0,
                "CI Lower": 4.0,
                "CI Upper": 4.0
            },
            "Light": {
                "value": 4.0,
                "CI Lower": 4.0,
                "CI Upper": 4.0
            },
            "Common": {
                "value": 4.0,
                "CI Lower": 4.0,
                "CI Upper": 4.0
            },
            "Strong": {
                "value": 4.0,
                "CI Lower": 4.0,
                "CI Upper": 4.0
            },
            "Heavy": {
                "value": 4.125,
                "CI Lower": 4.0,
                "CI Upper": 4.5
            }
        },
        "reliability_score": 0.9906976744186047
    },
    {
        "substance": "Hydromorphone",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 1.7000000000000002,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Light": {
                "value": 2.0,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Common": {
                "value": 2.0,
                "CI Lower": 2.0,
                "CI Upper": 4.0
            },
            "Strong": {
                "value": 4.0,
                "CI Lower": 2.0,
                "CI Upper": 5.0
            },
            "Heavy": {
                "value": 4.299999999999999,
                "CI Lower": 4.0,
                "CI Upper": 5.0
            }
        },
        "reliability_score": 0.8723625321781352
    },
    {
        "substance": "Hydroxyzine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 7.125000000000001,
                "CI Lower": 6.25,
                "CI Upper": 25.0
            },
            "Light": {
                "value": 25.0,
                "CI Lower": 6.25,
                "CI Upper": 30.0
            },
            "Common": {
                "value": 30.0,
                "CI Lower": 25.0,
                "CI Upper": 75.0
            },
            "Strong": {
                "value": 75.0,
                "CI Lower": 30.0,
                "CI Upper": 100.0
            },
            "Heavy": {
                "value": 100.0,
                "CI Lower": 75.0,
                "CI Upper": 150.0
            }
        },
        "reliability_score": 0.7735390829490896
    },
    {
        "substance": "IAP",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 8.0,
                "CI Lower": 2.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 17.5,
                "CI Lower": 2.0,
                "CI Upper": 35.0
            },
            "Common": {
                "value": 32.5,
                "CI Lower": 10.0,
                "CI Upper": 50.0
            },
            "Strong": {
                "value": 46.25,
                "CI Lower": 30.0,
                "CI Upper": 50.0
            },
            "Heavy": {
                "value": 50.0,
                "CI Lower": 45.0,
                "CI Upper": 50.0
            }
        },
        "reliability_score": 0.8389807231892938
    },
    {
        "substance": "Ibogaine",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.0
            },
            "Common": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.25
            },
            "Strong": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.4
            },
            "Heavy": {
                "value": 1.4,
                "CI Lower": 1.0,
                "CI Upper": 1.4
            }
        },
        "reliability_score": 0.9562798678374878
    },
    {
        "substance": "Ibogaine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 16.0,
                "CI Lower": 10.0,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 200.0,
                "CI Lower": 100.0,
                "CI Upper": 300.0
            },
            "Common": {
                "value": 300.0,
                "CI Lower": 215.0,
                "CI Upper": 400.0
            },
            "Strong": {
                "value": 477.0,
                "CI Lower": 340.0,
                "CI Upper": 657.0
            },
            "Heavy": {
                "value": 806.0000000000001,
                "CI Lower": 589.0,
                "CI Upper": 900.0
            }
        },
        "reliability_score": 0.799349285976032
    },
    {
        "substance": "Ibuprofen",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 200.0,
                "CI Lower": 102.0,
                "CI Upper": 200.0
            },
            "Light": {
                "value": 400.0,
                "CI Lower": 200.0,
                "CI Upper": 400.0
            },
            "Common": {
                "value": 400.0,
                "CI Lower": 400.0,
                "CI Upper": 600.0
            },
            "Strong": {
                "value": 600.0,
                "CI Lower": 600.0,
                "CI Upper": 800.0
            },
            "Heavy": {
                "value": 800.0,
                "CI Lower": 800.0,
                "CI Upper": 1000.0
            }
        },
        "reliability_score": 0.8725184924243925
    },
    {
        "substance": "Isopropylphenidate",
        "method": "rectal",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 25.0,
                "CI Lower": 25.0,
                "CI Upper": 25.0
            },
            "Light": {
                "value": 25.0,
                "CI Lower": 25.0,
                "CI Upper": 30.0
            },
            "Common": {
                "value": 27.5,
                "CI Lower": 25.0,
                "CI Upper": 30.0
            },
            "Strong": {
                "value": 31.0,
                "CI Lower": 25.0,
                "CI Upper": 34.0
            },
            "Heavy": {
                "value": 34.0,
                "CI Lower": 30.0,
                "CI Upper": 34.0
            }
        },
        "reliability_score": 0.9592317542504483
    },
    {
        "substance": "JWH-018",
        "method": "smoked",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 1.25,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Light": {
                "value": 2.0,
                "CI Lower": 2.0,
                "CI Upper": 5.0
            },
            "Common": {
                "value": 5.0,
                "CI Lower": 2.0,
                "CI Upper": 10.0
            },
            "Strong": {
                "value": 10.0,
                "CI Lower": 5.0,
                "CI Upper": 15.0
            },
            "Heavy": {
                "value": 15.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            }
        },
        "reliability_score": 0.767580579214763
    },
    {
        "substance": "Kava",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 1.525,
                "CI Lower": 1.0,
                "CI Upper": 3.2
            },
            "Light": {
                "value": 3.25,
                "CI Lower": 1.6,
                "CI Upper": 6.25
            },
            "Common": {
                "value": 6.25,
                "CI Lower": 3.2,
                "CI Upper": 6.25
            },
            "Strong": {
                "value": 6.25,
                "CI Lower": 6.25,
                "CI Upper": 10.0
            },
            "Heavy": {
                "value": 10.0,
                "CI Lower": 6.25,
                "CI Upper": 15.5
            }
        },
        "reliability_score": 0.8335243078391408
    },
    {
        "substance": "Kava",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 139.5,
                "CI Lower": 21.0,
                "CI Upper": 225.0
            },
            "Light": {
                "value": 287.5,
                "CI Lower": 200.0,
                "CI Upper": 500.0
            },
            "Common": {
                "value": 750.0,
                "CI Lower": 423.0,
                "CI Upper": 1000.0
            },
            "Strong": {
                "value": 1200.0,
                "CI Lower": 900.0,
                "CI Upper": 1540.0
            },
            "Heavy": {
                "value": 1800.0,
                "CI Lower": 1350.0,
                "CI Upper": 2250.0
            }
        },
        "reliability_score": 0.78995996596261
    },
    {
        "substance": "Ketamine",
        "method": "IM",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 25.0,
                "CI Lower": 1.75,
                "CI Upper": 40.0
            },
            "Light": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 50.0
            },
            "Common": {
                "value": 67.5,
                "CI Lower": 55.0,
                "CI Upper": 100.0
            },
            "Strong": {
                "value": 100.0,
                "CI Lower": 100.0,
                "CI Upper": 120.0
            },
            "Heavy": {
                "value": 150.0,
                "CI Lower": 125.0,
                "CI Upper": 180.0
            }
        },
        "reliability_score": 0.8476123139598588
    },
    {
        "substance": "Ketamine",
        "method": "IV",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 12.200000000000001,
                "CI Lower": 8.0,
                "CI Upper": 45.0
            },
            "Light": {
                "value": 45.0,
                "CI Lower": 20.0,
                "CI Upper": 50.0
            },
            "Common": {
                "value": 50.0,
                "CI Lower": 45.0,
                "CI Upper": 75.0
            },
            "Strong": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 111.7
            },
            "Heavy": {
                "value": 120.34499999999998,
                "CI Lower": 100.0,
                "CI Upper": 150.0
            }
        },
        "reliability_score": 0.8358366349675959
    },
    {
        "substance": "Ketamine",
        "method": "insufflated",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 0.11125,
                "CI Lower": 0.1,
                "CI Upper": 0.5
            },
            "Light": {
                "value": 0.3725,
                "CI Lower": 0.1,
                "CI Upper": 1.0
            },
            "Common": {
                "value": 0.5,
                "CI Lower": 0.125,
                "CI Upper": 1.0
            },
            "Strong": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 2.0
            },
            "Heavy": {
                "value": 1.549999999999999,
                "CI Lower": 0.5,
                "CI Upper": 2.0
            }
        },
        "reliability_score": 0.7583192180149005
    },
    {
        "substance": "Ketamine",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 20.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 36.75,
                "CI Lower": 30.0,
                "CI Upper": 40.0
            },
            "Common": {
                "value": 70.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Strong": {
                "value": 150.0,
                "CI Lower": 100.0,
                "CI Upper": 180.0
            },
            "Heavy": {
                "value": 250.0,
                "CI Lower": 250.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.760151028880456
    },
    {
        "substance": "Ketamine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 43.0,
                "CI Lower": 0.88,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 200.0
            },
            "Common": {
                "value": 200.0,
                "CI Lower": 100.0,
                "CI Upper": 350.0
            },
            "Strong": {
                "value": 362.5,
                "CI Lower": 200.0,
                "CI Upper": 450.0
            },
            "Heavy": {
                "value": 589.9999999999999,
                "CI Lower": 375.0,
                "CI Upper": 720.0
            }
        },
        "reliability_score": 0.7598198791325206
    },
    {
        "substance": "Ketamine",
        "method": "rectal",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 35.0,
                "CI Lower": 35.0,
                "CI Upper": 50.0
            },
            "Light": {
                "value": 67.5,
                "CI Lower": 35.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 75.0,
                "CI Upper": 100.0
            },
            "Strong": {
                "value": 100.0,
                "CI Lower": 100.0,
                "CI Upper": 140.0
            },
            "Heavy": {
                "value": 170.0,
                "CI Lower": 140.0,
                "CI Upper": 250.0
            }
        },
        "reliability_score": 0.8474561150870861
    },
    {
        "substance": "Kratom",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 2.0,
                "CI Lower": 2.0,
                "CI Upper": 2.6
            },
            "Common": {
                "value": 4.0,
                "CI Lower": 3.5,
                "CI Upper": 4.0
            },
            "Strong": {
                "value": 6.0,
                "CI Lower": 5.25,
                "CI Upper": 7.0
            },
            "Heavy": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 10.0
            }
        },
        "reliability_score": 0.8091857353540328
    },
    {
        "substance": "Kratom",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 15.0,
                "CI Lower": 2.5,
                "CI Upper": 300.0
            },
            "Light": {
                "value": 500.0,
                "CI Lower": 50.0,
                "CI Upper": 750.0
            },
            "Common": {
                "value": 1250.0,
                "CI Lower": 750.0,
                "CI Upper": 2000.0
            },
            "Strong": {
                "value": 2000.0,
                "CI Lower": 1800.0,
                "CI Upper": 2000.0
            },
            "Heavy": {
                "value": 2000.0,
                "CI Lower": 2000.0,
                "CI Upper": 2600.0
            }
        },
        "reliability_score": 0.8024308562292
    },
    {
        "substance": "L-Ascorbic Acid",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 260.0,
                "CI Lower": 260.0,
                "CI Upper": 1000.0
            },
            "Light": {
                "value": 1000.0,
                "CI Lower": 260.0,
                "CI Upper": 1000.0
            },
            "Common": {
                "value": 1000.0,
                "CI Lower": 1000.0,
                "CI Upper": 1000.0
            },
            "Strong": {
                "value": 1000.0,
                "CI Lower": 1000.0,
                "CI Upper": 1000.0
            },
            "Heavy": {
                "value": 1000.0,
                "CI Lower": 1000.0,
                "CI Upper": 1000.0
            }
        },
        "reliability_score": 0.9040126811742302
    },
    {
        "substance": "L-Theanine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 400.0,
                "CI Lower": 400.0,
                "CI Upper": 400.0
            },
            "Light": {
                "value": 400.0,
                "CI Lower": 400.0,
                "CI Upper": 400.0
            },
            "Common": {
                "value": 400.0,
                "CI Lower": 400.0,
                "CI Upper": 400.0
            },
            "Strong": {
                "value": 400.0,
                "CI Lower": 400.0,
                "CI Upper": 400.0
            },
            "Heavy": {
                "value": 500.0,
                "CI Lower": 500.0,
                "CI Upper": 500.0
            }
        },
        "reliability_score": 0.9481209187951589
    },
    {
        "substance": "LSD",
        "method": "oral",
        "unit": "\u00b5g",
        "tiers": {
            "Threshold": {
                "value": 11.7096,
                "CI Lower": 7.14,
                "CI Upper": 25.0
            },
            "Light": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 130.0,
                "CI Lower": 100.0,
                "CI Upper": 150.0
            },
            "Strong": {
                "value": 200.0,
                "CI Lower": 160.0,
                "CI Upper": 250.0
            },
            "Heavy": {
                "value": 300.0,
                "CI Lower": 250.0,
                "CI Upper": 320.0
            }
        },
        "reliability_score": 0.8196994680177874
    },
    {
        "substance": "LSD",
        "method": "sublingual",
        "unit": "\u00b5g",
        "tiers": {
            "Threshold": {
                "value": 75.0,
                "CI Lower": 25.0,
                "CI Upper": 105.0
            },
            "Light": {
                "value": 102.5,
                "CI Lower": 75.0,
                "CI Upper": 150.0
            },
            "Common": {
                "value": 150.0,
                "CI Lower": 100.0,
                "CI Upper": 220.0
            },
            "Strong": {
                "value": 210.0,
                "CI Lower": 150.0,
                "CI Upper": 300.0
            },
            "Heavy": {
                "value": 300.0,
                "CI Lower": 200.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.8470711238975557
    },
    {
        "substance": "LSZ",
        "method": "oral",
        "unit": "\u00b5g",
        "tiers": {
            "Threshold": {
                "value": 150.0,
                "CI Lower": 150.0,
                "CI Upper": 150.0
            },
            "Light": {
                "value": 150.0,
                "CI Lower": 150.0,
                "CI Upper": 225.0
            },
            "Common": {
                "value": 187.5,
                "CI Lower": 150.0,
                "CI Upper": 300.0
            },
            "Strong": {
                "value": 300.0,
                "CI Lower": 150.0,
                "CI Upper": 450.0
            },
            "Heavy": {
                "value": 367.4999999999999,
                "CI Lower": 300.0,
                "CI Upper": 450.0
            }
        },
        "reliability_score": 0.8724070320544479
    },
    {
        "substance": "Lamotrigine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 25.0,
                "CI Lower": 25.0,
                "CI Upper": 75.0
            },
            "Light": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 125.0
            },
            "Common": {
                "value": 150.0,
                "CI Lower": 100.0,
                "CI Upper": 200.0
            },
            "Strong": {
                "value": 200.0,
                "CI Lower": 150.0,
                "CI Upper": 200.0
            },
            "Heavy": {
                "value": 229.99999999999972,
                "CI Lower": 200.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.8578731502997257
    },
    {
        "substance": "Leonotis leonurus",
        "method": "smoked",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 0.375,
                "CI Lower": 0.25,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 0.5,
                "CI Lower": 0.25,
                "CI Upper": 1.0
            },
            "Common": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 2.0
            },
            "Strong": {
                "value": 1.5,
                "CI Lower": 1.0,
                "CI Upper": 3.0
            },
            "Heavy": {
                "value": 2.5,
                "CI Lower": 1.0,
                "CI Upper": 3.0
            }
        },
        "reliability_score": 0.7907833030143678
    },
    {
        "substance": "Lidocaine",
        "method": "sublingual",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 30.0
            },
            "Common": {
                "value": 25.0,
                "CI Lower": 20.0,
                "CI Upper": 30.0
            },
            "Strong": {
                "value": 30.0,
                "CI Lower": 20.0,
                "CI Upper": 30.0
            },
            "Heavy": {
                "value": 30.0,
                "CI Lower": 30.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.9367544467966324
    },
    {
        "substance": "Lisdexamfetamine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 20.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 30.0,
                "CI Lower": 20.0,
                "CI Upper": 40.0
            },
            "Common": {
                "value": 50.0,
                "CI Lower": 40.0,
                "CI Upper": 50.0
            },
            "Strong": {
                "value": 60.0,
                "CI Lower": 50.0,
                "CI Upper": 60.0
            },
            "Heavy": {
                "value": 78.49999999999994,
                "CI Lower": 70.0,
                "CI Upper": 90.0
            }
        },
        "reliability_score": 0.8810506716722875
    },
    {
        "substance": "Lithium",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 142.5,
                "CI Lower": 90.0,
                "CI Upper": 300.0
            },
            "Light": {
                "value": 487.5,
                "CI Lower": 300.0,
                "CI Upper": 900.0
            },
            "Common": {
                "value": 900.0,
                "CI Lower": 600.0,
                "CI Upper": 900.0
            },
            "Strong": {
                "value": 900.0,
                "CI Lower": 900.0,
                "CI Upper": 1200.0
            },
            "Heavy": {
                "value": 1214.9999999999998,
                "CI Lower": 1200.0,
                "CI Upper": 1500.0
            }
        },
        "reliability_score": 0.8547096414166446
    },
    {
        "substance": "Loperamide",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 3.8000000000000003,
                "CI Lower": 2.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 12.0,
                "CI Lower": 6.0,
                "CI Upper": 30.0
            },
            "Common": {
                "value": 30.0,
                "CI Lower": 12.0,
                "CI Upper": 40.0
            },
            "Strong": {
                "value": 40.0,
                "CI Lower": 30.0,
                "CI Upper": 80.0
            },
            "Heavy": {
                "value": 84.8,
                "CI Lower": 40.0,
                "CI Upper": 96.0
            }
        },
        "reliability_score": 0.7516713880920054
    },
    {
        "substance": "Loratadine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 8.0,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 5.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            }
        },
        "reliability_score": 0.8912238872147427
    },
    {
        "substance": "Lorazepam",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 0.5,
                "CI Lower": 0.5,
                "CI Upper": 0.5
            },
            "Light": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.0
            },
            "Common": {
                "value": 2.0,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Strong": {
                "value": 3.0,
                "CI Lower": 2.0,
                "CI Upper": 3.0
            },
            "Heavy": {
                "value": 5.0,
                "CI Lower": 4.0,
                "CI Upper": 6.0
            }
        },
        "reliability_score": 0.8018976502622226
    },
    {
        "substance": "Lorazepam",
        "method": "sublingual",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 0.5,
                "CI Lower": 0.5,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 1.25
            },
            "Common": {
                "value": 1.125,
                "CI Lower": 0.5,
                "CI Upper": 2.0
            },
            "Strong": {
                "value": 2.0,
                "CI Lower": 1.0,
                "CI Upper": 3.0
            },
            "Heavy": {
                "value": 2.4499999999999993,
                "CI Lower": 1.25,
                "CI Upper": 3.0
            }
        },
        "reliability_score": 0.839703505369475
    },
    {
        "substance": "Lotus/Lily - Nymphaea nouchali var caerulea",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 2.0
            },
            "Light": {
                "value": 2.0,
                "CI Lower": 1.0,
                "CI Upper": 4.0
            },
            "Common": {
                "value": 4.0,
                "CI Lower": 2.5,
                "CI Upper": 7.0
            },
            "Strong": {
                "value": 7.0,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Heavy": {
                "value": 10.0,
                "CI Lower": 9.0,
                "CI Upper": 14.0
            }
        },
        "reliability_score": 0.7883146229445785
    },
    {
        "substance": "Lotus/Lily - Nymphaea nouchali var caerulea",
        "method": "smoked",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 0.3875,
                "CI Lower": 0.25,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 0.75,
                "CI Lower": 0.25,
                "CI Upper": 1.0
            },
            "Common": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 2.0
            },
            "Strong": {
                "value": 2.0,
                "CI Lower": 1.0,
                "CI Upper": 4.0
            },
            "Heavy": {
                "value": 2.8999999999999986,
                "CI Lower": 1.5,
                "CI Upper": 4.0
            }
        },
        "reliability_score": 0.782093269673537
    },
    {
        "substance": "MBDB",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 158.5,
                "CI Lower": 150.0,
                "CI Upper": 180.0
            },
            "Light": {
                "value": 180.0,
                "CI Lower": 150.0,
                "CI Upper": 200.0
            },
            "Common": {
                "value": 185.0,
                "CI Lower": 167.0,
                "CI Upper": 250.0
            },
            "Strong": {
                "value": 200.0,
                "CI Lower": 180.0,
                "CI Upper": 250.0
            },
            "Heavy": {
                "value": 250.0,
                "CI Lower": 200.0,
                "CI Upper": 250.0
            }
        },
        "reliability_score": 0.9519975477745348
    },
    {
        "substance": "MDA",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 33.5,
                "CI Lower": 20.0,
                "CI Upper": 80.0
            },
            "Light": {
                "value": 57.5,
                "CI Lower": 20.0,
                "CI Upper": 80.0
            },
            "Common": {
                "value": 80.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Strong": {
                "value": 87.5,
                "CI Lower": 80.0,
                "CI Upper": 100.0
            },
            "Heavy": {
                "value": 100.0,
                "CI Lower": 80.0,
                "CI Upper": 100.0
            }
        },
        "reliability_score": 0.8955844438347424
    },
    {
        "substance": "MDA",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 31.0,
                "CI Lower": 15.0,
                "CI Upper": 50.0
            },
            "Light": {
                "value": 80.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 100.0,
                "CI Upper": 125.0
            },
            "Strong": {
                "value": 127.5,
                "CI Lower": 125.0,
                "CI Upper": 150.0
            },
            "Heavy": {
                "value": 175.0,
                "CI Lower": 150.0,
                "CI Upper": 200.0
            }
        },
        "reliability_score": 0.874377595169509
    },
    {
        "substance": "MDAI",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 25.0,
                "CI Lower": 25.0,
                "CI Upper": 35.0
            },
            "Light": {
                "value": 25.0,
                "CI Lower": 25.0,
                "CI Upper": 50.0
            },
            "Common": {
                "value": 45.0,
                "CI Lower": 25.0,
                "CI Upper": 75.0
            },
            "Strong": {
                "value": 50.0,
                "CI Lower": 35.0,
                "CI Upper": 100.0
            },
            "Heavy": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            }
        },
        "reliability_score": 0.8412549213361247
    },
    {
        "substance": "MDAI",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 44.75000000000001,
                "CI Lower": 25.0,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 100.0,
                "CI Lower": 100.0,
                "CI Upper": 124.0
            },
            "Common": {
                "value": 145.0,
                "CI Lower": 100.0,
                "CI Upper": 185.0
            },
            "Strong": {
                "value": 200.0,
                "CI Lower": 150.0,
                "CI Upper": 220.0
            },
            "Heavy": {
                "value": 300.0,
                "CI Lower": 200.0,
                "CI Upper": 350.0
            }
        },
        "reliability_score": 0.8572707043739294
    },
    {
        "substance": "MDMA",
        "method": "IV",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 80.0
            },
            "Light": {
                "value": 52.5,
                "CI Lower": 20.0,
                "CI Upper": 104.0
            },
            "Common": {
                "value": 90.0,
                "CI Lower": 20.0,
                "CI Upper": 200.0
            },
            "Strong": {
                "value": 157.25,
                "CI Lower": 60.0,
                "CI Upper": 200.0
            },
            "Heavy": {
                "value": 200.0,
                "CI Lower": 100.0,
                "CI Upper": 200.0
            }
        },
        "reliability_score": 0.7946456314179691
    },
    {
        "substance": "MDMA",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 20.0,
                "CI Lower": 15.0,
                "CI Upper": 25.0
            },
            "Light": {
                "value": 30.75,
                "CI Lower": 25.0,
                "CI Upper": 50.0
            },
            "Common": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 75.0
            },
            "Strong": {
                "value": 100.0,
                "CI Lower": 75.0,
                "CI Upper": 100.0
            },
            "Heavy": {
                "value": 122.5,
                "CI Lower": 100.0,
                "CI Upper": 150.0
            }
        },
        "reliability_score": 0.8298199771024686
    },
    {
        "substance": "MDMA",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 0.07385,
                "CI Lower": 0.05,
                "CI Upper": 0.25
            },
            "Light": {
                "value": 0.15625,
                "CI Lower": 0.05,
                "CI Upper": 1.0
            },
            "Common": {
                "value": 0.25,
                "CI Lower": 0.103,
                "CI Upper": 1.4
            },
            "Strong": {
                "value": 1.0,
                "CI Lower": 0.25,
                "CI Upper": 1.5
            },
            "Heavy": {
                "value": 1.4549999999999998,
                "CI Lower": 0.25,
                "CI Upper": 1.5
            }
        },
        "reliability_score": 0.7121301970981089
    },
    {
        "substance": "MDMA",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 40.0,
                "CI Lower": 25.0,
                "CI Upper": 50.0
            },
            "Light": {
                "value": 80.0,
                "CI Lower": 62.5,
                "CI Upper": 90.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 100.0,
                "CI Upper": 100.0
            },
            "Strong": {
                "value": 130.0,
                "CI Lower": 125.0,
                "CI Upper": 150.0
            },
            "Heavy": {
                "value": 200.0,
                "CI Lower": 200.0,
                "CI Upper": 200.0
            }
        },
        "reliability_score": 0.8707969523472343
    },
    {
        "substance": "MDMA",
        "method": "rectal",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 87.5,
                "CI Lower": 75.0,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 100.0,
                "CI Lower": 75.0,
                "CI Upper": 193.0
            },
            "Common": {
                "value": 125.0,
                "CI Lower": 100.0,
                "CI Upper": 200.0
            },
            "Strong": {
                "value": 200.0,
                "CI Lower": 100.0,
                "CI Upper": 300.0
            },
            "Heavy": {
                "value": 250.0,
                "CI Lower": 193.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.8650525088490764
    },
    {
        "substance": "MDMA",
        "method": "smoked",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 27.65,
                "CI Lower": 20.0,
                "CI Upper": 75.0
            },
            "Light": {
                "value": 53.125,
                "CI Lower": 20.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 87.5,
                "CI Lower": 37.0,
                "CI Upper": 187.5
            },
            "Strong": {
                "value": 100.0,
                "CI Lower": 62.5,
                "CI Upper": 225.0
            },
            "Heavy": {
                "value": 208.12499999999997,
                "CI Lower": 100.0,
                "CI Upper": 225.0
            }
        },
        "reliability_score": 0.7963143512172342
    },
    {
        "substance": "MDPHP",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 12.0,
                "CI Lower": 12.0,
                "CI Upper": 12.0
            },
            "Light": {
                "value": 12.0,
                "CI Lower": 12.0,
                "CI Upper": 15.0
            },
            "Common": {
                "value": 15.0,
                "CI Lower": 12.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 15.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            }
        },
        "reliability_score": 0.9333169733847009
    },
    {
        "substance": "MDPV",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 4.0
            },
            "Light": {
                "value": 4.0,
                "CI Lower": 3.0,
                "CI Upper": 6.0
            },
            "Common": {
                "value": 7.25,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Strong": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 12.0
            },
            "Heavy": {
                "value": 15.0,
                "CI Lower": 10.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.813667896967581
    },
    {
        "substance": "MDPV",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 4.75,
                "CI Lower": 1.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 1.0,
                "CI Upper": 15.0
            },
            "Common": {
                "value": 14.5,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 16.25,
                "CI Lower": 10.0,
                "CI Upper": 30.0
            },
            "Heavy": {
                "value": 30.75,
                "CI Lower": 15.0,
                "CI Upper": 33.0
            }
        },
        "reliability_score": 0.8292215486975862
    },
    {
        "substance": "MET",
        "method": "smoked",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 13.25,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 16.25,
                "CI Lower": 10.0,
                "CI Upper": 27.0
            },
            "Common": {
                "value": 22.5,
                "CI Lower": 15.0,
                "CI Upper": 30.0
            },
            "Strong": {
                "value": 30.0,
                "CI Lower": 20.0,
                "CI Upper": 35.0
            },
            "Heavy": {
                "value": 31.75,
                "CI Lower": 30.0,
                "CI Upper": 35.0
            }
        },
        "reliability_score": 0.9010598552324731
    },
    {
        "substance": "MIPT",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.1,
                "CI Lower": 2.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 20.0,
                "CI Lower": 2.0,
                "CI Upper": 25.0
            },
            "Common": {
                "value": 22.0,
                "CI Lower": 20.0,
                "CI Upper": 40.0
            },
            "Strong": {
                "value": 34.75,
                "CI Lower": 20.0,
                "CI Upper": 50.0
            },
            "Heavy": {
                "value": 45.499999999999986,
                "CI Lower": 24.0,
                "CI Upper": 50.0
            }
        },
        "reliability_score": 0.843598363333949
    },
    {
        "substance": "Magnesium Glycinate",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 1600.0,
                "CI Lower": 1600.0,
                "CI Upper": 1600.0
            },
            "Light": {
                "value": 1600.0,
                "CI Lower": 1600.0,
                "CI Upper": 1600.0
            },
            "Common": {
                "value": 1600.0,
                "CI Lower": 1600.0,
                "CI Upper": 1600.0
            },
            "Strong": {
                "value": 1600.0,
                "CI Lower": 1600.0,
                "CI Upper": 1600.0
            },
            "Heavy": {
                "value": 1600.0,
                "CI Lower": 1600.0,
                "CI Upper": 1600.0
            }
        },
        "reliability_score": 1.0
    },
    {
        "substance": "Magnesium Hydroxide",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 67.0,
                "CI Lower": 67.0,
                "CI Upper": 67.0
            },
            "Light": {
                "value": 67.0,
                "CI Lower": 67.0,
                "CI Upper": 135.0
            },
            "Common": {
                "value": 101.0,
                "CI Lower": 67.0,
                "CI Upper": 135.0
            },
            "Strong": {
                "value": 135.0,
                "CI Lower": 67.0,
                "CI Upper": 135.0
            },
            "Heavy": {
                "value": 135.0,
                "CI Lower": 135.0,
                "CI Upper": 135.0
            }
        },
        "reliability_score": 0.8935470886675991
    },
    {
        "substance": "Magnesium L-Threonate",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 96.0,
                "CI Lower": 96.0,
                "CI Upper": 96.0
            },
            "Light": {
                "value": 96.0,
                "CI Lower": 96.0,
                "CI Upper": 96.0
            },
            "Common": {
                "value": 96.0,
                "CI Lower": 96.0,
                "CI Upper": 96.0
            },
            "Strong": {
                "value": 96.0,
                "CI Lower": 96.0,
                "CI Upper": 96.0
            },
            "Heavy": {
                "value": 96.0,
                "CI Lower": 96.0,
                "CI Upper": 96.0
            }
        },
        "reliability_score": 1.0
    },
    {
        "substance": "Meclizine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 12.5,
                "CI Lower": 12.5,
                "CI Upper": 25.0
            },
            "Light": {
                "value": 25.0,
                "CI Lower": 12.5,
                "CI Upper": 50.0
            },
            "Common": {
                "value": 50.0,
                "CI Lower": 25.0,
                "CI Upper": 50.0
            },
            "Strong": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Heavy": {
                "value": 109.99999999999997,
                "CI Lower": 50.0,
                "CI Upper": 150.0
            }
        },
        "reliability_score": 0.7864979248469126
    },
    {
        "substance": "Melatonin",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 1.2300000000000002,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Light": {
                "value": 3.0,
                "CI Lower": 3.0,
                "CI Upper": 3.0
            },
            "Common": {
                "value": 3.0,
                "CI Lower": 3.0,
                "CI Upper": 5.0
            },
            "Strong": {
                "value": 6.0,
                "CI Lower": 5.0,
                "CI Upper": 6.0
            },
            "Heavy": {
                "value": 10.0,
                "CI Lower": 9.0,
                "CI Upper": 10.0
            }
        },
        "reliability_score": 0.8310264262181823
    },
    {
        "substance": "Memantine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 11.5,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 47.5,
                "CI Lower": 20.0,
                "CI Upper": 50.0
            },
            "Common": {
                "value": 62.5,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Strong": {
                "value": 100.0,
                "CI Lower": 75.0,
                "CI Upper": 150.0
            },
            "Heavy": {
                "value": 150.0,
                "CI Lower": 120.0,
                "CI Upper": 200.0
            }
        },
        "reliability_score": 0.8042757635813296
    },
    {
        "substance": "Meperidine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 33.5,
                "CI Lower": 20.0,
                "CI Upper": 150.0
            },
            "Light": {
                "value": 112.5,
                "CI Lower": 20.0,
                "CI Upper": 250.0
            },
            "Common": {
                "value": 175.0,
                "CI Lower": 50.0,
                "CI Upper": 500.0
            },
            "Strong": {
                "value": 250.0,
                "CI Lower": 150.0,
                "CI Upper": 500.0
            },
            "Heavy": {
                "value": 500.0,
                "CI Lower": 200.0,
                "CI Upper": 500.0
            }
        },
        "reliability_score": 0.7686608405253241
    },
    {
        "substance": "Mescaline",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 86.4,
                "CI Lower": 20.0,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 175.0,
                "CI Lower": 100.0,
                "CI Upper": 200.0
            },
            "Common": {
                "value": 250.0,
                "CI Lower": 200.0,
                "CI Upper": 300.0
            },
            "Strong": {
                "value": 350.0,
                "CI Lower": 300.0,
                "CI Upper": 500.0
            },
            "Heavy": {
                "value": 600.0,
                "CI Lower": 500.0,
                "CI Upper": 666.0
            }
        },
        "reliability_score": 0.8284734939100089
    },
    {
        "substance": "Metaxalone",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 400.0,
                "CI Lower": 400.0,
                "CI Upper": 800.0
            },
            "Light": {
                "value": 800.0,
                "CI Lower": 400.0,
                "CI Upper": 800.0
            },
            "Common": {
                "value": 800.0,
                "CI Lower": 800.0,
                "CI Upper": 1200.0
            },
            "Strong": {
                "value": 1500.0,
                "CI Lower": 800.0,
                "CI Upper": 3200.0
            },
            "Heavy": {
                "value": 3200.0,
                "CI Lower": 1600.0,
                "CI Upper": 3600.0
            }
        },
        "reliability_score": 0.7750524661038265
    },
    {
        "substance": "Methadone",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 4.45,
                "CI Lower": 4.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 5.25,
                "CI Lower": 4.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Strong": {
                "value": 10.0,
                "CI Lower": 6.0,
                "CI Upper": 30.0
            },
            "Heavy": {
                "value": 20.99999999999998,
                "CI Lower": 10.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.7759464349759191
    },
    {
        "substance": "Methadone",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 40.0,
                "CI Lower": 20.0,
                "CI Upper": 60.0
            },
            "Heavy": {
                "value": 71.89999999999998,
                "CI Lower": 60.0,
                "CI Upper": 80.0
            }
        },
        "reliability_score": 0.7480918218543613
    },
    {
        "substance": "Methallylescaline",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 6.2,
                "CI Lower": 5.0,
                "CI Upper": 15.0
            },
            "Light": {
                "value": 12.75,
                "CI Lower": 6.0,
                "CI Upper": 30.0
            },
            "Common": {
                "value": 30.0,
                "CI Lower": 12.0,
                "CI Upper": 50.0
            },
            "Strong": {
                "value": 48.75,
                "CI Lower": 30.0,
                "CI Upper": 65.0
            },
            "Heavy": {
                "value": 64.35,
                "CI Lower": 45.0,
                "CI Upper": 65.0
            }
        },
        "reliability_score": 0.8084151313261878
    },
    {
        "substance": "Methamphetamine",
        "method": "IV",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 11.5,
                "CI Lower": 5.0,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 100.0,
                "CI Lower": 5.0,
                "CI Upper": 200.0
            },
            "Common": {
                "value": 182.0,
                "CI Lower": 50.0,
                "CI Upper": 250.0
            },
            "Strong": {
                "value": 250.0,
                "CI Lower": 160.0,
                "CI Upper": 500.0
            },
            "Heavy": {
                "value": 500.0,
                "CI Lower": 250.0,
                "CI Upper": 500.0
            }
        },
        "reliability_score": 0.766453890819849
    },
    {
        "substance": "Methamphetamine",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 21.0,
                "CI Lower": 10.0,
                "CI Upper": 30.0
            },
            "Light": {
                "value": 30.0,
                "CI Lower": 25.0,
                "CI Upper": 45.0
            },
            "Common": {
                "value": 45.0,
                "CI Lower": 30.0,
                "CI Upper": 150.0
            },
            "Strong": {
                "value": 150.0,
                "CI Lower": 45.0,
                "CI Upper": 200.0
            },
            "Heavy": {
                "value": 200.0,
                "CI Lower": 150.0,
                "CI Upper": 250.0
            }
        },
        "reliability_score": 0.7477496020041825
    },
    {
        "substance": "Methamphetamine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 15.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 15.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 30.0,
                "CI Lower": 30.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.8632230018806089
    },
    {
        "substance": "Methamphetamine",
        "method": "rectal",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 7.5
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 10.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 15.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 30.0,
                "CI Lower": 30.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.8159760066421098
    },
    {
        "substance": "Methamphetamine",
        "method": "smoked",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 0.275,
                "CI Lower": 0.25,
                "CI Upper": 0.5
            },
            "Light": {
                "value": 0.5,
                "CI Lower": 0.25,
                "CI Upper": 0.75
            },
            "Common": {
                "value": 0.6,
                "CI Lower": 0.3,
                "CI Upper": 1.5
            },
            "Strong": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 1.5
            },
            "Heavy": {
                "value": 1.5,
                "CI Lower": 0.75,
                "CI Upper": 1.5
            }
        },
        "reliability_score": 0.8282870662045136
    },
    {
        "substance": "Methamphetamine",
        "method": "smoked",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 13.5,
                "CI Lower": 10.0,
                "CI Upper": 50.0
            },
            "Light": {
                "value": 50.0,
                "CI Lower": 10.0,
                "CI Upper": 150.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 250.0
            },
            "Strong": {
                "value": 225.0,
                "CI Lower": 100.0,
                "CI Upper": 300.0
            },
            "Heavy": {
                "value": 264.99999999999994,
                "CI Lower": 200.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.7903926072183425
    },
    {
        "substance": "Methaqualone",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 230.0,
                "CI Lower": 200.0,
                "CI Upper": 300.0
            },
            "Light": {
                "value": 300.0,
                "CI Lower": 200.0,
                "CI Upper": 300.0
            },
            "Common": {
                "value": 300.0,
                "CI Lower": 293.0,
                "CI Upper": 300.0
            },
            "Strong": {
                "value": 300.0,
                "CI Lower": 300.0,
                "CI Upper": 450.0
            },
            "Heavy": {
                "value": 404.9999999999999,
                "CI Lower": 300.0,
                "CI Upper": 450.0
            }
        },
        "reliability_score": 0.9430290491456519
    },
    {
        "substance": "Methiopropamine",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 25.0
            },
            "Light": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 30.0
            },
            "Common": {
                "value": 25.0,
                "CI Lower": 15.0,
                "CI Upper": 75.0
            },
            "Strong": {
                "value": 50.0,
                "CI Lower": 25.0,
                "CI Upper": 75.0
            },
            "Heavy": {
                "value": 75.0,
                "CI Lower": 30.0,
                "CI Upper": 75.0
            }
        },
        "reliability_score": 0.7968211353070263
    },
    {
        "substance": "Methocarbamol",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 500.0,
                "CI Lower": 500.0,
                "CI Upper": 750.0
            },
            "Light": {
                "value": 750.0,
                "CI Lower": 500.0,
                "CI Upper": 2250.0
            },
            "Common": {
                "value": 750.0,
                "CI Lower": 500.0,
                "CI Upper": 2500.0
            },
            "Strong": {
                "value": 2250.0,
                "CI Lower": 750.0,
                "CI Upper": 3000.0
            },
            "Heavy": {
                "value": 3000.0,
                "CI Lower": 2250.0,
                "CI Upper": 3000.0
            }
        },
        "reliability_score": 0.7959741237692013
    },
    {
        "substance": "Methoxetamine",
        "method": "IM",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 13.6,
                "CI Lower": 8.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 20.0,
                "CI Lower": 15.0,
                "CI Upper": 23.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 15.0,
                "CI Upper": 32.0
            },
            "Strong": {
                "value": 30.0,
                "CI Lower": 20.0,
                "CI Upper": 40.0
            },
            "Heavy": {
                "value": 41.99999999999999,
                "CI Lower": 30.0,
                "CI Upper": 50.0
            }
        },
        "reliability_score": 0.8726227539167606
    },
    {
        "substance": "Methoxetamine",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 9.700000000000001,
                "CI Lower": 7.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 15.25,
                "CI Lower": 15.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 25.0,
                "CI Lower": 23.0,
                "CI Upper": 40.0
            },
            "Strong": {
                "value": 50.0,
                "CI Lower": 44.0,
                "CI Upper": 50.0
            },
            "Heavy": {
                "value": 95.75000000000003,
                "CI Lower": 75.0,
                "CI Upper": 100.0
            }
        },
        "reliability_score": 0.7906437610060237
    },
    {
        "substance": "Methoxetamine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 11.100000000000001,
                "CI Lower": 1.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 30.0
            },
            "Common": {
                "value": 35.0,
                "CI Lower": 25.0,
                "CI Upper": 50.0
            },
            "Strong": {
                "value": 50.0,
                "CI Lower": 38.0,
                "CI Upper": 55.0
            },
            "Heavy": {
                "value": 75.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            }
        },
        "reliability_score": 0.8400548309692453
    },
    {
        "substance": "Methoxetamine",
        "method": "sublingual",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 13.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 20.0,
                "CI Lower": 15.0,
                "CI Upper": 50.0
            },
            "Common": {
                "value": 50.0,
                "CI Lower": 20.0,
                "CI Upper": 60.0
            },
            "Strong": {
                "value": 60.0,
                "CI Lower": 50.0,
                "CI Upper": 95.0
            },
            "Heavy": {
                "value": 98.99999999999999,
                "CI Lower": 60.0,
                "CI Upper": 150.0
            }
        },
        "reliability_score": 0.7907005514910397
    },
    {
        "substance": "Methoxphenidine",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 24.5,
                "CI Lower": 20.0,
                "CI Upper": 50.0
            },
            "Light": {
                "value": 30.0,
                "CI Lower": 20.0,
                "CI Upper": 50.0
            },
            "Common": {
                "value": 50.0,
                "CI Lower": 30.0,
                "CI Upper": 50.0
            },
            "Strong": {
                "value": 50.0,
                "CI Lower": 30.0,
                "CI Upper": 80.0
            },
            "Heavy": {
                "value": 66.49999999999997,
                "CI Lower": 50.0,
                "CI Upper": 80.0
            }
        },
        "reliability_score": 0.8832251583757715
    },
    {
        "substance": "Methoxphenidine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 22.150000000000006,
                "CI Lower": 10.0,
                "CI Upper": 40.0
            },
            "Light": {
                "value": 45.0,
                "CI Lower": 37.0,
                "CI Upper": 85.0
            },
            "Common": {
                "value": 87.5,
                "CI Lower": 40.0,
                "CI Upper": 100.0
            },
            "Strong": {
                "value": 100.0,
                "CI Lower": 90.0,
                "CI Upper": 150.0
            },
            "Heavy": {
                "value": 150.0,
                "CI Lower": 110.0,
                "CI Upper": 150.0
            }
        },
        "reliability_score": 0.8518528620041919
    },
    {
        "substance": "Methoxpropamine",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 34.5,
                "CI Lower": 30.0,
                "CI Upper": 40.0
            },
            "Light": {
                "value": 40.0,
                "CI Lower": 30.0,
                "CI Upper": 40.0
            },
            "Common": {
                "value": 40.0,
                "CI Lower": 40.0,
                "CI Upper": 60.0
            },
            "Strong": {
                "value": 55.0,
                "CI Lower": 40.0,
                "CI Upper": 3040.0
            },
            "Heavy": {
                "value": 1698.9999999999968,
                "CI Lower": 40.0,
                "CI Upper": 3040.0
            }
        },
        "reliability_score": 0.7
    },
    {
        "substance": "Methyl-B12",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 16.0,
                "CI Lower": 16.0,
                "CI Upper": 16.0
            },
            "Light": {
                "value": 16.0,
                "CI Lower": 16.0,
                "CI Upper": 30.66
            },
            "Common": {
                "value": 23.33,
                "CI Lower": 16.0,
                "CI Upper": 30.66
            },
            "Strong": {
                "value": 30.66,
                "CI Lower": 16.0,
                "CI Upper": 30.66
            },
            "Heavy": {
                "value": 30.66,
                "CI Lower": 30.66,
                "CI Upper": 30.66
            }
        },
        "reliability_score": 0.9006451125202133
    },
    {
        "substance": "Methylone",
        "method": "IV",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 35.0,
                "CI Lower": 20.0,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 87.5,
                "CI Lower": 20.0,
                "CI Upper": 150.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 250.0
            },
            "Strong": {
                "value": 190.0,
                "CI Lower": 100.0,
                "CI Upper": 250.0
            },
            "Heavy": {
                "value": 250.0,
                "CI Lower": 150.0,
                "CI Upper": 250.0
            }
        },
        "reliability_score": 0.8257772874262415
    },
    {
        "substance": "Methylone",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 21.0,
                "CI Lower": 5.0,
                "CI Upper": 30.0
            },
            "Light": {
                "value": 30.0,
                "CI Lower": 25.0,
                "CI Upper": 50.0
            },
            "Common": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 90.0
            },
            "Strong": {
                "value": 100.0,
                "CI Lower": 75.0,
                "CI Upper": 120.0
            },
            "Heavy": {
                "value": 145.99999999999994,
                "CI Lower": 100.0,
                "CI Upper": 150.0
            }
        },
        "reliability_score": 0.8279393489092517
    },
    {
        "substance": "Methylone",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 34.050000000000004,
                "CI Lower": 25.0,
                "CI Upper": 50.0
            },
            "Light": {
                "value": 87.5,
                "CI Lower": 60.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 148.5,
                "CI Lower": 125.0,
                "CI Upper": 150.0
            },
            "Strong": {
                "value": 200.0,
                "CI Lower": 175.0,
                "CI Upper": 200.0
            },
            "Heavy": {
                "value": 250.0,
                "CI Lower": 250.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.8512160016672286
    },
    {
        "substance": "Methylphenidate",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 7.000000000000002,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 15.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 25.0,
                "CI Lower": 20.0,
                "CI Upper": 30.0
            },
            "Strong": {
                "value": 40.0,
                "CI Lower": 30.0,
                "CI Upper": 45.0
            },
            "Heavy": {
                "value": 60.0,
                "CI Lower": 50.0,
                "CI Upper": 65.0
            }
        },
        "reliability_score": 0.8275353712491156
    },
    {
        "substance": "Methylphenidate",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 20.0,
                "CI Lower": 18.0,
                "CI Upper": 27.0
            },
            "Common": {
                "value": 38.0,
                "CI Lower": 30.0,
                "CI Upper": 40.0
            },
            "Strong": {
                "value": 59.0,
                "CI Lower": 54.0,
                "CI Upper": 72.0
            },
            "Heavy": {
                "value": 108.0,
                "CI Lower": 80.0,
                "CI Upper": 108.0
            }
        },
        "reliability_score": 0.7992127125807371
    },
    {
        "substance": "Mimosa tenuiflora",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 3.0,
                "CI Lower": 2.0,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 7.0,
                "CI Lower": 5.0,
                "CI Upper": 8.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 9.0,
                "CI Upper": 11.0
            },
            "Strong": {
                "value": 14.0,
                "CI Lower": 12.0,
                "CI Upper": 17.0
            },
            "Heavy": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 25.0
            }
        },
        "reliability_score": 0.8424932702925625
    },
    {
        "substance": "Mirtazapine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 7.5,
                "CI Lower": 3.75,
                "CI Upper": 15.0
            },
            "Light": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 15.0
            },
            "Common": {
                "value": 30.0,
                "CI Lower": 15.0,
                "CI Upper": 30.0
            },
            "Strong": {
                "value": 45.0,
                "CI Lower": 30.0,
                "CI Upper": 45.0
            },
            "Heavy": {
                "value": 48.500000000000014,
                "CI Lower": 45.0,
                "CI Upper": 60.0
            }
        },
        "reliability_score": 0.8446697303985815
    },
    {
        "substance": "Moclobemide",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 73.75,
                "CI Lower": 20.0,
                "CI Upper": 75.0
            },
            "Light": {
                "value": 100.0,
                "CI Lower": 75.0,
                "CI Upper": 150.0
            },
            "Common": {
                "value": 150.0,
                "CI Lower": 150.0,
                "CI Upper": 150.0
            },
            "Strong": {
                "value": 150.0,
                "CI Lower": 150.0,
                "CI Upper": 300.0
            },
            "Heavy": {
                "value": 300.0,
                "CI Lower": 200.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.8531872342022724
    },
    {
        "substance": "Modafinil",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 39.0,
                "CI Lower": 30.0,
                "CI Upper": 200.0
            },
            "Light": {
                "value": 125.0,
                "CI Lower": 30.0,
                "CI Upper": 200.0
            },
            "Common": {
                "value": 200.0,
                "CI Lower": 50.0,
                "CI Upper": 200.0
            },
            "Strong": {
                "value": 200.0,
                "CI Lower": 200.0,
                "CI Upper": 400.0
            },
            "Heavy": {
                "value": 309.9999999999998,
                "CI Lower": 200.0,
                "CI Upper": 400.0
            }
        },
        "reliability_score": 0.8254263765447016
    },
    {
        "substance": "Modafinil",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 100.0,
                "CI Lower": 100.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 200.0,
                "CI Lower": 125.0,
                "CI Upper": 200.0
            },
            "Strong": {
                "value": 200.0,
                "CI Lower": 200.0,
                "CI Upper": 200.0
            },
            "Heavy": {
                "value": 400.0,
                "CI Lower": 400.0,
                "CI Upper": 500.0
            }
        },
        "reliability_score": 0.8250123160967826
    },
    {
        "substance": "Morning Glory",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 2.0,
                "CI Lower": 1.0,
                "CI Upper": 3.0
            },
            "Light": {
                "value": 6.0,
                "CI Lower": 5.0,
                "CI Upper": 6.0
            },
            "Common": {
                "value": 7.5,
                "CI Lower": 7.0,
                "CI Upper": 9.0
            },
            "Strong": {
                "value": 10.0,
                "CI Lower": 9.0,
                "CI Upper": 11.0
            },
            "Heavy": {
                "value": 15.0,
                "CI Lower": 13.5,
                "CI Upper": 15.5
            }
        },
        "reliability_score": 0.8621854828785513
    },
    {
        "substance": "Morning Glory",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 3.0250000000000004,
                "CI Lower": 1.0,
                "CI Upper": 80.0
            },
            "Light": {
                "value": 70.0,
                "CI Lower": 1.0,
                "CI Upper": 150.0
            },
            "Common": {
                "value": 125.0,
                "CI Lower": 40.0,
                "CI Upper": 350.0
            },
            "Strong": {
                "value": 350.0,
                "CI Lower": 100.0,
                "CI Upper": 450.0
            },
            "Heavy": {
                "value": 487.5,
                "CI Lower": 350.0,
                "CI Upper": 600.0
            }
        },
        "reliability_score": 0.7246187284641901
    },
    {
        "substance": "Morphine",
        "method": "IV",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 4.8,
                "CI Lower": 4.0,
                "CI Upper": 15.0
            },
            "Light": {
                "value": 15.0,
                "CI Lower": 5.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 16.0,
                "CI Lower": 10.0,
                "CI Upper": 30.0
            },
            "Strong": {
                "value": 30.0,
                "CI Lower": 16.0,
                "CI Upper": 30.0
            },
            "Heavy": {
                "value": 35.99999999999998,
                "CI Lower": 30.0,
                "CI Upper": 60.0
            }
        },
        "reliability_score": 0.8024169682659072
    },
    {
        "substance": "Morphine",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 8.5,
                "CI Lower": 5.0,
                "CI Upper": 12.5
            },
            "Light": {
                "value": 15.0,
                "CI Lower": 12.5,
                "CI Upper": 30.0
            },
            "Common": {
                "value": 30.0,
                "CI Lower": 20.0,
                "CI Upper": 30.0
            },
            "Strong": {
                "value": 41.25,
                "CI Lower": 30.0,
                "CI Upper": 50.0
            },
            "Heavy": {
                "value": 60.0,
                "CI Lower": 50.0,
                "CI Upper": 90.0
            }
        },
        "reliability_score": 0.8213301181964412
    },
    {
        "substance": "Morphine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 7.5,
                "CI Upper": 15.0
            },
            "Light": {
                "value": 30.0,
                "CI Lower": 15.0,
                "CI Upper": 30.0
            },
            "Common": {
                "value": 55.0,
                "CI Lower": 30.0,
                "CI Upper": 60.0
            },
            "Strong": {
                "value": 70.0,
                "CI Lower": 60.0,
                "CI Upper": 100.0
            },
            "Heavy": {
                "value": 120.0,
                "CI Lower": 100.0,
                "CI Upper": 180.0
            }
        },
        "reliability_score": 0.7880509809492056
    },
    {
        "substance": "Mugwort",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 1.775,
                "CI Lower": 1.5,
                "CI Upper": 2.5
            },
            "Light": {
                "value": 2.5,
                "CI Lower": 1.5,
                "CI Upper": 2.5
            },
            "Common": {
                "value": 2.5,
                "CI Lower": 2.0,
                "CI Upper": 3.0
            },
            "Strong": {
                "value": 2.625,
                "CI Lower": 2.5,
                "CI Upper": 7.0
            },
            "Heavy": {
                "value": 7.0,
                "CI Lower": 2.5,
                "CI Upper": 7.0
            }
        },
        "reliability_score": 0.8270349818404739
    },
    {
        "substance": "Mushrooms",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 1.75,
                "CI Lower": 1.75,
                "CI Upper": 2.0
            },
            "Common": {
                "value": 3.0,
                "CI Lower": 2.5,
                "CI Upper": 3.0
            },
            "Strong": {
                "value": 3.5,
                "CI Lower": 3.5,
                "CI Upper": 3.5
            },
            "Heavy": {
                "value": 6.0,
                "CI Lower": 5.5,
                "CI Upper": 7.0
            }
        },
        "reliability_score": 0.8468290021457456
    },
    {
        "substance": "Mushrooms",
        "method": "smoked",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 0.21250000000000002,
                "CI Lower": 0.1,
                "CI Upper": 0.5
            },
            "Light": {
                "value": 0.5,
                "CI Lower": 0.3333,
                "CI Upper": 1.0
            },
            "Common": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 1.0
            },
            "Strong": {
                "value": 1.4,
                "CI Lower": 1.0,
                "CI Upper": 3.0
            },
            "Heavy": {
                "value": 3.0,
                "CI Lower": 2.0,
                "CI Upper": 3.0
            }
        },
        "reliability_score": 0.7786905982184338
    },
    {
        "substance": "Mushrooms - P. azurescens",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 1.835,
                "CI Lower": 1.7,
                "CI Upper": 3.5
            },
            "Light": {
                "value": 3.0,
                "CI Lower": 1.7,
                "CI Upper": 3.5
            },
            "Common": {
                "value": 3.5,
                "CI Lower": 2.0,
                "CI Upper": 3.5
            },
            "Strong": {
                "value": 3.5,
                "CI Lower": 3.0,
                "CI Upper": 3.5
            },
            "Heavy": {
                "value": 3.5,
                "CI Lower": 3.5,
                "CI Upper": 3.5
            }
        },
        "reliability_score": 0.9337151558080197
    },
    {
        "substance": "Mushrooms - P. cubensis",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 2.0,
                "CI Lower": 2.0,
                "CI Upper": 2.0
            },
            "Common": {
                "value": 3.0,
                "CI Lower": 3.0,
                "CI Upper": 3.5
            },
            "Strong": {
                "value": 4.0,
                "CI Lower": 4.0,
                "CI Upper": 4.5
            },
            "Heavy": {
                "value": 7.0,
                "CI Lower": 7.0,
                "CI Upper": 9.0
            }
        },
        "reliability_score": 0.8278166502235027
    },
    {
        "substance": "Mushrooms - P. cyanescens",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 0.785,
                "CI Lower": 0.25,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 1.1,
                "CI Lower": 0.95,
                "CI Upper": 2.0
            },
            "Common": {
                "value": 2.4,
                "CI Lower": 1.45,
                "CI Upper": 3.5
            },
            "Strong": {
                "value": 3.75,
                "CI Lower": 2.65,
                "CI Upper": 5.0
            },
            "Heavy": {
                "value": 6.0,
                "CI Lower": 4.0,
                "CI Upper": 6.0
            }
        },
        "reliability_score": 0.8168631357958462
    },
    {
        "substance": "Mushrooms - P. mexicana",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 2.0
            },
            "Light": {
                "value": 3.0,
                "CI Lower": 1.5,
                "CI Upper": 5.0
            },
            "Common": {
                "value": 5.0,
                "CI Lower": 3.3,
                "CI Upper": 7.0
            },
            "Strong": {
                "value": 9.5,
                "CI Lower": 5.0,
                "CI Upper": 13.6
            },
            "Heavy": {
                "value": 15.0,
                "CI Lower": 10.0,
                "CI Upper": 15.0
            }
        },
        "reliability_score": 0.7859535428533122
    },
    {
        "substance": "Mushrooms - P. semilanceata",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 0.8300000000000001,
                "CI Lower": 0.3,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 1.475,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Common": {
                "value": 2.0,
                "CI Lower": 1.5,
                "CI Upper": 3.0
            },
            "Strong": {
                "value": 3.5,
                "CI Lower": 2.5,
                "CI Upper": 5.0
            },
            "Heavy": {
                "value": 5.850000000000001,
                "CI Lower": 3.5,
                "CI Upper": 7.0
            }
        },
        "reliability_score": 0.8100661555727597
    },
    {
        "substance": "Mushrooms - P. subaeruginosa",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 0.4,
                "CI Lower": 0.4,
                "CI Upper": 1.5
            },
            "Light": {
                "value": 1.5,
                "CI Lower": 0.4,
                "CI Upper": 3.0
            },
            "Common": {
                "value": 2.8,
                "CI Lower": 1.5,
                "CI Upper": 3.75
            },
            "Strong": {
                "value": 3.5,
                "CI Lower": 2.0,
                "CI Upper": 4.0
            },
            "Heavy": {
                "value": 4.199999999999999,
                "CI Lower": 3.5,
                "CI Upper": 5.0
            }
        },
        "reliability_score": 0.836935614668608
    },
    {
        "substance": "Mushrooms - P. tampanensis",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 2.8000000000000003,
                "CI Lower": 2.5,
                "CI Upper": 8.0
            },
            "Light": {
                "value": 8.0,
                "CI Lower": 4.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 8.0,
                "CI Upper": 15.0
            },
            "Strong": {
                "value": 15.0,
                "CI Lower": 10.0,
                "CI Upper": 15.0
            },
            "Heavy": {
                "value": 17.39999999999999,
                "CI Lower": 15.0,
                "CI Upper": 25.0
            }
        },
        "reliability_score": 0.8585514171620678
    },
    {
        "substance": "Mushrooms - Panaeolus cyanescens",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 0.6000000000000001,
                "CI Lower": 0.07,
                "CI Upper": 1.2
            },
            "Light": {
                "value": 1.2,
                "CI Lower": 1.0,
                "CI Upper": 2.1
            },
            "Common": {
                "value": 2.1,
                "CI Lower": 1.2,
                "CI Upper": 3.5
            },
            "Strong": {
                "value": 3.5,
                "CI Lower": 2.1,
                "CI Upper": 6.0
            },
            "Heavy": {
                "value": 6.0,
                "CI Lower": 3.5,
                "CI Upper": 7.0
            }
        },
        "reliability_score": 0.8021903670647832
    },
    {
        "substance": "N-Ethylhexedrone",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 7.5,
                "CI Lower": 5.0,
                "CI Upper": 15.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 5.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 10.0,
                "CI Upper": 37.0
            },
            "Strong": {
                "value": 22.5,
                "CI Lower": 15.0,
                "CI Upper": 50.0
            },
            "Heavy": {
                "value": 43.5,
                "CI Lower": 20.0,
                "CI Upper": 50.0
            }
        },
        "reliability_score": 0.8025916639748634
    },
    {
        "substance": "N-Ethylpentedrone",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 13.0,
                "CI Lower": 5.0,
                "CI Upper": 15.0
            },
            "Light": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 15.0,
                "CI Upper": 27.0
            },
            "Strong": {
                "value": 22.0,
                "CI Lower": 20.0,
                "CI Upper": 27.0
            },
            "Heavy": {
                "value": 27.599999999999998,
                "CI Lower": 22.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.9063604626370241
    },
    {
        "substance": "N-acetylcysteine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 600.0,
                "CI Lower": 600.0,
                "CI Upper": 600.0
            },
            "Light": {
                "value": 600.0,
                "CI Lower": 600.0,
                "CI Upper": 600.0
            },
            "Common": {
                "value": 600.0,
                "CI Lower": 600.0,
                "CI Upper": 600.0
            },
            "Strong": {
                "value": 600.0,
                "CI Lower": 600.0,
                "CI Upper": 600.0
            },
            "Heavy": {
                "value": 600.0,
                "CI Lower": 600.0,
                "CI Upper": 1200.0
            }
        },
        "reliability_score": 0.9515237081316803
    },
    {
        "substance": "Naloxone",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 0.725,
                "CI Lower": 0.5,
                "CI Upper": 2.0
            },
            "Light": {
                "value": 1.25,
                "CI Lower": 0.5,
                "CI Upper": 8.0
            },
            "Common": {
                "value": 4.0,
                "CI Lower": 1.0,
                "CI Upper": 8.0
            },
            "Strong": {
                "value": 8.0,
                "CI Lower": 2.0,
                "CI Upper": 16.0
            },
            "Heavy": {
                "value": 12.399999999999991,
                "CI Lower": 6.0,
                "CI Upper": 16.0
            }
        },
        "reliability_score": 0.718362417473881
    },
    {
        "substance": "Naloxone",
        "method": "sublingual",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 0.25,
                "CI Lower": 0.125,
                "CI Upper": 0.5
            },
            "Light": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 2.0
            },
            "Common": {
                "value": 2.0,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Strong": {
                "value": 2.0,
                "CI Lower": 2.0,
                "CI Upper": 3.0
            },
            "Heavy": {
                "value": 5.0,
                "CI Lower": 3.0,
                "CI Upper": 6.0
            }
        },
        "reliability_score": 0.7798105167592517
    },
    {
        "substance": "Naltrexone",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 3.66,
                "CI Lower": 2.4,
                "CI Upper": 15.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 2.4,
                "CI Upper": 50.0
            },
            "Common": {
                "value": 50.0,
                "CI Lower": 5.0,
                "CI Upper": 50.0
            },
            "Strong": {
                "value": 50.0,
                "CI Lower": 15.0,
                "CI Upper": 50.0
            },
            "Heavy": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 50.0
            }
        },
        "reliability_score": 0.7982167550684434
    },
    {
        "substance": "Naproxen",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 500.0,
                "CI Lower": 440.0,
                "CI Upper": 500.0
            },
            "Light": {
                "value": 500.0,
                "CI Lower": 500.0,
                "CI Upper": 500.0
            },
            "Common": {
                "value": 500.0,
                "CI Lower": 500.0,
                "CI Upper": 500.0
            },
            "Strong": {
                "value": 500.0,
                "CI Lower": 500.0,
                "CI Upper": 500.0
            },
            "Heavy": {
                "value": 625.0,
                "CI Lower": 500.0,
                "CI Upper": 1000.0
            }
        },
        "reliability_score": 0.9332881938072848
    },
    {
        "substance": "Noopept",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 1.25,
                "CI Lower": 1.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 1.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 1.5,
                "CI Upper": 30.0
            },
            "Strong": {
                "value": 27.5,
                "CI Lower": 10.0,
                "CI Upper": 60.0
            },
            "Heavy": {
                "value": 45.0,
                "CI Lower": 20.0,
                "CI Upper": 60.0
            }
        },
        "reliability_score": 0.7448650540089148
    },
    {
        "substance": "Nutmeg",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 2.0,
                "CI Upper": 8.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 9.5,
                "CI Upper": 15.0
            },
            "Common": {
                "value": 16.0,
                "CI Lower": 15.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 22.0,
                "CI Lower": 20.0,
                "CI Upper": 25.0
            },
            "Heavy": {
                "value": 34.94999999999999,
                "CI Lower": 30.0,
                "CI Upper": 40.0
            }
        },
        "reliability_score": 0.8499654320511332
    },
    {
        "substance": "O-Desmethyltramadol",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 15.0
            },
            "Light": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 15.0
            },
            "Common": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 25.0,
                "CI Lower": 20.0,
                "CI Upper": 50.0
            },
            "Heavy": {
                "value": 70.99999999999987,
                "CI Lower": 40.0,
                "CI Upper": 80.0
            }
        },
        "reliability_score": 0.7880609252215187
    },
    {
        "substance": "O-Desmethyltramadol",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 19.700000000000003,
                "CI Lower": 17.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 30.0,
                "CI Lower": 30.0,
                "CI Upper": 42.0
            },
            "Common": {
                "value": 50.0,
                "CI Lower": 42.0,
                "CI Upper": 50.0
            },
            "Strong": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 60.0
            },
            "Heavy": {
                "value": 90.0,
                "CI Lower": 85.0,
                "CI Upper": 100.0
            }
        },
        "reliability_score": 0.8661009800468371
    },
    {
        "substance": "O-Desmethyltramadol",
        "method": "rectal",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 35.0,
                "CI Lower": 30.0,
                "CI Upper": 40.0
            },
            "Common": {
                "value": 50.0,
                "CI Lower": 45.0,
                "CI Upper": 50.0
            },
            "Strong": {
                "value": 65.0,
                "CI Lower": 60.0,
                "CI Upper": 70.0
            },
            "Heavy": {
                "value": 90.0,
                "CI Lower": 90.0,
                "CI Upper": 100.0
            }
        },
        "reliability_score": 0.8728737110932798
    },
    {
        "substance": "Olanzapine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 2.5,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 5.25,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 7.5,
                "CI Upper": 10.0
            },
            "Strong": {
                "value": 15.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.8333380298198294
    },
    {
        "substance": "Omeprazole",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 40.0
            },
            "Strong": {
                "value": 25.0,
                "CI Lower": 20.0,
                "CI Upper": 40.0
            },
            "Heavy": {
                "value": 40.0,
                "CI Lower": 20.0,
                "CI Upper": 40.0
            }
        },
        "reliability_score": 0.891455915952005
    },
    {
        "substance": "Ondansetron",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 2.0,
                "CI Lower": 2.0,
                "CI Upper": 2.0
            },
            "Light": {
                "value": 2.0,
                "CI Lower": 2.0,
                "CI Upper": 4.0
            },
            "Common": {
                "value": 4.0,
                "CI Lower": 2.0,
                "CI Upper": 4.0
            },
            "Strong": {
                "value": 4.0,
                "CI Lower": 4.0,
                "CI Upper": 8.0
            },
            "Heavy": {
                "value": 826.3999999999971,
                "CI Lower": 4.0,
                "CI Upper": 4100.0
            }
        },
        "reliability_score": 0.7
    },
    {
        "substance": "Oxycodone",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 30.0,
                "CI Lower": 20.0,
                "CI Upper": 40.0
            },
            "Heavy": {
                "value": 40.0,
                "CI Lower": 40.0,
                "CI Upper": 60.0
            }
        },
        "reliability_score": 0.8069442984835413
    },
    {
        "substance": "Oxycodone",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 7.5,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 15.0,
                "CI Lower": 11.25,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 26.25,
                "CI Lower": 20.0,
                "CI Upper": 30.0
            },
            "Heavy": {
                "value": 40.0,
                "CI Lower": 40.0,
                "CI Upper": 50.0
            }
        },
        "reliability_score": 0.7923347271923364
    },
    {
        "substance": "Oxymorphone",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 4.625,
                "CI Lower": 2.5,
                "CI Upper": 7.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 6.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 12.75,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 30.0
            },
            "Heavy": {
                "value": 40.0,
                "CI Lower": 30.0,
                "CI Upper": 40.0
            }
        },
        "reliability_score": 0.8146838742051892
    },
    {
        "substance": "Oxymorphone",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 8.25,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 5.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 10.0,
                "CI Upper": 30.0
            },
            "Strong": {
                "value": 30.0,
                "CI Lower": 12.5,
                "CI Upper": 40.0
            },
            "Heavy": {
                "value": 33.5,
                "CI Lower": 30.0,
                "CI Upper": 40.0
            }
        },
        "reliability_score": 0.838466220966519
    },
    {
        "substance": "Paracetamol",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 500.0,
                "CI Lower": 500.0,
                "CI Upper": 500.0
            },
            "Light": {
                "value": 500.0,
                "CI Lower": 500.0,
                "CI Upper": 600.0
            },
            "Common": {
                "value": 600.0,
                "CI Lower": 500.0,
                "CI Upper": 900.0
            },
            "Strong": {
                "value": 900.0,
                "CI Lower": 600.0,
                "CI Upper": 1000.0
            },
            "Heavy": {
                "value": 1000.0,
                "CI Lower": 1000.0,
                "CI Upper": 1000.0
            }
        },
        "reliability_score": 0.9127053898249222
    },
    {
        "substance": "Paroxetine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 20.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Common": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 25.0
            },
            "Strong": {
                "value": 30.0,
                "CI Lower": 25.0,
                "CI Upper": 40.0
            },
            "Heavy": {
                "value": 60.0,
                "CI Lower": 40.0,
                "CI Upper": 60.0
            }
        },
        "reliability_score": 0.8450322771087633
    },
    {
        "substance": "Pharmaceuticals",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 2.375,
                "CI Lower": 0.75,
                "CI Upper": 10.0
            },
            "Light": {
                "value": 9.0,
                "CI Lower": 0.75,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 4.0,
                "CI Upper": 15.0
            },
            "Strong": {
                "value": 13.5,
                "CI Lower": 10.0,
                "CI Upper": 25.0
            },
            "Heavy": {
                "value": 20.0,
                "CI Lower": 10.0,
                "CI Upper": 25.0
            }
        },
        "reliability_score": 0.8275909033823603
    },
    {
        "substance": "Phenazepam",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 0.75,
                "CI Lower": 0.5,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 2.0
            },
            "Common": {
                "value": 2.0,
                "CI Lower": 1.0,
                "CI Upper": 5.0
            },
            "Strong": {
                "value": 3.25,
                "CI Lower": 1.0,
                "CI Upper": 5.0
            },
            "Heavy": {
                "value": 5.0,
                "CI Lower": 2.0,
                "CI Upper": 5.0
            }
        },
        "reliability_score": 0.7803803287499045
    },
    {
        "substance": "Phenibut",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.5
            },
            "Common": {
                "value": 2.0,
                "CI Lower": 1.5,
                "CI Upper": 2.0
            },
            "Strong": {
                "value": 3.0,
                "CI Lower": 2.0,
                "CI Upper": 3.0
            },
            "Heavy": {
                "value": 4.0,
                "CI Lower": 3.0,
                "CI Upper": 5.0
            }
        },
        "reliability_score": 0.8421340537136359
    },
    {
        "substance": "Phenibut",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 200.0,
                "CI Lower": 150.0,
                "CI Upper": 250.0
            },
            "Light": {
                "value": 425.0,
                "CI Lower": 250.0,
                "CI Upper": 500.0
            },
            "Common": {
                "value": 500.0,
                "CI Lower": 500.0,
                "CI Upper": 500.0
            },
            "Strong": {
                "value": 500.0,
                "CI Lower": 500.0,
                "CI Upper": 650.0
            },
            "Heavy": {
                "value": 750.0,
                "CI Lower": 600.0,
                "CI Upper": 800.0
            }
        },
        "reliability_score": 0.8989395225455075
    },
    {
        "substance": "Phentermine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 30.0,
                "CI Lower": 30.0,
                "CI Upper": 37.5
            },
            "Light": {
                "value": 30.0,
                "CI Lower": 30.0,
                "CI Upper": 37.5
            },
            "Common": {
                "value": 37.5,
                "CI Lower": 30.0,
                "CI Upper": 37.5
            },
            "Strong": {
                "value": 37.5,
                "CI Lower": 37.5,
                "CI Upper": 40.0
            },
            "Heavy": {
                "value": 38.625,
                "CI Lower": 37.5,
                "CI Upper": 40.0
            }
        },
        "reliability_score": 0.9666780742969012
    },
    {
        "substance": "Phenylpiracetam",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 200.0
            },
            "Common": {
                "value": 200.0,
                "CI Lower": 100.0,
                "CI Upper": 300.0
            },
            "Strong": {
                "value": 300.0,
                "CI Lower": 200.0,
                "CI Upper": 400.0
            },
            "Heavy": {
                "value": 409.9999999999998,
                "CI Lower": 300.0,
                "CI Upper": 500.0
            }
        },
        "reliability_score": 0.8203816451550867
    },
    {
        "substance": "Piperazines - BZP",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 75.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 100.0,
                "CI Lower": 85.0,
                "CI Upper": 110.0
            },
            "Common": {
                "value": 125.0,
                "CI Lower": 100.0,
                "CI Upper": 200.0
            },
            "Strong": {
                "value": 200.0,
                "CI Lower": 140.0,
                "CI Upper": 225.0
            },
            "Heavy": {
                "value": 300.0,
                "CI Lower": 200.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.8655731119790453
    },
    {
        "substance": "Piperazines - TFMPP",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 20.0,
                "CI Lower": 12.0,
                "CI Upper": 50.0
            },
            "Light": {
                "value": 50.0,
                "CI Lower": 20.0,
                "CI Upper": 60.0
            },
            "Common": {
                "value": 60.0,
                "CI Lower": 50.0,
                "CI Upper": 90.0
            },
            "Strong": {
                "value": 90.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Heavy": {
                "value": 100.0,
                "CI Lower": 75.0,
                "CI Upper": 100.0
            }
        },
        "reliability_score": 0.8675414207767149
    },
    {
        "substance": "Piracetam",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 1.6,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Common": {
                "value": 2.4,
                "CI Lower": 2.0,
                "CI Upper": 2.5
            },
            "Strong": {
                "value": 3.0,
                "CI Lower": 2.5,
                "CI Upper": 3.0
            },
            "Heavy": {
                "value": 4.949999999999996,
                "CI Lower": 3.0,
                "CI Upper": 5.0
            }
        },
        "reliability_score": 0.8556206614101816
    },
    {
        "substance": "Piracetam",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 500.0,
                "CI Lower": 400.0,
                "CI Upper": 800.0
            },
            "Light": {
                "value": 800.0,
                "CI Lower": 800.0,
                "CI Upper": 800.0
            },
            "Common": {
                "value": 1500.0,
                "CI Lower": 800.0,
                "CI Upper": 1600.0
            },
            "Strong": {
                "value": 2362.5,
                "CI Lower": 1600.0,
                "CI Upper": 2400.0
            },
            "Heavy": {
                "value": 4275.0,
                "CI Lower": 2400.0,
                "CI Upper": 4800.0
            }
        },
        "reliability_score": 0.7973991889626508
    },
    {
        "substance": "Poppies - Opium",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 2.3,
                "CI Lower": 2.0,
                "CI Upper": 9.5
            },
            "Light": {
                "value": 9.75,
                "CI Lower": 3.0,
                "CI Upper": 125.0
            },
            "Common": {
                "value": 125.0,
                "CI Lower": 10.0,
                "CI Upper": 300.0
            },
            "Strong": {
                "value": 325.0,
                "CI Lower": 125.0,
                "CI Upper": 437.5
            },
            "Heavy": {
                "value": 481.24999999999994,
                "CI Lower": 350.0,
                "CI Upper": 550.0
            }
        },
        "reliability_score": 0.7001189776925578
    },
    {
        "substance": "Prednisone",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 8.0,
                "CI Lower": 2.0,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 20.0,
                "CI Lower": 2.0,
                "CI Upper": 40.0
            },
            "Common": {
                "value": 40.0,
                "CI Lower": 20.0,
                "CI Upper": 60.0
            },
            "Strong": {
                "value": 60.0,
                "CI Lower": 40.0,
                "CI Upper": 60.0
            },
            "Heavy": {
                "value": 67.5,
                "CI Lower": 60.0,
                "CI Upper": 90.0
            }
        },
        "reliability_score": 0.8223441688565569
    },
    {
        "substance": "Pregabalin",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 50.0,
                "CI Lower": 25.0,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 150.0,
                "CI Lower": 150.0,
                "CI Upper": 200.0
            },
            "Common": {
                "value": 300.0,
                "CI Lower": 200.0,
                "CI Upper": 300.0
            },
            "Strong": {
                "value": 600.0,
                "CI Lower": 400.0,
                "CI Upper": 600.0
            },
            "Heavy": {
                "value": 800.0,
                "CI Lower": 750.0,
                "CI Upper": 900.0
            }
        },
        "reliability_score": 0.7917792832333888
    },
    {
        "substance": "Promethazine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 20.0,
                "CI Lower": 6.25,
                "CI Upper": 25.0
            },
            "Light": {
                "value": 25.0,
                "CI Lower": 25.0,
                "CI Upper": 50.0
            },
            "Common": {
                "value": 50.0,
                "CI Lower": 35.0,
                "CI Upper": 80.0
            },
            "Strong": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Heavy": {
                "value": 143.37500000000003,
                "CI Lower": 100.0,
                "CI Upper": 150.0
            }
        },
        "reliability_score": 0.8151714671340875
    },
    {
        "substance": "Propoxyphene",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 49.875,
                "CI Lower": 48.75,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 162.5
            },
            "Common": {
                "value": 130.0,
                "CI Lower": 100.0,
                "CI Upper": 200.0
            },
            "Strong": {
                "value": 200.0,
                "CI Lower": 125.0,
                "CI Upper": 400.0
            },
            "Heavy": {
                "value": 400.0,
                "CI Lower": 200.0,
                "CI Upper": 400.0
            }
        },
        "reliability_score": 0.8147383204901861
    },
    {
        "substance": "Propranolol",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 13.5,
                "CI Lower": 10.0,
                "CI Upper": 40.0
            },
            "Light": {
                "value": 40.0,
                "CI Lower": 20.0,
                "CI Upper": 50.0
            },
            "Common": {
                "value": 50.0,
                "CI Lower": 40.0,
                "CI Upper": 50.0
            },
            "Strong": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 60.0
            },
            "Heavy": {
                "value": 72.99999999999997,
                "CI Lower": 50.0,
                "CI Upper": 80.0
            }
        },
        "reliability_score": 0.8810873899805018
    },
    {
        "substance": "Propylhexedrine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 125.0,
                "CI Lower": 25.0,
                "CI Upper": 125.0
            },
            "Light": {
                "value": 250.0,
                "CI Lower": 125.0,
                "CI Upper": 250.0
            },
            "Common": {
                "value": 250.0,
                "CI Lower": 250.0,
                "CI Upper": 250.0
            },
            "Strong": {
                "value": 250.0,
                "CI Lower": 250.0,
                "CI Upper": 500.0
            },
            "Heavy": {
                "value": 500.0,
                "CI Lower": 250.0,
                "CI Upper": 1000.0
            }
        },
        "reliability_score": 0.8229292726895905
    },
    {
        "substance": "Pseudoephedrine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 60.0,
                "CI Lower": 30.0,
                "CI Upper": 90.0
            },
            "Light": {
                "value": 120.0,
                "CI Lower": 60.0,
                "CI Upper": 120.0
            },
            "Common": {
                "value": 120.0,
                "CI Lower": 120.0,
                "CI Upper": 120.0
            },
            "Strong": {
                "value": 120.0,
                "CI Lower": 120.0,
                "CI Upper": 180.0
            },
            "Heavy": {
                "value": 213.99999999999991,
                "CI Lower": 150.0,
                "CI Upper": 240.0
            }
        },
        "reliability_score": 0.8868023920235102
    },
    {
        "substance": "Psilocin",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 12.0
            },
            "Light": {
                "value": 11.0,
                "CI Lower": 10.0,
                "CI Upper": 15.0
            },
            "Common": {
                "value": 15.0,
                "CI Lower": 10.0,
                "CI Upper": 25.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 12.0,
                "CI Upper": 30.0
            },
            "Heavy": {
                "value": 27.599999999999994,
                "CI Lower": 15.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.8773825186648658
    },
    {
        "substance": "Psychotria viridis",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 3.5500000000000003,
                "CI Lower": 0.5,
                "CI Upper": 7.0
            },
            "Light": {
                "value": 19.25,
                "CI Lower": 6.0,
                "CI Upper": 30.0
            },
            "Common": {
                "value": 32.5,
                "CI Lower": 20.0,
                "CI Upper": 45.0
            },
            "Strong": {
                "value": 50.0,
                "CI Lower": 37.0,
                "CI Upper": 50.0
            },
            "Heavy": {
                "value": 62.24999999999998,
                "CI Lower": 50.0,
                "CI Upper": 85.0
            }
        },
        "reliability_score": 0.8110683420968878
    },
    {
        "substance": "Pyrazolam",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 0.375,
                "CI Lower": 0.375,
                "CI Upper": 0.375
            },
            "Light": {
                "value": 0.75,
                "CI Lower": 0.375,
                "CI Upper": 0.75
            },
            "Common": {
                "value": 0.75,
                "CI Lower": 0.75,
                "CI Upper": 0.75
            },
            "Strong": {
                "value": 0.75,
                "CI Lower": 0.75,
                "CI Upper": 0.75
            },
            "Heavy": {
                "value": 1.5,
                "CI Lower": 1.5,
                "CI Upper": 3.0
            }
        },
        "reliability_score": 0.7993758725517088
    },
    {
        "substance": "Quetiapine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 25.0,
                "CI Lower": 12.5,
                "CI Upper": 25.0
            },
            "Light": {
                "value": 31.0,
                "CI Lower": 25.0,
                "CI Upper": 50.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Strong": {
                "value": 200.0,
                "CI Lower": 150.0,
                "CI Upper": 200.0
            },
            "Heavy": {
                "value": 300.0,
                "CI Lower": 225.0,
                "CI Upper": 400.0
            }
        },
        "reliability_score": 0.7498634510311735
    },
    {
        "substance": "Risperidone",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 0.5,
                "CI Lower": 0.5,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 1.0,
                "CI Lower": 0.5,
                "CI Upper": 1.0
            },
            "Common": {
                "value": 2.0,
                "CI Lower": 1.0,
                "CI Upper": 3.0
            },
            "Strong": {
                "value": 3.0,
                "CI Lower": 2.0,
                "CI Upper": 4.0
            },
            "Heavy": {
                "value": 4.0,
                "CI Lower": 3.0,
                "CI Upper": 5.0
            }
        },
        "reliability_score": 0.8068785265639087
    },
    {
        "substance": "S-Ketamine",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 13.05,
                "CI Lower": 11.0,
                "CI Upper": 25.0
            },
            "Light": {
                "value": 25.0,
                "CI Lower": 13.0,
                "CI Upper": 34.0
            },
            "Common": {
                "value": 33.5,
                "CI Lower": 25.0,
                "CI Upper": 50.0
            },
            "Strong": {
                "value": 50.0,
                "CI Lower": 33.0,
                "CI Upper": 69.0
            },
            "Heavy": {
                "value": 68.64999999999999,
                "CI Lower": 50.0,
                "CI Upper": 70.0
            }
        },
        "reliability_score": 0.856123354997679
    },
    {
        "substance": "Salvia (20x)",
        "method": "sublingual",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 175.0,
                "CI Lower": 175.0,
                "CI Upper": 175.0
            },
            "Light": {
                "value": 175.0,
                "CI Lower": 175.0,
                "CI Upper": 250.0
            },
            "Common": {
                "value": 212.5,
                "CI Lower": 175.0,
                "CI Upper": 250.0
            },
            "Strong": {
                "value": 250.0,
                "CI Lower": 175.0,
                "CI Upper": 250.0
            },
            "Heavy": {
                "value": 250.0,
                "CI Lower": 250.0,
                "CI Upper": 250.0
            }
        },
        "reliability_score": 0.9441951001146756
    },
    {
        "substance": "Salvia divinorum",
        "method": "smoked",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 0.1,
                "CI Lower": 0.05,
                "CI Upper": 0.125
            },
            "Light": {
                "value": 0.2,
                "CI Lower": 0.2,
                "CI Upper": 0.25
            },
            "Common": {
                "value": 0.5,
                "CI Lower": 0.25,
                "CI Upper": 0.5
            },
            "Strong": {
                "value": 0.5,
                "CI Lower": 0.5,
                "CI Upper": 1.0
            },
            "Heavy": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.5
            }
        },
        "reliability_score": 0.7769474501387663
    },
    {
        "substance": "Salvia divinorum",
        "method": "smoked",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 23.050000000000004,
                "CI Lower": 12.5,
                "CI Upper": 30.0
            },
            "Light": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 80.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 100.0,
                "CI Upper": 125.0
            },
            "Strong": {
                "value": 161.25,
                "CI Lower": 150.0,
                "CI Upper": 200.0
            },
            "Heavy": {
                "value": 250.0,
                "CI Lower": 250.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.8140038750536667
    },
    {
        "substance": "Salvia divinorum",
        "method": "sublingual",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 0.515,
                "CI Lower": 0.3,
                "CI Upper": 2.36
            },
            "Light": {
                "value": 2.27,
                "CI Lower": 0.5,
                "CI Upper": 3.37
            },
            "Common": {
                "value": 3.435,
                "CI Lower": 2.0,
                "CI Upper": 5.0
            },
            "Strong": {
                "value": 5.25,
                "CI Lower": 3.37,
                "CI Upper": 10.0
            },
            "Heavy": {
                "value": 10.0,
                "CI Lower": 5.0,
                "CI Upper": 11.0
            }
        },
        "reliability_score": 0.7869943408352336
    },
    {
        "substance": "Salvia divinorum",
        "method": "sublingual",
        "unit": "ml",
        "tiers": {
            "Threshold": {
                "value": 0.75,
                "CI Lower": 0.75,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 1.0,
                "CI Lower": 0.75,
                "CI Upper": 1.5
            },
            "Common": {
                "value": 1.5,
                "CI Lower": 0.75,
                "CI Upper": 2.25
            },
            "Strong": {
                "value": 2.1375,
                "CI Lower": 1.0,
                "CI Upper": 3.0
            },
            "Heavy": {
                "value": 3.0,
                "CI Lower": 1.8,
                "CI Upper": 3.0
            }
        },
        "reliability_score": 0.8416302691171098
    },
    {
        "substance": "Sceletium tortuosum",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 41.0,
                "CI Lower": 30.0,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 87.5,
                "CI Lower": 30.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 250.0
            },
            "Strong": {
                "value": 212.5,
                "CI Lower": 100.0,
                "CI Upper": 350.0
            },
            "Heavy": {
                "value": 294.99999999999994,
                "CI Lower": 100.0,
                "CI Upper": 350.0
            }
        },
        "reliability_score": 0.7874747641307942
    },
    {
        "substance": "Sceletium tortuosum",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 25.0
            },
            "Light": {
                "value": 43.75,
                "CI Lower": 10.0,
                "CI Upper": 300.0
            },
            "Common": {
                "value": 275.0,
                "CI Lower": 25.0,
                "CI Upper": 500.0
            },
            "Strong": {
                "value": 500.0,
                "CI Lower": 100.0,
                "CI Upper": 500.0
            },
            "Heavy": {
                "value": 502.50000000000006,
                "CI Lower": 500.0,
                "CI Upper": 550.0
            }
        },
        "reliability_score": 0.7508205604386449
    },
    {
        "substance": "Sceletium tortuosum",
        "method": "smoked",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 21.25,
                "CI Lower": 15.0,
                "CI Upper": 150.0
            },
            "Light": {
                "value": 110.0,
                "CI Lower": 15.0,
                "CI Upper": 200.0
            },
            "Common": {
                "value": 200.0,
                "CI Lower": 27.5,
                "CI Upper": 250.0
            },
            "Strong": {
                "value": 200.0,
                "CI Lower": 150.0,
                "CI Upper": 250.0
            },
            "Heavy": {
                "value": 250.0,
                "CI Lower": 200.0,
                "CI Upper": 250.0
            }
        },
        "reliability_score": 0.8431220335387379
    },
    {
        "substance": "Selegeline",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 3.7,
                "CI Lower": 3.0,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 5.0,
                "CI Lower": 3.0,
                "CI Upper": 5.0
            },
            "Common": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 5.0
            },
            "Strong": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 5.0
            },
            "Heavy": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 5.0
            }
        },
        "reliability_score": 0.9649617555886632
    },
    {
        "substance": "Sertraline",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 25.0,
                "CI Lower": 12.0,
                "CI Upper": 50.0
            },
            "Light": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 100.0,
                "CI Upper": 100.0
            },
            "Strong": {
                "value": 150.0,
                "CI Lower": 100.0,
                "CI Upper": 200.0
            },
            "Heavy": {
                "value": 239.99999999999915,
                "CI Lower": 200.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.8251588187431145
    },
    {
        "substance": "Sildenafil",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 25.0,
                "CI Lower": 25.0,
                "CI Upper": 50.0
            },
            "Light": {
                "value": 50.0,
                "CI Lower": 25.0,
                "CI Upper": 50.0
            },
            "Common": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Strong": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Heavy": {
                "value": 100.0,
                "CI Lower": 100.0,
                "CI Upper": 100.0
            }
        },
        "reliability_score": 0.8735775861642621
    },
    {
        "substance": "Spice and Synthetic Cannabinoids",
        "method": "smoked",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 73.75,
                "CI Lower": 50.0,
                "CI Upper": 125.0
            },
            "Light": {
                "value": 143.75,
                "CI Lower": 75.0,
                "CI Upper": 200.0
            },
            "Common": {
                "value": 200.0,
                "CI Lower": 125.0,
                "CI Upper": 300.0
            },
            "Strong": {
                "value": 300.0,
                "CI Lower": 200.0,
                "CI Upper": 500.0
            },
            "Heavy": {
                "value": 500.0,
                "CI Lower": 300.0,
                "CI Upper": 500.0
            }
        },
        "reliability_score": 0.8280652196835974
    },
    {
        "substance": "St. John's Wort",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 300.0,
                "CI Lower": 20.0,
                "CI Upper": 300.0
            },
            "Light": {
                "value": 300.0,
                "CI Lower": 300.0,
                "CI Upper": 600.0
            },
            "Common": {
                "value": 600.0,
                "CI Lower": 300.0,
                "CI Upper": 700.0
            },
            "Strong": {
                "value": 900.0,
                "CI Lower": 600.0,
                "CI Upper": 1400.0
            },
            "Heavy": {
                "value": 1400.0,
                "CI Lower": 900.0,
                "CI Upper": 1800.0
            }
        },
        "reliability_score": 0.8023943407851344
    },
    {
        "substance": "Syrian Rue",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 2.0,
                "CI Lower": 2.0,
                "CI Upper": 2.5
            },
            "Common": {
                "value": 3.0,
                "CI Lower": 3.0,
                "CI Upper": 3.0
            },
            "Strong": {
                "value": 4.0,
                "CI Lower": 3.5,
                "CI Upper": 4.0
            },
            "Heavy": {
                "value": 6.0,
                "CI Lower": 5.0,
                "CI Upper": 6.0
            }
        },
        "reliability_score": 0.8658226426711368
    },
    {
        "substance": "Syrian Rue",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 17.75,
                "CI Lower": 5.0,
                "CI Upper": 125.0
            },
            "Light": {
                "value": 131.25,
                "CI Lower": 20.0,
                "CI Upper": 200.0
            },
            "Common": {
                "value": 200.0,
                "CI Lower": 100.0,
                "CI Upper": 300.0
            },
            "Strong": {
                "value": 300.0,
                "CI Lower": 200.0,
                "CI Upper": 500.0
            },
            "Heavy": {
                "value": 500.0,
                "CI Lower": 300.0,
                "CI Upper": 500.0
            }
        },
        "reliability_score": 0.8032562440066917
    },
    {
        "substance": "TMA-2",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 11.5,
                "CI Lower": 10.0,
                "CI Upper": 23.3
            },
            "Light": {
                "value": 25.0,
                "CI Lower": 13.0,
                "CI Upper": 33.0
            },
            "Common": {
                "value": 33.0,
                "CI Lower": 25.0,
                "CI Upper": 40.0
            },
            "Strong": {
                "value": 40.0,
                "CI Lower": 35.0,
                "CI Upper": 50.0
            },
            "Heavy": {
                "value": 56.99999999999999,
                "CI Lower": 45.0,
                "CI Upper": 75.0
            }
        },
        "reliability_score": 0.8691887031486845
    },
    {
        "substance": "Tabernanthe iboga",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 0.41000000000000003,
                "CI Lower": 0.2,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.4
            },
            "Common": {
                "value": 2.0,
                "CI Lower": 1.25,
                "CI Upper": 2.0
            },
            "Strong": {
                "value": 2.0,
                "CI Lower": 2.0,
                "CI Upper": 3.0
            },
            "Heavy": {
                "value": 4.299999999999997,
                "CI Lower": 3.0,
                "CI Upper": 6.0
            }
        },
        "reliability_score": 0.8103986876154166
    },
    {
        "substance": "Tabernanthe iboga",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 150.0,
                "CI Lower": 80.0,
                "CI Upper": 200.0
            },
            "Light": {
                "value": 200.0,
                "CI Lower": 150.0,
                "CI Upper": 300.0
            },
            "Common": {
                "value": 300.0,
                "CI Lower": 200.0,
                "CI Upper": 500.0
            },
            "Strong": {
                "value": 500.0,
                "CI Lower": 300.0,
                "CI Upper": 750.0
            },
            "Heavy": {
                "value": 782.4999999999999,
                "CI Lower": 500.0,
                "CI Upper": 800.0
            }
        },
        "reliability_score": 0.8265465924288611
    },
    {
        "substance": "Tadalafil",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 7.5
            },
            "Light": {
                "value": 7.5,
                "CI Lower": 7.5,
                "CI Upper": 7.5
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 7.5,
                "CI Upper": 15.0
            },
            "Strong": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 15.0
            },
            "Heavy": {
                "value": 15.0,
                "CI Lower": 15.0,
                "CI Upper": 15.0
            }
        },
        "reliability_score": 0.8885767135126372
    },
    {
        "substance": "Tapentadol",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 40.0,
                "CI Lower": 25.0,
                "CI Upper": 50.0
            },
            "Light": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 200.0
            },
            "Strong": {
                "value": 200.0,
                "CI Lower": 100.0,
                "CI Upper": 250.0
            },
            "Heavy": {
                "value": 289.9999999999999,
                "CI Lower": 200.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.8147721328672466
    },
    {
        "substance": "Temazepam",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 12.5,
                "CI Lower": 1.0,
                "CI Upper": 30.0
            },
            "Light": {
                "value": 30.0,
                "CI Lower": 20.0,
                "CI Upper": 40.0
            },
            "Common": {
                "value": 40.0,
                "CI Lower": 30.0,
                "CI Upper": 60.0
            },
            "Strong": {
                "value": 60.0,
                "CI Lower": 40.0,
                "CI Upper": 60.0
            },
            "Heavy": {
                "value": 71.25,
                "CI Lower": 60.0,
                "CI Upper": 120.0
            }
        },
        "reliability_score": 0.8334785895173127
    },
    {
        "substance": "Theanine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 100.0,
                "CI Lower": 25.0,
                "CI Upper": 200.0
            },
            "Light": {
                "value": 150.0,
                "CI Lower": 100.0,
                "CI Upper": 200.0
            },
            "Common": {
                "value": 200.0,
                "CI Lower": 100.0,
                "CI Upper": 400.0
            },
            "Strong": {
                "value": 400.0,
                "CI Lower": 200.0,
                "CI Upper": 600.0
            },
            "Heavy": {
                "value": 589.9999999999999,
                "CI Lower": 400.0,
                "CI Upper": 600.0
            }
        },
        "reliability_score": 0.806144980627159
    },
    {
        "substance": "Tianeptine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 25.625,
                "CI Lower": 12.5,
                "CI Upper": 45.0
            },
            "Light": {
                "value": 43.125,
                "CI Lower": 12.5,
                "CI Upper": 50.0
            },
            "Common": {
                "value": 50.0,
                "CI Lower": 37.5,
                "CI Upper": 187.5
            },
            "Strong": {
                "value": 121.875,
                "CI Lower": 50.0,
                "CI Upper": 200.0
            },
            "Heavy": {
                "value": 200.0,
                "CI Lower": 100.0,
                "CI Upper": 200.0
            }
        },
        "reliability_score": 0.7634337059509639
    },
    {
        "substance": "Topiramate",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 25.0,
                "CI Lower": 25.0,
                "CI Upper": 75.0
            },
            "Light": {
                "value": 56.25,
                "CI Lower": 25.0,
                "CI Upper": 125.0
            },
            "Common": {
                "value": 125.0,
                "CI Lower": 50.0,
                "CI Upper": 200.0
            },
            "Strong": {
                "value": 200.0,
                "CI Lower": 125.0,
                "CI Upper": 250.0
            },
            "Heavy": {
                "value": 247.49999999999997,
                "CI Lower": 200.0,
                "CI Upper": 400.0
            }
        },
        "reliability_score": 0.8005459134031312
    },
    {
        "substance": "Tramadol",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 37.5,
                "CI Lower": 25.0,
                "CI Upper": 50.0
            },
            "Light": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 100.0,
                "CI Upper": 150.0
            },
            "Strong": {
                "value": 200.0,
                "CI Lower": 200.0,
                "CI Upper": 200.0
            },
            "Heavy": {
                "value": 400.0,
                "CI Lower": 300.0,
                "CI Upper": 400.0
            }
        },
        "reliability_score": 0.7990192552403441
    },
    {
        "substance": "Trazodone",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 50.0,
                "CI Lower": 25.0,
                "CI Upper": 50.0
            },
            "Light": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 75.0,
                "CI Upper": 150.0
            },
            "Strong": {
                "value": 150.0,
                "CI Lower": 100.0,
                "CI Upper": 200.0
            },
            "Heavy": {
                "value": 250.0,
                "CI Lower": 200.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.8170449382209031
    },
    {
        "substance": "Triazolam",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 0.25,
                "CI Lower": 0.25,
                "CI Upper": 0.25
            },
            "Light": {
                "value": 0.25,
                "CI Lower": 0.25,
                "CI Upper": 0.5
            },
            "Common": {
                "value": 0.5,
                "CI Lower": 0.25,
                "CI Upper": 2.0
            },
            "Strong": {
                "value": 2.0,
                "CI Lower": 0.5,
                "CI Upper": 2.0
            },
            "Heavy": {
                "value": 2.0,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            }
        },
        "reliability_score": 0.7480400479366247
    },
    {
        "substance": "Tryptophan",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 100.0,
                "CI Upper": 200.0
            },
            "Strong": {
                "value": 200.0,
                "CI Lower": 100.0,
                "CI Upper": 250.0
            },
            "Heavy": {
                "value": 250.0,
                "CI Lower": 200.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.8342185727860758
    },
    {
        "substance": "Tryptophan - 5-HTP",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 50.0,
                "CI Lower": 25.0,
                "CI Upper": 50.0
            },
            "Light": {
                "value": 50.0,
                "CI Lower": 50.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 100.0,
                "CI Upper": 100.0
            },
            "Strong": {
                "value": 200.0,
                "CI Lower": 100.0,
                "CI Upper": 200.0
            },
            "Heavy": {
                "value": 212.5,
                "CI Lower": 200.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.8307543256402512
    },
    {
        "substance": "Tyrosine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 500.0,
                "CI Lower": 500.0,
                "CI Upper": 500.0
            },
            "Light": {
                "value": 500.0,
                "CI Lower": 500.0,
                "CI Upper": 900.0
            },
            "Common": {
                "value": 900.0,
                "CI Lower": 500.0,
                "CI Upper": 1350.0
            },
            "Strong": {
                "value": 1175.0,
                "CI Lower": 900.0,
                "CI Upper": 1500.0
            },
            "Heavy": {
                "value": 1500.0,
                "CI Lower": 1000.0,
                "CI Upper": 2000.0
            }
        },
        "reliability_score": 0.8515452193683433
    },
    {
        "substance": "Unknown",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 6.25,
                "CI Lower": 0.5,
                "CI Upper": 20.0
            },
            "Light": {
                "value": 16.0,
                "CI Lower": 0.5,
                "CI Upper": 52.0
            },
            "Common": {
                "value": 50.0,
                "CI Lower": 12.0,
                "CI Upper": 205.0
            },
            "Strong": {
                "value": 152.5,
                "CI Lower": 20.0,
                "CI Upper": 275.0
            },
            "Heavy": {
                "value": 240.0,
                "CI Lower": 52.0,
                "CI Upper": 275.0
            }
        },
        "reliability_score": 0.7
    },
    {
        "substance": "Valerian",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.35
            },
            "Common": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Strong": {
                "value": 1.5,
                "CI Lower": 1.0,
                "CI Upper": 2.12
            },
            "Heavy": {
                "value": 2.048,
                "CI Lower": 1.35,
                "CI Upper": 2.12
            }
        },
        "reliability_score": 0.8999272844004926
    },
    {
        "substance": "Valerian",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 230.00000000000006,
                "CI Lower": 3.6,
                "CI Upper": 400.0
            },
            "Light": {
                "value": 500.0,
                "CI Lower": 400.0,
                "CI Upper": 625.0
            },
            "Common": {
                "value": 820.0,
                "CI Lower": 500.0,
                "CI Upper": 1200.0
            },
            "Strong": {
                "value": 1430.0,
                "CI Lower": 1000.0,
                "CI Upper": 2250.0
            },
            "Heavy": {
                "value": 2696.75,
                "CI Lower": 1800.0,
                "CI Upper": 2758.0
            }
        },
        "reliability_score": 0.7839167541601817
    },
    {
        "substance": "Venlafaxine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 37.5,
                "CI Lower": 37.5,
                "CI Upper": 75.0
            },
            "Light": {
                "value": 75.0,
                "CI Lower": 75.0,
                "CI Upper": 112.5
            },
            "Common": {
                "value": 150.0,
                "CI Lower": 150.0,
                "CI Upper": 150.0
            },
            "Strong": {
                "value": 225.0,
                "CI Lower": 150.0,
                "CI Upper": 225.0
            },
            "Heavy": {
                "value": 300.0,
                "CI Lower": 300.0,
                "CI Upper": 300.0
            }
        },
        "reliability_score": 0.8329537262908584
    },
    {
        "substance": "Vinpocetine",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 6.25,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 5.0,
                "CI Upper": 15.0
            },
            "Strong": {
                "value": 13.75,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 20.0,
                "CI Lower": 15.0,
                "CI Upper": 20.0
            }
        },
        "reliability_score": 0.8555589767794445
    },
    {
        "substance": "Vitamin B-6",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.200000000000001,
                "CI Lower": 1.0,
                "CI Upper": 30.0
            },
            "Light": {
                "value": 30.0,
                "CI Lower": 10.0,
                "CI Upper": 50.0
            },
            "Common": {
                "value": 50.0,
                "CI Lower": 30.0,
                "CI Upper": 100.0
            },
            "Strong": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 200.0
            },
            "Heavy": {
                "value": 200.0,
                "CI Lower": 100.0,
                "CI Upper": 200.0
            }
        },
        "reliability_score": 0.7546894037252205
    },
    {
        "substance": "Vitamin C",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.0
            },
            "Light": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 1.0
            },
            "Common": {
                "value": 1.0,
                "CI Lower": 1.0,
                "CI Upper": 2.0
            },
            "Strong": {
                "value": 2.0,
                "CI Lower": 1.0,
                "CI Upper": 4.0
            },
            "Heavy": {
                "value": 4.699999999999985,
                "CI Lower": 2.0,
                "CI Upper": 11.0
            }
        },
        "reliability_score": 0.7
    },
    {
        "substance": "Vitamin C",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 205.0,
                "CI Lower": 100.0,
                "CI Upper": 500.0
            },
            "Light": {
                "value": 500.0,
                "CI Lower": 210.0,
                "CI Upper": 500.0
            },
            "Common": {
                "value": 1000.0,
                "CI Lower": 500.0,
                "CI Upper": 1000.0
            },
            "Strong": {
                "value": 1000.0,
                "CI Lower": 1000.0,
                "CI Upper": 2000.0
            },
            "Heavy": {
                "value": 2500.0,
                "CI Lower": 1500.0,
                "CI Upper": 3000.0
            }
        },
        "reliability_score": 0.7691755783974752
    },
    {
        "substance": "Vitamins - Choline",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 250.0,
                "CI Lower": 200.0,
                "CI Upper": 250.0
            },
            "Light": {
                "value": 250.0,
                "CI Lower": 250.0,
                "CI Upper": 500.0
            },
            "Common": {
                "value": 500.0,
                "CI Lower": 250.0,
                "CI Upper": 750.0
            },
            "Strong": {
                "value": 750.0,
                "CI Lower": 500.0,
                "CI Upper": 1000.0
            },
            "Heavy": {
                "value": 991.9999999999999,
                "CI Lower": 750.0,
                "CI Upper": 1000.0
            }
        },
        "reliability_score": 0.8407939051752336
    },
    {
        "substance": "Vitamins / Supplements",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 77.5,
                "CI Lower": 50.0,
                "CI Upper": 200.0
            },
            "Light": {
                "value": 166.25,
                "CI Lower": 50.0,
                "CI Upper": 400.0
            },
            "Common": {
                "value": 325.0,
                "CI Lower": 100.0,
                "CI Upper": 700.0
            },
            "Strong": {
                "value": 550.0,
                "CI Lower": 200.0,
                "CI Upper": 1000.0
            },
            "Heavy": {
                "value": 862.4999999999998,
                "CI Lower": 400.0,
                "CI Upper": 1000.0
            }
        },
        "reliability_score": 0.7691928873834915
    },
    {
        "substance": "Voacanga africana",
        "method": "oral",
        "unit": "g",
        "tiers": {
            "Threshold": {
                "value": 1.9725000000000001,
                "CI Lower": 1.45,
                "CI Upper": 4.0
            },
            "Light": {
                "value": 4.0,
                "CI Lower": 2.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 4.0,
                "CI Upper": 10.0
            },
            "Strong": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 10.0
            },
            "Heavy": {
                "value": 10.250000000000004,
                "CI Lower": 10.0,
                "CI Upper": 15.0
            }
        },
        "reliability_score": 0.8573033819165257
    },
    {
        "substance": "Yohimbe",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 32.17500000000001,
                "CI Lower": 5.0,
                "CI Upper": 360.0
            },
            "Light": {
                "value": 360.0,
                "CI Lower": 18.0,
                "CI Upper": 450.0
            },
            "Common": {
                "value": 475.0,
                "CI Lower": 360.0,
                "CI Upper": 600.0
            },
            "Strong": {
                "value": 637.5,
                "CI Lower": 450.0,
                "CI Upper": 800.0
            },
            "Heavy": {
                "value": 1139.999999999999,
                "CI Lower": 600.0,
                "CI Upper": 1350.0
            }
        },
        "reliability_score": 0.8143334345509645
    },
    {
        "substance": "Zinc",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 25.0,
                "CI Lower": 25.0,
                "CI Upper": 25.0
            },
            "Light": {
                "value": 25.0,
                "CI Lower": 25.0,
                "CI Upper": 25.0
            },
            "Common": {
                "value": 25.0,
                "CI Lower": 25.0,
                "CI Upper": 25.0
            },
            "Strong": {
                "value": 25.0,
                "CI Lower": 25.0,
                "CI Upper": 25.0
            },
            "Heavy": {
                "value": 25.0,
                "CI Lower": 25.0,
                "CI Upper": 25.0
            }
        },
        "reliability_score": 1.0
    },
    {
        "substance": "Ziprasidone",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 40.0
            },
            "Light": {
                "value": 20.0,
                "CI Lower": 20.0,
                "CI Upper": 60.0
            },
            "Common": {
                "value": 40.0,
                "CI Lower": 20.0,
                "CI Upper": 100.0
            },
            "Strong": {
                "value": 70.0,
                "CI Lower": 40.0,
                "CI Upper": 120.0
            },
            "Heavy": {
                "value": 110.0,
                "CI Lower": 60.0,
                "CI Upper": 120.0
            }
        },
        "reliability_score": 0.801120857809138
    },
    {
        "substance": "Zolpidem",
        "method": "insufflated",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 3.0,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 10.0
            },
            "Strong": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 25.500000000000007,
                "CI Lower": 20.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.8191853576551797
    },
    {
        "substance": "Zolpidem",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 5.0,
                "CI Lower": 5.0,
                "CI Upper": 5.0
            },
            "Light": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 10.0
            },
            "Common": {
                "value": 10.0,
                "CI Lower": 10.0,
                "CI Upper": 10.0
            },
            "Strong": {
                "value": 20.0,
                "CI Lower": 15.0,
                "CI Upper": 20.0
            },
            "Heavy": {
                "value": 30.0,
                "CI Lower": 25.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.8471622916904737
    },
    {
        "substance": "Zopiclone",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 3.8125,
                "CI Lower": 3.75,
                "CI Upper": 7.5
            },
            "Light": {
                "value": 7.5,
                "CI Lower": 7.0,
                "CI Upper": 7.5
            },
            "Common": {
                "value": 7.5,
                "CI Lower": 7.5,
                "CI Upper": 15.0
            },
            "Strong": {
                "value": 15.0,
                "CI Lower": 11.25,
                "CI Upper": 22.5
            },
            "Heavy": {
                "value": 28.75,
                "CI Lower": 15.0,
                "CI Upper": 30.0
            }
        },
        "reliability_score": 0.8209512777371499
    },
    {
        "substance": "alpha-GPC",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 195.0,
                "CI Lower": 150.0,
                "CI Upper": 300.0
            },
            "Light": {
                "value": 300.0,
                "CI Lower": 150.0,
                "CI Upper": 600.0
            },
            "Common": {
                "value": 400.0,
                "CI Lower": 250.0,
                "CI Upper": 600.0
            },
            "Strong": {
                "value": 600.0,
                "CI Lower": 300.0,
                "CI Upper": 600.0
            },
            "Heavy": {
                "value": 600.0,
                "CI Lower": 500.0,
                "CI Upper": 600.0
            }
        },
        "reliability_score": 0.8737870639933469
    },
    {
        "substance": "bk-2C-B",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 35.0,
                "CI Lower": 35.0,
                "CI Upper": 80.0
            },
            "Light": {
                "value": 85.0,
                "CI Lower": 35.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 80.0,
                "CI Upper": 140.0
            },
            "Strong": {
                "value": 140.0,
                "CI Lower": 100.0,
                "CI Upper": 180.0
            },
            "Heavy": {
                "value": 185.99999999999994,
                "CI Lower": 140.0,
                "CI Upper": 220.0
            }
        },
        "reliability_score": 0.8657944420230983
    },
    {
        "substance": "bk-MBDB",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 50.0,
                "CI Lower": 42.0,
                "CI Upper": 100.0
            },
            "Light": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 130.0
            },
            "Common": {
                "value": 130.0,
                "CI Lower": 100.0,
                "CI Upper": 160.0
            },
            "Strong": {
                "value": 167.5,
                "CI Lower": 130.0,
                "CI Upper": 220.0
            },
            "Heavy": {
                "value": 240.99999999999997,
                "CI Lower": 175.0,
                "CI Upper": 250.0
            }
        },
        "reliability_score": 0.8758843292429797
    },
    {
        "substance": "bk-MDEA",
        "method": "oral",
        "unit": "mg",
        "tiers": {
            "Threshold": {
                "value": 22.5,
                "CI Lower": 15.0,
                "CI Upper": 50.0
            },
            "Light": {
                "value": 50.0,
                "CI Lower": 15.0,
                "CI Upper": 100.0
            },
            "Common": {
                "value": 100.0,
                "CI Lower": 50.0,
                "CI Upper": 150.0
            },
            "Strong": {
                "value": 150.0,
                "CI Lower": 90.0,
                "CI Upper": 180.0
            },
            "Heavy": {
                "value": 185.0,
                "CI Lower": 150.0,
                "CI Upper": 200.0
            }
        },
        "reliability_score": 0.8311164407645304
    }
]