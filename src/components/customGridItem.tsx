import React from 'react'

const CustomGridItem = React.forwardRef(
  (
    {
      style,
      className,
      onMouseDown,
      onMouseUp,
      onTouchEnd,
      children,
    }: React.HTMLProps<HTMLDivElement>,
    ref,
  ) => {
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
  },
)

CustomGridItem.displayName = 'CustomGridItem'

export default CustomGridItem
