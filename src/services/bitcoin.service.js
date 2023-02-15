import axios from 'axios'

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}

async function getRate(coins) {
    const dollarToBitcoin = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`)
    return (1 / dollarToBitcoin.data) * coins
}

// async function getConfirmedTransactions() {
//     var res = await axios.get(
//         `https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true`
//     )
//     res = res.data.values.map(res => ({ y: res.y, x: res.x }))
//     console.log(res);
//     return res
// }

// async function getMarketPrice() {
//     var res = await axios.get(
//         `https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`
//     )
//     res = res.data.values.map(res => ({ y: res.y, x: res.x }))
//     console.log(res);
//     return res
// }

//  Demo data// 
async function getMarketPrice() {
var res = [
    {
        "y": 19787.61,
        "x": 1663372800
    },
    {
        "y": 20122.71,
        "x": 1663459200
    },
    {
        "y": 19415.86,
        "x": 1663545600
    },
    {
        "y": 19542.2,
        "x": 1663632000
    },
    {
        "y": 18879.96,
        "x": 1663718400
    },
    {
        "y": 18507.36,
        "x": 1663804800
    },
    {
        "y": 19408.63,
        "x": 1663891200
    },
    {
        "y": 19280.58,
        "x": 1663977600
    },
    {
        "y": 18931.79,
        "x": 1664064000
    },
    {
        "y": 18807.71,
        "x": 1664150400
    },
    {
        "y": 19227.26,
        "x": 1664236800
    },
    {
        "y": 19104.89,
        "x": 1664323200
    },
    {
        "y": 19530.71,
        "x": 1664409600
    },
    {
        "y": 19598.86,
        "x": 1664496000
    },
    {
        "y": 19427.2,
        "x": 1664582400
    },
    {
        "y": 19314.69,
        "x": 1664668800
    },
    {
        "y": 19049.72,
        "x": 1664755200
    },
    {
        "y": 19632.61,
        "x": 1664841600
    },
    {
        "y": 20342.25,
        "x": 1664928000
    },
    {
        "y": 20167.79,
        "x": 1665014400
    },
    {
        "y": 19956.49,
        "x": 1665100800
    },
    {
        "y": 19544.82,
        "x": 1665187200
    },
    {
        "y": 19417.73,
        "x": 1665273600
    },
    {
        "y": 19441.88,
        "x": 1665360000
    },
    {
        "y": 19132.52,
        "x": 1665446400
    },
    {
        "y": 19049.64,
        "x": 1665532800
    },
    {
        "y": 19156.21,
        "x": 1665619200
    },
    {
        "y": 19383.33,
        "x": 1665705600
    },
    {
        "y": 19184.71,
        "x": 1665792000
    },
    {
        "y": 19063.1,
        "x": 1665878400
    },
    {
        "y": 19265.53,
        "x": 1665964800
    },
    {
        "y": 19548.97,
        "x": 1666051200
    },
    {
        "y": 19330.74,
        "x": 1666137600
    },
    {
        "y": 19125.65,
        "x": 1666224000
    },
    {
        "y": 19046.83,
        "x": 1666310400
    },
    {
        "y": 19171.34,
        "x": 1666396800
    },
    {
        "y": 19205.45,
        "x": 1666483200
    },
    {
        "y": 19565.91,
        "x": 1666569600
    },
    {
        "y": 19338.9,
        "x": 1666656000
    },
    {
        "y": 20101.27,
        "x": 1666742400
    },
    {
        "y": 20772.36,
        "x": 1666828800
    },
    {
        "y": 20288.52,
        "x": 1666915200
    },
    {
        "y": 20601.63,
        "x": 1667001600
    },
    {
        "y": 20816.16,
        "x": 1667088000
    },
    {
        "y": 20628.5,
        "x": 1667174400
    },
    {
        "y": 20499.29,
        "x": 1667260800
    },
    {
        "y": 20486.26,
        "x": 1667347200
    },
    {
        "y": 20153.99,
        "x": 1667433600
    },
    {
        "y": 20208.16,
        "x": 1667520000
    },
    {
        "y": 21152.93,
        "x": 1667606400
    },
    {
        "y": 21292.67,
        "x": 1667692800
    },
    {
        "y": 20920.33,
        "x": 1667779200
    },
    {
        "y": 20598.44,
        "x": 1667865600
    },
    {
        "y": 18540.11,
        "x": 1667952000
    },
    {
        "y": 15856.95,
        "x": 1668038400
    },
    {
        "y": 17550.23,
        "x": 1668124800
    },
    {
        "y": 16990.26,
        "x": 1668211200
    },
    {
        "y": 16776.4,
        "x": 1668297600
    },
    {
        "y": 16310.3,
        "x": 1668384000
    },
    {
        "y": 16587.96,
        "x": 1668470400
    },
    {
        "y": 16873.56,
        "x": 1668556800
    },
    {
        "y": 16662.24,
        "x": 1668643200
    },
    {
        "y": 16682.44,
        "x": 1668729600
    },
    {
        "y": 16683.22,
        "x": 1668816000
    },
    {
        "y": 16687.8,
        "x": 1668902400
    },
    {
        "y": 16260.41,
        "x": 1668988800
    },
    {
        "y": 15759.61,
        "x": 1669075200
    },
    {
        "y": 16194.75,
        "x": 1669161600
    },
    {
        "y": 16606.77,
        "x": 1669248000
    },
    {
        "y": 16592.67,
        "x": 1669334400
    },
    {
        "y": 16507.44,
        "x": 1669420800
    },
    {
        "y": 16453.47,
        "x": 1669507200
    },
    {
        "y": 16420.2,
        "x": 1669593600
    },
    {
        "y": 16208.96,
        "x": 1669680000
    },
    {
        "y": 16432.73,
        "x": 1669766400
    },
    {
        "y": 17170.62,
        "x": 1669852800
    },
    {
        "y": 16971.57,
        "x": 1669939200
    },
    {
        "y": 17091.23,
        "x": 1670025600
    },
    {
        "y": 16894.23,
        "x": 1670112000
    },
    {
        "y": 17117.57,
        "x": 1670198400
    },
    {
        "y": 16967.02,
        "x": 1670284800
    },
    {
        "y": 17085.45,
        "x": 1670371200
    },
    {
        "y": 16836.05,
        "x": 1670457600
    },
    {
        "y": 17234.58,
        "x": 1670544000
    },
    {
        "y": 17128.55,
        "x": 1670630400
    },
    {
        "y": 17124.99,
        "x": 1670716800
    },
    {
        "y": 17098.61,
        "x": 1670803200
    },
    {
        "y": 17206.87,
        "x": 1670889600
    },
    {
        "y": 17771.03,
        "x": 1670976000
    },
    {
        "y": 17802.44,
        "x": 1671062400
    },
    {
        "y": 17357.47,
        "x": 1671148800
    },
    {
        "y": 16637.6,
        "x": 1671235200
    },
    {
        "y": 16783.6,
        "x": 1671321600
    },
    {
        "y": 16745.99,
        "x": 1671408000
    },
    {
        "y": 16439.89,
        "x": 1671494400
    },
    {
        "y": 16904.64,
        "x": 1671580800
    },
    {
        "y": 16813.62,
        "x": 1671667200
    },
    {
        "y": 16818.68,
        "x": 1671753600
    },
    {
        "y": 16779.71,
        "x": 1671840000
    },
    {
        "y": 16838.1,
        "x": 1671926400
    },
    {
        "y": 16826.86,
        "x": 1672012800
    },
    {
        "y": 16915.7,
        "x": 1672099200
    },
    {
        "y": 16699,
        "x": 1672185600
    },
    {
        "y": 16539.28,
        "x": 1672272000
    },
    {
        "y": 16630.49,
        "x": 1672358400
    },
    {
        "y": 16599.69,
        "x": 1672444800
    },
    {
        "y": 16526.78,
        "x": 1672531200
    },
    {
        "y": 16613.71,
        "x": 1672617600
    },
    {
        "y": 16671.54,
        "x": 1672704000
    },
    {
        "y": 16669.6,
        "x": 1672790400
    },
    {
        "y": 16850.63,
        "x": 1672876800
    },
    {
        "y": 16826.41,
        "x": 1672963200
    },
    {
        "y": 16951.97,
        "x": 1673049600
    },
    {
        "y": 16945.2,
        "x": 1673136000
    },
    {
        "y": 17108.41,
        "x": 1673222400
    },
    {
        "y": 17192.07,
        "x": 1673308800
    },
    {
        "y": 17443.68,
        "x": 1673395200
    },
    {
        "y": 17934.6,
        "x": 1673481600
    },
    {
        "y": 18859.32,
        "x": 1673568000
    },
    {
        "y": 19933.36,
        "x": 1673654400
    },
    {
        "y": 20955.15,
        "x": 1673740800
    },
    {
        "y": 20880.99,
        "x": 1673827200
    },
    {
        "y": 21190.49,
        "x": 1673913600
    },
    {
        "y": 21145.18,
        "x": 1674000000
    },
    {
        "y": 20672.78,
        "x": 1674086400
    },
    {
        "y": 21087.76,
        "x": 1674172800
    },
    {
        "y": 22693.45,
        "x": 1674259200
    },
    {
        "y": 22772.5,
        "x": 1674345600
    },
    {
        "y": 22724.23,
        "x": 1674432000
    },
    {
        "y": 22924.37,
        "x": 1674518400
    },
    {
        "y": 22634.47,
        "x": 1674604800
    },
    {
        "y": 23089.74,
        "x": 1674691200
    },
    {
        "y": 23008.29,
        "x": 1674777600
    },
    {
        "y": 23075.81,
        "x": 1674864000
    },
    {
        "y": 23032.23,
        "x": 1674950400
    },
    {
        "y": 23755.85,
        "x": 1675036800
    },
    {
        "y": 22836.09,
        "x": 1675123200
    },
    {
        "y": 23133.91,
        "x": 1675209600
    },
    {
        "y": 23722.02,
        "x": 1675296000
    },
    {
        "y": 23454.41,
        "x": 1675382400
    },
    {
        "y": 23440.09,
        "x": 1675468800
    },
    {
        "y": 23328.24,
        "x": 1675555200
    },
    {
        "y": 22936.95,
        "x": 1675641600
    },
    {
        "y": 22763.74,
        "x": 1675728000
    },
    {
        "y": 23254.79,
        "x": 1675814400
    },
    {
        "y": 22964.87,
        "x": 1675900800
    },
    {
        "y": 21794.05,
        "x": 1675987200
    },
    {
        "y": 21638.55,
        "x": 1676073600
    },
    {
        "y": 21861.84,
        "x": 1676160000
    },
    {
        "y": 21787.25,
        "x": 1676246400
    },
    {
        "y": 21787.99,
        "x": 1676332800
    }
]

    res = res.map(res => ({ y: res.y, x: res.x }))
    return res
}

async function getConfirmedTransactions() {
    var res = [
    {
        "y": 1.0387603117647062,
        "x": 1663372800
    },
    {
        "y": 0.945075824675325,
        "x": 1663459200
    },
    {
        "y": 1.2532212538461533,
        "x": 1663545600
    },
    {
        "y": 1.275621572368421,
        "x": 1663632000
    },
    {
        "y": 1.2179004397163125,
        "x": 1663718400
    },
    {
        "y": 1.2255284843749998,
        "x": 1663804800
    },
    {
        "y": 1.3804169925925929,
        "x": 1663891200
    },
    {
        "y": 1.04380405479452,
        "x": 1663977600
    },
    {
        "y": 0.9538612857142864,
        "x": 1664064000
    },
    {
        "y": 1.1799564199999992,
        "x": 1664150400
    },
    {
        "y": 1.4607683875968993,
        "x": 1664236800
    },
    {
        "y": 1.1130801733333338,
        "x": 1664323200
    },
    {
        "y": 1.215810685314685,
        "x": 1664409600
    },
    {
        "y": 1.1372198106508877,
        "x": 1664496000
    },
    {
        "y": 0.9314143867403312,
        "x": 1664582400
    },
    {
        "y": 0.9837532866242032,
        "x": 1664668800
    },
    {
        "y": 1.2453235649350645,
        "x": 1664755200
    },
    {
        "y": 1.1114347484662572,
        "x": 1664841600
    },
    {
        "y": 0.9779797542857142,
        "x": 1664928000
    },
    {
        "y": 1.140855396226415,
        "x": 1665014400
    },
    {
        "y": 1.1519270233918126,
        "x": 1665100800
    },
    {
        "y": 0.8557131257142854,
        "x": 1665187200
    },
    {
        "y": 0.883335449367089,
        "x": 1665273600
    },
    {
        "y": 1.050634654761905,
        "x": 1665360000
    },
    {
        "y": 1.1113075987261147,
        "x": 1665446400
    },
    {
        "y": 1.2116567372262772,
        "x": 1665532800
    },
    {
        "y": 1.3480974125874128,
        "x": 1665619200
    },
    {
        "y": 1.3204857499999996,
        "x": 1665705600
    },
    {
        "y": 1.0648617171052635,
        "x": 1665792000
    },
    {
        "y": 0.9598758472222225,
        "x": 1665878400
    },
    {
        "y": 1.1421443266666673,
        "x": 1665964800
    },
    {
        "y": 1.3007113521126765,
        "x": 1666051200
    },
    {
        "y": 1.3734424370860927,
        "x": 1666137600
    },
    {
        "y": 1.22090355862069,
        "x": 1666224000
    },
    {
        "y": 1.1408685000000005,
        "x": 1666310400
    },
    {
        "y": 1.1216811911764704,
        "x": 1666396800
    },
    {
        "y": 0.927848832258065,
        "x": 1666483200
    },
    {
        "y": 1.2878035514705892,
        "x": 1666569600
    },
    {
        "y": 1.1976668442622946,
        "x": 1666656000
    },
    {
        "y": 1.378651135483871,
        "x": 1666742400
    },
    {
        "y": 1.2746355407407404,
        "x": 1666828800
    },
    {
        "y": 1.149426201257862,
        "x": 1666915200
    },
    {
        "y": 1.1329760349650342,
        "x": 1667001600
    },
    {
        "y": 1.1389616740740744,
        "x": 1667088000
    },
    {
        "y": 1.0802008150289018,
        "x": 1667174400
    },
    {
        "y": 1.3080747430555557,
        "x": 1667260800
    },
    {
        "y": 1.252918754098361,
        "x": 1667347200
    },
    {
        "y": 1.1789289817073167,
        "x": 1667433600
    },
    {
        "y": 1.3512702868217052,
        "x": 1667520000
    },
    {
        "y": 1.1651228807947012,
        "x": 1667606400
    },
    {
        "y": 1.0726571970802918,
        "x": 1667692800
    },
    {
        "y": 1.1820038611111112,
        "x": 1667779200
    },
    {
        "y": 1.2245238098159508,
        "x": 1667865600
    },
    {
        "y": 1.3109500604026854,
        "x": 1667952000
    },
    {
        "y": 1.321115013605442,
        "x": 1668038400
    },
    {
        "y": 1.3116794477611942,
        "x": 1668124800
    },
    {
        "y": 1.0770087485029944,
        "x": 1668211200
    },
    {
        "y": 1.210634914728682,
        "x": 1668297600
    },
    {
        "y": 1.2942969756097555,
        "x": 1668384000
    },
    {
        "y": 1.335959690322581,
        "x": 1668470400
    },
    {
        "y": 1.3095630199999997,
        "x": 1668556800
    },
    {
        "y": 1.3021999347826085,
        "x": 1668643200
    },
    {
        "y": 1.3698237913669065,
        "x": 1668729600
    },
    {
        "y": 1.4969349047619043,
        "x": 1668816000
    },
    {
        "y": 1.424174744966443,
        "x": 1668902400
    },
    {
        "y": 1.4224287286821715,
        "x": 1668988800
    },
    {
        "y": 1.4230335317460314,
        "x": 1669075200
    },
    {
        "y": 1.474427063829787,
        "x": 1669161600
    },
    {
        "y": 1.5717014186046514,
        "x": 1669248000
    },
    {
        "y": 1.506700536585366,
        "x": 1669334400
    },
    {
        "y": 1.5199759816513767,
        "x": 1669420800
    },
    {
        "y": 1.1504716102941175,
        "x": 1669507200
    },
    {
        "y": 1.336178187050359,
        "x": 1669593600
    },
    {
        "y": 1.3612361221374047,
        "x": 1669680000
    },
    {
        "y": 1.2482112971014487,
        "x": 1669766400
    },
    {
        "y": 1.255363392156863,
        "x": 1669852800
    },
    {
        "y": 1.3924808799999993,
        "x": 1669939200
    },
    {
        "y": 1.3185752137404583,
        "x": 1670025600
    },
    {
        "y": 1.0863777000000001,
        "x": 1670112000
    },
    {
        "y": 1.246357904109589,
        "x": 1670198400
    },
    {
        "y": 1.3289437259259254,
        "x": 1670284800
    },
    {
        "y": 1.0295061976744189,
        "x": 1670371200
    },
    {
        "y": 1.004454652694611,
        "x": 1670457600
    },
    {
        "y": 1.180113157894737,
        "x": 1670544000
    },
    {
        "y": 1.2850532597402602,
        "x": 1670630400
    },
    {
        "y": 0.9720994421768707,
        "x": 1670716800
    },
    {
        "y": 1.200833188811189,
        "x": 1670803200
    },
    {
        "y": 1.1195085212121214,
        "x": 1670889600
    },
    {
        "y": 1.2053584324324325,
        "x": 1670976000
    },
    {
        "y": 1.235629726618705,
        "x": 1671062400
    },
    {
        "y": 1.183964853846154,
        "x": 1671148800
    },
    {
        "y": 1.2896539782608694,
        "x": 1671235200
    },
    {
        "y": 0.9801544137931034,
        "x": 1671321600
    },
    {
        "y": 1.3223222941176473,
        "x": 1671408000
    },
    {
        "y": 1.3143528285714288,
        "x": 1671494400
    },
    {
        "y": 1.2201296153846155,
        "x": 1671580800
    },
    {
        "y": 1.2444939999999993,
        "x": 1671667200
    },
    {
        "y": 1.2620145833333334,
        "x": 1671753600
    },
    {
        "y": 1.4493130561797747,
        "x": 1671840000
    },
    {
        "y": 0.9879369787234047,
        "x": 1671926400
    },
    {
        "y": 1.1192635116279068,
        "x": 1672012800
    },
    {
        "y": 1.3764050521739133,
        "x": 1672099200
    },
    {
        "y": 1.026325125,
        "x": 1672185600
    },
    {
        "y": 1.2632121843971629,
        "x": 1672272000
    },
    {
        "y": 1.3564298101265828,
        "x": 1672358400
    },
    {
        "y": 1.0717108461538463,
        "x": 1672444800
    },
    {
        "y": 0.8427004903225808,
        "x": 1672531200
    },
    {
        "y": 1.0212204935897442,
        "x": 1672617600
    },
    {
        "y": 1.2482563701298697,
        "x": 1672704000
    },
    {
        "y": 1.2244501678321678,
        "x": 1672790400
    },
    {
        "y": 1.1550252165605093,
        "x": 1672876800
    },
    {
        "y": 1.0527042888888885,
        "x": 1672963200
    },
    {
        "y": 0.9565663636363639,
        "x": 1673049600
    },
    {
        "y": 0.9051754509803915,
        "x": 1673136000
    },
    {
        "y": 1.2354843881578947,
        "x": 1673222400
    },
    {
        "y": 1.3784992485207108,
        "x": 1673308800
    },
    {
        "y": 1.2952269591836736,
        "x": 1673395200
    },
    {
        "y": 1.3506500198675497,
        "x": 1673481600
    },
    {
        "y": 1.278143056603773,
        "x": 1673568000
    },
    {
        "y": 1.1134006608187137,
        "x": 1673654400
    },
    {
        "y": 0.8761467300613498,
        "x": 1673740800
    },
    {
        "y": 1.260744619047619,
        "x": 1673827200
    },
    {
        "y": 1.2421233589743588,
        "x": 1673913600
    },
    {
        "y": 1.3392869071428561,
        "x": 1674000000
    },
    {
        "y": 1.2959688896551727,
        "x": 1674086400
    },
    {
        "y": 1.293477098484848,
        "x": 1674172800
    },
    {
        "y": 1.177075246376812,
        "x": 1674259200
    },
    {
        "y": 1.1015247947019866,
        "x": 1674345600
    },
    {
        "y": 1.1005096139240504,
        "x": 1674432000
    },
    {
        "y": 1.3420454263565889,
        "x": 1674518400
    },
    {
        "y": 1.0009242571428576,
        "x": 1674604800
    },
    {
        "y": 1.1061077999999993,
        "x": 1674691200
    },
    {
        "y": 1.1416405779220786,
        "x": 1674777600
    },
    {
        "y": 0.9601554166666668,
        "x": 1674864000
    },
    {
        "y": 0.9890340559006203,
        "x": 1674950400
    },
    {
        "y": 1.331806333333333,
        "x": 1675036800
    },
    {
        "y": 1.5394536000000008,
        "x": 1675123200
    },
    {
        "y": 1.5758903795620436,
        "x": 1675209600
    },
    {
        "y": 1.4260836068965514,
        "x": 1675296000
    },
    {
        "y": 1.4617055563909778,
        "x": 1675382400
    },
    {
        "y": 1.7588637720588232,
        "x": 1675468800
    },
    {
        "y": 1.6290970592105256,
        "x": 1675555200
    },
    {
        "y": 2.203473168918918,
        "x": 1675641600
    },
    {
        "y": 2.142792676056337,
        "x": 1675728000
    },
    {
        "y": 2.108701760869565,
        "x": 1675814400
    },
    {
        "y": 2.1439365370370354,
        "x": 1675900800
    },
    {
        "y": 2.0646328843537427,
        "x": 1675987200
    },
    {
        "y": 2.3520763892617444,
        "x": 1676073600
    },
    {
        "y": 2.5247853664596285,
        "x": 1676160000
    },
    {
        "y": 2.162067403846153,
        "x": 1676246400
    }
]

    res = res.map(res => ({ y: res.y, x: res.x }))
    return res
}