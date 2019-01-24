//This will need work to convert to UL for routing
import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import GitInit from './components/GitInit'
import GitClone from './components/GitClone'
import GitStatus from './components/GitStatus'
import GitPull from './components/GitPull'
import GitAdd from './components/GitAdd'
import GitStash from './components/GitStash'
import GitCommit from './components/GitCommit'
import GitReset from './components/GitReset'
import GitPush from './components/GitPush'
import GitQuestion from './components/GitQuestion'
import Nav from './components/Nav'


const Routes = () => (
   <Router>
      <Nav/>
      <Switch key = "root">
         <Route key = "home" component = {Home} title = "GitGoing" initial = {true} />
         <Route key = "gitInit" component = {GitInit} title = "Git Init"/>
         <Route key = "gitClone" component = {GitClone} title = "Git Clone" />
         <Route key = "gitStatus" component = {GitStatus} title = "Git Status" />
         <Route key = "gitPull" component = {GitPull} title = "Git Pull" />  
         <Route key = "gitAdd" component = {GitAdd} title = "Git Add" />
         <Route key = "gitStash" component = {GitStash} title = "Git Stash" />
         <Route key = "gitCommit" component = {GitCommit} title = "Git Commit" />
         <Route key = "gitReset" component = {GitReset} title = "Git Reset" />
         <Route key = "gitPush" component = {GitPush} title = "Git Push" />
         <Route key = "gitQuestion" component = {GitQuestion} title = "Git Question" />
      </Switch>
   </Router>
)
export default Routes