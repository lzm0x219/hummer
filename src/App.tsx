import { type Component } from "solid-js";

const App: Component = () => {
  return (
    <div data-tauri-drag-region={true}>
      <div
        data-tauri-drag-region={true}
        class="fixed top-0 left-0 right-0 flex h-[40px] bg-blue-500"
      />
      <div class="h-[400px] pt-[40px]">data-tauri-drag-region</div>
    </div>
  );
};

export default App;
