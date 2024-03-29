export const useUtilities = () => {
    function toTitleCase(str: any) {
        return str.replace(
            /\w\s*/g
            , function (txt: any) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            })
    }
    return {
        toTitleCase
    }
}
export const throwError = (code: number, mes: string) => {
    throw createError({
        statusCode: code,
        message: mes
    })
}