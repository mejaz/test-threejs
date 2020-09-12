var scene, camera, renderer;

init();

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xaaaaaa)

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color('red')
    });
    const box = new THREE.Mesh(geometry, material);

    scene.add(box);

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
    renderer.render(scene, camera);
}