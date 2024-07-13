// ดึงค่า percent และกำหนดให้กับ CSS variable
const progressBar = document.querySelectorAll('.bar-percent');
// console.log(progressBar)

progressBar.forEach((bar) => {
    // console.log(bar)
    const value = bar.getAttribute('percent')
    bar.style.setProperty('--percent', value)
});