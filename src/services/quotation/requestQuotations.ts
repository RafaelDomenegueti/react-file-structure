import Api from "../api";

export async function requestQuotations() {
    return await Api.get('json/last/USD-BRL,EUR-BRL,BTC-BRL')
}