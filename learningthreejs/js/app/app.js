var stats = initStats();

var container = document.getElementById("webgl-output");

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xeeeeee);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;

var axes = new THREE.AxisHelper(20);
scene.add(axes);

var planeGeometry = new THREE.PlaneBufferGeometry(60, 20, 1, 1);
var planeMaterial = new THREE.MeshPhongMaterial({
  color: 0xcccccc,
});
var plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -0.5 * Math.PI;
plane.receiveShadow = true;

plane.position.x = 15;
plane.position.y = 0;
plane.position.z = 0;
scene.add(plane);

var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
var cubeMaterial = new THREE.MeshPhongMaterial({
  color: 0xff0000,
  wireframe: true,
});
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.castShadow = true;
cube.position.x = -4;
cube.position.y = 3;
cube.position.z = 0;
scene.add(cube);

var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
var sphereMaterial = new THREE.MeshPhongMaterial({
  color: 0x7777ff,
  wireframe: true,
});
var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.castShadow = true;
sphere.position.x = 20;
sphere.position.y = 4;
sphere.position.z = 2;
scene.add(sphere);

var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(-40, 60, -10);
spotLight.castShadow = true;
scene.add(spotLight);

camera.position.x = -30;
camera.position.y = 40;
camera.position.z = 30;
camera.lookAt(scene.position);

function initStats() {
  var stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.getElementById("statisticsFrameRender").append(stats.domElement);
  return stats;
}

// var effect = new THREE.AsciiEffect(renderer);
// effect.setSize(window.innerWidth, innerHeight);
// container.append(effect.domElement);

var controls = new (function () {
  this.rotationSpeed = 0.02;
  this.numberOfObjects = scene.children.length;

  // this.bouncingSpeed = 0.03;

  this.addCube = function () {
    var cubeSize = Math.ceil(Math.random() * 3);
    var cubeGeometry = new THREE.CubeGeometry(cubeSize, cubeSize, cubeSize);
    var cubeMaterial = new THREE.MeshLambertMaterial({
      color: Math.random() * 0xffffff,
    });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;
    cube.name = "cube-" + scene.children.length;
    cube.position.x =
      -30 + Math.round(Math.random() * planeGeometry.parameters.width);
    cube.position.y = Math.round(Math.random() * 5);
    cube.position.z =
      -20 + Math.round(Math.random() * planeGeometry.parameters.height);

    scene.add(cube);
    this.numberOfObjects = scene.children.length;
  };

  this.removeCube = function () {
    var allChildren = scene.children;
    var lastObject = allChildren[allChildren.length - 1];
    if (lastObject instanceof THREE.Mesh) {
      scene.remove(lastObject);
      this.numberOfObjects = scene.children.length;
    }
  };

  this.outputObjects = function () {
    console.log(scene.children);
  };
})();

var gui = new dat.GUI();
gui.add(controls, "rotationSpeed", 0, 0.05);
// gui.add(controls, "bouncingSpeed", 0, 0.05);
gui.add(controls, "addCube");
gui.add(controls, "removeCube");
gui.add(controls, "outputObjects").listen();

var step = 0;
function renderScene() {
  stats.update();

  scene.traverse(function (e) {
    if (e instanceof THREE.Mesh && e != plane) {
      cube.rotation.x += controls.rotationSpeed;
      cube.rotation.y += controls.rotationSpeed;
      cube.rotation.z += controls.rotationSpeed;
    }
  });

  var textureFlare0 = THREE.ImageUtils.loadTexture(
    "../textures/lensflare/lensflare0.png"
  );
  var textureFlare3 = THREE.ImageUtils.loadTexture(
    "../textures/lensflare/lensflare3.png"
  );

  var flareColor = new THREE.Color(0xffaacc);
  var lensFlare = new THREE.LensFlare(
    textureFlare0,
    350,
    0.0,
    THREE.AdditiveBlending,
    flareColor
  );

  lensFlare.add(textureFlare3, 60, 0.6, THREE.AdditiveBlending);
  lensFlare.add(textureFlare3, 70, 0.7, THREE.AdditiveBlending);
  lensFlare.add(textureFlare3, 120, 0.9, THREE.AdditiveBlending);
  lensFlare.add(textureFlare3, 70, 1.0, THREE.AdditiveBlending);

  lensFlare.position.copy(spotLight.position);
  scene.add(lensFlare);

  // step += controls.bouncingSpeed;
  // sphere.position.x = 20 + 10 * Math.cos(step);
  // sphere.position.y = 2 + 10 * Math.abs(Math.sin(step));

  requestAnimationFrame(renderScene);
  renderer.render(scene, camera);
  // effect.render(scene, camera);   //for ascii mode
}

// scene.fog = new THREE.FogExp2(0xffffff, 0.015);
// scene.overrideMaterial = new THREE.MeshLambertMaterial({
//   color: 0xffffff,
// });

container.append(renderer.domElement);
renderScene();
