export function bowlingScore(results: Array<number>): number {
    let bonus = 1;
    let frame = 0;
    for (let i = 0; i < results.length; i++) {
        results[i] *= bonus;
        if (frame % 2 === 0 && bonus > 1)
            bonus--;
        if (results[i] === 10) {
            bonus++;
            frame++;
        }
        frame++;
    }
    return results.reduce((accumulator, value) => accumulator + value);
}
