export function bowlingScore(results: Array<number>): number {
    let bonus = 1;
    for (let i = 0; i < results.length; i++) {
        results[i] *= bonus;
        if (results[i] === 10) {
            bonus++;
        }

    }
    return results.reduce((accumulator, value) => accumulator + value);
}
