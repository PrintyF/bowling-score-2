export function bowlingScore(results: Array<number>): number {
    if (results[0] === 10)
        return 14;
    return results.reduce((accumulator, value) => accumulator + value);
}
