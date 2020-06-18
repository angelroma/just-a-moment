export const LOAD_DATA = "LOAD_DATA"

export const loadData = payload => ({
    type: LOAD_DATA,
    data: payload.data,
})