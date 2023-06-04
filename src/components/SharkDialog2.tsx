import React, { useCallback, ForwardedRef, useRef } from "react";
import { Dialog } from "./Dialog";

interface SharkDialog2Props {
  style?: React.CSSProperties;
}

export const SharkDialog2 = React.forwardRef(function (
  props: SharkDialog2Props,
  ref: ForwardedRef<HTMLDialogElement>
) {
  const { style } = props;
  const ref2 = useRef<HTMLDialogElement>(null);

  const onClose = useCallback(() => {
    if (typeof ref !== "function") {
      ref?.current?.close();
    }
  }, [ref]);

  const onCloseSecond = useCallback(() => {
    ref2.current?.close();
  }, [ref2]);

  const onClickBackground = useCallback(() => {
    onClose();
    onCloseSecond();
  }, [onClose, onCloseSecond]);

  const onOpenSecondDialog = useCallback(() => {
    ref2.current?.showModal();
  }, [ref2]);

  const PreventTransmission = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
    },
    []
  );

  return (
    <>
      <Dialog
        ref={ref}
        onClick={onClickBackground}
        style={{ ...style, ...styles.container }}
      >
        <div onClick={PreventTransmission}>
          <div style={styles.closeBtn}>
            <button onClick={onClose}>X</button>
          </div>
          <img src="https://64.media.tumblr.com/cfd039730669f89c064f69e57e0877af/tumblr_nj6ipiNACJ1t8s6eeo1_500.gifv" />
          <button onClick={onOpenSecondDialog}>Open Second Dialog</button>
        </div>
      </Dialog>
      <Dialog
        ref={ref2}
        onClick={onClickBackground}
        style={{ ...style, ...styles.container }}
      >
        <div onClick={PreventTransmission}>
          <div style={styles.closeBtn}>
            <button onClick={onCloseSecond}>X</button>
          </div>
          <img src="https://64.media.tumblr.com/cfd039730669f89c064f69e57e0877af/tumblr_nj6ipiNACJ1t8s6eeo1_500.gifv" />
          <img src="https://64.media.tumblr.com/cfd039730669f89c064f69e57e0877af/tumblr_nj6ipiNACJ1t8s6eeo1_500.gifv" />
        </div>
      </Dialog>
    </>
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
