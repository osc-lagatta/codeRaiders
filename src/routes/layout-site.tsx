import { component$, Slot } from '@builder.io/qwik';
import { loader$ } from '@builder.io/qwik-city';
import { Footer } from "~/components/site/footer/footer";

import { Navigation} from "~/components/site/navigation/navigation";

export const useServerTimeLoader = loader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  // const serverTime = useServerTimeLoader();
  return (
    <>
      <main>
        <Navigation />
        <section>
          <Slot />
        </section>
      </main>
      <Footer />
    </>
  );
});
