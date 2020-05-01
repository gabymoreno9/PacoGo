import range from 'lodash/range'
import React from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import FullNodeTheme from 'react-sortable-tree-theme-minimal'
import { DndProvider } from 'react-dnd'
import { SortableTreeWithoutDndContext as SortableTree } from 'react-sortable-tree'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AutorenewIcon from '@material-ui/icons/Autorenew';



import Navbar from "./components/Navbar"
import ExternalNode from "./components/ExternalNode"
import TrashNode from "./components/TrashNode"
import Paco from './shiba.svg'
import Pizza from './pizza.svg'
import Home from './home-run.svg'


import 'react-sortable-tree/style.css'
import './App.css'


function getDirectionForNode (node) {
  if (node.title === "Up") { return { x: 0, y: -100 }}
  else if (node.title === "Down") { return { x: 0, y: 100 }}
  else if (node.title === "Left") { return { x: -100, y: 0 }}
  else if (node.title === "Right") { return { x: 100, y: 0 }}
}


class App extends React.Component {
  state = {
    pacoMoving: false,
    pacoY: 320,
    pacoX: 10,
    treeData: []
  }

  makePacoMove = movements => {
    if (movements.length === 0) {
      this.setState ({ pacoMoving: false })
    }
    else {
      let movement = getDirectionForNode(movements[0])
      let newPosition = {
        x: this.state.pacoX + movement.x,
        y: this.state.pacoY + movement.y
      }

      if (newPosition.x < 0 || newPosition.x > 400 || 
          newPosition.y < 0 || newPosition.y > 400) {
          newPosition = { x: this.state.pacoX, y: this.state.pacoY }
      }

      this.setState({
        pacoMoving: true,
        pacoX: newPosition.x,
        pacoY: newPosition.y
      })
      
      setTimeout(() => this.makePacoMove(movements.slice(1)), 1000)
    }
  }

  render = () =>
    <div className="App" style={{ height: "100vw", display: 'flex', flexDirection: 'column' }}>
      <Navbar />
  
      <div style={{ display: "flex", flexGrow: 1 }}>
        <div className="sidebar" style={{ width: 300 }}>
          <DndProvider backend={HTML5Backend}>
            <div className="draggables">
              <ExternalNode node={{ title: 'Up', color: 'green' }} />
              <ExternalNode node={{ title: 'Down', color: 'orange' }} />
              <ExternalNode node={{ title: 'Left', color: 'red' }} />
              <ExternalNode node={{ title: 'Right', color: 'blue' }} />
              <TrashNode/>
            </div>
            <div style={{ height: '100%' }}>
              <SortableTree
                dndType="externalNode"
                theme={FullNodeTheme}
                scaffoldBlockPxWidth={20}
                treeData={this.state.treeData}
                canNodeHaveChildren={() => false}
                onChange={treeData => this.setState({ treeData })} />
            </div>
          </DndProvider>
        </div>
        <div className="content" style={{ flexGrow: 1 }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                endIcon={<PlayArrowIcon />}
                onClick={() => this.makePacoMove(this.state.treeData)}>
                Make Paco GO!
              </Button>

              <Button
                variant="contained"
                color="primary"
                endIcon={<AutorenewIcon />}
                onClick={() => this.setState({ pacoY: 320, pacoX: 10 })}>
                Reset Paco
              </Button>
            </div>

            <div className="grid" style={{ position: 'relative' }}>
              <img src={Pizza} style={{ position: 'absolute', width: 70, top: 320, left: 220 }} />
              <img src={Home} style={{ position: 'absolute', width: 70, top: 15, left: 220 }} />
              <img src={Paco}
                   className={this.state.pacoMoving ? "paco paco-move" : "paco"}
                   style={{ position: 'absolute', width: 70, left: this.state.pacoX, top: this.state.pacoY }} />

              {range(4).map(i =>
                <div className="row" key={i}>
                  {range(4).map(j => <div className="column" key={j}></div>)}
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
}

export default App
