import crypto from 'crypto'

export function sign(srcData: string, privateKey: string): string {
    const key = crypto.createPrivateKey(privateKey);
    const signer = crypto.createSign("RSA-SHA256");
    signer.update(srcData);
    const signature = signer.sign(key);
    return signature.toString("base64");
}

export const populate_GET_RequestSigContent = (walletAddress: string, merchantCode: string, timestamp: string) => {
  return `cryptoAddress=${walletAddress}&cryptoNetwork=ERC20&merchantCode=${merchantCode}&timestamp=${timestamp}`
}

export const populatBuildTradeParams = (params) => {
  return `?cryptoCurrency=${params.cryptoCurrency}&fiatCurrency=${params.fiatCurrency}&orderAmount=${params.amount}&cryptoAddress=${params.walletAddress}&cryptoNetwork=BNB&merchantCode=pancake_swap_test&timestamp=${params.timestamp}&signature=${params.signature}`
}

export const populateMoonPayUrl = (moonPayParams) => {
  return `&theme=${moonPayParams.theme}&colorCode=#82DBE3&defaultCurrencyCode=${moonPayParams.defaultCurrencyCode}&baseCurrencyCode=${moonPayParams.baseCurrencyCode}&baseCurrencyAmount=${moonPayParams.baseCurrencyAmount}&walletAddresses=${moonPayParams.encodedWalletAddresses}`
}