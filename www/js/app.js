import * as THREE from '../build/three.module.js';

// __________   Урок 3 и 4. Создаем простую сцену   __________

export default {
  init: function () {
    this.scene = new THREE.Scene();

    this.cube = new THREE.Mesh(
      new THREE.BoxGeometry(2, 0.5, 3),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
      })
    );
    // this.scene.add(this.cube);
    // this.cube.visible = false;
    // this.camera = new THREE.OrthographicCamera(innerWidth / -500, innerWidth / 500, innerHeight / 500, innerHeight / -500, 0.1, 1000);
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    this.camera.position.z = 5;
    // this.scene.add(this.camera);

    this.light = new THREE.HemisphereLight(0x0066bb, 0xaa6666, 1);
    this.scene.add(this.light, this.cube, this.camera);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(innerWidth, innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.update();
  },
  update: function () {
    let that = this;
    this.renderer.render(this.scene, this.camera);
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    requestAnimationFrame(function () {
      that.update();
    });
  }
};

// ________________________________________