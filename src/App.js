import React from 'react'
import { SortableTreeWithoutDndContext as SortableTree } from 'react-sortable-tree'
import FullNodeTheme from 'react-sortable-tree-theme-full-node-drag'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Navbar from "./components/Navbar"
import ExternalNode from "./components/ExternalNode"

import 'react-sortable-tree/style.css'
import './App.css'


class App extends React.Component {
  state = {
    treeData: [{ title: 'Mama Rabbit' }, { title: 'Papa Rabbit' }]
  }

  render = () =>
    <div className="App">
      <Navbar />
  
      <DndProvider backend={HTML5Backend}>
        <ExternalNode node={{ title: 'Baby Rabbit' }} />← drag

        <div style={{ height: 400 }}>
          <SortableTree
            theme={FullNodeTheme}
            dndType="externalNode"
            treeData={this.state.treeData}
            onChange={treeData => this.setState({ treeData })} />
        </div>
      </DndProvider>
    </div>
}

export default App
