import * as THREE from 'https://esm.sh/three@0.160.0';
import {GLTFLoader} from 'https://esm.sh/three@0.160.0/examples/jsm/loaders/GLTFLoader.js';
const canvas=document.getElementById('riggedHero');
if(canvas){
 const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});
 renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));
 renderer.setSize(1200,640,false);
 renderer.outputColorSpace=THREE.SRGBColorSpace;
 const scene=new THREE.Scene();
 const camera=new THREE.OrthographicCamera(-6,6,3.2,-3.2,.1,80);
 camera.position.set(0,2.2,15);camera.lookAt(0,1.5,0);
 scene.add(new THREE.HemisphereLight(0xe6f4ff,0x222238,2.6));
 const light=new THREE.DirectionalLight(0xffffff,3);light.position.set(-3,7,8);scene.add(light);
 const root=new THREE.Group();root.position.set(-2.8,-1.3,0);scene.add(root);
 let mixer=null,model=null,clips={},current='',last=performance.now(),lastAttack=-1;
 const clock=new THREE.Clock();
 const loader=new GLTFLoader();
 loader.load('https://threejs.org/examples/models/gltf/Soldier.glb',gltf=>{
   model=gltf.scene;
   // Soldier.glb is an actual skinned human model with authored idle/walk/run clips.
   const box=new THREE.Box3().setFromObject(model),size=box.getSize(new THREE.Vector3());
   model.scale.setScalar(3.8/Math.max(size.y,.1));
   const fitted=new THREE.Box3().setFromObject(model);
   model.position.y=-fitted.min.y;
   model.rotation.y=Math.PI/2;
   root.add(model);
   mixer=new THREE.AnimationMixer(model);
   for(const clip of gltf.animations)clips[clip.name.toLowerCase()]=mixer.clipAction(clip);
   if(clips.idle){clips.idle.play();current='idle'}
   canvas.style.opacity='1';
   const old=document.getElementById('hero3d');if(old)old.style.opacity='0';
   window.eclipseRiggedHeroReady=true;
 },undefined,e=>{console.warn('ECLIPSE rigged hero unavailable; keeping original hero.',e);canvas.style.display='none'});
 function tick(t){
   requestAnimationFrame(tick);
   if(!model)return;
   const dt=Math.min(.06,clock.getDelta());
   const active=window.eclipseAttackState&&t-window.eclipseAttackState.start<window.eclipseAttackState.duration;
   const attack=active?Math.min(1,(t-window.eclipseAttackState.start)/window.eclipseAttackState.duration):0;
   const desired=active&&clips.run?'run':'idle';
   if(desired!==current&&clips[desired]){const prev=clips[current];const next=clips[desired];next.reset().fadeIn(.16).play();if(prev)prev.fadeOut(.16);current=desired}
   if(mixer)mixer.update(dt);
   // Lean into attack and spring back; authored skeletal animation drives the limbs.
   const impulse=active?Math.sin(Math.PI*attack):0;
   root.rotation.y=.1+impulse*.12;
   root.position.x=-2.8+impulse*.14;
   root.position.y=-1.3+Math.sin(t/550)*.016;
   renderer.render(scene,camera);
 }
 requestAnimationFrame(tick);
}
