import * as THREE from '../build/three.module.js';

// START
// __________   Урок 5. Перемещение и векторы   __________

export default {
  init: function () {
    this.scene = new THREE.Scene();

    this.cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
      })
    );

    this.sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 16, 16),
      new THREE.MeshStandardMaterial({
        color: 0x00ffff,
      })
    );

    this.cube.position.set(0, 0, 0);
    this.sphere.position.set(3, 3, 0);

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    this.camera.position.z = 8;
    // this.camera.position.y = 5;
    // this.camera.lookAt(this.sphere.position);

    this.light = new THREE.HemisphereLight(0xffffff, 0xaa6666, 1);

    this.cube.add(this.sphere);
    this.scene.add(this.light, this.cube, this.camera);

    this.direction = new THREE.Vector3(1, 2, 3);
    this.dir2 = new THREE.Vector3(3, 2, 2);
    this.dir3 = new THREE.Vector3(0.5, 0.5, 0.5);
    // this.direction.subVectors(this.sphere.position, this.cube.position);

    // this.direction.normalize();
    // this.direction.add(this.dir2);
    // this.direction.addScalar(3);
    // this.direction.addVectors(this.dir2, this.dir3);

    // this.direction.sub(this.dir2);
    // this.direction.subScalar(3);
    // this.direction.subVectors(this.dir2, this.dir3);

    // this.direction.multiply(this.dir2);
    // this.direction.multiplyScalar(3);
    // this.direction.multiplyVectors(this.dir2, this.dir3);

    // this.direction.divide(this.dir2);
    // this.direction.divideScalar(3);

    // this.direction.set(8, 8, 8);
    // this.direction.copy(this.dir2);

    // let dist = this.dir2.distanceTo(this.cube.position);
    // let d = this.dir2.sub(this.cube.position);

    // console.table([this.direction, this.direction.length()]);
    // console.log([this.direction.length(), this.dir2.distanceTo(this.dir3)]);

    // this.angle = 0;
    // this.angleB = 0;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(innerWidth, innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.update();
  },

  update: function () {
    let that = this;
    this.renderer.render(this.scene, this.camera);

    // this.angle += 0.05;
    // this.angleB += 0.02;
    // this.sphere.position.x = 0 + 3 * Math.cos(this.angle);
    // this.sphere.position.y = 0 + 3 * Math.sin(this.angle);
    // this.cube.position.x = 0 + 2 * Math.cos(this.angleB);
    // this.cube.position.y = 0 + 2 * Math.sin(this.angleB);
    // // if (this.sphere.position.distanceToSquared(this.cube.position) < 2 * 2) {
    //   this.sphere.position.y  -= 0.01;
    //   this.sphere.position.x  -= 0.01;
    // }
    // this.sphere.translateY(0.01);

    // this.direction.subVectors(this.sphere.position, this.cube.position);
    // this.direction.setLength(0.01);
    // this.cube.position.add(this.direction);
    // this.cube.rotation.z += 0.01;
    requestAnimationFrame(function () {
      that.update();
    });
  }
};

// __________   Урок 5. Перемещение и векторы   __________
// END

// __________   Урок 3 и 4. Создаем простую сцену   __________

// export default {
//   init: function () {
//     this.scene = new THREE.Scene();

//     // this.cube = new THREE.Object3D();
//     this.cube = new THREE.Mesh(
//       new THREE.BoxGeometry(1.5, 3, 1),
//       new THREE.MeshStandardMaterial({
//         color: 0xffffff,
//       })
//     );

//     this.cube2 = new THREE.Mesh(
//       new THREE.BoxGeometry(0.3, 3, 0.3),
//       new THREE.MeshStandardMaterial({
//         color: 0x00ffff,
//       })
//     );
//     this.cube2.position.y = 1;
//     this.cube2.position.z = 0.65;
//     // this.cube2 = this.cube.clone();
//     // this.cube2.copy(this.cube);
//     this.cube.add(this.cube2);
//     // this.cube2.position.x += 3;
//
//    // this.cube2.material.color.setHex(0xaaabbb);
//     // this.cube.material.color.setHex(0xffffff);

//     // this.scene.add(this.cube);
//     // this.cube.visible = false;
//     // this.camera = new THREE.OrthographicCamera(innerWidth / -500, innerWidth / 500, innerHeight / 500, innerHeight / -500, 0.1, 1000);
//     this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
//     // this.scene.add(this.camera);
//     this.camera.position.z = 10;
//     // this.camera.lookAt(this.cube.position);

//     this.light = new THREE.HemisphereLight(0xffffff, 0xaa6666, 1);
//     this.scene.add(this.light, this.cube, this.camera);

//     this.renderer = new THREE.WebGLRenderer();
//     this.renderer.setSize(innerWidth, innerHeight);
//     document.body.appendChild(this.renderer.domElement);
//     this.update();
//     // this.cube.id

//     this.cube.name = 'cube 1';
//     this.cube2.name = 'cube 2';
//     console.log('this.cube.id: ', this.cube.id);
//     console.log('this.cube2.id: ', this.cube2.id);
//     console.log('this.cube.name: ', this.cube.name);
//     console.log('this.cube2.name: ', this.cube2.name);
//   },
//   update: function () {
//     let that = this;
//     this.renderer.render(this.scene, this.camera);
//     // this.cube.translateY(0.05);
//     // this.cube.rotation.z  += 0.01;
//     // this.cube2.rotation.z += 0.01;
//     requestAnimationFrame(function () {
//       that.update();
//     });
//   }
// };

// ________________________________________