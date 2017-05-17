exports.setHiddenPoints = async (dynamicHiddenCap, points) => {
    const hashes = [];
    let i = 0;
    for (let p of points) {
        const h = await dynamicHiddenCap.calculateHash(
            p[ 0 ],
            p[ 1 ],
            i === points.length - 1,
            web3.sha3(`pwd${ i }`));
        hashes.push(h);
        i += 1;
    }
    for (; i < 10; i += 1) {
        hashes.push(web3.sha3(`pwd${ i }`));
    }
    await dynamicHiddenCap.setHiddenPoints(hashes);
};
