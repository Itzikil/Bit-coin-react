import axios from 'axios'

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}

async function getRate(coins) {
    const dollarToBitcoin = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=100`)
    return (1 / dollarToBitcoin.data) * coins  
}

async function getConfirmedTransactions() {
    var res = [{ "x": 1659052800, "y": 23856.25 }, { "x": 1659139200, "y": 23792.0 }, { "x": 1659225600, "y": 23647.99 }, { "x": 1659312000, "y": 23326.49 },
    { "x": 1659398400, "y": 23298.94 }, { "x": 1659484800, "y": 22981.77 }, { "x": 1659571200, "y": 22831.85 }, { "x": 1659657600, "y": 22608.3 }, { "x": 1659744000, "y": 23295.14 }
        , { "x": 1659830400, "y": 22947.19 }, { "x": 1659916800, "y": 23174.25 }, { "x": 1660003200, "y": 23816.32 }, { "x": 1660089600, "y": 23156.31 }
        , { "x": 1660176000, "y": 23959.92 }, { "x": 1660262400, "y": 23953.77 }, { "x": 1660348800, "y": 24418.38 }, { "x": 1660435200, "y": 24447.13 },
    { "x": 1660521600, "y": 24314.89 }, { "x": 1660608000, "y": 24096.19 }, { "x": 1660694400, "y": 23876.29 }, { "x": 1660780800, "y": 23332.09 },
    { "x": 1660867200, "y": 23193.99 }, { "x": 1660953600, "y": 20843.22 }, { "x": 1661040000, "y": 21150.33 }, { "x": 1661126400, "y": 21520.51 },
    { "x": 1661212800, "y": 21402.93 }, { "x": 1661299200, "y": 21516.02 }, { "x": 1661385600, "y": 21377.51 }, { "x": 1661472000, "y": 21597.93 },
    { "x": 1661558400, "y": 20233.32 }, { "x": 1661644800, "y": 20035.59 }, { "x": 1661731200, "y": 19550.07 }, { "x": 1661817600, "y": 20290.41 },
    { "x": 1661904000, "y": 19793.02 }, { "x": 1661990400, "y": 20047.68 }, { "x": 1662076800, "y": 20130.52 }, { "x": 1662163200, "y": 19952.91 },
    { "x": 1662249600, "y": 19834.94 }, { "x": 1662336000, "y": 19994.65 }, { "x": 1662422400, "y": 19789.87 }, { "x": 1662508800, "y": 18806.7 },
    { "x": 1662595200, "y": 19280.08 }, { "x": 1662681600, "y": 19327.53 }, { "x": 1662768000, "y": 21387.58 }, { "x": 1662854400, "y": 21673.03 },
    { "x": 1662940800, "y": 21794.52 }, { "x": 1663027200, "y": 22392.71 }, { "x": 1663113600, "y": 20172.56 }, { "x": 1663200000, "y": 20219.55 },
    { "x": 1663286400, "y": 19694.69 }, { "x": 1663372800, "y": 19787.61 }, { "x": 1663459200, "y": 20122.71 }, { "x": 1663545600, "y": 19415.86 },
    { "x": 1663632000, "y": 19542.2 }, { "x": 1663718400, "y": 18879.96 }, { "x": 1663804800, "y": 18507.36 }, { "x": 1663891200, "y": 19408.63 },
    { "x": 1663977600, "y": 19280.58 }, { "x": 1664064000, "y": 18931.79 }, { "x": 1664150400, "y": 18807.71 }, { "x": 1664236800, "y": 19227.26 },
    { "x": 1664323200, "y": 19104.89 }, { "x": 1664409600, "y": 19530.71 }, { "x": 1664496000, "y": 19598.86 }, { "x": 1664582400, "y": 19427.2 },
    { "x": 1664668800, "y": 19314.69 }, { "x": 1664755200, "y": 19049.72 }, { "x": 1664841600, "y": 19632.61 }, { "x": 1664928000, "y": 20342.25 },
    { "x": 1665014400, "y": 20167.79 }, { "x": 1665100800, "y": 19956.49 }, { "x": 1665187200, "y": 19544.82 }, { "x": 1665273600, "y": 19417.73 },
    { "x": 1665360000, "y": 19441.88 }, { "x": 1665446400, "y": 19132.52 }, { "x": 1665532800, "y": 19049.64 }, { "x": 1665619200, "y": 19156.21 },
    { "x": 1665705600, "y": 19383.33 }, { "x": 1665792000, "y": 19184.71 }, { "x": 1665878400, "y": 19063.1 }, { "x": 1665964800, "y": 19265.53 },
    { "x": 1666051200, "y": 19548.97 }, { "x": 1666137600, "y": 19330.74 }, { "x": 1666224000, "y": 19125.65 }, { "x": 1666310400, "y": 19046.83 },
    { "x": 1666396800, "y": 19171.34 }, { "x": 1666483200, "y": 19205.45 }, { "x": 1666569600, "y": 19565.91 }, { "x": 1666656000, "y": 19338.9 },
    { "x": 1666742400, "y": 20101.27 }, { "x": 1666828800, "y": 20772.36 }, { "x": 1666915200, "y": 20288.52 }, { "x": 1667001600, "y": 20601.63 },
    { "x": 1667088000, "y": 20816.16 }, { "x": 1667174400, "y": 20628.5 }, { "x": 1667260800, "y": 20499.29 }, { "x": 1667347200, "y": 20486.26 },
    { "x": 1667433600, "y": 20153.99 }, { "x": 1667520000, "y": 20208.16 }, { "x": 1667606400, "y": 21152.93 }, { "x": 1667692800, "y": 21292.67 },
    { "x": 1667779200, "y": 20920.33 }, { "x": 1667865600, "y": 20598.44 }, { "x": 1667952000, "y": 18540.11 }, { "x": 1668038400, "y": 15856.95 },
    { "x": 1668124800, "y": 17550.23 }, { "x": 1668211200, "y": 16990.26 }, { "x": 1668297600, "y": 16776.4 }, { "x": 1668384000, "y": 16310.3 },
    { "x": 1668470400, "y": 16587.96 }, { "x": 1668556800, "y": 16873.56 }, { "x": 1668643200, "y": 16662.24 }, { "x": 1668729600, "y": 16682.44 },
    { "x": 1668816000, "y": 16683.22 }, { "x": 1668902400, "y": 16687.8 }, { "x": 1668988800, "y": 16260.41 }, { "x": 1669075200, "y": 15759.61 },
    { "x": 1669161600, "y": 16194.75 }, { "x": 1669248000, "y": 16606.77 }, { "x": 1669334400, "y": 16592.67 }, { "x": 1669420800, "y": 16507.44 },
    { "x": 1669507200, "y": 16453.47 }, { "x": 1669593600, "y": 16420.2 }, { "x": 1669680000, "y": 16208.96 }, { "x": 1669766400, "y": 16432.73 },
    { "x": 1669852800, "y": 17170.62 }, { "x": 1669939200, "y": 16971.57 }, { "x": 1670025600, "y": 17091.23 }, { "x": 1670112000, "y": 16894.23 },
    { "x": 1670198400, "y": 17117.57 }, { "x": 1670284800, "y": 16967.02 }, { "x": 1670371200, "y": 17085.45 }, { "x": 1670457600, "y": 16836.05 },
    { "x": 1670544000, "y": 17234.58 }, { "x": 1670630400, "y": 17128.55 }, { "x": 1670716800, "y": 17124.99 }, { "x": 1670803200, "y": 17098.61 },
    { "x": 1670889600, "y": 17206.87 }, { "x": 1670976000, "y": 17771.03 }, { "x": 1671062400, "y": 17802.44 }, { "x": 1671148800, "y": 17357.47 },
    { "x": 1671235200, "y": 16637.6 }, { "x": 1671321600, "y": 16783.6 }, { "x": 1671408000, "y": 16745.99 }, { "x": 1671494400, "y": 16439.89 },
    { "x": 1671580800, "y": 16904.64 }, { "x": 1671667200, "y": 16813.62 }, { "x": 1671753600, "y": 16818.68 }, { "x": 1671840000, "y": 16779.71 },
    { "x": 1671926400, "y": 16838.1 }, { "x": 1672012800, "y": 16826.86 }]
    // var res = await axios.get(
    //     `https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true`
    //   )
    //   res = res.data.values.map(res=> res.y)
      res = res.map(res=> res.y)
    return res
}

async function getMarketPrice() {
    var res = [{ "x": 1659052800, "y": 23856.25 }, { "x": 1659139200, "y": 23792.0 }, { "x": 1659225600, "y": 23647.99 }, { "x": 1659312000, "y": 23326.49 },
    { "x": 1659398400, "y": 23298.94 }, { "x": 1659484800, "y": 22981.77 }, { "x": 1659571200, "y": 22831.85 }, { "x": 1659657600, "y": 22608.3 }, { "x": 1659744000, "y": 23295.14 }
        , { "x": 1659830400, "y": 22947.19 }, { "x": 1659916800, "y": 23174.25 }, { "x": 1660003200, "y": 23816.32 }, { "x": 1660089600, "y": 23156.31 }
        , { "x": 1660176000, "y": 23959.92 }, { "x": 1660262400, "y": 23953.77 }, { "x": 1660348800, "y": 24418.38 }, { "x": 1660435200, "y": 24447.13 },
    { "x": 1660521600, "y": 24314.89 }, { "x": 1660608000, "y": 24096.19 }, { "x": 1660694400, "y": 23876.29 }, { "x": 1660780800, "y": 23332.09 },
    { "x": 1660867200, "y": 23193.99 }, { "x": 1660953600, "y": 20843.22 }, { "x": 1661040000, "y": 21150.33 }, { "x": 1661126400, "y": 21520.51 },
    { "x": 1661212800, "y": 21402.93 }, { "x": 1661299200, "y": 21516.02 }, { "x": 1661385600, "y": 21377.51 }, { "x": 1661472000, "y": 21597.93 },
    { "x": 1661558400, "y": 20233.32 }, { "x": 1661644800, "y": 20035.59 }, { "x": 1661731200, "y": 19550.07 }, { "x": 1661817600, "y": 20290.41 },
    { "x": 1661904000, "y": 19793.02 }, { "x": 1661990400, "y": 20047.68 }, { "x": 1662076800, "y": 20130.52 }, { "x": 1662163200, "y": 19952.91 },
    { "x": 1662249600, "y": 19834.94 }, { "x": 1662336000, "y": 19994.65 }, { "x": 1662422400, "y": 19789.87 }, { "x": 1662508800, "y": 18806.7 },
    { "x": 1662595200, "y": 19280.08 }, { "x": 1662681600, "y": 19327.53 }, { "x": 1662768000, "y": 21387.58 }, { "x": 1662854400, "y": 21673.03 },
    { "x": 1662940800, "y": 21794.52 }, { "x": 1663027200, "y": 22392.71 }, { "x": 1663113600, "y": 20172.56 }, { "x": 1663200000, "y": 20219.55 },
    { "x": 1663286400, "y": 19694.69 }, { "x": 1663372800, "y": 19787.61 }, { "x": 1663459200, "y": 20122.71 }, { "x": 1663545600, "y": 19415.86 },
    { "x": 1663632000, "y": 19542.2 }, { "x": 1663718400, "y": 18879.96 }, { "x": 1663804800, "y": 18507.36 }, { "x": 1663891200, "y": 19408.63 },
    { "x": 1663977600, "y": 19280.58 }, { "x": 1664064000, "y": 18931.79 }, { "x": 1664150400, "y": 18807.71 }, { "x": 1664236800, "y": 19227.26 },
    { "x": 1664323200, "y": 19104.89 }, { "x": 1664409600, "y": 19530.71 }, { "x": 1664496000, "y": 19598.86 }, { "x": 1664582400, "y": 19427.2 },
    { "x": 1664668800, "y": 19314.69 }, { "x": 1664755200, "y": 19049.72 }, { "x": 1664841600, "y": 19632.61 }, { "x": 1664928000, "y": 20342.25 },
    { "x": 1665014400, "y": 20167.79 }, { "x": 1665100800, "y": 19956.49 }, { "x": 1665187200, "y": 19544.82 }, { "x": 1665273600, "y": 19417.73 },
    { "x": 1665360000, "y": 19441.88 }, { "x": 1665446400, "y": 19132.52 }, { "x": 1665532800, "y": 19049.64 }, { "x": 1665619200, "y": 19156.21 },
    { "x": 1665705600, "y": 19383.33 }, { "x": 1665792000, "y": 19184.71 }, { "x": 1665878400, "y": 19063.1 }, { "x": 1665964800, "y": 19265.53 },
    { "x": 1666051200, "y": 19548.97 }, { "x": 1666137600, "y": 19330.74 }, { "x": 1666224000, "y": 19125.65 }, { "x": 1666310400, "y": 19046.83 },
    { "x": 1666396800, "y": 19171.34 }, { "x": 1666483200, "y": 19205.45 }, { "x": 1666569600, "y": 19565.91 }, { "x": 1666656000, "y": 19338.9 },
    { "x": 1666742400, "y": 20101.27 }, { "x": 1666828800, "y": 20772.36 }, { "x": 1666915200, "y": 20288.52 }, { "x": 1667001600, "y": 20601.63 },
    { "x": 1667088000, "y": 20816.16 }, { "x": 1667174400, "y": 20628.5 }, { "x": 1667260800, "y": 20499.29 }, { "x": 1667347200, "y": 20486.26 },
    { "x": 1667433600, "y": 20153.99 }, { "x": 1667520000, "y": 20208.16 }, { "x": 1667606400, "y": 21152.93 }, { "x": 1667692800, "y": 21292.67 },
    { "x": 1667779200, "y": 20920.33 }, { "x": 1667865600, "y": 20598.44 }, { "x": 1667952000, "y": 18540.11 }, { "x": 1668038400, "y": 15856.95 },
    { "x": 1668124800, "y": 17550.23 }, { "x": 1668211200, "y": 16990.26 }, { "x": 1668297600, "y": 16776.4 }, { "x": 1668384000, "y": 16310.3 },
    { "x": 1668470400, "y": 16587.96 }, { "x": 1668556800, "y": 16873.56 }, { "x": 1668643200, "y": 16662.24 }, { "x": 1668729600, "y": 16682.44 },
    { "x": 1668816000, "y": 16683.22 }, { "x": 1668902400, "y": 16687.8 }, { "x": 1668988800, "y": 16260.41 }, { "x": 1669075200, "y": 15759.61 },
    { "x": 1669161600, "y": 16194.75 }, { "x": 1669248000, "y": 16606.77 }, { "x": 1669334400, "y": 16592.67 }, { "x": 1669420800, "y": 16507.44 },
    { "x": 1669507200, "y": 16453.47 }, { "x": 1669593600, "y": 16420.2 }, { "x": 1669680000, "y": 16208.96 }, { "x": 1669766400, "y": 16432.73 },
    { "x": 1669852800, "y": 17170.62 }, { "x": 1669939200, "y": 16971.57 }, { "x": 1670025600, "y": 17091.23 }, { "x": 1670112000, "y": 16894.23 },
    { "x": 1670198400, "y": 17117.57 }, { "x": 1670284800, "y": 16967.02 }, { "x": 1670371200, "y": 17085.45 }, { "x": 1670457600, "y": 16836.05 },
    { "x": 1670544000, "y": 17234.58 }, { "x": 1670630400, "y": 17128.55 }, { "x": 1670716800, "y": 17124.99 }, { "x": 1670803200, "y": 17098.61 },
    { "x": 1670889600, "y": 17206.87 }, { "x": 1670976000, "y": 17771.03 }, { "x": 1671062400, "y": 17802.44 }, { "x": 1671148800, "y": 17357.47 },
    { "x": 1671235200, "y": 16637.6 }, { "x": 1671321600, "y": 16783.6 }, { "x": 1671408000, "y": 16745.99 }, { "x": 1671494400, "y": 16439.89 },
    { "x": 1671580800, "y": 16904.64 }, { "x": 1671667200, "y": 16813.62 }, { "x": 1671753600, "y": 16818.68 }, { "x": 1671840000, "y": 16779.71 },
    { "x": 1671926400, "y": 16838.1 }, { "x": 1672012800, "y": 16826.86 }]
    // var res = await axios.get(
    //     `https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`
    //   )
    //   res = res.data.values.map(res=> res.y)
      res = res.map(res=> res.y)
    return res
}