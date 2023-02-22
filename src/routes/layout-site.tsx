import { component$, Slot } from '@builder.io/qwik';
import { loader$ } from '@builder.io/qwik-city';

import { Navigation} from "~/components/navigation/navigation";

export const useServerTimeLoader = loader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const serverTime = useServerTimeLoader();
  return (
    <>
      <main>
        <Navigation />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <div class="bg-gray-900 text-white py-14 text-center">
          This is my footer
        </div>
      </footer>
    </>
  );
});
