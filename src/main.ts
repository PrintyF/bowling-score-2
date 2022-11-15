export function bowlingScore(results: Array<number>): number {
    let bonus = 1;
    let frame = 0;
    for (let i = 0; i < results.length; i++) {
        results[i] *= bonus;
        if (bonus > 2)
            bonus--;
        if (frame % 2 === 1 && bonus > 1)
            bonus--;
        if (results[i] === 10) {
            bonus++;
            frame++;
        }
        else if (results[i] === 20) {
            bonus++;
            frame++;
        }
        else if (results[i] === 30) {
            bonus++;
            frame++;
        }
        frame++;
    }
    return results.reduce((accumulator, value) => accumulator + value);
}
