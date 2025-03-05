import { ResponsiveChoropleth } from '@nivo/geo'
import features from '../assets/world_countries.json'

const MovieMap = ({ mapData }) => {
  const data = [
    {
      "id": "AFG",
      "value": 367254
    },
    {
      "id": "AGO",
      "value": 330215
    },
    {
      "id": "ALB",
      "value": 411748
    },
    {
      "id": "ARE",
      "value": 43299
    },
    {
      "id": "ARG",
      "value": 257444
    },
    {
      "id": "ARM",
      "value": 578941
    },
    {
      "id": "ATA",
      "value": 221409
    },
    {
      "id": "ATF",
      "value": 343453
    },
    {
      "id": "AUT",
      "value": 934762
    },
    {
      "id": "AZE",
      "value": 488341
    },
    {
      "id": "BDI",
      "value": 328178
    },
    {
      "id": "BEL",
      "value": 618641
    },
    {
      "id": "BEN",
      "value": 478211
    },
    {
      "id": "BFA",
      "value": 25689
    },
    {
      "id": "BGD",
      "value": 892538
    },
    {
      "id": "BGR",
      "value": 872999
    },
    {
      "id": "BHS",
      "value": 567831
    },
    {
      "id": "BIH",
      "value": 385016
    },
    {
      "id": "BLR",
      "value": 258317
    },
    {
      "id": "BLZ",
      "value": 840477
    },
    {
      "id": "BOL",
      "value": 732990
    },
    {
      "id": "BRN",
      "value": 885683
    },
    {
      "id": "BTN",
      "value": 764345
    },
    {
      "id": "BWA",
      "value": 15960
    },
    {
      "id": "CAF",
      "value": 543887
    },
    {
      "id": "CAN",
      "value": 391999
    },
    {
      "id": "CHE",
      "value": 243001
    },
    {
      "id": "CHL",
      "value": 946473
    },
    {
      "id": "CHN",
      "value": 68752
    },
    {
      "id": "CIV",
      "value": 694410
    },
    {
      "id": "CMR",
      "value": 194545
    },
    {
      "id": "COG",
      "value": 400852
    },
    {
      "id": "COL",
      "value": 834677
    },
    {
      "id": "CRI",
      "value": 980441
    },
    {
      "id": "CUB",
      "value": 744781
    },
    {
      "id": "-99",
      "value": 5640
    },
    {
      "id": "CYP",
      "value": 404341
    },
    {
      "id": "CZE",
      "value": 509880
    },
    {
      "id": "DEU",
      "value": 915168
    },
    {
      "id": "DJI",
      "value": 404472
    },
    {
      "id": "DNK",
      "value": 571064
    },
    {
      "id": "DOM",
      "value": 799082
    },
    {
      "id": "DZA",
      "value": 444374
    },
    {
      "id": "ECU",
      "value": 10596
    },
    {
      "id": "EGY",
      "value": 358175
    },
    {
      "id": "ERI",
      "value": 575009
    },
    {
      "id": "ESP",
      "value": 601459
    },
    {
      "id": "EST",
      "value": 873869
    },
    {
      "id": "ETH",
      "value": 806475
    },
    {
      "id": "FIN",
      "value": 693959
    },
    {
      "id": "FJI",
      "value": 304153
    },
    {
      "id": "FLK",
      "value": 858086
    },
    {
      "id": "FRA",
      "value": 261667
    },
    {
      "id": "GAB",
      "value": 110885
    },
    {
      "id": "GBR",
      "value": 999415
    },
    {
      "id": "GEO",
      "value": 179523
    },
    {
      "id": "GHA",
      "value": 280019
    },
    {
      "id": "GIN",
      "value": 972880
    },
    {
      "id": "GMB",
      "value": 97431
    },
    {
      "id": "GNB",
      "value": 22366
    },
    {
      "id": "GNQ",
      "value": 49625
    },
    {
      "id": "GRC",
      "value": 18204
    },
    {
      "id": "GTM",
      "value": 913504
    },
    {
      "id": "GUY",
      "value": 46445
    },
    {
      "id": "HND",
      "value": 127219
    },
    {
      "id": "HRV",
      "value": 684422
    },
    {
      "id": "HTI",
      "value": 887149
    },
    {
      "id": "HUN",
      "value": 825814
    },
    {
      "id": "IDN",
      "value": 185955
    },
    {
      "id": "IND",
      "value": 595864
    },
    {
      "id": "IRL",
      "value": 382604
    },
    {
      "id": "IRN",
      "value": 276178
    },
    {
      "id": "IRQ",
      "value": 112584
    },
    {
      "id": "ISL",
      "value": 706415
    },
    {
      "id": "ISR",
      "value": 124978
    },
    {
      "id": "ITA",
      "value": 640857
    },
    {
      "id": "JAM",
      "value": 988068
    },
    {
      "id": "JOR",
      "value": 271064
    },
    {
      "id": "JPN",
      "value": 375925
    },
    {
      "id": "KAZ",
      "value": 976894
    },
    {
      "id": "KEN",
      "value": 630079
    },
    {
      "id": "KGZ",
      "value": 279365
    },
    {
      "id": "KHM",
      "value": 583666
    },
    {
      "id": "OSA",
      "value": 412674
    },
    {
      "id": "KWT",
      "value": 762443
    },
    {
      "id": "LAO",
      "value": 787418
    },
    {
      "id": "LBN",
      "value": 494713
    },
    {
      "id": "LBR",
      "value": 18155
    },
    {
      "id": "LBY",
      "value": 72621
    },
    {
      "id": "LKA",
      "value": 234055
    },
    {
      "id": "LSO",
      "value": 60715
    },
    {
      "id": "LTU",
      "value": 843529
    },
    {
      "id": "LUX",
      "value": 408976
    },
    {
      "id": "LVA",
      "value": 547242
    },
    {
      "id": "MAR",
      "value": 873515
    },
    {
      "id": "MDA",
      "value": 336148
    },
    {
      "id": "MDG",
      "value": 625890
    },
    {
      "id": "MEX",
      "value": 745084
    },
    {
      "id": "MKD",
      "value": 629593
    },
    {
      "id": "MLI",
      "value": 87808
    },
    {
      "id": "MMR",
      "value": 433505
    },
    {
      "id": "MNE",
      "value": 525896
    },
    {
      "id": "MNG",
      "value": 559781
    },
    {
      "id": "MOZ",
      "value": 785493
    },
    {
      "id": "MRT",
      "value": 805620
    },
    {
      "id": "MWI",
      "value": 854658
    },
    {
      "id": "MYS",
      "value": 823694
    },
    {
      "id": "NAM",
      "value": 828139
    },
    {
      "id": "NCL",
      "value": 860848
    },
    {
      "id": "NER",
      "value": 299132
    },
    {
      "id": "NGA",
      "value": 729443
    },
    {
      "id": "NIC",
      "value": 679895
    },
    {
      "id": "NLD",
      "value": 380927
    },
    {
      "id": "NOR",
      "value": 899811
    },
    {
      "id": "NPL",
      "value": 159467
    },
    {
      "id": "NZL",
      "value": 448037
    },
    {
      "id": "OMN",
      "value": 325544
    },
    {
      "id": "PAK",
      "value": 284274
    },
    {
      "id": "PAN",
      "value": 837063
    },
    {
      "id": "PER",
      "value": 133446
    },
    {
      "id": "PHL",
      "value": 9531
    },
    {
      "id": "PNG",
      "value": 588229
    },
    {
      "id": "POL",
      "value": 954129
    },
    {
      "id": "PRI",
      "value": 468556
    },
    {
      "id": "PRT",
      "value": 899380
    },
    {
      "id": "PRY",
      "value": 310957
    },
    {
      "id": "QAT",
      "value": 655123
    },
    {
      "id": "ROU",
      "value": 457179
    },
    {
      "id": "RUS",
      "value": 185803
    },
    {
      "id": "RWA",
      "value": 692341
    },
    {
      "id": "ESH",
      "value": 471178
    },
    {
      "id": "SAU",
      "value": 844966
    },
    {
      "id": "SDN",
      "value": 963867
    },
    {
      "id": "SDS",
      "value": 642568
    },
    {
      "id": "SEN",
      "value": 910196
    },
    {
      "id": "SLB",
      "value": 502142
    },
    {
      "id": "SLE",
      "value": 766509
    },
    {
      "id": "SLV",
      "value": 422625
    },
    {
      "id": "ABV",
      "value": 84330
    },
    {
      "id": "SOM",
      "value": 710960
    },
    {
      "id": "SRB",
      "value": 539623
    },
    {
      "id": "SUR",
      "value": 76442
    },
    {
      "id": "SVK",
      "value": 645201
    },
    {
      "id": "SVN",
      "value": 747381
    },
    {
      "id": "SWZ",
      "value": 300870
    },
    {
      "id": "SYR",
      "value": 752005
    },
    {
      "id": "TCD",
      "value": 925951
    },
    {
      "id": "TGO",
      "value": 984094
    },
    {
      "id": "THA",
      "value": 83452
    },
    {
      "id": "TJK",
      "value": 810509
    },
    {
      "id": "TKM",
      "value": 429563
    },
    {
      "id": "TLS",
      "value": 483639
    },
    {
      "id": "TTO",
      "value": 233249
    },
    {
      "id": "TUN",
      "value": 118984
    },
    {
      "id": "TUR",
      "value": 578425
    },
    {
      "id": "TWN",
      "value": 159904
    },
    {
      "id": "TZA",
      "value": 562194
    },
    {
      "id": "UGA",
      "value": 288614
    },
    {
      "id": "UKR",
      "value": 232064
    },
    {
      "id": "URY",
      "value": 903224
    },
    {
      "id": "USA",
      "value": 621541
    },
    {
      "id": "UZB",
      "value": 212613
    },
    {
      "id": "VEN",
      "value": 908876
    },
    {
      "id": "VNM",
      "value": 104312
    },
    {
      "id": "VUT",
      "value": 5243
    },
    {
      "id": "PSE",
      "value": 2830
    },
    {
      "id": "YEM",
      "value": 343813
    },
    {
      "id": "ZAF",
      "value": 326981
    },
    {
      "id": "ZMB",
      "value": 552911
    },
    {
      "id": "ZWE",
      "value": 51411
    },
    {
      "id": "KOR",
      "value": 496208
    }
  ];


  return (
    <ResponsiveChoropleth
            data={data}
            features={features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors="nivo"
            domain={[ 0, 1000000 ]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionTranslation={[ 0.5, 0.5 ]}
            projectionRotation={[ 0, 0, 0 ]}
            enableGraticule={true}
            graticuleLineColor="#dddddd"
            borderWidth={0.5}
            borderColor="#152538"
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                },
                {
                    id: 'gradient',
                    type: 'linearGradient',
                    colors: [
                        {
                            offset: 0,
                            color: '#000'
                        },
                        {
                            offset: 100,
                            color: 'inherit'
                        }
                    ]
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'CAN'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'CHN'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'ATA'
                    },
                    id: 'gradient'
                }
            ]}
            legends={[
                {
                    anchor: 'bottom-left',
                    direction: 'column',
                    justify: true,
                    translateX: 20,
                    translateY: -100,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: 'left-to-right',
                    itemTextColor: '#444444',
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000000',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
  )
};

export default MovieMap;
