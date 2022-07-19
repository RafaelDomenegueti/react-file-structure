import Api from "../api";

async function requestDolarPrice(token: string) {
    return await Api.get('json/last/USD-BRL')
}