
// AUTHENTICATION
export const REGISTER_BUSINESS_URL = `/accounts/register/business/`;
export const REGISTER_AS_DEVELOPER_URL = `/accounts/register/`;
export const LOGIN_URL = `/accounts/login/`;
export const LOGOUT_URL = `/accounts/logout/`;
export const UPDATE_PASSWORD_URL = `/accounts/profile/update/password/`
export const REQUEST_PASSWORD_RESET_URL = `/accounts/request/password/reset/`
export const CONFIRM_PASSWORD_RESET_URL = (encoded_pk, token) => `/accounts/password-reset/${encoded_pk}/${token}/`
export const GENERATE_OR_RESET_API_KEY_URL = `/accounts/generate/api-key/`

// BLOCK PAY
export const BP_GENERATE_PAYMENT_ADDRESS_URL = (currency) => `/pricing/pay/${currency}/`
export const BP_PAYMENT_CONFIRMATION_URL = (currency) => `/pricing/pay/confirm/${currency}/`

// DASHBOARD
export const GET_DASHBOARD_DATA_URL = `/accounts/dashboard/`

// MARKET DATA
export const GET_ALL_COINS_URL = `/coins/`
export const GET_ALL_COIN_PRICES_URL = `/coins/prices/`
export const GET_SPECIFIC_COIN_DATA_URL = (coin) => `/coins/prices/${coin}/`

// PAYMENT PRICING
export const PRICING_DATA_URL = (period, plan) => `/pricing/payment/${period}/${plan}/`
export const PAYMENT_CONFIRMATION_URL = (period, plan) => `/pricing/payment/${period}/${plan}/`
export const GET_BILLING_DATA_URL = `/pricing/billing/`

// WALLET
export const CREATE_NC_BTC_WALLET_URL = `/wallet/create/btc/`
export const GET_NC_BTC_WALLET_DETAILS_URL = (providerId) => `/wallet/details/${providerId}/btc/`
export const SEND_BTC_USING_MNEMONIC_URL = (providerId) => `/wallet/transfer/${providerId}/btc/`
export const IMPORT_BTC_WALLET_USING_MNEMONIC_URL = `/wallet/restore/mnemonic/btc/`
export const IMPORT_BTC_WALLET_USING_PK_URL = `/wallet/restore/private-key/btc/`
