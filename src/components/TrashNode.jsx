import React from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const externalNodeType = 'externalNode'
const externalNodeSpec = {
  drop: (props, monitor) => ({ ...monitor.getItem(), treeId: 'trash' }),
};
const externalNodeCollect = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver({ shallow: true })
});

class externalNodeBaseComponent extends React.Component {
  render() {
    const { connectDropTarget, isOver } = this.props;

    return connectDropTarget(
      <div style={{
          display: 'inline-block',
          padding: '3px 5px',
          color: 'black',
          marginRight: 10,
          verticalAlign: 'middle',
        }}>
        <DeleteForeverIcon />
      </div>
    )
  }
}

externalNodeBaseComponent.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired
};

export default DropTarget(
  externalNodeType,
  externalNodeSpec,
  externalNodeCollect
)(externalNodeBaseComponent);