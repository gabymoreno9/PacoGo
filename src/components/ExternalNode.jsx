import React from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'

const externalNodeType = 'externalNode'
const externalNodeSpec = {
  beginDrag: componentProps => ({ node: { ...componentProps.node } }),
};
const externalNodeCollect = (connect) => ({
  connectDragSource: connect.dragSource()
});

class externalNodeBaseComponent extends React.Component {
  render() {
    const { connectDragSource, node } = this.props;

    return connectDragSource(
      <div
        style={{
          display: 'inline-block',
          padding: '3px 5px',
          background: 'blue',
          color: 'white',
        }}
      >
        {node.title}
      </div>,
      { dropEffect: 'copy' }
    )
  }
}

externalNodeBaseComponent.propTypes = {
  node: PropTypes.shape({ title: PropTypes.string }).isRequired,
  connectDragSource: PropTypes.func.isRequired,
};

export default DragSource(
  externalNodeType,
  externalNodeSpec,
  externalNodeCollect
)(externalNodeBaseComponent);