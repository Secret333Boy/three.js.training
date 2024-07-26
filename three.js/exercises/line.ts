import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const controls = new OrbitControls(camera, renderer.domElement);

const material = new THREE.LineBasicMaterial({ color: 0x00ffff });

const random = () => Math.random() * (Math.random() < 0.5 ? 1 : -1);

const getRandomVector = () =>
  new THREE.Vector3(random() * 20, random() * 20, random() * 20);

function animate() {
  requestAnimationFrame(animate);

  const points = [];

  const startPoint = getRandomVector();

  points.push(startPoint);
  points.push(getRandomVector());
  points.push(getRandomVector());
  points.push(startPoint);

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  const line = new THREE.Line(geometry, material);

  scene.add(line);
  renderer.render(scene, camera);
}

animate();
