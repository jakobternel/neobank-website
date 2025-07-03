// Cryptocurrencies to be shown in crypto investing benefits section. Used on hovering icons element and in random generated daily change elements

// Import cryptocurrency icons
const bitcoin = require("../assets/cryptoIcons/bitcoin.png");
const dogecoin = require("../assets/cryptoIcons/dogecoin.png");
const ethereum = require("../assets/cryptoIcons/ethereum.png");
const monero = require("../assets/cryptoIcons/monero.png");

export interface ICrypto {
    cryptoName: string;
    offsetX: number;
    offsetY: number;
    delay: number;
    icon: string;
}

export const cryptocurrencies: ICrypto[] = [
    {
        cryptoName: "bitcoin",
        offsetX: -200,
        offsetY: -150,
        delay: 0,
        icon: bitcoin,
    },
    {
        cryptoName: "monero",
        offsetX: 200,
        offsetY: -150,
        delay: 250,
        icon: monero,
    },
    {
        cryptoName: "dogecoin",
        offsetX: -75,
        offsetY: -250,
        delay: 500,
        icon: dogecoin,
    },
    {
        cryptoName: "ethereum",
        offsetX: 75,
        offsetY: -250,
        delay: 750,
        icon: ethereum,
    },
];
