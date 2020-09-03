export function setRandomBg() {
    let arr = [];
    let str = '#c1cbd7 #afb0b2 #939391 #bfbfbf #e0e5df #b5c4b1 #8696a7 #9ca8b8 #ececea #fffaf4 #96a48b #7b8b6f #dfd7d7 #656565 #d8caaf #c5b8a5 #fdf9ee #fOebe5 #d3d4cc #e0cdcf #b7b1a5 #a29988 #dadad8 #f8ebd8 #965454 #6b5152 #fOebe5 #cac3bb #a6a6a8 #7a7281 #a27e7e #ead0d1 #faead3 #c7b8a1 #c9c0d3 #eee5f8';
    arr = str.split(" ");
    let num = parseInt(Math.random() * arr.length) - 1;
    return arr[num];
};