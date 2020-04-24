import React from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import FullNodeTheme from 'react-sortable-tree-theme-minimal'
import { DndProvider } from 'react-dnd'
import { SortableTreeWithoutDndContext as SortableTree } from 'react-sortable-tree'

import Navbar from "./components/Navbar"
import ExternalNode from "./components/ExternalNode"

import 'react-sortable-tree/style.css'
import './App.css'


class App extends React.Component {
  state = {
    treeData: [{ title: 'Direction' }, { title: 'Action' }]
  }

  render = () =>
    <div className="App" style={{ height: "100vw", display: 'flex', flexDirection: 'column' }}>
      <Navbar />
  
      <div style={{ display: "flex", flexGrow: 1 }}>
        <div className="sidebar" style={{ width: 300 }}>
          <DndProvider backend={HTML5Backend}>
            <ExternalNode node={{ title: 'Move Forward' }} />← drag<br />
            <ExternalNode node={{ title: 'Bark' }} />← drag


            <div style={{ height: '100%' }}>
              <SortableTree
                theme={FullNodeTheme}
                dndType="externalNode"
                treeData={this.state.treeData}
                onChange={treeData => this.setState({ treeData })} />
            </div>
          </DndProvider>
        </div>

        <div className="content" style={{backgroundColor: 'blue', flexGrow: 1 }}>Paco go here</div>
      </div>
    </div>
}

export default App
