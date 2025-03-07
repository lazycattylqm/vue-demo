import { defineComponent } from 'vue';
import { useBoard } from './useBoard'; // Adjust the path as necessary

const Board = defineComponent({
  setup() {
    const { message, times } = useBoard();
    return () => (
      <>
        <h1>Board</h1>
        <div>
          {message.value} {times.value}
        </div>
        <button onClick={() => times.value++}>click me</button>
      </>
    );
  },
});
export default Board;
