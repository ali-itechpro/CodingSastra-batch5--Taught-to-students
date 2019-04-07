export function drawStars(n) {
    let stars = "";
    for (let i = 0; i < n; i++) {
        stars += "*";
    }
    return stars;
} 



export function drawDashes(n) {
    let dashes = "";
    for (let i = 0; i < n; i++) {
        dashes += "-";
    }
    return dashes;
}