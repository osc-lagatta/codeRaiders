import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Hero } from "~/components/site/hero/hero";

export default component$(() => {
  return (
    <>
      <Hero />
      <div class="flex justify-center py-12 w-full">
        {/* <Link href="/members/dashboard">

          <ButtonAction label="Dashboard" />
        </Link> */}

        <a href="/members/dashboard">DASHBOARD</a>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Hive',
  meta: [
    {
      name: 'description',
      content: 'Welcome to Qwik Hive',
    },
  ],
};
