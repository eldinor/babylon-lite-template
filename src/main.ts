import "./style.css";
import {
  addToScene,
  attachControl,
  createArcRotateCamera,
  createBox,
  createEngine,
  createHemisphericLight,
  createSceneContext,
  createStandardMaterial,
  onSceneDispose,
  registerScene,
  startEngine,
} from "@babylonjs/lite";

async function main(): Promise<void> {
  const canvas = document.querySelector<HTMLCanvasElement>("#app");
  if (!canvas) {
    throw new Error("Canvas #app was not found.");
  }

  if (!navigator.gpu) {
    canvas.replaceWith(document.createTextNode("WebGPU is not available in this browser."));
    return;
  }

  const engine = await createEngine(canvas);
  const scene = createSceneContext(engine);
  scene.clearColor = { r: 0.07, g: 0.08, b: 0.1, a: 1 };

  const camera = createArcRotateCamera(Math.PI / 4, Math.PI / 3, 5, { x: 0, y: 0.8, z: 0 });

  onSceneDispose(scene, attachControl(camera, canvas, scene));
  // Now disposeScene(scene) removes the canvas listeners too.

  scene.camera = camera;

  addToScene(scene, createHemisphericLight([0, 1, 0], 0.8));

<<<<<<< HEAD
  const material = createStandardMaterial();
  material.diffuseColor = [0.25, 0.55, 1];
  material.specularColor = [0.08, 0.08, 0.08];

  const box = createBox(engine, 1.4);
  box.material = material;
  box.position.y = 0.7;
  addToScene(scene, box);

  await registerScene(scene);
  await startEngine(engine);
=======
    await registerScene(scene);
    await startEngine(engine);
>>>>>>> ac30727d8034639792046cfece736a7656fb022b
}

void main().catch((err: unknown) => {
  console.error(err);
});
