import range from 'lodash/range'
import React from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import FullNodeTheme from 'react-sortable-tree-theme-minimal'
import { DndProvider } from 'react-dnd'
import { SortableTreeWithoutDndContext as SortableTree } from 'react-sortable-tree'

import Navbar from "./components/Navbar"
import ExternalNode from "./components/ExternalNode"
import Paco from './shiba.svg'
import Pizza from './pizza.svg'
import Home from './home-run.svg'


import 'react-sortable-tree/style.css'
import './App.css'


class App extends React.Component {
  state = {
    treeData: []
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
          <div className="grid" style={{ position: 'relative' }}>
            <img src={Paco} className="paco" style={{ position: 'absolute', width: 70, top: 320, left: 10 }} />
            <img src={Pizza} style={{ position: 'absolute', width: 70, top: 320, left: 220 }} />
            <img src={Home} style={{ position: 'absolute', width: 70, top: 15, left: 220 }} />

            {range(4).map(i =>
              <div className="row">
                {range(4).map(j => <div className="column"></div>)}
              </div>)}
          </div>
        </div>
      </div>
    </div>
}

export default App
