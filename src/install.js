import HelloWorld from "./components/HelloWorld.vue";
import Button from "./components/vue-button.vue";

const HelloWorldSimple={

    install(Vue){
        Vue.component("hello-world",HelloWorld)
        Vue.component("vue-button",Button)
    }
};

if(typeof window!==undefined && window.Vue){
    window.Vue.use(HelloWorldSimple)
}
export default HelloWorldSimple