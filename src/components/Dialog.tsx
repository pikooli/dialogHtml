import React, { ForwardedRef } from "react";

export const Dialog = React.forwardRef(function (
  props: {
    children: React.ReactNode;
    onClick?: () => void;
    style?: React.CSSProperties;
  },
  ref: ForwardedRef<HTMLDialogElement>
) {
  const { children, onClick, style } = props;

  return (
    <dialog ref={ref} onClick={onClick} style={style}>
      {children}
    </dialog>
  );
});
