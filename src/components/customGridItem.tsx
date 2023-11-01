import React from 'react'

const CustomGridItem = React.forwardRef(function CustomGridItemComponent(
  {
    style,
    className,
    onMouseDown,
    onMouseUp,
    onTouchEnd,
    children,
  }: React.HTMLProps<HTMLDivElement>,
  ref,
) {
  return (
    <div
      style={{ ...style }}
      className={className}
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchEnd={onTouchEnd}
    >
      {children}
    </div>
  )
})

export default CustomGridItem
