"use strict";
// USED TO CALCULATE THE BOUNCE TRANSITION
/*
console.clear()
var h0 = 20; 		// base height, m
var v = 0; 		// current velocity, m/s
var g = 9.81;	// gravity, m/s/s
var t = 0;		// time spend
var dt = 0.1;	// time between each step
var rho = 0.6;	// coefficient of restitution
var tau = 0.10;		// contact time to bounce

var hmax = h0;		// the max height of the bounce
var h = h0;			// the current height
var hstop = 1;   	// stop when hmax < hstop
var freefall = true;	// state: freefall or in contact, if the element is falling or not
var t_last = Math.sqrt(2*h0/g) * -1; // time we would have launched to get to h0 at t=0
var vmax = Math.sqrt(2 * hmax * g);

var H = [];
var T = [];
var i = 0;

while(hmax > hstop) {
    if(freefall) {
        var hnew = h + v*dt - 0.5*g*dt*dt;
        if(hnew<0) {
            t = t_last + 2*Math.sqrt(2*hmax/g)
                freefall = false
            t_last = t + tau
            h = 0
        } else {
            t = t + dt
            v = (v - g*dt)
            h = hnew
        }
    } else {
        t = t + tau;
        vmax = vmax * rho;
        v = vmax;
        freefall = true;
        h = 0;
    }
    hmax = 0.5*vmax*vmax/g
    H.push(h);
    T.push(t);
    i++;
}

// Transform the values as transition element
T = T.map((_t, i) => {
    var animationPercentage = 10;
    var percent = (_t/t * 100 * animationPercentage / 100) + 50
    return `${percent.toPrecision(3)}%{
    transform: translate3D(0, calc(4.29 * var(--unit)), 0) rotateZ(-${H[i].toPrecision(4)}deg)
}`
})

console.log(T.join('\n'))*/