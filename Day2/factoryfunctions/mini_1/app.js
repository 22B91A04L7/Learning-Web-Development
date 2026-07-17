function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}
Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`
}

Color.prototype.rgba = function (a = 1.0) {
    const { r, g, b, } = this;
    return `rgb(${r},${g},${b}, ${a})`
}

const color1 = new Color(234, 45, 134)
const color2 = new Color(200, 230, 189)




const heading = document.querySelector('h2')
undefined
heading.style.color = color1.rgb()

heading.style.backgroundColor = color2.rgb()


document.body.style.backgroundColor = color1.rgba(0.3)
'rgb(234,45,134, 0.3)'
document.body.style.backgroundColor = color1.rgba(0.9)
'rgb(234,45,134, 0.9)'
document.body.style.backgroundColor = color1.rgba(0.1)
'rgb(234,45,134, 0.1)'
document.body.style.backgroundColor = color1.rgba(0.2)
'rgb(234,45,134, 0.2)'