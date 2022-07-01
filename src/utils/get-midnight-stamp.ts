export function getMidnightStamp(): Date {
    const midnight = new Date()
    midnight.setHours(23, 59, 59, 0)
    return midnight
}
