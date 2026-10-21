import { defineMonacoSetup } from "@slidev/types";

export default defineMonacoSetup(() => {
  return {
    editorOptions: {
      renderSideBySide: false, readonly: true,
      inDiffEditor: true,
      fontSize: 16
    },
  };
});
