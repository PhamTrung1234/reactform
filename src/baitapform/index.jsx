import React, { Component } from 'react'
import Validation from './validation'
import Table from './table'
import Search from './Search'

export default class BaiTapForm extends Component {
  render() {
    return (
      <>
        <Search/>
        <Validation/>
        <Table/>
      </>
    )
  }
}
