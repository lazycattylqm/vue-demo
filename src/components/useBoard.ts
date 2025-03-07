import { onMounted, onUpdated, ref } from 'vue';
export const useBoard = () => {
    const message = ref('Hello, Vue 3.0');
    onMounted(() => {
        console.log('Board mounted');
    });
    onUpdated(() => {
        console.log('Board updated', times.value);
    });
    const times = ref(0);
    return { message, times };
}
