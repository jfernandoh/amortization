export const maskConfigInitial = {
    mask: Number,
    scale: 2,
    signed: false,
    thousandsSeparator: '',
    padFractionalZeros: false,
    normalizeZeros: true,
    radix: '.',
    mapToRadix: ['.'],
    max: 100,
};

export const maskConfigAmount = {
    mask: [
        { mask: '' },
        {
            mask: 'num',
            lazy: false,
            blocks: {
                num: {
                    mask: Number,
                    scale: 0,
                    thousandsSeparator: ',',
                    padFractionalZeros: true,
                }
            }
        }
    ]
}; 