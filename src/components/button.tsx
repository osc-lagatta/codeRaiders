
import { component$, useTask$, useSignal, useStore, $} from '@builder.io/qwik';

interface ItemProps {
  handleFunction: any;
}
export const Button = component$((props: ItemProps) => {


  // const message = useSignal('Signal None');
  const state = useStore({ message: 'State None', color: 'No color'});

  const handleClick = $(()=> {
    state.message = 'Button clicked';
    props.handleFunction();
  });

  useTask$(({track}) => {
    track(state);
    console.log(state.message)
    // const timeout = setTimeout(()=> {
    //   console.log(message.value)
    // }, 5000);
    //
    // return clearTimeout(timeout);
  });


  return (
    <button onClick$={handleClick} className="bg-sky-500 py-2 px-4 rounded-sm text-white hover:bg-sky-400">
      Click Me
    </button>
  )
});