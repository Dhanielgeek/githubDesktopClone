import React from 'react'
import PropsContainer from './PropsContainer'
import coAuthor from '../assets/co-authoring.png'
import prChecks from '../assets/pr-checks.png'
import syntax from '../assets/syntax-highlighting.png'

const Container = () => {
  return (
    <div className='propsContainer'>
      <PropsContainer img={coAuthor} h3="Attribute commits with collaborators easily" text="Quickly add co-authors to your commit. Great for pairing and excellent for sending a little love/credit to that special someone who helped fix that gnarly bug of yours. See the attribution on the history page, undo an accidental attribution, and " a="see the co-authors on github.com"/>
      <PropsContainer img={prChecks} Fdir="row-reverse" h3="Checkout branches with pull requests and view CI statuses" text="See all open pull requests for your repositories and check them out as if they were a local branch, even if they're from upstream branches or forks. See which pull requests pass commit status checks, too!"/>
      <PropsContainer img={syntax} h3="Syntax highlighted diffs" text="The new GitHub Desktop supports syntax highlighting when viewing diffs for a variety of different languages."/>
    </div>
  )
}

export default Container