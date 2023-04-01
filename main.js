import * as THREE from 'three';

// creating scene
const scene = new THREE.Scene();

//create objects (things can get imported from blender)
//creating a sphere
const geometry = new THREE.SphereGeometry(3, 64, 64)
const material = new  THREE.MeshStandardMaterial({
    color: "#00ff83"
})
const mesh = new THREE.Mesh(geometry,material)
//adding sphere to the scene
scene.add(mesh)

//creating and adding camera - view
const camera = new THREE.PerspectiveCamera(45, 800, 600)
camera.position.z = 20
scene.add(camera)
//no scene shown yet

//rednerization is required
//rednerer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRender( { canvas } );
//redner out
//defining how size the canvas
renderer.setSize(800,600)
renderer.render(scene, camera)

