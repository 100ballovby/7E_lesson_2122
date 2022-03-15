let rates = {
    "provider": "https://www.exchangerate-api.com",
    "WARNING_UPGRADE_TO_V6": "https://www.exchangerate-api.com/docs/free",
    "terms": "https://www.exchangerate-api.com/terms",
    "base": "USD",
    "date": "2022-03-15",
    "time_last_updated": 1647302401,
    "rates": {
        "USD": 1,
        "AED": 3.67,
        "AFN": 89.36,
        "ALL": 112.64,
        "AMD": 515.58,
        "ANG": 1.79,
        "AOA": 465.08,
        "ARS": 108.98,
        "AUD": 1.38,
        "AWG": 1.79,
        "AZN": 1.7,
        "BAM": 1.79,
        "BBD": 2,
        "BDT": 85.31,
        "BGN": 1.79,
        "BHD": 0.376,
        "BIF": 2001.69,
        "BMD": 1,
        "BND": 1.37,
        "BOB": 6.87,
        "BRL": 5.07,
        "BSD": 1,
        "BTN": 76.48,
        "BWP": 11.67,
        "BYN": 3.03,
        "BZD": 2,
        "CAD": 1.28,
        "CDF": 1997.57,
        "CHF": 0.937,
        "CLP": 805.33,
        "CNY": 6.37,
        "COP": 3823.67,
        "CRC": 647.97,
        "CUP": 24,
        "CVE": 100.69,
        "CZK": 22.75,
        "DJF": 177.72,
        "DKK": 6.81,
        "DOP": 54.87,
        "DZD": 143.39,
        "EGP": 15.71,
        "ERN": 15,
        "ETB": 51.04,
        "EUR": 0.913,
        "FJD": 2.11,
        "FKP": 0.767,
        "FOK": 6.81,
        "GBP": 0.767,
        "GEL": 3.23,
        "GGP": 0.767,
        "GHS": 7.94,
        "GIP": 0.767,
        "GMD": 53.68,
        "GNF": 9025.91,
        "GTQ": 7.7,
        "GYD": 210.49,
        "HKD": 7.83,
        "HNL": 24.58,
        "HRK": 6.88,
        "HTG": 104.53,
        "HUF": 342.51,
        "IDR": 14253.81,
        "ILS": 3.28,
        "IMP": 0.767,
        "INR": 76.48,
        "IQD": 1468.57,
        "IRR": 41945.56,
        "ISK": 132.35,
        "JEP": 0.767,
        "JMD": 153.37,
        "JOD": 0.709,
        "JPY": 118.06,
        "KES": 114.43,
        "KGS": 104.39,
        "KHR": 4086.11,
        "KID": 1.38,
        "KMF": 449.23,
        "KRW": 1238.38,
        "KWD": 0.3,
        "KYD": 0.833,
        "KZT": 517.52,
        "LAK": 12511.86,
        "LBP": 1507.5,
        "LKR": 251.58,
        "LRD": 154.24,
        "LSL": 15.1,
        "LYD": 4.69,
        "MAD": 9.43,
        "MDL": 18.43,
        "MGA": 3042.09,
        "MKD": 56.21,
        "MMK": 1765.68,
        "MNT": 2910.25,
        "MOP": 8.07,
        "MRU": 36.62,
        "MUR": 44.01,
        "MVR": 15.38,
        "MWK": 820.33,
        "MXN": 20.89,
        "MYR": 4.19,
        "MZN": 63.34,
        "NAD": 15.1,
        "NGN": 415.81,
        "NIO": 35.85,
        "NOK": 9.02,
        "NPR": 122.37,
        "NZD": 1.48,
        "OMR": 0.384,
        "PAB": 1,
        "PEN": 3.71,
        "PGK": 3.53,
        "PHP": 52.44,
        "PKR": 179.21,
        "PLN": 4.32,
        "PYG": 6806.17,
        "QAR": 3.64,
        "RON": 4.51,
        "RSD": 107.26,
        "RUB": 116.95,
        "RWF": 1048.18,
        "SAR": 3.75,
        "SBD": 7.88,
        "SCR": 14.41,
        "SDG": 445.43,
        "SEK": 9.62,
        "SGD": 1.37,
        "SHP": 0.767,
        "SLL": 11679.2,
        "SOS": 582.05,
        "SRD": 20.73,
        "SSP": 428.6,
        "STN": 22.37,
        "SYP": 2516.28,
        "SZL": 15.1,
        "THB": 33.42,
        "TJS": 12.11,
        "TMT": 3.5,
        "TND": 2.78,
        "TOP": 2.23,
        "TRY": 14.79,
        "TTD": 6.77,
        "TVD": 1.38,
        "TWD": 28.44,
        "TZS": 2315.08,
        "UAH": 30.48,
        "UGX": 3602.27,
        "UYU": 42.7,
        "UZS": 10940.04,
        "VES": 4.28,
        "VND": 22875.69,
        "VUV": 112.81,
        "WST": 2.58,
        "XAF": 598.97,
        "XCD": 2.7,
        "XDR": 0.723,
        "XOF": 598.97,
        "XPF": 108.97,
        "YER": 250.91,
        "ZAR": 15.1,
        "ZMW": 18.2,
        "ZWL": 130
    }
}


function fill_table(obj) {
    let table = document.querySelector('tbody');
    let exchange = obj['rates'];  // достаю все курсы из ключа rates

    for (let cur in exchange) {  // перебираю курсы валют
        let tr = document.createElement('tr'); // создаю строку таблицы
        // и две ячейки
        let name = document.createElement('td');
        let rate = document.createElement('td');

        name.innerHTML = cur;  // записываю название валюты
        rate.innerHTML = exchange[cur];  // записываю курс обмена определенной валюты

        tr.appendChild(name);  // добавляю в строку название валюты
        tr.appendChild(rate);  // добавляю в строку курс обмена
        table.appendChild(tr);  // добавляю строку в таблицу
    }
}

fill_table(rates);