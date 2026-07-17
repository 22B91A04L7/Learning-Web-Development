class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    rgb() {
        const { r, g, b } = this;
        return `rgb(${r},${g},${b})`
    }

    rgba(a = 1.0) {
        const { r, g, b, } = this;
        return `rgb(${r},${g},${b}, ${a})`
    }
}

const color1 = new Color(40, 20, 10)
const color2 = new Color(134, 109, 50)
const heading = document.querySelector('h2')
heading.style.color = color1.rgb()
document.body.style.backgroundColor = color2.rgba(0.7)
