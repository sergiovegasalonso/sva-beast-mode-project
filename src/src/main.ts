import './app.scss';
import App from './App.svelte';
import * as bootstrap from 'bootstrap';

const app = new App({
	target: document.getElementById('app')
});

export default app;
