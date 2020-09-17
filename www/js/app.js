import * as THREE from '../build/three.module.js';

// START
// __________   Урок 7. Геометрия объекта   __________

export default {
  init: function () {
    this.scene = new THREE.Scene();

    this.cube = new THREE.Mesh(
      new THREE.BoxGeometry(2, 2, 2),
      // new THREE.BoxGeometry(2, 2, 2),
      new THREE.MeshStandardMaterial({
        color: 0xcccc00,
        // wireframe: true
      })
    );

    // this.plane = new THREE.Mesh(
    //   new THREE.BoxGeometry(10, 0.5, 1),
    //   new THREE.MeshStandardMaterial({
    //     color: 0x00cccc,
    //     wireframe: true
    //   })
    // );

    console.log(this.cube.geometry);


    this.cube.position.set(0, 0, 0);
    this.cube.rotation.x = 1;
    this.cube.rotation.y = 1;
       
    // this.camera = new THREE.OrthographicCamera(innerWidth / -100, innerWidth / 100, innerHeight / 100, innerHeight / -100, 0.1, 100);
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    this.camera.position.z = 8;

    this.light = new THREE.HemisphereLight(0xffffff, 0xaa6666, 1);

    this.scene.add(this.light, this.cube, this.camera);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(innerWidth, innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.update();
  },

  update: function () {
    let that = this;
    this.renderer.render(this.scene, this.camera);

    
    // this.cube.position.y += this.offsetY / 10 * this.signY * this.speed;
    requestAnimationFrame(function () {
      that.update();
    });
  }
};

// __________   Урок 7. Геометрия объекта   __________
// END



// START
// __________   Урок 6. Повороты объектов ДЗ   __________

// export default {
//   init: function () {
//     this.scene = new THREE.Scene();

//     this.cube = new THREE.Mesh(
//       new THREE.BoxGeometry(2, 2, 2),
//       new THREE.MeshStandardMaterial({
//         color: 0xcccc00
//       })
//     );

//     this.plane = new THREE.Mesh(
//       new THREE.BoxGeometry(10, 0.5, 1),
//       new THREE.MeshStandardMaterial({
//         color: 0x00cccc,
//         wireframe: true
//       })
//     );

//     this.cube.position.set(0, 0, 0);
//     this.plane.position.y = -1.25;
//     this.direct = new THREE.Vector3(1, -1, 0);
//     this.axis = new THREE.Vector3(0, 0, -1);

//     this.speed = 0.5;
//     this.signX = 1;
//     this.signY = 1;
//     this.offsetY = (Math.sqrt(2) - 1);
//     this.angel = Math.PI / 2 * 5 / 100;
//     this.maxAngel = 0;

//     this.camera = new THREE.OrthographicCamera(innerWidth / -100, innerWidth / 100, innerHeight / 100, innerHeight / -100, 0.1, 100);
//     // this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
//     this.camera.position.z = 8;

//     this.light = new THREE.HemisphereLight(0xffffff, 0xaa6666, 1);

//     this.scene.add(this.light, this.cube, this.camera, this.plane);

//     this.renderer = new THREE.WebGLRenderer();
//     this.renderer.setSize(innerWidth, innerHeight);
//     document.body.appendChild(this.renderer.domElement);
//     this.update();
//   },

//   update: function () {
//     let that = this;
//     this.renderer.render(this.scene, this.camera);

//     // И второе решение, с нужным поднятием кубика

//     if (this.cube.position.x >= 5) {
//       this.signX = -1;
//       this.cube.rotation.z = 0;
//       this.cube.position.x = 5;
//       this.cube.position.y = 0;
//       this.maxAngel = 0;
//       this.direct.set(1, -1, 0);
//     } else if (this.cube.position.x <= -5) {
//       this.signX = 1;
//       this.cube.rotation.z = 0;
//       this.cube.position.x = -5;
//       this.cube.position.y = 0;
//       this.maxAngel = 0;
//       this.direct.set(1, -1, 0);
//     }

//     this.cube.position.x += 0.1 * this.signX * this.speed;
//     this.cube.rotation.z -= this.signX * this.angel * this.speed;

//     if (this.maxAngel <= -Math.PI / 4) {
//       this.maxAngel = -Math.PI / 4;
//       this.signY = -1;
//     } else if (this.maxAngel >= 0) {
//       this.maxAngel = 0;
//       this.signY = 1;
//     }

//     let an = this.signY * this.angel * this.speed;

//     this.direct.applyAxisAngle(this.axis, an);
//     this.cube.position.y = -this.direct.y-1;

//     this.maxAngel -= an;
//     // Это первое решение с проваливанием кубика под землю
//     // if (this.cube.position.x >= 5) {
//     //   this.signX = -1;
//     // } else if (this.cube.position.x <= -5) {
//     //   this.signX = 1;
//     // }

//     // this.cube.position.x += 0.1 * this.signX * this.speed;
//     // this.cube.rotation.z -= this.signX * this.angel * this.speed;

//     // if (this.cube.position.y > this.offsetY) {
//     //   this.signY = -1;
//     // } else if (this.cube.position.y < 0) {
//     //   this.signY = 1;
//     // }

//     // this.cube.position.y += this.offsetY / 10 * this.signY * this.speed;
//     requestAnimationFrame(function () {
//       that.update();
//     });
//   }
// };


// __________   Урок 6. Повороты объектов   __________
// END



// START
// __________   Урок 6. Повороты объектов. Решение ДЗ из урока 5  __________

// export default {
//   init: function () {
//     this.scene = new THREE.Scene();

//     this.cube = new THREE.Mesh(
//       new THREE.BoxGeometry(2.5, 1, 1),
//       new THREE.MeshStandardMaterial({
//         color: 0xffffff,
//       })
//     );

//     this.sphereArray = [];
//     for (let i = 0; i < 5; i++) {
//       this.sphere = new THREE.Mesh(
//         new THREE.SphereGeometry(0.5, 16, 16),
//         new THREE.MeshStandardMaterial({
//           color: 0x00ffff,
//         })
//       );
//       this.sphere.position.set(
//         ((Math.random() - 0.5) * 2) * 5,
//         ((Math.random() - 0.5) * 2) * 5,
//         0);
//       this.sphereArray.push(this.sphere);
//       this.scene.add(this.sphere);
//     }

//     this.sphere = this.sphereArray[0];
//     this.counter = 1;

//     this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
//     this.camera.position.z = 8;

//     this.light = new THREE.HemisphereLight(0xffffff, 0xaa6666, 1);

//     this.scene.add(this.light, this.cube, this.camera);

//     this.direction = new THREE.Vector3();

//     this.renderer = new THREE.WebGLRenderer();
//     this.renderer.setSize(innerWidth, innerHeight);
//     document.body.appendChild(this.renderer.domElement);
//     this.update();
//   },

//   update: function () {
//     let that = this;
//     this.renderer.render(this.scene, this.camera);

//     this.direction.subVectors(this.sphereArray[this.counter].position, this.cube.position).setLength(0.1);

//     this.cube.position.add(this.direction);

//     if (this.cube.position.distanceTo(this.sphereArray[this.counter].position) <= 0.1 / 2) {
//       this.counter++;
//       if (this.counter >= this.sphereArray.length) {
//         this.counter = 0;
//       }
//     }
//     requestAnimationFrame(function () {
//       that.update();
//     });
//   }
// };

// __________   Урок 6. Повороты объектов. Решение ДЗ из урока 5  __________
// END

// START
// __________   Урок 5. Перемещение и векторы + ДЗ  __________

// export default {
//   init: function () {
//     this.scene = new THREE.Scene();

//     this.cube = new THREE.Mesh(
//       new THREE.BoxGeometry(2.5, 1, 1),
//       new THREE.MeshStandardMaterial({
//         color: 0xffffff,
//       })
//     );

//     this.sphere = new THREE.Mesh(
//       new THREE.SphereGeometry(0.5, 16, 16),
//       new THREE.MeshStandardMaterial({
//         color: 0x00ffff,
//       })
//     );
//     this.sphere2 = new THREE.Mesh(
//       new THREE.SphereGeometry(1, 16, 16),
//       new THREE.MeshStandardMaterial({
//         color: 0xffbbff,
//       })
//     );
//     this.sphere3 = new THREE.Mesh(
//       new THREE.SphereGeometry(1.5, 16, 16),
//       new THREE.MeshStandardMaterial({
//         color: 0x99cc88,
//       })
//     );
//     this.sphere4 = new THREE.Mesh(
//       new THREE.SphereGeometry(0.5, 16, 16),
//       new THREE.MeshStandardMaterial({
//         color: 0x99ff00,
//       })
//     );

//     this.sphere.position.set(0, 3, 0);
//     this.sphere2.position.set(3.5, 0, 0);
//     this.sphere3.position.set(0, -5, 0);
//     this.sphere4.position.set(-4, 1, 0);
//     this.cube.position.add(this.sphere.position);


//     this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
//     this.camera.position.z = 8;
//     // this.camera.position.y = 5;
//     // this.camera.lookAt(this.sphere.position);

//     this.light = new THREE.HemisphereLight(0xffffff, 0xaa6666, 1);

//     this.scene.add(this.sphere);
//     this.scene.add(this.light, this.cube, this.camera);
//     this.scene.add(this.sphere2, this.sphere3, this.sphere4);

//     this.direction = new THREE.Vector3();
//     // this.dir2 = new THREE.Vector3(3, 2, 2);
//     // this.dir3 = new THREE.Vector3(0.5, 0.5, 0.5);
//     // this.direction.subVectors(this.sphere, this.sphere2);

//     // this.direction.normalize();
//     // this.direction.add(this.dir2);
//     // this.direction.addScalar(3);
//     // this.direction.addVectors(this.dir2, this.dir3);

//     // this.direction.sub(this.dir2);
//     // this.direction.subScalar(3);
//     // this.direction.subVectors(this.dir2, this.dir3);

//     // this.direction.multiply(this.dir2);
//     // this.direction.multiplyScalar(3);
//     // this.direction.multiplyVectors(this.dir2, this.dir3);

//     // this.direction.divide(this.dir2);
//     // this.direction.divideScalar(3);

//     // this.direction.set(8, 8, 8);
//     // this.direction.copy(this.dir2);

//     // let dist = this.dir2.distanceTo(this.cube.position);
//     // let d = this.dir2.sub(this.cube.position);

//     // console.table([this.direction, this.direction.length()]);
//     // console.log([this.direction.length(), this.dir2.distanceTo(this.dir3)]);

//     // this.angle = 0;
//     // this.angleB = 0;

//     this.renderer = new THREE.WebGLRenderer();
//     this.renderer.setSize(innerWidth, innerHeight);
//     document.body.appendChild(this.renderer.domElement);
//     this.update();
//   },

//   update: function () {
//     let that = this;
//     this.renderer.render(this.scene, this.camera);

//     // this.angle += 0.05;
//     // this.angleB += 0.02;
//     // this.sphere.position.x = 0 + 3 * Math.cos(this.angle);
//     // this.sphere.position.y = 0 + 3 * Math.sin(this.angle);
//     // this.cube.position.x = 0 + 2 * Math.cos(this.angleB);
//     // this.cube.position.y = 0 + 2 * Math.sin(this.angleB);
//     // // if (this.sphere.position.distanceToSquared(this.cube.position) < 2 * 2) {
//     //   this.sphere.position.y  -= 0.01;
//     //   this.sphere.position.x  -= 0.01;
//     // }
//     // this.sphere.translateY(0.01);

//     // if (this.cube.position == this.sphere.position) {
//     if (this.sphere.position.distanceToSquared(this.cube.position) <= 0.01) {
//       this.direction.subVectors(this.sphere2.position, this.sphere.position);
//     } else if (this.sphere2.position.distanceToSquared(this.cube.position) <= 0.01) {
//       this.direction.subVectors(this.sphere3.position, this.sphere2.position);
//     } else if (this.sphere3.position.distanceToSquared(this.cube.position) <= 0.01) {
//       this.direction.subVectors(this.sphere4.position, this.sphere3.position);
//     } else if (this.sphere4.position.distanceToSquared(this.cube.position) <= 0.01) {
//       this.direction.subVectors(this.sphere.position, this.sphere4.position);
//     }

//     this.direction.setLength(0.03);
//     this.cube.position.add(this.direction);
//     // this.cube.rotation.z += 0.01;
//     requestAnimationFrame(function () {
//       that.update();
//     });
//   }
// };

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