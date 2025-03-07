import { ResponsiveSwarmPlot } from '@nivo/swarmplot'


const SwarmPlot = () => {
  const data = [
    {
      "id": "0.0",
      "group": "group A",
      "price": 387,
      "volume": 12
    },
    {
      "id": "0.1",
      "group": "group A",
      "price": 430,
      "volume": 12
    },
    {
      "id": "0.2",
      "group": "group A",
      "price": 246,
      "volume": 8
    },
    {
      "id": "0.3",
      "group": "group A",
      "price": 455,
      "volume": 6
    },
    {
      "id": "0.4",
      "group": "group A",
      "price": 273,
      "volume": 9
    },
    {
      "id": "0.5",
      "group": "group A",
      "price": 285,
      "volume": 17
    },
    {
      "id": "0.6",
      "group": "group A",
      "price": 166,
      "volume": 19
    },
    {
      "id": "0.7",
      "group": "group A",
      "price": 107,
      "volume": 16
    },
    {
      "id": "0.8",
      "group": "group A",
      "price": 182,
      "volume": 11
    },
    {
      "id": "0.9",
      "group": "group A",
      "price": 260,
      "volume": 7
    },
    {
      "id": "0.10",
      "group": "group A",
      "price": 413,
      "volume": 19
    },
    {
      "id": "0.11",
      "group": "group A",
      "price": 401,
      "volume": 11
    },
    {
      "id": "0.12",
      "group": "group A",
      "price": 120,
      "volume": 10
    },
    {
      "id": "0.13",
      "group": "group A",
      "price": 37,
      "volume": 7
    },
    {
      "id": "0.14",
      "group": "group A",
      "price": 140,
      "volume": 9
    },
    {
      "id": "0.15",
      "group": "group A",
      "price": 180,
      "volume": 13
    },
    {
      "id": "0.16",
      "group": "group A",
      "price": 185,
      "volume": 11
    },
    {
      "id": "0.17",
      "group": "group A",
      "price": 208,
      "volume": 19
    },
    {
      "id": "0.18",
      "group": "group A",
      "price": 79,
      "volume": 17
    },
    {
      "id": "0.19",
      "group": "group A",
      "price": 228,
      "volume": 6
    },
    {
      "id": "0.20",
      "group": "group A",
      "price": 145,
      "volume": 15
    },
    {
      "id": "0.21",
      "group": "group A",
      "price": 254,
      "volume": 8
    },
    {
      "id": "0.22",
      "group": "group A",
      "price": 455,
      "volume": 19
    },
    {
      "id": "0.23",
      "group": "group A",
      "price": 64,
      "volume": 12
    },
    {
      "id": "0.24",
      "group": "group A",
      "price": 83,
      "volume": 9
    },
    {
      "id": "0.25",
      "group": "group A",
      "price": 165,
      "volume": 5
    },
    {
      "id": "0.26",
      "group": "group A",
      "price": 60,
      "volume": 20
    },
    {
      "id": "0.27",
      "group": "group A",
      "price": 324,
      "volume": 11
    },
    {
      "id": "0.28",
      "group": "group A",
      "price": 112,
      "volume": 13
    },
    {
      "id": "0.29",
      "group": "group A",
      "price": 80,
      "volume": 9
    },
    {
      "id": "0.30",
      "group": "group A",
      "price": 124,
      "volume": 9
    },
    {
      "id": "0.31",
      "group": "group A",
      "price": 220,
      "volume": 15
    },
    {
      "id": "0.32",
      "group": "group A",
      "price": 255,
      "volume": 13
    },
    {
      "id": "0.33",
      "group": "group A",
      "price": 34,
      "volume": 13
    },
    {
      "id": "0.34",
      "group": "group A",
      "price": 305,
      "volume": 12
    },
    {
      "id": "0.35",
      "group": "group A",
      "price": 25,
      "volume": 20
    },
    {
      "id": "0.36",
      "group": "group A",
      "price": 184,
      "volume": 4
    },
    {
      "id": "0.37",
      "group": "group A",
      "price": 388,
      "volume": 7
    },
    {
      "id": "0.38",
      "group": "group A",
      "price": 488,
      "volume": 20
    },
    {
      "id": "0.39",
      "group": "group A",
      "price": 308,
      "volume": 12
    },
    {
      "id": "0.40",
      "group": "group A",
      "price": 119,
      "volume": 14
    },
    {
      "id": "0.41",
      "group": "group A",
      "price": 92,
      "volume": 7
    },
    {
      "id": "0.42",
      "group": "group A",
      "price": 489,
      "volume": 8
    },
    {
      "id": "0.43",
      "group": "group A",
      "price": 346,
      "volume": 14
    },
    {
      "id": "0.44",
      "group": "group A",
      "price": 112,
      "volume": 16
    },
    {
      "id": "0.45",
      "group": "group A",
      "price": 143,
      "volume": 16
    },
    {
      "id": "0.46",
      "group": "group A",
      "price": 92,
      "volume": 12
    },
    {
      "id": "0.47",
      "group": "group A",
      "price": 349,
      "volume": 8
    },
    {
      "id": "0.48",
      "group": "group A",
      "price": 120,
      "volume": 8
    },
    {
      "id": "0.49",
      "group": "group A",
      "price": 14,
      "volume": 4
    },
    {
      "id": "0.50",
      "group": "group A",
      "price": 77,
      "volume": 8
    },
    {
      "id": "0.51",
      "group": "group A",
      "price": 472,
      "volume": 10
    },
    {
      "id": "0.52",
      "group": "group A",
      "price": 376,
      "volume": 13
    },
    {
      "id": "0.53",
      "group": "group A",
      "price": 54,
      "volume": 18
    },
    {
      "id": "0.54",
      "group": "group A",
      "price": 168,
      "volume": 14
    },
    {
      "id": "0.55",
      "group": "group A",
      "price": 457,
      "volume": 12
    },
    {
      "id": "0.56",
      "group": "group A",
      "price": 122,
      "volume": 20
    },
    {
      "id": "0.57",
      "group": "group A",
      "price": 16,
      "volume": 5
    },
    {
      "id": "0.58",
      "group": "group A",
      "price": 371,
      "volume": 9
    },
    {
      "id": "0.59",
      "group": "group A",
      "price": 48,
      "volume": 8
    },
    {
      "id": "0.60",
      "group": "group A",
      "price": 497,
      "volume": 10
    },
    {
      "id": "0.61",
      "group": "group A",
      "price": 487,
      "volume": 11
    },
    {
      "id": "0.62",
      "group": "group A",
      "price": 263,
      "volume": 12
    },
    {
      "id": "1.0",
      "group": "group B",
      "price": 150,
      "volume": 19
    },
    {
      "id": "1.1",
      "group": "group B",
      "price": 494,
      "volume": 20
    },
    {
      "id": "1.2",
      "group": "group B",
      "price": 80,
      "volume": 17
    },
    {
      "id": "1.3",
      "group": "group B",
      "price": 177,
      "volume": 11
    },
    {
      "id": "1.4",
      "group": "group B",
      "price": 112,
      "volume": 20
    },
    {
      "id": "1.5",
      "group": "group B",
      "price": 475,
      "volume": 18
    },
    {
      "id": "1.6",
      "group": "group B",
      "price": 207,
      "volume": 15
    },
    {
      "id": "1.7",
      "group": "group B",
      "price": 473,
      "volume": 8
    },
    {
      "id": "1.8",
      "group": "group B",
      "price": 116,
      "volume": 20
    },
    {
      "id": "1.9",
      "group": "group B",
      "price": 320,
      "volume": 10
    },
    {
      "id": "1.10",
      "group": "group B",
      "price": 167,
      "volume": 13
    },
    {
      "id": "1.11",
      "group": "group B",
      "price": 482,
      "volume": 6
    },
    {
      "id": "1.12",
      "group": "group B",
      "price": 286,
      "volume": 16
    },
    {
      "id": "1.13",
      "group": "group B",
      "price": 75,
      "volume": 6
    },
    {
      "id": "1.14",
      "group": "group B",
      "price": 360,
      "volume": 17
    },
    {
      "id": "1.15",
      "group": "group B",
      "price": 83,
      "volume": 17
    },
    {
      "id": "1.16",
      "group": "group B",
      "price": 327,
      "volume": 19
    },
    {
      "id": "1.17",
      "group": "group B",
      "price": 187,
      "volume": 5
    },
    {
      "id": "1.18",
      "group": "group B",
      "price": 350,
      "volume": 9
    },
    {
      "id": "1.19",
      "group": "group B",
      "price": 307,
      "volume": 13
    },
    {
      "id": "1.20",
      "group": "group B",
      "price": 446,
      "volume": 12
    },
    {
      "id": "1.21",
      "group": "group B",
      "price": 10,
      "volume": 7
    },
    {
      "id": "1.22",
      "group": "group B",
      "price": 204,
      "volume": 13
    },
    {
      "id": "1.23",
      "group": "group B",
      "price": 219,
      "volume": 16
    },
    {
      "id": "1.24",
      "group": "group B",
      "price": 76,
      "volume": 6
    },
    {
      "id": "1.25",
      "group": "group B",
      "price": 432,
      "volume": 12
    },
    {
      "id": "1.26",
      "group": "group B",
      "price": 222,
      "volume": 18
    },
    {
      "id": "1.27",
      "group": "group B",
      "price": 270,
      "volume": 9
    },
    {
      "id": "1.28",
      "group": "group B",
      "price": 265,
      "volume": 18
    },
    {
      "id": "1.29",
      "group": "group B",
      "price": 43,
      "volume": 16
    },
    {
      "id": "1.30",
      "group": "group B",
      "price": 5,
      "volume": 13
    },
    {
      "id": "1.31",
      "group": "group B",
      "price": 25,
      "volume": 15
    },
    {
      "id": "1.32",
      "group": "group B",
      "price": 356,
      "volume": 7
    },
    {
      "id": "1.33",
      "group": "group B",
      "price": 37,
      "volume": 16
    },
    {
      "id": "1.34",
      "group": "group B",
      "price": 162,
      "volume": 10
    },
    {
      "id": "1.35",
      "group": "group B",
      "price": 4,
      "volume": 9
    },
    {
      "id": "1.36",
      "group": "group B",
      "price": 191,
      "volume": 20
    },
    {
      "id": "1.37",
      "group": "group B",
      "price": 408,
      "volume": 9
    },
    {
      "id": "1.38",
      "group": "group B",
      "price": 378,
      "volume": 6
    },
    {
      "id": "1.39",
      "group": "group B",
      "price": 370,
      "volume": 10
    },
    {
      "id": "1.40",
      "group": "group B",
      "price": 228,
      "volume": 15
    },
    {
      "id": "1.41",
      "group": "group B",
      "price": 435,
      "volume": 15
    },
    {
      "id": "1.42",
      "group": "group B",
      "price": 116,
      "volume": 19
    },
    {
      "id": "1.43",
      "group": "group B",
      "price": 225,
      "volume": 7
    },
    {
      "id": "1.44",
      "group": "group B",
      "price": 187,
      "volume": 19
    },
    {
      "id": "1.45",
      "group": "group B",
      "price": 371,
      "volume": 17
    },
    {
      "id": "1.46",
      "group": "group B",
      "price": 59,
      "volume": 19
    },
    {
      "id": "1.47",
      "group": "group B",
      "price": 45,
      "volume": 20
    },
    {
      "id": "1.48",
      "group": "group B",
      "price": 263,
      "volume": 8
    },
    {
      "id": "1.49",
      "group": "group B",
      "price": 167,
      "volume": 19
    },
    {
      "id": "1.50",
      "group": "group B",
      "price": 39,
      "volume": 8
    },
    {
      "id": "1.51",
      "group": "group B",
      "price": 221,
      "volume": 20
    },
    {
      "id": "1.52",
      "group": "group B",
      "price": 76,
      "volume": 14
    },
    {
      "id": "1.53",
      "group": "group B",
      "price": 276,
      "volume": 13
    },
    {
      "id": "1.54",
      "group": "group B",
      "price": 80,
      "volume": 19
    },
    {
      "id": "1.55",
      "group": "group B",
      "price": 493,
      "volume": 6
    },
    {
      "id": "1.56",
      "group": "group B",
      "price": 78,
      "volume": 19
    },
    {
      "id": "1.57",
      "group": "group B",
      "price": 114,
      "volume": 16
    },
    {
      "id": "1.58",
      "group": "group B",
      "price": 324,
      "volume": 19
    },
    {
      "id": "1.59",
      "group": "group B",
      "price": 476,
      "volume": 12
    },
    {
      "id": "1.60",
      "group": "group B",
      "price": 277,
      "volume": 12
    },
    {
      "id": "1.61",
      "group": "group B",
      "price": 157,
      "volume": 16
    },
    {
      "id": "1.62",
      "group": "group B",
      "price": 410,
      "volume": 11
    },
    {
      "id": "1.63",
      "group": "group B",
      "price": 329,
      "volume": 7
    },
    {
      "id": "1.64",
      "group": "group B",
      "price": 87,
      "volume": 11
    },
    {
      "id": "2.0",
      "group": "group C",
      "price": 72,
      "volume": 5
    },
    {
      "id": "2.1",
      "group": "group C",
      "price": 418,
      "volume": 4
    },
    {
      "id": "2.2",
      "group": "group C",
      "price": 387,
      "volume": 11
    },
    {
      "id": "2.3",
      "group": "group C",
      "price": 136,
      "volume": 20
    },
    {
      "id": "2.4",
      "group": "group C",
      "price": 367,
      "volume": 5
    },
    {
      "id": "2.5",
      "group": "group C",
      "price": 370,
      "volume": 7
    },
    {
      "id": "2.6",
      "group": "group C",
      "price": 291,
      "volume": 6
    },
    {
      "id": "2.7",
      "group": "group C",
      "price": 72,
      "volume": 14
    },
    {
      "id": "2.8",
      "group": "group C",
      "price": 32,
      "volume": 9
    },
    {
      "id": "2.9",
      "group": "group C",
      "price": 425,
      "volume": 13
    },
    {
      "id": "2.10",
      "group": "group C",
      "price": 127,
      "volume": 20
    },
    {
      "id": "2.11",
      "group": "group C",
      "price": 267,
      "volume": 20
    },
    {
      "id": "2.12",
      "group": "group C",
      "price": 494,
      "volume": 18
    },
    {
      "id": "2.13",
      "group": "group C",
      "price": 68,
      "volume": 16
    },
    {
      "id": "2.14",
      "group": "group C",
      "price": 433,
      "volume": 10
    },
    {
      "id": "2.15",
      "group": "group C",
      "price": 412,
      "volume": 10
    },
    {
      "id": "2.16",
      "group": "group C",
      "price": 195,
      "volume": 7
    },
    {
      "id": "2.17",
      "group": "group C",
      "price": 6,
      "volume": 20
    },
    {
      "id": "2.18",
      "group": "group C",
      "price": 7,
      "volume": 14
    },
    {
      "id": "2.19",
      "group": "group C",
      "price": 475,
      "volume": 14
    },
    {
      "id": "2.20",
      "group": "group C",
      "price": 410,
      "volume": 12
    },
    {
      "id": "2.21",
      "group": "group C",
      "price": 50,
      "volume": 8
    },
    {
      "id": "2.22",
      "group": "group C",
      "price": 76,
      "volume": 13
    },
    {
      "id": "2.23",
      "group": "group C",
      "price": 44,
      "volume": 12
    },
    {
      "id": "2.24",
      "group": "group C",
      "price": 471,
      "volume": 12
    },
    {
      "id": "2.25",
      "group": "group C",
      "price": 67,
      "volume": 15
    },
    {
      "id": "2.26",
      "group": "group C",
      "price": 331,
      "volume": 17
    },
    {
      "id": "2.27",
      "group": "group C",
      "price": 51,
      "volume": 17
    },
    {
      "id": "2.28",
      "group": "group C",
      "price": 29,
      "volume": 6
    },
    {
      "id": "2.29",
      "group": "group C",
      "price": 201,
      "volume": 16
    },
    {
      "id": "2.30",
      "group": "group C",
      "price": 27,
      "volume": 8
    },
    {
      "id": "2.31",
      "group": "group C",
      "price": 48,
      "volume": 5
    },
    {
      "id": "2.32",
      "group": "group C",
      "price": 123,
      "volume": 19
    },
    {
      "id": "2.33",
      "group": "group C",
      "price": 344,
      "volume": 12
    },
    {
      "id": "2.34",
      "group": "group C",
      "price": 19,
      "volume": 20
    },
    {
      "id": "2.35",
      "group": "group C",
      "price": 38,
      "volume": 15
    },
    {
      "id": "2.36",
      "group": "group C",
      "price": 469,
      "volume": 11
    },
    {
      "id": "2.37",
      "group": "group C",
      "price": 12,
      "volume": 9
    },
    {
      "id": "2.38",
      "group": "group C",
      "price": 372,
      "volume": 8
    },
    {
      "id": "2.39",
      "group": "group C",
      "price": 16,
      "volume": 17
    },
    {
      "id": "2.40",
      "group": "group C",
      "price": 110,
      "volume": 17
    },
    {
      "id": "2.41",
      "group": "group C",
      "price": 350,
      "volume": 9
    },
    {
      "id": "2.42",
      "group": "group C",
      "price": 14,
      "volume": 14
    },
    {
      "id": "2.43",
      "group": "group C",
      "price": 366,
      "volume": 15
    },
    {
      "id": "2.44",
      "group": "group C",
      "price": 24,
      "volume": 18
    },
    {
      "id": "2.45",
      "group": "group C",
      "price": 476,
      "volume": 8
    },
    {
      "id": "2.46",
      "group": "group C",
      "price": 168,
      "volume": 18
    },
    {
      "id": "2.47",
      "group": "group C",
      "price": 174,
      "volume": 17
    },
    {
      "id": "2.48",
      "group": "group C",
      "price": 258,
      "volume": 6
    },
    {
      "id": "2.49",
      "group": "group C",
      "price": 90,
      "volume": 18
    },
    {
      "id": "2.50",
      "group": "group C",
      "price": 83,
      "volume": 13
    },
    {
      "id": "2.51",
      "group": "group C",
      "price": 285,
      "volume": 4
    },
    {
      "id": "2.52",
      "group": "group C",
      "price": 404,
      "volume": 19
    },
    {
      "id": "2.53",
      "group": "group C",
      "price": 223,
      "volume": 10
    },
    {
      "id": "2.54",
      "group": "group C",
      "price": 301,
      "volume": 9
    },
    {
      "id": "2.55",
      "group": "group C",
      "price": 485,
      "volume": 15
    },
    {
      "id": "2.56",
      "group": "group C",
      "price": 78,
      "volume": 19
    },
    {
      "id": "2.57",
      "group": "group C",
      "price": 305,
      "volume": 16
    },
    {
      "id": "2.58",
      "group": "group C",
      "price": 173,
      "volume": 14
    },
    {
      "id": "2.59",
      "group": "group C",
      "price": 60,
      "volume": 9
    },
    {
      "id": "2.60",
      "group": "group C",
      "price": 81,
      "volume": 12
    },
    {
      "id": "2.61",
      "group": "group C",
      "price": 33,
      "volume": 5
    },
    {
      "id": "2.62",
      "group": "group C",
      "price": 220,
      "volume": 19
    },
    {
      "id": "2.63",
      "group": "group C",
      "price": 466,
      "volume": 9
    },
    {
      "id": "2.64",
      "group": "group C",
      "price": 199,
      "volume": 6
    },
    {
      "id": "2.65",
      "group": "group C",
      "price": 302,
      "volume": 8
    },
    {
      "id": "2.66",
      "group": "group C",
      "price": 339,
      "volume": 12
    },
    {
      "id": "2.67",
      "group": "group C",
      "price": 452,
      "volume": 9
    },
    {
      "id": "2.68",
      "group": "group C",
      "price": 467,
      "volume": 17
    },
    {
      "id": "2.69",
      "group": "group C",
      "price": 236,
      "volume": 11
    },
    {
      "id": "2.70",
      "group": "group C",
      "price": 383,
      "volume": 19
    },
    {
      "id": "2.71",
      "group": "group C",
      "price": 407,
      "volume": 8
    },
    {
      "id": "2.72",
      "group": "group C",
      "price": 236,
      "volume": 15
    },
    {
      "id": "2.73",
      "group": "group C",
      "price": 90,
      "volume": 6
    },
    {
      "id": "2.74",
      "group": "group C",
      "price": 234,
      "volume": 15
    },
    {
      "id": "2.75",
      "group": "group C",
      "price": 108,
      "volume": 17
    },
    {
      "id": "2.76",
      "group": "group C",
      "price": 118,
      "volume": 7
    },
    {
      "id": "2.77",
      "group": "group C",
      "price": 255,
      "volume": 17
    },
    {
      "id": "2.78",
      "group": "group C",
      "price": 290,
      "volume": 4
    },
    {
      "id": "2.79",
      "group": "group C",
      "price": 310,
      "volume": 16
    }
  ];

  return (
    <ResponsiveSwarmPlot
            data={data}
            groups={[ 'group A', 'group B', 'group C' ]}
            identity="id"
            value="price"
            valueFormat="$.2f"
            valueScale={{ type: 'linear', min: 0, max: 500, reverse: false }}
            size={{
                key: 'volume',
                values: [
                    4,
                    20
                ],
                sizes: [
                    6,
                    20
                ]
            }}
            forceStrength={4}
            simulationIterations={100}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.6
                    ],
                    [
                        'opacity',
                        0.5
                    ]
                ]
            }}
            margin={{ top: 80, right: 100, bottom: 80, left: 100 }}
            axisTop={{
                orient: 'top',
                tickSize: 10,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'group if vertical, price if horizontal',
                legendPosition: 'middle',
                legendOffset: -46,
                truncateTickAt: 0
            }}
            axisRight={{
                orient: 'right',
                tickSize: 10,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'price if vertical, group if horizontal',
                legendPosition: 'middle',
                legendOffset: 76,
                truncateTickAt: 0
            }}
            axisBottom={{
                orient: 'bottom',
                tickSize: 10,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'group if vertical, price if horizontal',
                legendPosition: 'middle',
                legendOffset: 46,
                truncateTickAt: 0
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 10,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'price if vertical, group if horizontal',
                legendPosition: 'middle',
                legendOffset: -76,
                truncateTickAt: 0
            }}
        />
  );
}

export default SwarmPlot;
