export function bowlingScore(results: Array<number>): number {
    return results.reduce((accumulator, value) => accumulator + value);
}
