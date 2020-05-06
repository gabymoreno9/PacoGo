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
    // const icon = this.props.node.icon;

    return connectDragSource(
      <div style={{
          display: 'inline-block',
          padding: '3px 5px',
          backgroundColor: node.color,
          color: 'white',
          marginRight: 10,
          cursor: 'move',
        }}>
        {node.title}
        {node.icon}
      </div>,
      { dropEffect: 'copy' }
    )
  }
}

externalNodeBaseComponent.propTypes = {
  node: PropTypes.shape({ title: PropTypes.string, color: PropTypes.string }).isRequired,
  connectDragSource: PropTypes.func.isRequired,
};

export default DragSource(
  externalNodeType,
  externalNodeSpec,
  externalNodeCollect
)(externalNodeBaseComponent);