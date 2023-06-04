import React, { useCallback, ForwardedRef } from "react";
import { Dialog } from "./Dialog";

interface SharkDialogProps {
  style?: React.CSSProperties;
}

export const SharkDialog = React.forwardRef(function (
  props: SharkDialogProps,
  ref: ForwardedRef<HTMLDialogElement>
) {
  const { style } = props;

  const onClose = useCallback(() => {
    if (typeof ref !== "function") {
      ref?.current?.close();
    }
  }, [ref]);

  const PreventTransmission = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
    },
    []
  );

  return (
    <Dialog
      ref={ref}
      onClick={onClose}
      style={{ ...style, ...styles.container }}
    >
      <div onClick={PreventTransmission}>
        <div style={styles.closeBtn}>
          <button onClick={onClose}>X</button>
        </div>
        <img src="https://64.media.tumblr.com/cfd039730669f89c064f69e57e0877af/tumblr_nj6ipiNACJ1t8s6eeo1_500.gifv" />
      </div>
    </Dialog>
  );
});

const styles: Record<string, React.CSSProperties> = {
  container: {
    borderRadius: 25,
  },
  closeBtn: {
    textAlign: "end",
  },
};
