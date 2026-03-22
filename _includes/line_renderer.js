// yeah I'm using an actual file for js now yay

const canvas = document.getElementById("canvas");
const ctx = document.getElementById("canvas").getContext("2d");
const HEIGHT = canvas.height;
const WIDTH = canvas.width;

// this controls how many pixels is a quarter rotation
const sensitivity = 180;

const msBetweenFrames = 10;

let totalScroll = {x:0, y:0};

let mouseDown = false;
let mouseOverCanvas = false;
let prevMousePos = {x: 0, y: 0};
// space, shift, w, a, s, d
let keys = 0;

let cameraVelocity = 10;

let camera;
let world;

// ---------------- class declarations ----------------

class World {
    constructor() {
        // maybe not the most effecient data structure for this
        this.things = [];
    }

    addThing(thing) {
        this.things.push(thing);
    }

    removeThing(thing) {
        let index = this.things.indexOf(thing);
        if (index > -1) {
            this.things.splice(index, 1);
        } else {
            throw new Error("World didn't have the thing you wanted to remove inside it");
        }
    }

    getThings() {
        return this.things;
    }
}

class Thing {
    constructor (x, y, z, verts, edges, color) {
        this.origin = new Point(x, y, z);
        this.negativeOrigin = new Point(-x, -y, -z);
        this.verts = verts;
        this.edges = edges;
        this.color = color;
        // so ig you rotate about z then y then x?
        // idk if this works
        // these are not actaully used at the moment
        this.alpha = 0;
        this.beta = 0;
        this.gamma = 0;
        this.scale = 1;
    }

    getVerts() {
        return this.verts.map((p) => p.copy());
    }

    getEdges() {
        return this.edges;
    }
    
    getOrigin() {
        return this.origin;
    }
    
    getNegativeOrigin() {
        return this.negativeOrigin;
    }

    getRotationMatrix() {
        // do the intrinsic rotation
        let rotMat = new Mat([
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]]
        );

        // this is the rotation about z
        rotMat = rotMat.multiplyByMatrix(new Mat([
            [Math.cos(this.alpha), -Math.sin(this.alpha), 0],
            [Math.sin(this.alpha), Math.cos(this.alpha), 0],
            [0, 0, 1]
        ]));

        // this is the rotation about y
        rotMat = rotMat.multiplyByMatrix(new Mat([
            [Math.cos(this.beta), 0, Math.sin(this.beta)],
            [0, 1, 0],
            [-Math.sin(this.beta), 0, Math.cos(this.beta)]
        ]));

        // this is the rotation about x
        rotMat = rotMat.multiplyByMatrix(new Mat([
            [1, 0, 0],
            [0, Math.cos(this.gamma), -Math.sin(this.gamma)],
            [0, Math.sin(this.gamma), Math.cos(this.gamma)]
        ]));

        return rotMat;
    }

    setEdges(a, b, c) {
        this.alpha = a;
        this.beta = b;
        this.gamma = c;
    }

    setRotation(a, b, c) {
        this.alpha = a;
        this.beta = b;
        this.gamma = c;
    }
}

class Cam {
    constructor(x, y, z) {
        this.origin = new Point(x, y, z);
        this.alpha = 0; // this represents the z rotation, mostly keep this 0.
        this.beta = 0;
        this.gamma = 0;
    }

    getRotationMatrix() {
        // do the intrinsic rotation
        let rotMat = new Mat([
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]]
        );

        // this is the rotation about z
        rotMat = rotMat.multiplyByMatrix(new Mat([
            [Math.cos(this.alpha), -Math.sin(this.alpha), 0],
            [Math.sin(this.alpha), Math.cos(this.alpha), 0],
            [0, 0, 1]
        ]));
        
        // this is the rotation about y
        rotMat = rotMat.multiplyByMatrix(new Mat([
            [Math.cos(this.beta), 0, Math.sin(this.beta)],
            [0, 1, 0],
            [-Math.sin(this.beta), 0, Math.cos(this.beta)]
        ]));

        // this is the rotation about x
        rotMat = rotMat.multiplyByMatrix(new Mat([
            [1, 0, 0],
            [0, Math.cos(this.gamma), -Math.sin(this.gamma)],
            [0, Math.sin(this.gamma), Math.cos(this.gamma)]
        ]));
        
        return rotMat;
    }

    getInverseRotationMatrix() {
        // do the intrinsic rotation
        let rotMat = new Mat([
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]]
        );

        // this is the rotation about x
        rotMat = rotMat.multiplyByMatrix(new Mat([
            [1, 0, 0],
            [0, Math.cos(this.gamma), Math.sin(this.gamma)],
            [0, -Math.sin(this.gamma), Math.cos(this.gamma)]
        ]));

        // this is the rotation about y
        rotMat = rotMat.multiplyByMatrix(new Mat([
            [Math.cos(this.beta), 0, -Math.sin(this.beta)],
            [0, 1, 0],
            [Math.sin(this.beta), 0, Math.cos(this.beta)]
        ]));

        // this is the rotation about z
        rotMat = rotMat.multiplyByMatrix(new Mat([
            [Math.cos(this.alpha), Math.sin(this.alpha), 0],
            [-Math.sin(this.alpha), Math.cos(this.alpha), 0],
            [0, 0, 1]
        ]));

        return rotMat;
    }

    getOrigin() {
        return this.origin;
    }

    getNegativeOrigin() {
        return new Point(-this.origin.x, -this.origin.y, -this.origin.z);
    }

    setRotation(a, b, c) {
        this.alpha = a;
        this.beta = b;
        this.gamma = c;
    }

    render(world) {
        let things = world.getThings();
        
        things.forEach((thing) => {
            // I should probably make a list of points a new type of object
            let verts = thing.getVerts();
            multiplyPointsByMatrix(verts, thing.getRotationMatrix());
            translatePoints(verts, thing.getOrigin());
            translatePoints(verts, this.getNegativeOrigin());
            multiplyPointsByMatrix(verts, this.getInverseRotationMatrix());

            // render???
            verts = this.pointsToScreenCoords(verts);

            let edges = thing.getEdges();

            edges.forEach((edge) => {
                if (verts[edge[0]].bad && verts[edge[1]].bad) {
                    drawLine(verts[edge[0]], verts[edge[1]], thing.color);
                }
            });
        }
        )
    }

    pointsToScreenCoords(points) {
        return points.map((p) => this.toScreenCoords(p));
    }

    toScreenCoords(p) {
        let screenX = WIDTH / 2;
        let screenY = HEIGHT / 2;

        // assume FOV is 90 degrees
        // assume that camera oriented 0, 0, 0 => facing positive z direction
        // then x and y go opposite to the way html canvas orients
        screenX -= p.x / p.z * WIDTH / 2;
        screenY -= p.y / p.z * HEIGHT / 2;

        return new ScreenPoint(screenX, screenY, p.z > 0);
    }

    move() {
        let xVelocity = 0;
        let yVelocity = 0;
        let zVelocity = 0;

        if ((keys & 0b100000) != 0) { // space
            yVelocity += 1;
        }
        
        if ((keys & 0b010000) != 0) { // shift
            yVelocity -= 1;
        }
        
        if ((keys & 0b001000) != 0) { // w
            zVelocity += 1;
        }
        
        if ((keys & 0b000010) != 0) { // s
            zVelocity -= 1;
        }

        if ((keys & 0b000001) != 0) { // d
            xVelocity -= 1;
        }
        
        if ((keys & 0b000100) != 0) { // a
            xVelocity += 1;
        }
        
        let dir = new Point(xVelocity, yVelocity, zVelocity);
        dir.normalize();

        // rotate about y
        dir.multiplyByMatrix(new Mat([
            [Math.cos(this.beta), 0, Math.sin(this.beta)],
            [0, 1, 0],
            [-Math.sin(this.beta), 0, Math.cos(this.beta)]
        ]));

        // scale velocity
        dir.multiplyByScalar(cameraVelocity * msBetweenFrames / 1000);

        this.origin.translate(dir);
    }
}

class Mat {
    // I hear there's quaternion something something something
    // that sounds complex so I'll just do this instead
    constructor (mat) {
        // assume this is a 3x3 matrix
        this.mat = mat;
    }

    get(x, y) {
        return this.mat[x][y];
    }

    multiplyByMatrix(mat2) {
        // time to write the most ugly piece of code in a while
        let row0 = [0, 0, 0];
        let row1 = [0, 0, 0];
        let row2 = [0, 0, 0];
        for (let i = 0; i < 3; i++) {
            row0[i] = mat2.get(0, i) * this.get(0,0) + mat2.get(1, i) * this.get(0, 1) + mat2.get(2, i) * this.get(0, 2);
            row1[i] = mat2.get(0, i) * this.get(1,0) + mat2.get(1, i) * this.get(1, 1) + mat2.get(2, i) * this.get(1, 2);
            row2[i] = mat2.get(0, i) * this.get(2,0) + mat2.get(1, i) * this.get(2, 1) + mat2.get(2, i) * this.get(2, 2);
        }
        return new Mat([row0, row1, row2]);
    }
}

// mutable
class Point {
    constructor (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    translate (p) {
        this.x += p.x;
        this.y += p.y;
        this.z += p.z;
    }

    multiplyByMatrix (mat) {
        let newx = 0;
        let newy = 0;
        let newz = 0;

        // I hear there's some fancy better algs for this
        // but I don't care
        newx = this.x * mat.get(0,0) + this.y * mat.get(0,1) + this.z * mat.get(0,2);
        newy = this.x * mat.get(1,0) + this.y * mat.get(1,1) + this.z * mat.get(1,2);
        newz = this.x * mat.get(2,0) + this.y * mat.get(2,1) + this.z * mat.get(2,2);

        this.x = newx;
        this.y = newy;
        this.z = newz;
    }

    copy() {
        return new Point(this.x, this.y, this.z);
    }

    normalize() {
        if (this.x == 0 && this.y == 0 && this.z == 0) {
            return;
        } else {
            let dist = Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
            this.x = this.x / dist;
            this.y = this.y / dist;
            this.z = this.z / dist;
        }
    }

    multiplyByScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
    }
}

// not permanent, probably
class ScreenPoint {
    constructor (x, y, bad) {
        this.x = x;
        this.y = y;
        // temporary fix
        this.bad = bad;
    }
}

// ---------------- functional things ----------------

function updateEverything() {
    camera.setRotation(0, -totalScroll.x/sensitivity * Math.PI/2, totalScroll.y/sensitivity * Math.PI/2)
    camera.move()
    world.getThings()[0].setRotation(0, Date.now() / 1000, 0);
    world.getThings()[1].setRotation(0, 0, Date.now() / 1000);
    world.getThings()[2].setRotation(Date.now() / 1000, 0, 0);
    world.getThings()[3].setRotation(Date.now() / 1000, Date.now() / 1000, Date.now() / 1000);
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    camera.render(world);
}

// function to do startup things
onStartup();

function onStartup() {
    camera = new Cam(0, 0, 0);
    world = new World();

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    // adding a cube
    world.addThing(new Thing(0, 3, 0, 
        // spamming things
        [new Point(-1, -1, -1), new Point(-1, -1, 1), new Point(-1, 1, -1), new Point(-1, 1, 1), new Point(1, -1, -1), new Point(1, -1, 1), new Point(1, 1, -1), new Point(1, 1, 1)],
        [[0, 1], [0, 2], [0, 4], [1, 3], [1, 5], [2, 3], [2, 6], [4, 5], [4, 6], [3, 7], [5, 7], [6, 7]],
        "#0f0"
    ));

    // adding another cube
    world.addThing(new Thing(3, 0, 0, 
        // spamming things
        [new Point(-1, -1, -1), new Point(-1, -1, 1), new Point(-1, 1, -1), new Point(-1, 1, 1), new Point(1, -1, -1), new Point(1, -1, 1), new Point(1, 1, -1), new Point(1, 1, 1)],
        [[0, 1], [0, 2], [0, 4], [1, 3], [1, 5], [2, 3], [2, 6], [4, 5], [4, 6], [3, 7], [5, 7], [6, 7]],
        "#f00"
    ));

    // adding a cube
    world.addThing(new Thing(0, 0, 3, 
        // spamming things
        [new Point(-1, -1, -1), new Point(-1, -1, 1), new Point(-1, 1, -1), new Point(-1, 1, 1), new Point(1, -1, -1), new Point(1, -1, 1), new Point(1, 1, -1), new Point(1, 1, 1)],
        [[0, 1], [0, 2], [0, 4], [1, 3], [1, 5], [2, 3], [2, 6], [4, 5], [4, 6], [3, 7], [5, 7], [6, 7]],
        "#00f"
    ));

    // adding a cube
    world.addThing(new Thing(-3, -3, -3, 
        // spamming things
        [new Point(-1, -1, -1), new Point(-1, -1, 1), new Point(-1, 1, -1), new Point(1, -1, -1), new Point(1, 1, 1), new Point(1, 1, -1), new Point(1, -1, 1), new Point(-1, 1, 1)],
        [[0, 1], [0, 2], [0, 3], [1, 2], [2, 3], [3, 1], [4, 5], [4, 6], [4, 7], [5, 6], [6, 7], [7, 5]],
        "#000"
    ));

    setInterval(updateEverything, msBetweenFrames);
    updateEverything();
}

// ---------------- nice things ----------------

function multiplyPointsByMatrix(points, mat) {
    points.forEach(function(p) {p.multiplyByMatrix(mat)});
}

function translatePoints(points, translation) {
    points.forEach(function(p) {p.translate(translation)});
}

// ---------------- canvas things ----------------

function drawPoint(sp, color) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(sp.x, sp.y);
    ctx.lineTo(sp.x+1, sp.y+1);
    ctx.stroke();
}

function drawLine(sp1, sp2, color) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(sp1.x, sp1.y);
    ctx.lineTo(sp2.x, sp2.y);
    ctx.stroke();
}

// ---------------- testing stuff ---------------- 

function drawTest() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    drawPoint(totalScroll.x + WIDTH / 2, totalScroll.y + HEIGHT / 2, "#0f0");
    drawLine(totalScroll.x + WIDTH / 2, totalScroll.y + HEIGHT / 2, prevMousePos.x, prevMousePos.y, "#f00")
}

// ---------------- UI stuff ----------------

function updateMousePos(e) {
    if (!mouseOverCanvas) {
        // this prevents this function from firing on the first instance
        // when the mouse is over the canvas, until the mouseOverChange has done its job
        // and reset the prevMousePos.
        return;
    }

    // update mouse position.

    let rect = canvas.getBoundingClientRect();
    
    let mousePos = {x: 0, y: 0};

    mousePos.x = e.clientX - rect.left;
    mousePos.y = e.clientY - rect.top;

    // depending on whether the mouse is down, scroll the x and y or don't.

    if (mouseDown) {
        // add how much it scrolled
        totalScroll.x += mousePos.x - prevMousePos.x;
        totalScroll.y += mousePos.y - prevMousePos.y;
        // clamp scroll in y
        totalScroll.y = Math.max(Math.min(totalScroll.y, sensitivity), -sensitivity);
    }
    
    // set the old mouse position
    prevMousePos = mousePos;
}

function mouseDownChange(e, down) {
    mouseDown = down;
}

function mouseOverChange(e, inside) {
    if (inside) {
        // then we need to reset the mouse position
        let rect = canvas.getBoundingClientRect();

        prevMousePos = {x: e.clientX - rect.left, y: e.clientY - rect.top};

        // reset mouseDown-nesss (this checks if left click)
        mouseDown = (e.buttons & 1) == 1;
        mouseOverCanvas = true;
    } else {
        // then we need to make everything false
        mouseDown = false;
        mouseOverCanvas = false;
    }
}

function handleKeyDown(e) {
    e.preventDefault();
    if (e.repeat) {
        return;
    }
    switch (e.code) {
        case "Space":
            keys = keys | 0b100000;
            break;
        case "ShiftLeft":
            keys = keys | 0b010000;
            break;
        case "ShiftRight":
            keys = keys | 0b010000;
            break;
        case "KeyW":
            keys = keys | 0b001000;
            break;
        case "KeyA":
            keys = keys | 0b000100;
            break;
        case "KeyS":
            keys = keys | 0b000010;
            break;
        case "KeyD":
            keys = keys | 0b000001;
            break;
        default:
    }
}

function handleKeyUp(e) {
    switch (e.code) {
        case "Space":
            keys = keys & 0b011111;
            break;
        case "ShiftLeft":
            keys = keys & 0b101111;
            break;
        case "ShiftRight":
            keys = keys & 0b101111;
            break;
        case "KeyW":
            keys = keys & 0b110111;
            break;
        case "KeyA":
            keys = keys & 0b111011;
            break;
        case "KeyS":
            keys = keys & 0b111101;
            break;
        case "KeyD":
            keys = keys & 0b111110;
            break;
        default:
    }
}