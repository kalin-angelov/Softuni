function printDNA(dna) {

    let helix = dna;
    while (helix > 0) {
        console.log(`**AT**`);
        helix -= 1;
        if (helix === 0) {
            break;
        }
        console.log(`*C--G*`);
        helix -= 1;
        if (helix === 0) {
            break;
        }
        console.log(`T----T`);
        helix -= 1;
        if (helix === 0) {
            break;
        }
        console.log(`*A--G*`);
        helix -=1;
        if (helix === 0) {
            break;
        }
        console.log(`**GG**`);
        helix -= 1;
        if (helix === 0) {
            break;
        }
        console.log(`*A--T*`);
        helix -= 1;
        if (helix === 0) {
            break;
        }
        console.log(`C----G`);
        helix -= 1;
        if (helix === 0) {
            break;
        }
        console.log(`*T--T*`);
        helix -= 1;
        if (helix === 0) {
            break;
        }
        console.log(`**AG**`);
        helix -= 1;
        if (helix === 0) {
            break;
        }
        console.log(`*G--G*`);
        helix -= 1;
        if (helix === 0) {
            break;
        }
        console.log(`A----T`);
        helix -= 1;
        if (helix === 0) {
            break;
        }
        console.log(`*C--G*`);
        helix -= 1;
        if (helix === 0) {
            break;
        }
        console.log(`**TT**`);
        helix -= 1;
        if (helix === 0) {
            break;
        }
        console.log(`*A--G*`);
        helix -= 1;
        if (helix === 0) {
            break;
        }
        console.log(`G----G`);
        helix -= 1;
        if (helix === 0) {
            break;
        }
        console.log(`*A--T*`);
        helix -= 1;
        if (helix === 0) {
            break;
        }
        console.log(`**CG**`);
        helix -= 1;
        if (helix === 0) {
            break;
        }
        console.log(`*T--T*`);
        helix -= 1;
        if (helix === 0) {
            break;
        }
        console.log(`A----G`);
        helix -= 1;
        if (helix === 0) {
            break;
        }
        console.log(`*G--G*`);
        helix -= 1;
        if (helix === 0) {
            break;
        }
    }
}
printDNA(10);
