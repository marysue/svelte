// requires npm install -D sass and npm install -D svelte-preprocess
import sveltePreprocess from "svelte-preprocess";
const config = {
    preprocess: sveltePreprocess({
        scss: {
            prependData: '@use "src/styles/variables.scss";'
        }
    })
}

export default config;