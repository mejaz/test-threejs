var scene, camera, renderer, box;

init();

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xaaaaaa)

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color('skyblue')
    });
    box1 = new THREE.Mesh(geometry, material);
    box1.position.y = -1.5;
    scene.add(box1);

    box2 = new THREE.Mesh(geometry, material);
    box2.position.x = -1.5;
    scene.add(box2);

    box3 = new THREE.Mesh(geometry, material);
    box3.position.x = 1.5;
    scene.add(box3);

    box4 = new THREE.Mesh(geometry, material);
    box4.position.y = +1.5;
    scene.add(box4);
    

    const light = new THREE.PointLight();
    light.position.set(0, 1, 2)
    scene.add(light)

    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )

    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', onResize, false );
    update();
}

function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function update() {
    requestAnimationFrame(update);
    box1.rotation.x += 0.01
    box2.rotation.y -= 0.01
    box3.rotation.y += 0.01
    box4.rotation.x -= 0.01
    renderer.render(scene, camera);
}