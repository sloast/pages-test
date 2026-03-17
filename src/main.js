import Alpine from 'alpinejs'
import './style.css'
import setupShaderCanvas from './runshader'

window.setupShaderCanvas = setupShaderCanvas;

window.Alpine = Alpine
Alpine.start()
