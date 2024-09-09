import * as THREE from "three";

// SCENE
const scene = new THREE.Scene();

// OBJECT
// Mesh: is a combination of a geometry (the shape) and a material (how it looks)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xa0d3b0,
  wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// SIZES
const sizes = {
  width: 600,
  height: 600,
};

// CAMERA
// note: there are other types of cameras
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// CANVAS
const canvas = document.querySelector("canvas.webgl");

// RENDERER
const renderer = new THREE.WebGLRenderer({
  canvas, // passing the canvas from DOM
});
renderer.setSize(sizes.width, sizes.height);

// render the scene from camera's perspective
renderer.render(scene, camera);
