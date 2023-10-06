// function hex(r, g, b){
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r, g, b){
//     return `rgb(${r}, ${g}, ${b})`;
// }

// // hex(255, 100, 25);
// // '#ff6419'

// function makeColor(r, g, b){
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function() {
//         const {r, g, b} = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     };

//     color.hex = function(){
//         const {r, g, b} = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }

//     return color;
// }

// const firstColor = makeColor(35, 255, 159); 

// Creates a blank, plain JavaScript object;
// Links (sets the constructor of) this object to another object;
// Passes the newly created objected from Step 1 as this context;
// Returns this if the function doesn't return its own object.

// function Color(r, g, b){
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// Color.prototype.rgb = function(){
//     const {r, g, b} = this;
//     return `rgb(${r}, ${g}, ${b})`;
// }

// Color.prototype.hex = function(){
//     const {r, g, b} = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// Color.prototype.rgba = function(a = 1.0){
//     const {r, g, b} = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`
// }

// const color1 = new Color(150, 10, 50);

// 'rgb(150, 10, 50)'

class Color{
    constructor(r, g, b, name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHSL();
    }
    
    innerRGB(){
        const {r, g, b} = this;
        return `${r}, ${g}, ${b}`;
    }

    rgb(){
        return `rgb(${this.innerRGB()})`
    }
 
    hex(){
        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    rgba(a = 1.0){
        return `rgba(${this.innerRGB()}, ${a})`
    }

    hsl(){
        const {h, s, l} = this;
        return `hsl(${h}, ${s}%, ${l}%)`
    }

    opposite(){
        const {h, s, l} = this;
        const newHue = (h + 100) % 360;
        return `hsl(${newHue}, ${s}%, ${l}%)`
    }

    fullySaturated(){
        const {h, l} = this;
        return `hsl(${h}, 100%, ${l}%)`
    }

    calcHSL(){
        let {r, g, b} = this;
        // Make r, g, and b fraction of 1
        r /= 255;
        g /= 255;
        b /= 255;

        // Find greatest and smallest channel values
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        if(delta == 0) h = 0;
        else if (cmax === r)
            // Red is max
            h = ((g - b) / delta) % 6;
        else if (cmax === g)
            // Green is max
            h = (b - r) / delta + 2;
        else 
            // Blue is max
            h = (r - g) / delta + 4;

        h = Math.round( h * 60);

        // Make negative hues positive behind 360
        if (h < 0) h += 360;
        // Calculate Lightness
        l = (cmax + cmin) / 2;

        // Calculate saturation
        s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))

        // Multiply l ans s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        this.h = h;
        this.s = s;
        this.l = l;
        }
}

const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'blanc');
const orange = new Color(230, 126, 34, 'carrot');


class Pet {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9){
        super(name, age);
        this.livesLeft = livesLeft;
    }
    
    meow() {
        return 'MEOWW';
    }
}

class Dog extends Pet {
    bark(){
        return 'WOOF!!';
    }
}