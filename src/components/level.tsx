import * as THREE from "three";
import { useEffect, useRef } from "react";
// import pin from "../../src/assets/pin.png";

interface LevelProps {
  color: number;
  width: number;
  height: number;
  textureUrl: string;
}

function Level({ color, width, height, textureUrl }: LevelProps) {
  const refContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refContainer.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        25,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0); // Set background color to black with 0 opacity
      refContainer.current.appendChild(renderer.domElement);
      if (renderer.domElement.previousElementSibling) {
        refContainer.current.removeChild(
          renderer.domElement.previousElementSibling
        );
      }

      const geometry = new THREE.BoxGeometry(2, 0.01, 2);
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load(
        `/src/assets/${textureUrl.split(" ")[0].toLowerCase()}.png`
      );
      const material = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true, // Enable transparency
        opacity: 1, // Set desired opacity value
        map: texture,
      });

      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
      camera.position.z = 5;

      cube.rotation.y = 70 / 100;
      cube.rotation.x = 70 / 100;

      if (
        width === window.innerWidth / 2 &&
        height === window.innerHeight / 1.5
      ) {
        // Create the small cube
        const smallCubeGeometry = new THREE.BoxGeometry(0.01, 0.25, 0.2);
        const texturePinLoader = new THREE.TextureLoader();
        const texturePin = texturePinLoader.load("/src/assets/pin.png");
        const smallCubeMaterial = new THREE.MeshPhongMaterial({
          map: texturePin,
          alphaTest: 0.6,
          // color: 0xbb0000,
          // blendColor: 0xbb0000,

          // color: 0xbbbbbb,
          // specular: 0x000005,
          // reflectivity: 0.3,
          // side: THREE.FrontSide,
        });
        const smallCube = new THREE.Mesh(smallCubeGeometry, smallCubeMaterial);
        smallCube.position.set(0, 0.2, 0); // Set the desired position of the small cube relative to the main cube
        cube.add(smallCube); // Add the small cube as a child of the main cube

        // // Create a raycaster
        // const raycaster = new THREE.Raycaster();
        // const mouse = new THREE.Vector2();

        // // Handle click event on the small cube
        // function onClick(event: MouseEvent) {
        //   event.preventDefault();
        //   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        //   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        //   raycaster.setFromCamera(mouse, camera);
        //   const intersects = raycaster.intersectObject(smallCube);
        //   if (intersects.length > 0) {
        //     console.log("Small cube clicked!");
        //     // Perform desired actions when the small cube is clicked
        //   }
        // }
        // window.addEventListener("click", onClick);
      }

      const animate = function () {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();

      let mouseDown = false;
      let mouseX = 0;
      let mouseY = 0;

      function onMouseMove(evt: MouseEvent) {
        if (!mouseDown) {
          return;
        }

        evt.preventDefault();

        const deltaX = evt.clientX - mouseX;
        const deltaY = evt.clientY - mouseY;
        mouseX = evt.clientX;
        mouseY = evt.clientY;
        rotateScene(deltaX, deltaY);
      }

      function onMouseDown(evt: MouseEvent) {
        evt.preventDefault();
        mouseDown = true;
        mouseX = evt.clientX;
        mouseY = evt.clientY;
      }

      function onMouseUp(evt: MouseEvent) {
        evt.preventDefault();
        mouseDown = false;
      }

      function addMouseHandler() {
        document.addEventListener("mousemove", onMouseMove, false);
        document.addEventListener("mousedown", onMouseDown, false);
        document.addEventListener("mouseup", onMouseUp, false);
      }

      function removeMouseHandler() {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
      }

      addMouseHandler();

      function rotateScene(deltaX: number, deltaY: number) {
        cube.rotation.y += deltaX / 100;
        cube.rotation.x += deltaY / 100;
      }

      return () => {
        removeMouseHandler();
      };
    }
  }, []);

  return (
    <>
      <div ref={refContainer}></div>
    </>
  );
}

export default Level;
