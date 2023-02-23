import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './logo.css?inline';


export const Logo = component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="flex justify-start items-center">
      <div>
        <img src={"/img/hive-logo.svg"} alt="Turner & Townsend" />
      </div>
      <div>
        <div class="text-lg logo-title text-gray-800">Turner & Townsend</div>
        <div class="-mt-2 text-[10pt] logo-subtitle text-gray-500 italic">Qwik Demo</div>
      </div>
    </div>
  );
});
