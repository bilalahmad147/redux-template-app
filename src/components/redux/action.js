export const BUY_CAKE = "BUY_CAKE";

export const buyCake = number => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}