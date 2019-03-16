import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

const classnames = (...args) => args.join(' ')
const getClassName = el => (el.props && el.props.className) || ''

export const StyledChildren = ({
  className,
  children,
  ...props
}) => {
  const styledChildren = React.Children.toArray(children)
    .map(child => React.cloneElement(child, {
      className: classnames(getClassName(child), className)
    }))
  return (
    <>
      {styledChildren}
    </>
  )
}

const Space = styled(StyledChildren)(space)

Space.propTypes = space.propTypes

export default Space
