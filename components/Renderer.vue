<template>
  <div ref='canvas' class='renderer'></div>
</template>
<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default {
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      model: null,
      lightIntensity: .58,
      fps: 30,
      lastFrame: 0
    }
  },
  props: {
    modelname: {
      required: true
    }
  },
  mounted() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 25, (window.innerWidth / 2) / window.innerHeight, 0.01, 10000 );

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, gammaInput: true, gammaOutput: true });
    this.renderer.setSize( window.innerWidth / 2, window.innerHeight );
    this.$refs.canvas.appendChild( this.renderer.domElement )

    const loader = new GLTFLoader();

    loader.load(
      // resource URL
      'model/' + this.modelname + '.gltf',
      // called when the resource is loaded
      ( gltf ) => {
        this.model = gltf.scene
        this.model.scale.set(.04, .04, .04)
        this.scene.add( this.model)
        this.camera.position.set(35, 35, 35);
        this.camera.lookAt(0, 0, 0)
      }
    );

    const directionalLight = new THREE.DirectionalLight( 0xffffff, 3.1 );
    directionalLight.position.set(.6, 1, 1)
    const counterLight = new THREE.DirectionalLight( 0xffffff, 1 );
    counterLight.position.set(-.6, -1, -1)
    this.scene.add( directionalLight, counterLight );

    this.camera.lookAt(0, 0, 0)
    this.lastFrame = Date.now()
    this.animate();
  },
  methods: {

    animate() {

      if (Date.now() - this.lastFrame > 1000 / this.fps) {
        this.renderer.render( this.scene, this.camera );
        if (this.model) {
          this.model.rotation.y += .02
        }

        this.lastFrame = Date.now()
      }
      requestAnimationFrame( this.animate );
    }


  }

}
</script>
<style lang="sass">


.renderer
  @include center
</style>
