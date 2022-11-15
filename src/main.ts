export function bowlingScore(results: Array<number>): number {
    let bonus = 1;
    let frame = 0;
    let score = [];
    for (let i = 0; i < results.length; i++) {
        score.push(results[i] * bonus);
        if (bonus === 3)
            bonus--;
        if (bonus > 1 && results[i - 1] != 10)
            bonus--;
        if (results[i] + results[i - 1] === 10 && frame % 2 === 1)
            bonus++;
        if (results[i] === 10) {
            bonus++;
            frame++;
        }
        frame++;
    }
    return score.reduce((accumulator, value) => accumulator + value);
}
